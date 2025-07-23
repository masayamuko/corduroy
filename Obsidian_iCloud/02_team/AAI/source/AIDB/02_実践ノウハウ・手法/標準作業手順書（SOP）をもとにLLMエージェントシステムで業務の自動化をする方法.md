---
title: "標準作業手順書（SOP）をもとにLLMエージェントシステムで業務の自動化をする方法"
source: "https://ai-data-base.com/archives/87250"
author:
  - "[[AIDB Research]]"
published: 2025-04-07
created: 2025-06-13
description: "本記事では、LLMを活用して業務の標準作業手順書（SOP）を自動化するエージェントに関する研究を紹介します。多くの企業や組織では、業務を安定して行うために作業手順を文書化していますが、その多くは人の手で処理されています。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMを活用して業務の標準作業手順書（SOP）を自動化するエージェントに関する研究を紹介します。多くの企業や組織では、業務を安定して行うために作業手順を文書化していますが、その多くは人の手で処理されています。そうした作業を人間に代わって自律的に進める方法として、LLMエージェントの仕組みが考案されました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87250-2-1024x576.png)

## 背景

多くの企業では、スタッフが業務を進めるとき、あらかじめ決められたルールや手順に沿って作業を行っています。このように定型化され、繰り返し行われる手順が書かれたものを「標準作業手順書（Standard Operating Procedures: SOP）」と言います。SOPは業務の効率化や品質の均一化を目的としており、多くの業界や業務分野で広く活用されています。

標準作業手順書（SOP）で定められている作業は、大きく二つのタイプに分類されます。

一つは、ユーザーや顧客との対話を通じて必要な情報を収集する「コミュニケーション型」の作業です。もう一つは、収集した情報を元に、APIなどの外部システムを使ってステータスやデータを確認する「情報確認型」の作業です。  
実際の業務では、この2つの作業を交互に行いながら、問題の解決や意思決定を進めていきます。ただし、誤った情報が与えられるなどの問題が起きた際には、一つ前の手順に戻るなど柔軟な対応が求められます。

そこで今回研究者らは、これまで主に人が担ってきたこうした標準作業手順書（SOP）に基づく業務を、LLMエージェントシステムを用いて自動化する研究に取り組みました。

以下で詳しく紹介します。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87250_2-1024x550.png)

提案するエージェントの全体的な仕組み

## LLMを活用した標準作業手順書（SOP）自動化の仕組み

「標準作業手順書（SOP）」は業務の品質や効率を一定に保つために使用されています。スタッフはこれを参照しながら業務を進め、日々発生する問題や課題を解決しています。

たとえば、顧客からの問い合わせ対応の場合、担当者は顧客に質問を投げかけて必要な情報を取得し、その情報を使ってシステム上のデータを参照して状況を確認します。その結果を踏まえて次の質問や行動を決める、というように進みます。

本研究の目的は、こうした人間が担ってきた作業を、LLMを搭載したエージェントを用いて自動化することにあります。複数のLLMを組み合わせ、それぞれが役割を分担しながら作業を進める仕組みが提案されています。

まず、その仕組みを支える重要な要素の一つである、「作業情報を一元化する仕組み」から説明します。

### 作業情報を一元化する

システムが業務を正しく実行するには、「次に何をするのか」「そのためにはどのような情報が必要か」が明確である必要があります。しかし、SOPごとに毎回すべての作業情報を記述していては管理が大変になるため、効率的ではありません。

そこで、作業に必要な情報を一ヶ所にまとめ、どのSOPでも共通して利用できるようなデータベースが必要になります。システムがどの作業をどのように実行するかを一元管理するためのデータベースです。  
そこには「作業の名前」「作業の種類」「ユーザーとのやり取りの方法」「APIに必要な情報」などが記録されます。

研究者らはこのデータベースを「Global Action Repository（GAR）」と名付けています。

実際に作業を行うときには、まずLLMがGARを参照し、次にどんな作業をするのかを決定します。例えば、顧客に質問をする場面なら、GARに記載された質問の内容を参照して適切な質問を選びます。逆に、情報をシステム上で確認する場面なら、GARに記載されたAPIの情報を使ってシステムにアクセスします。

またGARには、作業を分類するために「作業の種類（action\_type）」が記録されます。

