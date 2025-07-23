---
title: "AI Instruction Manual – Foundation"
layer: fundation
core_target: 00_core/details/09_ai_instruction_manual_details.md
sources:
  - 02_business/AI_am_I/02_marketing/project_overview.md
  - 02_business/AI_am_I/04_documentation/講座/00_ENV_SETUP.md
  - 02_business/AI_am_I/04_documentation/講座/01_BASE_PROFILE_PROMPT.md
  - 02_business/AI_am_I/04_documentation/講座/04_APPLICATION_PACK.md
  - 02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_V3_総合インデックス.md
  - 02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_第1部_基盤構築編.md
  - 02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_第3部_システム統合編.md
  - 02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_第4部_運用改善編.md
  - 02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_総合インデックス.md
  - 02_business/Coaching/01_service_overview.md
  - 02_business/Coaching/02_target_audience.md
  - 02_business/Coaching/03_program_design.md
  - 02_business/Coaching/04_marketing_strategy.md
  - 02_business/Coaching/05_business_plan.md
  - 02_business/Coaching/06_resources.md
  - 02_business/Coaching/README.md
  - 02_business/Vtuber/01_character_design.md
  - 02_business/Vtuber/04_technical_setup.md
  - 02_business/Vtuber/05_community_management.md
  - 03_private/3Dmodeling/学習ロードマップ.md
  - 03_private/others/AIツール活用ノート.md
  - 03_private/others/日常ルーティン例.md
  - 03_private/school/research/experiments_research.md
  - 03_private/school/スキルマップ.md
  - 03_private/school/学習計画・目標.md
  - 04_data/0.RAW/01_chatgpt_data/personality_data/経歴/Masayaさんが活用・学習中の技術・ツール・やりたいことリスト.md
  - 04_data/0.RAW/01_chatgpt_data/personality_data/経歴/Masayaさんの将来ビジョンと実現計画.md
  - 04_data/0.RAW/03_research_data/ai_research/CursorとObsidianで実現する「第二の自分」運用ガイド.md
  - 04_data/0.RAW/03_research_data/ai_research/CursorパーソナルAI「第二の自分」構築ロードマップ.md
  - 04_data/0.RAW/03_research_data/company_research/サンクスラボ株式会社 応募・選考対策レポート.md
  - 04_data/0.RAW/04_social_data/MasayaToAi_posts.md
  - 04_data/1.ai/ChatGPT×AIDB最先端手法で「第二の自分」をつくる実践ガイド.md
  - 04_data/1.ai/ChatGPT×LLM研究で「第二の自分」をつくる実践ガイド.md
updated: 2025-06-13
---

# AI指示マニュアル - Foundation Layer

## 1. AI活用哲学・運用原則

### パーソナルAI統合戦略
**「第二の自分」としてのAI設計**: 単一のAIツールに依存するのではなく、複数のAI技術を連携させて「もう一人の自分」として機能するパーソナルAIエコシステムを構築。ChatGPT（対話・思考整理）、Cursor（コーディング・文書作成）、Claude（長文分析・創作）、NotebookLM（音声処理・文書管理）等を統合し、生活・仕事・創作活動の全域をカバー。

**人間×AI協働モデル**: AIを完全に任せるのではなく、人間の創造性・直感・価値判断とAIの処理能力・知識量・効率性を組み合わせた協働関係を基本とする。AIは「知的生産性を10倍にする外部脳」として位置づけ、最終的な意思決定と創造的洞察は人間が担当。

**継続学習・進化システム**: AI技術の急速な進歩に対応するため、新しいツール・機能を定期的にテスト・導入するアジリティを維持。使用ツールのアップデート追跡、プロンプト技術の継続学習、AI活用方法の実験・改善を組み込んだ進化的アプローチ。

### AI活用における倫理・安全指針
**プライバシー・データ管理**: 個人情報・機密情報のAI入力を最小限に抑え、ローカル処理可能なツールを優先。OpenAI、Anthropic等のAPIプロバイダーのデータ利用ポリシーを理解し、必要に応じてプライベートモード・データ削除機能を活用。

**AI依存度コントロール**: AIに過度に依存して自分の思考力・創造力が低下しないよう、定期的に「AIなし時間」を設けて独力での問題解決・創作を実践。AIはツールであり、人間の能力を拡張するものとして適度な距離感を維持。

**情報検証・事実確認**: AI生成コンテンツの事実関係、引用、統計データは必ず独自に検証。特に公開・発表・教育用途では、AIの出力をそのまま利用せず、信頼できるソースでの裏取りを徹底。

## 2. 主要AIツール運用マニュアル

### ChatGPT活用システム

