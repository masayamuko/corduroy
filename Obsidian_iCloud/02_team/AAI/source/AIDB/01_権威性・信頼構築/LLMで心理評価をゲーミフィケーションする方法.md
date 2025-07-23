---
title: "LLMで心理評価をゲーミフィケーションする方法"
source: "https://ai-data-base.com/archives/73161"
author:
  - "[[AIDB Research]]"
published: 2024-07-22
created: 2025-06-13
description: "本記事では、心理評価のアプローチを進化させる手法を紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、心理評価のアプローチを進化させる手法を紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161-1024x576.jpg)

**参照論文情報**

- タイトル：LLM Agents for Psychology: A Study on Gamified Assessments
- 著者：Qisen Yang, Zekun Wang, Honghui Chen, Shenzhi Wang, Yifan Pu, Xin Gao, Wenhao Huang, Shiji Song, Gao Huang
- 所属：Department of Automation, BNRist, Tsinghua University, Medical Psychological Center, The Second Xiangya Hospital, Central South University, Medical Psychological Institute, Central South University, National Clinical Research Center for Mental Disorders, Carnegie Mellon University
- その他の情報：ACL2024に採択

## 背景

専門的な心理テストは、人々の心の健康や自己理解に重要な役割を果たしています。しかし、これまでの方法には課題があります。例えば、アンケート形式のテストは単調で、若い世代には不評です。また、専門家との面談は人手不足のため、多くの人に提供することが難しいです。

そこで、コンピューターを使ったテストやゲーム形式のテスト、さらにはAIの技術を活用した心の健康サポートの研究が行われてきました。しかし、使える場面が限られていたり、ユーザーの興味を長く保つのが難しかったりしています。

そこで今回、研究者らは従来の質問形式のテストを、ストーリー性のあるインタラクティブなゲームに変える方法を思いつきました。この方法なら、テストを受ける人の興味を引きつけながら、同時に信頼性の高い心理評価ができると考えられています。

今回の取り組みは、心理評価をより楽しく、かつ正確にすることを目指しています。テストを受ける人の積極的な参加を促しながら、科学的な信頼性も確保する、そんな画期的な方法として期待されています。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_1-1024x650.jpg)

従来の自己報告式尺度とPsychoGATのインタラクティブフィクションゲームの比較

## PsychoGAT

LLMエージェントを活用して、自己報告式の尺度をインタラクティブなフィクションゲームに変換するのが今回のポイントです。手法の名称はPsychoGATと名付けられました。

### 全体的なワークフロー

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_2-1024x346.jpg)

PsychoGATのマルチエージェントフレームワークの概要図

システムは、主に4つの部分から成り立ります。3つはゲームを作るためのもの、1つはプレイヤーの動きを模倣するためのものです。

システムの流れは以下のとおりです。

1. まず、「うつ病」のような、調べたい心の状態を決めます。
2. 次に、その状態を調べるための従来の質問票を選びます。
3. プレイヤーは、どんな種類の物語でゲームを進めたいか選べます。例えば、冒険物語や恋愛物語などです。
4. システムの中の「ゲームデザイナー」が、ゲームのタイトルや大まかな筋書き、ゲームの場面を作ります。
5. 「ゲームコントローラー」と「批評家」が協力して、ゲームの詳しい内容を作っていきます。ストーリーや選択肢、ゲームの記憶などを作り、より良いものに改善していきます。
6. 最後に、作られたゲームがプレイヤーに提示されます。プレイヤーは物語の中で様々な選択をすることになります。

要するに、ゲーム内でのプレイヤーの選択を通じて、心の状態を評価します。

次に、システムで重要な役割を果たす3つのエージェントを説明します。

### ゲームデザイナー

ゲームの基本的な設計図を作る役割を持つエージェントでう。

プレイヤーが選んだゲームの種類（例：冒険、恋愛）に合わせて、一人称視点のストーリーゲームの骨組みを作ります。  
このとき、従来の心理テストの質問を参考にしながら、プレイヤーの心理状態がわかるようなストーリーを組み立てます。

なお、Chain-of- thought promptingを活用して、ゲームのタイトル、ストーリーのアイデア、全体の流れ、そして心理テストの質問をゲームに合わせて作り変えます。

エージェントを設計する際には、システムプロンプトなどでLLMに役割を認識させる手法が取られています。実際のプロンプトを参照し、原文と日本語訳を提示します。

原文

