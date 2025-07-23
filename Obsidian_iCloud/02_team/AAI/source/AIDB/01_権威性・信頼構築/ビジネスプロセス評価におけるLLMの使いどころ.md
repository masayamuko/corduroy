---
title: "ビジネスプロセス評価におけるLLMの使いどころ"
source: "https://ai-data-base.com/archives/88825"
author:
  - "[[AIDB Research]]"
published: 2025-05-05
created: 2025-06-13
description: "本記事では、作業ごとの価値を見極める業務プロセス分析にLLMを応用した研究を紹介します。従来は人手に頼っていた作業の分解と評価を、一定のルールに沿って自動化する試みです。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、作業ごとの価値を見極める業務プロセス分析にLLMを応用した研究を紹介します。

従来は人手に頼っていた作業の分解と評価を、一定のルールに沿って自動化する試みです。業種を問わず応用可能な分析の枠組みとして注目されつつも、運用にあたっての留意点も明らかになっています。

LLMを業務改善に活かすヒントとして、分析手法や検証結果を見ていきましょう。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88825-1024x576.png)

## 背景

日々の業務を少しでも効率化したい。そんな思いは、現場に関わる人なら誰もが抱えているはずです。プロセスの流れを見直して改善する「ビジネスプロセス管理」は、そうしたニーズに応える手法として、多くの企業で導入されています。

なかでも、プロセスの中にどんな無駄があるかを見つける「プロセス分析」は、改善の出発点として欠かせません。ただ、ここで立ちはだかるのが“手間のかかる作業”という現実です。どの工程が不要なのかを見極めるには、専門知識を持った人が時間をかけて丁寧に分析する必要があり、その負担は決して小さくありません。

こうした背景から、プロセス分析をもっと手軽に、しかも客観的に行える方法が求められています。そのひとつが「価値付加分析」と呼ばれる手法です。プロセスの各ステップを「顧客にとって意味があるか」「業務として必要か」の観点から分類し、見直しのヒントを得るものです。

今回紹介する研究は、こうした分析作業をLLMに任せるというアプローチをとっています。自然言語に強いLLMの力を借りて、業務プロセスの中にある無駄を自動的に洗い出す。その狙いは、分析の負担を減らしつつ、より多くの改善機会を見つけることにあります。

以下で詳しく紹介します。

## 過去の試みと、そこから見えてきたヒント

業務のプロセスを見直すうえで、LLMの力を活かして文章からプロセスモデルを自動で作成したり、その逆を行うような応用例がすでにいくつも登場しています。

こうした取り組みを理解するには、まずLLMとプロンプトエンジニアリングの基本を押さえておくと役立ちます。LLMは、トランスフォーマーと呼ばれる仕組みにもとづいて大量のテキストを学習し、「こうしてほしい」という自然言語の指示（プロンプト）に応じた応答ができるよう設計されています。

ただし、LLMがどんな反応を返すかは、プロンプトの書き方に大きく左右されます。入力をそのまま渡す「ゼロショット」から、例を添えて方向性を示す「フューショット」、さらにステップを追って考えさせる「チェーン・オブ・ソート」まで、使い方にはさまざまな工夫が試されています。役割やタスクの説明、出力の形式などを明確に盛り込んだ「構造化プロンプト」は、より複雑なタスクに対して特に効果を発揮するとされています。

LLMを使った無駄の分析に関しては、プロセスの中で発生する「待ち時間」に注目した先行研究があります。そこでは、バッチ処理やリソースの競合といった5種類の待ち時間をイベントログから抽出し、LLMに分析させることで、改善のための提案を生成しています。プロセスマイニングと構造化プロンプトを組み合わせた手法として、実践的な成果も報告されています。

ただ、こうしたこれまでの研究は、プロセスの速度やコスト、リソースの使用量など、数値で評価しやすい側面に焦点が当たってきました。そのため今回研究者らは、定量的には測りにくい「意味」や「文脈」に踏み込むことにしました。

