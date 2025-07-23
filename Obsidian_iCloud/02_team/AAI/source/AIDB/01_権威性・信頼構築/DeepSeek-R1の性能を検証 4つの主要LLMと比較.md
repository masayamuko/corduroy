---
title: "DeepSeek-R1の性能を検証 4つの主要LLMと比較"
source: "https://ai-data-base.com/archives/83832"
author:
  - "[[AIDB Research]]"
published: 2025-02-10
created: 2025-06-13
description: "DeepSeek（DeepSeek-R1）はAIコミュニティ内外で大きな注目を集めています。本記事では、DeepSeekがその他のLLMと比較してどのような性能を示すのかを探求した研究を紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

DeepSeek（DeepSeek-R1）はAIコミュニティ内外で大きな注目を集めています。本記事では、DeepSeekがその他のLLMと比較してどのような性能を示すのかを探求した研究を紹介します。

比較に使用されたのは4種類の代表的なLLM（Claude、Gemini、GPT、Llama）です。

また実験されたタスクは「テキストが人間の執筆か、それともAIによる執筆なのか」を判断すること、「引用文の周辺テキストから、その引用を4つのタイプのいずれかに分類すること」でした。比較の結果、さまざまな新しい事実が浮かび上がりました。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832-1-1024x576.png)

**発表者情報**

- 研究者：Tianchen Gaoほか
- 研究機関：カーネギーメロン大学、ハーバード大学

論文情報詳細は記事の下部に記載されています。

## 背景

新しいLLMであるDeepSeekはAI業界を大きく揺るがしています。2025年1月20日に最新版（DeepSeek-R1）がリリースされて以来、DeepSeekはニュースやSNSの見出しを飾り、Apple Storeのダウンロード数でも急上昇し、投資家を驚嘆させ、Nvidiaをはじめとする一部テック株を下落させました。

DeepSeekが注目される理由は、特定のベンチマークタスクにおいて、大手のAIモデル（例：OpenAIのChatGPT）と同等、あるいはそれ以上の成績を収めているにもかかわらず、学習コストがはるかに低いという点です。例えば、Evstafevは、MATHデータセットから抽出した30題以上の難易度の高い数学問題を用いたテストですが、DeepSeek-R1がChatGPTやGemini等を上回る正答率を示すことを報告しました。

また、2025年1月28日に、医学とAIを専門とする研究者 Javier Aguirre 氏（韓国）がLinkedIn上で「DeepSeekに非常に感銘を受けた。ChatGPT-o1では解決できなかった複雑なコーディング問題を一発で解き明かした」と投稿し、他のAI研究者からも同様の反応が寄せられています。

DeepSeekの開発元からのテクニカルレポート内容は下記をご参照ください。

