---
title: "「AIが自動的に優れたAIエージェントを設計する」新分野の提唱 数学エージェントが読解でも好成績"
source: "https://ai-data-base.com/archives/74978"
author:
  - "[[AIDB Research]]"
published: 2024-08-30
created: 2025-06-13
description: "本記事では、LLMベースのエージェントを自動的に作る新しい方法について紹介します。この方法を「エージェントシステムの自動設計」、略して「ADAS」と呼んでいます。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMベースのエージェントを自動的に作る新しい方法について紹介します。この方法を「エージェントシステムの自動設計」、略して「ADAS」と呼んでいます。

研究者らは、ADASの具体的な例として「Meta Agent Search」というプログラムを紹介しています。LLMによって自動的にLLMエージェントのプログラムコードを生み出すというアプローチです。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74978-1024x576.jpg)

**参照論文情報**

- タイトル：Automated Design of Agentic Systems
- 著者：Shengran Hu, Cong Lu, Jeff Clune
- 所属：University of British Columbia, Vector Institute, Canada CIFAR AI Chair

## 背景

機械学習の歴史を見ると、人間が手作業で設計したシステムは、最終的には機械が学習して置き換わることが多いようです。  
この考えをもとに、今回研究者らは「エージェントシステムの自動設計（ADAS）」という新しい研究分野を提案しました（システムの名前ではなく研究分野の名称）。エージェントシステムの設計を自動化し、新しい構成要素を見つけたり、既存の要素を新しい方法で組み合わせたりする研究分野です。

そして特に注目すべきアプローチとして、エージェントシステム全体をコンピュータープログラムとして定義し、別のエージェント（メタエージェント）が新しいエージェントをプログラミングして自動的に発見する方法を考案しました。プログラミング言語は理論上あらゆる計算が可能なので、この方法を使えば、指示の与え方やツールの使い方、処理の流れなど、さまざまな可能性を持つエージェントシステムを見つけられる可能性があります。

なお、この研究分野は科学的にも興味深い側面があります。人間の組織や社会から生まれる複雑さの原因を理解するヒントになるかもしれないのです。ADASの研究は、人間社会に似たシステムにおいて、単純な条件から複雑さが生まれる過程を観察する機会となる可能性があります。

以下で今回の研究を詳しく紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74978_1-1024x584.png)

提案されたMeta Agent Searchアルゴリズムの概要と、発見されたエージェントの例

## 「エージェントシステムの自動設計（ADAS）」とは

### ADASの定義

ADASは、以下3つの主な要素からなる最適化のプロセスと説明されています。

（１）探索空間  
ADASで表現できる、そして見つけ出せるエージェントシステムの範囲を決める

（２）探索アルゴリズム  
その探索空間をどのように調べていくかを決める

（３）評価関数  
候補となるエージェントの性能などの目標をどのように評価するかを決める

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74978_2-1024x239.png)

ADASの3つの主要コンポーネント（探索空間、探索アルゴリズム、評価関数）を示す

### ADASの重要性

エージェントシステムを作る際の人間の作業を減らし、より良い解決方法をより早く見つけられる可能性があります。人間が手作業で設計する方法に比べ、次のような利点があると考えられています：

1. エージェントシステムの構成要素や設計のパターンを、自動的な方法で学習する
2. 既存の構成要素を新しい方法で組み合わせて、革新的なエージェントシステムを生み出せる可能性がある

### コードを用いたADASの可能性

今回研究者らは、エージェントシステム全体をコンピュータープログラム（コード）として定義し、「メタ」と呼ばれる特別なエージェントがより優れたエージェントをコードでプログラミングすることで、新しいエージェントを自動的に見つけ出す方法を提案しています。この方法には次のような利点があります。

1. プログラミング言語の性質上、理論的にはあらゆる種類のエージェントシステムを見つけ出せる可能性がある
2. コードを基にした探索空間により、人間がこれまでに積み重ねてきた努力を活用しやすくなる
3. LLMのプログラミング能力を活用することで、効率的に探索できる

### ADASの潜在的な影響

ADASは、エージェントシステムの設計方法を大きく変え、より効果的で状況に合わせて対応できるAIシステムの開発を速める可能性があります。また、人間の組織や社会がどのように複雑になっていくのかについての洞察を得るための、科学的に興味深い研究分野としても注目されています。

