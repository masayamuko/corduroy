---
title: "会話メモやマニュアルをワークフロー化するLLMマルチエージェントシステムの仕組み"
source: "https://ai-data-base.com/archives/87661"
author:
  - "[[AIDB Research]]"
published: 2025-04-10
created: 2025-06-13
description: "人間のチームワークと同様、LLMも「一人で何でもやる」より「専門性を持って協働する」方が効果的なケースが多いことが明らかになりつつあります。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

人間のチームワークと同様、LLMも「一人で何でもやる」より「専門性を持って協働する」方が効果的なケースが多いことが明らかになりつつあります。  
例えば今回、マニュアルなどをもとにワークフローを作る課題の成功率は、先端モデルでさえ単独では2割未満に対し、3つの役割つきモデルでは5割以上に  
跳ね上がることが分かりました。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87661-1024x576.png)

## 背景

私たちが日常生活での課題や仕事を進めるときには、多くの場合、「どんな作業をどの順番で行うか」という段取りを組み立てています（テキストに起こさない場合でも、頭の中で行っている方は多いかと思われます）。

こうした一連の作業の流れを「ワークフロー」と呼びます。ワークフローは、企業活動に限らず、個人的な活動や、ちょっとしたプロジェクトでも役割を果たします。

たとえば、「毎朝9時に特定の相手にメッセージを送る」「定期的にファイルを整理して保管する」といった身近な作業も、ワークフローとして整理できます。

ただし、ワークフローを作る、つまり作業の流れを実際に可視化して具体的な手順や条件を設定するのは、作業が煩雑になればなるほど難しくなります。仕事の種類や内容によっては、ワークフローの構築や活用自体がハードルの高いこととなっています。

しかし作業の正確性や効率を上げたり、ルーティーンワークを他人に渡したりするためにはワークフロー作りは欠かせません。  
そこで役立つのがLLMです。

LLMは、「自然言語（人間が日常的に使う言葉）」で指示を与えるだけでワークフローを作成できることが注目されています。ただ、単一のLLMを使った方法では、複雑な作業になると精度が落ちる問題があります。

LLMがあまりにも多くの異なる作業を同時に行うと、ひとつひとつの作業に求められる詳細さを十分にカバーできないためです。

こうした課題を背景に、研究者らは「複数のLLMを連携させて、専門性の異なる作業をそれぞれ分担する」マルチエージェント型の仕組みを用いたワークフロー構築の方法論を考案しました。

今回の提案内容を参考に、DifyやLangGraphなどのツールを用いてシステムを作成してみてはいかがでしょうか。読みづらいマニュアルや上司や同僚との会話メモ、あるいは自分で書き溜めたアイデアブックをもとに綺麗なワークフローを作成できるシステムを用意しておくと、日々の業務が整理され、効率化につながるかもしれません。

以下で詳しく紹介します。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87661_1.png)

自然言語の指示文からワークフローを生成する例（JSON形式）

なお、今回の研究では、基本的にJSONというデータ形式でワークフローが生成されます。JSONとは、「JavaScript Object Notation」の略で、コンピューター同士がデータをやり取りするときによく使われている書き方の一種です。人間が直感的に理解できる図やフローチャートとは異なり、まずはコンピューターが自動処理を行いやすいように設計されています。

もし人が見てわかりやすい形で理解したい場合は、このJSON形式のデータを別途、図やフローチャートのように視覚的にわかりやすい表示に変換するためのツールを追加で用意すると便利です。JSONはテキスト形式で書かれているため、特別なソフトがなくても簡単に内容を確認でき、多くのツールがこの形式に対応しています。PythonやJavaScriptなどを使えば、JSONから処理の流れや関係性を抽出し、それをグラフやフローチャートとして見やすく表示することが比較的簡単にできます。また最近では、簡単な設定だけでそうした図やフローを作成してくれるウェブサービスなども多数あります。