[DeepSeek R1が実現した教師なし強化学習による推論性能の向上](https://ai-data-base.com/archives/82540)

ただし、LLMの機能は多岐にわたり（インフラストラクチャ、 [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") 、性能、コストなど）、実行可能なタスクも数え切れません。検証が済んだタスクはLLMの可能性のごく一部です。既にインターネットやSNS上では多くの議論が始まっています。

今回カーネギーメロン大学、ハーバード大学の研究者らが注目したのは「LLMを用いた予測タスクにおける精度」です。LLMならプロンプトを工夫するだけで、ある程度小規模のデータでも柔軟に対応可能になるという利点があります。この点から、DeepSeekが他のLLMと比べてどの程度の予測精度をもつのかが興味深いテーマとなります。そこで、その比較タスクとして2つの「分類」問題が設定されました。

1つ目は著者識別で、人間が書いたテキストかAIが書いたテキストか、あるいは人間が書いたものをAIが手直ししたテキストなのかを分類するタスクです。

2つ目は引用分類で、学術論文の引用文周辺テキストから、その引用がどのタイプかを分類するタスクです。

これら2つにおいて、DeepSeek-R1と他の4つのLLM（OpenAIのGPT-4o-mini、GoogleのGemini-1.5-flash、MetaのLlama-3.1-8b、AnthropicのClaude-3.5-sonnet）が比較実験されました。

以下で詳しく紹介します。

## 著者識別タスクについて

過去2年間で、AIが生成するテキストが急速に広まり、インターネットや職場、日常生活にまで影響を与えています。ここで問題となるのが、AIによる文章と人間による文章をどのように見分けるかです。フェイクニュースや誤った医療情報が拡散すると大きな影響があり、また人間の文章とAI文章の根本的な違いを把握することはLLMの改良にも寄与すると考えられます。

本研究では、人間生成とAI生成を区別するタスク、人間生成と人間生成＋AI編集を区別するタスクの2種類が設定されました。

実験には、これまでに開発された大規模データセットMADStatを利用されます。MADStatは1975年から2015年にわたり、統計学と関連分野の36誌に掲載された83,331本の論文について、BibTeX情報と引用情報を収録しています。

### 実験の進め方

まずいくつかの著者を選び、MADStatからそれらの著者の全論文タイトルとアブストラクトを取得します。次に次のような方法で3種類のテキストを生成します。

- オリジナルのアブストラクト（人間生成）：hum
- 論文タイトルだけをGPT-4o-miniに与えて、新たに生成させたアブストラクト（AI生成）：AI
- 元のアブストラクトをGPT-4o-miniに編集させたもの（人間原稿をAIが手直し）：humAI

このレシピを用いることで多様なデータセットを作成できます。本研究では、15名の著者を選択して582の「アブストラクト3種セット（hum, AI, humAI）」を作り、MadStatAIデータセットと呼んでいます。作成したデータセットに対し、同一のプロンプトを用いて5つのLLM（DeepSeek, Claude, Gemini, GPT, Llama）を適用し、それぞれがどのような分類結果を出すかが比較されました。

## 引用分類タスクについて

学術論文の被引用数は研究の影響度を計る代表的な指標ですが、実際には引用内容が本質的に重要な場合もあれば、わき役的に触れられているだけの場合もあります。そこで「引用が重要かどうか」を自動的に判別できると便利です。今回の研究では、引用を次の4タイプに分けることが提案されています。

1. Fundamental ideas (FI)
2. Technical basis (TB)
3. Background (BG)
4. Comparison (CP)

上のうち、「1」と「2」は引用の重要度が高いとみなし、「3」と「4」は比較的軽微とみなすことにされました。

しかし、こうしたタイプ分けのためには引用周辺テキストの解釈が必要であり、すでに大規模かつラベル付きのデータセットがあるわけではありません。

そこで研究者らは自前で大規模なデータを収集し、CitaStatという新たなデータセットを作りました。統計学の代表的な4誌から1996年から2020年の論文PDFをダウンロードし、約360,000の引用を抽出。その中から3,000の引用を選んで、引用箇所の周辺テキストをテキスト化し、4つのタイプいずれかに手作業でラベル付けしたのです。こうして、(x, y)=(引用周辺の短文, 4つのクラス) という完全ラベル付きの3,000件のデータが得られました。  
このCitaStatデータを用いて、5つのLLMに引用分類を実行させ、(CC1) 4クラス分類、(CC2) 「1,2」→「S」(significant) と「3,4」→「I」(incidental) に統合した2クラス分類の2種類の実験が行われました。

## 実験結果の概要（詳細は後述）

4つの実験（AC1：「人間 vs AI」、AC2：「人間 vs humAI」、CC1：「4クラス引用分類」、CC2：「2クラス引用分類」）が行われ、5種類のLLM（Claude、DeepSeek-R1、Gemini、GPT、Llama）を比較した主な結果は下記のとおりです。

**分類精度**

Claudeが概して高精度を示し、DeepSeek-R1はClaudeに次ぐ成績でした。Gemini、GPT、Llamaは、実験によってはランダム推定に近い精度になる場合も見られました。

**処理速度**

GeminiとGPTが高速に処理する一方で、DeepSeek-R1は最も処理に時間がかかりました。DeepSeekの旧バージョン（V3）は精度はやや落ちるものの、速度は多少改善されています。

**利用コスト**

Claudeは他モデルと比較して費用が高く、DeepSeek・Gemini・GPTは0.3ドル以下で済むという結果でした。Llamaはこれらの中間程度の費用感です。

**出力の類似度**

DeepSeekとGemini・Claudeは互いに似た予測結果を出しやすい傾向があり、GPTとLlamaは特に著者識別（AC）系の実験で互いに類似度が高いものの、精度面では劣勢でした。

以上から、精度という観点ではClaudeとDeepSeekが優勢ですが、コストや速度を重視する場合はGemini・GPT・Llamaのメリットも大きいと考えられます。詳細な数値や分析は次のセクションで示します。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_1.png)

各LLMの誤差率を比較し、順位付けした結果を一覧にした表

## 実験結果の詳細

2つのタスク（著者識別と引用分類）について、研究者らが実施した数値実験の結果をより詳しく紹介します。

### 著者識別タスク

MADStatデータセットに含まれる8万件超のアブストラクトのうち、論文数が30本を超える著者を対象にし、その中から15名が無作為に抽出されています。ただし、選ばれた著者が既に選定済みの著者と共著関係にある場合は除外し、最終的に15名分のアブストラクト582本が収集されました。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_2-1024x240.png)

