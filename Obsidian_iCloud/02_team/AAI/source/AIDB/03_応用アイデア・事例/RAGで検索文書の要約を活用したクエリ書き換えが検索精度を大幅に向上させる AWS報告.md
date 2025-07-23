---
title: "RAGで検索文書の要約を活用したクエリ書き換えが検索精度を大幅に向上させる AWS報告"
source: "https://ai-data-base.com/archives/74922"
author:
  - "[[AIDB Research]]"
published: 2024-08-29
created: 2025-06-13
description: "本記事では、LLMを活用したRAGシステムにおける新しいアプローチを紹介します。より効果的な情報検索と回答生成を実現するために、質問回答ペアをLLMで生成して参照する仕組みです。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMを活用したRAGシステムにおける新しいアプローチを紹介します。

より効果的な情報検索と回答生成を実現するために、質問回答ペアをLLMで生成して参照する仕組みです。

モデルの微調整不要でコスト効率も高い手法として期待されています。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74922-1024x576.jpg)

**参照論文情報**

- タイトル：Meta Knowledge for Retrieval Augmented Large Language Models
- 著者：Laurent Mombaerts, Terry Ding, Adi Banerjee, Florian Felice, Jonathan Taws, Tarik Borogovac
- 所属：AWS

## 背景

検索結果を用いてLLMの出力を補強する手法である「検索拡張生成（RAG）」が、広く使用されるようになりつつあります。LLMに最新かつ正確な情報を提供することで、モデルの誤った情報生成を減らし、タスクに適した回答を生成する能力を向上させるアプローチです。

RAGシステムの構築には依然として難しい課題が残されています。大規模かつ多様な文書データから情報を効果的に探し出すのは至難の業であるという点です。通常のRAGの仕組みとしては、文書を単純に分割してチャンクとして扱います。しかしこれでは文脈の意味のつながりが失われる恐れがあります。また、そもそもユーザーの意図を正確に捉えて、適切な検索クエリを生成することも難しい課題の一つです。

これまでもRAGシステムを改善すべく様々なアプローチが提案されてきました。しかし、提案されてきた手法は往々にして、検索対象となる文書の特性を考慮できていないという問題がありました。

そこで今回研究者らは、従来の「検索してから読む」方式を拡張し、「”準備してから書き換えて”検索して読む」枠組みを考案しました。この方法を使うとユーザーの特性に合わせたクエリ拡張が可能となり、知識ベース全体にわたる深い情報検索が実現できることが分かりました。チャンキングに伴う情報損失を軽減し、ノイズフィルタリングの役割も果たします。

本手法は実用性の高いアプローチとして注目されています。検索の精度と [再現率](https://ai-data-base.com/archives/26095 "再現率") が向上し、最終的な回答の幅広さ、深さ、関連性、具体性が大幅に改善されることが実験で分かりました。

以下で詳しく紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74922_1-1024x528.png)

今回の提案ワークフローを図示。推論前に文書がLLMで拡張され、メタデータに基づいて合成的な質問と回答のクラスタに分類される。メタ知識要約はクラスタ情報を用いてクエリ拡張をガイドするために使用される

## 手法

今回の提案手法「R3」について説明します。

### データセット

まずはRAGシステムに関連の深いデータセットを用意します。

今回の研究に使用されたデータセットは、arXiv APIを通じて集められた2024年の2,000本の研究論文でした。統計学、機械学習、人工知能、計量経済学などの分野におけるさまざまな研究が含まれており、総単語数は約3500万に及びます。

### 合成的な質問回答（QA）生成

データセット（本研究では2,000本の論文）に対して、以下のステップを適用します

（１）Claude 3 Haikuを用いて、文書を事前に決められたカテゴリー（研究分野や応用タイプなど）に分類するメタデータが作成されました。

（２）教師-生徒型のプロンプティングを用いて、文書の内容に基づく人工的な質問と回答のペアが生成されました。

