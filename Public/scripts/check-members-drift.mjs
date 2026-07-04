#!/usr/bin/env node
/**
 * check-members-drift.mjs — 名簿正本 → membersページ の乖離チェック＆骨組み生成（L-02）
 *
 * 正本（一次）: rules/agent-routing-table.md（稼働24名＋「## 移行期間 alias」=卒業9名。COS Tikiは含まない）
 * 反映先（データ正本）: src/data/members.ts（departments=現役 / graduates=卒業 / upcoming=募集中）
 *   ※ src/pages/members/index.astro は members.ts を import して描画するだけ。
 *
 * 「組織が変わったら」の運用:
 *   1. agent-routing-table.md を先に更新（追加・卒業・改名・異動）
 *   2. node scripts/check-members-drift.mjs --scaffold   ← 差分＋新メンバーの貼り付け用スタブを出力
 *   3. スタブを members.ts に貼り、キャラ文（personality/前職 等）を人 or AI が埋める
 *   4. 卒業者は departments[] → graduates[] へ移す
 *   5. node scripts/check-members-drift.mjs で「乖離なし」を確認 → PR
 *
 * 突合内容:
 *   1. 正本の稼働メンバーが members.ts の現役(departments)に全員いるか（不在=MISSING）
 *   2. members.ts で現役扱いのIDが正本で卒業(alias)になっていないか（=SHOULD_GRADUATE）
 *   3. members.ts のIDが正本に存在するか（=UNKNOWN_ID）
 *   4. 正本の卒業メンバーが members.ts の卒業(graduates)にいるか（不在=MISSING_GRADUATE）
 *   5. members.ts の卒業に正本の卒業以外のIDが紛れていないか（=EXTRA_GRADUATE）
 *   6. Tiki（exec-cos）が現役に存在するか（不在=TIKI_MISSING）
 *
 * 差分0なら exit 0、差分ありなら一覧を出力して exit 1。
 * 使い方:
 *   node scripts/check-members-drift.mjs            通常チェック
 *   node scripts/check-members-drift.mjs --json     機械可読出力
 *   node scripts/check-members-drift.mjs --scaffold  新メンバーの貼り付け用スタブも出力
 *
 * 【office. 側も同期対象】名簿変更時は support-corduroy の
 *   apps/office/lib/agent-char-map.ts と apps/office/components/pixel-office/office-config.ts も
 *   更新する（memory: feedback-office-roster-sync）。本スクリプトの対象は members ページのみ。
 */

import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 正本パス: Phase 6 移行後は ~/.claude/rules/ の symlink（→ corduroy-claude repo）が現行。
// 旧 Dropbox パスは廃止済み。環境変数 AGENT_ROUTING_TABLE で上書き可（CI等）。
const ROUTING_TABLE_PATH =
  process.env.AGENT_ROUTING_TABLE ||
  join(homedir(), '.claude/rules/agent-routing-table.md');
const MEMBERS_DATA_PATH = join(__dirname, '../src/data/members.ts');

const WANT_JSON = process.argv.includes('--json');
const WANT_SCAFFOLD = process.argv.includes('--scaffold');

// サイト側にいるが正本の名簿対象外のID（Tiki=COSは24名に含まない）
const EXCLUDED_SITE_IDS = new Set(['exec-cos']);

// エージェントIDの形（部門プレフィックス付きkebab-case）
const ID_PATTERN =
  /`((?:exec|sales|cs|marketing|dev|product|accounting|hr|legal|ops|research)-[a-z][a-z0-9-]*)`/g;

// 新メンバー scaffold 時の「所属部門の当たり」（例外あり: research-→経営企画室 / ops-secrets-keeper→法務部）
const PREFIX_DEPT_HINT = {
  'exec-': '経営企画室 (key: exec)',
  'research-': '経営企画室 (key: exec)',
  'marketing-': 'マーケ部 (key: marketing)',
  'dev-': '開発部 (key: dev)',
  'sales-': '営業部 (key: sales)',
  'cs-': '顧客成功部 (key: cs)',
  'product-': 'プロダクト部 (key: product)',
  'ops-': '業務推進部 (key: ops) ※秘密管理系は法務部の可能性',
  'accounting-': '経理部 (key: accounting)',
  'legal-': '法務部 (key: legal)',
  'hr-': '人事総務部（現在は該当部門なし／Tiki直の可能性）',
};

function extractIds(text) {
  const ids = new Set();
  for (const m of text.matchAll(ID_PATTERN)) ids.add(m[1]);
  return ids;
}

// --- 1. 正本のパース ---
let routingTable;
try {
  routingTable = readFileSync(ROUTING_TABLE_PATH, 'utf8');
} catch (e) {
  console.error(`ERROR: 正本が読めません: ${ROUTING_TABLE_PATH}\n${e.message}`);
  console.error('（Phase 6 移行後の現行パスは ~/.claude/rules/agent-routing-table.md。symlink 未設置の端末では AGENT_ROUTING_TABLE で指定してください）');
  process.exit(2);
}

const aliasHeaderIdx = routingTable.indexOf('## 移行期間 alias');
if (aliasHeaderIdx === -1) {
  console.error('ERROR: 正本に「## 移行期間 alias」セクションが見つかりません（フォーマット変更の可能性）');
  process.exit(2);
}
const aliasSection = routingTable.slice(aliasHeaderIdx);

// alias表の「旧エージェント」列（行頭が | 旧名 | `id` | 形式）だけを卒業IDとして拾う
const graduatedCanonical = new Set();
for (const line of aliasSection.split('\n')) {
  const m = line.match(/^\|[^|]+\|\s*`([a-z][a-z0-9-]*)`\s*\|/);
  if (m) graduatedCanonical.add(m[1]);
}

