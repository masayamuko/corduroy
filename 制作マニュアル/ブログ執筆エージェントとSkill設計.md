# ブログ執筆エージェントとSkill設計

更新日: 2026-05-31
対象: コールテン公式ブログ `https://www.corduroy.co.jp/blog/`
目的: 精度を上げ、トークン消費を抑えながら、記事執筆から公開までを自律運用に寄せる

## 結論

ブログ執筆・公開業務は、**細かいサブエージェント大量分担より、細かいSkill群 + 少数の専門サブエージェント** がよい。

理由:

- 記事品質を揃える知識は、毎回使う「型」なので Skill 化が向いている
- サブエージェントは別コンテキストで動くため、調査・レビュー・画像チェック・分析などの独立タスクに向いている
- 執筆本文を複数サブエージェントで分担すると、文体・論旨・温度感が割れやすく、最後の統合作業でトークンが増える
- Skill は必要になったときだけ本文が読み込まれ、詳細資料は references に逃がせるため、繰り返し業務ではトークン効率がよい

推奨構成:

- **Tiki**: 編集長・オーケストレーター
- **Skill群**: 執筆手順、記事タイプ、公開チェック、ブランドボイス、構造化データ、内部リンクなどの再利用知識
- **サブエージェント**: 調査、執筆、ブランドレビュー、事実確認、画像、技術実装、効果測定の独立担当
- **スクリプト**: `blog:audit`, `blog:check`, 将来の `blog:queue`, `blog:new`, `blog:promote`

## 公式ドキュメントからの判断

### サブエージェントが向くこと

Claude Code 公式は、サブエージェントを「特定タスク用の専門アシスタント」とし、独立したコンテキスト、専用system prompt、個別ツール権限を持つものとして説明している。特に、検索結果・ログ・大量ファイルなど、メイン会話に残さなくてよい大きな情報を隔離する用途が強い。

また、独立調査は複数サブエージェントを並列で走らせるのが有効。ただし、返却結果が多すぎるとメイン会話のコンテキストを消費する。

したがって、ブログ業務では以下に向く。

- 競合・公式情報リサーチ
- GSC/GA4分析
- 既存記事の内部リンク候補抽出
- 事実確認
- 画像/OGPの不足確認
- コード・CI・公開フロー実装
- 公開前レビュー

逆に、本文を章ごとに別エージェントへ書かせる運用は原則避ける。章ごとの文体と前提がずれ、統合コストが増える。

### Skillが向くこと

Claude Code 公式は、Skill を `SKILL.md` と任意の supporting files で構成し、繰り返し使うワークフロー・スタイルガイド・ドメイン知識・スクリプトをまとめる仕組みとしている。通常は説明だけが常時コンテキストにあり、本文は呼び出し時に読み込まれる。詳細資料は references に置くことで、必要な時だけ読む設計ができる。

したがって、ブログ業務では以下に向く。

- コールテンの文体
- 記事タイプ別テンプレート
- SEO/AIOチェック
- インタビュー事実確認
- 公開前D/W/P/Aフロー
- Astro記事構造
- OGP/thumbnail要件
- `blog:check` の実行手順

Skillは「毎回同じ品質でやるための型」として使う。サブエージェントは「別コンテキストで調べる/検査する作業者」として使う。

### OpenAI Agents設計からの補強

OpenAI の Agents ガイドは、まず高性能モデルで性能基準を作り、あとから小さいモデルへ置き換えてコストと遅延を最適化する方針を推奨している。また、ツール定義は再利用・標準化・十分なテストが重要で、ツールが増えたら複数エージェントへ分けることを検討する、としている。

ブログ業務に当てはめると、最初から細かい執筆エージェントを乱立させるより、以下が安全。

1. Tiki + 高性能モデルで記事1本を最後まで作る基準を作る
2. 再利用できる判断をSkill化する
3. 調査・分析・検査だけ軽量エージェントへ分離する
4. 評価が安定した工程から小さいモデル/自動化へ移す

また、OpenAI ガイドは guardrails と human intervention を重視している。公開・push・デプロイ・クライアント実名記事は人間承認を残す。

## 比較

| 方式 | 精度 | トークン効率 | スピード | 運用品質 | 向いている用途 |
|---|---:|---:|---:|---:|---|
| 大量サブエージェントで章ごと執筆 | 中 | 低 | 高 | 低 | ラフ案大量生成 |
| 少数サブエージェント + Tiki統合執筆 | 高 | 中 | 中 | 高 | 重要記事・公開記事 |
| 細かいSkill群 + 必要時だけ参照 | 高 | 高 | 高 | 高 | 継続運用・品質標準化 |
| 巨大Skillひとつ | 中 | 低 | 中 | 中 | 初期試作 |
| スクリプト中心 | 高 | 最高 | 高 | 高 | 機械チェック・生成補助 |

