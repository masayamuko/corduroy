# Claude引き継ぎ: 株式会社コールテン ホームページ改修

更新日: 2026-08-08

## ⚠️ 2026-08-08 追記（Claude実装済み・本文の一部方針は上書きされた）

本文の「URLを変えない」方針はMasaya判断で**案A（8/4確定の301一括移行）に変更・実装済み**:

- AI記事41本→`/ai/blog/`、services/members/voices→`/ai/`配下へ移設。会社系4本（incorporation/itoshima-110km-walk/nks-kashiko-instructor/asiz-partnership）は`/blog/`残留
- 記事データは `Public/src/data/blogPosts.ts` に共通化（一覧は `/blog/` と `/ai/blog/` の2ページ）。`?axis=` 機構は廃止
- vercel.json に301を200エントリ（1URL=1エントリ・チェーン/重複機械検査済み）
- 計画正本: `制作マニュアル/URL移行計画_案A_301一括移行_2026-08-08.md`（Codex前後レビュー済み）

TOPページは**融合案3を実装済み**（イントロ5シーン化＋事業ツリー化＋brand-story強化＋`/story/`はじまりの話ページ新設）。3案の比較・オプションは `制作マニュアル/TOP融合3案_2026-08-08.md`。

残タスク: ブラウザ目視QA（Masaya）／Firoフィードバック反映（資料待ち）／GSCベースライン取得（mini・本番反映前）／コミット・push・Preview（Masaya承認待ち）。ビルドは78ページ成功・Codexレビュー済み。

## 最初に確認すること

- 作業ディレクトリ: `/Users/masaya/Documents/Codex/2026-08-07/github-gpt-chatgpt/work/corduroy-top-renewal`
- Gitブランチ: `work/top-renewal-2026-08`
- GitHub: `https://github.com/masayamuko/corduroy.git`
- 確認URL: `http://127.0.0.1:4321/`
- 開発サーバーが止まっている場合:

```bash
cd /Users/masaya/Documents/Codex/2026-08-07/github-gpt-chatgpt/work/corduroy-top-renewal/Public
npm run dev -- --host 127.0.0.1
```

重要: ワークツリーにはCodexが作成したステージ済み・未ステージの変更が混在している。`git reset`、`git checkout --`、既存変更の破棄は行わず、最初に `git status --short` と差分を読むこと。まだコミット、push、PR、デプロイはしていない。本番環境は変更しない。

## Masayaの進め方

この改修は、既存本番を直接変更せず、新しいトップページを別環境で完成させてから差し替える方針。

作業ループ:

1. 計画
2. 敵対的レビュー
3. 計画の修正
4. 実装
5. 敵対的レビューとテスト
6. 必要なら再度ループ

トップページは会社のビジョンを中心にし、従来のAI中心トップは `/ai/` に置く。SEO順位を落とさないことを最優先し、不要なURL変更を避ける。

## 会社ホームの核となる考え方

- 対象は「すでに人を大切にできている会社」ではなく、「人を大切にしたい思いはあるが、業績・成長・期限との間でうまく実践できず、社内でハレーションが起きている会社」。
- お金や成長を否定しない。ただし、効率・拡大だけで人の心を置いていく会社とは組まない。
- 成果か人かの二択ではなく、「人を大切にした先で成果につなげる」。
- AIは人を減らすためだけではなく、仕事に追われる時間を減らし、人と話す時間や顧客の話を深く聞く時間を増やすために使う。
- 目指す景色は「人へのやさしさが成果につながり、その成果がまた人を大切にする余裕を生む循環」。

## 実装済み

### ページ構成

- `/`: 新しい会社・ビジョン中心のホーム。
- `/ai/`: 以前のAI中心トップを移設。
- 初回訪問用の暗転イントロと、フッターからの再生導線。
- トップのヒーローからTiki/Tetoを削除。
- ヒーロー右端をコーデュロイ生地の帯と赤い境界線で再構成。
- `/#services` に事業一覧を追加・整理。
  - AI導入・活用支援: 提供中
  - コーチング・対話支援: テスト提供中
  - 外国人就労・定着支援: 準備中
  - ボードゲームカフェ・場づくり: 構想中

### ヘッダー・フッター

- ヘッダーにアクセシブルな「事業・サービス」ドロップダウンを実装。
  - hover、click、focus、Enter/Space、上下矢印、Home/End、Escape、外側クリックに対応。
  - モバイルでは全事業と提供状況を一覧表示。
- 2026-08-08の依頼により、ヘッダーとフッターの独立した「AI事業」リンクを削除済み。
- ドロップダウン内の「AI導入・活用支援」は、AIページへの実用導線として意図的に残している。

### AIページ・ブログ

