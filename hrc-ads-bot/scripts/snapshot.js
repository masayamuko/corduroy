import { chromium } from 'playwright';

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const pages = ctx.pages();

console.log(`Pages open: ${pages.length}`);
for (let i = 0; i < pages.length; i++) {
  const p = pages[i];
  console.log(`\n--- Page ${i} ---`);
  console.log(`  URL:   ${p.url()}`);
  console.log(`  Title: ${await p.title()}`);
}

const page = pages[pages.length - 1];
await page.bringToFront();

const screenshotPath = '/tmp/hrc-ads-snapshot.png';
await page.screenshot({ path: screenshotPath, fullPage: false });
console.log(`\nScreenshot: ${screenshotPath}`);

const visibleText = await page.evaluate(() => {
  const main = document.querySelector('main') || document.body;
  return main.innerText.slice(0, 3000);
});
console.log('\n--- Visible text (head) ---');
console.log(visibleText);

await browser.close();