（３）生成されたQAの重複を確認するため、階層的クラスタリングという方法が考案されました（※ただし、本研究ではQAの重複が少なかったため、実際のフィルタリングは行われませんでした）。

本研究では最終的に、2,000の研究文書から合計8,657のQAが生成されました。70%の文書に対して5〜6の質問が、21%の文書に対して2つの質問が生成されました。

なお、上記のプロセスにおいて実際に使用されたプロンプトは論文には記載されていませんでしたが、概要をもとに再現してみました。

英語版

```js
You are an helpful research assistant, preprocessing {document_types} for {users_types} to use later on.
You are provided with a document and a list of questions that aims at extracting key knowledge from this document. Please strictly follow the format below to answer (no introduction or finishing sentences).

First, answer the following questions with a single Yes or No only:
1. The paper can be clearly categorized into one or multiple research field(s) (exclusively from: {text_categories}), yes or no?:
2. The paper is mostly an applied research paper (versus mostly theoric), yes or no?:
3. The paper is referencing a Github repository, yes or no?
4. The paper contains mathematical reasoning, yes or no?:
5. The paper mentions a specific application to an industry company, yes or no?:
6. The paper uses evaluations metrics to benchmark their methods, yes or no?:

Answer the following questions with a python list only, or return an empty python list:
1. If the paper can be clearly categorized into one or multiple research fields, list the fields (3 max):
2. If the paper is mostly an applied research paper, list the application fields (3 max):
3. If the paper references one or more Github repository, list their urls (2 max):
4. If the paper contains mathematical reasoning, list the name(s) of the theorem(s) being used (3 max):
5. If the paper mentioned a specific application to an industry company, list the companies (3 max):
6. If the paper use evaluations metrics to benchmark their methods, list the names of the metrics (5 max):

Your answer must look like the following (no introduction sentence):
1. Yes
2. No
etc.
1. ['a','b']
2. []
etc.

Then, please act as an expert scientists and formulate both general (general understanding) and precise questions (incl. specific findings or limitations) from the content of the document to assess the knowledge of other highly knowledgeable scientists about the topic of this document.
Scientists that will answer the questions do not know the document. Please do not explicitly refer to "the text" or the name of the document in the questions.
Each questions and answers pairs must be self-contained (make sure to give enough context) and independent from other pairs.
Please formulate as many questions as possible covering as much content as possible, and avoid bullet points within answers.
Strictly follow the format of the final questions and answers below, presenting all responses, lists, questions, then all answers:

Questions:
1. ...
2. ...
etc.

Answers:
1. ...
2. ...
etc.
```

日本語版

```js
あなたは有能な研究助手で、後で{users_types}が使用する{document_types}を前処理しています。
文書と、その文書から重要な知識を抽出することを目的とした質問のリストが提供されます。以下の形式に厳密に従って回答してください（導入文や締めくくりの文は不要です）。

まず、以下の質問に単にYesまたはNoで答えてください：
1. 論文は明確に一つまたは複数の研究分野（{text_categories}のみから）に分類できますか？：
2. 論文は主に応用研究論文ですか（主に理論的なものに対して）？：
3. 論文はGithubリポジトリを参照していますか？：
4. 論文には数学的推論が含まれていますか？：
5. 論文は産業企業への具体的な応用について言及していますか？：
6. 論文は手法のベンチマークに評価指標を使用していますか？：

以下の質問にPythonのリストのみで答えるか、空のPythonリストを返してください：
1. 論文が明確に一つまたは複数の研究分野に分類できる場合、その分野をリストアップしてください（最大3つ）：
2. 論文が主に応用研究論文である場合、応用分野をリストアップしてください（最大3つ）：
3. 論文が一つ以上のGithubリポジトリを参照している場合、そのURLをリストアップしてください（最大2つ）：
4. 論文に数学的推論が含まれている場合、使用されている定理の名前をリストアップしてください（最大3つ）：
5. 論文が産業企業への具体的な応用について言及している場合、その企業をリストアップしてください（最大3つ）：
6. 論文が手法のベンチマークに評価指標を使用している場合、その指標の名前をリストアップしてください（最大5つ）：

あなたの回答は以下のようになるはずです（導入文なし）：
1. Yes
2. No
など。
1. ['a','b']
2. []
など。

次に、専門家の科学者として、文書の内容から一般的な（一般的な理解）と精密な質問（具体的な発見や制限を含む）を作成し、この文書のトピックについて他の高度な知識を持つ科学者の知識を評価してください。
質問に答える科学者は文書を知りません。質問の中で「本文」や文書の名前を明示的に参照しないでください。
各質問と回答のペアは自己完結型（十分な文脈を提供してください）で、他のペアから独立している必要があります。
可能な限り多くの質問を作成し、できるだけ多くの内容をカバーしてください。回答内での箇条書きは避けてください。
以下の最終的な質問と回答の形式に厳密に従い、すべての回答、リスト、質問、そしてすべての回答を提示してください：

質問：
1. ...
2. ...
など。

回答：
1. ...
2. ...
など。
```