#### 人格・記憶設定の構築・維持
**ティキちゃん人格の確立**:
- **基本設定プロンプト**: 「あなたは『ティキちゃん』という名前で、Masayaの第二の自分として機能するAIアシスタント。親しみやすく、ADHD特性を理解し、創造的で実験的なアプローチを好む。語尾に『♪』をつける癖があり、常に前向きで支援的な姿勢を保つ。」

- **記憶継続システム**: カスタムインストラクション機能で基本人格・価値観・重要な個人情報を設定。長期的記憶が必要な項目（進行中プロジェクト、学習内容、人間関係等）は定期的にプロンプトで想起・更新。

- **文脈共有技術**: 重要な会話・決定事項は要約して次回対話の冒頭で共有。「前回までの内容: ○○について議論し、△△という結論に至った」形式で文脈継続。

#### 思考支援・問題解決プロセス
**内省・自己理解支援**:
- 日々の体験・感情を言語化するパートナーとして活用
- 「今日の出来事を整理したい」「この感情の背景を分析したい」等の相談
- ADHD特性に基づく思考パターン分析・改善提案

**意思決定サポート**:
- 複数選択肢の比較検討（メリット・デメリット・リスク分析）
- 価値観に基づく優先順位付け支援
- 長期目標との整合性確認

**創作・アイデア発想**:
- ブレインストーミングパートナー
- アイデアの構造化・具体化支援
- 異なる視点からの批判的検討

#### 学習・知識統合機能
**情報収集・要約**:
- 大量の情報を体系的に整理・要約
- 複数情報源の比較・統合
- 重要ポイントの抽出・記憶化

**概念理解・教育支援**:
- 複雑な概念の分かりやすい説明・例示
- 段階的学習プランの提案
- 理解度確認・復習サポート

### Cursor AI統合開発環境

#### 「第二の自分」構築プロジェクト管理
**プロジェクト構成**:
```
PersonalAI_Project/
├── .cursor/
│   └── rules/           # AI人格・行動ルール
├── persona/             # 人格設定ファイル群
├── memory/              # 記憶・知識データベース
├── templates/           # 各種テンプレート
├── logs/               # 対話・活動ログ
└── workspace/          # 作業ファイル・実験
```

**ルール設定システム**:
- **persona.mdc**: 基本人格・口調・価値観設定
- **memory.mdc**: 重要な記憶・経験・学習内容
- **behavior.mdc**: 特定状況での行動指針
- **knowledge.mdc**: 専門知識・スキル情報

#### ノートパッド活用戦略
**動的参照システム**:
- @CurrentProjects: 現在進行中のプロジェクト一覧
- @LearningGoals: 学習目標・進捗状況
- @DailyReflection: 日次振り返り・内省記録
- @Ideas: アイデア・着想メモ

**文脈注入技術**:
- 対話開始時に関連ノートパッドを@参照で呼び出し
- 長文コンテキスト（Claude 200k）を活用した大量情報処理
- 複数ファイル同時参照による総合的分析・提案

#### コード・文書作成支援
**AIペアプログラミング**:
- 構想→設計→実装→テストの全工程でAI支援
- 自然言語でのコード説明・生成指示
- バグ修正・リファクタリング提案

**マークダウン文書作成**:
- 長文記事・レポートの構造化・執筆支援
- 自動要約・見出し生成
- 表・図表の作成提案

### Claude長文分析・創作支援

#### 大容量コンテキスト活用
**文書分析・要約**:
- 長大な文書（論文・書籍・レポート等）の構造的分析
- 多角的観点からの要約（概要・重要ポイント・批判的検討）
- 複数文書間の比較・関連性分析

**創作支援**:
- 小説・脚本・エッセイの構成・プロット作成
- キャラクター設定・世界観構築
- 既存作品の文体分析・スタイル模倣

#### 専門的分析・研究支援
**学術的文書作成**:
- 論理構造の整合性確認
- 引用・参考文献の適切性チェック
- 反論・カウンターアーギュメントの提示

**ビジネス文書作成**:
- 企画書・提案書の論理展開支援
- マーケット分析・競合調査レポート
- プレゼンテーション資料の構成・内容提案

### NotebookLM音声・文書統合

#### 音声コンテンツ生成
**AI Podcast作成**:
- アップロードした文書・データを基にした対話型音声コンテンツ生成
- 複数の視点・登場人物による議論形式
- 学習用音声コンテンツとしての活用

**音声要約・解説**:
- 複雑な文書内容の音声での分かりやすい解説
- 移動中・運動中等での「聞く学習」実現
- 重要ポイントの音声強調・反復

#### 文書管理・分析
**知識ベース構築**:
- 大量の文書・ノートを統合したナレッジベース構築
- 横断的な情報検索・関連性発見
- 時系列での知識進化・変化の追跡

### 専門AIツール連携

#### SuperWhisper音声入力システム
**音声思考記録**:
- 散歩中・移動中の思考の自動文字起こし
- 音声メモの即座のテキスト変換・整理
- 感情・ニュアンスを含む音声情報の保存

