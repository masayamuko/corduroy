import { chromium } from 'playwright';

const URL_AG2 = 'https://hrc-hs.vercel.app/#program';
const PATH1_AG2 = 'ダブル卒業';
const PATH2_AG2 = '通信制';

const HEADLINES_AG2 = [
  '通信制×カナダ ダブル卒業資格',
  '日本とカナダ 2つの高校資格',
  'カナダ高校留学×通信制高校',
  '退路を断たない高校留学設計',
  '帰国しても日本の高卒は継続',
  'カナダ政府認定の高校で学ぶ',
  'トロント・バンクーバー拠点',
  '中2・中3のための留学設計',
  'ESLから段階的スタート',
  '英検3級レベルからOK',
  '年4期制で柔軟に開始',
  '北海道専任 日本語サポート',
  '業界17年 代表が直接相談',
  '無料相談・資料請求 受付中',
  '海外進学・帰国子女枠 対応',
];

const DESCRIPTIONS_AG2 = [
  '通信制高校に在籍しながらカナダの高校で学習。2つの卒業資格を同時取得できる新設計。',
  '帰国しても日本の高卒は継続。退路を断たない設計で保護者の最大不安を解消します。',
  '英検3級から段階的に開始。ESLで英語を固め、カナダ高校の単位を無理なく取得。',
  '業界17年の代表が個別に最適な留学計画を提案。資料請求・無料相談 受付中。',
];

console.log('=== AG2 char count ===');
HEADLINES_AG2.forEach((h, i) => console.log(`  H${i + 1} (${h.length}字): ${h}`));
DESCRIPTIONS_AG2.forEach((d, i) => console.log(`  D${i + 1} (${d.length}字): ${d}`));
console.log(`  Path1 (${PATH1_AG2.length}字): ${PATH1_AG2}`);
console.log(`  Path2 (${PATH2_AG2.length}字): ${PATH2_AG2}`);
console.log('');

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const page = ctx.pages()[ctx.pages().length - 1];
await page.bringToFront();

console.log('Overwriting URL / paths / headlines / descriptions...');
const result = await page.evaluate((data) => {
  const inputSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  const taSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;

  function setInput(el, val) {
    el.focus();
    inputSetter.call(el, val);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.blur();
  }
  function setTA(el, val) {
    el.focus();
    taSetter.call(el, val);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.blur();
  }

  const log = [];

  // Final URL
  const urlEl = document.querySelector('input[aria-label="最終ページ URL"]');
  if (urlEl) { setInput(urlEl, data.url); log.push(`URL set: ${urlEl.value}`); }
  else log.push('URL input not found');

  // Path 1 / 2
  const p1 = document.querySelector('input[aria-label="パス 1"]');
  const p2 = document.querySelector('input[aria-label="パス 2"]');
  if (p1) { setInput(p1, data.path1); log.push(`Path1: ${p1.value}`); }
  if (p2) { setInput(p2, data.path2); log.push(`Path2: ${p2.value}`); }

  // Headlines: input[type=text] without aria-label, width 100-400
  const headlineEls = Array.from(document.querySelectorAll('input[type="text"]'))
    .filter(el => {
      if (el.hasAttribute('aria-label')) return false;
      const r = el.getBoundingClientRect();
      return r.width >= 100 && r.width <= 400;
    })
    .sort((a, b) => a.getBoundingClientRect().y - b.getBoundingClientRect().y);

  log.push(`Found ${headlineEls.length} headline slots`);
  for (let i = 0; i < Math.min(headlineEls.length, data.headlines.length); i++) {
    setInput(headlineEls[i], data.headlines[i]);
    log.push(`  H${i + 1}: ${headlineEls[i].value}`);
  }

  // Descriptions
  const descEls = Array.from(document.querySelectorAll('textarea[aria-label="説明文"]'));
  log.push(`Found ${descEls.length} description slots`);
  for (let i = 0; i < Math.min(descEls.length, data.descriptions.length); i++) {
    setTA(descEls[i], data.descriptions[i]);
    log.push(`  D${i + 1}: ${descEls[i].value.slice(0, 30)}...`);
  }

  return log;
}, {
  url: URL_AG2,
  path1: PATH1_AG2,
  path2: PATH2_AG2,
  headlines: HEADLINES_AG2,
  descriptions: DESCRIPTIONS_AG2,
});

result.forEach(l => console.log(' ', l));

await page.waitForTimeout(800);
await page.screenshot({ path: '/tmp/hrc-ads-ag2-done.png', fullPage: true });
console.log('\nScreenshot: /tmp/hrc-ads-ag2-done.png');

await browser.close();
