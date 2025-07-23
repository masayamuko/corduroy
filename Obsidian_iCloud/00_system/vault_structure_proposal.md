# Obsidian Vault 全体構成提案

## 現在の状況
- **AI am I/**: AI活用プロジェクト（整理済み）
- **data/**: 各種データ（整理済み）
- **デジタルME/**: デジタルme関連（整理済み）
- **project/**: プロジェクト関連（整理対象）
- **.obsidian/**: Obsidian設定

## 提案する全体構成

```
Obsidian_iCloud/
├── 01_personal/                    # 個人情報・基本データ
│   ├── 01_basic_info/             # 基本情報
│   ├── 02_values_beliefs/         # 価値観・信念
│   ├── 03_emotions_psychology/    # 感情・心理
│   ├── 04_thinking_patterns/      # 思考パターン
│   ├── 05_communication_style/    # コミュニケーション
│   ├── 06_decision_making/        # 意思決定
│   ├── 07_learning_style/         # 学習スタイル
│   ├── 08_problem_solving/        # 問題解決
│   ├── 09_interests_hobbies/      # 興味・趣味
│   ├── 10_skills_abilities/       # スキル・能力
│   ├── 11_daily_routines/         # 日常ルーティン
│   ├── 12_digital_footprint/      # デジタルフットプリント
│   ├── 13_memories_experiences/   # 記憶・経験
│   ├── 14_goals_plans/            # 目標・計画
│   └── 15_relationships/          # 人間関係
│
├── 02_projects/                    # プロジェクト・活動
│   ├── 01_client_work/            # クライアントワーク
│   │   ├── smiley_flowers/        # スマイリーフラワーズ
│   │   ├── hokkaido_study/        # 北海道留学センター
│   │   ├── daremo_ryugaku/        # 誰でも留学
│   │   └── other_clients/         # その他クライアント
│   │
│   ├── 02_creative_projects/      # 創作プロジェクト
│   │   ├── 3d_modeling/           # 3Dモデリング
│   │   ├── custom_keyboard/       # 自作キーボード
│   │   ├── fpv_drone/             # FPVドローン
│   │   ├── board_game/            # 自作ボードゲーム
│   │   └── other_creative/        # その他創作活動
│   │
│   ├── 03_learning_projects/      # 学習・研究プロジェクト
│   │   ├── technology_study/      # 技術学習
│   │   ├── research_activities/   # 研究活動
│   │   └── skill_development/     # スキル開発
│   │
│   ├── 04_education_projects/     # 教育・講座関連
│   │   ├── coaching_program/      # コーチングプログラム
│   │   ├── workshops/             # ワークショップ
│   │   └── school_activities/     # 学校活動
│   │
│   └── 05_archive/                # アーカイブ
│
├── 03_ai_projects/                 # AI関連プロジェクト
│   ├── 01_ai_am_i/                # AI am Iプロジェクト（既存）
│   ├── 02_digital_me_bootcamp/    # デジタルme育成BootCAMP
│   ├── 03_ai_tools_research/      # AIツール研究
│   └── 04_ai_experiments/         # AI実験・試行
│
├── 04_data/                        # データ・アーカイブ
│   ├── 01_chatgpt_data/           # ChatGPTデータ（既存）
│   ├── 02_plaud_data/             # PLAUD音声データ（既存）
│   ├── 03_research_data/          # 研究データ（既存）
│   ├── 04_social_data/            # ソーシャルデータ（既存）
│   ├── 05_company_data/           # 会社データ（既存）
│   └── 06_archive/                # アーカイブ（既存）
│
├── 05_templates/                   # テンプレート
│   ├── 01_daily_templates/        # 日常用テンプレート
│   ├── 02_project_templates/      # プロジェクト用テンプレート
│   ├── 03_meeting_templates/      # 会議用テンプレート
│   └── 04_review_templates/       # 振り返り用テンプレート
│
├── 06_archive/                     # 全体アーカイブ
│   ├── 01_old_projects/           # 古いプロジェクト
│   ├── 02_old_data/               # 古いデータ
│   └── 03_backup/                 # バックアップ
│
└── .obsidian/                      # Obsidian設定（既存）
```

## 各フォルダの役割と内容

### 01_personal/ - 個人情報・基本データ
- **目的**: 第二の自分構築のための基本データ
- **内容**: 現在の`デジタルME/`の内容を移行
- **特徴**: 静的な個人情報、価値観、特性など

### 02_projects/ - プロジェクト・活動
- **目的**: 実際の活動・プロジェクトの記録
- **内容**: クライアントワーク、創作活動、学習プロジェクト
- **特徴**: 動的な活動記録、進捗管理、成果物

### 03_ai_projects/ - AI関連プロジェクト
- **目的**: AI活用に関するプロジェクト
- **内容**: AI am I、デジタルme育成、AIツール研究
- **特徴**: AI活用の知識共有、実験、教育

### 04_data/ - データ・アーカイブ
- **目的**: 各種データの蓄積・管理
- **内容**: ChatGPTデータ、音声データ、研究データ
- **特徴**: 生データ、ログ、分析対象

### 05_templates/ - テンプレート
- **目的**: 繰り返し使用するフォーマット
- **内容**: 日記、プロジェクト、会議、振り返り
- **特徴**: 再利用可能なフォーマット

### 06_archive/ - 全体アーカイブ
- **目的**: 古いファイルの保管
- **内容**: 終了したプロジェクト、古いデータ
- **特徴**: 参照用、履歴保存

## 移行計画

### Phase 1: 基本構造の作成
1. 新しいフォルダ構造の作成
2. テンプレートフォルダの準備

### Phase 2: 既存データの移行
1. `デジタルME/` → `01_personal/` への移行
2. `project/` → `02_projects/` への移行
3. `AI am I/` → `03_ai_projects/01_ai_am_i/` への移行

### Phase 3: 整理・最適化
1. 重複ファイルの統合
2. リンクの更新
3. 不要ファイルのアーカイブ

## メリット

1. **明確な役割分担**: 各フォルダの目的が明確
2. **重複回避**: 類似コンテンツの分散を防止
3. **拡張性**: 新しいプロジェクトやデータの追加が容易
4. **保守性**: 整理・管理が簡単
5. **検索性**: 目的別の検索が可能

## データフローとレイヤー設計（2025-06 更新）

### 1. 5段階データフロー
```
RAW → AI → Reflexion → Fundation → Core
```
1. **RAW**: 音声・PDF・SNSポストなど一次ソースの生データ。
2. **AI**: RAW を AI 要約した中間データ（ChatGPT, Claude など）。
3. **Reflexion**: 人間によるフィードバック、評価、補足。
4. **Fundation**: プロジェクト／テーマごとに関連 md を自動集約した"知識ハブ"。
5. **Core**: details / summary / deepdive の 3 層に連動する公式ドキュメント。

### 2. Fundation ファイル構造
- フロントマター: `layer: fundation`, `core_target: <path/to/details.md>` を定義。
- `sources`: スクリプトで抽出した関連 md ファイルを列挙。
- `Extracted Notes`: Obsidian リンク形式で sources を再掲（Dataview 対応）。
- `Auto Summary`: 各 source md の冒頭 5 行を自動要約。
- **手動追記セクション**: Key Insights / Timeline / 代表事例 / OKR / Next Integration Points など。

### 3. build_fundation.py（自動化スクリプト）
- Vault 全体（ファイル名 + 本文）を検索し、関連 md を `sources` として抽出。
- 既存 Fundation md があれば追記、なければテンプレートから新規生成。
- `Auto Summary` を生成し、`Extracted Notes` を更新。
- 再実行で差分のみ反映し、手動記述は保持。

### 4. レイヤー別 README 例
| レイヤー | 目的 | 粒度 | 主要ファイル |
|-----------|------|------|--------------|
| summary | AI が最初に読む目次・要約 | 2〜6k 字 | `00_core/summary/*.md` |
| details | summary を支える基礎情報 | 6〜15k 字 | `00_core/details/*.md` |
| deepdive | details を生む高密度分析 | 15〜30k 字 | `00_core/deepdive/*.md` |
| fundation | 関連ノートの知識ハブ | 可変 | `04_data/3.fundation/*_fundation.md` |
| raw | 一次ソースデータ | 制限なし | `04_data/0.RAW/**` |

### 5. 運用フロー
1. 新規データは `04_data/0.RAW` へ投入。
2. 必要に応じて AI 要約を `04_data/1.ai` に保存。
3. build_fundation.py を実行 → Fundation 更新。
4. Fundation で要点抽出・Key Insights を追記。
5. 必要に応じて details / summary / deepdive へ反映。
6. Dataview / ダッシュボードで全体把握。

### 6. 今後の拡張
- impact タグ付与による優先度管理。
- Fundation ➜ DeepDive 自動リンク提案。
- データ視覚化ダッシュボード（DataviewJS, Observable）。

---

これらを踏まえた上で Vault 運用を進める。疑問点・改善案が出た際は本ファイルへ追記・更新する。

この構成で進めてよろしいでしょうか？ 