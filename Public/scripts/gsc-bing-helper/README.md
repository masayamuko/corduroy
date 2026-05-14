# gsc-bing-helper

GSC ページレポート取得 + Bing Webmaster Tools 登録支援ツール。

## セットアップ（初回のみ）

```bash
cd Public/scripts/gsc-bing-helper
npm install
npx playwright install chromium  # 初回のみ Chromium 取得
```

## 使い方

```bash
node index.js
```

起動するとメニューが出る：
1. GSC ページレポート取得
2. Bing Webmaster Tools 登録
3. 両方

Chromium が立ち上がるので、画面の指示に従ってログイン。完了後、自動でスクショ・HTML を `~/.claude/playwright-shared/output/` に保存。

**ログインプロファイルは `~/.claude/playwright-shared/chrome-profile/` に永続保存される**。Tiki が以降の bg ジョブで同じプロファイルを headless で使えば、ログイン済みセッションを継承して GSC / Bing を自動操作できる。

## 出力ファイル

- `gsc-pages-report.png` — GSC ページレポートのフルページスクショ
- `gsc-pages-report.html` — 同上の HTML 全文
- `gsc-unindexed-urls.json` — 画面に表示中のブログURL一覧（未インデックス候補）
- `gsc-pages-rows.json` — レポートのテーブル行データ
- `bing-webmaster.png` — Bing 登録完了画面のスクショ

## Tiki への共有

完了後、上記のファイルパスを Tiki に伝えるか、内容をコピペで貼ってください。
Tiki が未インデックスURL の sc-indexer 自動申請や、原因分類の解析を行います。
