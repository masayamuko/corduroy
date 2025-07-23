---
title: "LLMで高品質なクイズを作成する手法"
source: "https://ai-data-base.com/archives/87106"
author:
  - "[[AIDB Research]]"
published: 2025-03-27
created: 2025-06-13
description: "本記事では、LLMを活用した高品質なクイズ作成方法についての研究を紹介します。クイズは勉強や趣味、研修など色々な場面で使われていますが、作るのには意外と手間がかかります。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMを活用した高品質なクイズ作成方法についての研究を紹介します。クイズは勉強や趣味、研修など色々な場面で使われていますが、作るのには意外と手間がかかります。これまでさまざまな自動クイズ作成技術が試されてきましたが、分かりやすく役立つクイズを作るのはまだ難しい状況です。この研究では、そんな課題に対して新しい方法を提案しています。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87106_top2-1024x576.png)

参照文献情報は記事の下部に記載されています。

## 背景

クイズは特定の知識や理解度を確認する手段として幅広い場面で利用されています。例えば、職場での研修や自己学習ツール、資格試験の準備、あるいは趣味としての知識確認など、学校教育の枠を超えて多くの用途があります。

しかし、高品質なクイズを作るのは簡単ではありません。内容を深く理解し、質問を受ける側の知識や関心に適切に合わせた問題を用意する必要があります。さらに、情報が常に変化したり、新しい内容が頻繁に追加される分野では、継続的に質の高いクイズを作成する負担が増えます。

そこで最近、LLMの活用が注目されています。LLMを使えば、多種多様なトピックでクイズを手軽に生成できるためです。ただし、LLMによって生成されたクイズには、「重要なポイントが十分に反映されているか」「内容が正確か」といった懸念もあります。また、根拠となる情報の正確性や信頼性については課題が残っています。

そのような背景の中、スタンフォード大学などの研究者らは外部の知識データベースを活用して質の高いクイズを生成する新たな仕組みの開発に取り組みました。

## 前提のおさらい

LLMは自然で人間らしい文章を生成する技術として注目されていますが、一方でその生成内容が常に正確であるとは限りません。ときには、LLMが根拠のない情報を作り出したり、事実と異なる情報を提供してしまったりする「ハルシネーション（幻覚）」と呼ばれる現象が問題になっています。また、専門的で正確な知識が求められる分野では、この問題が顕著になります。

### 外部知識を利用した文章生成の仕組み

こうした課題に対して提案されているのが「検索拡張型生成（Retrieval-Augmented Generation; RAG）」という手法です。LLMが文章を作成する際に、自身が事前に学習した知識だけでなく、外部のデータベースや文書などを検索して得られた信頼性の高い情報を取り込んで生成を行う方法です。

RAGは、質問応答タスク（QAタスク）や、個人的な計画の立案や複雑な情報の整理といった、実生活に近い用途でも効果が認められています。

### クイズの自動生成

このRAG（外部の知識を組み合わせる）によってクイズの正確性や内容の妥当性を向上させる研究が進められています。さらに、文章のキーワードを抽出してクイズを作ったり、外部の知識をLLMに注入してクイズ内容をより充実させたりする方法も検討されています。

しかし、これまでの多くの研究では、「特定のテーマ」や「事前に決められたキーワード」を基準としてクイズを作っています。しかし実際の状況では、クイズを作成する人自身が「どのキーワードを使えばよいかわからない」場合も少なくありません。具体的に明示されていない概念や漠然とした疑問が存在するからです。

## 本研究の狙い

本研究の目的は、LLMを利用したクイズ生成の品質を高めることです。LLMを用いればクイズを効率的に作ることが可能ですが、単なるキーワードに頼った生成方法では、本当に理解してほしい内容や、深く学ぶべきポイントを十分に反映できないという課題があります。つまり、表面的な情報だけでは、役に立つクイズを作ることが難しいという問題です。

そのため、今回研究者らは、「クイズ作成者が設定した質問文の中から、そのテーマを理解する上で本当に重要な概念を抽出し、その概念に基づいてクイズを完成させる」ことを目指します。

