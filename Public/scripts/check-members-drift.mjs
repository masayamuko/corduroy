#!/usr/bin/env node
/**
 * check-members-drift.mjs — 名簿正本とサイトmembersページの乖離チェック（L-02）
 *
 * 正本: agent-routing-table.md（稼働24名＋移行期間alias=卒業9名。COS Tikiは含まない）
 * 対象: src/pages/members/index.astro（departments=現役 / graduates=卒業）
 *
 * 突合内容:
 *   1. 正本の稼働メンバーがサイトの現役セクションに全員いるか（不在=MISSING）
 *   2. サイトで現役扱いのIDが正本で卒業(alias)になっていないか（=SHOULD_GRADUATE）
 *   3. サイトのIDが正本に存在するか（=UNKNOWN_ID）
 *   4. 正本の卒業メンバーがサイトの卒業セクションにいるか（不在=MISSING_GRADUATE）
 *   5. サイトの卒業セクションに正本の卒業以外のID（現役ID・未知ID）が紛れていないか（=EXTRA_GRADUATE）
 *   6. Tiki（exec-cos）が現役セクションに存在するか（不在=TIKI_MISSING）
 *
 * 差分0なら exit 0、差分ありなら一覧を出力して exit 1。
 * 使い方: node scripts/check-members-drift.mjs [--json]
 */

import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROUTING_TABLE_PATH =
  process.env.AGENT_ROUTING_TABLE ||
  join(
    homedir(),
    'Library/CloudStorage/Dropbox/Corduroy.inc/.claude/rules/agent-routing-table.md',
  );
const MEMBERS_PAGE_PATH = join(__dirname, '../src/pages/members/index.astro');

// サイト側にいるが正本の名簿対象外のID（Tiki=COSは24名に含まない）
const EXCLUDED_SITE_IDS = new Set(['exec-cos']);

// エージェントIDの形（部門プレフィックス付きkebab-case）
const ID_PATTERN =
  /`((?:exec|sales|cs|marketing|dev|product|accounting|hr|legal|ops|research)-[a-z][a-z0-9-]*)`/g;

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
  process.exit(2);
}

// alias（卒業）セクションを分離してパース
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

// --- 2. サイト側のパース ---
let page;
try {
  page = readFileSync(MEMBERS_PAGE_PATH, 'utf8');
} catch (e) {
  console.error(`ERROR: membersページが読めません: ${MEMBERS_PAGE_PATH}\n${e.message}`);
  process.exit(2);
}

const gradArrayIdx = page.indexOf('const graduates');
const frontmatterEnd = page.indexOf('\n---', 3);
if (gradArrayIdx === -1) {
  console.error('ERROR: index.astro に `const graduates` が見つかりません');
  process.exit(2);
}

const activeRegion = page.slice(0, gradArrayIdx);
const graduatesRegion = page.slice(gradArrayIdx, frontmatterEnd === -1 ? undefined : frontmatterEnd);

const idRe = /id:\s*'([a-z][a-z0-9-]*)'/g;
const siteActiveRaw = new Set([...activeRegion.matchAll(idRe)].map((m) => m[1]));
const siteActive = new Set([...siteActiveRaw].filter((id) => !EXCLUDED_SITE_IDS.has(id)));
const siteGraduates = new Set([...graduatesRegion.matchAll(idRe)].map((m) => m[1]));

// --- 3. 突合 ---
const issues = [];
if (!siteActiveRaw.has('exec-cos')) {
  issues.push({ type: 'TIKI_MISSING', id: 'exec-cos', detail: 'Tiki（COS）が現役セクションに不在' });
}
for (const id of activeCanonical) {
  if (!siteActive.has(id)) {
    issues.push({ type: 'MISSING', id, detail: '正本では稼働中だがサイトの現役セクションに不在' });
  }
}
for (const id of siteActive) {
  if (graduatedCanonical.has(id)) {
    issues.push({ type: 'SHOULD_GRADUATE', id, detail: 'サイトで現役扱いだが正本では卒業（alias）' });
  } else if (!activeCanonical.has(id)) {
    issues.push({ type: 'UNKNOWN_ID', id, detail: '正本に存在しないID' });
  }
}
for (const id of graduatedCanonical) {
  if (!siteGraduates.has(id)) {
    issues.push({ type: 'MISSING_GRADUATE', id, detail: '正本では卒業だがサイトの卒業セクションに不在' });
  }
}
for (const id of siteGraduates) {
  if (!graduatedCanonical.has(id)) {
    issues.push({
      type: 'EXTRA_GRADUATE',
      id,
      detail: activeCanonical.has(id)
        ? '正本では稼働中のIDが卒業セクションに紛れている'
        : '正本に存在しないIDが卒業セクションに紛れている',
    });
  }
}

// --- 4. 出力 ---
const summary = {
  canonical: { active: activeCanonical.size, graduated: graduatedCanonical.size },
  site: { active: siteActive.size, graduated: siteGraduates.size },
  issues,
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(
    `正本: 稼働${summary.canonical.active}名 / 卒業${summary.canonical.graduated}名 | サイト: 現役${summary.site.active}名（Tiki除く） / 卒業${summary.site.graduated}名`,
  );
  if (issues.length === 0) {
    console.log('✅ 乖離なし');
  } else {
    console.log(`❌ 乖離 ${issues.length} 件:`);
    for (const i of issues) console.log(`  [${i.type}] ${i.id} — ${i.detail}`);
  }
}

process.exit(issues.length === 0 ? 0 : 1);
