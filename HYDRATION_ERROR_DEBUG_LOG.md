# Hydration Error Debug Log

## 問題概要
- **症状**: Next.jsでHydration failed エラーが継続的に発生
- **対象**: ブログ機能（一覧・個別記事ページ）
- **エラーメッセージ**: 
  - "Hydration failed because the initial UI does not match what was rendered on the server"
  - "Expected server HTML to contain a matching <script> in <body>"
  - "There was an error while hydrating this Suspense boundary"

## 環境情報
- **プロジェクトパス**: `/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian_iCloud/Public/WEB/Masaya`
- **初期Next.jsバージョン**: 14.0.4
- **最終テストバージョン**: 13.5.6
- **問題の経緯**: LLMO対策と多言語対応実装後にHydrationエラーが発生開始

## 試行した解決策

### 1. Sanity CMS関連の削除
**実施内容**:
- `sanity-studio/`, `sanity/`, `scripts/` ディレクトリを `/Users/masaya/.../WEB/` に移動
- package.jsonから `@sanity/client`, `@sanity/image-url` を削除
- `src/lib/sanity.ts` ファイルを削除
- next.config.jsから `cdn.sanity.io` ドメインを削除

**結果**: エラー継続

### 2. Analytics・StructuredData コンポーネントの無効化
**実施内容**:
- `[lang]/layout.tsx` で以下を無効化:
  ```tsx
  {/* <StructuredData /> */}
  {/* <GoogleAnalytics /> */}
  {/* <AnalyticsDebug /> */}
  ```
- 理由: これらのコンポーネントが `<script>` タグを `<body>` 内に出力していた

**結果**: エラー継続

### 3. Navigation コンポーネントの修正・無効化
**実施内容**:
- usePathname の使用を一時的に停止
- Navigation コンポーネント全体を無効化
- `{/* <Navigation /> */}` でコメントアウト

**結果**: エラー継続

### 4. ブログ個別記事ページの簡素化
**実施内容**:
- ReactMarkdown コンポーネントを削除
- 複雑なスタイリング（Tailwind CSS）を削除
- JSON-LD構造化データの `<script>` タグを削除
- generateMetadata 関数を削除
- プレーンテキスト表示に変更

**結果**: エラー継続

### 5. レイアウトファイルの完全簡素化
**実施内容**:
- `[lang]/layout.tsx` を最小限に簡素化:
  ```tsx
  return (
    <html lang={lang}>
      <body>
        {children}
      </body>
    </html>
  )
  ```
- フッター、複雑なCSSクラス、全てのコンポーネントを削除

**結果**: エラー継続

### 6. 個別記事専用レイアウトの作成
**実施内容**:
- `[lang]/blog/[slug]/layout.tsx` を作成
- 親レイアウトをバイパスする設定
- 最小限のHTML構造

**結果**: エラー継続

### 7. next.config.js の設定無効化
**実施内容**:
- リダイレクト設定を全て無効化
- ヘッダー設定を無効化
- 最小限の設定のみ残す

**結果**: エラー継続

### 8. generateStaticParams の無効化
**実施内容**:
- `[slug]/page.tsx` の generateStaticParams 関数をコメントアウト
- Suspense boundary エラーの対策

**結果**: Suspenseエラーは解決したが、基本的なHydrationエラーは継続

### 9. Pages Router への移行
**実施内容**:
- `pages/ja/blog/index.tsx` と `pages/ja/blog/[slug].tsx` を作成
- App Router から Pages Router に変更
- getStaticProps/getStaticPaths を使用
- 完全にスタンドアロンなページ構造

**結果**: エラー継続

### 10. Next.js バージョンダウングレード
**実施内容**:
- package.json で Next.js を 14.0.4 → 13.5.6 に変更
- より安定したバージョンでのテスト

**結果**: エラー継続

## 現在の状況
- **サーバー**: http://localhost:3001 で動作中（Next.js 13.5.6）
- **テスト対象URL**: 
  - `/ja/blog` - ブログ一覧
  - `/ja/blog/asus-zenbeame1` - 個別記事
- **最新テスト**: `/test` ページで基本的なNext.js動作確認中

## 推定される原因
1. **環境固有の問題**: iCloud同期フォルダでの開発
2. **TypeScript設定の問題**: tsconfig.json の設定
3. **多言語ルーティングの根本的問題**: `[lang]` パラメータ処理
4. **依存関係の競合**: 複数のReactコンポーネントライブラリ
5. **Next.js App Router の既知のバグ**: 特定の設定での不安定性

## 次のステップ候補
1. **完全新規プロジェクト**: 別の場所で新しいNext.jsプロジェクトを作成
2. **iCloudフォルダ外での開発**: ローカルディスクでの開発に移行
3. **依存関係の最小化**: 必要最小限のパッケージのみでテスト
4. **React Strict Mode の無効化**: development での strict mode 無効化

## ファイル構造（現在）
```
src/
├── app/[lang]/          # App Router（エラー継続）
│   ├── blog/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   └── layout.tsx
├── posts/ja/            # Markdownファイル（正常）
│   ├── asus-zenbeame1.md
│   └── ...
└── pages/ja/blog/       # Pages Router（エラー継続）
    ├── index.tsx
    └── [slug].tsx
```

## 重要な発見
- **最小限のページでもエラー発生**: 静的コンテンツのみでもHydration失敗
- **App Router・Pages Router 両方でエラー**: ルーティング方式の問題ではない
- **Next.js バージョンに依存しない**: 13.5.6でも14.0.4でも同じエラー
- **コンポーネントの複雑さに関係ない**: 最小限のHTMLでもエラー発生

## 結論
この問題は単純なコード修正では解決できない根本的な環境・設定問題である可能性が高い。新しいアプローチまたは環境変更が必要。

**サーバー動作状況：**
- ✅ Next.js開発サーバーが起動中
- ✅ ポート3000でリッスン中（hbci = ポート3000）
- ✅ プロセスID: 81337
- ✅ 複数の接続が確立されている（ブラウザからのアクセスがある）

**アクセスURL：**
```
http://localhost:3000
```

サーバーは正常に動作しており、ブラウザからのアクセスも受け付けています。Masayaのウェブサイトを確認できます！🚀