さらに、本研究では実際に多様な場面で使える仕組みを目指しており、異なる難易度や多様な分野において、この概念ベースのクイズ生成方法を検証しています。例えば、小学生から高校生、さらには博士課程レベルまで幅広い教育段階を想定して、それぞれに合ったクイズを作ることができるかを実験で確認しています。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87106_2.png)

学習するテーマごとに、質問の難しさがどう分布しているかを示した図

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87106_3.png)

小学生、高校生、博士課程のそれぞれの教育レベルごとに、質問の難しさがどう分布しているかを示した図

## 提案する手法の仕組み

次のような手順を踏んでクイズを生成します。

（１）まず、質問者の問いかけと、その人の教育レベルや質問が属する分野（例えば生物学や歴史、物理学など）を入力として受け取ります。

（２）次に、LLMを利用して質問文の中に隠れている重要な概念を特定します。例えば、「もし植物が十分な日光や水を得られないとどうなりますか？」という質問があった場合、単に「植物」「日光」「水」など明示されたキーワードだけでなく、「光合成」「生育」「環境ストレス」といった、質問文には明示されていないが理解に必要な概念も抽出されます。

（３）こうして重要な概念が特定された後、これらの概念をもとに、Wikipediaなどの外部の知識ベースから関連する情報を取得します。取得の際には、文章の内容の意味的な近さ（類似性）を測定する方法（Sentence-BERTという手法）を用いて、質問者の疑問や理解度に最も関連の深い内容を選び出します。

（４）その後、LLMを利用した要約によって、取得した大量の情報を重要なポイントだけに絞って簡潔に整理します（情報量が多すぎるとかえって混乱を招くことを防ぐための措置です）。

（５）最後に、整理・要約された情報を基にクイズ生成モジュールが動き、設問、正しい回答、そして誤った選択肢を複数含むクイズを作成します。

このような流れで実践すると、質問者の曖昧な問いかけの背後にある重要な概念を見つけ出し、その概念に関連した質の高いクイズを生成することが可能になるとのことです。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87106_1-1024x290.png)

本手法の仕組みの概要。質問の中から大切な概念を抽出し、関連する外部の知識を取得・要約して、クイズを作る流れ

言い換えると、以下のような流れです。

1. クイズを作りたいテーマに関する質問文を用意する（例：「植物が日光を十分に得られないとどうなるか？」）。
2. 質問をこのシステムに入力する。
3. システムが質問から重要な概念を自動で抽出する（例：「植物」「日光」「水」「光合成」など）。
4. システムが抽出した概念に基づいて、Wikipediaなどの外部知識から関連する情報を自動で収集する。
5. システムが収集した大量の情報をわかりやすく要約する。
6. システムが、要約した内容をもとにクイズ（質問と正解・不正解の選択肢）を自動で生成する。
7. 出来上がったクイズを確認し、必要に応じて使用する。

## プロンプト

### クイズを作成するとき

原文

```js
You are a quiz generator. The students are
currently studying {area} at the {level}
level and have asked a question. Your
task is to create 3 quizzes that helps the
student better understand the question.
You have access to summarized reference
information from Wikipedia. The quizzes
should accurately reflect reference infor-
mation, and the correct answer must be
well-supported by reference information.
The quiz should consist of one question,
one correct answer, and three incorrect
options. The correct answer must always
be placed in option A.

Example:

Student Question: Where is Beijing
located?
[Quiz]
Quiz: What is the capital city of China?
A. Beijing
B. Chengdu
C. Shanghai
D. Hangzhou

[Quiz]
Quiz: What continent is Beijing located?
A. Asia
B. Europe
C. Africa
D. North America

Now, please generate 3 quizzes following
the format, each quiz should follow thw
sign of [Quiz]:

Reference Wikipedia Information:
{summary}
Student Question: {question}
```

日本語訳