Claudeのアーティファクトで可視化するのも一つの手かもしれません。いずれにせよ、可視化を行う前にJSONで形式化するのが重要であるため、本研究はそちらに取り組んでいます。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87661_0-726x1024.png)

さきほどの図をClaudeで可視化した例

## 前提となる知識のおさらい

まずは、この研究で行われている取り組みをよりよく理解するために、研究の土台となっている分野や類似した取り組みについて説明します。

### 自然言語からワークフローを作成するとはどういうことか

自然言語、つまり私たちが日常使っている言葉をそのまま使って、作業の流れ（ワークフロー）を自動で作成する技術がかねてより注目されてきました。ワークフローとは、先述の通り「どんな作業をどのような順序で実行するのか」を整理したものです。たとえば、「メールで受け取ったファイルを保存し、その後内容を分析してレポートを作成する」といった作業の順序を明確に定めることで、作業を自動化し、効率的に行えるようになります。

LLMであれば、人間の指示をそのまま理解して、コンピュータが自動でタスクを行えるようになっています。たとえば「Excelファイルの中から売上が1万円以上のデータだけを抽出してメールで送信する」といった文章を入力すると、それを自動で実行可能な形（コードやワークフロー）に変換してくれるといった使い方ができます。

マイクロソフトやServiceNowといった企業は、特許まで取って自然言語から直接ワークフローを生成するシステムを開発しています。また、FlowMindというシステムは、LLMを活用して、金融サービスなどで複雑な業務を自動化する機能を提供しています。

ただし、LLMを単純に使ってワークフローを作るだけでは課題があります。単独のLLMにすべての作業を任せる場合、処理が複雑になると、そのLLMが本来得意ではない領域をカバーする必要が生じます。そのため、作成したワークフローに間違いが生じやすくなるなど、精度が低下することがあります。

そこで最近ではRAG（Retrieval-Augmented Generation）も注目されています。RAGとはご存じの通り、検索して取得された情報をもとに出力を強化する方法論のことです。今回の場合、ユーザーの指示に関連する情報（コンポーネントやツールなど）を事前にデータベースから探し出し、その後LLMに渡してワークフローを生成する、という仕組みになります。

こうした流れが、現在の自然言語からワークフローを作成する技術の背景となっています。しかし、RAGを使用してもなかなか満足のいく品質の出力が得られないという課題があります。そこで新たな解決策として注目されているのが、「マルチエージェント」という仕組みです。

### マルチエージェントシステムという考え方

最近は、1つのLLMにすべてのタスクを担当させるのではなく、複数のLLMを組み合わせて役割分担する「マルチエージェント」という仕組みがさまざまなケースで採用されています。人間が仕事をするときに役割分担して協力するのと考え方としては似ています。

人間の場合、あるプロジェクトを進める場合、計画を立てる人、調査を担当する人、資料作成を行う人など、それぞれ専門性を持った人たちが協力します。マルチエージェントシステムはこれと同じ考え方で、それぞれのLLMに明確な役割を与え、協力して1つのタスクを解決しようという仕組みです。

例えば、プログラミングのプロジェクトを進めるために、6つの異なる役割を持ったエージェント（計画立案、プログラム作成、評価、文書化など）が協力してコードを書くといった仕組みが考案されたりします。

マルチエージェントシステムを「自然言語から汎用的なワークフローを作成する」といった一般的な用途に活用したケースはあまり出てきてはいません。

今回紹介する研究は、この「マルチエージェントシステム」の考え方をうまく取り入れて、「自然言語から柔軟にワークフローを作る」新しい仕組みを提案しているのが特徴です。

以下では、研究者が実際に考案した具体的な方法を、さらに詳しく紹介していきます。

## テキストからワークフローを作成するシステムの設計

上述の通り、今回の研究の中心的なアイデアは、マルチエージェントという考え方を使って、自然言語の指示から柔軟にワークフローを作成する仕組みです。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87661_2.png)