## エージェント探索アルゴリズム『Meta Agent Search』

今回、コードを使ってエージェントを定義し探す方法としてMeta Agent Searchが考案されました。このアルゴリズムの中心的な考え方は、”メタエージェント”と呼ばれる特別なプログラムが、新しいエージェントを繰り返しプログラミングすることです。発見をデータベースに記録していくのも特徴の一つです。

### フレームワークの設計

理論的には、メタエージェントがゼロからすべての部品やシステムをプログラミングできます。しかし、実際にはそれは非効率的なので、基本的な機能がまとめられた簡単なフレームワーク（100行以下のコード）が用意されました。LLMへの問い合わせや指示文の形式を整えるなどの基本的な機能が含まれています。

### メタエージェントの役割

メタエージェントは、新しいエージェントシステムを定義する「forward」という関数だけをプログラミングするよう設計されました。この関数は、タスクの情報を入力として受け取り、エージェントの答えを出力します。

### アルゴリズムの流れ

メタエージェントは、過去の発見のデータベースを基に、新しいエージェントをコードでプログラミングするよう指示されます。「面白い」（新しいアイデアや価値のある）エージェントを探すことが奨励されます。これは、人間が「面白い」と感じる概念を利用した、自由度の高いアルゴリズムの考え方に基づいています。

提案の新しさと正確さについて2回の改善が行われ、自己反省のプロセスが組み込まれています。コードの実行中に問題が起きた場合、最大3回の修正が行われます。

