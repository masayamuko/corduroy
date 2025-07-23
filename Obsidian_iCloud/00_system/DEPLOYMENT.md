# デプロイメントガイド

このガイドでは、「第二の自分」ウェブサイトをゼロから本番環境にデプロイする手順を説明します。

## 🚀 クイックスタート

### 1. 前提条件

- Node.js 18以上
- npm または yarn
- Gitアカウント
- Vercelアカウント
- Sanityアカウント

### 2. 依存関係のインストール

```bash
cd website
npm install
```

## 📊 Sanityの設定

### 1. Sanityプロジェクトの作成

```bash
# Sanity CLIをグローバルインストール
npm install -g @sanity/cli

# 新しいプロジェクトを作成
sanity init

# 以下の情報を入力:
# - Project name: second-self-blog
# - Dataset name: production
# - Project template: Clean project with no predefined schemas
```

### 2. Sanityスキーマの設定

```bash
# Sanityスタジオに移動
cd your-sanity-project

# スキーマファイルをコピー
cp ../website/sanity/schemas/blogPost.js schemas/
```

### 3. Sanity Studio の起動

```bash
# 開発サーバーを起動
sanity start

# ブラウザで http://localhost:3333 を開く
```

## 🔧 環境変数の設定

### 1. ローカル環境

```bash
# .env.local を作成
cp env.example .env.local

# 以下の値を設定:
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### 2. Sanity APIトークンの取得

1. Sanity管理画面 (https://www.sanity.io/manage) にログイン
2. プロジェクトを選択
3. 「API」タブをクリック
4. 「Add API token」をクリック
5. 名前を入力し、権限を「Editor」に設定
6. トークンをコピーして環境変数に設定

## 🌐 Vercelでのデプロイ

### 1. Vercelアカウントの作成

1. https://vercel.com にアクセス
2. GitHubアカウントでサインアップ

### 2. プロジェクトのデプロイ

```bash
# Vercel CLIをインストール
npm install -g vercel

# プロジェクトをデプロイ
vercel

# 以下の質問に回答:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? second-self-blog
# - Directory? ./website
```

### 3. 環境変数の設定

Vercelダッシュボードで以下を設定:

1. プロジェクトの「Settings」タブを開く
2. 「Environment Variables」セクションに移動
3. 以下の変数を追加:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = your_project_id
NEXT_PUBLIC_SANITY_DATASET = production
SANITY_API_TOKEN = your_api_token
```

## 🔄 GitHub Actionsの設定

### 1. GitHub Secretsの設定

リポジトリの「Settings」→「Secrets and variables」→「Actions」で以下を設定:

```
SANITY_PROJECT_ID = your_project_id
SANITY_DATASET = production
SANITY_API_TOKEN = your_api_token
GITHUB_TOKEN = (自動設定済み)
VERCEL_DEPLOY_HOOK = your_vercel_deploy_hook_url
```

### 2. Vercel Deploy Hookの取得

1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「Git」タブを開く
3. 「Deploy Hooks」セクションで新しいフックを作成
4. URLをコピーしてGitHub Secretsに設定

## 📝 コンテンツの同期

### 1. 初回同期

```bash
# 手動でスクリプトを実行
cd website
node scripts/sync-to-sanity.js
```

### 2. 自動同期の確認

1. Obsidianでブログ記事を編集
2. GitHubにプッシュ
3. GitHub Actionsが自動実行されることを確認
4. Sanityでコンテンツが更新されることを確認
5. Vercelサイトが自動デプロイされることを確認

## 🔍 トラブルシューティング

### よくある問題

1. **Sanity接続エラー**
   - 環境変数が正しく設定されているか確認
   - APIトークンの権限が「Editor」になっているか確認

2. **ビルドエラー**
   - `npm run build` でローカルビルドを確認
   - 依存関係を再インストール: `rm -rf node_modules package-lock.json && npm install`

3. **GitHub Actions失敗**
   - Secretsが正しく設定されているか確認
   - ワークフローファイルの構文を確認

### ログの確認

```bash
# ローカル開発サーバー
npm run dev

# プロダクションビルド
npm run build

# Vercelログ
vercel logs
```

## 🎯 パフォーマンス最適化

### 1. 画像最適化

- Next.js Image コンポーネントを使用
- Sanity CDNを活用

### 2. キャッシュ戦略

- ISR (Incremental Static Regeneration) を活用
- CDNキャッシュを最適化

### 3. SEO最適化

- メタタグの設定
- 構造化データの追加
- サイトマップの生成

## 📊 監視とメンテナンス

### 1. 監視ツール

- Vercel Analytics
- Google Analytics
- Sanity Insights

### 2. 定期メンテナンス

- 依存関係のアップデート
- セキュリティパッチの適用
- パフォーマンスの監視

## 🆘 サポート

問題が発生した場合は、以下のリソースを参照してください:

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Sanity ドキュメント](https://www.sanity.io/docs)
- [Vercel ドキュメント](https://vercel.com/docs)
- [GitHub Actions ドキュメント](https://docs.github.com/en/actions) 