```js
あなたはクイズ生成器です。学生は現在 {level} レベルで {area} を学習しており、ある質問をしてきました。あなたの役割は、その質問をより理解できるようにするクイズを3つ作成することです。あなたはWikipediaから要約された参考情報にアクセスできます。クイズはこの参考情報を正確に反映し、正解が参考情報に基づいて十分に裏付けられている必要があります。クイズは1つの問題、1つの正解、3つの誤答選択肢で構成してください。正解は必ず選択肢Aに置いてください。

例：

Student Question: Where is Beijing
located?
[Quiz]
Quiz: What is the capital city of China?
A. Beijing
B. Chengdu
C. Shanghai
D. Hangzhou

[Quiz]
Quiz: What continent is Beijing located?
A. Asia
B. Europe
C. Africa
D. North America

それでは、この形式に従い、それぞれ [Quiz] という印をつけて3つのクイズを生成してください:

Reference Wikipedia Information:
{summary}
Student Question: {question}
```

### 作成したクイズを評価する（実験用）

原文

```js
A student studying {area} at the {level}
level is asking a question: "{question}".
Based on the following quiz set related to
the question, I need you to evaluate the
educational quality of the quiz set. For each
of the following criteria, assign a score
from 1 to 5 for the entire quiz set:

1. Educational Value: Do you think these
quizzes are educational? Will students
learn more by taking these quizzes?
- 1: Not educational at all, no learning
value.
- 2: Minimally educational, little learning
value.
- 3: Moderately educational, some learning
value.
- 4: Very educational, strong learning value.
- 5: Highly educational, great learning
value.

2. Diversity: Do you think these quizzes
are diverse? Are the quizzes covering a
broad range of topics, or do they all focus
on the same concept?
- 1: Very repetitive, covers a narrow area.
- 2: Some diversity, but mostly focuses on
one concept.
- 3: Fairly diverse, covers a few different
topics.
- 4: Quite diverse, covers multiple relevant
topics.
- 5: Extremely diverse, covers a broad range
of topics.

3. Area Relevance: Are these quizzes
relevant to the student’s question and the
concepts they’re trying to learn? Are the
quizzes tailored to the subject area being
studied?
- 1: Not relevant to the question or subject
at all.
- 2: Minimally relevant, some connection to
the question/subject.
- 3: Moderately relevant, fairly aligned with
the question/subject.
- 4: Highly relevant, strongly aligned with
the question/subject.
- 5: Perfectly relevant, directly tied to the
question/subject.

4. Difficulty Appropriateness: Do you think
these quizzes match the student’s current
education level? Would these quizzes be
too easy or too difficult for a student at this
level?
- 1: Too easy or too difficult, not appropriate
for the level.
- 2: Slightly mismatched, quizzes may be
too easy or too hard.
- 3: Moderately appropriate, quizzes are
somewhat aligned with the level.
- 4: Mostly appropriate, quizzes are
well-suited for the level.
- 5: Perfectly suited to the student’s
education level.

5. Comprehensiveness: Do these quizzes
cover the depth and breadth of the topic?
Are they thorough in addressing key
concepts and details?
- 1: Very superficial, only scratches the
surface of the topic.
- 2: Somewhat incomplete, misses impor-
tant aspects.
- 3: Moderately comprehensive, covers the
basics but lacks depth.
- 4: Quite comprehensive, addresses most
key aspects with reasonable depth.
- 5: Highly comprehensive, thoroughly
covers the topic in great depth and detail.

Here is the quiz set related to the question:
{quiz_set}

Please start by providing a step-by-step rea-
soning analysis of the quiz set, then return
your evaluation as a JSON object in the fol-
lowing format:
\`\`\`json
{
"Educational Value": score,
"Diversity": score,
"Area Relevance": score,
"Difficulty Appropriateness": score,
"Comprehensiveness": score
}
```

日本語訳