LLMの自然言語理解力を生かして、プロセスの各ステップがどんな意味を持つのか、誰にとってどれだけ重要なのかといった視点から分析することで、これまで見落とされがちだった非効率や改善の余地が浮かび上がります。ステークホルダーの認識やビジネス上の位置づけ、他の活動との関係性など、単なる数字では捉えにくい側面を明らかにすることで、より深いレベルで「価値」と「無駄」を見極めることが可能になると考えられています。

## 価値付加分析の自動化を実践するアプローチ

ここからが本題です。業務プロセスの中に潜む“無駄”をLLMで見つけ出すための仕組みについて。研究チームが取り組んだのが、プロセスを丁寧に分解し、各ステップごとに「価値があるかどうか」を判断するという二段構えのアプローチです。

手順はまず、大まかな業務の流れを細かな作業単位へと分けていく段階があります。続けて、それぞれのステップがどのような意味や重要性を持つかを分類する段階へ進みます。これらの過程でLLMに的確な作業を担わせるには、プロンプト設計の工夫が不可欠です。

LLMは、そのタスクをどう理解し、どのような出力を返すかが、プロンプトの構成に大きく左右されます。今回の研究でも、まずは極力シンプルなプロンプトで始め、そこから少しずつ設計を洗練させていくというアプローチが取られました。

### 活動分解

業務プロセスのモデリングでは、ひとつの活動が非常に大ざっぱに記述されることがあります。たとえば「契約手続き」と一言でまとめられていても、その中にはいくつもの具体的な作業が含まれている可能性があります。このような状態では、何が価値ある作業で、どこに無駄があるかを比べることが難しくなってしまいます。

そのため、まずは業務の各活動を、より小さなステップへと分けていく工程が必要になります。ただし、この分解は一義的に決まるものではなく、見る人の立場や解釈によって結果が変わるおそれもあります。

研究チームは、この主観性を最小限に抑えるため、最初にごく単純なプロンプトでの試行から始めました。補足説明や具体例はあえて与えず、LLMに「この活動をいくつかのステップに分けてください」とだけ伝える形です。

そのうえで、活動分解に関するルールを明確に定めたうえで、プロンプトの内容を段階的に整えていきました。LLMの出力をより安定させるために用意された工夫としては、たとえばどんな専門家の視点で答えるべきか、タスクの説明をどこまで細かく書くか、参考となる例を何件見せるか、といった観点があります。

こうした構成要素を一つひとつテストしながら、どの組み合わせが最も効果的かを探るという方法が取られました。すべてのパターンを網羅するのではなく、結果を見ながら少しずつ改良を重ねていく“グリーディ”な探索によって、現実的な範囲で最適な形を見つけ出しています。

### 価値付加分析

ステップの分解が終わったあとは、それぞれのステップに「どれだけの価値があるか」という視点からラベルをつけていきます。ここで扱うのは、次の3つの視点です。

（１）顧客にとって直接的に価値を生む作業で、たとえば「注文を受ける」「製品を発送する」といった行為が含まれるもの。

（２）顧客には見えにくいけれども、社内での運営や法令遵守などの観点から必要とされる作業。

（３）いずれにも該当せず、無くしても業務に支障がないと考えられるものです。

LLMにこれらの分類を任せるとき、単にラベルを振らせるだけでなく、その根拠をあわせて答えさせる設計になっている点も重要です。なぜその分類になったのかを明示することで、後工程での確認や修正もしやすくなります。

このタスクにおいても、最初は説明なしのシンプルなプロンプトで試行されました。その後、業務改善の視点に立った専門家になりきるよう指示を与えたり、評価の観点を明確に記述したりと、プロンプトの内容を段階的に強化する手法が採られました。

とくに、どのような視点から「無駄」を見るのかを丁寧に伝えたときに、LLMがより的確な判断を下すようになる傾向が見られました。たとえば「LEANの考え方に基づいて無駄を見つけてください」と促すと、非効率なステップの抽出精度が明らかに向上するという結果も得られています。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88825_1-1024x554.png)

レンタル業務プロセスの一部を例に、LLMを使った分析の全体像を示す図。 まず活動が細かいステップに分解され、それぞれが「顧客にとっての価値」などの観点で分類される流れ。