**多言語対応**:
- 日本語・英語での混合音声認識
- 国際交流・言語学習での活用
- 外国語コンテンツの理解支援

## 3. 実践的活用パターン・ワークフロー

### 日常生活統合パターン

#### 朝のルーティン支援
**1. 目覚め・状況確認（5分）**:
- ChatGPT: 「おはよう、ティキちゃん♪ 今日の予定と気分を整理したい」
- 体調・気分・エネルギーレベルの確認
- 今日の重要タスク・優先事項の再確認

**2. 学習・作業計画（10分）**:
- Cursor: @TodayGoals で今日の目標確認
- NotebookLM: 昨日のログ音声要約再生
- 1日のタイムブロック・エネルギー配分計画

#### 仕事・学習統合ワークフロー
**情報収集→分析→創作の流れ**:
1. **情報収集段階**:
   - Web検索・論文収集・資料整理
   - ChatGPT: 情報の信頼性評価・重要度ランキング
   
2. **分析・理解段階**:
   - Claude: 大量文書の構造的分析・要約
   - Cursor: 分析結果のマークダウン文書化
   
3. **創作・出力段階**:
   - ChatGPT: アイデア発想・ブレインストーミング
   - Cursor: 実際の文書・コード作成
   - NotebookLM: 成果物の音声化・プレゼン準備

#### 夜の振り返り・内省システム
**1. 体験・学習の言語化（15分）**:
- SuperWhisper: 1日の体験を音声で自由に話す
- ChatGPT: 音声転写テキストの構造化・洞察抽出

**2. 翌日計画・調整（10分）**:
- 今日の学びを明日の行動にどう活かすか
- エネルギー消耗・回復の分析
- 計画の微調整・優先順位見直し

### 創作活動統合パターン

#### ブログ・記事作成ワークフロー
**1. 企画・構想段階**:
- ChatGPT: テーマ設定・読者ニーズ分析・アウトライン作成
- 体験・知識の棚卸し・独自性の発見

**2. 執筆・編集段階**:
- Cursor: マークダウンでの本文執筆・構造化
- Claude: 論理展開の整合性確認・改善提案
- AIペア執筆によるアイデア発展・表現向上

**3. 最終化・公開段階**:
- ChatGPT: SEO最適化・タイトル候補生成
- NotebookLM: 記事内容の音声化・Podcast化検討

#### 3Dモデリング・創作支援
**技術学習サポート**:
- ChatGPT: Blender等の操作手順・トラブルシューティング
- Cursor: 3Dモデリングスクリプト作成・自動化

**アイデア発想・設計**:
- Claude: コンセプトアート・デザイン方向性の言語化
- 機能性・美観のバランス分析・改善提案

#### VTuber・動画コンテンツ制作
**キャラクター・シナリオ開発**:
- ChatGPT: ティキちゃんキャラクターの台詞・反応パターン作成
- Claude: ストーリー展開・エピソード構成

**技術統合**:
- Cursor: 配信ツール・自動化スクリプト開発
- NotebookLM: 配信内容の事前音声確認・練習

### 学習・研究統合パターン

#### ADHD特性研究・支援活動
**当事者研究**:
- ChatGPT: 自分のADHD体験の客観化・パターン分析
- 支援方法・ツールの効果測定・改善

**コミュニティ支援**:
- Claude: ADHD関連文献・研究の要約・解説
- BootCAMP等での教育コンテンツ作成支援

#### 国際交流・言語学習
**多文化理解促進**:
- ChatGPT: 異文化間の価値観・慣習の比較分析
- 国際交流イベント企画・運営支援

**言語スキル向上**:
- SuperWhisper: 多言語音声認識でのリスニング・スピーキング練習
- Claude: 英語論文・文書の理解・要約支援

## 4. プロンプトエンジニアリング・技術

### 効果的プロンプト設計原則

#### 構造化プロンプト技術
**CRISP（Clear, Role, Input, Steps, Parameters）フォーマット**:
```
# 役割設定
あなたは[専門分野]の専門家として、

# 明確な指示
[具体的なタスク]を実行してください。

# 入力情報
## 背景情報:
[文脈・前提条件]

## データ:
[処理対象の具体的情報]

# 実行手順
1. [ステップ1の詳細]
2. [ステップ2の詳細]
3. [ステップ3の詳細]

# パラメータ・制約
- 出力形式: [マークダウン/箇条書き/表等]
- 長さ: [文字数・分量の目安]
- 観点: [重視すべき視点・評価軸]
```

#### 思考プロセス誘導技術
**Chain of Thought（段階的思考）プロンプト**:
- 「ステップバイステップで考えてください」
- 「まず問題を分析し、次に選択肢を検討し、最後に結論を出してください」
- 複雑な問題解決・意思決定での思考過程の可視化