作業の種類は主に、  
「APIを呼び出す作業」  
「ユーザーに質問をする作業」  
「ユーザーにメッセージを伝える作業」  
「外部の知識を参照する作業」  
があります。

それぞれの作業に必要な具体的な情報（APIの接続先やユーザーへの質問文など）もGARに登録されます。

このデータベースを共通で使うことで、複数の異なる手順（SOP）を効率的に管理し、次の作業を行う際に迅速かつ正確に判断できるようになります。

### 次に行う作業を判断する

業務を自動的に進めるためには、「次にどの作業を行うか」を適切に判断する必要があります。そこで、その判断を行う中心的な役割を担うサブエージェントが必要になります。研究者らはこれを「State Decision LLM」と名付けています。

業務を進めていく中で、ひとつの作業が完了すると、システムは次に何をすべきかを決定しなければなりません。たとえば「ユーザーに質問をすべきか」「APIを呼び出して情報を確認すべきか」「作業を終了すべきか」などの判断が必要になります。

この判断を行う際、State Decision LLMは、

- 「標準作業手順書（SOP）」
- 「実行メモリ（これまでの作業履歴）」

という二つの情報を活用します。

#### SOPを自然な文章で記述する

作業内容を適切に理解するには、SOPをシンプルで分かりやすく記述する必要があります。研究者らは、専門的な書式や複雑な記号を使わず、人間にも直感的に理解できるような自然な文章形式でSOPを書き起こす方法を考えました。

例えば、「商品IDがブロックされた際の対応手順」は次のように記述されます。

1. まず、ユーザーの現在のステータスを確認します。
2. ユーザーが「オンボーディング中（登録途中）」の場合は、「登録が完了していません」と伝えて手順を終了します。
3. 「アクティブ（有効）」な状態の場合は、商品IDをユーザーに尋ね、そのIDの状態をシステム上で確認します。商品の状態がアクティブなら「商品はアクティブです」と伝えて終了します。アクティブでない場合は、商品のブロック理由を確認します。その結果によって、再度アクティブ化できるかを調べるなど、状況に応じて次の対応を決定します。

このように状況に応じて判断や行動が枝分かれする手順を、LLMが理解できるシンプルな自然文で書いています。

この方法の利点は、専門知識がなくても簡単に記述・理解できる点にあります。LLMは、この自然な文章を読み取り、次の行動を的確に判断します。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87250_3.png)

リスティングがブロックされた場合のSOPの作業手順例

#### 作業結果を記録・活用する

エージェントが状況に応じた適切な作業を選ぶためには、直前の作業が「成功したのか」「失敗したのか」を把握する必要があります。そこで研究者らは「実行メモリ（Execution Memory）」という仕組みを考案しました。

実行メモリには、エージェントが行った作業ごとに、以下のような情報が記録されます。

- 実施した作業の内容（ユーザーに何を質問したか、APIで何を確認したかなど）
- 作業の結果（ユーザーからの回答やAPIが返した情報など）
- 作業が成功したか失敗したかの結果（成否）

たとえば、エージェントがユーザーに商品IDを尋ね、その回答が記録されます。その回答が正しく、作業が成功した場合は「成功」と記録されます。一方で、ユーザーが間違った情報を提供し、API呼び出しでエラーが発生した場合には「失敗」と記録されます。

LLMはこの記録を参照して次にすべき作業を決定します。例えば、前の作業が「失敗」と記録されたら、LLMは「もう一度ユーザーに正しい情報を尋ねる」など、適切な次の行動を判断します

#### サブエージェント「State Decision LLM」のシステムプロンプト

原文

