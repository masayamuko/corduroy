import { chromium } from 'playwright';

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const page = ctx.pages()[0] || await ctx.newPage();

console.log('Connected.');
console.log('  URL:   ', page.url());
console.log('  Title: ', await page.title());
console.log('  Pages: ', ctx.pages().length);

await browser.close();
