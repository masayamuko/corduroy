import { chromium } from 'playwright';

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const page = ctx.pages()[ctx.pages().length - 1];
await page.bringToFront();

console.log('Current URL:', page.url());

console.log('\n[1/2] Click "ガイダンスなしでキャンペーンを作成"...');
const noGuidance = page.getByText('ガイダンスなしでキャンペーンを作成', { exact: false }).first();
await noGuidance.scrollIntoViewIfNeeded();
await noGuidance.click();
await page.waitForTimeout(500);

console.log('[2/2] Click "続行"...');
const continueBtn = page.getByRole('button', { name: /続行|Continue/ }).first();
await continueBtn.click();

await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
await page.waitForTimeout(1500);

console.log('\nAfter click:');
console.log('  URL:  ', page.url());
console.log('  Title:', await page.title());

await page.screenshot({ path: '/tmp/hrc-ads-after-step1.png', fullPage: false });

const txt = await page.evaluate(() => {
  const main = document.querySelector('main') || document.body;
  return main.innerText.slice(0, 2500);
});
console.log('\n--- Visible text ---');
console.log(txt);

await browser.close();