```js
I want you to act as the action decision agent for the workflow automation task.
You will be provided with the following information.
1. Workflow
2. Execution Memory

Workflow consists of a logical sequence of actions. Execution Memory consists of the history of
actions, observations and feedback.

Your task is to decide the next action based on the workflow and execution memory.

*** If the execution memory is empty, output the first action from the workflow.

*** If the feedback for the current entry in execution memory mentions success, output the next
action as per the logic shown in the workflow.

*** If the feedback for the current entry in execution memory mentions fail, decide the next action
as follows.
– If observation indicates that the user wants to go back to any of the previous actions, perform
a semantic search in the current execution memory and find the relevant action to help the user.
Output the action as the next action. Post this you must continue the workflow from where it was
broken.
– If the observation clearly indicates that the user has a question or a query, output the action as seek
external knowledge. If feedback for the seek external knowledge action step is success, output the
previous valid action from the Execution Memory as the next action.

*** If the feedback for the last entry in execution memory mentions fail and observation does not
clearly indicate any of the above scenarios, decide the next action as follows. Carefully evaluate the
inter-dependence of the current failed action on the previous actions in the execution memory and
select the most logical previous action that needs to be repeated. Output it as the next action.

### Workflow: <sop_workflow> ###

### Execution Memory: <execution_memory> ###

Think step by step and output your thinking as thought.
Generate all the responses in the JSON format without any deviation. Output JSON should have
keys "thought", "next_action".
```

日本語訳

```js
あなたには、ワークフロー自動化タスクにおける「アクション決定エージェント」として振る舞ってほしい。
次の情報が与えられる。
1. Workflow（ワークフロー）
2. Execution Memory（実行メモリ）

ワークフローは論理的なアクションのシーケンスで構成される。実行メモリには、過去に行ったアクション、観測結果、フィードバックが記録されている。

あなたのタスクは、ワークフローと実行メモリに基づいて、次に実行すべきアクションを決定することである。

*** もし実行メモリが空の場合は、ワークフローの最初のアクションを出力すること。

*** もし実行メモリ内の最新エントリのフィードバックが success の場合は、ワークフロー上のロジックに従って次のアクションを出力すること。

*** もし実行メモリ内の最新エントリのフィードバックが fail の場合は、次の通りに次のアクションを決定すること。
– 観測結果から、ユーザが以前のアクションに戻りたい意図が明確に示されている場合は、現在の実行メモリをセマンティック検索して、ユーザを助けるのに適切なアクションを見つける。そのアクションを次のアクションとして出力する。その後は中断した箇所からワークフローを続行すること。
– 観測結果から、ユーザの質問や疑問が明確に示されている場合は、seek external knowledge（外部ナレッジ参照）というアクションを出力すること。もしこの「seek external knowledge」のフィードバックが success になれば、実行メモリにある直近の有効なアクションを次のアクションとして出力すること。

*** もし実行メモリ内の最新エントリが fail で、かつ観測結果が上記のいずれにも当てはまらない場合は、次の通りにアクションを決定する。現在 fail になったアクションと、実行メモリにおける以前のアクション群との依存関係を丁寧に評価し、再度実行すべき最も妥当なアクションを選び、それを次のアクションとして出力すること。

### Workflow: <sop_workflow> ###
### Execution Memory: <execution_memory> ###

段階的に考えを進め、それを "thought" として出力せよ。
応答はすべて JSON 形式で、かつ "thought" と "next_action" というキーを必ず含むこと。
```

### 行動内容を具体的な作業に結びつける

前述のState Decision LLMは、システムが次にするべきことを文章の形で示します。ただし、「ユーザーに登録状況を質問する」や「商品IDを確認する」といった文章を読んだだけでは、システムが具体的にどのように作業すればよいか分かりません。

そこで、この文章での指示を、事前にデータベース（GAR）に登録されている具体的な作業内容と照らし合わせて、最も適切なものを見つける必要があります。このために考え出されたのが「Action Retrieval model」という仕組みです。

まず、「エンベディング（embedding）」という技術を使って、文章の意味を数字の形（ベクトル）で表現します。たとえば、「商品IDを確認する」という文章があった場合、その意味を数値に変換します。同じようにGARに登録されている全ての作業も事前に数値に変換されており、その中から、最も意味が近い（数値が似ている）作業を探し出します。

こうして、文章で書かれた指示文が、GARの中からエージェントが実際に実行できる具体的な作業と結びつけられます。

### 作業に必要な情報を準備する

SOPを自動化する仕組み（全体のエージェント）は、前述の通り、いくつかの役割を持つ複数のエージェントが協力して動いています。その中で「次に行う作業の詳細を準備する」役割を担当するサブエージェントが必要です。研究者らはこれを「Action Execution LLM」と名付けています。

Action Execution LLMは、エージェント全体が次に行う作業を決定すると、その作業を実際に進めるための細かな準備を行います。