仕組み全体を示した構成図

### 全体的な流れ

基本となるのは、「スーパーバイザー（Supervisor）」「オーケストレーター（Orchestrator）」「フィラー（Filler）」という3つの役割を持ったエージェント（担当者）を組み合わせるという構造です。

簡単に言えば、この3つの担当者が互いに協力し合い、自然言語で書かれたユーザーの指示を、実行可能なワークフローへと変換します。

それぞれのエージェントは以下のように明確な役割を持っています。

- **スーパーバイザー** はユーザーの指示を理解し、他の2つのエージェントを呼び出して全体の作業を管理します。
- **オーケストレーター** は、必要な作業を理解して、それに対応する「コンポーネント」を適切な順序で並べ、ワークフローの骨格を作ります。
- **フィラー** は、オーケストレーターが作った骨格に対し、具体的なパラメータ（設定値など）を埋め込み、完全なワークフローを作成します。

以下では、それぞれのエージェントの具体的な動きを説明します。

### スーパーバイザーの役割

スーパーバイザーの仕事は、主に以下の2つです。

#### （１）タスクの計画を立てる

ユーザーの指示内容を分析して、「どのような作業を行う必要があるか」を判断します。たとえば、新しいワークフローを作る場合は、まずオーケストレーターに骨格を作らせ、その後フィラーにパラメータを設定させます。一方で、ワークフローの一部を修正する場合は、どちらか一方だけを呼び出すこともあります。

#### （２）結果のチェックと調整

オーケストレーターやフィラーが仕事を終えると、その結果が正しいかどうかを確認します。もし誤りがあったり、情報が不足していたりすると、もう一度作業をやり直させます。問題がなければ、そのままユーザーに結果を返します。

スーパーバイザーがこのように管理することで、全体の作業がスムーズに進み、問題があった際も柔軟に対応できます。

#### スーパーバイザーを作成するためのプロンプト

原文

```js
Prompt for Supervisor Agent

You are the supervisor agent in the NL2Workflow system, capable of directly interacting with users and automatically calling two agents based on user instructions: the orchestrator agent and the filler agent.

Your job is to receive messages from users:

First, you need to judge the user’s instructions and plan tasks flexibly, for example: (1) If the user’s intention is to generate workflows from natural language, then first call the orchestrator agent to get the orchestration result, and then call the filler agent to get the final result, and return it to the user; (2) If the user’s intention is to modify the structure of the workflow, then you may need to call the orchestrator agent to make modifications to the workflow; (3) If the user’s intention is to modify the parameters in the workflow, then you may directly call the filler agent.

Determine if the results returned by the orchestrator agent/the filler agent have any issues. If there are problems with the results, you need to call the orchestrator agent/the filler agent again. (Please note that even after parameter filling, it is normal for some components to have no parameters or incomplete parameters, and there is no need to call again in such cases.)

Determine if the user instruction has been solved. If it has been solved, return the final result to the user.

Notice:

Do not create/modify workflows on your own; just call agents according to user intent.

Keep replies concise.

Your output should be in JSON: {"analysis" : xxxx, "action" : xxxx} where the ’analysis’ field is for your problem analysis process or reply to the user, and the ’action’ field includes three actions: None (no call), <orchestrator_agent> (call the orchestrator agent), <filler_agent> (call the filler agent), <end> (end operation).
```

日本語訳

