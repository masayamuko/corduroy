// Search Console URL検査 + インデックス登録リクエスト 自動化
// Usage: node index.js
// 初回はログイン画面が出るので手動ログイン → 完了したらターミナルでEnter
const { chromium } = require('playwright');
const readline = require('readline');

const URLS = [
  'https://www.corduroy.co.jp/blog/agent-loop-minimal-intro/',
  'https://www.corduroy.co.jp/blog/executive-second-self/',
  'https://www.corduroy.co.jp/blog/teacher-second-self/',
  'https://www.corduroy.co.jp/blog/claude-limit-power-use/',
  'https://www.corduroy.co.jp/blog/masaya-voice-clone/',
  'https://www.corduroy.co.jp/blog/character-voice-creation/',
  'https://www.corduroy.co.jp/blog/tiki-local-llm-247/',
  'https://www.corduroy.co.jp/blog/teto-autonomous-mini2/',
  'https://www.corduroy.co.jp/blog/three-machine-workflow/',
  'https://www.corduroy.co.jp/blog/ohra-partner-pride/',
  'https://www.corduroy.co.jp/blog/ume-partner-pride/',
];

const USER_DATA_DIR = '/tmp/sc-indexer/chrome-profile';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(r => rl.question(q, r));

(async () => {
  console.log('🚀 Chromium 起動中...');
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    viewport: { width: 1400, height: 900 },
    locale: 'ja-JP',
  });
  const page = ctx.pages()[0] || await ctx.newPage();

  console.log('🌐 Search Console を開きます...');
  await page.goto('https://search.google.com/search-console', { waitUntil: 'domcontentloaded' });

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔐 Googleアカウントでログインしてください（info@corduroy.co.jp）');
  console.log('   プロパティ選択画面で  www.corduroy.co.jp  を選んでください');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  await ask('✅ ログイン+プロパティ選択が完了したらEnter: ');

  let success = 0, fail = 0;
  for (let i = 0; i < URLS.length; i++) {
    const url = URLS[i];
    console.log(`\n[${i + 1}/${URLS.length}] 📝 ${url}`);
    try {
      // URL検査ページへ直接遷移
      const inspectUrl = `https://search.google.com/search-console/inspect?resource_id=sc-domain%3Acorduroy.co.jp&id=${encodeURIComponent(url)}`;
      await page.goto(inspectUrl, { waitUntil: 'domcontentloaded' });

      // 検査が完了するまで待つ（ページのloading spinner消えるまで）
      // 「インデックス登録をリクエスト」ボタンを最大60秒待つ
      const requestBtn = page.locator('text=インデックス登録をリクエスト').first();
      await requestBtn.waitFor({ state: 'visible', timeout: 60000 });

      console.log('   ➜ ボタン発見、クリック');
      await requestBtn.click();

      // ライブテストが走る ─ 進捗ダイアログ「URLをテスト中...」など
      // 「インデックス登録をリクエスト済み」 or 「リクエストが追加されました」を待つ
      const successText = page.locator('text=/リクエスト.*追加|登録.*リクエストしました|送信されました/').first();
      await successText.waitFor({ state: 'visible', timeout: 120000 });

      // ダイアログを閉じる（OKボタン）
      const okBtn = page.locator('button:has-text("OK"), button:has-text("閉じる")').first();
      if (await okBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await okBtn.click();
      }

      console.log('   ✅ 申請完了');
      success++;
      await page.waitForTimeout(3000);
    } catch (e) {
      console.log(`   ❌ 失敗: ${e.message.split('\n')[0].slice(0, 120)}`);
      fail++;
      // クォータ超過なら止める
      if (e.message.includes('quota') || e.message.includes('限度')) {
        console.log('⚠ クォータ超過の可能性。残りスキップ');
        break;
      }
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`完了: ✅ ${success}件 / ❌ ${fail}件`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  await ask('Enterで終了: ');
  await ctx.close();
  rl.close();
})();