最適解は **Skill群 + スクリプト + 少数サブエージェント**。

## 推奨サブエージェント構成

既存エージェントを最大限使い、新規作成は最小にする。

### 既存エージェントで足りる役割

| 工程 | 担当 | 役割 |
|---|---|---|
| 企画・編集判断 | Tiki | 公開候補選定、優先順位、最終統合 |
| 本文執筆 | `marketing-writer` | 構成案、本文、SNS展開 |
| ブランドレビュー | `marketing-director` | ブランドストーリー、Tiki/Tetoトーン、対外発信感 |
| 品質ゲート | `product-content-quality` | 文体、誤字、事実、公開前QA |
| 画像 | `product-image-creator` | OGP、thumbnail、挿絵 |
| 効果測定 | `marketing-analyst` | GSC/GA4、リライト候補 |
| 技術実装 | `dev-engineer` | Astro、script、CI、Vercel |
| 技術レビュー | `dev-reviewer` | CI、公開フロー、セキュリティ |
| 素材整理 | `ops-notetaker` | MTGメモ、音声文字起こし、要点抽出 |
| 自動化 | `ops-toolsmith` | blog:new/queue/promote、Mac mini連携 |
| クライアント確認 | `cs-manager` | クライアント情報、確認事項、公開リスク |

### 新規作成を検討する最小エージェント

既存で十分だが、将来作るなら以下の2つまで。

1. `blog-editor`
   - 役割: 記事単位の編集長。構成、論旨、公開価値、CTA、内部リンクを統合判断
   - ただし Tiki と役割が重なるため、最初は作らない

2. `blog-fact-checker`
   - 役割: クライアント実名、数値、外部公式情報、日付の検証
   - `product-content-quality` で不足が続いた場合のみ追加

作らないほうがよいエージェント:

- `blog-title-writer`
- `blog-intro-writer`
- `blog-faq-writer`
- `blog-cta-writer`
- `blog-internal-link-writer`

これらは細かすぎる。Skillやスクリプトで十分。

## 推奨Skill構成

Skillは細かく分ける。ただし1工程1Skillではなく、**呼び出し条件が違う単位**で分ける。

### 1. `corduroy-blog-orchestrator`

用途: ブログ業務全体の入口。

使う時:

- 「ブログ進めて」
- 「公開候補を選んで」
- 「下書きから公開まで回して」

中身:

- 素材確認
- 記事タイプ判定
- サブエージェント分担判断
- `blog:audit` / `blog:check` 実行判断
- Masaya承認ゲート

参照:

- `制作マニュアル/ブログ自律運用ロードマップ.md`
- `guidelines/blog-operations-manual.md`
- `guidelines/blog-publish-checklist.md`

### 2. `corduroy-blog-brief`

用途: 素材から記事ブリーフを作る。

使う時:

- 素材フォルダがある
- MTGメモや音声文字起こしから記事化する
- 記事候補を整理する

出力:

- slug候補
- タイトル候補
- 読者
- 記事タイプ
- CTA
- 必要な事実確認
- リスク
- 画像要件

### 3. `corduroy-blog-outline`

用途: 本文を書く前の構成案作成。

使う時:

- 企画が決まった
- 記事タイプが決まった

出力:

- `outline.json`
- H2/H3
- thesis
- target audience
- facts_to_verify
- internal_links
- images_needed

既存 `blog-write-v2` の plan-validate-execute をここに吸収する。

### 4. `corduroy-blog-draft`

用途: Astro記事下書き生成。

使う時:

- outlineが承認済み
- `.astro` の本文を生成する

中身:

- Astro構造
- Layout props
- JSON-LD
- breadcrumb
- article-lead
- FAQ
- noindex付きD状態

注意:

- 本文執筆は原則1エージェント/1Skillで一貫して作る
- 章ごとに別エージェントへ分割しない

### 5. `corduroy-blog-review`

用途: 公開前レビュー。

使う時:

- 下書きができた
- PR前
- 公開前

中身:

- ブランドボイス
- 誇大表現
- 事実確認
- クライアント確認
- SEO/AIO
- 内部リンク
- OGP/thumbnail
- `npm run blog:check`

### 6. `corduroy-blog-publish`

用途: 公開直前の手順。

使う時:

- Masayaが「公開して」「デプロイして」と明示した

中身:

- `disable-model-invocation: true` 相当で自動発火禁止
- noindex解除
- index追加
- llms.txt追加
- sitemap除外から削除
- dateModified更新
- blog:check
- PR/commit/pushの前に確認