```js
NL2Workflow システムにおけるスーパーバイザーエージェントとして行動する。ユーザーと直接やり取りし、ユーザーからの指示に応じてオーケストレーターエージェントとフィラーエージェントの2つを自動的に呼び出すことができる。

あなたの役割は、ユーザーからのメッセージを受け取り以下を行うこと:

まず、ユーザーの指示を判断し、柔軟にタスクを計画する。例として: (1) ユーザーの意図が自然言語からワークフローを生成することであれば、まずオーケストレーターエージェントを呼び出してオーケストレーション結果を取得し、その後フィラーエージェントを呼び出して最終結果を得て、ユーザーに返す
(2) ユーザーの意図がワークフロー構造の修正であれば、ワークフローを修正するためにオーケストレーターエージェントを呼び出す必要があるかもしれない
(3) ユーザーの意図がワークフロー内のパラメータを修正する場合は、直接フィラーエージェントを呼び出してもよい

オーケストレーターエージェント／フィラーエージェントから返された結果に問題がないかを判断する。結果に問題があれば、再度オーケストレーターエージェント／フィラーエージェントを呼び出す必要がある（ただし、パラメータの入力後も一部のコンポーネントにパラメータがない、あるいは不完全であることは通常であり、その場合は再呼び出しは不要）

ユーザーの指示が解決されたかどうかを判断し、解決されたなら最終結果をユーザーに返す

注意:

自分でワークフローを作成／修正してはならない。ユーザーの意図に基づいてエージェントを呼び出すだけにすること

返信は簡潔にすること

出力は JSON 形式とし、{"analysis" : xxxx, "action" : xxxx} の形で示す。
analysis フィールドには、問題をどのように分析したか／ユーザーへの応答を書き、action フィールドには次の3つのアクションを指定する:

None（何も呼び出さない）

<orchestrator_agent>（オーケストレーターエージェントを呼び出す）

<filler_agent>（フィラーエージェントを呼び出す）

<end>（すべて終了）

一度に出力できる JSON は1つのみであり、複数を同時に出力してはならない。
```

### オーケストレーターの役割

オーケストレーターは、ユーザーからの指示に対して、どんなコンポーネント（処理を実行するための小さなプログラムやツール）が必要なのかを決め、それらを正しい順序で並べてワークフローの大枠を作ります。

具体的に以下の2つの作業をします。

#### （１）コンポーネントの絞り込み

まず、ユーザーからの自然言語の指示に対して、あらかじめ用意されたコンポーネント一覧の中から、関連性の高いコンポーネントを探し出します。この時には、言語モデルが使われます。今回の実装では「SentenceBERT」というモデルが使用されています。

ユーザーの指示文とコンポーネントの説明文をベクトルという数値の形に変換して、その数値間の「類似度（どれだけ似ているか）」を計算します。最も関連が高いと判断されたコンポーネントが優先的に選ばれます。

#### （２）コンポーネントの並べ替え

次に、絞り込んだコンポーネントをどのような順番で使えばよいかを決定します。自然言語で書かれた指示に含まれる実行順序を理解して、コンポーネントの並びを決める必要があるため、この処理にはLLMを使います。

オーケストレーターはLLMを利用してユーザー指示を理解し、各コンポーネントをどのように並べれば正しい流れになるかを判断し、ワークフローの骨格を生成します。

#### オーケストレーターを作成するためのプロンプト

原文

```js
You are the orchestrator agent in the NL2Workflow system, and you can call two tools: the component filtering tool and the component orchestration tool.

You need to judge the user’s instructions and plan tasks flexibly, for example:

If the user’s intent is to generate a component flow based on their instructions, you should first call the component filtering tool to filter components from the component set, and then call the component orchestration tool to generate the component flow;

If the user’s intent is to modify the component flow, you should first call the component filtering tool to filter out candidate components, and then use your own capabilities to modify the component flow provided by the user;

For other intents, respond according to your own capabilities.

Notice:

Do not orchestrate on your own ability! Determine when to call the component filtering tool and the component orchestration tool and initiate the calls.

Keep replies concise.

Your output should be in JSON: {"analysis": xxxx, "action": xxxx} where the ’analysis’ field is for your problem analysis process or reply to the user, and the ’action’ field includes four actions: None (no call), <call_selector>(call the component filter tool), <call_arrange>(call the component orchestration tool), <end>(end operation).

Note that you can only output a single such JSON content at a time, and it is not allowed to output multiple at once!
```

日本語訳