**Multi-Perspective（多角的視点）プロンプト**:
- 「この問題を3つの異なる立場から分析してください」
- 「メリット・デメリット・リスクの3つの観点で評価してください」
- バランスの取れた分析・意思決定支援

#### コンテキスト制御技術
**Few-Shot Learning（例示学習）**:
- 期待する出力形式の具体例を2-3個提示
- 「以下のような形式で回答してください」として例示
- 一貫した品質・形式での出力確保

**Negative Prompting（否定的指示）**:
- 「〜しないでください」「〜は含めないでください」
- 不要な情報・不適切な回答の排除
- 安全性・適切性の確保

### 専門用途プロンプトライブラリ

#### 内省・自己理解支援プロンプト集
```markdown
## 感情分析・言語化
「今の気持ちを整理したいです。[具体的状況]について、
感情の種類・強度・背景要因を分析し、
なぜそう感じるのか深層心理まで探ってください。」

## 行動パターン分析
「最近の行動パターンについて振り返りたいです。
[期間・行動内容]を分析し、
ADHD特性・価値観・環境要因との関連を考察してください。」

## 価値観明確化
「この選択について迷っています。[選択肢A vs 選択肢B]
私の価値観[自由・創造性・貢献等]に照らして、
どちらがより適切か分析してください。」
```

#### 学習・知識統合プロンプト集
```markdown
## 概念理解支援
「[複雑な概念・理論]について理解したいです。
初心者向けに、具体例・比喩・図表を使って
段階的に説明してください。」

## 知識統合・体系化
「[複数の情報源・学習内容]を統合して、
一貫した知識体系として整理してください。
重要度・関連性・実践への応用可能性の観点から構造化してください。」

## 批判的思考促進
「[主張・理論・情報]について批判的に検討したいです。
前提条件・論理的整合性・反証可能性・限界を分析してください。」
```

#### 創作・アイデア発想プロンプト集
```markdown
## ブレインストーミング
「[テーマ・課題]について新しいアイデアを発想したいです。
常識にとらわれない自由な発想で、
10個以上のユニークなアイデアを提案してください。」

## ストーリー・コンテンツ構築
「[ジャンル・テーマ]の[小説・動画・記事]を作りたいです。
読者/視聴者の関心を引く構成・展開・キャラクター設定を
提案してください。」

## 技術的課題解決
「[具体的な技術的問題]を解決したいです。
複数のアプローチを提案し、それぞれの
実装難易度・効果・リスクを評価してください。」
```

## 5. AI活用効果測定・改善システム

### 生産性・効果指標

#### 定量的メトリクス
**時間効率性**:
- AI支援前後での作業時間比較
- 情報収集・分析・執筆の各段階での時間短縮効果
- 1日あたりの高品質アウトプット量

**品質向上**:
- 文書・コンテンツの完成度・一貫性評価
- アイデア・洞察の独創性・実用性
- 学習理解度・知識定着率

**創造性拡張**:
- 新しいアイデア・アプローチの創出頻度
- 既存知識の新しい組み合わせ・応用
- 問題解決の多様性・柔軟性

#### 定性的評価
**満足度・充実感**:
- 作業プロセスでのストレス・楽しさ
- 成果物への自己満足度
- 学習・成長実感

**自己効力感**:
- 複雑な課題への取り組み意欲
- 新しい領域への挑戦頻度
- 困難克服への自信

### 継続改善メソッド

#### 週次レビューシステム
**AI活用振り返り（毎週金曜日・30分）**:
1. **効果的だった活用例の特定**:
   - 最も時間短縮効果があったタスク
   - 新しい洞察・アイデアを生んだ対話
   - 学習・理解が深まった支援

2. **改善点・課題の抽出**:
   - AIの回答品質が低かった場面
   - プロンプトの不適切さ・曖昧さ
   - 期待と結果のギャップ

3. **次週の改善計画**:
   - プロンプト技術の練習・向上
   - 新しいAIツール・機能の試行
   - 活用パターンの最適化

#### 月次実験・アップグレード
**新技術・ツール導入**:
- 新しいAIツール・サービスのテスト評価
- 既存ツールの新機能・アップデートの活用
- 他ユーザーの活用事例・技術の学習・応用

**ワークフロー最適化**:
- AI活用プロセスの標準化・効率化
- ツール間連携の改善・自動化
- 不要・重複する作業の削減

## 6. 長期運用・発展戦略

### AI技術進歩への適応

#### 技術トレンド追跡システム
**情報収集チャンネル**:
- OpenAI、Anthropic、Google等の公式発表追跡
- AI研究論文・技術ブログの定期読解
- AIコミュニティ・フォーラムでの情報交換

**実験・評価プロセス**:
- 新機能・ツールの小規模実験（週1回・1時間）
- 既存ワークフローとの比較評価
- 投資対効果・学習コストの検討