// 稼働 = 文書全体に登場するID − 卒業ID
const allCanonical = extractIds(routingTable);
const activeCanonical = new Set(
  [...allCanonical].filter((id) => !graduatedCanonical.has(id)),
);

// --- 2. データ正本(members.ts)のパース ---
let data;
try {
  data = readFileSync(MEMBERS_DATA_PATH, 'utf8');
} catch (e) {
  console.error(`ERROR: members.ts が読めません: ${MEMBERS_DATA_PATH}\n${e.message}`);
  process.exit(2);
}

const depIdx = data.indexOf('export const departments');
const gradIdx = data.indexOf('export const graduates');
const upcIdx = data.indexOf('export const upcoming');
if (depIdx === -1 || gradIdx === -1) {
  console.error('ERROR: members.ts に `export const departments` / `export const graduates` が見つかりません（構造変更の可能性）');
  process.exit(2);
}

const activeRegion = data.slice(depIdx, gradIdx);
const graduatesRegion = data.slice(gradIdx, upcIdx === -1 ? undefined : upcIdx);

const idRe = /id:\s*'([a-z][a-z0-9-]*)'/g;
const siteActiveRaw = new Set([...activeRegion.matchAll(idRe)].map((m) => m[1]));
const siteActive = new Set([...siteActiveRaw].filter((id) => !EXCLUDED_SITE_IDS.has(id)));
const siteGraduates = new Set([...graduatesRegion.matchAll(idRe)].map((m) => m[1]));

// --- 3. 突合 ---
const issues = [];
if (!siteActiveRaw.has('exec-cos')) {
  issues.push({ type: 'TIKI_MISSING', id: 'exec-cos', detail: 'Tiki（COS）が現役に不在' });
}
for (const id of activeCanonical) {
  if (!siteActive.has(id)) {
    issues.push({ type: 'MISSING', id, detail: '正本では稼働中だが members.ts の現役に不在' });
  }
}
for (const id of siteActive) {
  if (graduatedCanonical.has(id)) {
    issues.push({ type: 'SHOULD_GRADUATE', id, detail: 'members.ts で現役扱いだが正本では卒業（alias）→ graduates[] へ移す' });
  } else if (!activeCanonical.has(id)) {
    issues.push({ type: 'UNKNOWN_ID', id, detail: '正本に存在しないID' });
  }
}
for (const id of graduatedCanonical) {
  if (!siteGraduates.has(id)) {
    issues.push({ type: 'MISSING_GRADUATE', id, detail: '正本では卒業だが members.ts の卒業に不在' });
  }
}
for (const id of siteGraduates) {
  if (!graduatedCanonical.has(id)) {
    issues.push({
      type: 'EXTRA_GRADUATE',
      id,
      detail: activeCanonical.has(id)
        ? '正本では稼働中のIDが卒業に紛れている'
        : '正本に存在しないIDが卒業に紛れている',
    });
  }
}

// --- 4. 新メンバー scaffold（--scaffold 時のみ） ---
function deptHint(id) {
  const prefix = Object.keys(PREFIX_DEPT_HINT).find((p) => id.startsWith(p));
  return prefix ? PREFIX_DEPT_HINT[prefix] : '（部門不明・要確認）';
}
function scaffoldStub(id) {
  return `    {
      id: '${id}',
      name: 'TODO: キャラ名', // agents/${id}.md の自己名乗り / characters.json を参照
      role: 'TODO: 役割',
      skills: ['TODO', 'TODO', 'TODO'],
      personality: 'TODO: 性格・人となり',
      philosophy: 'TODO',
      hobby: 'TODO',
      party: 'TODO: 飲み会での役回り',
      team_role: 'TODO: 社内での役回り',
      previous_job: 'TODO: 前職ストーリー（元ネタは agents/${id}.md 参照）',
      emoji: '🐣',
    },`;
}

// --- 5. 出力 ---
const missingNew = issues.filter((i) => i.type === 'MISSING').map((i) => i.id);
const summary = {
  canonical: { active: activeCanonical.size, graduated: graduatedCanonical.size },
  site: { active: siteActive.size, graduated: siteGraduates.size },
  issues,
};

if (WANT_JSON) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(
    `正本: 稼働${summary.canonical.active}名 / 卒業${summary.canonical.graduated}名 | ` +
    `members.ts: 現役${summary.site.active}名（Tiki除く） / 卒業${summary.site.graduated}名`,
  );
  if (issues.length === 0) {
    console.log('✅ 乖離なし');
  } else {
    console.log(`❌ 乖離 ${issues.length} 件:`);
    for (const i of issues) console.log(`  [${i.type}] ${i.id} — ${i.detail}`);
  }

  if (WANT_SCAFFOLD && missingNew.length) {
    console.log('\n── 新メンバーの貼り付け用スタブ（該当部門の members[] に貼り、TODO を埋める）──');
    for (const id of missingNew) {
      console.log(`\n# ${id} → 想定部門: ${deptHint(id)}`);
      console.log(scaffoldStub(id));
    }
    console.log('\n※ キャラ文（性格・前職・趣味等）は正本が無いため自動生成しません。人 or AI が埋めてください。');
    console.log('※ office.（agent-char-map.ts / office-config.ts）も同期対象です（memory: feedback-office-roster-sync）。');
  } else if (WANT_SCAFFOLD) {
    console.log('\n（新規メンバーなし＝scaffold対象なし）');
  }
}

process.exit(issues.length === 0 ? 0 : 1);