```js
NL2Workflow システムにおけるオーケストレーターエージェントとして行動する。
コンポーネントフィルタリングツールとコンポーネントオーケストレーションツールの2つを呼び出すことができる。

あなたは、ユーザーの指示を判断し、柔軟にタスクを計画する必要がある。例えば:

ユーザーの意図が、与えられた指示に基づいてコンポーネントフローを生成することであれば、まずコンポーネントフィルタリングツールを呼び出してコンポーネントセットから絞り込みを行い、その後コンポーネントオーケストレーションツールを呼び出してコンポーネントフローを生成する

ユーザーの意図が、既存のコンポーネントフローを修正することであれば、まずコンポーネントフィルタリングツールを呼び出して候補コンポーネントを絞り込み、そのうえで自身の能力を使ってユーザーが提示したコンポーネントフローを修正する

その他の意図に対しては、自身の能力に基づき対応する

注意:

自分自身の能力だけでオーケストレーションを行わないこと。コンポーネントフィルタリングツールやコンポーネントオーケストレーションツールを呼び出すタイミングを適切に判断し、呼び出しを行うこと

返信は簡潔にすること

出力は JSON 形式とし、{"analysis": xxxx, "action": xxxx} の形を取る。
analysis フィールドには、問題の分析やユーザーへの返答を簡潔に書き、action フィールドには以下4つのアクションのうちいずれかを指定する:

None（呼び出しを行わない）

<call_selector>（コンポーネントフィルタリングツールを呼び出す）

<call_arrange>（コンポーネントオーケストレーションツールを呼び出す）

<end>（処理終了）

一度に出力できる JSON は1つだけであり、複数を同時に出力してはならない。
```

### フィラーの役割

フィラーは、オーケストレーターが作ったワークフローの骨格に対して、具体的な設定値（パラメータ）を埋め込み、完成したワークフローを作る役割のエージェントです。

フィラーの作業は以下の2つです。

#### （１）パラメータのテンプレート取得

フィラーはまず、ワークフローに含まれている各コンポーネントについて、必要なパラメータ情報（パラメータの説明文と空のテンプレート）を取得します。空のテンプレートにはあらかじめデフォルト値を設定しておき、フィラーは必要最低限の情報を書き換えるだけです。

#### （２）パラメータの具体的な設定

テンプレートが準備できたら、次に、ユーザーの指示文から「具体的に何を設定すればよいか」を抽出し、パラメータを埋め込んでいきます。

たとえば、電話番号やメッセージの内容、APIのURLなど、ユーザーの指示から特定できる内容を実際のテンプレートに反映します。

#### フィラーを作成するためのプロンプト

原文

```js
You are the filler agent in the NL2Workflow system. Your role is to fill in parameters for each component in the component flows according to user instructions and the generated workflows. You can call two tools: the blank parameter template lookup tool and the parameter filling tool.

You need to judge the user’s instructions and plan tasks flexibly, for example:

If the user’s intent is to fill in parameters based on user instructions and the component flow, you need to first call the blank parameter template lookup tool to get the blank parameter templates corresponding to the components, and then call the parameter filling tool to fill in parameters for each component in the component flow;

If the user’s intent is to modify the parameters in an existing workflow, you need to call the parameter filling tool to modify the parameters;

For other intents, respond according to your own capabilities.

Notice:

Do not fill the parameters on your own ability! Determine when to call the blank parameter template lookup tool and the parameter filling tool and initiate the calls.

Keep replies concise.

Your output should be in JSON: {"analysis": xxxx, "action": xxxx} where the ’analysis’ field is for your problem analysis process or reply to the user, and the ’action’ field includes four actions: None (no call), <call_lookup>(call the blank parameter template lookup tool), <call_filling>(call the parameter filling tool), <end>(end operation).

Note that you can only output a single such JSON content at a time, and it is not allowed to output multiple at once!
```

日本語訳

