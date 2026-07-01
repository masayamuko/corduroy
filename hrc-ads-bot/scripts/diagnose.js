import { chromium } from 'playwright';

const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const ctx = browser.contexts()[0];
const page = ctx.pages()[ctx.pages().length - 1];
await page.bringToFront();

const data = await page.evaluate(() => {
  const out = { inputs: [], buttons: [] };
  document.querySelectorAll('input, textarea').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    out.inputs.push({
      tag: el.tagName,
      type: el.type || '',
      aria: el.getAttribute('aria-label'),
      ariaHas: el.hasAttribute('aria-label'),
      placeholder: el.placeholder,
      value: (el.value || '').slice(0, 40),
      x: Math.round(r.x),
      y: Math.round(r.y + window.scrollY),
      w: Math.round(r.width),
      class: el.className.slice(0, 60),
      parentText: (el.closest('div[role]') || el.parentElement)?.innerText?.slice(0, 60),
    });
  });
  document.querySelectorAll('button, [role="button"]').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const t = (el.innerText || el.getAttribute('aria-label') || '').slice(0, 50).trim();
    if (!t) return;
    if (t.includes('追加') || t.includes('Add') || t.includes('見出し') || t.includes('説明')) {
      out.buttons.push({ text: t, x: Math.round(r.x), y: Math.round(r.y + window.scrollY) });
    }
  });
  return out;
});

console.log(`\nINPUTS (${data.inputs.length}):`);
data.inputs.forEach((i, n) => {
  console.log(`  [${n}] ${i.tag}/${i.type} aria=${JSON.stringify(i.aria)} ariaHas=${i.ariaHas} value=${JSON.stringify(i.value)} (x=${i.x},y=${i.y},w=${i.w}) class="${i.class}"`);
});

console.log(`\nBUTTONS related to add/headline/description:`);
data.buttons.forEach(b => console.log(`  "${b.text}" @ (${b.x},${b.y})`));

await browser.close();
