# 04_data – データレイヤー全体概要

最終更新: 2025-06-13

このフォルダは「第二の自分」を支える **生データ → AI 初期解析 → 人間フィードバック → コア反映** の4段階フローを担います。さらに外部診断ツールなどの**フレームワーク指標**を別フォルダで管理します。

## 1. ディレクトリ構成
```
04_data/
├── 0.RAW/            # 一次ソース（音声・PDF・スクラップ等）
│   ├── voice/YYYY-MM/
│   ├── docs/YYYY-MM/
│   └── media/YYYY-MM/
│
├── 1.ai/             # AI一次解析（文字起こし・要約・クラスタリング）
│   └── 20250616_*.md など日付 + タイトルで保存
│
├── 2.reflexion/      # 人間の洞察・フィードバック
│   └── 2025/2025-06/ など年月で整理
│
├── 3.fundation/      # Core へ反映する"大容量の整理データ"
│   ├── 01_core_identity_fundation.md
│   ├── 02_thinking_psychology_fundation.md
│   └── …（Core/details と同じ10分類）
│
└── Framework/        # 診断・分析フレームワークの結果
    ├── MBTI/
    ├── StrengthsFinder/
    └── …
```
※ `3.fundation/` は "foundation" の語呂修正予定。数字プレフィックスはフロー順を示します。

## 2. YAML テンプレート
### 1.ai/ 例
```yaml
---
source: 04_data/0.RAW/voice/2025-06/20250616_partner_talk.wav
method: voice       # voice / docs / media
summary_level: first_pass   # first_pass / second_pass
impact: medium      # low / medium / high
---
```
### 2.reflexion/ 例
```yaml
---
source_ai: 04_data/1.ai/20250616_values_summary.md
insight_level: decision   # note / idea / decision
---
```
### 3.fundation/ 例
```yaml
---
sources:
  - 04_data/1.ai/20250616_values_summary.md
  - 04_data/2.reflexion/2025/06/20250617_values_reflexion.md
layer: fundation
core_target: 00_core/details/01_core_identity_details.md
---
```

## 3. ワークフロー
1. **Capture**: ファイルを `01_inbox` に置く → `ingest_raw.py` が 0.RAW へ振り分け
2. **Analyze**: `summarize_ai.py` が 1.ai に要約 MD を生成
3. **Reflect**: 人が 2.reflexion に洞察・意思決定を記録
4. **Fundation Build**: `build_fundation.py`（予定）が 3.fundation に大容量まとめを生成
5. **Push to Core**: 3.fundation のまとめを手動または `push_to_core.py` で 00_core/details へリンク
6. **Archive**: 月次で 0.RAW を ZIP して 06_archive へ移動

## 4. フレームワーク活用例
- MBTI, BIG5, StrengthsFinder の結果を Framework フォルダに保存
- fundation や Core details からリンクして別視点の指標として参照

## 5. Dataview クエリ例
```dataview
table file.mtime as Updated, source, impact
from "04_data/1.ai"
where impact = "high"
sort Updated desc
limit 30
```

## 6. TODO
- [ ] `3.fundation/` の綴りを `3.foundation/` に変更＋スクリプト修正
- [ ] `build_fundation.py` の実装
- [ ] Framework 直下を `4.framework/` として数値順に整理
- [ ] data_flow.md を本 README に統合 or 更新
