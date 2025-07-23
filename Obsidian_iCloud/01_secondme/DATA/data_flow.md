# 02_data 運用メモ – フロー & 命名規約

最終更新: 2024-06-16

## 1. ディレクトリ構造
```
02_data/
├ raw/                 # 一次データ（取得元そのまま）
│   ├ voice/YYYY-MM/
│   ├ docs/ YYYY-MM/
│   └ media/YYYY-MM/
├ ai/                  # AI一次解析（文字起こし・要約）
│   ├ voice/YYYY-MM/
│   ├ docs/ YYYY-MM/
│   └ media/YYYY-MM/
└ reflexion/           # 自己洞察・決定・アイデア
    ├ voice/YYYY-MM/
    ├ docs/ YYYY-MM/
    └ media/YYYY-MM/
```
- `YYYY-MM` は月単位のフォルダ（例: `2025-06`）。
- `raw` → `ai` → `reflexion` の 3 段階で処理が進む。

## 2. ファイル命名規則
```
YYYYMMDD_<短いタイトル>.<拡張子>
例) 20250616_partner_talk.wav
```
- 文字起こし／要約 MD は同名で拡張子のみ `.md`。
- タイトルは半角英数・スネークケース推奨（検索しやすさ重視）。

## 3. YAML フロントマター（raw を除く）
```yaml
---
source: raw/voice/2025-06/20250616_partner_talk.wav
method: voice          # voice / docs / media
summary_level: first_pass   # first_pass / second_pass
impact: medium         # low / medium / high
domain: private        # business / private / mixed
tags: []
---
```
- `source` は vault ルートからの相対パス。
- `impact: high` のファイルはダッシュボードで強調表示。

## 4. ワークフロー概要
1. **Capture**:  `00_inbox` へファイルを置く。
2. **Ingest (scripts/ingest_raw.py)**:  `raw/` へ移動＋音声は Whisper 文字起こし MD を生成。
3. **Analyze (scripts/summarize_ai.py)**:  `ai/` に要約 MD を生成。
4. **Reflect**:   人が `reflexion/` に洞察を記述。`#decision` などタグ付け。
5. **Push (scripts/push_to_domain.py)**:  `#decision` タグを検出し Business / Private README へ転記。
6. **Archive**:   月次で `raw/YYYY-MM` を ZIP して `06_archive` へ移動。

## 5. Dataview ブロック例
### ai 高インパクト一覧
```dataview
table file.mtime as Updated, domain, impact
from "02_data/ai"
where impact = "high"
sort Updated desc
limit 30
```
### reflexion 決定事項一覧
```dataview
table file.mtime as Updated, source, domain
from "02_data/reflexion"
where contains(tags, "#decision")
```

## 6. 運用ルール
- **24h ルール**: inbox は翌日までに空にする。
- **ファイルサイズ**: raw 音声は 30 分以内 / 200MB 未満推奨。
- **second_pass 要約**: 月次で ai を再要約し、`summary_level: second_pass` に変更して first_pass を archive。

---
このメモは `02_data` のルートに置き、今後の運用基準として参照してください。 