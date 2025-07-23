---
title: "キャラが自律的に対話しながら物語の台本を生成するLLMベースのシステム『IBSEN』"
source: "https://ai-data-base.com/archives/73294"
author:
  - "[[AIDB Research]]"
published: 2024-07-24
created: 2025-06-13
description: "本記事では、LLMベースで脚本を生成するフレームワークを紹介します。ディレクター（監督）のエージェントと俳優のエージェントを協調させ、自然な脚本を生成する手法です。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMベースで脚本を生成するフレームワークを紹介します。ディレクター（監督）のエージェントと俳優のエージェントを協調させ、自然な脚本を生成する手法です。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294-1024x576.jpg)

**参照論文情報**

- タイトル：IBSEN: Director-Actor Agent Collaboration for Controllable and Interactive Drama Script Generation
- 著者：Senyu Han, Lu Chen, Li-Min Lin, Zhengshan Xu, Kai Yu
- 所属：Shanghai Jiao Tong University

## 背景

LLMは、ストーリーの作成やキャラクターのロールプレイに秀でています。しかし、これまで考案されたアプローチは主にキャラクター1人レベルのコントロールに焦点を当てており、ストーリーライン全体を洗練するのは難しいと言われていました。

例えば、演劇のような物語では、登場人物たちが物語を前に進めるために、特定の場面で適切な行動をとる必要があります。そのため、エージェント同士のやりとりにも一定の制限を設ける必要があります。しかしこれまでのエージェントの設計では、各エージェントが独立して行動する仕組みになっているため、全体の物語の流れを管理する中心的な存在がなく、対策が難しいです。

あるいはアドベンチャーゲームやロールプレイングゲームのように、人間のプレイヤーが参加する場合も困難です。物語が本筋から大きく外れないよう、より慎重に管理する必要が生じるためです。

そこで今回、『IBSEN』という新しいフレームワークが提案されました。映画や演劇における監督と俳優の関係にヒントを得て、物語全体を管理する「ディレクターエージェント」と、個々のキャラクターを演じる「俳優エージェント」を組み合わせることで、一貫性のある物語を生成することを目指すものです。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_4.png)

## IBSENの仕組み

IBSENフレームワークでは、3つのタイプのエージェント [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") が導入されています。ディレクター（監督）エージェント、俳優エージェント、そしてプレイヤーエージェントです。以下、各エージェントの役割と特徴について詳しく解説します。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_5-1024x466.jpg)

ディレクターエージェントと俳優エージェントを使用して制御された脚本を生成するフレームワークであることを示す図

### ディレクターエージェント

IBSENの中心的な役割を持つエージェントがディレクターエージェントです。実際の映画や演劇の監督のように、物語全体を管理し、進行させる役割を担っています。主な仕事は以下の4つです。

1. 脚本の基本設定とストーリーの目標を読み取り、これらを元に物語を組み立てていく
2. 大まかな物語の流れを細かい対話や場面に落とし込み、登場人物が話す順番も決める
3. 各キャラクターを演じる俳優エージェントに対して、どのように振る舞うべきかの指示を出す
4. 現在の物語の展開が、当初の目標に向かって正しく進んでいるかを確認する

ディレクターエージェントは、物語を「一連の目標を達成していく過程」として捉えます。そしてシステムに予め設定された目標リストに基づいて、物語を組み立てていきます。

作業の流れとしては、まず大まかな物語の概要を作り、次にそれを細かい対話のやりとりに変換します。誰がどのタイミングで何を話すかといった詳細も決定されます。

以下はディレクターエージェントとしてLLMを実行するためのプロンプト例です。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_1-1024x411.png)

**ディレクターがストーリーの概要を書くプロンプト**

```js
System: Assuming you are currently a director, guiding a scene in a drama. Given the characters and the existing script for this scene, please first summarize what has happened in the plot so far. Then, based on the relationships and impressions between characters, you are asked to write a detailed continuation for the upcoming script. Ensure that the combined plot of the current scene and the continuation adheres to the given plot objective, and the specific content of the script is more related to the characters’ images. The existing script may have partially achieved the current plot objective. You must strictly follow the requirements of the plot objective, continuing the existing script and gradually developing the plot. Be cautious not to disregard the existing script or create plot developments beyond the specified plot objective. Your generated plot guidance should be descriptive about what will happen next, without using a dialogue script format. Do not include events that have already occurred in the existing script, and refrain from prematurely generating events beyond reaching the plot objective. Characters in the plot must be in the scene. You should summarize the existing script and give the continuation for the upcoming script in JSON format. Format example:
{"previous_outline": "Summary of the existing script", "new_outline": "Continuation for the upcoming script"}
```