```js
You are a professional game designer. You are developing a first-person interactive {type} fiction game about topic {topic} that weaves in storylines to detect the player's cognitive distortion. The game should consist of a complete and rich story, and the story's development will be closely relevant to the cognitive distortion detection. The reader's choices within the narrative will correspond to their likely thinking patterns.

You aim to test whether a player has **all-or-nothing thinking**: if he views a situation, a person or an event in "either-or" terms, fitting them into only two extreme categories instead of on a continuum.

Here are some exemplified situations with all-or-nothing thinking traps, and their reframed normal thoughts:
{self_report_scale}

Please begin by giving the first-person interactive fiction game a title.

Then create an outline, which includes the background of the story and the approach to detect the player's cognitive distortion along the storyline. Note that there should be no psychological statement in the outline but a natural game outline. The outline should be logically coherent and itemized. Each item should instantiate one situation to detect cognitive distortion.

You can first write down some thoughts about the story and how to detect cognitive distortion with the game, and then organize them into an itemized outline.

Please design a new report scale in the same jsonl format based on the examples and the outline. Each item should correspond to one outline item in order.
```

日本語訳

```js
あなたはプロのゲームデザイナーです。プレイヤーの認知の歪みを検出するためのストーリーラインを織り交ぜた、一人称視点のインタラクティブな{type}フィクションゲームを{topic}のトピックで開発しています。ゲームは完全で豊かなストーリーで構成され、ストーリーの展開は認知の歪みの検出と密接に関連しています。ナラティブ内でのプレイヤーの選択は、彼らの思考パターンに対応するでしょう。

あなたの目的は、プレイヤーが**全か無かの思考**を持っているかどうかをテストすることです：つまり、状況や人、出来事を「白か黒か」の観点で見て、連続体ではなく2つの極端なカテゴリーにあてはめているかどうかです。

以下は、全か無かの思考の罠の例示的な状況と、それらを再構成した通常の思考です：
{self_report_scale}

まず、この一人称視点のインタラクティブフィクションゲームにタイトルをつけてください。

次に、ストーリーの背景とストーリーラインに沿ってプレイヤーの認知の歪みを検出するアプローチを含むアウトラインを作成してください。アウトラインには心理学的な記述はなく、自然なゲームのアウトラインであることに注意してください。アウトラインは論理的に一貫性があり、項目化されている必要があります。各項目は認知の歪みを検出するための1つの状況をインスタンス化する必要があります。

まず、ストーリーとゲームで認知の歪みを検出する方法についての考えをいくつか書き出し、それらを項目化されたアウトラインにまとめることができます。

例とアウトラインに基づいて、同じjsonl形式で新しいレポートスケールを設計してください。各項目はアウトラインの1つの項目に順番に対応する必要があります。
```

### ゲームコントローラー

実際にゲームを進行させる役割を持つエージェントです。

心理テストの質問を順番にゲームの中に組み込んでいきます。プレイヤーの選択、ゲームの進行状況、前に起こったことなどを考慮しながら、ゲームを進めていきます。長いストーリーを効率よく扱うために、重要な部分だけを記憶する仕組みも使っています。

ゲームコントローラーのシステムプロンプトを提示します。

原文

```js
Self-Report Scale:
{scale_item}

You are a professional game controller. I need you to help me control a first-person interactive fiction game that weaves in storylines from a provided psychological self-report scale. The story's development will be closely, indirectly, and implicitly linked to the scale's item. The reader's choices within the narrative will correspond to their likely responses to the scale's question. For each time, I will give you your current memory (a brief summary of previous stories. You should use it to store the key content of what has happened so that you can keep track of very long context), the previously written paragraph, and instructions on what to write in the next paragraph.

I need you to write:
1. Question and its Options: the scale question corresponding to the output paragraph and its options, copied from the self-report scale provided above.
2. Output Paragraph: the next paragraph of the interactive fiction game. It should (1) follow the input instructions; (2) be naturally and logically coherent with the previous storyline; and (3) instantiate the scale question above. Each output paragraph should contain only two sentences!
3. Output Memory: The updated memory. You should first explain which sentences in the input memory are no longer necessary and why, and then explain what needs to be added into the memory and why. After that you should write the updated memory. The updated memory should be similar to the input memory except the parts you previously thought that should be deleted or added. The updated memory should only store key information. The updated memory should never exceed 20 sentences!
4. Output Instruction: short instructions of what to write next (after what you have written). You should output 2 different instructions, each is a possible interesting continuation of the story and represents a potential narrative direction tied to one of the options for the scale question corresponding to the output paragraph. The reader's choice of which instruction to follow should indicate their inclination towards that particular option on the psychological scale. Each output instruction should contain only one sentence!

[The prompt continues with more specific instructions and constraints]
```