15人の著者と、それぞれに対応するMADStatのアブストラクト数をまとめた表

#### AI生成・AI編集の作成方法

著者らは、582本の人間執筆アブストラクト（以降「オリジナル」と表記）をもとに、GPT-4o-miniを用いて以下の2種類のテキストを生成しています。

- **AI版** ：「論文タイトル」を与えて新規に書かせたアブストラクト
- **humAI版** ：元のアブストラクトをAIに編集させたバージョン

AI版は元のテキストと大きく異なりがちで、「人間 vs AI」の区別が比較的容易になります。一方でhumAI版は元のテキストに近く、「人間 vs humAI」の区別は難度が上がると報告されています。実際、オリジナルとAI版の文字数分布に大きな差が見られ、オリジナルとhumAI版の文字数には強い相関があることが示されています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_3-1024x405.png)

人間執筆とAI生成のアブストラクトで文字数を比較し、その分布の違いを示した図

#### 2つの分類タスク

この実験では、以下2種類の分類問題を設定しています。

1. **(AC1)「人間 vs AI」** ：オリジナルとAI版を対象とした2クラス分類
2. **(AC2)「人間 vs humAI」** ：オリジナルとhumAI版を対象とした2クラス分類

いずれもサンプルは582×2=1164件あり、著者らは5種類のLLM（Claude、DeepSeek-R1、Gemini、GPT、Llama）に同一のプロンプトを与えて分類を実施しました。

#### 主な結果

表に、各LLMの誤差率、実行時間、利用コストがまとめられています。AC1では、Claudeが誤差率0.218で最良の結果を示し、次点のDeepSeek-R1が0.286となっています。Gemini、GPT、Llamaは「human」予測が多めで誤差率0.5前後に達したとのことです。

一方、AC2はより難易度が高く、誤差率の水準自体が上昇していますが、DeepSeek-R1が0.405で最も低く、Claudeが0.435で続いています。Gemini、GPT、Llamaはいずれも0.5前後でした。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_4-1024x299.png)

著者識別タスク（人間vsAI、人間vshumAI）における5つのLLMの誤差率、実行時間、コストを一覧にした表

また、各著者ごとの誤差率（図2の箱ひげ図）やLLM間の予測ラベルの一致度を分析すると、ClaudeとDeepSeekが他のモデルと異なる分布を示すことが分かります。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_5.png)