### 最終的に設計されたプロンプトの例

#### ①大きな業務活動を、より小さな具体的なステップに分解させる

原文

```js
You are a seasoned Business Process Management expert with over 15 years of experience in process analysis and optimization. Your expertise includes:

- Decomposing complex business processes into granular, actionable steps
- Identifying dependencies and relationships between process components
- Applying standardized process modeling techniques and methodologies
- Understanding process hierarchies and appropriate levels of decomposition

Context: You are analyzing processes at a retail bank focused on customer service and account management.

Consider these examples:
Example 1: Open New Account
{

"activity_breakdown": [{
   "activity_name": "Open New Savings Account", 
   "substeps": [
     {"step": 1, "description": "Verify customer identification documents"},
     {"step": 2, "description": "Input customer personal information in system"},
     {"step": 3, "description": "Review account terms with customer"},
     {"step": 4, "description": "Process initial deposit"},
     {"step": 5, "description": "Issue account credentials to customer"}
   ]
}]
}

Example 2: Process Loan Payment

[REDUCED FOR BREVITY]

Please break down the following activity into its constituent substeps, following the same format and guidelines.
```

日本語訳

```js
あなたは、プロセス分析と最適化に15年以上の経験を持つビジネスプロセスマネジメント（BPM）の専門家です。あなたの専門領域には以下が含まれます：

- 複雑なビジネスプロセスを、実行可能な粒度のステップに分解すること
- プロセス内の構成要素間の依存関係やつながりを特定すること
- 標準化されたプロセスモデリング手法や手続きの適用
- プロセス階層の理解と、適切な分解レベルの判断

コンテキスト：あなたは現在、小売銀行の顧客対応および口座管理に関する業務プロセスを分析しています。

以下の例を参考にしてください：
例1：「新規口座の開設」
{

"activity_breakdown": [{
   "activity_name": "Open New Savings Account", 
   "substeps": [
     {"step": 1, "description": "顧客の身分証明書を確認する"},
     {"step": 2, "description": "システムに顧客の個人情報を入力する"},
     {"step": 3, "description": "口座の利用条件を顧客と確認する"},
     {"step": 4, "description": "初回入金を処理する"},
     {"step": 5, "description": "口座情報（ログイン情報など）を発行する"}
   ]
}]
}

例2：「ローン返済処理」

※（長いため省略）

この形式とガイドラインに従って、以下の活動を構成要素であるサブステップに分解してください。
```

プロンプトの構成要素を日本語でまとめます。

| 構成要素のカテゴリ | 選択肢（バリエーション） | 最適な選択肢（太字） |
| --- | --- | --- |
| **役割の記述（LLMに与える立場）** | Neutral Analyst（中立的な分析者）   Subject Matter Expert (SME)   SME（詳細な記述あり）   Business Process Expert（業務プロセス専門家）   Project Manager（プロジェクトマネージャー）   Process Analyst（プロセスアナリスト）   Operations Manager（オペレーションマネージャー） | **Business Process Expert** |
| **タスクの説明方法** | Breakdown Substeps（単なる分解）   Breakdown with Dependencies（依存関係を意識した分解）   Breakdown Focusing on Outcomes（成果に着目した分解） | **Breakdown with Dependencies** |
| **ガイドラインの粒度** | Standard Guidelines（標準的なガイド）   Detailed Guidelines（詳細なガイド）   Outcome-Focused Guidelines（成果に着目したガイド） | **Detailed Guidelines** |
| **分析の焦点の置き方** | Action-Focused（行動に注目）   Outcome-Focused（成果に注目）   Process-Focused（プロセス全体に注目） | **Process-Focused** |
| **プロンプト内の例の与え方** | Zero-Shot（例なし）   One-Shot（一つの例）   Few-Shot（複数の例）   Detailed One-Shot（詳細な一例）   Detailed Few-Shot（詳細な複数例） | **Few-Shot（複数の例）** |
| **追加コンテキストの有無** | Include Business Context（ビジネス文脈を含める）   Emphasise Order and Dependencies（順序や依存関係を強調） | **Include Business Context** |

