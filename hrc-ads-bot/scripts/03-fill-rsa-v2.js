import { chromium } from 'playwright';

const HEADLINES = [
  '北海道から始めるカナダ高校留学',
  '北海道の高校留学専門エージェント',
  '北海道専任窓口｜日本語で相談可',
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
  '通信制高校との連携プログラム',
  '海外大学・帰国子女枠にも対応',
];

const DESCRIPTIONS = [
  '北海道の親御さん向け。日本の通信制高校に在籍しながらカナダで学び、2つの卒業資格を同時取得。業界17年の代表が直接ご相談。',
  '「海外に挑戦させたいけど日本の卒業資格も心配」な方へ。退路を断たない設計で、万一の帰国時も日本の高卒資格は確実に継続。',
  '英検3級レベルからスタート可能。ESLで基礎を固め、段階的にカナダの高校単位を取得。中2・中3のお子様が対象です。',
  '北海道に専任窓口。札幌で顔を合わせて相談できる留学エージェント。資料請求・無料相談は公式フォームから受付中。',
];

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const page = ctx.pages()[ctx.pages().length - 1];
await page.bringToFront();

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

async function clickAdd(label) {
  const btns = page.locator('button').filter({ hasText: 'add' }).filter({ hasText: label });
  const count = await btns.count();
  for (let i = 0; i < count; i++) {
    const b = btns.nth(i);
    if (await b.isVisible().catch(() => false)) {
      await b.scrollIntoViewIfNeeded();
      await b.click();
      await page.waitForTimeout(350);
      return true;
    }
  }
  return false;
}

let hSlots = await countHeadlineSlots();
console.log(`Headline slots now: ${hSlots}/${HEADLINES.length}`);
let safety = 0;
while (hSlots < HEADLINES.length && safety < 20) {
  const ok = await clickAdd('広告見出し');
  if (!ok) { console.log('  Add headline button not found'); break; }
  hSlots = await countHeadlineSlots();
  console.log(`  -> ${hSlots}`);
  safety++;
}

let dSlots = await countDescSlots();
console.log(`\nDesc slots now: ${dSlots}/${DESCRIPTIONS.length}`);
safety = 0;
while (dSlots < DESCRIPTIONS.length && safety < 8) {
  const ok = await clickAdd('説明文');
  if (!ok) { console.log('  Add description button not found'); break; }
  dSlots = await countDescSlots();
  console.log(`  -> ${dSlots}`);
  safety++;
}

console.log('\nFilling headlines...');
const headlineHandles = await page.evaluateHandle(() => {
  return Array.from(document.querySelectorAll('input[type="text"]'))
    .filter(el => {
      if (el.hasAttribute('aria-label')) return false;
      const r = el.getBoundingClientRect();
      return r.width > 100 && r.width < 220 && r.x > 250 && r.x < 350;
    })
    .sort((a, b) => a.getBoundingClientRect().y - b.getBoundingClientRect().y);
});
const headlineCount = await page.evaluate(arr => arr.length, headlineHandles);
console.log(`  Got ${headlineCount} elements to fill`);

for (let i = 0; i < Math.min(headlineCount, HEADLINES.length); i++) {
  const el = await page.evaluateHandle((arr, idx) => arr[idx], headlineHandles, i);
  await el.evaluate((node, val) => {
    node.focus();
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(node, val);
    node.dispatchEvent(new Event('input', { bubbles: true }));
    node.dispatchEvent(new Event('change', { bubbles: true }));
    node.blur();
  }, HEADLINES[i]);
  console.log(`  [${i + 1}] ${HEADLINES[i]}`);
  await page.waitForTimeout(80);
}

console.log('\nFilling descriptions (only empty slots)...');
const descLocators = page.locator('textarea[aria-label="説明文"]');
const dCount = await descLocators.count();
let descIdx = 0;
for (let i = 0; i < dCount && descIdx < DESCRIPTIONS.length; i++) {
  const t = descLocators.nth(i);
  const cur = await t.inputValue().catch(() => '');
  if (cur && cur.trim().length > 0) {
    console.log(`  [${i + 1}] (already filled: "${cur.slice(0, 25)}...") -> skip`);
    descIdx++;
    continue;
  }
  await t.scrollIntoViewIfNeeded();
  await t.click();
  await t.fill(DESCRIPTIONS[descIdx]);
  console.log(`  [${i + 1}] ${DESCRIPTIONS[descIdx].slice(0, 30)}...`);
  descIdx++;
  await page.waitForTimeout(120);
}

await page.screenshot({ path: '/tmp/hrc-ads-rsa-done.png', fullPage: true });
console.log('\nScreenshot: /tmp/hrc-ads-rsa-done.png');

await browser.close();
