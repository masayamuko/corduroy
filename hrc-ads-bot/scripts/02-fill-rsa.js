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

const PATH1 = '北海道';
const PATH2 = '高校留学';

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const page = ctx.pages()[ctx.pages().length - 1];
await page.bringToFront();

console.log('URL:', page.url());

async function getEditableInputs() {
  return await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('input, textarea').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      out.push({
        tag: el.tagName,
        type: el.type || '',
        ariaLabel: el.getAttribute('aria-label') || '',
        id: el.id,
        x: r.x,
        y: r.y + window.scrollY,
        cur: el.value || '',
      });
    });
    return out;
  });
}

async function fillByAria(label, text, idx = 0) {
  const locator = page.locator(`[aria-label="${label}"]`).nth(idx);
  await locator.scrollIntoViewIfNeeded();
  await locator.click({ delay: 50 });
  await locator.fill('');
  await locator.fill(text);
  await page.waitForTimeout(120);
}

console.log('\n[Path] Fill パス1 / パス2');
await fillByAria('パス 1', PATH1);
await fillByAria('パス 2', PATH2);

console.log('\n[Headlines] Looking for headline inputs...');
let snap = await getEditableInputs();
let headlineEls = snap.filter(i =>
  i.tag === 'INPUT' && i.type === 'text'
  && !i.ariaLabel.includes('パス')
  && !i.ariaLabel.includes('URL')
  && !i.ariaLabel.includes('キーワード')
  && !i.ariaLabel.includes('商品')
  && !i.ariaLabel.includes('カスタム')
  && i.x >= 250 && i.x <= 600
);
console.log(`Found ${headlineEls.length} candidate headline inputs (initial)`);

async function clickAddByText(textRegex) {
  const btns = page.getByRole('button', { name: textRegex });
  const count = await btns.count();
  if (count === 0) return false;
  for (let i = 0; i < count; i++) {
    const b = btns.nth(i);
    if (await b.isVisible()) {
      await b.scrollIntoViewIfNeeded();
      await b.click();
      await page.waitForTimeout(400);
      return true;
    }
  }
  return false;
}

async function ensureHeadlineCount(target) {
  for (let attempt = 0; attempt < 30; attempt++) {
    const inputs = await page.locator('input[aria-label=""][type="text"]').all();
    const visible = [];
    for (const el of inputs) {
      const box = await el.boundingBox();
      if (box && box.width > 100) visible.push({ el, box });
    }
    const headlines = visible.filter(v => v.box.x >= 250 && v.box.x <= 600);
    if (headlines.length >= target) return headlines;
    const ok = await clickAddByText(/見出しを追加|Add headline/);
    if (!ok) {
      console.log(`  Add button not found at attempt ${attempt}. Have ${headlines.length}/${target}`);
      return headlines;
    }
  }
  return [];
}

console.log(`\n[Headlines] Ensuring ${HEADLINES.length} headline slots...`);
const headlineFields = await ensureHeadlineCount(HEADLINES.length);
console.log(`  Got ${headlineFields.length} slots`);

const headlineLocators = await page.locator('input[aria-label=""][type="text"]').all();
const filteredHeadlines = [];
for (const el of headlineLocators) {
  const box = await el.boundingBox();
  if (box && box.x >= 250 && box.x <= 600 && box.y > 300) {
    filteredHeadlines.push({ el, box });
  }
}
filteredHeadlines.sort((a, b) => a.box.y - b.box.y);
const headlineSlots = filteredHeadlines.slice(0, HEADLINES.length);
console.log(`  Filling ${headlineSlots.length} headlines...`);

for (let i = 0; i < headlineSlots.length && i < HEADLINES.length; i++) {
  const { el } = headlineSlots[i];
  await el.scrollIntoViewIfNeeded();
  await el.click({ delay: 30 });
  await el.fill('');
  await el.fill(HEADLINES[i]);
  await page.waitForTimeout(100);
  console.log(`    [${i + 1}] ${HEADLINES[i]}`);
}

console.log(`\n[Descriptions] Ensuring ${DESCRIPTIONS.length} description slots...`);
async function ensureDescCount(target) {
  for (let attempt = 0; attempt < 10; attempt++) {
    const els = await page.locator('textarea[aria-label="説明文"]').all();
    if (els.length >= target) return els;
    const ok = await clickAddByText(/説明文を追加|Add description/);
    if (!ok) return els;
    await page.waitForTimeout(400);
  }
  return [];
}

const descSlots = await ensureDescCount(DESCRIPTIONS.length);
console.log(`  Got ${descSlots.length} description slots, filling...`);
for (let i = 0; i < descSlots.length && i < DESCRIPTIONS.length; i++) {
  await descSlots[i].scrollIntoViewIfNeeded();
  await descSlots[i].click({ delay: 30 });
  await descSlots[i].fill('');
  await descSlots[i].fill(DESCRIPTIONS[i]);
  await page.waitForTimeout(100);
  console.log(`    [${i + 1}] ${DESCRIPTIONS[i].slice(0, 30)}...`);
}

await page.screenshot({ path: '/tmp/hrc-ads-after-rsa-fill.png', fullPage: true });
console.log('\nDone. Screenshot: /tmp/hrc-ads-after-rsa-fill.png');

await browser.close();
