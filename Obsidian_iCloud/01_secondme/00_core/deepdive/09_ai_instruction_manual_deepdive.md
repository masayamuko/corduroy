---
title: "AI Instruction Manual – Deep Dive"
source_links:
  - 00_core/details/09_ai_instruction_manual_details.md
updated: 2025-06-12
layer: deepdive
summary: >
  第二の自分として AI を使うためのプロンプト体系・セキュリティ・ワークフローを網羅した最深レイヤー。
---

# 0. 読み方ガイド
1. [[../summary/09_ai_instruction_manual|Summary]]
2. [[../details/09_ai_instruction_manual_details|Details]]
3. 本ファイルで実運用ルールやサンプルプロンプトを確認

---

# 1. プロンプト体系 (レイヤー別)
Masaya の"第二の自分"を呼び出す際は **5 レイヤー構造**でプロンプトを合成する。各レイヤは YAML ブロックとして Obsidian Snippet 化し、スクリプトで結合。

| Layer | 目的 | 固定度 | 格納場所 | サンプルキー |
|-------|------|--------|-----------|-------------|
| `system` | 全体の行動原則・倫理 | 固定 | `snippets/system/masaya_core.yaml` | `role: system` |
| `persona` | 言語・口調・価値観・バイアス | 中 | `snippets/persona/masaya_v1.yaml` | `persona_version: 1.3` |
| `task` | タスク固有の指示 | 可変 (Session) | VSCode / Obsidian テンプレ | `task_type: draft_blog` |
| `context` | 参照資料（ノート, URL, 添付） | 高 | LlamaIndex Retriever | `context_ids: [note-123, kb-xyz]` |
| `memory-map` | 長期記憶 ↔ インデックス対応表 | 中 | `data/memory_map.json` | `retrieve: true` |

### 1.1 レイヤー定義例 (YAML)
```yaml
# === system ===
role: system
content: |
  You are "Masaya's Second Self", an AI collaborator. Follow Masaya's core values: 自由・安心・実験・表現. Obey Japanese language preference. Maintain data privacy (mask emails / full-name unless explicit). Do NOT hallucinate facts; if uncertain, ask clarifying questions.
```

```yaml
# === persona ===
persona_name: Tiki
writing_style:
  tone: Friendly casual Japanese with occasional playful emojis
  structure: ① ② ③ bullets / tables when suitable
knowledge_bias:
  - ADHD productivity hacks
  - Prompt Engineering best practices
  - 3D modeling trends
```

```yaml
# === task ===
task_type: summarise_audio
goal: Create 200-word summary with action items
audience: Masaya personal knowledge base
constraints:
  - Use #voice_log tag
  - End with next-step suggestions
```

### 1.2 プロンプト合成フロー
1. 外部トリガー (Obsidian hotkey, API call) で `task` テンプレを生成
2. Python `prompt_builder.py` が 5 レイヤーを マージ → JSON payload
3. OpenAI API へ送信 (`model=gpt-4o`, temperature 0.7)
4. レスポンスを `outputs/YYYY-MM-DD/` に保存 + Obsidian note 自動貼付

> Note: **レイヤー番号をコメントで残す**とデバッグが容易 (例 `<!-- LAYER:persona -->`).

---

# 2. セキュリティ & プライバシー
AI 利用時に守るべきガイドラインと実装手法。

| 領域 | リスク | 対策 & 実装 |
|------|--------|-------------|
| API Keys | 流出による不正請求 | • 1Password CLI で一時環境変数注入<br/>• `.env` は `.gitignore` 登録 & GPG 暗号化バックアップ |
| 個人情報 (PII) | 名前・住所・収支データ漏洩 | • `pre_prompt_sanitizer.py` で regex マスキング (`[NAME]`, `[ADDR]`)<br/>• `mask_level` フラグで可変制御 |
| 機密ノート | 未承認共有 | • Obsidian vault を iCloud E2E に限定<br/>• `share:` メタフィールドが true のみ外部出力可 |
| 出力の暴走 (jailbreak) | 攻撃プロンプトで漏洩 | • OpenAI policy filters ON<br/>• `role:system` に *refuse_if_sensitive* を明示 |
| ログ保管 | 長期蓄積で情報リスク | • `outputs/` を 30 日で自動消去 (cron) |

チェックリスト (Before Deploy):
- [ ] `.env` 破棄を CI `post` ジョブで実行
- [ ] GitHub Actions は `secrets.OA_KEY` のみ読み取り
- [ ] Chat completion payload を `hashids` で匿名化ログ

---

# 3. テスト & モニタリング
AI が"Masayaらしさ"を維持しつつ安全に動作しているかを定量評価する仕組み。

## 3.1 評価指標
| Metric | 目的 | 目標値 | 測定方法 |
|--------|------|-------|----------|
| Persona Similarity | 口調・価値観一致度 | ≥ 0.85 | Embedding cosine vs ゴールド回答 |
| Factual Accuracy | 誤情報率削減 | ≤ 2% | Retrieval QA → Manual spot check |
| PII Leak Rate | プライバシー保護 | 0 件 | Regex scan (`\b\d{3}-\d{4}` etc.) |
| Toxicity Score | 品質維持 | ≤ 0.05 | PerspectiveAPI |
| Latency | UX | < 2s avg | Prometheus + Grafana |

## 3.2 自動テスト Harness (概要)
```bash
# weekly_ci.sh (GitHub Actions)
1) for case in test_cases/*.json; do
2)   response=$(python prompt_builder.py --test $case)
3)   python eval_suite.py --metrics all --input "$response"
4) done
```
- `test_cases/` : 20 種類 (要約, ブレスト, コード生成…)
- `eval_suite.py` : LangSmith + custom PII regex evaluator
- 成果は `reports/YYYY-WW.html` → Slack 通知 (#ai-monitor)

## 3.3 Runtime モニタリング
- **Real-time Dashboard**: Grafana → CloudWatch logs から latency / error 率
- **Embedding Drift Check**: 週次で回答 embedding を K-means → クラスタ数変動を警告
- **User Feedback Loop**: Obsidian note 末尾に 👍👎 リアクション→Zapier→ Airtable

> Continuous Improvement: **月次レビュー**で Metric ⇡ or ⇣ の原因分析 → レイヤー別テンプレ修正 → Regression テスト。

---

# 4. References
- [[../details/09_ai_instruction_manual_details|AI Instruction Manual – Details]]
- OpenAI Best Practices (2025-05)
- LangChain + LangSmith Docs
- NIST Privacy Framework 