たとえば、エージェントが「ユーザーに質問する」作業をするときには、「どんな文章で質問をすればよいか」を生成します。「APIを呼び出す」作業の場合は、「APIにどんな情報を渡すべきか」を整理します。「ユーザーにメッセージを伝える」作業であれば、ユーザーに伝えるメッセージ内容を準備します。また外部の知識データベースを検索するときには、「検索に使う言葉」も用意します。

このようにAction Execution LLMが具体的な質問文や必要なデータなどを状況に応じて生成します。そのため、人間がすべての作業を細かく決めておく必要はありません。

#### サブエージェント「Action Execution LLM」のシステムプロンプト

原文

```js
I want you to act as the action execution agent for the workflow automation task. You will be
provided with the following information.
1. Action in the workflow
2. Action type
3. Action context

Your task is to generate data to execute an action as per the action, action type and action context.

1. If action type includes ask_user_input, your task is to generate a polite question to the user using
the action. Output the question as user_interaction.

2. If action type includes api_call, your task is to extract and assign a correct value to each of the
required param using the action context. Output the required params and its values.

3. If action type includes external_knowledge, your task is formulate a short search like query from
the user’s question/query provided in the action context. Output the search query as search_query.

4. If action type includes message_to_user, your task is to generate the response to the user as
shown in the action context. For failure case, inform user that you are retrying the <action>. Output
the response as user_interaction.

### Action: <action>
### Action type: <action_type>
### Action context: <action_context>

Think step by step and output your thinking as thought.
Generate all the responses in the JSON format without any deviation. Output JSON should have
keys "thought", "user_interaction", "params", "search_query".
```

日本語訳

```js
あなたには、ワークフロー自動化タスクにおける「アクション実行エージェント」として振る舞ってほしい。
以下の情報が与えられる。
1. ワークフロー中のアクション
2. アクションタイプ
3. アクションの文脈（コンテキスト）

あなたのタスクは、与えられたアクション、アクションタイプ、アクションコンテキストに従い、アクションを実行するためのデータを生成することである。

1. もしアクションタイプに ask_user_input が含まれる場合は、アクションをもとにユーザへ丁寧な質問を生成し、その質問を "user_interaction" として出力する。

2. もしアクションタイプに api_call が含まれる場合は、アクションコンテキストから必要なパラメータを正しく抽出し、それぞれの値を割り当てる。そのパラメータを "params" として出力する。

3. もしアクションタイプに external_knowledge が含まれる場合は、アクションコンテキストに示されたユーザの質問や疑問から、検索用の短いクエリを生成する。そのクエリを "search_query" として出力する。

4. もしアクションタイプに message_to_user が含まれる場合は、アクションコンテキストにある指示をもとにユーザに返すメッセージを生成する。失敗ケースでは「<action> を再試行している」という趣旨のメッセージをユーザに伝えること。その生成結果を "user_interaction" として出力する。

### Action: <action>
### Action type: <action_type>
### Action context: <action_context>

段階的に考えを進め、それを "thought" として出力せよ。
応答はすべて JSON 形式で、かつ "thought", "user_interaction", "params", "search_query" というキーを必ず含むこと。
```

### ユーザーとのやり取りを担う

ユーザーとのコミュニケーションを専門に担当するサブエージェントも必要です。これは「User Interaction LLM」と名付けられています。

このサブエージェントは、ユーザーとの会話を担当し、ユーザーが入力した内容を正しく理解し、業務に使える情報に整理します。

たとえば、ユーザーに「商品ID」を尋ねたとき、ユーザーから回答があった場合に、「その回答が本当に商品IDとして妥当かどうか」を判断します。意味のない文字が入力された場合は、それを誤りとして検知します。

また、このサブエージェントは、ユーザーから受け取った回答の中から必要な情報（商品IDや電話番号など）を取り出し、整理します。その情報は、のちにAPIを呼び出す際などに使われます。

さらに、ユーザーに返す簡単な返信メッセージを作成する役割も担っています。回答が適切であれば「ありがとうございます、確認しました」と伝え、適切でない場合には「入力いただいた情報が正しくありません」などと伝えます。