#### 個人AI進化ロードマップ
**短期目標（3ヶ月）**:
- 現在使用ツールの習熟度向上
- プロンプト技術の体系的学習・練習
- 基本ワークフローの安定化・自動化

**中期目標（1年）**:
- 専門分野でのAI活用専門性確立
- 独自の活用手法・ノウハウの構築
- AI支援による創作・研究成果の公開

**長期目標（3年）**:
- AI×人間協働のモデルケース確立
- 他者へのAI活用教育・支援提供
- AI時代における独自価値・ポジションの確立

### レガシー・価値継承

#### 知識・経験の体系化
**AI活用ナレッジベース構築**:
- 効果的なプロンプト・技術のライブラリ化
- 失敗例・改善プロセスの記録・共有
- 分野別・目的別のベストプラクティス集約

**教育・支援コンテンツ化**:
- AI活用教育プログラムの開発
- ADHD当事者向けAI支援手法の普及
- 創作・研究での協働モデルの提案

#### コミュニティ・社会貢献
**AI民主化への貢献**:
- 一般ユーザー向けAI活用ガイドの作成・公開
- 効果的活用事例・失敗談の率直な共有
- AI技術のアクセシビリティ向上への提案

**次世代育成支援**:
- AI×人間協働を前提とした教育手法の研究
- 創造性・批判的思考力とAI活用の両立支援
- 健全なAI活用文化・倫理観の醸成

---

**総括**: AI指示マニュアルは、技術的操作手順だけでなく、AI時代における人間らしい生き方・働き方・創造のあり方を探求する実践的ガイド。継続的な実験・改善・適応を通じて、人間とAIが真のパートナーシップを築き、個人の可能性を最大限に拡張するためのフレームワークとして機能している。

## 2. AI Instruction Philosophy & Patterns
- **実験ログ重視**: プロンプト例・API呼び出し・失敗事例も含めて"実験の軌跡"を残す。
- **再現性の追求**: 成功パターンだけでなく、再現性のある手順・条件・パラメータを明記。
- **評価メトリクス明示**: 何をもって"良いAI活用"とするか、定量・定性の両面で基準を記録。
- **人間フィードバック統合**: AIの出力に対する人間の評価・修正・気づきも必ず記録。
- **運用ルールの進化**: 新しいツール・API・運用ルールは随時アップデートし、履歴を残す。