```js
NL2Workflow システムにおけるフィラーエージェントとして行動する。あなたの役割は、ユーザーの指示と生成されたワークフローに従って、コンポーネントフロー内の各コンポーネントのパラメータを入力することである。ブランクパラメータテンプレート検索ツール（blank parameter template lookup tool）とパラメータ入力ツール（parameter filling tool）の2つを呼び出すことができる。

あなたはユーザーの指示を判断し、柔軟にタスクを計画する必要がある。例えば:

ユーザーの意図が、指示とコンポーネントフローに基づいてパラメータを入力することであれば、まずブランクパラメータテンプレート検索ツールを呼び出して、対応するコンポーネントのブランクパラメータテンプレートを取得し、その後パラメータ入力ツールを呼び出してフロー内の各コンポーネントにパラメータを入力する

ユーザーの意図が、既存のワークフローのパラメータを修正することであれば、パラメータ入力ツールを呼び出してパラメータを修正する

その他の意図に対しては、自身の能力に基づき対応する

注意:

自分だけの能力でパラメータを入力しようとしないこと。ブランクパラメータテンプレート検索ツールおよびパラメータ入力ツールをいつ呼び出すかを判断し、呼び出しを行う

返信は簡潔にすること

出力は JSON 形式とし、{"analysis": xxxx, "action": xxxx} の形で示す。
analysis フィールドには、問題をどのように分析したか／ユーザーへの返答を記述し、action フィールドには以下4つのアクションのうちいずれかを指定する:

None（呼び出しを行わない）

<call_lookup>（ブランクパラメータテンプレート検索ツールを呼び出す）

<call_filling>（パラメータ入力ツールを呼び出す）

<end>（処理終了）

一度に出力できる JSON は1つのみであり、複数を同時に出力してはならない。
```

### 各エージェントの協力関係

以上のように、スーパーバイザーが全体を統括し、オーケストレーターがワークフローの大枠を作り、フィラーが具体的なパラメータを埋め込みます。この3つの役割をはっきり分けることが大事です。

以下では、この方法を使った場合にどれくらい正確なワークフローが作成できたのかを検証した結果について紹介していきます。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87661_6-1024x624.png)

具体的な処理の流れ（スーパーバイザー、オーケストレーター、フィラーの呼び出し手順）

## 実験に用いられたデータセットと評価方法

今回の研究では、実際の業務を反映した独自のデータセットを作成し、提案手法の性能を評価しています。このデータセットは非公開ですが、企業でよくある作業シナリオ（例えば、「特定条件のメールを受信したら処理を行う」「定期的にデータをチェックする」といったもの）に基づいています。

実験で使用されたデータセットの規模は、合計で約3,700件ほどです。各データには、「自然言語の指示文」と、その指示文を実行するために必要な「作業の流れ（ワークフロー）」が含まれています。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87661_3.png)

実験に用いたデータセット（HW-NL2Workflow）の内訳と統計情報

評価にあたっては、生成されたワークフローが正しいかを客観的に確認するため、以下の3つの指標が使われています。

**完全一致率（Exact Match Rate; EMR）**  
生成結果が、正しいワークフローと完全に一致する割合。  
（コンポーネントの順番・設定値が全て一致する必要があります。）

**順序の正確性（Arrangement Accuracy; AA）**  
作業手順（コンポーネント）の順番が正しく並んでいる割合。

**パラメータの正確性（Parameter Accuracy; PA）**  
コンポーネントの設定値（パラメータ）が正しく設定されている割合。

以上を踏まえて、次に実際の評価結果を確認していきましょう。

## 実験とその結果について

研究者らが提案した仕組み（「WorkTeam」と名付けられました）が実際の場面でどの程度うまく機能するかを確かめるために行われた実験と、その結果について説明します。

### 比較対象

実験では、提案されたWorkTeamの比較対象となったのは、GPT-4oやQwen2.5、LLaMA3など、現在広く使われているLLMを単独で用いる方法です。また、RAG（前述の通り、事前に検索した情報をLLMに渡すことで精度を高める方法）も比較されました。