その他、ユーザーが入力した文章に誤字や表記の揺れがあった場合、それらを自然に修正する役割もあります。こうすることで、その後の作業が進めやすくなります。

#### サブエージェント「User Interaction LLM」のシステムプロンプト

原文

```js
I want you to act as the user interaction agent for the workflow automation task.
You will be provided with the following information.
1. Question asked to the user
2. User’s reply
3. Condition

Your tasks are as follows.
1. Verify if the user’s reply satisfies the condition.
   If yes, set input_validation field as success. Otherwise set it as fail.

2. Extract all the entities from user’s reply and output the slots with key and value per entity. Assign
a distinctive name to the key as per the question for easy identification.

3. Generate a response to the user as follows.
   If input_validation is success, provide a one-line acknowledgment message.
   If input_validation field is fail:
      ** If User’s reply clearly shows a question or a query, output the message that you are working on
         it and politely ask user to wait.
      ** If User’s reply is not a question or a query, provide a one-line acknowledgment message.

### Question asked to the user: <question>
### User’s reply: <user_reply>
### Condition: User’s reply which indicates or includes <expected_format>

Think step by step and output your thinking as thought.
Generate all the responses in the JSON format without any deviation. Output JSON should have
keys "thought", "input_validation", "user_response", "slots".
```

日本語

```js
あなたには、ワークフロー自動化タスクにおける「ユーザ対話エージェント」として振る舞ってほしい。
以下の情報が与えられる。
1. ユーザに対して尋ねた質問
2. ユーザの返信
3. 条件

あなたのタスクは次の通りである。
1. ユーザの返信が条件を満たしているかどうかを検証する。
   もし満たしていれば、input_validation フィールドを success とする。そうでなければ fail とする。

2. ユーザの返信からすべての実体（エンティティ）を抽出し、キーと値の形で slots として出力する。
   キーには、質問に応じて識別しやすい名前を割り当てること。

3. ユーザへの応答を次の通り生成する。
   もし input_validation が success なら、1 行の承認メッセージを返す。
   もし input_validation が fail なら:
      ** ユーザの返信が明らかに質問やクエリである場合は、対応中である旨を伝え、丁寧に少し待つよう促す。
      ** もしユーザの返信が質問やクエリでない場合は、1 行の承認メッセージを返す。

### Question asked to the user: <question>
### User’s reply: <user_reply>
### Condition: User’s reply which indicates or includes <expected_format>

段階的に考えを進め、それを "thought" として出力せよ。
応答はすべて JSON 形式で、かつ "thought", "input_validation", "user_response", "slots" というキーを必ず含むこと。
```

## エージェントが作業を実行する流れ

実際にエージェントを動かす場合、どのような順序で作業を進めるのか整理します。

① **最初の作業の決定**

最初は「実行メモリ」（作業履歴）が空のため、SOPの最初の手順をそのまま実行します。  
まず、「State Decision LLM」でSOPの冒頭に書かれた作業を確認し、それを最初の作業として決定します。

② **作業内容をGARから選択**

State Decision LLMが出力した作業内容をもとに、「Action Retrieval model」でGAR（共通作業データベース）を参照し、対応する具体的な作業を探します。

③ **作業に必要な情報を準備**

次に、決定した作業を「Action Execution LLM」に渡します。  
Action Execution LLMは、ユーザーに投げかける質問文を用意したり、APIに渡すべきパラメータを整理したりします。たとえば、ユーザーに登録状況を確認する場合は、「現在の登録状況を教えてください」などの質問文を作ります。

④ **作業の実施と結果の記録**

ユーザーとやり取りする場面では、用意した質問文をユーザーに送り、その回答を受け取ります。受け取った回答は「User Interaction LLM」で検証して、正しい内容か、必要な情報が含まれているかを確認します。問題なければそのままユーザーに簡単な返信（「確認しました」など）を返し、問題があれば誤りがあることを伝えます。このやり取りの結果（ユーザーの回答内容や検証結果）は、すべて「実行メモリ」に記録します。

APIを呼び出す必要がある場合は、準備した情報を使ってAPIを実際に呼び出します。そして、APIから返ってきた情報を確認し、期待した結果が得られたかどうかを判断します。その結果と成功・失敗についても、同じく「実行メモリ」に記録します。さらに、外部の知識データベースに問い合わせる場合も、実際に問い合わせを行い、その結果を受け取った上で実行メモリに記録します。