```js
{level} レベルで {area} を学習している学生が、次の質問をしています: "{question}"。 以下のクイズセットはこの質問に関連したものです。あなたには、このクイズセットの教育的な質を評価してほしいと思います。次の評価基準ごとに、クイズ全体について1～5のスコアを割り当ててください。

Educational Value（教育的価値）:
これらのクイズは教育的だと思いますか？これらのクイズを行うことで学生はより学習を深められますか？

1: まったく教育的ではない、学習価値なし

2: わずかに教育的、学習価値がほとんどない

3: そこそこ教育的、ある程度の学習価値あり

4: とても教育的、学習価値が高い

5: 非常に教育的、学習価値がとても高い

Diversity（多様性）:
これらのクイズは多様だと思いますか？幅広いトピックを扱っていますか、それとも同じ概念に偏っていますか？

1: 非常に単調で狭い範囲しか扱っていない

2: 多少の多様性はあるが、主に一つの概念に集中している

3: そこそこ多様で、いくつか異なるトピックをカバーしている

4: 十分に多様で、複数の関連トピックを扱っている

5: とても多様で、幅広いトピックをカバーしている

Area Relevance（分野との関連性）:
これらのクイズは学生の質問と学習しようとしている概念に関連していますか？学習分野に合わせた内容になっていますか？

1: 質問や学習分野にまったく関連していない

2: わずかな関連性のみ、質問や学習分野とのつながりがほとんどない

3: ある程度関連している、質問や学習分野とそこそこ合っている

4: 非常に関連している、質問や学習分野と強く合っている

5: 完全に関連している、質問や学習分野に直接的に結びついている

Difficulty Appropriateness（難易度の適切さ）:
これらのクイズの難易度は、その学生の学習段階に合っていますか？このレベルの学生にとって簡単すぎたり難しすぎたりしませんか？

1: 簡単すぎまたは難しすぎる。レベルに合っていない

2: 少し不適切。やや簡単すぎるか難しすぎる可能性がある

3: 概ね適切。レベルにそこそこ合っている

4: かなり適切。レベルに十分合っている

5: 完全に適切。学生のレベルに完璧に合致している

Comprehensiveness（包括性）:
これらのクイズは、トピックをどの程度深く、また広範にカバーしていますか？主要な概念や詳細をしっかりカバーしていますか？

1: 非常に表面的、トピックの表面しか触れていない

2: やや不十分、重要な点が抜け落ちている

3: そこそこ包括的、基本的な内容はカバーしているが深みに欠ける

4: 十分包括的、主要な論点を適切な深さで扱っている

5: 非常に包括的、トピックを非常に深く包括的に扱っている

以下が質問に関連したクイズセットです: {quiz_set}

まずはクイズセットを段階的に分析したうえで、最終的に以下のJSON形式でスコアを返してください:
{
"Educational Value": score,
"Diversity": score,
"Area Relevance": score,
"Difficulty Appropriateness": score,
"Comprehensiveness": score
}
```

### クイズ同士を比較して評価する（実験用）

原文

```js
A student studying {area} at the {level} level has asked the following question: "{question}". You are given two quiz sets that aim to help the student better understand the question. Please choose the quiz set that best address this question. Please evaluate and compare the educa- tional quality of these quiz sets based on the criteria listed below. For each criterion, select the quiz set that performs better by outputting 1 or 2.

Educational Value: Which quiz set offers greater learning potential? Which set will help students gain a deeper understanding of the topic?

Diversity: Which quiz set covers a broader range of topics? Does it explore a variety of concepts or focus narrowly on a single idea?

Area Relevance: Which quiz set is more aligned with the student’s question and the key concepts they are studying? How well is it tailored to the specific subject area?

Difficulty Appropriateness: Which quiz set is better suited to the student’s current educational level, neither too simple nor too advanced?

Comprehensiveness: Which quiz set provides greater depth and breadth? Which one is more thorough in addressing key concepts and details?

Here is the quiz set 1:

{quiz_set_1}

Here is the quiz set 2: {quiz_set_2}

Please start by providing a step-by-step rea- soning analysis of the quiz sets, then return your evaluation as a JSON object in the fol- lowing format:
{
"Educational Value": choice,
"Diversity": choice,
"Area Relevance": choice,
"Difficulty Appropriateness": choice,
"Comprehensiveness": choice
}
```

日本語訳

