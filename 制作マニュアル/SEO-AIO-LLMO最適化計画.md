# SEO・AIO・LLMO 最適化計画書

株式会社コールテン企業サイトの検索エンジン最適化（SEO）、AI検索最適化（AIO）、LLM最適化（LLMO）のための包括的な改善計画書です。

> [!IMPORTANT]
> この計画は「見た目やテキストコンテンツを変更せずに」裏側の構成で改善する方針で作成されています。

---

## 目次

1. [現状分析](#現状分析)
2. [SEO最適化施策](#seo最適化施策)
3. [AIO最適化施策](#aio最適化施策)
4. [LLMO最適化施策](#llmo最適化施策)
5. [実装計画](#実装計画)
6. [検証計画](#検証計画)

---

## 現状分析

### サイト構成

| ファイル種別 | ファイル数 | 詳細 |
|------------|----------|------|
| トップページ | 1 | `index.html` |
| サービスページ | 4 | `services/study/index.html`, `services/study/AI-workshop.html`, `services/advisory.html`, `services/system.html` |
| クライアント声ページ | 6 | `voices/index.html`, `voices/takaro.html` など |
| 法的情報ページ | 2 | `legal/privacy.html`, `legal/tokushoho.html` |
| お問い合わせ | 1 | `contact.html` |
| クライアント紹介 | 2 | `clients/bgcafe.html`, `clients/takaro.html` |

### 現状の良い点 ✅

- Google Analytics（G-GTLHM3EM7C）導入済み
- 各ページに固有の `<title>` タグ設定済み
- 基本的な `<meta name="description">` 設定済み
- `<meta charset>` と `<meta viewport>` 設定済み
- favicon 設定済み
- セマンティックなHTML構造（`<header>`, `<main>`, `<section>`, `<footer>`）

### 改善が必要な点 ⚠️

| カテゴリ | 現状 | 影響度 |
|---------|------|-------|
| robots.txt | **なし** | 高 |
| sitemap.xml | **なし** | 高 |
| 構造化データ（JSON-LD） | **なし** | 高 |
| OGP（Open Graph Protocol） | **なし** | 高 |
| Twitter Card | **なし** | 中 |
| canonical タグ | **なし** | 中 |
| hreflang | **なし**（日本語のみなので低優先度） | 低 |
| パフォーマンス最適化 | 一部改善可能 | 中 |

---

## SEO最適化施策

### 1. robots.txt の作成

**ファイル:** `Public/robots.txt`

```txt
User-agent: *
Allow: /

Sitemap: https://corduroy.co.jp/sitemap.xml
```

> [!NOTE]
> Vercelでホスティングしている場合、ルートに配置するだけで自動的に認識されます。

---

### 2. sitemap.xml の作成

**ファイル:** `Public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- トップページ -->
  <url>
    <loc>https://corduroy.co.jp/</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- サービスページ -->
  <url>
    <loc>https://corduroy.co.jp/services/study/</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://corduroy.co.jp/services/advisory.html</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://corduroy.co.jp/services/system.html</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- お問い合わせ -->
  <url>
    <loc>https://corduroy.co.jp/contact.html</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- クライアントの声 -->
  <url>
    <loc>https://corduroy.co.jp/voices/</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://corduroy.co.jp/voices/takaro.html</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- 法的情報 -->
  <url>
    <loc>https://corduroy.co.jp/legal/privacy.html</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://corduroy.co.jp/legal/tokushoho.html</loc>
    <lastmod>2026-01-04</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

### 3. canonical タグの追加

各HTMLファイルの `<head>` 内に追加：

```html
<link rel="canonical" href="https://corduroy.co.jp/[現在のページURL]">
```

**効果:** 重複コンテンツの防止、検索エンジンへの正規URLの明示

---

### 4. OGP（Open Graph Protocol）の追加

各HTMLファイルの `<head>` 内に追加：

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://corduroy.co.jp/">
<meta property="og:title" content="株式会社コールテン｜想いを大切にするAI活用サポート">
<meta property="og:description" content="紹介限定・長期前提で伴走するAIパートナー。AI勉強会・顧問・システム開発で、想いに寄り添いながら小さく試して広げます。">
<meta property="og:image" content="https://corduroy.co.jp/assets/images/ogp.png">
<meta property="og:locale" content="ja_JP">
<meta property="og:site_name" content="株式会社コールテン">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://corduroy.co.jp/">
<meta name="twitter:title" content="株式会社コールテン｜想いを大切にするAI活用サポート">
<meta name="twitter:description" content="紹介限定・長期前提で伴走するAIパートナー。AI勉強会・顧問・システム開発で、想いに寄り添いながら小さく試して広げます。">
<meta name="twitter:image" content="https://corduroy.co.jp/assets/images/ogp.png">
```

> [!TIP]
> OGP画像（ogp.png）は1200×630pxで作成することを推奨します。

---

### 5. 構造化データ（JSON-LD）の追加

#### 5.1 Organization スキーマ（トップページ用）

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "株式会社コールテン",
  "alternateName": "Corduroy Inc.",
  "url": "https://corduroy.co.jp/",
  "logo": "https://corduroy.co.jp/assets/images/logo.png",
  "description": "紹介限定・長期前提で伴走するAIパートナー。AI勉強会・顧問・システム開発で、想いに寄り添いながら小さく試して広げます。",
  "foundingDate": "2024",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://corduroy.co.jp/contact.html",
    "availableLanguage": ["Japanese"]
  },
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  }
}
</script>
```

#### 5.2 Service スキーマ（サービスページ用）

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI勉強会",
  "provider": {
    "@type": "Organization",
    "name": "株式会社コールテン",
    "url": "https://corduroy.co.jp/"
  },
  "name": "AI勉強会",
  "description": "AIを「優秀な人間」に例え、専門用語を使わずにAIの基礎と可能性をお伝えすることにはじまり、さまざまな事例に触れつつ多様な仕事での導入や活用を追求します。",
  "url": "https://corduroy.co.jp/services/study/",
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  }
}
</script>
```

#### 5.3 Review/Testimonial スキーマ（クライアントの声ページ用）

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "株式会社コールテン"
  },
  "author": {
    "@type": "Person",
    "name": "中野たかろーさん",
    "jobTitle": "フリーランス"
  },
  "reviewBody": "「検索ツール」から「第二の自分」へ。価値観を学習させたAIとの対話で、孤独な制作業務に最強の相談相手を獲得。"
}
</script>
```

#### 5.4 BreadcrumbList スキーマ（全ページ共通）

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ホーム",
      "item": "https://corduroy.co.jp/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "サービス",
      "item": "https://corduroy.co.jp/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AI勉強会",
      "item": "https://corduroy.co.jp/services/study/"
    }
  ]
}
</script>
```

---

## AIO最適化施策

AI検索（Google SGE、Bing Chat等）に最適化するための施策です。

### 1. 明確なFAQ構造の実装

FAQスキーマを追加（既存のコンテンツから抽出）：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "コールテンのAI勉強会とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIを「優秀な人間」に例え、専門用語を使わずにAIの基礎と可能性をお伝えすることにはじまり、さまざまな事例に触れつつ多様な仕事での導入や活用を追求する勉強会です。"
      }
    },
    {
      "@type": "Question",
      "name": "AI顧問サービスではどのようなサポートを受けられますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "クライアントさまの想いと事業を深く理解し、常に最新の情報と実践を活かしたブレないAI活用で伴走し続けます。ご予算に合わせた頻度や作業を対応できます。"
      }
    }
  ]
}
</script>
```

### 2. セマンティックHTML強化

```html
<!-- 既存のセクションに role と aria-label を追加 -->
<section id="services" role="region" aria-labelledby="services-heading">
  <h2 id="services-heading">3つのサービス</h2>
  ...