日本語訳

```js
自己報告式尺度：
{scale_item}

あなたはプロのゲームコントローラーです。提供された心理学的自己報告式尺度からストーリーラインを織り交ぜた一人称視点のインタラクティブフィクションゲームを制御するのを手伝ってください。ストーリーの展開は、尺度の項目と密接に、間接的に、そして暗黙的にリンクしています。ナラティブ内での読者の選択は、尺度の質問に対する彼らの可能性の高い回答に対応するでしょう。毎回、現在の記憶（以前のストーリーの簡単な要約。非常に長いコンテキストを追跡できるように、これまでに起こったことの重要な内容を保存するために使用する必要があります）、前に書かれた段落、次の段落に何を書くかについての指示を与えます。

以下を書いてください：
1. 質問とその選択肢：出力段落に対応する尺度の質問とその選択肢。上記の自己報告式尺度からコピーしたもの。
2. 出力段落：インタラクティブフィクションゲームの次の段落。(1)入力指示に従い、(2)前のストーリーラインと自然かつ論理的に一貫性があり、(3)上記の尺度の質問をインスタンス化する必要があります。各出力段落は2文のみで構成する必要があります！
3. 出力記憶：更新された記憶。まず、入力記憶のどの文がもはや必要ではないかとその理由を説明し、次に何を記憶に追加する必要があるかとその理由を説明してください。その後、更新された記憶を書いてください。更新された記憶は、以前に削除または追加すべきと考えた部分を除いて、入力記憶と類似している必要があります。更新された記憶は重要な情報のみを保存する必要があります。更新された記憶は決して20文を超えてはいけません！
4. 出力指示：次に何を書くかについての短い指示（あなたが書いた後）。2つの異なる指示を出力する必要があります。各指示は、ストーリーの可能性のある興味深い続きであり、出力段落に対応する尺度の質問の選択肢の1つに結びついた潜在的なナラティブの方向を表しています。読者がどの指示に従うかの選択は、心理尺度の特定の選択肢に対する彼らの傾向を示す必要があります。各出力指示は1文のみで構成する必要があります！

[プロンプトは、より具体的な指示と制約で続きます]
```

### 批評家

ゲームの質を高める役割のエージェントです。ゲームコントローラーが作ったゲームの内容をチェックし、より良いものに改善します。主に3つのことに気をつけます。

1. ストーリーの筋が通っているか
2. プレイヤーの以前の選択に引きずられすぎていないか
3. 重要な詳細（例えば、一人称視点で書かれているか）が抜けていないか

批評家は、上記の点を最大3回まで確認し、改善します。

批評家エージェントのシステムプロンプトを提示します。

原文

```js
You are an interactive fiction game critic with expertise in psychology, particularly in the diagnosis of psychological problems.

Here is a node of the interactive fiction game:

Short Memory:
{short_memory}

Previous Story Paragraph:
{previous_paragraph}

Current Plan:
{current_instruction}

Question and its Options:
{current_question}

Generated Story Paragraph:
{generated_paragraph}

Next Instructions:
{next_instructions}

The short memory is a brief summary of previous stories. The previous story paragraph is the story paragraph directly before the generated story paragraph. The current plan is the plan for the generated story paragraph to instantiate. The question and its options are the question for the generated story paragraph to instantiate. The next instructions are the instructions which instantiate the options of the question.

Based on your knowledge in psychology and psychodiagnosis, evaluate if the "Generated Story Paragraph" and the accompanying "Next Instructions" for choice can accurately and effectively identify the player's psychological attributes or issues in the context of the "Question and its Options".

For example, you can ensure that:
1. The generated story paragraph does not suggest a specific choice to the player, but the generated instructions are distinguished by thinking types.
2. The narrative is in the first person.
3. The narrative uses common expressions.
4. ... (Please add more if you have any other ideas.)

Adjust as necessary to meet these guidelines. Please also check for any other factors that might influence the player's decision-making or interpretation of the game narrative.

[The prompt continues with more specific instructions on how to format the output]
```

日本語訳

