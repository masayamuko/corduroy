# touroku-shien

福岡で特定技能・インドネシア人材の受け入れを支える登録支援機関サイト（プレビュー限定）。

## 状態

**非公開プレビュー** — 登録支援機関の認可取得後に公開予定。
現在 Vercel Authentication + noindex + robots Disallow で外部アクセスを遮断中。

## 技術スタック

- Astro 5
- @astrojs/vercel (Vercel adapter)
- CSS Custom Properties (Tailwindなし)
- Vercel Functions + Resend (お問い合わせフォーム / 予定)

## ローカル開発

```bash
npm install
npm run dev
```

## ディレクトリ

```
src/
├── lib/           # 定数・データ
├── layouts/       # 共通レイアウト
├── components/    # 再利用コンポーネント
├── pages/         # ファイルベースルーティング
└── styles/        # global.css
public/
├── robots.txt     # Disallow: /
└── llms.txt       # 非公開告知
```

## 公開化チェックリスト（認可下りた時）

- [ ] 登録番号プレースホルダ (`登24登-XXXXXX`) を実番号に差し替え (`src/lib/constants.ts`)
- [ ] 全コピーを行政書士＋チャン（legal-compliance）で法令再チェック
- [ ] Vercel Authentication を OFF
- [ ] `vercel.json` から `X-Robots-Tag` ヘッダーを削除
- [ ] `src/lib/constants.ts: IS_PREVIEW = false`
- [ ] `public/robots.txt` を許可形式に書き換え
- [ ] `public/llms.txt` を本番版に差し替え
- [ ] `astro.config.mjs` の sitemap filter を解除
- [ ] 本番ドメインをVercelに紐付け
- [ ] 公示事項と整合性チェック（屋号・住所・支援担当者）
- [ ] Search Console / GA4 連携

## 参照

- プラン: `/Users/masaya/.claude/plans/floofy-gathering-platypus.md`
- リサーチ成果物: `Dropbox/Corduroy.inc/services/登録支援機関/`
- デザインガイド: `./design.md`