```js
{level} レベルで {area} を学習している学生が、次の質問をしています: "{question}"。
これに対して、理解を深めるための2つのクイズセットが用意されています。どちらのクイズセットがこの質問により適切に対処しているかを選んでください。以下の評価基準に基づき、それぞれどちらが優れているかを 1 または 2 で示してください。

Educational Value（教育的価値）:
どちらのクイズセットが、より高い学習効果をもたらすと考えられますか？より深い理解につながるのはどちらでしょうか？

Diversity（多様性）:
どちらのクイズセットが、より幅広いトピックを扱っていますか？多様な概念を取り入れていますか、それとも狭い範囲に偏っていますか？

Area Relevance（分野との関連性）:
どちらのクイズセットが、学生の質問や関連する学習概念により合致しているでしょうか？分野に適切に合わせた内容になっていますか？

Difficulty Appropriateness（難易度の適切さ）:
どちらのクイズセットが、学生の現在の学習レベルに最適だと思いますか？難しすぎず、簡単すぎもしませんか？

Comprehensiveness（包括性）:
どちらのクイズセットが、より深く広くトピックをカバーしているでしょうか？主要な概念や詳細をしっかりと扱っていますか？

以下がクイズセット1です:

{quiz_set_1}

以下がクイズセット2です: {quiz_set_2}

まずは2つのクイズセットを段階的に比較し、最終的に以下のJSON形式で評価を返してください:
{
"Educational Value": choice,
"Diversity": choice,
"Area Relevance": choice,
"Difficulty Appropriateness": choice,
"Comprehensiveness": choice
}
```

## 実験

### 評価基準

生成されたクイズがどの程度有効であるかを客観的に評価するため、複数の評価軸が設定されました。

まず、「教育的価値」として、クイズを通じて質問者の知識が深められたり、新たな理解が促進されたりするかどうかが評価されます。

また、「多様性」という評価軸で、作成された複数のクイズが異なる視点や概念を十分に含んでいるかが確認されます。

さらに、「内容の関連性」において、クイズの内容がもとの質問やその意図としっかり対応しているかが検討されます。

また、「難易度の適切さ」の視点から、生成されたクイズが質問者の教育レベルや理解度に合致しているかが評価されます。

最後に、「包括性」として、クイズにおいて重要な概念が十分な広さと深さで扱われているかどうかが判断されます。

今回の実験では、GPT-4oが審査役として活用され、それぞれの評価軸に対し1点から5点までの点数が付けられました。また、生成された二つのクイズセットを並べて比較し、どちらが優れているかというペア比較もLLMによって行われています。この際、順序による評価の偏りが防ぐため、評価順序が入れ替えられた複数の比較が行われ、その結果の平均が取られています。

### 実験の具体的な方法

実験では、クイズ生成を行うLLMとして「GPT-4o-mini」と「Gemini-2.0-flash」の二つのモデルが主に使用されています。また、関連情報を取得するための知識ベースとしてWikipediaが採用されています。なお、質問に最も関連する情報を抽出するために、「text-embedding-3-large」という意味的類似性を測るモデルが用いられています。

### 個々の要素がクイズ生成に与える影響の検証

さらに、個別の要素がクイズ生成の質にどの程度影響しているかを明らかにするため、追加の検証実験が行われました。たとえば、質問から重要な概念を抽出する「概念抽出モジュール」を削除した場合の影響が調査されています。この検証では、深い概念を特定せず、質問に含まれる単語をそのまま用いてクイズ生成が実施されています。

また、別の検証として、情報を取得する際の知識源が、Wikipediaからより簡潔で表面的な情報が多いConceptNetへ変更された場合の影響も調査されています。

また、取得した情報の要約処理を省略し、多量の情報を直接クイズ生成に用いる場合の影響も確認されています。この場合、LLMが大量の情報から重要なポイントを絞り込むことが困難になり、生成されるクイズの質が低下する可能性が考えられます。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87106_5-1024x209.png)

要素ごとの影響を調べる検証（アブレーション研究）の結果をまとめた表。EV（教育的価値）、AR（内容の関連性）、DA（難易度の適切さ）の略称も掲載