また、本研究ではQAの重複が少なかったため、実際のフィルタリングは行われなかったとのことですが、本来であればQAの重複を防ぐ階層的クラスタリングが行われます。階層的クラスタリングはLLMとプロンプトで実行されるものではなく、embeddingモデル（本研究では、e5-mistral-7b-instructという言語モデル）によるベクトル化と類似度計算によって行われます。

### メタ知識要約（MK Summary）の生成

メタデータの組み合わせに対して、メタ知識要約（MK Summary）を生成します。

まず、メタデータとは、データについてのデータのことです。例えば、本でいえば、著者名、出版年、ジャンルなどが該当します。この研究では、論文の内容を簡単に分類するための情報をメタデータとして使っています。

メタ知識要約（MK Summary）は、メタデータを使って、関連する文書の内容を簡潔にまとめたものです。例えば、「機械学習」というメタデータに関連する論文の主要なポイントをまとめた要約など。

メタ知識要約の作成手順は以下のとおりです。

1. 特定のメタデータ（例：研究分野）に関連する文書の質問を集める
2. これらの質問をClaude 3 Sonnetに与えて、要約を作成してもらう

本研究では具体的なプロンプトは公開されていませんが、おそらく以下のようなプロンプトが使用されたと推測されます。

英語版

```js
You are an expert in summarizing scientific research. I will provide you with a set of questions related to a specific research field. Your task is to create a comprehensive summary that captures the key concepts, methodologies, and current trends in this field based on these questions. The summary should be concise yet informative, suitable for researchers looking to quickly understand the state of the art in this area.

Questions related to the field:
[List of questions]

Please provide a Meta Knowledge Summary based on these questions.
```

日本語版

```js
あなたは科学研究の要約の専門家です。特定の研究分野に関連する一連の質問を提供します。あなたの課題は、これらの質問に基づいて、この分野の主要な概念、方法論、現在のトレンドを捉えた包括的な要約を作成することです。要約は簡潔でありながら情報量が豊富で、この分野の最新状況を素早く理解したい研究者に適したものであるべきです。

分野に関連する質問：
[質問のリスト]

これらの質問に基づいてメタ知識要約を提供してください。
```

### クエリの拡張生成と検索

ユーザーの質問と関連するメタデータが与えられると、以下の手順で検索が行われます。

1. まず、事前に作成されたメタ知識要約が取り出される
2. このメタ知識要約を使って、ユーザーの質問が拡張され、データベースの該当部分に対する検索が行われる
3. “plan-and-execute”という特殊なプロンプト手法が使用され、複雑な質問への対応や複数の文書にまたがる推論が可能になる
4. 人工的に作られた質問がベクトル化され、従来の文書分割による類似度マッチングの代わりに使用される
5. 最も適合する人工質問が見つかると、それに対応する質問と回答のペア、そして元の文書のタイトルが取得される
6. 検索結果はJSON形式で整理され、後の要約処理に使用される

