# Vercel デプロイメント & 環境変数設定ガイド

## 🚀 Google Analytics 4 環境変数設定

### 1. Vercelダッシュボードでの設定
1. [Vercel Dashboard](https://vercel.com/dashboard)にログイン
2. `masayamuko.com`プロジェクトを選択
3. **Settings** → **Environment Variables**に移動
4. 以下の環境変数を追加：

```
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-856TC3950F
Environments: Production, Preview, Development
```

### 2. デプロイメント
環境変数設定後、以下のいずれかの方法でデプロイ：

#### 方法A: 自動デプロイ（推奨）
- GitHubにプッシュすると自動的にデプロイされます
- 現在のプッシュで自動デプロイが開始されます

#### 方法B: 手動デプロイ
```bash
# Vercel CLIを使用
npx vercel --prod
```

### 3. 設定確認
デプロイ後、以下を確認：
1. **サイトアクセス**: https://masayamuko.com
2. **Google Analytics**: リアルタイムでアクセス数を確認
3. **開発者ツール**: Consoleでgtag関数が動作していることを確認

## 📊 Google Analytics 4 確認方法

### 1. リアルタイムレポート
1. [Google Analytics](https://analytics.google.com/)にログイン
2. **リアルタイム**レポートを開く
3. サイトにアクセスして、リアルタイムユーザー数が増加することを確認

### 2. ページビュー確認
- 各ページにアクセスして、ページビューが記録されることを確認
- 特に以下のページをテスト：
  - ホームページ (`/`)
  - ブログ (`/blog`)
  - プロジェクトページ (`/projects/second-self`)
  - イベントページ (`/events/boardgame`)

### 3. イベント追跡（今後の拡張）
現在は基本的なページビューのみ。今後以下のイベントを追加予定：
- ボタンクリック
- 外部リンククリック
- スクロール深度
- フォーム送信

## 🔧 トラブルシューティング

### Google Analyticsが動作しない場合
1. **環境変数確認**: Vercelで`NEXT_PUBLIC_GA_MEASUREMENT_ID`が設定されているか
2. **ビルド確認**: デプロイ後に新しいビルドが実行されているか
3. **ブラウザ確認**: 開発者ツールでgtag関数が読み込まれているか
4. **AdBlocker**: 広告ブロッカーが無効になっているか

### よくある問題
- **環境変数が反映されない**: デプロイ後に新しいビルドが必要
- **リアルタイムで表示されない**: 数分の遅延は正常
- **プレビュー環境で動作しない**: 環境変数がPreview環境にも設定されているか確認

## 📈 次のステップ
1. Google Search Consoleでサイトマップ送信
2. 検索パフォーマンスの監視
3. コンバージョン目標の設定
4. カスタムイベントの追加 