</section>
```

### 3. About Us ページ構造化

Organization スキーマにより企業情報を明確に伝達。

---

## LLMO最適化施策

LLM（ChatGPT、Claude等）がサイト情報を正確に理解・引用できるようにする施策です。

### 1. llms.txt の作成

**ファイル:** `Public/llms.txt`

```txt
# 株式会社コールテン

> 紹介限定・長期前提で伴走するAIパートナー

株式会社コールテンは、AI活用支援を専門とする企業です。「想いを大切に！そのためのAI活用」をコンセプトに、以下のサービスを提供しています。

## サービス

### AI勉強会
AIを「優秀な人間」に例え、専門用語を使わずにAIの基礎と可能性をお伝えします。さまざまな事例に触れつつ多様な仕事での導入や活用を追求します。

### AI顧問
クライアントさまの想いと事業を深く理解し、常に最新の情報と実践を活かしたブレないAI活用で伴走し続けます。

### AIシステム開発
現場の想いや専門性をとことん引き出し、それを反映させたAIシステムを設計・開発します。

## 企業理念

コールテンは、絵本『くまのコールテンくん』から名付けられました。ボタンが欠けて売れ残ったぬいぐるみ"コールテン"のように、「欠けている」と思う部分も含めて、その人の魅力であり、物語を動かす力になる、と信じています。

## コンタクト

お問い合わせ: https://corduroy.co.jp/contact.html

## 法的情報