著者単位で分類誤差率を算出し、箱ひげ図で可視化したもの

Gemini・GPT・Llamaは多くのサンプルで「human」と予測しがちなため、相互の一致度が高い一方、精度はやや低めであると報告されています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_6-1024x455.png)

AI検出における5つのLLMの予測一致率を相互に比較したヒートマップ

### 引用分類タスク

#### CitaStatデータセットの構築

MADStatはフルテキストを含まないため、研究者らは今回新たに「CitaStat」というデータセットを構築しました。科学論文誌である **Annals of Statistics**, **Biometrika**, **Journal of the American Statistical Association**, **Journal of the Royal Statistical Society Series B** の4誌から1996～2020年に掲載された論文のPDFを収集し、各引用が含まれる1文を抽出してテキスト化しました。その総数は36.7万件を超えますが、この中から3000件を無作為に選び、以下の4カテゴリで手作業によりラベル付けを行っています。

1. **Fundamental Idea (FI)**
2. **Technical Basis (TB)**
3. **Background (BG)**
4. **Comparison (CP)**

20件ほどが「判定が困難」とされ除外され、最終的に2980件のデータが得られました。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_7-1024x192.png)

CitaStatデータセット内で4種類の引用カテゴリ（BG、CP、FI、TB）が占める件数と割合を示した表

#### 4クラス分類と2クラス分類

研究者らは、まずBG/CP/FI/TB の4クラス分類（CC1）を行い、さらにFIとTBを「Significant (S)」、BGとCPを「Incidental (I)」にまとめた2クラス分類（CC2）も実施しました。引用周辺テキストが短く、かつクラス定義が特殊であるため、プロンプトにはカテゴリ定義や例文などを盛り込んでいます。

実際に使用されたプロンプト

```js
The content in the text comes from a paragraph in an academic paper A that includes citations. Please classify the citation [Reference Key] appearing in the following text into one of the categories:

Background: Citations that include descriptions of the research background, summaries of previous or recent studies and methods in a general way, and examples to support and illustrate points. For example, [Example 1].
Comparison: Citations that compare methods or results with those of this paper. For example, [Example 2].
Fundamental idea: Citations about the previous work that inspired or provided ideas for this paper. For example, [Example 3].
Technical basis: Citations of important tools, methods, data, and other resources used in this paper. For example, [Example 4].
Furthermore, we consider Background or Comparison as Incidental, and Fundamental idea or Technical basis as Important.

Text: [Citation text]

Please reply only with one of the following: Important or Incidental.
```

日本語版

```js
与えられたテキストに含まれる引用 [Reference Key] を、以下のカテゴリのいずれかに分類してください。

背景 (Background)
研究の背景説明、先行研究や最近の研究・手法の概要、主張を補強・説明するための例示を含む引用。
例: [Example 1]

比較 (Comparison)
本論文の手法や結果を他の研究と比較するための引用。
例: [Example 2]

基盤となるアイデア (Fundamental idea)
本研究の着想や発想の元となった先行研究を示す引用。
例: [Example 3]

技術的基盤 (Technical basis)
本研究で使用された重要なツール、手法、データ、その他のリソースを示す引用。
例: [Example 4]

さらに、背景 (Background) または比較 (Comparison) の引用は「副次的 (Incidental)」、基盤となるアイデア (Fundamental idea) または技術的基盤 (Technical basis) の引用は「重要 (Important)」と分類します。

テキスト：[Citation text]

以下のいずれかのみを回答してください:
「Important」 または 「Incidental」
```

#### 主な結果

表5によると、4クラス分類(CC1)ではClaudeが誤差率0.327で最も精度が高く、Geminiが0.347で続きました。DeepSeek-R1はサンプルの一部（5%）に対してのみ実行されていますが、それでもDeepSeek-V3よりは精度が高い一方、ClaudeやGeminiなどよりはやや劣っています。Llamaは0.576と大きめの誤差率が報告されました。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_8.png)