日本語訳

```js
システム: 現在あなたはドラマのシーンを指導するディレクターであると仮定します。このシーンのキャラクターと既存のスクリプトを考慮して、まずこれまでのプロットの概要を要約してください。その後、キャラクター間の関係と印象に基づいて、次のスクリプトの詳細な続きの部分を書いてください。現在のシーンと続きのプロットが指定されたプロット目標に従い、スクリプトの具体的な内容がキャラクターのイメージに関連するようにしてください。既存のスクリプトはプロット目標を部分的に達成しているかもしれません。プロット目標の要件に厳密に従い、既存のスクリプトを続けてプロットを徐々に発展させる必要があります。既存のスクリプトを無視したり、指定されたプロット目標を超えてプロットを作成したりしないよう注意してください。生成されたプロットガイダンスは、次に何が起こるかについて記述的であるべきであり、対話スクリプト形式を使用しないでください。既存のスクリプトで既に発生したイベントを含めず、プロット目標に到達する前にイベントを早急に生成しないでください。プロット内のキャラクターはシーンに存在する必要があります。既存のスクリプトを要約し、次のスクリプトの続き部分をJSON形式で提供してください。フォーマット例:
{"previous_outline": "既存のスクリプトの概要", "new_outline": "次のスクリプトの続き"}
```

**ディレクターが対話スクリプトを生成するプロンプト**

```js
System: Assuming you are currently a director, guiding a scene in a drama. Given the characters and the outline of the upcoming plot for this scene, please translate the upcoming plot outline into script format for up to {{num_lines}} lines, ensuring that it follows the storyline and seamlessly connects with the preceding script. You can gradually develop the script, enriching the details based on the upcoming plot outline. If you manage to cover all the outlined events before reaching {{num_lines}} lines, you can end your writing. Make sure your continuation smoothly integrates with the existing script. Use character dialogues to replace Narration wherever possible. You should output the script continuation in JSON format. Each line of the script includes the speaker "role" and his/her utterance "content". The speaker can only be chosen from Narration or one of the characters in the scene. Format example:
{"scripts": [{"role": "Speaker 1", "content": "..."}, {"role": "Speaker 2", "content": "..."}, {"role": "Narration", "content": "..."}, ...]}
```

日本語訳

```js
システム: 現在あなたはドラマのシーンを指導するディレクターであると仮定します。このシーンのキャラクターと次のプロットの概要を考慮して、次のプロットの概要を最大{{num_lines}}行のスクリプト形式に翻訳してください。ストーリーラインに従い、既存のスクリプトとシームレスに接続することを確認してください。スクリプトを徐々に発展させ、次のプロットの概要に基づいて詳細を豊かにしてください。すべての概説されたイベントを{{num_lines}}行に到達する前にカバーできた場合、あなたの執筆を終了することができます。継続部分が既存のスクリプトとスムーズに統合されることを確認してください。可能な限りナレーションをキャラクターの対話に置き換えてください。スクリプトの継続部分をJSON形式で出力してください。スクリプトの各行には、スピーカーの「役割」とその発言「内容」が含まれます。スピーカーはナレーションまたはこのシーンのキャラクターのいずれかを選択することしかできません。フォーマット例:
{"scripts": [{"role": "スピーカー1", "content": "..."}, {"role": "スピーカー2", "content": "..."}, {"role": "ナレーション", "content": "..."}, ...]}
```

**ディレクターがアクターに指示を与えるプロンプト**

```js
System: Assuming you are currently a director, guiding a scene in a drama. Given the characters, the plot objective of this scene and the existing script, please provide a brief synopsis of the upcoming line for the actor. However, do not directly provide the original script line. Then, use keywords to instruct the actor on how to role-play the character in the next line, so that the actor can play out the dialogue that fits the script, the characterization and the plot objective.
```

日本語訳

```js
システム: 現在あなたはドラマのシーンを指導するディレクターであると仮定します。このシーンのキャラクター、プロット目標、および既存のスクリプトを考慮して、アクターに対する次の行の簡単な概要を提供してください。ただし、元のスクリプトの行を直接提供しないでください。次に、アクターが次の行でキャラクターをどのように演じるかを指示するキーワードを使用してください。アクターがスクリプト、キャラクター設定、およびプロット目標に合った対話を演じることができるようにします。
```

### 俳優エージェント