- `/ai/` に「会社ホーム / AI事業 / AI事業の記事」の文脈ナビを追加。
- AI提供サービスと、会社全体で準備中の事業を混同しない境界セクションを追加。
- ブログURLは変更せず、一覧上で各記事を「AI事業」「会社・活動」に分類。
- `/blog/?axis=ai` でAI記事だけを表示できる。
- 現在「会社・活動」に分類したslugは次の6件。それ以外はAI事業。内容面の最終確認が必要。
  - `smf-partner-pride`
  - `nks-kashiko-instructor`
  - `itoshima-110km-walk`
  - `asiz-partnership`
  - `ohara-partnership`
  - `incorporation`

### SEO・リダイレクト

- 既存の `/blog/<slug>/`、`/services/<slug>/`、`/voices/<slug>/` は移動しない。
- 公開リダイレクトの正本をルート `vercel.json` に統一し、`Public/astro.config.mjs` の重複redirectを削除。
- 旧 `.html` URLを最終URLへ一段で転送する設定を追加。
- 存在しない `/services/system/` へ向いていた設定を `/ai/` に修正。
- AstroのローカルサーバーではVercelのredirectが適用されないため、Vercel Previewまたは `vercel dev` 相当で最終検証が必要。

## 主な変更ファイル

- `Public/src/pages/index.astro`
- `Public/src/pages/ai/index.astro`
- `Public/src/pages/blog/index.astro`
- `Public/src/components/Header.astro`
- `Public/src/components/Footer.astro`
- `Public/src/layouts/Layout.astro`
- `Public/astro.config.mjs`
- `vercel.json`
- `制作マニュアル/TOPページ改修方針_2026-08-07.md`
- `制作マニュアル/TOPページ第2フェーズ_情報設計SEO計画_2026-08-07.md`

## 現在の検証結果

- `cd Public && npm run build`: 成功
- 76ページ生成
- `sitemap-index.xml` 生成
- curlでレンダリング後のheader/footerを確認し、独立した「AI事業」リンクがないことを確認
- ブラウザでの最終ビジュアルQAは未完了
- コミット・push・PR・Vercel Preview・本番反映は未実施

## 未完了・次に行うこと

1. PC・タブレット・スマートフォンで `/`、`/ai/`、`/blog/` を目視確認する。
2. ヒーローの右端が完全に画面端まで届くこと、テキストが生地帯に重ならないことを確認する。
3. ヘッダーのドロップダウンをマウス・キーボード・モバイルで敵対的にテストする。
4. ブログの編集軸分類を内容面から再レビューし、必要なら記事ごとに修正する。
5. canonicalが各ページ1件だけであること、sitemapに `/ai/` が入ること、旧URLが最終URLへ一段で転送されることを検証する。
6. `Public/public/llms.txt` と `Public/public/llms-full.txt` を新しい会社ホーム・AIハブ・24名体制に更新する。現在は旧トップ説明と「31名」が残っている。
7. Sanoさんからいただいた「Firoのフィードバック」を反映する。元資料はローカル検索で見つかっていないため、Masayaから文章・画像・URLを受け取る必要がある。
8. 実装後の敵対的レビューを行い、問題を直して再ビルドする。
9. Preview公開やpushが必要になったら、その直前にMasayaへ確認する。本番へ直接反映しない。

## 依存関係の脆弱性

2026-08-08に `Public` で `npm audit --json` を実行した結果:

- total: 27
- critical: 1
- high: 18
- moderate: 6
- low: 2
- `npm audit` の終了コード: 1

主因には古い `astro` と `@astrojs/vercel`、およびそれらの推移的依存がある。修正候補はAstro 7系や `@astrojs/vercel` 11系へのメジャー更新を含む。現在のサイトは静的ビルドに成功しているが、脆弱性件数を無視してよいという意味ではない。

この更新は表示改修と混ぜず、別ブランチまたは別コミットで行う。最初に実際の本番アダプタ使用状況と `package.json` / lockfileを確認し、アップグレード計画、破壊的変更の調査、ビルド・全ページ・Previewの回帰テストを実施する。安易に `npm audit fix --force` は実行しない。

## Claudeへの再開指示

Claudeには次の文章をそのまま伝える:

> `/Users/masaya/Documents/Codex/2026-08-07/github-gpt-chatgpt/work/corduroy-top-renewal` を作業ディレクトリにしてください。最初に `CLAUDE_HANDOFF.md` を全文読み、`git status --short` と現在の差分、2つの制作マニュアルを確認してください。既存変更はリセット・破棄せず、その続きとして進めてください。まず未完了項目を計画し、敵対的レビューで計画を修正してから、ビジュアルQA・SEO/redirect検証・llms更新・実装後レビューを進めてください。Firoの元資料が必要な箇所だけ私に確認してください。コミット、push、PR、Preview公開、本番反映の前には確認してください。