### ②すでに分解された各ステップに対して、「その作業に価値があるか」を分類させる

原文

```js
You are an AI assistant with expertise in Lean methodology and process improvement. Your 
role is to analyze business processes through the lens of Lean principles, identifying 
value-adding activities and potential areas for waste reduction. Your task is to 
evaluate the efficiency of a business process by analyzing the given JSON-formatted BPMN 
process output.  

Classify each step as value adding (VA), business value adding (BVA), or non-value 
adding (NVA), with a focus on identifying potential areas for process improvement. For 
each step: 
1. Assess its contribution to overall process efficiency. 
2. Classify it based on its value contribution. 
3. Provide a concise explanation for your classification, highlighting any efficiency 
considerations. 
4. Format your response as a function call for each step, including the classification, 
activity name, step name, and your efficiency-focused justification. 

1. Value Adding (VA): 
- Directly contributes to creating a product or service the customer is willing to pay for 
- Transforms or shapes material or information towards the end product/service 
- Done right the first time 

2. Business Value Adding (BVA): 
- Required by law, regulation, or company policy 
- Reduces financial risk, supports financial reporting, or ensures security 
- Necessary for business operations but not directly valued by the customer 

3. Non-Value Adding (NVA): 
- Consumes resources without adding value to the customer or business 
- Includes waiting, rework, overprocessing, or unnecessary movement 
- Can often be eliminated without impacting the quality of the product/service or 
business operations 

Use the following function to classify each step: 

classify(classification, activity, step, justification) 

Parameters:
- classification: The type of classification for the step ("VA", "BVA", or "NVA") 
- activity: The name of the activity this step belongs to 
- step: A short, descriptive name for the step 
- justification: The reason for its classification 

Here's an example of the expected output for a simple process: 

classify("VA", "Submit Order", "Fill out order form", "Directly contributes to 
customer's goal of placing an order.") 
classify("NVA", "Submit Order", "Wait for system update", "Waiting time does not add 
value to the customer or the business.")
```

日本語訳

```js
あなたは、リーン手法（Lean Methodology）と業務プロセス改善に精通したAIアシスタントです。  
あなたの役割は、リーンの視点からビジネスプロセスを分析し、価値のある活動と無駄となる部分を見極めることです。  
与えられたJSON形式のBPMNプロセス出力をもとに、業務プロセスの効率性を評価してください。

各ステップについて、以下の3つの分類のいずれかに当てはめてください（分類の目的は改善可能なポイントの発見です）：
- VA（Value Adding）  
- BVA（Business Value Adding）  
- NVA（Non-Value Adding）

各ステップに対して、以下の内容を含めてください：
1. そのステップが業務全体の効率にどう寄与しているかを評価する  
2. ステップの価値に基づいて分類を行う  
3. 分類の理由を簡潔に説明する（効率性の観点に言及する）  
4. 出力は、関数形式 \`classify(...)\` を用い、分類種別・活動名・ステップ名・説明を含める

分類の定義は以下のとおりです：

1. Value Adding（VA）  
- 顧客が対価を払ってでも得たい成果に直接つながるステップ  
- 材料や情報をサービスや製品に向けて変化させる工程  
- 最初から正しく実行されることが前提となる活動

2. Business Value Adding（BVA）  
- 法律、規制、または社内ポリシーによって求められるステップ  
- 財務リスクの軽減、報告体制の支援、セキュリティ確保など  
- 顧客には直接見えないが、ビジネス運営には欠かせない活動

3. Non-Value Adding（NVA）  
- 顧客にもビジネスにも価値をもたらさないステップ  
- 待機、手戻り、過剰な処理、不要な移動などを含む  
- 品質や業務に悪影響を与えることなく排除できることが多い

以下の形式で出力してください：

classify(分類種別, 活動名, ステップ名, 分類理由)

例：

classify("VA", "注文の提出", "注文フォームの記入", "顧客の目的である注文手続きに直接関与している")  
classify("NVA", "注文の提出", "システムの更新待ち", "待ち時間は顧客にも業務にも価値をもたらさない")
```

プロンプトの構成要素を日本語でまとめます。

