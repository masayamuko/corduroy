# Deep Dive レイヤー – 取扱説明書

最終更新: 2025-06-12

## 1. 目的
summary (要約) や details (全文) を読んでもなお「さらに深く構造化・考察された情報」を提供し、
AI と Masaya 本人が戦略立案・研究・自動化に活用できる"最深層ドキュメント"を集約します。

## 2. フォルダ構成
```
00_core/deepdive/
├── 01_core_identity_deepdive.md
├── 02_thinking_psychology_deepdive.md
├── … (03〜10)
└── README.md (本ファイル)
```
各ファイルは `source_links:` に対応する details ファイルを指定し、
追加で Data, reflexion, Business など関連ノートへ双方向リンクを張ります。

## 3. ファイル規約
- YAML `layer: deepdive` を必須
- `summary` フィールドに 2〜3 行で概要を書く
- セクション見出しは `# 1.` から連番
- 外部リンクは相対パス `[[04_data/...]]` 形式
- 追加データは **必ず** 出典を明記 (Voice Log, AI Summary など)

## 4. 更新フロー
1. 新たな洞察や分析結果が出たら Deep Dive を更新
2. 大幅改訂時は `06_archive/core_deepdive_archive_YYYYMMDD/` へ旧版をコピー
3. details ファイルへ `deepdive_ref:` を追記して相互リンク
4. Dataview で `layer: deepdive` を監視し、更新ファイルを可視化

## 5. Dataview 例
```dataview
table updated as "Updated", source_links
from "00_core/deepdive"
sort updated desc
```

## 6. TODO
- [ ] bias_analysis_2025Q3.md を Data フォルダに生成し 02_DeepDive とリンク
- [ ] 各 Deep Dive に `deepdive_ref` を追記 (details 側)
- [ ] Dataview Dashboard を vault ルートに設置 