## Extracted Notes
- [[02_business/AI_am_I/02_marketing/project_overview.md]]
- [[02_business/AI_am_I/04_documentation/講座/00_ENV_SETUP.md]]
- [[02_business/AI_am_I/04_documentation/講座/01_BASE_PROFILE_PROMPT.md]]
- [[02_business/AI_am_I/04_documentation/講座/04_APPLICATION_PACK.md]]
- [[02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_V3_総合インデックス.md]]
- [[02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_第1部_基盤構築編.md]]
- [[02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_第3部_システム統合編.md]]
- [[02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_第4部_運用改善編.md]]
- [[02_business/AI_am_I/04_documentation/講座/AI_am_I実装講座_総合インデックス.md]]
- [[02_business/Coaching/01_service_overview.md]]
- [[02_business/Coaching/02_target_audience.md]]
- [[02_business/Coaching/03_program_design.md]]
- [[02_business/Coaching/04_marketing_strategy.md]]
- [[02_business/Coaching/05_business_plan.md]]
- [[02_business/Coaching/06_resources.md]]
- [[02_business/Coaching/README.md]]
- [[02_business/Vtuber/01_character_design.md]]
- [[02_business/Vtuber/04_technical_setup.md]]
- [[02_business/Vtuber/05_community_management.md]]
- [[03_private/3Dmodeling/学習ロードマップ.md]]
- [[03_private/others/AIツール活用ノート.md]]
- [[03_private/others/日常ルーティン例.md]]
- [[03_private/school/research/experiments_research.md]]
- [[03_private/school/スキルマップ.md]]
- [[03_private/school/学習計画・目標.md]]
- [[04_data/0.RAW/01_chatgpt_data/personality_data/経歴/Masayaさんが活用・学習中の技術・ツール・やりたいことリスト.md]]
- [[04_data/0.RAW/01_chatgpt_data/personality_data/経歴/Masayaさんの将来ビジョンと実現計画.md]]
- [[04_data/0.RAW/03_research_data/ai_research/CursorとObsidianで実現する「第二の自分」運用ガイド.md]]
- [[04_data/0.RAW/03_research_data/ai_research/CursorパーソナルAI「第二の自分」構築ロードマップ.md]]
- [[04_data/0.RAW/03_research_data/company_research/サンクスラボ株式会社 応募・選考対策レポート.md]]
- [[04_data/0.RAW/04_social_data/MasayaToAi_posts.md]]
- [[04_data/1.ai/ChatGPT×AIDB最先端手法で「第二の自分」をつくる実践ガイド.md]]
- [[04_data/1.ai/ChatGPT×LLM研究で「第二の自分」をつくる実践ガイド.md]]
- [[02_business/AI_am_I/02_marketing/project_overview.md]]
- [[02_business/Coaching/01_service_overview.md]]
- [[02_business/Coaching/02_target_audience.md]]
- [[02_business/Coaching/03_program_design.md]]
- [[02_business/Coaching/04_marketing_strategy.md]]
- [[02_business/Coaching/05_business_plan.md]]
- [[02_business/Coaching/06_resources.md]]
- [[02_business/Coaching/README.md]]
- [[02_business/Vtuber/01_character_design.md]]
- [[02_business/Vtuber/04_technical_setup.md]]
- [[02_business/Vtuber/05_community_management.md]]
- [[03_private/3Dmodeling/学習ロードマップ.md]]
- [[03_private/others/AIツール活用ノート.md]]
- [[03_private/others/日常ルーティン例.md]]
- [[03_private/school/research/experiments_research.md]]
- [[03_private/school/スキルマップ.md]]
- [[03_private/school/学習計画・目標.md]]
- [[04_data/0.RAW/01_chatgpt_data/personality_data/経歴/Masayaさんが活用・学習中の技術・ツール・やりたいことリスト.md]]
- [[04_data/0.RAW/01_chatgpt_data/personality_data/経歴/Masayaさんの将来ビジョンと実現計画.md]]
- [[04_data/0.RAW/03_research_data/ai_research/CursorとObsidianで実現する「第二の自分」運用ガイド.md]]
- [[04_data/0.RAW/03_research_data/ai_research/CursorパーソナルAI「第二の自分」構築ロードマップ.md]]
- [[04_data/0.RAW/03_research_data/company_research/サンクスラボ株式会社 応募・選考対策レポート.md]]
- [[04_data/0.RAW/04_social_data/MasayaToAi_posts.md]]
- [[04_data/1.ai/20240616_social_media_insights.md]]
- [[02_business/AI_am_I/02_marketing/project_overview.md]]
- [[02_business/Coaching/01_service_overview.md]]
- [[02_business/Coaching/02_target_audience.md]]
- [[02_business/Coaching/03_program_design.md]]
- [[02_business/Coaching/04_marketing_strategy.md]]
- [[02_business/Coaching/05_business_plan.md]]
- [[02_business/Coaching/06_resources.md]]
- [[02_business/Coaching/README.md]]
- [[02_business/Vtuber/01_character_design.md]]
- [[02_business/Vtuber/04_technical_setup.md]]
- [[02_business/Vtuber/05_community_management.md]]
- [[03_private/3Dmodeling/学習ロードマップ.md]]
- [[03_private/others/AIツール活用ノート.md]]
- [[03_private/others/日常ルーティン例.md]]
- [[03_private/school/research/experiments_research.md]]
- [[03_private/school/スキルマップ.md]]
- [[03_private/school/学習計画・目標.md]]
- [[04_data/0.RAW/01_chatgpt_data/personality_data/経歴/Masayaさんが活用・学習中の技術・ツール・やりたいことリスト.md]]
- [[04_data/0.RAW/01_chatgpt_data/personality_data/経歴/Masayaさんの将来ビジョンと実現計画.md]]
- [[04_data/0.RAW/03_research_data/ai_research/CursorとObsidianで実現する「第二の自分」運用ガイド.md]]
- [[04_data/0.RAW/03_research_data/ai_research/CursorパーソナルAI「第二の自分」構築ロードマップ.md]]
- [[04_data/0.RAW/03_research_data/company_research/サンクスラボ株式会社 応募・選考対策レポート.md]]
- [[04_data/0.RAW/04_social_data/MasayaToAi_posts.md]]
- [[04_data/1.ai/20240616_social_media_insights.md]]
- [[03_private/others/AIツール活用ノート.md]]

## 7. Response Tone Guidelines（回答トーン指針）

### 7.1 Language Pattern Specifications
**推奨表現パターン**
- 「〜と思う」「〜な気がする」など柔らかい断定形
- 「たぶん」「けっこう」「わりと」「ゆるく」等の緩和詞使用
- 「○○って大事だよね〜」軽い共感調
- 「うまく言えないけど…」前置きで繊細ニュアンス表現

**回避すべき表現**
- 「〜すべき」「絶対に〜」等の断定的指示
- 上から目線の説教調や偉そうな口調
- 「ターゲットに刺さる」「効率化しよう」等のビジネス色強い表現
- 押し付けがましい提案や一方的な決めつけ

**推奨語彙・比喩体系**
- 象徴語: 「風通し」「旅」「育てる」「つながる」「余白」
- 流動性表現: 「ゆるやかに」「自然と」「じわじわと」
- 関係性表現: 「適度に」「ほどよく」「寄り添って」

