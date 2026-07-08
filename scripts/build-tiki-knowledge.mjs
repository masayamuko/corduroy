#!/usr/bin/env node
// Tiki チャットボット用ナレッジ抽出スクリプト
//
// 再生成方法: node scripts/build-tiki-knowledge.mjs
// （料金・サービスページ更新時に実行して差分コミット）
//
// Astroの各ページ（frontmatter + JSX風マークアップ）から人間が読むテキストだけを
// 抜き出し、api/_lib/tiki-knowledge.json に書き出す。Node標準ライブラリのみ使用。

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// 抽出対象ページ（pricing.astro が最優先・全文保持）
const SOURCES = [
  {
    file: 'Public/src/pages/clients/pricing.astro',
    url: 'https://www.corduroy.co.jp/clients/pricing/',
    priority: true,
  },
  {
    file: 'Public/src/pages/services/index.astro',
    url: 'https://www.corduroy.co.jp/services/',
  },
  {
    file: 'Public/src/pages/services/advisory.astro',
    url: 'https://www.corduroy.co.jp/services/advisory/',
  },
  {
    file: 'Public/src/pages/services/ai-renewal.astro',
    url: 'https://www.corduroy.co.jp/services/ai-renewal/',
  },
  {
    file: 'Public/src/pages/services/study/index.astro',
    url: 'https://www.corduroy.co.jp/services/study/',
  },
  {
    file: 'Public/src/pages/services/study/trial.astro',
    url: 'https://www.corduroy.co.jp/services/study/trial/',
  },
  {
    file: 'Public/src/pages/services/study/program.astro',
    url: 'https://www.corduroy.co.jp/services/study/program/',
  },
  {
    file: 'Public/src/pages/contact.astro',
    url: 'https://www.corduroy.co.jp/contact/',
  },
];

const TOTAL_CHAR_BUDGET = 25000;

// 万一ナレッジに紛れ込んではいけない秘密情報のデニーリスト。
// 値はコードに書かない（それ自体が漏えいになる）。再生成時に環境変数で渡す:
//   TIKI_KNOWLEDGE_DENYLIST="値1,値2" node scripts/build-tiki-knowledge.mjs
const FORBIDDEN_SECRETS = (process.env.TIKI_KNOWLEDGE_DENYLIST || '')
  .split(',')
  .map((s) => s.trim())
  .filter((s) => s.length >= 6);

// ---- ヘルパー ----------------------------------------------------------

/** frontmatter（先頭の --- ... ---）を切り出す。無ければ null */
function extractFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : null;
}

/** frontmatter を除いた本文（Layout以下）を返す */
function stripFrontmatter(raw) {
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
}

/** <script>...</script> ブロック（JSON-LDやクライアントJSを含む）を除去 */
function stripScripts(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ');
}

/** <style>...</style> ブロックを除去 */
function stripStyles(html) {
  return html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ');
}

/** HTMLコメント <!-- ... --> を除去 */
function stripComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, ' ');
}

/** すべてのHTMLタグを除去（属性含む） */
function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ');
}

/**
 * Astro/JSXの {式} 埋め込みを可能な範囲で除去する。
 * ネストした {} にも対応するため、深さカウントで走査する。
 */
function stripBraceExpressions(text) {
  let out = '';
  let depth = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') {
      depth++;
      continue;
    }
    if (ch === '}') {
      if (depth > 0) depth--;
      continue;
    }
    if (depth === 0) out += ch;
  }
  return out;
}

/** 主要なHTMLエンティティを復元する */
function decodeEntities(text) {
  const named = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: ' ',
    copy: '©',
    reg: '®',
    trade: '™',
    mdash: '—',
    ndash: '–',
    hellip: '…',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
  };
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-zA-Z]+);/g, (m, name) => (named[name] !== undefined ? named[name] : m));
}

/** 連続空白・空行を圧縮する */
function collapseWhitespace(text) {
  return text
    .split('\n')
    .map((line) => line.replace(/[ \t　]+/g, ' ').trim())
    .filter((line) => line.length > 0)
    .join('\n')
    .replace(/\n{2,}/g, '\n');
}

/**
 * Layoutのtitleを解決する。
 * 1. title="literal" の直接指定
 * 2. title={ident} → frontmatterの const ident = "..." / '...' / `...`
 * 3. title={`...${VAR}...`} → テンプレートリテラル内の ${VAR} を frontmatterのconstで置換
 */
function extractBalancedBraceExpr(text, openIndex) {
  // text[openIndex] === '{' が前提。対応する '}' までを抜き出す
  let depth = 0;
  for (let i = openIndex; i < text.length; i++) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}') {
      depth--;
      if (depth === 0) return text.slice(openIndex + 1, i);
    }
  }
  return null;
}