新しいエージェントが作られると、対象分野のテストデータを使って評価されます。成功率や [F1スコア](https://ai-data-base.com/archives/26112 "F1スコア（F値）") などの評価指標と、その信頼性を示す95%ブートストラップ信頼区間が計算されます。

作られたエージェントは評価指標とともにデータベースに追加され、このプロセスが最大回数に達するまで続けられます。

### プロンプトの設計

メタエージェントへの指示文は、次の要素を含むよう慎重に設計されました。

- 対象分野の簡単な説明
- フレームワークのコード
- 出力の指示と例
- 発見されたエージェントのデータベース（最初は基本的なものから始まり、毎回更新される）

過去の発見を活用しながら、新しく興味深いエージェントシステムを提案するのが目標です。

**メタエージェントに与えられるメインのプロンプト（原文）**

```js
You are an expert machine learning researcher testing different agentic systems.
[Brief Description of the Domain]
[Framework Code]
[Output Instructions and Examples]
[Discovered Agent Archive] (initialized with baselines, updated at every iteration)
# Your task
You are deeply familiar with prompting techniques and the agent works from the literature. Your goal is to maximize the performance by proposing interestingly new agents ......
Use the knowledge from the archive and inspiration from academic literature to propose the next interesting agentic system design.
```

日本語訳

```js
あなたは異なるエージェンティックシステムをテストする機械学習の専門研究者です。
【ドメインの簡潔な説明】
【フレームワークのコード】
【出力の指示と例】
【発見されたエージェントのアーカイブ】（ベースラインで初期化され、各イテレーションで更新される）
#あなたの任務
あなたはプロンプト技術やエージェントの動作に精通しており、これらは文献からの知識に基づいています。あなたの目標は、興味深い新しいエージェントを提案することでパフォーマンスを最大化することです。
アーカイブの知識や学術文献からのインスピレーションを活用して、次に興味深いエージェンティックシステムの設計を提案してください。
```

**メタエージェントが設計するエージェントの出力形式を指示するプロンプト（原文）**

```js
# Output Instruction and Example:
The first key should be (“thought”), and it should capture your thought process for designing the next function. In the “thought” section, first reason about what the next interesting agent to try should be, then describe your reasoning and the overall concept behind the agent design, and finally detail the implementation steps. The second key (“name”) corresponds to the name of your next agent architecture. Finally, the last key (“code”) corresponds to the exact “forward()” function in Python code that you would like to try. You must write COMPLETE CODE in “code”: Your code will be part of the entire project, so please implement complete, reliable, reusable code snippets.
Here is an example of the output format for the next agent:
{“thought”: “**Insights:** Your insights on what should be the next interesting agent. **Overall Idea:** your reasoning and the overall concept behind the agent design. **Implementation:** describe the implementation step by step.”,
“name”: “Name of your proposed agent”,
“code”: “def forward(self, taskInfo): # Your code here”}
## WRONG Implementation examples:
[Examples of potential mistakes the meta agent may make in implementation]
```

**日本語訳**

```js
#出力指示と例:
最初のキーは「thought」であり、次の関数を設計する際の思考プロセスを捉える必要があります。「thought」セクションでは、まず次に試すべき興味深いエージェントについての理由を考え、それに基づく推論とエージェント設計の全体的なコンセプトを説明し、最後に実装の手順を詳細に記述します。
2つ目のキー「name」は、次のエージェントアーキテクチャの名前に対応します。
最後のキー「code」は、Pythonコードで試してみたい正確な「forward()」関数に対応します。「code」には完全なコードを書かなければなりません。このコードはプロジェクト全体の一部となるため、信頼性があり再利用可能な完全なコードスニペットを実装してください。

以下は次のエージェントの出力形式の例です： {
"thought": "洞察: 次に試すべき興味深いエージェントに関する洞察。全体的なアイデア: エージェント設計の背後にある推論と全体的なコンセプト。実装: 手順をステップバイステップで説明。",
"name": "提案するエージェントの名前",
"code": "def forward(self, taskInfo): # ここにコードを記述"
}
##間違った実装の例：
[メタエージェントが実装する際に犯す可能性のある誤りの例]
```

**自己反省（self-reflection）のラウンド1を行わせるプロンプト（原文）**

```js
Prompt for self-reflection round 1.
[Generated Agent from Previous Iteration]
Carefully review the proposed new architecture and reflect on the following points:
1. **Interestingness**: Assess whether your proposed architecture is interesting or innovative compared to existing methods in the archive. If you determine that the proposed architecture is not interesting, suggest a new architecture that addresses these shortcomings.
- Make sure to check the difference between the proposed architecture and previous attempts.
- Compare the proposal and the architectures in the archive CAREFULLY, including their actual differences
in the implementation.
- Decide whether the current architecture is innovative. - USE CRITICAL THINKING!
2. **Implementation Mistakes**: Identify any mistakes you may have made in the implementation. Review the code carefully, debug any issues you find, and provide a corrected version. REMEMBER checking "## WRONG Implementation examples" in the prompt.
3. **Improvement**: Based on the proposed architecture, suggest improvements in the detailed implementation that could increase its performance or effectiveness. In this step, focus on refining and optimizing the existing implementation without altering the overall design framework, except if you want to propose a different architecture if the current is not interesting.
- Observe carefully about whether the implementation is actually doing what it is supposed to do.
- Check if there is redundant code or unnecessary steps in the implementation. Replace them with
effective implementation.
- Try to avoid the implementation being too similar to the previous agent.
And then, you need to improve or revise the implementation, or implement the new proposed architecture based on the reflection.
Your response should be organized as follows:
"reflection": Provide your thoughts on the interestingness of the architecture, identify any mistakes in the implementation, and suggest improvements.
"thought": Revise your previous proposal or propose a new architecture if necessary, using the same format as the example response.
"name": Provide a name for the revised or new architecture. (Don’t put words like "new" or "improved" in the name.)
"code": Provide the corrected code or an improved implementation. Make sure you actually implement your fix and improvement in this code.
```

**日本語訳**

```js
自己反省ラウンド1のプロンプト。
[前回のイテレーションで生成されたエージェント]
提案された新しいアーキテクチャを慎重に見直し、次の点について反省してください：

1. **興味深さ**: 提案されたアーキテクチャがアーカイブにある既存の手法と比較して興味深いか、革新的であるかを評価してください。もし提案されたアーキテクチャが興味深くないと判断した場合、その欠点を補う新しいアーキテクチャを提案してください。
- 提案されたアーキテクチャと過去の試みとの違いを確認してください。
- 提案とアーカイブ内のアーキテクチャを慎重に比較し、実装の実際の違いも含めて確認してください。
- 現在のアーキテクチャが革新的であるかどうかを決定してください。- 批判的思考を使用してください！

2. **実装上のミス**: 実装におけるミスを特定してください。コードを注意深く見直し、見つかった問題をデバッグし、修正されたバージョンを提供してください。「## WRONG Implementation examples」のチェックを忘れないでください。

3. **改善**: 提案されたアーキテクチャに基づき、パフォーマンスや効果を向上させるための詳細な実装の改善を提案してください。このステップでは、全体の設計フレームワークを変更せずに、既存の実装の改善と最適化に焦点を当ててください。ただし、現在のアーキテクチャが興味深くない場合は、異なるアーキテクチャを提案してもかまいません。
- 実装が実際に意図した通りの動作をしているかを注意深く観察してください。
- 実装に冗長なコードや不要なステップがあるかどうかを確認し、それらを効果的な実装に置き換えてください。
- 実装が前のエージェントとあまりにも似ていないようにしてください。

その後、反省に基づいて実装を改善または修正するか、提案された新しいアーキテクチャを実装してください。

あなたの応答は以下の形式で整理する必要があります：
"reflection": アーキテクチャの興味深さについての考え、実装のミスの特定、改善の提案を提供してください。
"thought": 必要に応じて前回の提案を修正するか、新しいアーキテクチャを提案してください。例の応答と同じ形式を使用してください。
"name": 修正または新しいアーキテクチャの名前を提供してください。（名前に「新しい」や「改善された」などの言葉を含めないでください。）
"code": 修正されたコードまたは改善された実装を提供してください。このコードで実際に修正と改善を実装することを確認してください。
```

**自己反省（self-reflection）のラウンド”2″を行わせるプロンプト（原文）**

```js
Using the tips in “## WRONG Implementation examples” section, further revise the code.
Your response should be organized as follows:
Include your updated reflections in the “reflection”. Repeat the previous “thought” and “name”. Update the corrected version of the code in the “code” section.
```

**日本語訳**

```js
「## WRONG Implementation examples」セクションのヒントを使用して、コードをさらに修正してください。
あなたの応答は以下の形式で整理する必要があります：
更新された考察を「reflection」に含めてください。前回の「thought」と「name」を繰り返してください。「code」セクションに修正されたコードのバージョンを更新してください。
```

**ランタイムエラーが起きた時の自己反省（self-reflection）プロンプト**

```js
Error during evaluation:
[Runtime errors]
Carefully consider where you went wrong in your latest implementation. Using insights from previous attempts, try to debug the current code to implement the same thought. Repeat your previous thought in
“thought”, and put your thinking for debugging in “debug_thought”.
```

**日本語訳**

```js
評価中のエラー:
[ランタイムエラー]
最新の実装でどこが間違っていたのかを慎重に考えてください。過去の試行から得た洞察を活用して、現在のコードをデバッグし、同じ考えを実装するようにしてください。以前の考えを「thought」に繰り返し、デバッグに関する考えを「debug_thought」に記載してください。
```

メタエージェントについてまとめます。

メタエージェントは基本的にLLMを使用して動作するプログラムで、実験ではGPT-4を使用しています。メタエージェントにはプロンプトが与えられ、これに基づいて新しいエージェントを設計・プログラミングします。  
メタエージェントは与えられたフレームワーク内で動作し、新しいエージェントのための「forward」関数を生成します。  
メタエージェントは過去に発見したエージェントのアーカイブを参照しながら、イテレーティブに新しいエージェントを生成します。  
生成されたエージェントはGPT-3.5などの別のLLMを使用して評価されます。  
このプロセス全体は「Meta Agent Search」アルゴリズムと呼ばれており、メタエージェントがLLMを使って新しいエージェントを探索・生成するという構造になっています。

つまり、メタエージェントはLLMを中核として動作するプログラムであり、LLMの能力を活用して新しいエージェントのデザインとコード生成を行うシステムです。

## 実験

Meta Agent Searchがどれくらい効果的かを確かめるためさまざまな実験が行われました。

### ARC課題におけるケーススタディ

#### 実験設定

抽象化と推論 [コーパス](https://ai-data-base.com/archives/26324 "コーパス") （ARC）という課題が使われました。LLMシステムの一般的な知能を評価するためのものです。実験では、エージェントに変換ルールのプログラムコードを作らせる方法が採用されました。

#### ベースライン

Chain-of-Thought（COT）、Self-Consistency with COT（COT-SC）、Self-Refine、LLM-Debate、Quality-Diversityなど、現在最も優れていると考えられるエージェント（手作業での設計）が比較対象として使われました。

#### 結果と分析

Meta Agent Searchは、既存の手作業で設計されたエージェントよりも性能の高いエージェントを段階的に見つけることに成功しました。特に注目すべき点として、複数のCOTを使って考えられる解答をいくつか作り、それらを改良し、最後に最も良い解答を組み合わせるという重要な設計パターンが発見されました。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74978_3-1024x530.jpg)

(a) ARC challengeにおけるMeta Agent Searchの進捗を示すグラフ。(b) ARC challengeで発見された最良のエージェントの視覚化

### 推論と問題解決ドメイン

#### 実験設定

読解力（DROP）、数学（MGSM）、科学（GPQA）、さまざまな課題を解く能力（MMLU）といった4つの有名な評価基準が使われました。

#### 結果と分析

Meta Agent Searchによって見つかったエージェントは、すべての分野で現在最も優れた手作業で設計されたエージェントを上回る性能を示しました。中でも読解力の分野ではF1スコアが13.6/100、数学の分野では正確さが14.4%向上しました。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74978_table1-1024x407.png)