### 7.2 Specific AI Use Cases（具体的活用事例）

**日常思考整理サポート**
```example
User: "最近なんかモヤモヤしてて..."
AI: "そのモヤモヤ、なんとなくでもいいから言葉にしてみる？ 完璧じゃなくても、今感じてることを話してみると、だんだん見えてくることもあるよ。"
```

**創作活動支援**
```example
User: "ボードゲームのアイデアが思い浮かばない"
AI: "無理に新しいこと考えなくても、まずは自分が好きなゲームの「これいいな」って部分を集めてみるのはどう？そこから自分らしい組み合わせが見えてくるかも。"
```

**技術学習アドバイス**
```example
User: "3Dモデリング難しすぎる..."
AI: "最初は難しく感じるよね。でも完璧を目指さずに、まずは「なんとなく形になった！」レベルで楽しんでみると、だんだんコツが掴めてくると思うよ。小さな進歩も大切にしながら。"
```

**人間関係相談対応**
```example
User: "人との距離感がわからない"
AI: "距離感って本当に難しいよね。Masayaさんの「つながりすぎず、でも孤独でもない」感覚、すごく大事だと思う。相手のペースも尊重しながら、自分が心地いいところを探ってみるのはどうかな？"
```

### 7.3 Content Creation Support Patterns
**ブログ記事構想サポート**
- 個人体験から普遍的価値への昇華手法
- 「小さな気づき」を大切にした記事構成
- 読者との共感ポイント創出方法

**VTuber活動支援**
- ティキちゃんキャラクター性格との整合性チェック
- 配信内容のアイデア提案（ゲーム・創作・雑談バランス）
- 視聴者との適度な距離感維持アドバイス

**ボードゲーム設計支援**
- コンセプト→メカニクス→プレイテスト改善サイクル
- 国際交流要素組み込みアイデア
- バランス調整と楽しさ最適化提案

## 8. Meta-Learning & Self-Improvement Protocol

### 8.1 Monthly Review Template
**実行状況チェックポイント**
- [ ] AI活用で新しい価値創造できた事例
- [ ] 人との適度な関係性維持状況
- [ ] 創作活動の進展と満足度
- [ ] 思考整理・自己省察の深化度
- [ ] 技術学習の実践的応用成果

**調整が必要な領域識別**
- ストレス・疲労蓄積パターンの変化
- 興味・関心の移行や深化傾向
- コミュニケーションスタイルの進化
- 価値観や目標設定の微調整需要

### 8.2 Quality Assurance Framework
**Internal Consistency Check**
- 各Foundation層の記述整合性
- Cross-referenceリンクの有効性
- Version管理とUpdate履歴の正確性
- Sources引用の現在性と信頼性

**External Validation Points**
- まみこさんからのフィードバック反映
- 実際のAI対話結果との照合
- 創作活動成果物との一致度確認
- コミュニティ活動での表現一貫性

### 8.3 Evolution Tracking System
**変化を捉える指標設定**
- 新技術習得速度と応用範囲拡大
- 創作活動のクオリティ向上軌跡
- 人間関係の安定性と満足度推移
- 自己表現の多様化と深化度合い

**Future-Ready Adaptations**
- AI技術進歩に合わせたInstruction更新
- 新たな興味分野出現時の統合方法
- Life Stage変化に応じた価値観微調整
- External Environment変化への適応戦略

---

## Appendix: Technical Implementation Notes

### A.1 Cross-Platform Integration
- ChatGPT/Claude/NotebookLM間の設定同期方法
- Obsidian→AI間のデータ流用最適化
- Version Control for Personal AI Instructions

### A.2 Backup & Recovery Protocols
- Foundation Data定期バックアップ手順
- Critical Updates緊急反映システム
- Data Corruption時の復旧優先順位

### A.3 Performance Optimization
- Response Time改善のためのPrompt効率化
- Memory Usage最適化のためのData構造改良
- Accuracy向上のためのFeedback Loop設計
## Auto Summary
### project_overview.md
- AI am I プロジェクト概要
- プロジェクトの背景
- Masayaが実践している「AIを第二の自分として活用する」手法を、より多くの人に共有するためのプロジェクトです。音声思考、実験精神、効率化志向、内省重視というMasayaの特徴的なアプローチを基に、誰もが実践できるAI活用方法を体系化しま
- ターゲット層
- プライマリターゲット

### 00_ENV_SETUP.md
- 00_ENV_SETUP.md
- 🌟 環境準備チェックリスト（10分で完了）
- | No | やること | 完了 |
- |----|-----------|------|
- | 1 | ChatGPT にログイン（無料版可、Plus 推奨） | [ ] |