## 実験結果

本手法が従来の手法に比べてどの程度効果的かが検証されました。提案手法で生成されたクイズが質問文に書かれた表面的な情報のみに基づいて生成された従来手法のクイズ（ベースライン）と比較されました。

評価の結果、提案手法はベースラインと比較して、5つの評価軸（教育的価値、多様性、内容の関連性、難易度の適切さ、包括性）のすべてにおいて一貫して良好な結果を示しました。評価スコアは全体平均で4.8%の向上が確認されました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87106_4.png)

従来の方法（Baseline）と本手法（ConQuer）のクイズ評価スコアの比較（GPT-4o-miniを使った場合）

また、二つのクイズセットをペアで直接比較する評価方法では、提案手法が77.52%の割合で従来手法よりも高評価を得ました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87106_6.png)

従来の方法（Baseline）と本手法（ConQuer）を直接比較したとき、ConQuerがどれくらいの割合で高評価だったかを示した図（GPT-4o-miniを使った場合）

この差（単体で見たときよりも比較したときのほうが顕著に効果が確認できた状況）が生じた理由としては、単体で見ればどちらも整ったクイズを生成しますが、実際に並べて比較すると、提案手法のクイズはより質の高い情報源に基づいており、質問者の理解に必要な重要概念を効果的に反映しているためだと考えられます。つまり絶対評価ではなく相対評価で見た結果、本手法の効果が一目瞭然だったということです。

### 各モジュールの影響に関する追加検証

提案手法を構成する要素ごとの貢献を分析するため、特定のモジュールを取り除いた場合のクイズ生成品質の変化を調べる追加実験（アブレーションスタディ）が実施されました。

その結果、各要素を取り除くと、全体的にクイズ生成の評価スコアは低下しました。ただし、「多様性」の評価に関しては大きな変化がありませんでした。  
これは、生成されたクイズ数が3つと比較的少なく、少ないクイズ数の中であれば多様性を維持することは容易であるためだと推測されます。

例えば概念抽出モジュールを削除すると、質問文に直接現れないが重要な概念が抜け落ち、クイズの情報量や有用性が低下しました。「植物が日光や水を十分得られない場合、どうなるか？」という質問に対し、概念抽出モジュールを外すと「光合成」という重要概念が含まれず、不十分なクイズが生成されたというケースもありました。

また、Wikipediaを使わずにConceptNetを知識源として利用すると、取得情報が簡略化され、クイズが表面的な内容になる傾向が見られました。ただし、生成クイズ数が少ない場合には、それほど大きな品質低下が目立たないことも明らかになっています。

さらに、要約モジュールを削除して得た大量の情報をそのままクイズ生成に使用した場合、クイズ生成に必要な重要概念の特定が難しくなり、クイズの内容が質問から逸れてしまうことが確認されました。この影響は非常に大きく、要約モジュールの重要性が示される結果となりました。

## まとめ

本記事では、クイズを生成する新しいフレームワークを提案した研究を紹介しました。

評価実験では、従来の方法と比べてクイズの質が向上することが示されています。また、各要素がクイズ生成にどのように貢献するかも明らかにされています。

背後にある重要な概念を抽出し、外部知識を利用することで質の高いクイズ作成を支援する仕組みです。

**参照文献情報**

- タイトル：ConQuer: A Framework for Concept-Based Quiz Generation
- URL： [https://doi.org/10.48550/arXiv.2503.14662](https://doi.org/10.48550/arXiv.2503.14662)
- コード： [https://github.com/sofyc/ConQuer](https://github.com/sofyc/ConQuer)
- 著者：Yicheng Fu, Zikui Wang, Liuxin Yang, Meiqing Huo, Zhongdongming Dai
- 所属：Stanford University, University of California San Diego

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[文書に含まれるテキスト・図・表をすべて詳しく調べるエージェント手法](https://ai-data-base.com/archives/87048)

[個人の振る舞いや考え方を模倣するアバターをLLMで構築する方法](https://ai-data-base.com/archives/87179)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)