- プライバシーポリシー: https://corduroy.co.jp/legal/privacy.html
- 特定商取引法に基づく表記: https://corduroy.co.jp/legal/tokushoho.html
```

### 2. .well-known/ai-plugin.json の作成（将来対応）

ChatGPT プラグイン対応用の設定ファイル（現時点では任意）。

### 3. メタデータの充実

```html
<!-- AI/LLM向けメタデータ -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="author" content="株式会社コールテン">
<meta name="keywords" content="AI活用,AI導入支援,AI勉強会,AI顧問,AIシステム開発,DX推進,中小企業AI,福岡">
```

---

## 実装計画

### フェーズ1: 基本SEO（優先度：高）

| 順序 | タスク | 対象ファイル | 推定時間 |
|-----|-------|------------|---------|
| 1 | robots.txt 作成 | `Public/robots.txt` | 5分 |
| 2 | sitemap.xml 作成 | `Public/sitemap.xml` | 15分 |
| 3 | OGP画像作成 | `Public/assets/images/ogp.png` | 30分 |
| 4 | OGPタグ追加（全ページ） | 全HTMLファイル（15ファイル） | 60分 |
| 5 | canonical タグ追加 | 全HTMLファイル | 30分 |

### フェーズ2: 構造化データ（優先度：高）

| 順序 | タスク | 対象ファイル | 推定時間 |
|-----|-------|------------|---------|
| 6 | Organization スキーマ追加 | `index.html` | 15分 |
| 7 | Service スキーマ追加 | サービス関連ページ（4ファイル） | 30分 |
| 8 | BreadcrumbList スキーマ追加 | サブページ全体（14ファイル） | 45分 |
| 9 | Review スキーマ追加 | `voices/*.html`（5ファイル） | 30分 |

### フェーズ3: LLMO対応（優先度：中）

| 順序 | タスク | 対象ファイル | 推定時間 |
|-----|-------|------------|---------|
| 10 | llms.txt 作成 | `Public/llms.txt` | 15分 |
| 11 | FAQスキーマ追加 | 適切なページ | 30分 |

### フェーズ4: パフォーマンス最適化（優先度：中）

| 順序 | タスク | 対象 | 推定時間 |
|-----|-------|-----|---------|
| 12 | 画像最適化（WebP変換） | 画像ファイル | 45分 |
| 13 | CSS/JS の外部ファイル化 | 共通部分の抽出 | 120分 |
| 14 | preload/preconnect の最適化 | 全HTMLファイル | 30分 |

---

## 検証計画

### 自動テスト

| ツール | 確認項目 | URL |
|-------|---------|-----|
| Google Search Console | サイトマップ登録、インデックス状況 | https://search.google.com/search-console |
| Google Rich Results Test | 構造化データの検証 | https://search.google.com/test/rich-results |
| Schema.org Validator | JSON-LD の構文検証 | https://validator.schema.org/ |
| Facebook Sharing Debugger | OGP の検証 | https://developers.facebook.com/tools/debug/ |
| Twitter Card Validator | Twitter Card の検証 | https://cards-dev.twitter.com/validator |

### 手動確認

1. **robots.txt 確認**
   - `https://corduroy.co.jp/robots.txt` にアクセス
   - 内容が正しく表示されることを確認

2. **sitemap.xml 確認**
   - `https://corduroy.co.jp/sitemap.xml` にアクセス
   - XMLが正しくパースされることを確認

3. **OGP プレビュー確認**
   - Facebook/Twitter でURLを共有した際のプレビュー表示を確認

4. **llms.txt 確認**
   - `https://corduroy.co.jp/llms.txt` にアクセス
   - 内容が正しく表示されることを確認

---

## 対象ファイル一覧

### 修正対象HTMLファイル

| ファイルパス | 追加する要素 |
|------------|------------|
| `index.html` | OGP, canonical, Organization Schema, FAQ Schema |
| `contact.html` | OGP, canonical, Breadcrumb Schema |
| `services/study/index.html` | OGP, canonical, Service Schema, Breadcrumb Schema |
| `services/study/AI-workshop.html` | OGP, canonical, Service Schema, Breadcrumb Schema |
| `services/study/workshop.html` | OGP, canonical, Service Schema, Breadcrumb Schema |
| `services/advisory.html` | OGP, canonical, Service Schema, Breadcrumb Schema |
| `services/system.html` | OGP, canonical, Service Schema, Breadcrumb Schema |
| `voices/index.html` | OGP, canonical, Breadcrumb Schema |
| `voices/takaro.html` | OGP, canonical, Review Schema, Breadcrumb Schema |
| `voices/kubota.html` | OGP, canonical, Breadcrumb Schema |
| `voices/numazawa.html` | OGP, canonical, Breadcrumb Schema |
| `voices/sano.html` | OGP, canonical, Breadcrumb Schema |
| `voices/takaro-showcase.html` | OGP, canonical, Breadcrumb Schema |
| `legal/privacy.html` | OGP, canonical, Breadcrumb Schema |
| `legal/tokushoho.html` | OGP, canonical, Breadcrumb Schema |

### 新規作成ファイル

| ファイルパス | 内容 |
|------------|------|
| `robots.txt` | クローラー制御 |
| `sitemap.xml` | サイトマップ |
| `llms.txt` | LLM向け情報 |
| `assets/images/ogp.png` | OGP用画像（1200×630px） |

---

## 補足資料

### 参考リンク

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [llms.txt 仕様](https://llmstxt.org/)

### 注意事項

> [!WARNING]
> 実装後は必ずGoogle Search Consoleでインデックス状況を確認し、エラーがないことを確認してください。

> [!CAUTION]
> 本番環境のURLが `corduroy.co.jp` と異なる場合は、sitemap.xml および各種メタタグ内のURLを正しいドメインに修正してください。

---

*最終更新: 2026年1月4日*