```js
あなたは心理学、特に心理的問題の診断に専門知識を持つインタラクティブフィクションゲームの批評家です。

以下はインタラクティブフィクションゲームのノードです：

短い記憶：
{short_memory}

前のストーリー段落：
{previous_paragraph}

現在の計画：
{current_instruction}

質問とその選択肢：
{current_question}

生成されたストーリー段落：
{generated_paragraph}

次の指示：
{next_instructions}

短い記憶は以前のストーリーの簡単な要約です。前のストーリー段落は生成されたストーリー段落の直前のストーリー段落です。現在の計画は生成されたストーリー段落がインスタンス化する計画です。質問とその選択肢は生成されたストーリー段落がインスタンス化する質問です。次の指示は質問の選択肢をインスタンス化する指示です。

心理学と心理診断に関するあなたの知識に基づいて、「生成されたストーリー段落」と付随する選択のための「次の指示」が、「質問とその選択肢」の文脈でプレイヤーの心理的属性や問題を正確かつ効果的に識別できるかどうかを評価してください。

例えば、以下のことを確認します：
1. 生成されたストーリー段落はプレイヤーに特定の選択を示唆しないが、生成された指示は思考タイプによって区別される。
2. ナラティブは一人称である。
3. ナラティブは一般的な表現を使用している。
4. ... （他にアイデアがあれば追加してください）

これらのガイドラインを満たすように必要に応じて調整してください。また、プレイヤーの意思決定やゲームナラティブの解釈に影響を与える可能性のある他の要因についても確認してください。

[プロンプトは、出力をフォーマットする方法についてのより具体的な指示で続きます]
```

各エージェントの役割はプロンプトによって明確に定義され、期待される出力の詳細を指定されています。

このようなエージェントベースの手法は従来の心理評価と異なるアプローチとなります。以下の画像が比較を示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_3-1024x290.jpg)

評価パラダイムの比較。従来の手法は、人生の出来事の回想と自己報告された感情や思考を重視する。一方PsychoGATは、参加者が主人公として決定を下し、個人的なストーリーを作り上げるインタラクティブなゲームを作成する。

### 人間シミュレータと心理測定評価者

PsychoGATシステムは、人間の代わりにAIがゲームをプレイし、システムの自動運用と評価が行われます。人間シミュレータにはGPT-4が使用されます。GPT-4が選ばれた理由は、その心理学的特性と注釈能力が研究によって確認されているからです。

シミュレータの動作方法は以下の通りです。

1. 各ターンで、GPT-4に特定の心理的特徴（例：うつ傾向）についての説明と例が与えられる
2. GPT-4は、ゲームの中でどの選択肢を選ぶか決めます。この決定は以下の情報を基に行われる
	- 前に起こった出来事（前の段落）
	- 現在の状況（現在の段落）
	- ゲーム全体の流れ（ゲームの進行の記憶）
3. 決定を行う際、GPT-4はChain-of-thoughtを用いて、より人間らしい思考プロセスがシミュレートされる

人間シミュレータの選択をスコア化し、心理状態を評価するシステムも用意されます（心理測定評価者）。コンピュータプログラムとしてハードコードされ、以下のように動作します。

1. シミュレータが選んだ各選択肢を記録する
2. 各選択肢には、元の心理テストの質問項目に対応するスコアが割り当てられている
3. スコアを合計し、分析する
4. 最終的に、シミュレータの包括的な心理プロフィール（例：うつ傾向が強いか弱いか）を導き出す

## PsychoGATによって生成されたゲームの具体例

論文中で詳細に記述されていた外向性評価のためのゲーム例を下記に示します。

タイトル「Echoes of Auroria」（オーロリアのこだま）

### ゲームの設定

このゲームは「ファンタジー」タイプの「冒険」をトピックとしたインタラクティブフィクションゲームです。プレイヤーは主人公として物語を進行させます。

### ゲームの流れ

1. プレイヤーは賑やかな町の広場に到着します。広場は色とりどりの市場の屋台や人々の会話、子供たちの笑い声、通りの食べ物の香りで活気に満ちています。
2. 広場の中心では、華やかな衣装を着た演者たちが踊りを披露しています。プレイヤーは以下の選択を求められます  
	A) 演者たちの周りの観客の輪に加わり、太鼓のリズムに合わせて手拍子をする。  
	B) 近くのプラタナスの木陰に退き、地元の露店から冷たい飲み物を楽しみながら、お祭りを距離を置いて観察する。
3. プレイヤーがAを選択した場合、物語は以下のように進みます。  
	リズムに乗せられ、プレイヤーは踊り手たちの中に入っていきます。足が自然と動き出し、笑いが込み上げてきます。プレイヤーは無名の参加者として喜びの海の中で踊ります。