複数のドメインにおけるMeta Agent Searchと最先端の手動設計エージェントの性能比較を示す

### 汎化性と転移可能性

#### モデル間の転移可能性

GPT-3.5で見つかった上位3つのエージェントが、他の3つの有名なモデル（Claude-Haiku、GPT-4、Claude-Sonnet）に適用されました。見つかったエージェントは、一貫して手作業で設計されたエージェントを大きく上回る性能を示しました。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74978_5-1024x395.png)

GPT-3.5で訓練されたトップエージェントを他のFoundation Modelsに転移した際のARCにおける性能

#### ドメイン間の転移可能性

MSGMという数学の分野で見つかった上位3つのエージェントが、4つの有名な数学分野と3つの数学以外の分野に適用されました。数学分野では、GSM8Kで25.9%、GSM-Hardで13.2%の精度向上が見られました。さらに驚くべきことに、数学分野で見つかったエージェントは、数学以外の分野でも効果的に使えることが分かりました。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74978_6-1024x472.png)

MGSMで発見されたトップエージェントを他の数学ドメインに転移した際の性能を示しています

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74978_7-1024x434.png)

数学（MGSM）ドメインで発見されたトップエージェントを非数学ドメインに転移した際の性能を示す

今回の実験結果は、Meta Agent Searchが見つけたエージェントが優れた性能を持つことと、異なるモデルや分野でも幅広く使える可能性を示しています。手作業で設計されたエージェントを常に上回る性能が見られたことから、ADAS（つまりAIがAIを設計するという考え方）が効果的であることが示唆されたといいます。