| 構成要素のカテゴリ | 選択肢（バリエーション） | 最適な選択肢（太字） |
| --- | --- | --- |
| **役割の記述** | Neutral Analyst（中立的な分析者）   LEAN Analyst（LEAN手法の専門家）   Business Consultant（ビジネスコンサルタント）   Process Engineer（プロセスエンジニア）   Customer Advocate（顧客視点の擁護者）   SME（各業界の専門家）   SME（詳細な記述あり）   Quality Assurance Specialist（品質保証担当） | **LEAN Analyst（専門家）** |
| **タスクの説明** | Standard Classification（標準的な分類）   Efficiency-Focused Classification（効率性に注目した分類）   Waste Identification（無駄の発見） | **Waste Identification（無駄の発見）** |
| **ガイドラインの種類** | Basic Guidelines（基本的な指針）   Context-Aware Guidelines（文脈に配慮した指針）   Lean Principles Guidelines（LEAN原則に基づいた指針） | **Lean Principles Guidelines（LEAN原則に基づく）** |
| **分類タイプ** | Basic（基本）   Detailed（詳細）   Textbook（教科書的）   Contextualised（文脈に即した） | **Contextualised（文脈に即した）** |
| **例の種類** | Simple Process Example（単純なプロセスの例）   Complex Process Example（複雑なプロセスの例）   Varied Process Examples（さまざまな種類のプロセス例） | **Varied Process Examples（多様なプロセス例）** |
| **コンテキストの取り扱い** | Focus on Customer Value（顧客価値に注目）   Consider Regulatory Requirements（規制要件を考慮）   Include Justifications（分類の根拠を含める） | **Include Justifications（分類理由の明記）** |

## この仕組みはどれほど使えるのか？

ここからは、提案された仕組みが実際にどれくらい役立つのかという検証結果を見ていきます。研究チームは、単純な指示だけで動かす基本的な方法と、設計を工夫した指示文を使った方法の両方を試し、あらかじめ用意した正解データと比較しました。評価は、大きな業務の流れを細かく分ける作業と、その一つ一つの作業に価値があるかどうかを判断する作業に分けて行われました。

### 検証に使われたデータと条件

まず、評価には50種類の業務プロセスの設計図が使われました。これらは、業務改善の入門書や、業務設計に特化した教育用のモデル集から収集されたものです。対象となった業務は、銀行の手続き、顧客対応、医療、製造業、情報サービスなど、幅広い分野に及びます。

各プロセスには、業務の流れを細かく分けた構造と、それぞれの作業に対して「どれだけ価値があるか」という分類があらかじめ付けられています。このデータは無作為に分けられ、33件をモデルの設計や試行錯誤に使い、残りの17件を最終的な評価に用いました。

検証では、LLMを使い、出力のばらつきを抑えるために設定も調整されています。業務内容の記述と、それに対する分析の指示を処理するには十分な容量が確保されていました。

### 作業の分解はどれくらい正確だったか？

まず、大まかな業務を細かい作業単位に分ける作業がどれくらい正確に行えたかを見ていきます。この作業には、見る人によって違う正解が生まれるという性質があります。そのため、研究チームは、業務改善の基本的な知識を持つ4人に対して、同じ業務の設計図を個別に見てもらい、どのように分けるかを判断してもらいました。

その結果、作業の区切り方や表現にばらつきがあることが確認されました。たとえば「本人確認を行う」という作業を、「書類の確認」と「本人情報の入力」に分ける人もいれば、ひとまとめにする人もいたという具合です。つまり「何をもって1ステップとするか」には、ある程度の自由度があるということです。

こうした状況では、単に文の一致を比べるだけでは意味のある評価ができません。そこで研究チームは、人間の判断に近い形で出力の評価ができるよう、もうひとつのLLMを使って比較を行う仕組みを作りました。この比較ツールでは、次の4つの観点で整合性を判定します。

1. まったく同じ表現で一致している
2. 違う言い方だが、意味としては同じ作業を示している
3. 分け方の細かさが違うだけで、内容は共通している
4. 内容が一致しておらず、ずれがある

