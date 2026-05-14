// Search Console URL検査 + インデックス登録リクエスト 自動化
// Usage: node index.js
// 初回はログイン画面が出るので手動ログイン → 完了したらターミナルでEnter
const { chromium } = require('playwright');
const readline = require('readline');

const URLS = [
  // 2026-05-14 セッションで公開した記事
  'https://www.corduroy.co.jp/blog/claude-code-agent-view-guide/',  // 5/12付（5/13追記で再公開）
  'https://www.corduroy.co.jp/blog/npo-tool-introduction-order/',   // 5/13付
  // 注: ai-advisory-new-applications-paused-2026-05 は noindex 運用のため GSC 検査対象外
];

// Tiki 共有プロファイル統一（gsc-bing-helper と同じ）。Macの再起動でもログイン保持。
const USER_DATA_DIR = require('os').homedir() + '/.claude/playwright-shared/chrome-profile';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(r => rl.question(q, r));

(async () => {
  console.log('🚀 Chromium 起動中...');
  // 公式 Google Chrome を使う（Playwright Chromiumだと Google 認証が通りにくい・
  // Profile 1 セッション共有のため）。
  // gsc-bing-helper で Masaya がログインしたセッションを Profile 1 経由で引き継ぐ。
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    viewport: { width: 1400, height: 900 },
    locale: 'ja-JP',
    args: ['--profile-directory=Profile 1'],
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