最終的な回答は、元の質問、拡張された質問、取得された関連情報、そしていくつかの具体例を組み合わせて生成されます。

この方法が、従来のRAGシステムと比べて、複数の文書の内容を深く理解した上での推論や、ユーザーの意図により沿った柔軟な検索が可能になります。また、文書を単純に分割することによる情報の欠落を減らし、より正確な回答を生成できるようになっています。

**“plan-and-execute”プロンプト**

プロセスの途中で出てくる”plan-and-execute”プロンプトについて、もう少し具体的に説明します。”plan-and-execute”（計画と実行）は、複雑な課題を段階的に解決するための手法です。LLMに対して以下のような手順で指示を出します。

1. まず、モデルに対して問題を分析し、解決のための段階的な計画を立てるよう指示する
2. 次に、その計画に従って各ステップを実行するよう指示する

この研究においては、次のような流れになります。

1. ユーザーの質問を受け取る
2. 関連するメタ知識要約（MK Summary）を取得する
3. モデルに以下のような指示を出す
```js
ユーザーの質問: [ユーザーの質問]
メタ知識要約: [メタ知識要約]

手順:
1. 上記の情報を分析し、この質問に答えるために必要な具体的な情報を特定してください。
2. 特定した情報を得るための複数の小さな質問に分割してください。
3. それぞれの小さな質問に対する回答を生成してください。
4. 最後に、これらの回答を統合して、元のユーザーの質問に対する包括的な回答を作成してください。

それでは、上記の手順に従って実行してください。
```

## 評価

研究チームは、今回の提案手法がどれくらい効果的かを確かめるために、以下の手順で評価を行いました。

### 評価用の質問クエリ作成

arXivデータセットに対して、Claude 3 Sonnetを使って、200個の質問を作りました。研究論文の内容を幅広くカバーし、簡単なものから難しいものまでさまざまな種類を含みます。

### 比較手法

4つの方法を比較しました。

1. 従来の方法（文書を小さく分割するだけ）
2. 従来の方法（文書を分割し、質問も少し変える）
3. 新しい方法（メタ知識要約を使わない）
4. 新しい方法（メタ知識要約を使う）

従来の方法では、文書を256単語ずつに分けて、少しずつ重なるようにしたので、69,334個の小さな文書の断片（チャンク）ができました。

### 評価の基準と方法

比較手法を評価する際には、Claude 3 Sonnetが使用されました。「情報の探し方」と「最終的な回答」の両方を、以下の6つの基準で、0から100点で採点しました。

1. 再現率：必要な情報をどれだけ見つけられたか
2. 精度：関係ない情報をどれだけ避けられたか
3. 具体性：質問にどれだけピンポイントで答えられたか
4. 広範性：質問に関係するいろいろな面をどれだけカバーしたか
5. 深さ：どれだけ詳しく説明できたか
6. 関連性：ユーザーの求めていることにどれだけ合っているか

### 処理にかかる時間

1つの質問に答えるのに、全部で20〜25秒くらいかかることが分かりました。実用時に重要になるデータです。

結果の詳しい内容は次の部分で説明しますが、この評価アプローチによって、提案手法がさまざまな面で効果的だということが確認できました。

## 結果

上記評価セクションで説明された4つの手法について、詳細な性能比較が行われた結果は以下の通りです。

### 検索と最終回答の評価指標

研究チームは、200個の質問それぞれに対して、比較された方法すべての検索結果と最終回答を比べました。前述の通りClaude 3 Sonnetが評価者となり、さまざまな面で0点から100点をつけました。全ての質問の点数の平均を取り、結果をグラフにしました。

### 性能比較の結果

評価の結果、以下のようなことが分かりました。