### 7. `corduroy-blog-report`

用途: 公開後の効果測定。

使う時:

- 週次ブログレビュー
- 公開後7日/30日

中身:

- GSC/GA4
- CTR
- 検索クエリ
- 内部リンク改善
- リライト候補
- SNS展開候補

## references分割案

Skill本体を軽く保つため、詳細は references に置く。

```
corduroy-blog-orchestrator/
  SKILL.md
  references/
    workflow.md
    states.md
    agent-routing.md

corduroy-blog-outline/
  SKILL.md
  references/
    seo-article.md
    activity-report.md
    partner-story.md
    interview.md
    announcement.md

corduroy-blog-review/
  SKILL.md
  references/
    brand-voice.md
    fact-check.md
    seo-aio.md
    client-risk.md

corduroy-blog-publish/
  SKILL.md
  references/
    publish-checklist.md
  scripts/
    prepublish-check.sh
```

ポイント:

- `SKILL.md` は入口と手順だけ
- 長い記事タイプ別テンプレートは references
- 機械化できるものは scripts
- publish系Skillは自動発火禁止

## 推奨オーケストレーション

### 通常の新規記事

1. Tiki が `corduroy-blog-orchestrator` を使う
2. `corduroy-blog-brief` で素材を整理
3. 必要なら `research-investigator` / `cs-manager` に並列確認
4. `corduroy-blog-outline` で outline.json
5. Masaya確認が必要ならここで止める
6. `corduroy-blog-draft` で1人の書き手が本文作成
7. `product-content-quality` と `marketing-director` がレビュー
8. `dev-engineer` が `blog:check`
9. Masayaが公開GO
10. `corduroy-blog-publish`

### クライアント実名記事

追加で:

- `cs-manager`: クライアント情報確認
- `product-content-quality`: 実名・数値・発言チェック
- Masayaまたはクライアント確認ゲート

### SEO調査記事

追加で:

- `research-investigator`: 公式情報確認
- `marketing-analyst`: 既存クエリ・GSC観点

### 既存記事リライト

追加で:

- `marketing-analyst`: 流入・CTR・クエリ
- `dev-engineer`: 内部リンク・構造化データ修正

## トークン節約ルール

1. 常時読むのはSkill descriptionだけにする
2. 詳細ガイドは references に置き、必要な記事タイプだけ読む
3. サブエージェントには全文を渡さず、対象ファイルと成果物形式だけ渡す
4. サブエージェントの返答は「結論・根拠・修正案」だけに制限する
5. 本文執筆は分割しすぎず、1本の論旨を1つの会話で保つ
6. 機械チェックはスクリプト化し、LLMに読ませない
7. 公開・push・deploy系Skillは自動発火禁止にする

## 実装順

### Step 1: 既存 `blog-write-v2` を分割設計へ移す

- `outline` と `draft` を分ける
- v2は実験として残しつつ、新Skill群の設計に吸収

### Step 2: P0スクリプトとCI

- `blog:audit --json`
- `blog:queue`
- GitHub Actions に `npm run blog:check`

### Step 3: Skill群

最初に作るSkill:

1. `corduroy-blog-orchestrator`
2. `corduroy-blog-brief`
3. `corduroy-blog-outline`
4. `corduroy-blog-review`
5. `corduroy-blog-publish`

後で作るSkill:

6. `corduroy-blog-draft`
7. `corduroy-blog-report`

### Step 4: サブエージェント追加判断

最初は新規エージェントを作らない。

既存エージェントで3回以上同じ失敗が起きたら、以下を検討する。

- `blog-editor`
- `blog-fact-checker`

## 評価基準

以下で良し悪しを測る。

| 指標 | 目標 |
|---|---|
| Masaya確認回数 | 1記事あたり1-2回 |
| 公開前critical | 常に0 |
| warning数 | 新規記事は5以下 |
| 事実確認漏れ | 0 |
| ブランドトーン修正 | 初稿から2往復以内 |
| 公開作業の手動ステップ | 3以下 |
| 記事公開後の測定 | 7日後/30日後に自動 |

## 参照した公式ドキュメント

- Claude Code Docs: Create custom subagents  
  https://code.claude.com/docs/en/sub-agents
- Claude Code Docs: Extend Claude with skills  
  https://code.claude.com/docs/en/skills
- Anthropic: The Complete Guide to Building Skills for Claude  
  https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf
- OpenAI: A practical guide to building agents  
  https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf
- OpenAI Agents SDK: Handoffs  
  https://openai.github.io/openai-agents-python/handoffs/