function resolveTitle(raw) {
  // 1. 直接の文字列リテラル: title="..."
  const literal = raw.match(/\btitle="([^"]+)"/);
  if (literal) return literal[1];

  // 2/3. title={...} 形式（ネストした{}にも対応）
  const braceStart = raw.search(/\btitle=\{/);
  let expr = null;
  if (braceStart !== -1) {
    const openIndex = raw.indexOf('{', braceStart);
    expr = extractBalancedBraceExpr(raw, openIndex);
  }
  if (!expr) return '';

  const frontmatter = extractFrontmatter(raw) || '';

  const resolveIdent = (ident) => {
    const re = new RegExp(
      `const\\s+${ident}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`
    );
    const m = frontmatter.match(re);
    if (!m) return null;
    return m[1] ?? m[2] ?? m[3] ?? null;
  };

  const trimmedExpr = expr.trim();

  // 単純な識別子: title={title}
  if (/^[A-Za-z_$][\w$]*$/.test(trimmedExpr)) {
    const resolved = resolveIdent(trimmedExpr);
    if (resolved !== null) return resolved;
  }

  // テンプレートリテラル: title={`${SERVICE_NAME}｜株式会社コールテン`}
  const tplMatch = trimmedExpr.match(/^`([\s\S]*)`$/);
  if (tplMatch) {
    const filled = tplMatch[1].replace(/\$\{([^}]+)\}/g, (m, inner) => {
      const ident = inner.trim();
      if (/^[A-Za-z_$][\w$]*$/.test(ident)) {
        const resolved = resolveIdent(ident);
        if (resolved !== null) return resolved;
      }
      return '';
    });
    return filled;
  }

  return '';
}

/** 1ページ分のAstroソースから {url, title, text} を作る */
function extractPage(raw) {
  const title = resolveTitle(raw);

  let body = stripFrontmatter(raw);
  body = stripScripts(body);
  body = stripStyles(body);
  body = stripComments(body);
  body = stripTags(body);
  body = stripBraceExpressions(body);
  body = decodeEntities(body);
  body = collapseWhitespace(body);

  return { title, text: body };
}

// ---- メイン --------------------------------------------------------------

function main() {
  const pages = SOURCES.map((src) => {
    const abs = path.join(ROOT, src.file);
    const raw = readFileSync(abs, 'utf8');
    const { title, text } = extractPage(raw);
    return { url: src.url, title, text, priority: !!src.priority, len: text.length };
  });

  // 予算超過なら pricing を最優先で残し、他ページを均等に切り詰める
  const totalChars = pages.reduce((sum, p) => sum + p.len, 0);
  if (totalChars > TOTAL_CHAR_BUDGET) {
    const priorityPages = pages.filter((p) => p.priority);
    const otherPages = pages.filter((p) => !p.priority);
    const priorityChars = priorityPages.reduce((sum, p) => sum + p.len, 0);
    const remainingBudget = Math.max(0, TOTAL_CHAR_BUDGET - priorityChars);
    const perPageLimit = otherPages.length > 0 ? Math.floor(remainingBudget / otherPages.length) : 0;

    for (const p of otherPages) {
      if (p.text.length > perPageLimit) {
        p.text = p.text.slice(0, perPageLimit);
        p.len = p.text.length;
      }
    }
  }

  // パスワード等の秘密情報が万一混入していたら除去する安全弁
  for (const p of pages) {
    for (const secret of FORBIDDEN_SECRETS) {
      if (p.text.includes(secret)) {
        p.text = p.text.split(secret).join('[REDACTED]');
        console.warn(`⚠️  ${p.url} のテキストにデニーリスト該当の秘密情報が含まれていたため除去しました（値はログに出しません）`);
      }
      if (p.title.includes(secret)) {
        p.title = p.title.split(secret).join('[REDACTED]');
      }
    }
  }

  const outputPages = pages.map(({ url, title, text }) => ({ url, title, text }));
  const finalTotalChars = outputPages.reduce((sum, p) => sum + p.text.length, 0);

  const output = {
    generatedAt: new Date().toISOString(),
    totalChars: finalTotalChars,
    pages: outputPages,
  };

  const outDir = path.join(ROOT, 'api', '_lib');
  mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'tiki-knowledge.json');
  writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n', 'utf8');

  console.log(`書き出し完了: ${path.relative(ROOT, outPath)}`);
  console.log(`totalChars: ${finalTotalChars}`);
  for (const p of outputPages) {
    console.log(`  - ${p.url} (${p.text.length}字) title="${p.title}"`);
  }
}

main();