### 実験結果の概要と解釈

実験結果を見ると、単独のLLMを用いた場合、最も良かったGPT-4oでも、完全に正確なワークフローを生成できる割合は約20％程度にとどまりました。これは一定の精度は得られるものの、複雑なワークフローを扱う業務で実用的に使うにはまだ十分とは言えない結果です。また、比較的小規模なLLMであるLLaMA3の場合はさらに精度が低く、実務で使えるレベルには達していないことが明らかになりました。

一方、検索によって得た情報を活用するRAGを採用すると、完全一致率は約24％に改善しました。ただし、精度向上は限定的で、まだ複雑なワークフローの実用的な生成には課題が残っていることが読み取れます。

今回提案されたWorkTeamでは、完全一致率が約53%、作業手順の順序の正確性が約89%、パラメータ設定の正確性が約73%と、従来手法より明らかに高い性能を示しました。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87661_4.png)

従来手法（ベースライン）とWorkTeamの性能比較（完全一致率や順序の正確性などを掲載）

### WorkTeamが良い結果を生んだ理由

WorkTeamの性能が優れていた背景には、役割分担とそれぞれのLLMの専門性を活かす設計があると考えられます。各エージェントが明確に分けられた役割に集中し、得意分野に特化することで、全体の精度が向上しました。また、スーパーバイザーが生成結果を監視し、必要に応じてエージェントに修正を指示する仕組みがあるため、柔軟性と正確性が高まりました。

### 各エージェントの役割の重要性

さらに、各エージェントがどの程度性能に貢献しているかを調べるため、スーパーバイザー、オーケストレーター、フィラーの各エージェントを個別に取り除いた状態で性能がどのように変化するかを調査する実験も行われました。

この結果、オーケストレーターとフィラーはどちらが欠けてもワークフローの作成自体が不可能になり、両者がワークフロー生成に必須の役割を持っていることが確認されました。一方、スーパーバイザーを除外した場合、ワークフローの生成自体は可能でしたが、精度は低下しました。よって、スーパーバイザーが全体の管理と調整を担当することが性能の改善に寄与していることも示されました。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87661_5.png)

各エージェントの役割の重要性を確かめるための実験結果

以上から、単独のLLMよりも、そしてRAGよりも、マルチエージェントシステムの方が明確に優れた性能を持つことが示唆されました。また、マルチエージェントシステムの設計内容も重要であることがわかりました。

## まとめ

本記事では、自然言語から柔軟にワークフローを作成するためのマルチエージェント型の仕組みを提案した研究を紹介しました。複数のLLMを組み合わせ、それぞれに明確な役割を割り当てることで、精度を改善する仕組みです。

実験の結果、単一のLLMや従来の方法に比べて高い精度で複雑なワークフローを生成できることが確認されました。  
なお、現実の業務に近い条件で性能を検証しています。

企業だけでなく個人でも、日常の煩雑な作業や会話メモから実行可能なワークフローを作成するといった形で、この研究成果を活用することができるかもしれません。

**参照文献情報**

- タイトル：WorkTeam: Constructing Workflows from Natural Language with Multi-Agents
- URL： [https://doi.org/10.48550/arXiv.2503.22473](https://doi.org/10.48550/arXiv.2503.22473)
- 著者：Hanchao Liu, Rongjun Li, Weimin Xiong, Ziyu Zhou, Wei Peng
- 所属：IT Innovation and Research Center, Huawei Technologies, National Key Laboratory for Multimedia Information Processing, School of Computer Science, Peking University

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[手元のドキュメントからLLM評価用のオリジナルベンチマークを作成する](https://ai-data-base.com/archives/87773)

[LLMエージェントとはそもそも何か　どのような仕組みか　何に使うのか【前編】](https://ai-data-base.com/archives/79214)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)