import { chromium } from 'playwright';

const HEADLINES = [
  '北海道から始めるカナダ高校留学',
  '北海道の高校留学エージェント',
  '北海道専任｜日本語で相談OK',
  '中2・中3の保護者の方へ',
  '日本とカナダ 2つの卒業資格',
  'ダブルディプロマで退路を確保',
  '万一の帰国でも日本の高卒継続',
  '業界17年の代表が直接対応',
  '札幌で相談できる高校留学',
  '年4期制で柔軟スタート',
  '英検3級レベルからOK',
  'ESLから段階的に英語習得',
  '無料相談・資料請求 受付中',
  '通信制との連携プログラム',
  '海外大学・帰国子女枠に対応',
];

const DESCRIPTIONS = [
  '日本の通信制高校に在籍しながらカナダの高校で学習。2つの卒業資格を同時取得。',
  '万一の帰国でも日本の高卒は継続。退路を断たない留学で保護者の不安を解消。',
  '英検3級から始められる段階設計。ESLで英語を固めながら高校単位を取得。',
  '北海道専任窓口。業界17年の代表が直接相談。資料請求・無料相談 受付中。',
];

console.log('=== Char count verification ===');
HEADLINES.forEach((h, i) => {
  const len = h.length;
  const tag = len <= 15 ? 'OK' : 'NG';
  console.log(`  H${i + 1}: ${len}字 [${tag}] ${h}`);
});
DESCRIPTIONS.forEach((d, i) => {
  const len = d.length;
  const tag = len <= 45 ? 'OK' : 'NG';
  console.log(`  D${i + 1}: ${len}字 [${tag}] ${d}`);
});
console.log('');

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const page = ctx.pages()[ctx.pages().length - 1];
await page.bringToFront();

async function clickAddViaJS(label) {
  return await page.evaluate((lbl) => {
    const els = document.querySelectorAll('button, [role="button"]');
    for (const el of els) {
      const txt = (el.innerText || '').trim();
      if (!txt) continue;
      if (txt.startsWith('add') && txt.includes(lbl) && !txt.includes('/')) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        el.scrollIntoView({ block: 'center' });
        el.click();
        return { ok: true, text: txt.slice(0, 60) };
      }
    }
    return { ok: false };
  }, label);
}

async function countHeadlineSlots() {
  return await page.evaluate(() => {
    return Array.from(document.querySelectorAll('input[type="text"]')).filter(el => {
      if (el.hasAttribute('aria-label')) return false;
      const r = el.getBoundingClientRect();
      return r.width > 100 && r.width < 220 && r.x > 250 && r.x < 350;
    }).length;
  });
}

async function countDescSlots() {
  return await page.locator('textarea[aria-label="説明文"]').count();
}

console.log('Adding headline slots...');
let n = await countHeadlineSlots();
console.log(`  start: ${n}`);
let safety = 0;
while (n < HEADLINES.length && safety < 20) {
  const r = await clickAddViaJS('広告見出し');
  if (!r.ok) { console.log('  add btn not found'); break; }
  await page.waitForTimeout(300);
  n = await countHeadlineSlots();
  console.log(`  -> ${n}`);
  safety++;
}

console.log('\nAdding description slots...');
let m = await countDescSlots();
console.log(`  start: ${m}`);
safety = 0;
while (m < DESCRIPTIONS.length && safety < 8) {
  const r = await clickAddViaJS('説明文');
  if (!r.ok) { console.log('  add btn not found'); break; }
  await page.waitForTimeout(300);
  m = await countDescSlots();
  console.log(`  -> ${m}`);
  safety++;
}

console.log('\nFilling headlines (overwriting all)...');
const headlineResults = await page.evaluate((vals) => {
  const els = Array.from(document.querySelectorAll('input[type="text"]')).filter(el => {
    if (el.hasAttribute('aria-label')) return false;
    const r = el.getBoundingClientRect();
    return r.width > 100 && r.width < 220 && r.x > 250 && r.x < 350;
  }).sort((a, b) => a.getBoundingClientRect().y - b.getBoundingClientRect().y);

  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  const out = [];
  for (let i = 0; i < Math.min(els.length, vals.length); i++) {
    const el = els[i];
    el.focus();
    setter.call(el, vals[i]);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.blur();
    out.push({ i: i + 1, val: vals[i], current: el.value });
  }
  return out;
}, HEADLINES);
headlineResults.forEach(r => console.log(`  H${r.i}: ${r.val} (got: "${r.current}")`));

await page.waitForTimeout(500);

console.log('\nFilling descriptions (overwriting all)...');
const descResults = await page.evaluate((vals) => {
  const els = Array.from(document.querySelectorAll('textarea[aria-label="説明文"]'));
  const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
  const out = [];
  for (let i = 0; i < Math.min(els.length, vals.length); i++) {
    const el = els[i];
    el.focus();
    setter.call(el, vals[i]);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.blur();
    out.push({ i: i + 1, val: vals[i], current: el.value });
  }
  return out;
}, DESCRIPTIONS);
descResults.forEach(r => console.log(`  D${r.i}: ${r.val.slice(0, 30)}... (got: "${r.current.slice(0, 25)}...")`));

await page.waitForTimeout(800);
await page.screenshot({ path: '/tmp/hrc-ads-rsa-v3.png', fullPage: true });
console.log('\nScreenshot: /tmp/hrc-ads-rsa-v3.png');
console.log(`Headline slots final: ${await countHeadlineSlots()}`);
console.log(`Desc slots final: ${await countDescSlots()}`);

await browser.close();
