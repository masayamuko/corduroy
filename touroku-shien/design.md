# 登録支援機関サイト — デザインガイド

## ブランドコンセプト

**「受け入れたあとが、見える。」**

不透明な業界に対し、**透明性・誠実・あたたかさ**で差別化する。
日本×インドネシアの文化が交わる「あたたかい入口」としての佇まい。

## カラーパレット

### メインカラー
- **Navy（信頼）**: `#0F3057` — Header / Footer / 見出し
- **Warm Orange（あたたかさ）**: `#E89F4A` — CTA / アクセント / アイコン
- **Off-White（誠実）**: `#FAF7F2` — ベース背景

### サブカラー
- **Forest Green**: `#2D5F3F` — インドネシア×ハラル文脈アクセント
- **Sand**: `#F0E6D2` — セクション背景の切り替え

### テキスト
- **Body**: `#1F2937`
- **Muted**: `#6B7280`
- **Inverse**: `#FFFFFF`

## タイポグラフィ

- システムフォントスタック: `-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic UI", Meiryo, sans-serif`
- 見出し: Weight 700, 行間 1.4
- 本文: Weight 400, 行間 1.8
- 数字（数値で見るセクション）: Weight 800, large

## トーン

- 専門用語はかみ砕いて補足する（読者は非エンジニアの中小企業経営者）
- 「絶対」「すべき」「No.1」「業界最安」は使わない
- 「たぶん」「一旦」「試してみる」は誠実トーンでOK
- 上から目線を避ける、対等な相棒として語る
- 文末は柔らかく（〜です・〜ます基調、たまに体言止め）

## 禁止表現（法令準拠・公開前再チェック）

- 「合格率100%」「業界No.1」「業界最安」「絶対に」
- 「保証金」「天引き」「違約金」（特定技能制度の文脈で）
- 「他社の◯倍手厚い」（比較優位の定量表現）
- 「official」「kokutei」「authorized」（誇大表現リスク）

## レイアウト原則

- Mobile First（375px基準）
- 最大幅 1200px、コンテンツ幅 880px
- セクション間 vertical rhythm: 80px (PC) / 56px (SP)
- カード角丸: 12px
- ボタン角丸: 8px

## アクセシビリティ

- WCAG AA以上のコントラスト比
- フォーカスリング明示（`outline: 3px solid var(--c-orange)`）
- prefers-reduced-motion対応
- 画像は alt 必須

## 画像方針

- ヒーロー: 福岡の街×働く人（在留外国人）の自然な瞬間
- アイコン: SVG inline（ライブラリ依存しない）
- 写真: Cloudinary `res.cloudinary.com/dg3mdcuju/...` 経由
- フォールバック: `ImageWithFallback.astro`