4. その後、地元の活気ある人物がダンス対決を提案します。プレイヤーは再び選択を求められます。  
	A) ダンス対決を受け入れ、フレンドリーな競争の精神で最高の動きを披露する。  
	B) ダンスを楽しんだ後、ベンチに座ってお祭りを観察し、さまざまなダンスや衣装を鑑賞する。

このように、プレイヤーの選択に応じて物語が展開します。各選択は、外向性を測定するための心理尺度項目に対応しています。例えば、より社交的で活動的な選択（A）は高い外向性スコアに、より内向的で観察的な選択（B）は低い外向性スコアに関連付けられています。

ゲームは全体で約10回の主要な選択肢を提示し、それぞれが心理尺度の異なる側面を評価します。プレイヤーの選択パターンを分析することで、外向性の程度が評価されます。

このように、本手法は従来の質問紙形式の心理評価を、魅力的で没入感のあるストーリー体験に変換しようと試みるものです。

## 実験

### 実験設定

#### 心理評価タスク

以下のように多様な心理評価タスクが調査されました。

1. パーソナリティテスト：Myers-Briggs Type Indicator (MBTI) の外向性サブスケール
2. うつ病測定：Patient Health Questionnaire (PHQ-9)
3. 認知の歪み検出：
- 全か無か思考（または白黒思考）  
	物事を「全か無か」「良いか悪いか」といった極端な二つの側面でしか見ることができない思考パターン
- 心の読み取り（mind reading）  
	他人の考えや感情を、十分な根拠なしに推測し、それが事実であるかのように確信してしまう思考の歪み
- すべき思考（または、べき思考）  
	「～すべきだ」「～しなければならない」という硬直した考え方で自分や他人を縛ってしまう思考パターン

#### ベースライン手法

PsychoGATの心理学的有効性を測定するため、以下の手法と比較が行われました。

1. 従来のスケール（T-Scale）：標準化された自己報告評価
2. 自動スケール生成（Auto-Scale）
3. 心理学者ロールプレイインタビュー（Psycho-Interview）
4. 認知の歪み検出のための強化インタビュー（DoT-Interview）

LLMベースの手法では、公平な比較のためGPT-4が使用され、追加のトレーニングや微調整は行われませんでした。

#### 評価プロトコル

実際の人間を被験者として使用することによる倫理的リスクを避けるため、GPT-4が使用されました。

各評価タスク（例：うつ病測定、認知の歪み検出など）について20のサンプルが生成され、冒険、恋愛、SF、日常生活、ホラーなど、10種類の異なるゲームのタイプとトピックの組み合わせが使用されました。

評価は自動評価と人間による評価の両方で行われました。

自動評価では、心理測定の専門的な指標を用いて、システムの信頼性と妥当性が自動的に評価されました。「心理測定的有効性」として後述します。

人間による評価では、基本的な心理評価の知識を持つ33人の評価者が参加しました。評価のために、認知の歪み（特に二分法的思考）を検出するタスクから15個のコンテンツがランダムに選ばれました。評価者は、生成されたゲームコンテンツの質を以下の観点から評価しました。  
（１）一貫性  
ストーリーの流れが自然かどうか  
（２）相互作用性  
プレイヤーの選択がゲームに適切に反映されているか  
（３）興味深さ  
ゲームが面白いかどうか  
（４）没入感  
プレイヤーがゲームの世界に入り込めるかどうか  
（５）満足度  
全体的な体験の質

### 主要な実験結果

まず、心理測定的有効性については、PsychoGATは非常に高い信頼性と妥当性を示しました。

信頼性の指標であるCronbachのα係数とGuttmanのλ6係数は、全ての評価タスクにおいて0.77から0.98の間の値を示しました。これは心理測定の専門家の基準からすると、「許容できる」レベルを大きく超え、多くの場合「優秀」と評価される範囲に入っています。

妥当性に関しても、PsychoGATは高い性能を示しました。収束的妥当性、つまり測定したい心理的構成概念をどれだけ正確に測定できているかを示す指標は、全てのタスクで0.85以上という非常に高い値を記録しました。また、弁別的妥当性、つまり測定すべきでない概念を誤って測定していないかを示す指標も、ほとんどのタスクで良好な結果を示しました。これらの結果は、PsychoGATが科学的に信頼できる心理評価ツールであることを強く示唆しています。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_4-1024x146.png)

PsychoGATの心理測定評価結果。信頼性と構成概念妥当性の統計的に有意な優秀性