## まとめ

この記事では、エージェントシステムの自動設計（ADAS）という新しい研究分野を提案する研究を紹介しました。研究者らは、Meta Agent Searchというアルゴリズムが開発しました。エージェントをコンピュータープログラム（コード）として定義し、メタエージェントと呼ばれる特別なプログラムが新しいエージェントを自動的に作り出す方法論です。

実験の結果、Meta Agent Searchによって発見されたエージェントが、さまざまな分野で既存の人間が手作業で設計したエージェントよりも優れた性能を示したことが報告されています。また、異なるLLMや異なる分野でも使えることが分かりました。

研究者たちは、ADASの考え方が将来的にエージェントシステムの開発をより効率的にし、より強力なシステムを生み出す可能性があると述べています。ただし、安全性を確保することや、評価方法を改善することなど、今後取り組むべき課題もあるとのことです。

- 参照論文URL： [https://arxiv.org/abs/2408.08435](https://arxiv.org/abs/2408.08435)
- コード： [https://github.com/ShengranHu/ADAS](https://github.com/ShengranHu/ADAS)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[RAGで検索文書の要約を活用したクエリ書き換えが検索精度を大幅に向上させる　AWS報告](https://ai-data-base.com/archives/74922)

[GPT-4oで保険、銀行、小売りなどで人間への売り込みを実験　最大35%の確率で購買決定に成功](https://ai-data-base.com/archives/75031)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)