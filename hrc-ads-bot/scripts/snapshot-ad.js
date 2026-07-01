import { chromium } from 'playwright';

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const page = ctx.pages()[ctx.pages().length - 1];
await page.bringToFront();

console.log('URL:  ', page.url());
console.log('Title:', await page.title());

await page.screenshot({ path: '/tmp/hrc-ads-ad-screen.png', fullPage: true });
console.log('Screenshot:', '/tmp/hrc-ads-ad-screen.png');

const inputs = await page.evaluate(() => {
  const result = [];
  const els = document.querySelectorAll('input, textarea, [contenteditable="true"]');
  els.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    result.push({
      i,
      tag: el.tagName,
      type: el.type || '',
      name: el.name || '',
      id: el.id || '',
      placeholder: el.placeholder || '',
      ariaLabel: el.getAttribute('aria-label') || '',
      maxLength: el.maxLength || '',
      value: (el.value || el.innerText || '').slice(0, 50),
      visible: rect.width > 0 && rect.height > 0,
      x: Math.round(rect.x),
      y: Math.round(rect.y),
    });
  });
  return result;
});

console.log(`\nFound ${inputs.length} visible input/textarea/contenteditable:\n`);
inputs.slice(0, 50).forEach(inp => {
  console.log(`  [${inp.i}] ${inp.tag}/${inp.type} aria="${inp.ariaLabel}" placeholder="${inp.placeholder}" value="${inp.value}" max=${inp.maxLength} (${inp.x},${inp.y})`);
});

await browser.close();