俳優エージェントは、IBSENシステムの中で個々の登場人物を演じる役割を担う人工知能です。基本的な仕組みは人間らしい振る舞いをLLMにさせる手法と似ていますが、演劇のロールプレイングに特化するよう工夫されています。

俳優エージェントには、以下の3つの重要な要素があります。

1. 演じる登場人物の基本的な情報（名前、年齢、性格など）を持つ
2. キャラクターの過去の経験や出来事を保存することで一貫した性格や行動を維持する
3. 物語の中での他の登場人物との関係性（人間関係データベース）を記録する

上記の情報を使って、ディレクターエージェントと俳優エージェントは協力して、自然な対話や一貫性のあるストーリーを作り出します。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_6-696x1024.png)

対話ログの維持とメモリーデータベースの更新の例。過去の対話がポイントに要約され、メモリーデータベースに追加される様子

さらに、人間の思考プロセスを模倣するため、「モノローグ」という手法が採用されます。俳優エージェントが自分の役柄になりきって、一人称で考えたり話したりする方法です。より自然で人間らしい振る舞いを可能にします。

**俳優エージェントのプロンプト**

```js
System: Assuming you are currently an actor performing in a drama play. Your role is {{name}}.
Background of the drama script: {{background}}
Character description for {{name}}: {{description}}
Based on the information above, I will tell you the script that has unfolded so far in the play. Please role-play as {{name}} and respond with an appropriate line of the dialogue. Do not role-play other characters; generate only what your character would say. Avoid multi-turn responses; generate only the next line. Do not repeat the existing script. You can output only one line of text. A director will guide you on how to better embody your role. Consider the context, director’s guidance, your character’s image, memories, and impressions on others to generate the most fitting line of dialogue as an actor.

System: {{impressions}}
Related content in the memory of {{name}}: {{relevant_memories}}
**Instructions from the director:**
You are in the following plot: {{director_outline}}
Please follow the instructions below to play the role of {{name}}: {{instruction}}
If the instructions conflict with the memory of {{name}}, just follow the memory content.

User: {{dialogue_history}}
```

日本語訳

```js
システム: 現在あなたはドラマ劇の俳優として演じていると仮定します。あなたの役は{{name}}です。
ドラマスクリプトの背景: {{background}}
{{name}}のキャラクター説明: {{description}}
上記の情報に基づいて、これまでに展開されたスクリプトをお伝えします。{{name}}として役を演じ、適切な対話の一行を返答してください。他のキャラクターの役を演じないでください。次の行のみを生成し、複数の行を生成しないでください。既存のスクリプトを繰り返さないでください。一行のテキストのみを出力できます。ディレクターがあなたの役をよりよく体現する方法について指示します。コンテキスト、ディレクターの指示、あなたのキャラクターのイメージ、記憶、他者に対する印象を考慮して、俳優として最も適した対話の一行を生成してください。

システム: {{impressions}}
{{name}}の記憶に関連する内容: {{relevant_memories}}
**ディレクターからの指示:**
あなたは次のプロットにいます: {{director_outline}}
以下の指示に従って{{name}}の役を演じてください: {{instruction}}
指示が{{name}}の記憶と矛盾する場合は、記憶の内容に従ってください。

ユーザー: {{dialogue_history}}
```

### プレイヤーエージェント

IBSENシステムには、人間のプレイヤーが物語に直接参加できるように設計されています。人間は「プレイヤーエージェント」を操作することで、LLMが演じる他のキャラクターと自由にやりとりします。

プレイヤーエージェントの特徴は3つあります。

1. プレイヤーは、用意された台本に縛られることなく、好きなタイミングで自由に行動できる
2. プレイヤーの予期せぬ行動に対応するため、ディレクターエージェントが常に物語の流れを調整する
3. 人間の参加によって、あらかじめ決められた筋書きだけでなく、より柔軟で予想外の展開が生まれる可能性がある

プレイヤーエージェントがいることで人間の行動が物語に直接影響を与えつつも、全体の筋は維持されます。つまり予測不可能でありながらも一貫性のある物語が生み出されるようになります。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_7-1024x361.png)

ディレクターエージェントとシーン内のキャラクター間の対話的な連携を示すロードマップ。プレイヤーの行動に応じてストーリーラインが再生成される様子

## 実験

IBSENの評価のため、以下の設定で実験が行われました。

**脚本**

プロの演劇業界のライターに依頼し、ヘンリック・イプセンの「ヘッダ・ガブラー」を現代風にアレンジした新しい対話型ドラマシナリオが作成されました。主人公のヘッダ・ガブラーは、元恋人アイラート・レーヴボルグの死に関する記者会見を開く設定です。  
この脚本において、人間のプレイヤーは記者エドワード・ヘルソン役を演じます。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_13.png)