引用分類タスク（4クラスと2クラス）で6つのLLMが示した誤差率、実行時間、コストをまとめた表

2クラス分類(CC2)でもClaudeが0.261でもっとも誤差を抑え、次いでDeepSeek-R1が0.275という結果でした。Geminiは0.313、DeepSeek-V3は0.332、GPTは0.371、Llamaは0.457となっています。

また、処理速度の面ではGPTやGeminiが速く、DeepSeek-V3とLlamaは数時間を要し、Claudeは1～2時間程度でした。コストはClaudeが12ドル超とかなり高額で、DeepSeek-V3は最も低コストだったとされています。

さらに、難度の差に応じてサンプルを3群（Easy/Medium/Difficult）に分けた分析でも、Easy領域ではほぼすべてのモデルがごく低い誤差率を示す一方、難度が高い領域（Difficult）では誤差が0.8～0.9台に達するモデルも多く、総合的にはClaudeが安定して低い誤差率を保っていたと報告されています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_9-1024x174.png)

4クラス分類を難度別（Easy、Medium、Difficult）に分けた際の誤差率を示した表

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_83832_10-1024x461.png)

引用分類における5つのLLMの予測一致率を比較した図

## 研究者らによる考察

2025年1月20日にリリースされた最新版以来、DeepSeekはAIの専門領域を超えて広く注目を集めていると報告されています。本研究では、短いテキストを使ったアウトカム予測という観点から、Claude、Gemini、GPT、Llamaといった人気の高い大規模言語モデルとDeepSeekを比較し、分類精度の面でDeepSeekが多くのケースでGemini、GPT、Llamaを上回る一方、Claudeには及ばないという知見が示されています。

今後の展望としては、 [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") や [コンピュータビジョン](https://ai-data-base.com/archives/26602 "コンピュータビジョン") など幅広いタスクでこれらのモデルを比較することが望ましいと考えられます。たとえば画像認識用データセットを使い、分類精度や推論性能の違いを検証することなどが挙げられます。

また、本研究で扱った著者識別と引用分類の両タスクにおいて、統計学や機械学習の手法を組み合わせることでさらなる精度向上が期待されます。たとえば、著者識別では人間とAIの文体上の違いを示す単語を統計的に抽出し、それらを含む新たなプロンプトを作成することで、LLMの性能を著しく高められる可能性があります。

なお、本研究で生成されたCitaStatといったデータセットは、さまざまなアルゴリズムの比較だけでなく、AI生成文書の特徴を分析したり、引用に関する評価指標の開発や著者の研究動向を推定したりする用途にも応用できるかもしれません。

## まとめ

本記事では、DeepSeekとLLMを比較検証した研究を紹介しました。  
短いテキストを用いた予測タスクでは、Claudeが高い精度を示し、DeepSeekがそれに次ぐ成績となっています。  
Gemini、GPT、Llamaも実行速度やコスト面で利点があり、用途に応じた使い分けが議論されました。  
今後は、統計学的アプローチや他分野のタスクを組み合わせることで、さらなる性能向上が検討されると考えられます。

**参照文献情報**

- タイトル：A Comparison of DeepSeek and Other LLMs
- URL： [https://doi.org/10.48550/arXiv.2502.03688](https://doi.org/10.48550/arXiv.2502.03688)
- 著者：Tianchen Gao, Jiashun Jin, Zheng Tracy Ke, Gabriel Moryoussef
- 所属：Carnegie Mellon University, Harvard University

作成者 [Wordpress Quiz plugin](https://ays-pro.com/wordpress/quiz-maker)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[DeepSeek‑R1の技術【クイズ】](https://ai-data-base.com/archives/84055)

[o3-miniの安全性【クイズ】](https://ai-data-base.com/archives/84069)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)