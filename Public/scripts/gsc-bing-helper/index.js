// GSC ページレポート取得 + Bing Webmaster Tools 登録支援
// Usage:
//   cd Public/scripts/gsc-bing-helper
//   npm install   (初回のみ)
//   node index.js
//
// 出力先: ~/.claude/playwright-shared/output/
//   - gsc-pages-report.png (フルページスクショ)
//   - gsc-pages-report.html (HTML 全文)
//   - gsc-unindexed-urls.json (推定 未インデックスURL一覧)
//   - bing-webmaster.png (Bing 登録完了画面のスクショ)

const { chromium } = require('playwright');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Tiki 共有プロファイル (~/.claude/playwright-shared/chrome-profile/) を使う。
// Masaya が一度ここでログインしておけば、Tiki が bg ジョブから同プロファイルで
// headless 起動して GSC / Bing にアクセスできる（セッション継承）。
// /tmp/ 配下を避けるのは、Macの再起動でログイン情報が消えるのを防ぐため。
const USER_DATA_DIR = require('os').homedir() + '/.claude/playwright-shared/chrome-profile';
const OUT_DIR = require('os').homedir() + '/.claude/playwright-shared/output';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((r) => rl.question(q, r));

async function gscPagesReport(page) {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🌐 [GSC] Search Console を開きます');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  await page.goto(
    'https://search.google.com/search-console?resource_id=sc-domain%3Acorduroy.co.jp',
    { waitUntil: 'domcontentloaded' },
  );
  console.log('');
  console.log('🔐 GSC にログイン（info@corduroy.co.jp）→ プロパティ www.corduroy.co.jp を選択');
  console.log('   ↓');
  console.log('📑 左サイドバーから「インデックス作成」→「ページ」をクリック');
  console.log('   ↓');
  console.log('🔍 「ページがインデックスに登録されていない理由」セクションを表示してください');
  console.log('   （未登録URLの一覧が見える状態にする）');
  console.log('');
  await ask('✅ ページレポートが表示できたら Enter: ');

  // フルページスクショ
  const screenshotPath = path.join(OUT_DIR, 'gsc-pages-report.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`   ➜ スクショ保存: ${screenshotPath}`);

  // HTML も保存
  const html = await page.content();
  const htmlPath = path.join(OUT_DIR, 'gsc-pages-report.html');
  fs.writeFileSync(htmlPath, html);
  console.log(`   ➜ HTML 保存: ${htmlPath}`);

  // /blog/ を含むリンクを抽出（推定: 未インデックスURL候補）
  try {
    const blogURLs = await page.$$eval(
      'a[href*="corduroy.co.jp/blog/"]',
      (anchors) =>
        Array.from(
          new Set(anchors.map((a) => a.href).filter((h) => h.includes('/blog/'))),
        ),
    );
    if (blogURLs.length > 0) {
      const urlsPath = path.join(OUT_DIR, 'gsc-unindexed-urls.json');
      fs.writeFileSync(urlsPath, JSON.stringify(blogURLs, null, 2));
      console.log(
        `   ➜ 表示中のブログURL ${blogURLs.length}件 を保存: ${urlsPath}`,
      );
      console.log('     ※ ページレポートの「未登録URL一覧」セクションをクリックして');
      console.log('       展開した状態でこのスクリプトを動かすと、未登録URLが取れます');
    } else {
      console.log('   ⚠ ブログURLが見つかりませんでした（レポート表示が未展開かもしれません）');
    }
  } catch (e) {
    console.log(`   ⚠ URL抽出失敗: ${e.message}`);
  }

  // 「インデックスに登録されていない理由」のテーブル行を抽出（可能なら）
  try {
    const rows = await page.$$eval('table tr', (trs) =>
      trs
        .map((tr) =>
          Array.from(tr.querySelectorAll('th, td')).map((td) =>
            td.textContent?.trim(),
          ),
        )
        .filter((row) => row.length > 0),
    );
    if (rows.length > 0) {
      fs.writeFileSync(
        path.join(OUT_DIR, 'gsc-pages-rows.json'),
        JSON.stringify(rows, null, 2),
      );
      console.log(
        `   ➜ ページレポート表データ ${rows.length}行 を保存: ${OUT_DIR}/gsc-pages-rows.json`,
      );
    }
  } catch (e) {
    // 失敗しても続行
  }
}

async function bingWebmasterRegister(page) {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🌐 [Bing] Webmaster Tools を開きます');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  await page.goto('https://www.bing.com/webmasters/', { waitUntil: 'domcontentloaded' });
  console.log('');
  console.log('🔐 Microsoft アカウント または「Sign in with Google」でログイン');
  console.log('   （GSC と同じ Google アカウント = info@corduroy.co.jp 推奨）');
  console.log('   ↓');
  console.log('➕ サイトの追加: 画面の「Import your sites from GSC」を選択');
  console.log('   ↓');
  console.log('   Google アカウントで認証 → www.corduroy.co.jp を選択 → インポート');
  console.log('   （これでサイトマップも自動同期されます）');
  console.log('');
  await ask('✅ サイト登録完了したら Enter: ');

  const screenshotPath = path.join(OUT_DIR, 'bing-webmaster.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`   ➜ スクショ保存: ${screenshotPath}`);

  console.log('');
  console.log('💡 任意フォローアップ:');
  console.log('   - 左サイドバー「URL検査」で今日公開の3記事をそれぞれ「URL送信」できます');
  console.log('     https://www.corduroy.co.jp/blog/claude-code-agent-view-guide/');
  console.log('     https://www.corduroy.co.jp/blog/npo-tool-introduction-order/');
  console.log('   - Bingbot は GSCより クロール頻度が低いので、明示送信が有効です');
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });

  console.log('🚀 GSC / Bing Webmaster Helper 起動');
  console.log('');
  console.log('  1. GSC ページレポート取得（インデックス カバレッジ確認）');
  console.log('  2. Bing Webmaster Tools 登録（GSC からインポート）');
  console.log('  3. 両方');
  console.log('');
  const choice = (await ask('実行する処理を選択 (1/2/3): ')).trim();
  if (!['1', '2', '3'].includes(choice)) {
    console.log('❌ 1/2/3 のいずれかを入力してください');
    rl.close();
    process.exit(1);
  }

  console.log('🌐 Chromium 起動中（永続プロファイル: ' + USER_DATA_DIR + '）...');
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    viewport: { width: 1400, height: 900 },
    locale: 'ja-JP',
  });
  const page = ctx.pages()[0] || (await ctx.newPage());

  try {
    if (choice === '1' || choice === '3') {
      await gscPagesReport(page);
    }
    if (choice === '2' || choice === '3') {
      await bingWebmasterRegister(page);
    }
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ 完了。結果は ${OUT_DIR} に保存されています。`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Tiki に渡したい時は以下を共有してください:');
    console.log(`  - ${OUT_DIR}/gsc-pages-report.png`);
    console.log(`  - ${OUT_DIR}/gsc-unindexed-urls.json`);
    console.log(`  - ${OUT_DIR}/bing-webmaster.png`);
  } catch (e) {
    console.log(`\n❌ エラー: ${e.message}`);
  } finally {
    await ask('Enter で終了: ');
    await ctx.close();
    rl.close();
  }
})();
