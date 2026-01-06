# Astroサイト構成メモ

## ディレクトリ構造

```
Public/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # 共通レイアウト（ヘッダー・フッター含む）
│   ├── components/
│   │   ├── Header.astro          # ヘッダーコンポーネント
│   │   └── Footer.astro          # フッターコンポーネント
│   └── pages/
│       ├── index.astro           # TOPページ
│       ├── contact.astro         # コンタクトページ
│       ├── voices/
│       │   ├── index.astro       # クライアントの声一覧
│       │   ├── takaro.astro      # たかろーさん詳細
│       │   ├── takaro-showcase.astro  # たかろーさんショーケース
│       │   ├── sano.astro        # 佐野さん詳細
│       │   ├── kubota.astro      # 窪田さん詳細
│       │   └── numazawa.astro    # 沼澤さん詳細
│       ├── services/
│       │   ├── advisory.astro    # AI顧問サービス
│       │   ├── system.astro      # AIシステム開発
│       │   └── study/
│       │       ├── index.astro   # AI勉強会トップ
│       │       ├── basicAI.astro # AI基礎講座
│       │       ├── SecondME.astro # 第二の自分作り講座
│       │       └── AIdeWEB.astro # AIで作る体験講座
│       └── legal/
│           ├── privacy.astro     # プライバシーポリシー
│           └── tokushoho.astro   # 特定商取引法
├── public/
│   └── assets/
│       ├── images/               # ローカル画像
│       └── fonts/                # フォントファイル
└── Public_legacy_backup/         # HTMLバックアップ（削除しない！）
```

## 重要ファイル

### Layout.astro
- グローバルスタイル定義
- CSS変数（カラーパレット）
- フォント読み込み
- ヘッダー・フッター統合
- フェードインアニメーション

### Header.astro
- ナビゲーションメニュー
- ドロップダウン（サービス）
- ハンバーガーメニュー（モバイル）
- ロゴ表示

### Footer.astro
- コピーライト
- 主要リンク
- 法的ページへのリンク

## グローバルスタイル（CSS変数）

```css
:root {
  /* Core Palette */
  --green: #0b3326;
  --mint: #eef7f3;
  --mint-dark: #c8e1d6;
  --cream: #fbf9f5;
  --white: #ffffff;

  /* Accents */
  --accent: #d4a04d;
  --orange: #f2bd78;

  /* Text */
  --text: #1a2e28;
  --text-light: #486358;
  --ink: #052018;

  /* UI Elements */
  --line: #dbebe3;
  --line-strong: #bfd6cc;
  --sea: #16614e;

  /* Effects */
  --shadow-sm: 0 2px 4px rgba(5, 32, 24, 0.04), 0 1px 2px rgba(5, 32, 24, 0.02);
  --shadow-md: 0 8px 16px rgba(5, 32, 24, 0.06), 0 4px 8px rgba(5, 32, 24, 0.03);
  --shadow-lg: 0 24px 48px rgba(5, 32, 24, 0.08), 0 12px 24px rgba(5, 32, 24, 0.04);
}
```

## よく使うコンポーネントクラス

### カード
```html
<div class="card">
  <!-- コンテンツ -->
</div>
```

### セクションヘッド
```html
<div class="section-head fade-up">
  <small>Section Label</small>
  <h2>セクションタイトル</h2>
  <p>説明文</p>
</div>
```

### ボタン
```html
<a class="btn" href="/path">メインボタン</a>
<a class="btn secondary" href="/path">セカンダリボタン</a>
```

### 背景グラデーション
```html
<section class="bg-gradient-soft">
  <!-- 薄いグラデーション背景 -->
</section>

<section class="bg-contact">
  <!-- コンタクト用背景 -->
</section>
```

## 画像の扱い

### Cloudinary（外部画像）
```html
<img src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1234567890/filename.png" alt="説明">
```

### ローカル画像（public/assets）
```html
<img src="/assets/images/filename.png" alt="説明">
```

## 開発コマンド

```bash
# 開発サーバー起動
cd /Users/masaya/Desktop/Github/Corduroy/WEBSITE/Public
npm run dev

# ビルド
npm run build

# プレビュー（ビルド後）
npm run preview
```

## デプロイ

- **プラットフォーム**: Vercel
- **自動デプロイ**: mainブランチにpush時
- **ビルドコマンド**: `npm run build`
- **出力ディレクトリ**: `dist/`

## 注意事項

1. **レガシーバックアップを削除しない**: `Public_legacy_backup/` は重要なリファレンス
2. **画像URLは英数字のみ**: 日本語ファイル名はエンコーディング問題を引き起こす
3. **グローバルスタイルの優先**: 個別ページでのスタイル定義は最小限に
4. **コンポーネントの再利用**: 共通要素はcomponentsディレクトリに
5. **SEO対策**: 各ページで title, description, canonicalUrl を適切に設定