なおLLMの混乱を避けるため、登場人物の苗字が変更されました（例：ヘッダ・ガブラー→ヘッダ・ガイ）。脚本は複数のパートに分かれ、各パートには独自の設定とプロット目標があります。

**フロントエンド**

テキストベースのターミナルフロントエンドが構築されました。プレイヤーは基本的に劇の外の観客ですが、任意の幕に参加したり、現在の幕で発言したりすることができます。また、劇を一時停止してキャラクターにインタビューすることも可能です。

### 実験結果

評価にはGPT-3.5-turbo-1106が使用されました。LLMによる物語生成の評価は複雑なため、数値的分析と質的分析の両方が採用されています。

**基本的なストーリーライン生成**

実験では10個のドラマ脚本が生成されました。各ストーリーラインは5回のやりとりで脚本を作成し、物語の適切な展開を評価するため、5回目のやりとりから目標達成のチェックが開始されました。1つの目標に対して最大9回のやりとりが許可されています。

下記の表はIBSENによって生成されたストーリーラインとスクリプトのケーススタディを示します。強調された特徴を持つ内容が紫色でハイライトされています。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_10-1024x494.jpg)

下記の表は、実験で生成された10個の基本的な脚本の性能評価を示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_8.png)

10の基本生成スクリプトにおけるプロット目標の完全性、正確性、平均ストーリーラインのパフォーマンスの統計を示す

強制完了回数（Force completion）は少なく、多くの場合で自然に目標が達成されたことを意味します。

**目標達成**

全785回のやりとりが生成され、その大半が9回以内に目標を達成しました。目標未達成のケースは10%未満でした。目標達成の正確さを示す [F1スコア](https://ai-data-base.com/archives/26112 "F1スコア（F値）") は0.77となり、一定の成功を示しましたが、複雑な場面では目標のチェックに失敗する傾向が見られました。

**ストーリーラインの妥当性**

ChatGPTを使用して、物語の論理性、一貫性、キャラクターの一貫性を1〜4点で評価しました。全ての項目で平均以上（2.5点以上）のスコアを獲得し、中でも物語の一貫性では3.63という高得点を記録しました。

**成功例と失敗例の分析**

クリエイターの意図に沿った優れた対話脚本が生成される一方で、キャラクターの発言の繰り返しやナレーションの過剰使用、ネガティブな出来事を過度に前向きに捉えるなどの問題点も明らかになりました。

**プレイヤー参加型の生成**

記者エドワード・ヘルソン役として人間が5回参加する実験が行われました。プレイヤーの行動が少ない場合はAIが物語の目標を達成できましたが、行動が多い場合は目標達成が困難になりました。プレイヤーの参加によりLLMキャラクターの行動や物語の展開が大きく変化することも観察されました。

### システム構成要素の重要性検証

ディレクターの指示やキャラクターの一人称思考（モノローグ）を除いた場合の影響が調査されました。これらの要素を除くと物語の品質が低下し、完全なIBSENシステムが最も高品質な物語を生成できることが確認されました。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73294_12.png)

IBSENの各コンポーネントがストーリーラインのパフォーマンスに与える影響を示す。指示なしとモノローグなしの場合と比較

実験全体を通じて、本手法は制御可能な脚本を生成でき、人間プレイヤーの参加にも柔軟に対応できることが示されました。ただし、今後の改善点として繰り返しや不自然な反応などが存在することが明らかになりました。

## まとめ

本記事では、脚本生成に関する新しい手法の研究を紹介しました。ディレクターエージェントと俳優エージェントを組み合わせることで、プロットの作成と自然な対話生成を両立させる手法が提案されています。

実験では、プロット目標の達成やストーリーラインの一貫性において良好な結果が得られ、人間のプレイヤーが参加可能な対話型シナリオ生成も実現されました。

研究者らは今後、より没入感のあるプロットの実現を目指しています。

- 参照論文URL： [https://arxiv.org/abs/2407.01093](https://arxiv.org/abs/2407.01093)
- コード： [https://github.com/OpenDFM/ibsen](https://github.com/OpenDFM/ibsen)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMの作るストーリーは人間のクリエイティブとどう異なるか](https://ai-data-base.com/archives/73268)

[LLMによるText to SQL（SQLクエリ生成）の現状まとめ](https://ai-data-base.com/archives/73368)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)