1. 新しく提案された2つの方法（PR3パイプライン）は、ほとんどの面で従来の方法より良い結果を出した
2. 関係ある文書を見つける精度については、4つの方法であまり差がなかった。文書を探す方法が同じだったためで、全く関係ない文書はあまり見つからなかったことを意味する
3. 最終的な回答の幅広さと深さで大きな改善が見られました。メタ知識要約が質問を広げる際に役立つ情報を提供し、うまく使われたことを示している
4. メタ知識要約を使った提案手法（PR3パイプライン）は、関係ある文書を見つける精度以外の全ての面で、はっきりとした改善が見られた
5. 提案手法は、特に検索の幅広さで大きな改善を示し、従来の単純な検索方法と比べて20%以上良くなった。提案手法がデータベースの内容をより効果的に使い、幅広い情報を活用できることを意味している

### 詳細な性能指標

下記の表には、200の合成ユーザークエリに対する各手法の詳細な性能指標が示されています。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74922_2-1024x472.png)

200の合成ユーザークエリに対する性能ベンチマークの結果。再現率、精度、具体性、幅広さ、深さ、関連性の6つの指標について、4つの手法（単純な検索、拡張検索、QA検索、MK-拡張QA検索）の性能を比較

主な結果は以下の通りです。

1. 必要な情報をどれだけ見つけられたか（再現率）：提案手法が88.39%で一番良い成績を出した
2. 関係ない情報をどれだけ避けられたか（精度）：どの方法も良い成績だったが、提案手法が90.40%で最も高くなった
3. 質問にどれだけピンポイントで答えられたか（具体性）：提案手法が83.03%で一番良く、単純な探し方と比べて約11.5%良くなった
4. 質問に関係するさまざまな面をどれだけカバーしたか（幅広さ）：提案手法が87.09%で一番良く、従来方法と比べて約20%も良くなった（大きな改善）
5. どれだけ詳しく説明できたか（深さ）：提案手法が80.84%で一番良く、従来と比べて約15%良くなった
6. ユーザーの求めていることにどれだけ合っているか（関連性）：提案手法が90.22%で一番良く、ユーザーの質問にぴったりの答えを出せた

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74922_3.png)

単純な検索と文書チャンキングを用いた結果と、合成QA（提案1）とMK要約（提案2）を用いた結果の比較を示す。6つの評価指標（再現率、精度、具体性、幅広さ、深さ、関連性）について、4つの手法の性能をレーダーチャートで表示

以上の結果から、提案されたPR3パイプラインおよびメタ知識要約を活用した手法が、従来のRAGシステムと比較して、より正確な情報検索と回答生成を実現していることが明らかになりました。中でも検索の幅広さと深さにおいて顕著な改善が見られ、複雑なクエリに対してより適切な回答を提供できる可能性が示されました。

## まとめ

本記事では、LLMを用いたRAGシステムの性能向上を目指すワークフローの研究を紹介しました。

研究チームが考えた「PR3」という新しい方法は、文書の内容を整理した情報（メタデータ）と、人工的に作られた質問と回答のペアを使用するアプローチです。

実験で従来の方法と比べてみると、提案手法はさまざまな面で優れていることが分かりました。

研究チームは、この方法をさらに良くするために、次のようなことを考えています。

1. 情報検索を何度も繰り返す
2. メタ知識要約の品質をさらに良くする

なお、この方法は費用対効果も高いことが分かりました。2000本の研究論文を処理するのに必要な費用は20ドル程度でした。

このように、より良いRAGシステムを作る方法論は探究され続けています。

- 参照論文URL： [https://arxiv.org/abs/2408.09017](https://arxiv.org/abs/2408.09017)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[人間を討論で言い負かすディベート上手なLLMの実装方法](https://ai-data-base.com/archives/74886)

[「AIが自動的に優れたAIエージェントを設計する」新分野の提唱　数学エージェントが読解でも好成績](https://ai-data-base.com/archives/74978)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)