この比較ツールは、人間の専門家による検証ともよく一致しており、信頼できる評価指標として活用されています。

そのうえで、設計を工夫した指示文を使って、LLMに業務の分解をさせたところ、最もよく機能したのは「業務プロセスの専門家」という役割を与えた構成でした。この方法では、約60パーセントの作業が人間の正解と同じ、またはほぼ同じ内容として認識されました。

また、1割程度の作業には分け方の細かさの違いが見られましたが、これはどのくらい丁寧に分けるべきかという判断の違いによるもので、想定内のばらつきと言えます。一方で、約3割の作業については対応するものが見つからず、LLMの理解が専門家の解釈とずれていたことが明らかになりました。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88825_2-1024x245.png)

活動分解の精度を、ゼロショットの方法と複数の構造化プロンプトの構成で比較した結果をまとめたもの。業務プロセスの専門家という役割を与えた構成が、もっとも人間の基準に近い出力を出した。

### 価値の判断はどれくらい的確だったか？

続いては、細かく分けた作業一つひとつに対して、「それは顧客や会社にとって価値があるか？」を分類する作業の精度を見ていきます。ここでも、人間の注釈者4人が同じ作業について判断し、その結果とLLMの出力を比較しました。

評価には、複数の人の分類結果がどれだけ一致しているかを測る指標が使われました。結果としては「やや一致している」という程度で、これは人間同士でも判断が分かれやすい複雑な作業であることを示しています。

LLMによる分類では、およそ45パーセントの作業が「顧客にとって価値がある」とされ、48パーセントが「社内の業務運営に必要だが、顧客には直接関係しない」と分類されました。そして、残る6パーセント程度が「どちらの視点から見ても価値がない可能性がある」とされました。この割合は、現実の業務がある程度改善されている企業では一般的な傾向と一致していると考えられます。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88825_3-1024x361.png)

価値分類タスクにおけるLLMの性能を、複数のプロンプト構成ごとに比較した結果。 分類全体の精度が最も高かったのは「専門知識を持つ分析者」に設定した構成で、「不要な作業（非価値作業）」の検出精度が最も高かったのは「リーン手法に基づく分析者」として設定した構成だった。

とくに注目されたのは、「不要な作業」をどれだけ正確に見抜けるかという点です。実際には、不要とされていた作業の7割以上を正しく分類できており、顧客にとっても社内にとっても意味を持たない処理をしっかり特定できていることがわかりました。

ただし、「顧客にとって価値がある」と「会社にとって必要だが顧客には直接関係ない」の線引きはやや難しく、分類が混ざるケースもありました。これは、業務の目的や対象者によって判断が変わる微妙な差異を反映していると考えられます。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88825_4.png)

「不要な作業」の検出精度を中心に、LLMによる価値分類と人間の正解との違い。非価値作業の検出は比較的正確だった一方で、「顧客にとっての価値」と「業務上の必要性」の区別にはあいまいさが見られた。

要するに検証を通して、大きな作業の分解も、それぞれの作業に価値があるかどうかの評価も、LLMにある程度任せられる可能性が見えてきました。なかでも「無駄を見つける力」は十分に実用的といえる水準にあり、今後の業務改善に取り入れていける余地がありそうです。次に気になるのは、これをどうやって現場に落とし込むかという点です。

## こうした仕組みが持つ可能性と気をつけたいこと

### 可能性の話

今回の検証結果から、業務プロセスの中にある作業の価値をLLMで分析するという仕組みに、確かな可能性が見えてきました。以下で、その強みと課題について、少し立ち止まって整理しておきます。

まず注目したいのは、これまで人の手に頼っていた業務プロセスの評価作業を、LLMを活用することで標準化しやすくなるという点です。複数の業務を一括して見直したいときや、部門横断で一貫した改善活動を行いたいときなど、人力だけでは手が回りにくかった場面でも、より広く、より頻繁にプロセス評価を実施できるようになる可能性があります。

また、あらかじめ整えられたガイドラインと構造化された指示文を使うことで、LLMから得られる分析結果にも一貫性が生まれます。これは例えば複数の担当者が関わるような大きな組織にとって重要です。同じ基準で判断ができるということは、無駄の抽出や改善の方向性を共通言語で話し合えるということでもあります。

もうひとつの魅力は、LLMの高い言語理解力によって、人間の目では見過ごしがちな視点を補ってくれるかもしれないという点です。手順の背後にある目的や意味づけといった“文脈の理解”を含めて分析できることで、表面的な見直しにとどまらない深い洞察が得られる可能性もあります。

ただし、あくまでLLMは人の判断を支えるための補助的なツールと捉えた方が現実的です。ルーティンの分析や明らかな無駄の発見は任せられる一方で、実際にどう改善するか、どこまで手を入れるかといった最終的な判断には、人間の視点が欠かせません。LLMがもたらす一貫性と広がりを、人間の柔軟な判断力と組み合わせることで、より質の高い改善活動が実現しそうです。

### 気を付けたいことの話

一方で、いくつかの注意点もあります。たとえば今回の検証でも見られたように、作業の分解や価値の分類には、人によって見方が分かれる主観的な要素がつきまといます。この主観性は、LLMの出力にも反映されやすく、指示文の書き方や与える情報の量によって結果が変わってしまうことがあります。一貫性を保つには、より堅実なガイドラインづくりや、文脈を適切に共有する仕組みが必要になるでしょう。

また、LLMがどんな指示にどのように反応するかを調整する「プロンプト設計」は、試行錯誤の要素が大きく、時間も手間もかかります。今回の研究では、構成要素を一つずつ試す“グリーディな探索”が使われていましたが、それでもLLMの細かなクセや誤解を完全にコントロールするのは簡単ではありません。今後は、より効率的なプロンプト設計の手法や、文脈に応じて柔軟に指示を変える仕組みが求められるかもしれません。

さらに、LLMの出力は、トレーニングに使われたデータや対象とする業界の文脈に強く依存します。今回使われたプロセスモデルは幅広い業種を含んでいますが、それでもすべての専門用語や慣習をカバーしているとは限りません。業界ごとの背景をより深く反映させたい場合には、専門分野の文書を学習に取り入れるか、独自の調整（ファインチューニング）を行う必要が出てくると考えられます。

加えて、出力の説明のわかりやすさにも課題があります。LLMは分類の理由を答えることはできますが、その説明がビジネス上の判断材料として十分な深さや説得力を持っているかという点には、改善の余地があります。なぜその判断に至ったのかを、もっと明確に、かつ人が納得できる形で示す工夫が今後重要になってきそうです。

最後に、業務プロセスという組織の中核に関わる情報をLLMに扱わせるという点で、プライバシーや情報保護への配慮も欠かせません。外部のサービスを使ってプロセスデータを処理する場合、その内容が将来的に再利用されるリスクや、外部に漏洩する可能性を慎重に検討する必要があります。社内ルールの整備や、モデルの取り扱いに関する明確な基準づくりが、実務への導入には不可欠になるでしょう。

## まとめ

本記事では、業務プロセスにおける作業の価値をLLMで分析する手法を紹介しました。活動の細分化と価値の分類という二段階で構成されており、一定の精度が確認されています。

構造化された指示文と役割設定によって、LLMの出力に一貫性が生まれる点が特徴です。一方で、出力のばらつきや専門性への対応には注意が必要であり、導入時には慎重な設計が求められます。

こうした事例は、自社の業務内容や評価の目的に応じて、どの部分にLLMを活用するかを検討する手がかりとなるかもしれません。

**参照文献情報**

- タイトル：Automated Business Process Analysis: An LLM-Based Approach to Value Assessment
- URL： [https://doi.org/10.48550/arXiv.2504.06600](https://doi.org/10.48550/arXiv.2504.06600)
- 著者：William De Michele, Abel Armas Cervantes, Lea Frermann
- 所属：The University of Melbourne

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[富士通の最新決算から学ぶ国内IT企業のAI事業トレンドと人材採用ニーズ](https://ai-data-base.com/archives/89106)

[自動コードドキュメント生成を行うLLMエージェント設計論](https://ai-data-base.com/archives/89120)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)