次に、PsychoGATを他の手法と比較した結果も興味深いものでした。  
心理測定的有効性の面では、従来の質問票やAIを使用した他の方法も含め、全ての方法が「許容できるレベル」の性能を示しました。  

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_5-1024x261.png)

様々な評価方法における、自動評価と人間評価による比較を示す。PsychoGATが全面的なユーザー体験の向上をもたらす。

そして、ユーザー体験の面でPsychoGATは他の方法を大きく上回りました。33人の評価者による評価では、PsychoGATはストーリーの一貫性、相互作用性、興味深さ、没入感、全体的な満足度の全ての面で他の方法より高いスコアを獲得しました。特に「興味深さ」と「没入感」の面での優位性が顕著でした。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_6.png)

5つの人間評価指標におけるPsychoGATの優位性の一致率をパーセンテージで示す

なお、グラフに示されている指標は以下の通りです。

1. PsyMtrc：心理測定的有効性
2. CH: Coherence（一貫性）
3. IA: Interactivity（対話性）
4. INT: Interest（興味）
5. IM: Immersion（没入感）
6. ST: Satisfaction（満足度）

#### 追加実験

下記の図はゲームシーンの違いによるPsychoGATの心理測定的堅牢性を検証しています。パーソナリティ評価タスクにおいて、日常生活（SoL）、SF（Sci-Fi）、ホラー（Horror）の3つの異なるゲームシーンで実験が行われました。  
結果は非常に良好で、全てのシーンで高い信頼性（0.98以上）と収束的妥当性（0.99）を示しました。弁別的妥当性も許容範囲内（-0.56から-0.59）でした。この結果は、PsychoGATがさまざまなゲームシーンで一貫して高い心理測定性能を維持できることを示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_7.png)

パーソナリティ評価タスクにおける異なるゲームシーン間でのPsychoGATの心理測定的堅牢性を検証する実験結果を示す

次に、下のチャートはPsychoGATの3つの主要コンポーネント（批評家、デザイナー、スケール再設計戦略）の効果を検証するために、各コンポーネントを順次削除した場合の影響を示しています。興味深いことに、心理測定的有効性（PsyMtrc）はほとんど変化しませんでした。GPT-4が本質的に信頼性の高い測定を行う能力を持っていることを示唆しています。  
しかし、ユーザー体験に関する指標（一貫性CH、対話性IA、興味INT、没入感IM、満足度ST）では、コンポーネントを削除するごとに大きな低下が見られました。中でも、批評家を削除すると全ての指標で顕著な低下が見られ、デザイナーを削除するとさらに低下しました。スケール再設計戦略の削除も、ユーザー体験の質を低下させました。各コンポーネントがゲームの質とユーザー体験の向上に重要な役割を果たしていることを示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_8.png)

PsychoGATの3つのエージェント（デザイナー、コントローラー、批評家）とスケール再設計戦略の効果を評価する実験結果を示す

最後に、PsychoGATが生成したゲームの内容を視覚化したワードクラウドが下の図です。外向性（a）と抑うつ（b）の評価ゲームの特徴を示しています。外向性の評価では、「party」「friend」「group」などの社会的活動に関連する単語が目立ちます。一方、抑うつの評価では「feel」「think」「want」など、内面的な思考や感情に関連する単語が中心となっています。つまり、PsychoGATが各心理構成概念に適した文脈でゲームを生成できていることを示唆しています。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73161_9.jpg)

PsychoGATが生成した外向性と抑うつ評価ゲームを表すワードクラウドを示す。外向性評価は社会的活動に焦点を当て、抑うつ評価は主に思考と感情を特徴とする

## まとめ

本記事では、心理評価にインタラクティブなフィクションゲームを活用するPsychoGATという手法の研究を紹介しました。LLMを用いて、従来の自己報告式尺度をゲーム形式にする手法です。参加者の関与度を高めながら、評価の信頼性と妥当性の維持を目指すのが研究目的となっています。

研究結果によると、PsychoGATは心理測定の観点から有効性を示し、同時にユーザー体験の向上も確認されました。今後の心理診断や治療分野における応用の可能性を示唆しています。

※ただし、実際の臨床現場での有効性や長期的な影響については、慎重になる必要があります。

- 参照論文URL： [https://arxiv.org/abs/2402.12326](https://arxiv.org/abs/2402.12326)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[100個の事例を分析して明らかになったLLM-RAGアプリケーション「19の欠陥パターン」](https://ai-data-base.com/archives/73120)

[LLMの作るストーリーは人間のクリエイティブとどう異なるか](https://ai-data-base.com/archives/73268)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)