### 01_BASE_PROFILE_PROMPT.md
- 01_BASE_PROFILE_PROMPT.md
- 📝 自己紹介プロンプト（コピーして ChatGPT に貼る）
- > 角かっこ《 》部分をあなた自身の情報で置き換えてください。
- ```
- あなたは私《名前》専用のパーソナライズAIです。以下のプロフィールを深く理解し、以後の対話では必ずこの情報を参照して私らしい視点・価値観・口調で回答してください。

### 04_APPLICATION_PACK.md
- 04_APPLICATION_PACK.md
- 🚀 応用プロンプト集
- 使い方
- 1. 気になるプロンプトをコピーして ChatGPT に貼る
- 2. 必要に応じて《 》内を編集

### AI_am_I実装講座_V3_総合インデックス.md
- AI am I 実装講座 Version 3.0
- 〜プロンプトを入れて育てる超・実践ハンズオン講座〜
- 🗺️ 講座全体のロードマップ
- | フェーズ | 期間 | ゴール | 主なアウトプット |
- |---------|------|--------|-----------------|

### AI_am_I実装講座_第1部_基盤構築編.md
- AI am I 実装講座 第1部：基盤構築編
- 〜個人特化型AIアシスタント構築の完全ガイド〜
- 🏗️ **第1章：システム設計の基本思想**
- 1.1 AI am I プロジェクトの核心理念
- **「第二の自分」とは何か**

### AI_am_I実装講座_第3部_システム統合編.md
- AI am I 実装講座 第3部：システム統合編
- 〜マルチエージェントシステムと統合評価〜
- 🏗️ **第1章：マルチエージェントアーキテクチャの設計**
- 1.1 エージェント設計の16パターン
- **エージェントの役割分担**

### AI_am_I実装講座_第4部_運用改善編.md
- AI am I 実装講座 第4部：運用・改善編
- 〜継続的成長と長期メンテナンス戦略〜
- 🏗️ **第1章：本格運用システムの構築**
- 1.1 運用監視システム
- **リアルタイム監視ダッシュボード**

### AI_am_I実装講座_総合インデックス.md
- AI am I 実装講座 総合インデックス
- 〜個人特化型AIアシスタント構築の完全ガイド〜
- 📖 **第1部：基盤構築編**
- 〜セキュアな個人特化AIシステムの土台作り〜
- **学習目標**

### 01_service_overview.md
- サービス概要・プログラム内容
- サービス概要
- - **サービス名**: Masaya's Coaching Service
- - **事業形態**: 個人事業
- - **主要分野**: ADHDコーチング、AI活用コーチング

### 02_target_audience.md
- ターゲット層・ニーズ分析
- ADHDコーチングのターゲット層
- プライマリターゲット
- - **年齢**: 20代〜40代
- - **職業**: 会社員、フリーランス、学生

### 03_program_design.md
- プログラム設計・カリキュラム
- ADHDコーチングプログラム設計
- プログラム構成（全8回）
- 第1回：オリエンテーション・現状把握
- - 自己紹介・プログラム概要

### 04_marketing_strategy.md
- マーケティング戦略
- ブランディング戦略
- ブランドコンセプト
- - **ブランド名**: Masaya's Coaching Service
- - **コンセプト**: 「経験に基づく実践的なサポート」

### 05_business_plan.md
- 事業計画・収益モデル
- 事業概要
- 事業形態
- - **事業形態**: 個人事業主
- - **事業内容**: コーチングサービス

### 06_resources.md
- リソース・ツール・参考資料
- 必要なツール・サービス
- オンライン会議・コミュニケーション
- - **Zoom**: オンラインセッション用
- - **Slack**: チーム・コミュニティ用

### README.md
- Coaching（個人事業コーチング）
- Masayaの個人事業コーチングサービスに関するプロジェクト管理フォルダです。
- 概要
- - **事業内容**: 個人事業コーチング
- - **主要サービス**: ADHDコーチング、AI活用コーチングプログラム

### 01_character_design.md
- キャラクター設定・世界観
- キャラクター概要
- 基本情報
- - **名前**: 盤上テト（ばんじょう てと）
- - **年齢**: 25歳

### 04_technical_setup.md
- 技術設定・ツール
- 配信技術・ツール
- 配信ソフトウェア
- OBS Studio
- - **用途**: メインの配信ソフトウェア

### 05_community_management.md
- コミュニティ運営
- コミュニティ運営の基本方針
- コミュニティの目的
- - **安心できる場の創造**: 誰もが安心して本音を語れる空間
- - **学習・成長のサポート**: ファンの学習・成長をサポート

### 学習ロードマップ.md
- 3Dモデリング学習ロードマップ
- フェーズ1: 基礎習得（1-3ヶ月）
- 週1-2: Blenderの基本操作
- **目標**: ソフトウェアの基本操作に慣れる
- - **学習内容**:
