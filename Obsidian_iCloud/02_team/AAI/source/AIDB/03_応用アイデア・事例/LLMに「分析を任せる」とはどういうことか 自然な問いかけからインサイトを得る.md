---
title: "LLMに「分析を任せる」とはどういうことか 自然な問いかけからインサイトを得る"
source: "https://ai-data-base.com/archives/88313"
author:
  - "[[AIDB Research]]"
published: 2025-04-18
created: 2025-06-13
description: "本記事では、LLMを使ってデータ分析を手助けする仕組みのひとつを紹介します。これまでデータ分析といえば、専門的なスキルを持つ人の仕事という印象が強く、自分には縁のない話だと思っていた方も多いかもしれません。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMを使ってデータ分析を手助けする仕組みのひとつを紹介します。  
これまでデータ分析といえば、専門的なスキルを持つ人の仕事という印象が強く、自分には縁のない話だと思っていた方も多いかもしれません。  
ですが、LLMの進化によって、自然な言葉で問いかけるだけで傾向や理由を探るような使い方が少しずつ現実になりつつあります。  
今回取り上げるのは、そうした未来に向けたひとつの設計案です。分析を構成するための工夫や、それがどこまで機能しているのかを見ていきます。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313-1024x576.png)

## 背景

「データ分析」と聞くと、専門職の人が扱うものという印象が強く、自分には関係のない話だと感じている方も多いかもしれません。実際、数字や表を読み解いて、意味のあるインサイトを導き出す作業は、これまで訓練を受けた人たちの領域とされてきました。

しかし、LLMの進化によってその状況は変わりつつあります。自然な言葉で「売上の変化の理由を教えて」や「アンケート結果をまとめて」といった問いかけを行うだけで、LLMが裏側で適切な処理を行い、有用な分析結果を返してくれる未来が現実味を帯びてきました。こうした技術が広まれば、データ分析はもっと身近なものになり、エンジニアだけでなくビジネスパーソンにとっても大きな武器になる可能性があります。

とはいえ、現在の分析支援ツールは、まだ基本的な集計や簡易的な可視化にとどまっているケースが多く、複数ステップにわたる推論や柔軟な判断が求められる場面では力不足を感じることもあります。また、ツールが出力するインサイトの「質」をどう評価するかについても明確な基準がないことが多く、現場で活用するには課題が残っています。

そうしたなかで、今回トロント大学などの研究グループは、LLMに分析スキルを与えてタスクに応じて使い分けられるようにすることで、より高度で柔軟なデータ分析を誰でも実行できるようにする仕組みを作りました。そのまま業務に組み込むことも、自分なりに改良して使うことも可能です。これを手がかりに独自のプロジェクトを立ち上げることもできるかもしれません。

誰でも使える分析支援ツールが現実のものになろうとしている今、今回の研究はその一歩先を見据えた試みといえます。どのような仕組みでそれが実現されているのか、どんな工夫が凝らされているのか、続くセクションでは、その具体的な内容を詳しく見ていきます。

## 先行研究と関連技術

なぜ今回のような仕組みが注目されているのか。  
その背景には、これまでの技術が抱えていた課題があります。

### 分析ツールはあっても、使いこなすのは難しい

LLMを使ったデータ分析のツールはすでにいくつもあります。ただし、その多くは「いくつかの処理を順番にこなす仕組み」や、「複数のLLMが連携して役割分担する仕組み」にとどまっています。

理屈はわかりやすいのですが、「何を目的に、どの手法を使うべきか」という判断ができないため、結果としてあまり深い気づきが得られないこともあります。

ほかにも、プログラムを自動で書いて分析を進めるようなツールもありますが、タスクの文脈をうまく理解できず、失敗したときは何度もやり直しが必要になります。

### 何が「よい分析」なのかを測るのがむずかしい

ひとつの壁は、「LLMが出した分析結果が役に立つかどうか」をどう判断するかです。

既存の評価方法の多くは、限られたジャンルや単純な問題にしか対応しておらず、実際の業務のような複雑な分析には向いていません。さらに、分析全体の流れやインサイトの深さを評価する仕組みも、まだあまり整っていません。

そこで、今回こうしたギャップを埋めるために、実際のデータ分析コンテスト（Kaggle）の投稿をもとに、現実に近いタスクでLLMの実力を測れる仕組みが整えられました。

### 人の代わりにLLMが「採点」できるか？

最近では、LLM自身に「この分析は良いか悪いか」を判断させる方法も登場しています。人の手を減らせる一方で、「本当に人間の目と同じように判断できているのか？」という問題も出てきます。

従来の方法では、LLMに細かいルールを与えたり、特別に訓練し直したりして対応してきましたが、時間もコストもかかります。

今回の研究では、プロンプトの工夫だけで、専門家の判断にかなり近いスコアリングができる方法がとられています。軽くて扱いやすく、さまざまな場面に応用しやすいのが特徴です。

## LLMによる分析をどう評価するか

LLMが生成した分析結果がどれほど実用的かを判断するには、正確さだけでは足りません。分析の目的に合っているか、誰の立場から行われたものか、そうした文脈まで含めて評価する必要があります。

この課題に対応するため、研究チームは、現実のデータ分析の流れを参考にしながら、LLMの出力を検証できる評価用のデータセットを整備しました。その材料となったのは、データ分析コンテストで知られるKaggleというプラットフォームに投稿された数百件のJupyterノートブックです。Kaggleでは、実際のデータを用いた分析の手順や考察が詳しく記録されています。

このノートブック群をもとにデータセットが構築され、KAGGLEBENCHと名付けられました。

### ノートブックを活用した問いと答えの生成

研究チームはまず、Kaggleに投稿された約700件のノートブックを収集し、そこに含まれる文章やコードを細かく分割しました。それぞれのブロックに対してGPT-4oを使い、自動的に質問と回答のペアを生成しています。

回答として使われたのは、ノートブック内に記された説明文やコードの出力であり、実際の分析の流れに即した内容です。あわせて、各ペアには関連するスキルやタスクの分類情報も付け加えられました。一貫性のないペアは除かれ、最終的に各ノートブックから代表的な10件が選ばれています。

### 分析の目的と視点も整理

KAGGLEBENCHでは、問いと答えだけでなく、それぞれの分析がどんな目的で行われたのか、どのような立場から書かれているかといった情報も整理されています。

目的は、その分析が「何を明らかにしようとしていたか」を簡潔に表したもので、手法については触れられていません。視点（ペルソナ）は、たとえばデータアナリストやマーケティング担当者といったように、想定される利用者像を示すものです。これらの情報も、ノートブックの内容をもとにGPT-4oで自動的に抽出されました。

こうした文脈をあらかじめ共有できることで、LLMが生成したインサイトがその目的や視点に沿ったものであるかどうかを、より丁寧に判断できるようになります。

要するに今回新たに作成されたKAGGLEBENCHは、実際の分析事例に基づき、目的や立場も含めて評価できるよう設計されたデータセットです。あくまでひとつの基準ではありますが、LLMを活用した分析支援ツールの性能を検証するうえで、参考になる構成と言えます。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_11-1024x706.png)

データセットの統計情報

## 分析支援にLLMを使う、その課題にどう向き合うか

LLMを使ってデータ分析を支援するというアイデア自体は目新しいものではありません。ただ、既存の取り組みの多くは、柔軟さや表現力を持つ一方で、分析の目的に合わせた一貫した推論が難しかったり、表層的なインサイトしか得られなかったりといった課題がありました。

研究者らはそうした課題に対して、分析の流れをスキル単位で整理し問いの生成からインサイトの出力までを段階的に設計することで、より実務に近い分析支援を目指してAgentAdaというツールを開発しました。

[https://github.com/ServiceNow/AgentAda](https://github.com/ServiceNow/AgentAda)

以下では、その構成上の工夫を順に見ていきます。

なお、設計のひとつひとつは、AgentAdaという特定のツールだけに閉じた話ではありません。  
自分のプロジェクトでLLMをどう使うかを考えるとき、たとえば「スキルを与えるか」「問いをどう作るか」「コード生成は何回試すか」「誰に向けた出力か」といった判断の積み重ねが、設計の質を左右します。自動化をするために構成されたツールであっても、その考え方は、むしろ人間の分析プロセスに通じるところがあります。どこかで取り入れられそうな発想があれば、ぜひ使ってみてください。とくに、使用されているプロンプトは具体的に活用可能です。

### スキルはあらかじめ与えておく

自由に分析させるのではなく、最初に「使ってよい道具」を並べておくこと。これはLLMと協働する際の基本的な考え方のひとつです。

そのため、データ分析では、まずはLLMが扱える「分析スキル」をあらかじめリストアップしておきます。たとえばクラスタリング、分類、回帰、 [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") など、よく使われる処理を74種類ほど用意し、それぞれをライブラリとして登録しておきます。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_1-1024x960.png)

スキルを使って分析を進めるエージェントと、汎用的に動作するエージェントの違いを並べて示した図

スキルごとに短い説明文を添えておくと、あとでLLMが自然言語で書かれた質問と照らし合わせて選びやすくなります。重要なのは、選択肢を用意することでLLMの判断をある程度ガイドしながら、それでも言語的な柔軟さは残しておくというバランス感覚です。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_10-839x1024.png)

スキル一覧

### 質問は一気に作らず、段階的に育てる

分析は「何を知りたいか」から始まりますが、その問いをいきなり深掘りしようとすると、かえって見落としが増えてしまいます。

そこで、質問はまずシンプルなものから出発させます。たとえば平均値や分布、単純な傾向といった、全体を俯瞰するような問いです。こうした基本的な質問は、データセットの中身や、分析の目的、そして想定するユーザー像（たとえば「マーケティング担当者」など）から自動的に作ります。

そして、その初期質問とスキルの情報を使って、次の段階ではもう少し複雑な問いを立てていきます。関係性の分析や異常の検出など、より深い分析につながるような質問です。

あらかじめすべてを決め込まず、問いを育てるように設計する、それがこの構成のひとつの工夫です。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_2-1024x503.png)

質問の生成からインサイトの抽出まで、ツール全体の流れを5つのステップで表した図

データの概況を把握するための簡易・汎用的な問いをまず作る際には、データセットをLLMに与え、以下のようなプロンプトを使用します。

原文

```js
You are an AI assistant specializing in data analysis.
I have a dataset with the following details:

Columns: {columns}
Data Types: {data_types}
Sample Data: {sample_data}
Goal: {goal}
Persona: {persona}

Based on this information, generate five insightful questions that a data analyst in this persona would ask or seek to answer when
exploring the dataset.

The questions should be relevant to the dataset’s structure and align with the stated goal of the analysis.

Make sure that all the questions are returned as a list named generated_questions The generation format should be:

generated_questions = [question_1, question_2, ..., question_5]
```

日本語訳

```js
あなたはデータ分析を専門とする AI アシスタントです。
次の情報を持つデータセットがあります。

Columns: {columns}
Data Types: {data_types}
Sample Data: {sample_data}
Goal: {goal}
Persona: {persona}

この情報を基に、上記のペルソナを持つデータアナリストがデータ探索時に抱くであろう
洞察的な質問を 5 つ作成してください。

質問はデータ構造と分析の目標に合致している必要があります。

質問はリスト \`generated_questions\` として返してください。形式は以下です。

generated_questions = [question_1, question_2, ..., question_5]
```

さらに、スキルライブラリを活かし、深い分析が必要な多様な問いへ昇華するには、以下のようなプロンプトを実行します。

原文

```js
You are an AI assistant specializing in data analysis.
I have a dataset with the following details:
Columns: {columns}
Data Types: {data_types}
Sample Data: {sample_data}
Goal: {goal}
Persona: {persona}

Additionally, I have already generated these "basic questions" that a data analyst might ask when exploring this dataset: {generated_basic_questions}

Now, using the provided dataset information, these basic questions, and the goal and persona as guiding principles, "generate
{num_questions} additional advanced and diverse questions that require specialized analytical techniques" to answer.

Requirements for the "Advanced Questions":
Goal Alignment: Each question must directly contribute to achieving the stated goal of the analysis.
Persona Relevance: The complexity and focus of the questions should match the persona’s expertise and domain.
Higher Complexity: Questions should require deeper analytical skills, making them significantly more advanced than the basic ones.
Skill-Based: Each question should necessitate the use of exactly one skill from the following skill list: {skill_list}
  - Implicit Skill Usage: The skill name must not be directly mentioned in the question.
  - Diverse Techniques: Ensure a variety of skills are used across the five questions, avoiding redundancy.

Before finalizing a question, internally reason if GPT‑4o can answer this question using basic reasoning or common‑sense knowledge?
  - If yes, reject the question and generate a more advanced one.
  - If no, proceed.

Format each question on a new line, and pair it with its corresponding task name, like this:
1. [Task Name] - Question
2. [Task Name] - Question
...
Starting from 1 and ending at {num_questions}...
```

日本語訳

```js
あなたはデータ分析を専門とする AI アシスタントです。
次の情報を持つデータセットがあります。
Columns: {columns}
Data Types: {data_types}
Sample Data: {sample_data}
Goal: {goal}
Persona: {persona}

さらに、このデータセットを探索する際に想定される「基本質問」が既にあります: {generated_basic_questions}

これらの情報とゴール・ペルソナを指針として、
「{num_questions} 個の追加的かつ高度で多様な質問」を作成してください。
これらの質問には専門的な分析技術が必要になります。

高度質問の要件:
- **Goal Alignment**: 各質問は分析目標の達成に直接寄与すること。
- **Persona Relevance**: 質問の複雑さと焦点はペルソナの専門性とドメインに適合すること。
- **Higher Complexity**: 基本質問よりも深い分析スキルを要すること。
- **Skill‑Based**: 各質問は以下のスキルリスト {skill_list} から **ちょうど 1 つ** のスキルを暗に要求すること  
  ・スキル名は質問文に直接書かない  
  ・5 問全体でスキルが重複しないよう多様性を保つ

質問を確定する前に内部で次を判断してください。  
「GPT‑4o が常識的推論だけで答えられるか?」  
- もし **Yes** なら、その質問を棄却し、より高度な質問を生成  
- もし **No** なら採用

出力形式:
1. [Task Name] - 質問
2. [Task Name] - 質問
...
1 から {num_questions} まで連番で記載
```

生成される洞察の大枠カテゴリを先読みを行う際には、以下のプロンプトを使用します。

原文

```js
As an expert data scientist, your task is to predict the top 3 most important categories of insights that will emerge from analyzing
answers to the given questions. These categories should reflect the key themes in the insights that will be extracted.

Inputs:
1. Dataset Description: datasetdescription
2. Analysis Goal: goal
3. Questions Analyzed: questions list

Task Requirements:
1. Predict the types of insights that are most likely to be derived from answering these questions.
2. Group these insights into exactly three distinct categories that:
   - Capture the most relevant insight themes based on the dataset and goal.
   - Are broad enough to group multiple related insights yet specific enough to be actionable.
   - Help structure extracted insights meaningfully for stakeholders.
3. Ensure that each category:
   - Reflects the key insight patterns likely to emerge from answering the provided questions.
   - Avoids overlap, ensuring each category has a unique analytical focus.
   - Aligns with the dataset and analysis goal, making insights easier to interpret and act on.

Output Format:
- Return a concise list of three category names.
- Each category name should be clear, precise, and directly tied to the expected insights.
- Avoid generic or overly broad categories—focus on those that will maximize insight clarity and usability.

Your response should ensure that the most critical insights are structured effectively, preventing any valuable findings from being overlooked.
```

日本語訳

```js
あなたは熟練したデータサイエンティストです。与えられた質問群の回答を分析したときに得られる
洞察を大きく 3 つのカテゴリーに分類して予測してください。各カテゴリーは抽出される洞察の主要
テーマを反映する必要があります。

入力:
1. データセットの説明: datasetdescription
2. 分析目標: goal
3. 分析対象の質問リスト: questions list

タスク要件:
1. これらの質問に答えることで導かれるであろう洞察のタイプを予測する
2. 洞察を **ちょうど 3 つ** のカテゴリーにまとめる  
   - データセットと目標に基づく最重要テーマを捉えること  
   - 複数の関連洞察を包含できる十分な広さを持ちつつ、行動可能な具体性を保つこと  
   - ステークホルダーにとって洞察を構造化しやすくすること
3. 各カテゴリーは  
   - 提供された質問に答えることで現れる主要パターンを反映  
   - 互いに重複しない固有の分析フォーカスを持つ  
   - データセットと目標に整合し、解釈・活用を容易にする

出力形式:
- 3 つのカテゴリー名を簡潔に列挙
- 各名称は明確・具体で期待される洞察に直接結び付くものとする
- 汎用的すぎる、あるいは広すぎる名称は避け、洞察の明確さと有用性を最大化する

あなたの回答は、重要な洞察が見落とされないよう効果的に構造化されている必要があります。
\`\`\` :contentReference[oaicite:0]{index=0}
```

### 方針を選ばせるときは、説明文ベースで照合する

どのスキルを使うかは、分析の方針そのものを決める大事な判断になります。ただ、LLMに「この処理を選べ」と明示的に命じると、かえって柔軟さが失われることもあります。

そこで、問いとスキルの「説明文どうし」を意味的に照らし合わせて、どれが近いかを判断させるという設計がとられています。質問とスキルの両方を自然言語で記述しておくことで可能になるアプローチです。

完全に自由でもなく、完全に固定でもない。そんな「半構造的」なガイドが、LLMとの相性がよいようです。

プロンプトの例は以下の通りです。

原文

```js
\`\`\`text
Given a question about a skill and several documentation files, identify the top 3 most relevant files to solve the question.

Question: question
Available documentation files: json.dumps([doc['name'] for doc in documents], indent=2)

For each file, analyze its relevance to the question and skill, and return the top 3 files in the decreasing order of usefulness. The output
should be in JSON format like this:

{
  "file name": "most relevant file",
  "file name": "second relevant file",
  "file name": "third relevant file"
}
```

日本語訳

```js
スキルに関する質問と複数のドキュメントファイルが与えられています。質問を解決するうえで
最も関連性が高いファイルを上位 3 つ特定してください。

Question: question
利用可能なドキュメントファイル: json.dumps([doc['name'] for doc in documents], indent=2)

各ファイルについて質問・スキルとの関連度を分析し、有用性が高い順に 3 件返してください。
出力は次の JSON 形式とします。

{
  "ファイル名": "最も関連性が高いファイル",
  "ファイル名": "2 番目に関連性が高いファイル",
  "ファイル名": "3 番目に関連性が高いファイル"
}
\`\`\` :contentReference[oaicite:1]{index=1}
```

### コードは「書かせる」だけでなく「書き直させる」

スキルが決まったら、Pythonでのコード生成に入ります。ここでは、質問やスキルの説明文、データの構造といった情報をもとに、前処理・分析・可視化・評価などを含むコードを一括で出力します。

とはいえ、最初からうまく動くとは限りません。そこで、実行時にエラーが出た場合は、その内容をLLMにフィードバックとして渡し、自動で再生成を試みるようにします。最大3回までやり直す設計です。

「失敗しないコードを一発で書く」のではなく、「失敗を前提に、やり直しながら精度を高める」という姿勢が現実的です。

### 出力された結果を、読みやすいかたちに整える

コードが動くと、グラフや数値指標といった出力が得られます。そのままでは読み取りづらいため、そこから自然な回答文を生成するステップを設けます。

ここで使われるのは、質問、出力された図表、統計量などを一括で与えて、LLMに自然な言葉でまとめさせるという方法です。回答は、端的に理解できるよう箇条書き形式で出力されます。

この段階では「分析者」ではなく「読み手」が主語になります。LLMには、出力を「伝わるかたち」に変える役割を担わせているわけです。

プロンプトは以下の通りです。

原文

```js
Your task is to analyze the plot and directly answer the question based on the dataset while uncovering as many interesting patterns
and insights as possible. Think step by step. Your response should be insightful, data‑driven, and well‑justified.

Inputs:
1. Question: "question"
2. Plot: A plot generated based on the dataset and the question.
3. First Few Rows of the DataFrame: "df_head"
4. Stats for the plot: stats

Requirements:
1. Extract all notable insights from the plot, including:
   - Key Patterns & Trends: Identify significant movements or relationships in the data.
   - Anomalies & Outliers: Highlight any unexpected deviations and their potential implications.
   - Comparisons & Contrasts: Discuss notable differences between categories, groups, or metrics.
   - Hidden or Unexpected Findings: Look for less obvious but meaningful insights that add depth to the analysis.
2. Justify each insight with:
   - Quantitative Evidence: Use specific data points, statistics, or calculated metrics.
   - Qualitative Explanation: Provide logical reasoning and contextual interpretation.
3. If applicable, determine and explain the root cause behind significant findings.
4. Ensure your response is actionable and meaningful, highlighting real‑world relevance where appropriate.
5. Avoid generic descriptions of the plot itself—focus solely on what the data implies in relation to the question.
6. If categories exist, refer to them using actual dataset values rather than generic labels.
```

日本語訳

```js
あなたのタスクは、プロットを分析し、データセットに基づいて質問へ直接答えると同時に、
可能な限り多くの興味深いパターンと洞察を明らかにすることです。段階的に考えましょう。
回答はインサイトフルでデータ駆動、かつ十分に根拠づけられている必要があります。

入力:
1. Question: "question"
2. Plot: データセットと質問から生成されたプロット
3. DataFrame の先頭数行: "df_head"
4. プロットに関する統計量: stats

要件:
1. プロットから以下を含むすべての注目すべき洞察を抽出する  
   - 主要なパターン & 傾向: データの顕著な動きや関係性  
   - 異常値 & 外れ値: 予期しない逸脱とその示唆  
   - 比較 & コントラスト: カテゴリ・グループ・指標間の顕著な差異  
   - 隠れた / 予想外の発見: 一見わかりにくいが意味のある洞察  
2. 各洞察を裏付ける  
   - 定量的証拠: 具体的な数値・統計・計算結果  
   - 定性的説明: 論理的推論と文脈的解釈  
3. 該当する場合は、重要な発見の根本原因を特定し説明する  
4. 実用的かつ意味のある回答とし、現実世界での関連性を強調する  
5. プロットの単なる描写は避け、データが質問に対して示唆する内容に集中する  
6. カテゴリが存在する場合は、汎用ラベルではなく実際のデータ値で言及する  
\`\`\` :contentReference[oaicite:0]{index=0}
```

なお、上記で詳細な回答を得た後には下記のプロンプトで要約します。

原文

```js
\`\`\`text
You are an expert data analyst. Given the following list of insights from a dataset analysis:
{answer}

Your task is to generate up to 2 key bullet points summarizing the most important findings. Each bullet point should:
- Start with a header from the insight card you’re referencing.
- Provide a clear, concise summary of the insight.
- Prioritize insights that have strong quantitative backing (e.g., percentages, counts, averages, variances).
- Focus on actionable or significant patterns.

Before selecting a summary point, internally verify that it is backed by quantitative evidence. If an insight lacks sufficient numerical
support, choose a stronger one.

Analysis is for the Question: {question}

Example Output:
• High Case Routing Rate: 70% of cases require multiple reassignments, indicating systemic inefficiencies in initial routing.
• Response Time Exceeds Target: Average response times exceed target SLAs by 45%, with peak‑hour delays between 2‑4 PM.
```

日本語訳

```js
あなたは熟練したデータアナリストです。以下はデータセット分析から得られた洞察の一覧です:
{answer}

最も重要な発見をまとめた箇条書きを **最大 2 つ** 生成してください。各箇条書きは:
- 参照しているインサイトカードの見出しで始める  
- 洞察を明確かつ簡潔に要約する  
- パーセンテージ・件数・平均・分散など、強い定量的裏付けを優先する  
- 行動可能または重要なパターンに焦点を当てる  

要約ポイントを選ぶ前に、十分な数値的根拠があるか内部で確認してください。数値が乏しい洞察はより強力なものに差し替えてください。

この要約は Question: {question} に関する分析結果です。

例:
• High Case Routing Rate: ケースの 70% が複数回の再割り当てを要しており、初期ルーティングに構造的な非効率がある  
• Response Time Exceeds Target: 平均応答時間が SLA を 45% 上回り、ピーク時間帯 (14‑16 時) に遅延が顕著  
\`\`\` :contentReference[oaicite:1]{index=1}
```

### 最後に「何がわかったのか」を問い直す

複数の質問に答えたあとは、その結果をひとつのインサイトとしてまとめ直します。ここで重要なのは、「分析の目的」が再び登場することです。

どんなデータで、どんな目的を持って分析を始めたのか。それに対して、どんな答えが得られたか。LLMには、それらをふまえて要点をまとめさせます。単なる結果の要約ではなく、「どこに意義があったのか」という観点を盛り込ませます。

プロンプト例は以下の通りです。

原文

```js
You are tasked with extracting the most impactful, relevant and actionable insights from the dataset analysis. Your insights should
be concise, engaging, quantitative, visually structured, and directly useful for decision-making.

Inputs:
1. Dataset Description: {dataset_description}
2. Analysis Goal: {goal}
3. Questions Answered: {answer_list}
4. Predefined Insight Categories: {insight_categories}

Task Requirements:
1. Extract only the most critical and meaningful insights—avoid generic or trivial observations.
2. Each insight must be:
   - Highly relevant to the dataset and analysis goal.
   - Concise and engaging, ensuring readability.
   - Naturally backed by quantitative evidence (if applicable).
   - Root causes should be embedded within the insight when they provide deeper understanding.
   - Include an actionable prediction or prescription based on the insight.
   - Formatted for maximum readability, using:
     - **Bold key phrases** to highlight major takeaways.
     - Bullet points or short sentences for clarity.
     - Short, structured paragraphs to maintain reader engagement.
3. Group insights under the predefined categories—do not create new categories.
4. Ensure each insight is unique and does not overlap with others.

Output Format:
- Insights must be structured under their respective categories.
- Each insight should be a single, well‑structured paragraph, using bold formatting to emphasize key points.
- Avoid unnecessary explanations or repeating similar observations.
—
Example Format:
Category: Example_Category
Insight Title: Key finding with supporting data, possible causes, and an actionable recommendation in an engaging style.
—
Example:
Category: Customer Behavior  
**Loyal Customers Drive 60% of Revenue, But Referral Engagement is Dropping**  
Returning customers contribute 60 % of total revenue, with a 12 % increase in retention over the last two quarters. However, referral engagement has dropped by 15 %, indicating that while retention strategies are working, referral incentives may be losing effectiveness. **Actionable Step:** Strengthen personalized referral rewards or integrate referral bonuses into loyalty programs to reignite organic growth.
```

日本語訳

```js
あなたのタスクは，データセット分析から **最も影響力が大きく，関連性が高く，実行可能な洞察** を抽出することです。洞察は簡潔で読みやすく，定量的根拠を含み，意思決定に直結する形で提示してください。

入力:
1. データセットの説明: {dataset_description}  
2. 分析目標: {goal}  
3. 回答済みの質問一覧: {answer_list}  
4. 事前に定義された洞察カテゴリ: {insight_categories}

要件:
1. ありきたりな所見ではなく，本当に重要で意味のある洞察のみを抽出する  
2. 各洞察は以下を満たすこと  
   - データセットと分析目標に強く関連  
   - 簡潔で読みやすい  
   - （可能なら）定量的証拠で裏付け  
   - 根本原因を盛り込み，理解を深める  
   - 行動可能な予測・提言を含む  
   - 可読性を高めるため **太字**，箇条書き，短い段落を活用  
3. 洞察は必ず事前定義のカテゴリ内に整理し，新規カテゴリを作らない  
4. 洞察同士が重複しないようにする

出力形式:
- 洞察はカテゴリごとに構造化して列挙  
- 各洞察は 1 段落で，主要ポイントを **太字** で強調  
- 不要な説明や重複は避ける

— 例 —
Category: Example_Category  
**主要発見**: データを裏付ける数値・原因・アクションを盛り込んだ一文
```

## LLMによる評価を安定させるには

分析の出力を定量的に評価するには、できるだけ多くのケースを公平に見ていく必要があります。ただ、人がひとつひとつ目を通すのは非現実的で、かといってLLMの判断に完全に頼るにはばらつきが大きすぎる。

そこで研究者らは、「LLMにできるだけ人間らしく評価させるにはどうすればよいか」という問いに向き合い、プロンプトを最適化することでLLMの判断を専門家に近づけるという方法を試みました。

やっていることはシンプルで、まずは分析の深さや目的との整合性など、評価の観点をいくつか定めます。続いて、LLMが出したスコアと人間がつけたスコアのズレを見ながら、プロンプトの中身を少しずつ調整していきます。言い回しや構成、例示の仕方を変えていくことで、LLMが出す判断が人の判断にだんだん近づいていきます。

こうしたプロンプトの最適化は、TextGradというアルゴリズムを使って行われました。最適化が進むにつれてLLMの出力と人間評価のずれ（損失）が下がっていく様子が観察されました（下の図）。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_3-1-1024x744.png)

SCORERのプロンプト最適化中における検証損失の変化を追ったグラフ

モデル本体には手を加えず、プロンプトだけで精度を高める。そういう意味で、軽量で柔軟性のある設計になっています。大量の分析結果を効率よく、かつ一定の水準で評価していくための手がかりとして、この仕組みは役立ちそうです。

ちなみにこの手法は、SCORER（Structured Calibration Of Ratings via Expert Refinement）と名付けられています。

## 性能の確かめ方と、そこから見えてくること

構成がどれだけ優れていても、実際に出力される分析インサイトの質が伴わなければ意味がありません。  
研究者らは、開発した構成がどのように効果を発揮しているのかを確認するため、AgentAdaの性能をいくつかの角度から検証しました。

評価は単なる精度比較ではなく、「スキル情報を与えると何が変わるのか」「目的や利用者像（ペルソナ）を与えるとLLMはどう変わるのか」など、構成の意図そのものに対して行われています。以下では、その評価の仕方と得られた示唆について整理します。

### スキルがインサイトの深さに与える影響

まず、スキルライブラリを活用することがインサイトの質にどの程度貢献しているのかを確認するために、AgentAdaは複数の条件下で比較されました。

- スキル情報を使う構成（通常のAgentAda）
- スキル情報を使わず、LLMが自由に処理を決める構成

この2つを含む複数の分析エージェント（Poirot、Pandas AI、InfiAgent、MetaGPT、GPT-4oへの直接プロンプト）と比較し、人間によるスコア評価が行われました。観点は以下の6つです。

- 分析の深さ
- 目標との関連性
- ペルソナとの一貫性
- 回答の一貫性
- 質問への適切な答えかどうか
- プロット結論の明確さ

100のデータセットを対象に、分析経験を持つ3名の評価者が独立にスコアを付け、その一致度も確認されています。

結果として、「スキル情報あり」の構成はすべての評価項目で「スキルなし」より高く評価され、とくに分析の深さに大きな差が出ました。これは、用意されたスキルが単に補助的な役割を果たすのではなく、LLMの思考の方向を深いほうに向ける機能を持っていたことを示唆します。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_4-1024x83.png)

人間の評価者間で、どれだけ意見が一致したかを示す指標（Fleiss κ）の一覧

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_5-1024x238.png)

100データセットを対象としたインサイト比較の概要

### SCORERによる大規模評価と、同様の傾向

人手による評価だけではスケールしないため、研究チームはSCORERというLLMベースの自動評価器をトレーニングし、700件におよぶKAGGLEBENCH全体で同様の比較を実施しました。

この評価器は、人間によるスコア（100件分）を使って訓練されており、検証時には人間の判断と高い一致度を示しました。そのうえで、「スキルあり」と「スキルなし」の出力を比較した結果、以下の観点で明確な差が出ました。

- 分析の深さ
- 回答の一貫性
- 質問への適切な回答
- プロットの結論の明確さ

これらはすべて、単にモデルの推論力に依存するというより、「どのスキルで、どんな構造で考えさせるか」という設計の影響を強く受ける部分です。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_6-1024x447.png)

スキル情報の有無がSCORER評価にどう影響するかをまとめた表

### 他のエージェントと比べて何が違うのか

AgentAdaの出力は、他のエージェント（たとえばPandasエージェントやMetaGPT、GPT-4o直接プロンプト）とも比較されました。

その中で特に目立ったのが、Pandasエージェントとの違いです。たとえば、

- 「分析の深さ」で63.88%の勝率
- 「一貫性」では63.9%
- 「プロットの結論」では56.33%

と、いずれの観点でもAgentAdaが上回りました。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_8-1024x623.png)

AgentAdaと他のエージェントをSCORERで比較した結果

この差は、Pandasエージェントが主に「自然言語から [ルールベース](https://ai-data-base.com/archives/26614 "ルールベース") でコードを生成する」仕組みであるのに対し、AgentAdaがスキル情報をもとにした「方針誘導つきコード生成」をしていることに起因すると考えられます。つまり、構造の違いが、出力の性質を変えていたということです。

### スキルマッチャーの信頼性はどれほどか

設計の中で重要な構成要素となっていたスキルマッチャーの性能も個別に評価されています。  
これは「ある質問に対して、スキルライブラリの中からどれを選ぶか」を決める役割です。

ここではランキングタスクとして評価が行われ、「検索されたスキルのうち、正解に近いものがどれだけ上位に来たか」が検証されました。その結果、以下の数値が得られています。

- MRR（平均逆順位）　0.83
- 正確一致精度　0.90

意味のある文脈を踏まえて、正しいスキルをかなり高い精度で選び取れていたことが確認されました。

### 目標とペルソナの影響はどの程度あるのか

LLMに「目標」や「利用者像（ペルソナ）」を与えると、出力されるインサイトの性質が変わるのか。これは本構成のもうひとつの着眼点です。

これを確かめるために、研究チームはAgentAdaから「目標」「ペルソナ」の入力だけを削除したバージョンを作成し、人間による評価を同じ100件のデータセットで実施しました。

その結果、「すべての観点でスコアが下がった」ことが確認されましたが、とくに差が大きかったのは目標でした。  
目標があることで、出力全体がその方向に整い、LLMの判断がよりブレずに収束したと考えられます。

ペルソナの効果も確認されましたが、「目標の有無」の方がインサイトの方向性に与える影響は強かったという結果です。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_88313_9-1024x199.png)

目標やペルソナの有無が、出力インサイトに与える影響をまとめた表

## まとめ

本記事では、LLMを用いた分析支援ツール「AgentAda」の構成と、その検証結果を紹介しました。

特徴は、分析スキルを事前に整理し、それをもとにLLMの出力を誘導する設計にあります。  
評価では、人間と自動の双方による比較を通じて、この構成が分析の深さや一貫性に影響を与えることが示されました。  
また、「目標」や「ペルソナ」の情報が出力に与える役割も、定量的に検証されています。

特定のツールとしてだけでなく、分析支援にLLMを活用する際の構成の参考として、自身の文脈に沿って取り入れてみるとよいかもしれません。

**参照文献情報**

- タイトル：AgentAda: Skill-Adaptive Data Analytics for Tailored Insight Discovery
- URL： [https://doi.org/10.48550/arXiv.2504.07421](https://doi.org/10.48550/arXiv.2504.07421)
- Github： [https://github.com/ServiceNow/AgentAda](https://github.com/ServiceNow/AgentAda)
- 著者：Amirhossein Abaskohi, Amrutha Varshini Ramesh, Shailesh Nanisetty, Chirag Goel, David Vazquez, Christopher Pal, Spandana Gella, Giuseppe Carenini, Issam H. Laradji
- 所属：ServiceNow Research, University of British Columbia, University of Toronto, University of Montreal, Mila, CIFAR AI Chair, Polytechnique Montréal

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[現実における人間の多様性に対応したLLMペルソナ設計手法の検証](https://ai-data-base.com/archives/88247)

[NVIDIA決算から探る市場動向と成長戦略　そして人材ニーズ](https://ai-data-base.com/archives/88604)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)