⑤ **次の作業を決定**

直前の作業を終えたら、「State Decision LLM」を使って次の作業を決めます。  
「実行メモリ」を参照し、SOPに従って適切な次のステップを選びます。

⑥ **エラー時の対応**

作業を進めるなかでエラーが起きる場合があります。たとえば、APIの呼び出しに一時的な障害が起きることや、ユーザーが間違った情報を提供することがあります。

このような場合には、一度のエラーで諦めずにもう一度同じ作業をやり直します。ただし、ユーザーが何度も誤った情報を入力する、あるいはAPIが何度も失敗するような場合に、繰り返し再試行を続けるのは良くありません。そのため、あらかじめ何回まで再試行するかを設定しておき、設定回数を超えて同じエラーが起きるようならば、その時点で作業を止めるようにします。こうすることで、同じ失敗が無限に繰り返されることを避けられます。

⑦ **ユーザーの質問への対応**

ユーザーが作業中に質問してきた場合（例：「商品IDはどこで確認できますか？」）は、一旦作業を止め、外部の知識ベースを参照して回答を探します。  
ユーザーに回答を伝えたあと、もとの作業に戻って再開します。

## 評価実験結果

提案されたエージェントの仕組みが実務で有効に機能するかを確認するため、研究者らは二段階の評価を行いました。最初は現実の業務を再現したシミュレーション環境で、次に実際のユーザーと対話するリアルな環境で、それぞれ検証を実施しました。

シミュレーション環境では、実際の業務で直面しそうな多様な状況を想定しました。ユーザーからの入力として、正確な回答だけでなく、誤った情報や無関係な内容、ユーザーが途中で疑問や質問を投げかけるケースなども再現しました。また、APIが正常に動作しない場合やエラーが発生するケースも含め、幅広いシナリオを用意しました。

そして、本システムが標準作業手順書（SOP）を正しく解釈し、それに基づいて適切な行動をとれているかを確認しました。注目されたのは、エラーや例外的な状況に対して柔軟かつ適切な対応が可能かどうかという点でした。

その結果、エージェントはSOPを理解して正しく実行し、多くの場合で問題を適切に処理できることが確認されました。ただし、状況が複雑化した際に、判断の誤りや適切でない行動を取るケースも一部見られました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87250_4.png)

State LLMの性能評価結果

さらに、「Action Execution LLM」が各作業を具体的に進めるための情報（質問文やAPIパラメータ、検索キーワードなど）を適切に生成できているかも評価されました。この評価では、準備された情報が実務において実際に役立つものであることが確認されました。一方、外部知識ベースへの問い合わせにおいて、一部改善の余地があることも明らかになりました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87250_5.png)

Action LLMの性能評価結果

その後、実際のユーザーとの対話による検証も実施されました。この段階では、エージェントの仕組みが現実の状況でもスムーズに機能し、想定通りの作業を実施できるかが焦点でした。実際の業務環境に近いこのテストでも、エージェントはほとんどのケースで適切な対応を示し、実務への導入が十分可能であることが確認されました。

## まとめ

本記事では、LLMを利用して標準作業手順書（SOP）をもとに作業を自動化するエージェントを提案した研究を紹介しました。

実験では、シミュレーションと実際のユーザーを相手にした検証によって、その有効性が確認されました。既存のエージェント研究との比較においても、柔軟性や対応力に優れている点が示されています。なお、顧客サポートに限らず、さまざまな業務における手順の自動化や効率化にも応用できる可能性があります。

**参照文献情報**

- タイトル：Agent-S: LLM Agentic workflow to automate Standard Operating Procedures
- URL： [https://doi.org/10.48550/arXiv.2503.15520](https://doi.org/10.48550/arXiv.2503.15520)
- 著者：Mandar Kulkarni
- 所属：Flipkart Data Science

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[東京大学松尾豊氏らなど国際研究グループ、多言語によるLLM能力の新ベンチマーク『MMLU-ProX』を開発　論文著者本人が解説](https://ai-data-base.com/archives/87832)

[LLMアプリケーション約1,500事例から学ぶプロンプトテンプレート](https://ai-data-base.com/archives/87853)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)