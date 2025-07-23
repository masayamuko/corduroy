---
title: "『LLM-as-a-judge』のさまざまな応用と分野の展望"
source: "https://ai-data-base.com/archives/79535"
author:
  - "[[AIDB Research]]"
published: 2024-11-29
created: 2025-06-13
description: "AI分野では、テキストの品質評価が大きな課題です。従来の評価指標は限界があり、LLMを使った新たな評価法が登場しましたが、まだ課題も残ります。そこで研究者たちは、LLM評価を詳しく調査し、その応用、ベンチマーク、今後の展望をまとめました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

AI分野では、テキストの品質評価が大きな課題です。従来の評価指標は限界があり、LLMを使った新たな評価法が登場しましたが、まだ課題も残ります。そこで研究者たちは、LLM評価を詳しく調査し、その応用、ベンチマーク、今後の展望をまとめました。

本記事では [前回の記事](https://ai-data-base.com/archives/79428) と併せて、そんなLLM-as-a-judgeの調査結果を紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79535-1024x576.jpg)

**参照論文情報**

- タイトル：From Generation to Judgment: Opportunities and Challenges of LLM-as-a-judge
- 著者：Dawei Li, Bohan Jiang, Liangjie Huang, Alimohammad Beigi, Chengshuai Zhao, Zhen Tan, A [mri](https://ai-data-base.com/archives/26447 "磁気共鳴画像（MRI）") ta Bhattacharjee, Yuxuan Jiang, Canyu Chen, Tianhao Wu, Kai Shu, Lu Cheng, Huan Liu
- 所属：Arizona State University, University of Illinois Chicago, University of Maryland, Baltimore County, Illinois Institute of Technology, University of California, Berkeley, Emory University

## 背景

AIや [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") の分野では、テキストの品質などをどう評価するかが常に課題です。

従来は、BLEUやROUGEといった単語の重なりを見る指標が一般的でしたが、これらは融通が利かない、正解が複数ある場合に対応できないといった問題がありました。意味を捉える評価手法も登場しましたが、まだ課題は残っています。

そんな中、LLMの進歩により、LLM自身を評価に使う「LLM-as-a-judge」という新しい方法が出てきました。これは従来の評価の限界を突破し、より細かく正確な評価ができると期待されています。

しかし、LLMを使った評価にも、偏りや間違いやすさといった課題があります。そんな状況を鑑みて、今回研究者たちは、LLMを使った評価技術を詳しく調べて状況を整理しました。

[前回の記事](https://ai-data-base.com/archives/79428) では、「LLM-as-a-judgeの基本概念」「LLM-as-a-judgeは何を評価できるのか」「LLM-as-a-judgeを行う際の方法論」について紹介しました。

以下では「さまざまな応用」「ベンチマーク」「LLM-as-a-judge分野の今後」について整理していきます。

## さまざまな応用

LLM-as-a-judgeは、初めは評価目的で提案されましたが、その適用範囲は大きく拡大され、アラインメント、検索、推論など様々なシーンで活用されています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79428_8-1024x789.png)

### ”評価”における応用

#### （１）オープンエンド生成タスク

オープンエンド生成とは、対話応答の生成、要約、ストーリー生成、クリエイティブライティングなど、安全性、正確性、文脈との関連性が求められながらも、単一の「正解」が存在しないタスクを指します。従来の指標ベースの評価手法とは異なり、LLLM-as-a-judgeは、より柔軟で適応性の高い、そしてカスタマイズ可能な評価が実現できます。

実際の応用では、単一のモデルの出力を評価する場合と、複数のモデルの出力を競争的に比較する場合の両方が活用されています。

例えば、ChatGPTを活用して要約の人間らしい評価が実現された事例があります。また、複数の役割を演じるLLMを活用して、特定の側面における要約の品質を評価し、その評価結果を生成する比較ベースのフレームワークも提案されています。

現代のLLMは詳細で長文の応答を生成できる一方で、出力が長くなるほどハルシネーション（幻覚）の可能性も高まります。この現象をより深く理解するため、GPT-4を活用して生成された出力に論理的な構造を持つ非合理的な説明が含まれているかどうかを判断する評価手法も考案されました。また、批評ベースの判定システムにより、関連する証拠を選択して詳細な批評を提供することでハルシネーションを評価している事例もあります。

#### （２）推論タスク

推論タスクの評価においては、LLMの中間的な思考過程と最終的な回答が重視されます。最近では、人間のような段階的な思考過程を評価するために、LLMを評価者として活用する研究が増加しています。

例えば数学的推論タスクでは、問題解決過程における推論ステップの品質を評価するために、特別な評価用LLMを活用した自動評価フレームワークが考案されました。

また、LLMを評価者として活用する手法は、時間的推論のような複雑なタスクにも応用されています。LLMの時間的推論能力を様々なシナリオで評価するための合成データセットも構築され、シーケンス、因果関係、時系列に沿ったイベント間の依存関係に関する推論能力の評価が可能になっています。

しかし、LLMが深い論理的理解に基づいて推論しているのか、単にパターンを記憶しているのかを判断することは困難です。この問題に対処するため、LLMとユーザーが特定の質問に対して異なる立場を取り、正しい結論に達するまで議論する対話形式のフレームワークや、学術的な査読プロセスを模倣し、LLMを評価者として協調的なレビューに参加させるマルチエージェント評価フレームワークが提案されています。

#### （３）新しく登場したタスク

LLMの能力が急速に進化するにつれ、これまで人間にしかできないと考えられていたタスクにもLLMが活用されるようになってきました。注目すべき分野として、社会的知性の評価が挙げられます。文化的価値観、倫理的原則、潜在的な社会的影響を理解する必要がある複雑な社会シナリオにLLMを適用するものです。

社会的知性の評価においては、LLMは学術的な問題解決能力と比較して、未だ大きな差があることが明らかになっています。このギャップを詳細に分析するため、SOTOPIAとSOTOPIA-EVALという評価フレームワークが開発されました。LLMエージェント間の複雑な社会的相互作用をシミュレートし、GPT-4を人間の判断の代理として活用することで、目標達成、財務管理、シミュレーションされた相互作用における関係性の維持などを評価することを可能とするものです。

参考： [人間とGPT-4の社会的知能を測定するツール『SOTOPIA』登場　GPT-4は秘密を守る力で人間より優れるとの結果も](https://ai-data-base.com/archives/57932) （AIDB）

また、大規模マルチモーダルモデル（LMM）や大規模視覚言語モデル（LVLM）の評価にも注目が集まっています。マルチモーダルモデルの性能評価では、最終的なスコアだけでなく、評価の根拠となる理由付けも提供することで、透明性と一貫性を促進する取り組みが行われています。自動運転のコーナーケースに焦点を当てた初のベンチマークでは、LLMをジャッジとして行われた評価が、LVLMをジャッジとして行われた評価よりも人間の評価により近い結果を示すことが明らかになりました。

さらに最近では、コード理解、法的知識、ゲーム開発、海洋科学、医療会話、討論判定など、より専門的な領域でもLLMをジャッジとして活用する取り組みが見られます。このように、LLMをジャッジとして活用できる範囲は多様な専門分野へと急速に広がっています。

参照文献

- [Oceangpt: A Large Language Model for Ocean Science Tasks.](https://arxiv.org/pdf/2310.02031)*Bi et al.* ArXiv preprint (2023).
- [Lawbench: Benchmarking Legal Knowledge of Large Language Models.](https://arxiv.org/pdf/2309.16289)*Fei et al.* ArXiv preprint (2023).
- [Sotopia: Interactive Evaluation for Social Intelligence in Language Agents.](https://arxiv.org/pdf/2310.11667)*Zhou et al.* ArXiv preprint (2023).
- [Can ChatGPT Defend its Belief in Truth? Evaluating LLM Reasoning via Debate.](https://arxiv.org/pdf/2305.13160)*Wang et al.* Findings of the Association for Computational Linguistics: EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 2023 (2023).
- [On Evaluating the Integration of Reasoning and Action in LLM Agents with Database Question Answering.](https://arxiv.org/pdf/2311.09721)*Nan et al.* Findings of the Association for Computational Linguistics: NAACL 2024 (2024).
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena.](https://proceedings.neurips.cc/paper_files/paper/2023/file/91f18a1287b398d378ef22505bf41832-Paper-Datasets_and_Benchmarks.pdf)*Zheng et al.* NeurIPS (2023).
- [Human-like Summarization Evaluation with ChatGPT.](https://arxiv.org/pdf/2304.02554)*Gao et al.* ArXiv preprint (2023).
- [Large Language Models Are Diverse Role-Players for Summarization Evaluation.](https://arxiv.org/pdf/2303.15078)*Wu et al.* CCF International Conference on Natural Language Processing and Chinese Computing (2023).
- [Evaluating Hallucinations in Chinese Large Language Models.](https://arxiv.org/pdf/2310.03368)*Cheng et al.* ArXiv preprint (2023).
- [LLM-Eval: Unified Multi-Dimensional Automatic Evaluation for Open-Domain Conversations with Large Language Models.](https://arxiv.org/pdf/2305.13711)*Lin et al.*[NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 4ConvAI (2023).
- [Beyond Accuracy: Evaluating the Reasoning Behavior of Large Language Models – A Survey.](https://arxiv.org/pdf/2404.01869)*Mondorf et al.* ArXiv preprint (2024).
- [Reference-Guided Verdict: LLMs-as-Judges in Automatic Evaluation of Free-Form Text.](https://arxiv.org/pdf/2408.09235)*Badshah et al.* ArXiv preprint (2024).
- [Benchmarking Foundation Models with Language-Model-as-an-Examiner.](https://proceedings.neurips.cc/paper_files/paper/2023/file/f64e55d03e2fe61aa4114e49cb654acb-Paper-Datasets_and_Benchmarks.pdf)*Bai et al.* NeurIPS (2023).
- [Decoding Biases: Automated Methods and LLM Judges for Gender Bias Detection in Language Models.](https://arxiv.org/pdf/2408.03907)*Kumar et al.* ArXiv preprint (2024).
- [Halu-J: Critique-Based Hallucination Judge.](https://arxiv.org/pdf/2407.12943)*Wang et al.* ArXiv preprint (2024).
- [Salad-Bench: A Hierarchical and Comprehensive Safety Benchmark for Large Language Models.](https://arxiv.org/pdf/2402.05044)*Li et al.* ArXiv preprint (2024).
- [Sorry-Bench: Systematically Evaluating Large Language Model Safety Refusal Behaviors.](https://arxiv.org/pdf/2406.14598)*Xie et al.* ArXiv preprint (2024).
- [ChatEval: Towards Better LLM-Based Evaluators Through Multi-Agent Debate.](https://openreview.net/pdf?id=FQepisCUWu)*Chan et al.* ICLR (2023).
- [Evaluating the Performance of Large Language Models via Debates.](https://arxiv.org/pdf/2406.11044)*Moniri et al.* ArXiv preprint (2024).
- [Evaluating Mathematical Reasoning Beyond Accuracy.](https://arxiv.org/pdf/2404.05692)*Xia et al.* ArXiv preprint (2024).
- [Test of Time: A Benchmark for Evaluating LLMs on Temporal Reasoning.](https://arxiv.org/pdf/2406.09170)*Fatemi et al.* ArXiv preprint (2024).
- [LogicBench: Towards Systematic Evaluation of Logical Reasoning Ability of Large Language Models.](https://aclanthology.org/2024.acl-long.739.pdf)*Parmar et al.* ACL (2024).
- [Academically Intelligent LLMs Are Not Necessarily Socially Intelligent.](https://arxiv.org/pdf/2403.06591)*Xu et al.* ArXiv preprint (2024).
- [LLaVA-Critic: Learning to Evaluate Multimodal Models.](https://arxiv.org/pdf/2410.02712)*Xiong et al.* ArXiv preprint (2024).
- [Automated Evaluation of Large Vision-Language Models on Self-Driving Corner Cases.](https://arxiv.org/pdf/2404.10595)*Chen et al.* ArXiv preprint (2024).
- [CodeJudge-Eval: A Benchmark for Evaluating Code Generation.](https://arxiv.org/pdf/2408.10718)*Zhao et al.* ArXiv preprint (2024).
- [Prompt-Gaming: A Pilot Study on LLM-Evaluating Agent in a Meaningful Energy Game.](https://www.alspereira.info/wp-content/uploads/2024/03/CHI-2024.pdf)*Isaza-Giraldo et al.* CHI (2024).
- [HealthQ: Unveiling Questioning Capabilities of LLM Chains in Healthcare Conversations.](https://arxiv.org/pdf/2409.19487)*Wang et al.* ArXiv preprint (2024).

### ”アライメント”における応用

アライメント調整（アライメントチューニング）というのは、LLMを人間の選好や価値観に合わせて調整する重要な技術です。その中では、報酬モデリングやダイレクト選好学習のための高品質なデータを人間から収集することが不可欠です。最近は、アライメントの自動化においてもLLM-as-a-judgeが一役買っています。

#### （１）より大規模なモデルをジャッジとして活用

直感的なアプローチの一つとして、「より大規模で強力なLLMを活用して、小規模で能力の劣るモデルを導く」というものがあります。事前学習済み言語モデルの選好に基づく人工的な選好データを用いて報酬モデルを訓練し、小型モデルの無害化を行おうというものです

興味深いことに、RLAIFという手法では、Judge LLMが十分に強力でない場合でも、RLHFと同等の性能を達成できることが示されています。また、DIRECT-RLAIFという手法も提案されており、既製のLLMをジャッジモデルとして直接活用することで、報酬モデルの陳腐化を緩和することが可能になっています。

また、LLMが不正な方法で高い報酬を得ようとする「報酬ハッキング」を防ぐために、人間が作ったようなデータで訓練された特別なLLMが開発されています。このLLMを使うことで、LLMが人間の価値観に合うように調整できるようになりました。また、LLMからのフィードバックを直接使ってLLMを訓練する新しい方法も導入されています。

より良いLLMを作るために、複数のLLMを協力させる方法も開発されています。例えば、様々な得意分野を持つLLMを評価者として使い、協力してLLMを訓練するためのデータを作る方法があります。また、複数のLLM同士で議論させ、その結果を元に、より良いLLMを作る方法も提案されています。

特定の分野では、既にこれらの技術が応用されています。例えば、プログラムコードを扱うLLMを訓練するために、LLMを評価者として使って作られたデータセットがあります。また、知識の量と質のバランスを取るために、GPT-4を評価者として使い、LLMを訓練する方法も提案されています。

#### （２）自己判断

LLM自身を評価者として使い、その評価結果を元にLLM自身を改善する研究が進んでいます。LLM自身を評価者として使うことで、比較用のデータを作ることができ、LLMの質を向上させることができます。

また、LLMの評価能力自体を向上させるためのフィードバックを活用する手法も開発されており、LLMが人間の指示にうまく従えるようになることが分かっています。

LLMの訓練に使う合成データの質を上げるために、複数の選択肢の中から最も良いものと最も悪いものを選んで学習する手法や、1つのLLMに評価者と回答生成の両方の役割をさせる手法も開発されています。さらに、LLMが自分で質の低い回答を却下する仕組みも有効性が確認されています。

なお、特定の分野に特化したLLMの改善も進んでいます。例えばロボット工学の分野では、LLMに複数の回答を作らせて自分でランキングを付けさせ、その情報を使ってロボットの動きを学習させることで、人間が細かく指示しなくても効率的に学習できるようになりました。また、画像やテキストなど複数の情報を扱う分野では、LLMに自分の回答を振り返らせて評価させることで、回答の質と評価能力の両方を向上させる手法が開発されています。

参照文献

- [Constitutional AI: Harmlessness from AI Feedback.](https://arxiv.org/pdf/2212.08073.pdf?trk=public_post_comment-text)*Bai et al.* ArXiv preprint (2022).
- [RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback.](https://openreview.net/pdf?id=AAxIs3D2ZZ)*Lee et al.* ArXiv preprint (2023).
- [SALMON: Self-Alignment with Instructable Reward Models.](https://openreview.net/pdf?id=xJbsmB8UMx)*Sun et al.* ICLR (2024).
- [Direct Language Model Alignment from Online AI Feedback.](https://arxiv.org/pdf/2402.04792.pdf?utm_source=fbia)*Guo et al.* ArXiv preprint (2024).
- [The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation.](https://arxiv.org/pdf/2408.08688?)*Arif et al.* ArXiv preprint (2024).
- [CoEvol: Constructing Better Responses for Instruction Finetuning Through Multi-Agent Cooperation.](https://arxiv.org/pdf/2406.07054)*Li et al.* ArXiv preprint (2024).
- [Self-Rewarding Language Models.](http://readwise-assets.s3.amazonaws.com/media/wisereads/articles/self-rewarding-language-models/2401.10020.pdf)*Yuan et al.* ArXiv preprint (2024).
- [Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge.](https://www.rivista.ai/wp-content/uploads/2024/10/2407.19594v2.pdf)*Wu et al.* ArXiv preprint (2024).
- [West-of-N: Synthetic Preference Generation for Improved Reward Modeling.](https://arxiv.org/pdf/2401.12086)*Pace et al.* ArXiv preprint (2024).
- [Aligning Large Language Models by On-Policy Self-Judgment.](https://arxiv.org/pdf/2402.11253)*Lee et al.* ArXiv preprint (2024).
- [Optimizing Language Model’s Reasoning Abilities with Weak Supervision.](https://arxiv.org/pdf/2405.04086)*Tong et al.* ArXiv preprint (2024).
- [Online Self-Preferring Language Models.](https://arxiv.org/pdf/2405.14103)*Zhai et al.* ArXiv preprint (2024).
- [Meta Ranking: Less Capable Language Models Are Capable for Single Response Judgment.](https://arxiv.org/pdf/2402.12146)*Liu et al.* ArXiv preprint (2024).
- [I-SHEEP: Self-Alignment of LLM from Scratch Through an Iterative Self-Enhancement Paradigm.](https://arxiv.org/pdf/2408.08072?)*Liang et al.* ArXiv preprint (2024).
- [Self-Alignment for Factuality: Mitigating Hallucinations in LLMs via Self-Evaluation.](https://arxiv.org/pdf/2402.09267)*Zhang et al.* ArXiv preprint (2024).
- [Learning Reward for Robot Skills Using Large Language Models via Self-Alignment.](https://arxiv.org/pdf/2405.07162)*Zeng et al.* ArXiv preprint (2024).
- [i-SRT: Aligning Large Multimodal Models for Videos by Iterative Self-Retrospective Judgment.](https://arxiv.org/pdf/2406.11280)*Ahn et al.* ArXiv preprint (2024).
- [CodeUltraFeedback: An LLM-as-a-Judge Dataset for Aligning Large Language Models to Coding Preferences.](https://arxiv.org/pdf/2403.09032)*Weyssow et al.* ArXiv preprint (2024).

### ”検索”における応用

検索システムにおいてLLM-as-a-judgeを活用する取り組みは、2つの大きな領域で進められています。

1つは従来型の文書ランキング、もう1つはRAGです。

#### （１）従来型の検索

最近の研究では、LLMを活用して文書の関連性を評価する手法が注目を集めています。複数の文書を関連性の高い順に並べ替えるよう、LLMに指示を出すという方法です。

この手法をさらに発展させ、LLMに対する指示（プロンプト）の中に、より詳細な関連性の基準を組み込む工夫も行われています。すると、LLMは文書間の微妙な関連性の違いを見分けられるようになり、より精度の高い順位付けが可能になります。

大規模な文書リストを扱う場合の新しい手法として、Listwise Reranker with a Large Language Model（LRL）が開発されています。特徴は、特別な訓練データを必要とせずに、文書の識別子を直接並び替えられる点です。また、計算効率を重視した「Setwise方式」と呼ばれる手法も提案されており、LLMの処理回数やトークン使用量を抑えながら、高品質なランキングを実現しています。

また、文書リストの順位付けには「位置バイアス」という課題がありました。同じ文書でも、リストのどの位置に置かれるかによって評価が変わってしまう問題です。この課題に対して、複数の異なる順序で評価を行い、その平均を取ることで、より公平な評価を実現する手法が開発されています。

さらに、特定の専門分野での活用も進んでいます。例えば、法律分野の情報検索では、LLMを活用して専門家の判断プロセスを段階的に模倣する手法が開発されました。法的文書の関連性をより正確に評価できるようになっています。

推薦システムの分野でも、LLMの活用が進んでいます。ユーザーの過去の行動履歴を考慮しながら、最適なアイテムを推薦する手法が開発されています。この際、LLMが持つ偏り（人気のあるアイテムや上位に表示されたアイテムを優先しがちな傾向）を補正するための工夫も行われています。

#### （２）RAG

RAGシステムにおいても、LLM-as-a-judgeの取り組みが進展しています。以下の3つの重要な方向性で進化しています。

**自己評価と改善の仕組み  
**RAGシステムに自己評価と改善の機能を組み込む試みが注目を集めています。注釈付きデータセットやパラメータの調整を必要としない手法が開発され、システムが自律的に性能を向上させることが可能になっています。  
特に、2段階の自己内省モデルという考え方が画期的です。まず第1段階で、システムは高い確信度で推論を行い、その結果をメモリとして蓄積します。続く第2段階では、新しい質問に対して、蓄積されたメモリの中から最も関連性の高い情報を選択して活用します。

**統合型 [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") の実現  
**情報検索機能を単一のLLMに統合する試みも進んでいます。自然言語による索引付けを採用することで、外部システムに依存せず、文書の生成から検索、自己評価までを一貫して処理できるようになっています。  
特筆すべき点は、「リフレクショントークン」と呼ばれる革新的な技術で、システムは状況に応じて応答を動的に調整し、より質の高い、事実に即した情報提供が可能になっています。

**実用的な応用展開  
**質問応答システムの分野では、実際のユーザー対話から生成された評価用クエリを活用する手法が確立されています。自動化された評価システムにより、RAGエージェントの性能を客観的に比較することが可能になっています。  
さらに、オープンドメインでの質問応答において、LLMは情報の「関連性」と「有用性」を効果的に区別できることが実証されています。注目すべきは、予期せぬ入力に対しても適切に対応できる高い適応性を示している点です。

参照文献

- [Is ChatGPT Good at Search? Investigating Large Language Models as Re-Ranking Agents.](https://arxiv.org/pdf/2304.09542)*Sun et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2023).
- [Large Language Models Can Accurately Predict Searcher Preferences.](https://dl.acm.org/doi/pdf/10.1145/3626772.3657707)*Thomas et al.* ArXiv preprint (2023).
- [Zero-Shot Listwise Document Reranking with a Large Language Model.](https://arxiv.org/pdf/2305.02156)*Ma et al.* ArXiv preprint (2023).
- [Found in the Middle: Permutation Self-Consistency Improves Listwise Ranking in Large Language Models.](https://arxiv.org/pdf/2310.07712)*Tang et al.* NAACL (2024).
- [Large Language Models Are Effective Text Rankers with Pairwise Ranking Prompting.](https://arxiv.org/pdf/2306.17563)*Qin et al.* NAACL (2024).
- [Leveraging Large Language Models for Relevance Judgments in Legal Case Retrieval.](https://arxiv.org/pdf/2403.18405)*Ma et al.* ArXiv preprint (2024).
- [Large Language Models Are Zero-Shot Rankers for Recommender Systems.](https://arxiv.org/pdf/2305.08845)*Hou et al.* ECIR (2024).
- [MoT: Memory-of-Thought Enables ChatGPT to Self-Improve.](https://arxiv.org/pdf/2305.05181)*Li et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2023).
- [Self-Retrieval: Building an Information Retrieval System with One Large Language Model.](https://arxiv.org/pdf/2403.00801)*Tang et al.* ArXiv preprint (2024).
- [Self-RAG: Learning to Retrieve, Generate, and Critique Through Self-Reflection.](https://arxiv.org/pdf/2310.11511)*Asai et al.* ICLR (2024).
- [Beyond Yes and No: Improving Zero-Shot LLM Rankers via Scoring Fine-Grained Relevance Labels.](https://arxiv.org/pdf/2310.14122)*Zhuang et al.* NAACL (2024).
- [Evaluating RAG-Fusion with RAGELO: An Automated ELO-Based Framework.](https://arxiv.org/pdf/2406.14783)*Rack [auc](https://ai-data-base.com/archives/26250 "AUC") kas et al.* ArXiv preprint (2024).
- [Are Large Language Models Good at Utility Judgments?](https://dl.acm.org/doi/pdf/10.1145/3626772.3657784)*Zhang et al.* SIGIR (2024).
- [BioRAG: A RAG-LLM Framework for Biological Question Reasoning.](https://arxiv.org/pdf/2408.01107)*Wang et al.* ArXiv preprint (2024).
- [DALK: Dynamic Co-Augmentation of LLMs and KG to Answer Alzheimer’s Disease Questions with Scientific Literature.](https://arxiv.org/pdf/2409.13731)*Li et al.* ArXiv preprint (2024).
- [Improving Medical Reasoning Through Retrieval and Self-Reflection with Retrieval-Augmented Large Language Models.](https://academic.oup.com/bioinformatics/article-pdf/40/Supplement_1/i119/58355028/btae238.pdf)*Jeong et al.* Bioinformatics (2024).
- [A Setwise Approach for Effective and Highly Efficient Zero-Shot Ranking with Large Language Models.](https://dl.acm.org/doi/pdf/10.1145/3626772.3657813)*Zhuang et al.* SIGIR (2024).
- [LLMs Are Biased Evaluators but Not Biased for Retrieval-Augmented Generation.](https://arxiv.org/pdf/2410.20833)*Chen et al.* ArXiv preprint (2024).

### ”推論”における応用

LLMの推論能力を解き放つことは、スケーリング則の限界を克服する一つの方法として注目されています。推論はLLMにとって極めて重要な側面であり、複雑な問題解決、意思決定、正確でコンテキストを考慮した応答の提供に直接的な影響を与えます。最近では、LLMの推論能力に関する多くの研究が、推論パスの選択とツールの活用という2つの観点からLLM-as-a-judgeに焦点を当てています。

#### （１）推論パスの選択

LLMに段階的な思考プロセスを生成させるChain-of-Thought（CoT）プロンプティングという方法が登場し、より複雑な思考方法も提案されています。しかし、LLMがどの思考プロセスを辿るべきか、適切な道筋を選ぶことが重要になっています。この問題を解決するために、LLMを評価者として活用する様々なアプローチが開発されています。

思考過程の選択に焦点を当てた研究では、REPSという手法が開発されました。これは、LLM同士で2つの思考プロセスを比較し、どちらが良いかを選ばせることで、より良い思考プロセスを見つけ出し、そのデータを使ってLLMを訓練する方法です。また、LLMが多様な考え方を持っているかどうかの研究も行われており、LLMが多様性の概念を理解し、多様性に欠ける部分を指摘できることが分かっています。

複数のLLMを協力させるフレームワークでは、マルチエージェントディベート（MAD）という新しい方法が提案されています。複数のLLMに議論させ、最後に評価者LLMが最も良い回答を選ぶというものです。また、階層的な構造を持つ協力体制において、評価者LLMが質の高い回答を選ぶ役割を担うことで、システム全体の効率を大幅に向上できることも示されています。

#### （２）外部ツールを活用した推論

ツールを使うLLMとしてAuto-GPTが開発され、LLMを評価者として使うことで、より正確な情報を提供できることが示されました。外部のツールを使うことで、LLMは様々なことができるようになり、計画を立てる能力も向上します。  
また、自動運転のような複雑な状況で、人間の常識的な判断が必要な時にLLMを活用する研究も進んでいます。

しかし、どのLLMやツールを使うかの選択は、性能とコストのバランスを考える必要があります。高性能なLLMは効果的ですが高価であり、性能が低いLLMは安価ですが、できることが限られています。この問題を解決するために、状況に応じて高性能なLLMとそうでないLLMを使い分けるルーティングモデルが提案されています。また、DiffAgentという、ユーザーの指示に合わせて最適なテキスト生成ツールを選ぶエージェントも開発されました。DiffAgentの判断は人間の好みと近く、従来の方法よりも優れていることが示されています。

参照文献

- [ReAct: Synergizing Reasoning and Acting in Language Models.](https://arxiv.org/pdf/2210.03629)*Yao et al.* ICLR (2023).
- [Selection-Inference: Exploiting Large Language Models for Interpretable Logical Reasoning.](https://arxiv.org/pdf/2205.09712)*Creswell et al.* ICLR (2023).
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models.](https://proceedings.neurips.cc/paper_files/paper/2022/file/9d5609613524ecf4f15af0f7b31abca4-Paper-Conference.pdf)*Wei et al.* NeurIPS (2022).
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models.](https://proceedings.neurips.cc/paper_files/paper/2023/file/271db9922b8d1f4dd7aaef84ed5ac703-Paper-Conference.pdf)*Yao et al.* NeurIPS (2023).
- [Auto-GPT for Online Decision Making: Benchmarks and Additional Opinions.](https://arxiv.org/pdf/2306.02224)*Yang et al.* ArXiv preprint (2023).
- [LanguageMPC: Large Language Models as Decision Makers for Autonomous Driving.](https://arxiv.org/pdf/2310.03026)*Sha et al.* ArXiv preprint (2023).
- [Reasoning with Language Model is Planning with World Model.](https://arxiv.org/pdf/2305.14992)*Hao et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2023).
- [Self-Discover: Large Language Models Self-Compose Reasoning Structures.](https://arxiv.org/pdf/2402.03620)*Zhou et al.* ArXiv preprint (2024).
- [Improving Diversity of Demographic Representation in Large Language Models via Collective-Critiques and Self-Voting.](https://arxiv.org/pdf/2310.16523)*Lahoti et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2023).
- [Encouraging Divergent Thinking in Large Language Models Through Multi-Agent Debate.](https://arxiv.org/pdf/2305.19118)*Liang et al.* ArXiv preprint (2023).
- [SMoA: Improving Multi-Agent Large Language Models with Sparse Mixture-of-Agents.](https://arxiv.org/pdf/2411.03284)*Li et al.* ArXiv preprint (2024).
- [Graph of Thoughts: Solving Elaborate Problems with Large Language Models.](https://ojs.aaai.org/index.php/AAAI/article/view/29720/31236)*Besta et al.* AAAI (2024).
- [RouteLLM: Learning to Route LLMs with Preference Data.](https://arxiv.org/abs/2406.18665v2?&target=_blank)*Ong et al.* ArXiv preprint (2024).
- [DiffAgent: Fast and Accurate Text-to-Image API Selection with Large Language Model.](https://openaccess.thecvf.com/content/CVPR2024/papers/Zhao_DiffAgent_Fast_and_Accurate_Text-to-Image_API_Selection_with_Large_Language_CVPR_2024_paper.pdf)*Zhao et al.* CVPR (2024).
- [Rationale-Aware Answer Verification by Pairwise Self-Evaluation.](https://arxiv.org/pdf/2410.04838)*Kawabata et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2024).
- [Improving Model Factuality with Fine-Grained Critique-Based Evaluator.](https://arxiv.org/pdf/2410.18359)*Xie et al.* ArXiv preprint (2024).
- [Let’s Verify Step by Step.](https://arxiv.org/pdf/2305.20050.pdf?trk=public_post_comment-text)*Lightman et al.* ArXiv preprint (2023).
- [RAIN: Your Language Models Can Align Themselves Without Finetuning.](https://arxiv.org/pdf/2309.07124)*Li et al.* ICLR (2024).
- [Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning.](https://arxiv.org/pdf/2410.08146?)*Setlur et al.* ArXiv preprint (2024).

## 評価用ベンチマーク

LLM-as-a-judgeの性能を評価するためには、目的に応じたベンチマークが必要です。下の表ではベンチマークと各種データセットを網羅的にまとめられています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79428_9-1024x612.png)

### 全般的な性能評価

LLMの総合的な能力を測定することを目的とする場合は主に人間の判断との一致度、正確性、相関性などを測定します。代表的なベンチマークには以下のものがあります。

**MT-BenchとChatbot Arena  
**会話の一貫性、バイアス、エラーなどを評価します。さらに、位置バイアスや冗長性、自己誇張の傾向なども詳細に分析します。

**JUDGE-BENCH、DHP、SOS-BENCH  
**より大規模なスケールで評価を行い、Cohen’s kappaやDiscernment Score、 [正規化](https://ai-data-base.com/archives/26401 "正規化") された正確性などの指標を用いてLLMの全般的な性能を測定します。

**LLM-judge-eval  
**要約やアラインメントなどのタスクを評価し、フリッピングノイズ（判断の不安定性）や長さバイアスなどの追加指標も考慮します。

### バイアスの定量化

LLMの判断における公平性と信頼性を確保することが重要です。そのため、バイアスを定量化しなければいけません。EVALBIAS-BENCHやCALMなどのベンチマークは、アラインメントから生じるバイアスや、敵対的な条件下での頑健性を明示的に評価します。また、一部のベンチマークでは、質問応答タスクにおける位置バイアスや一致率などの指標も測定しています。

### 難しいタスクへの対応力

LLMの評価能力の限界を探るため、特に難しいタスクに焦点を当てたベンチマークも開発されています。例えば、以下があります。

**Arena-Hard AutoとJudgeBench  
**会話型質問応答や様々な推論タスクにおいて、特に難しい問題を選別して評価を行います。

**CALM  
**アラインメントと難しいシナリオに焦点を当て、分離可能性、一致度、改変された精度などの指標を用いて、手動で特定された難しいデータセットにおける性能を評価します。

### その他の評価

ベンチマークには、以下のような追加の評価次元も含まれています。

**MLLM-as-a-judge  
**複数のデータモダリティを扱うタスクに対応し、人間の判断との一致度、採点分析、幻覚検出などを評価します。

**MM-EVALやKUDGE  
**多言語および非英語での性能を評価し、精度や相関性を特に困難なシナリオで測定します。

また、特定の評価指示にLLMがどの程度従えるかを、相関指標を用いて定量化するケースもあります。

## LLM-as-a-judge分野の今後

LLM-as-a-judgeの研究分野には、克服すべき重要な課題と将来の研究への期待があります。

まず、LLMのバイアスと脆弱性への対処が不可欠です。LLMは、訓練データに起因する人種、性別、宗教などに関する社会的バイアスや、候補の提示順序、自己の生成した出力を優遇する評価特有のバイアスを持つ可能性があります。また、文章の長さが評価に影響を与える長さバイアスも存在します。これらの問題に対しては、RAGフレームワークの利用、バイアスを軽減したデータセットの導入、そしてLLM-as-a-judgeの利用に特化して調整されたLLMの開発が有望な解決策となります。

次に、動的で複雑な判断への対応も重要です。従来の静的な評価から、より高度な判断プロセスへと移行する必要があり、「LLM-as-an-examiner」やLLM同士のディベートといった洗練された手法が開発されています。将来的には、人間のような判断能力を持つLLM-as-a-judgeシステムや、タスクの難易度に応じて評価を調整するシステムの開発が期待されます。

LLMの自己判断能力の改善も課題です。LLMは自身の出力を過大評価したり、優遇したりする傾向があり、また評価指標を過度に最適化しようとする報酬ハッキングの問題も存在します。これらの課題に対しては、LLM同士が協力して評価を行うフレームワークや、自己学習型の評価モデル、自己報酬型言語モデルといった手法の発展が期待されます。これらもLLM-as-a-judgeの一つの形態とみなせます。

最後に、人間とLLMの協調的な判断の実現も重要な目標です。人間参加型の較正や、人間と機械の協調度合いを分類するフレームワークなどの取り組みが進められています。今後は、データ選択やアクティブラーニングの知見を活かし、より効率的な人間とLLM-as-a-judgeによる協調システムを開発していくことが期待されます。

## まとめ

本記事では、 [前回の記事](https://ai-data-base.com/archives/79428) と併せてLLM-as-a-judgeの概念、手法、そして今後の展望を包括的に整理した研究を紹介しました。

今回の調査報告はまず、LLMを評価者として活用する際の入力形式と出力形式について、体系的な分類を提示しています。また、評価属性、評価手法（チューニングやプロンプティング）、アプリケーション（評価、アライメント、検索、推論）という3つの観点から、LLM-as-judgeの研究動向が整理されました。さらに一般性能やバイアスの定量化など、多角的な評価基準に基づくベンチマークの構築も行われています。

そして本分野の今後の課題としては、バイアスと脆弱性への対処、動的・複雑な判断の実現、自己判断とヒューマン・LLM協調の確立などが指摘されています。これらの課題に取り組むことで、より信頼性の高い評価システムの実現が期待されます。

- 参照論文URL： [https://arxiv.org/abs/2411.16594](https://arxiv.org/abs/2411.16594)
- GitHub： [https://github.com/llm-as-a-judge/Awesome-LLM-as-a-judge](https://github.com/llm-as-a-judge/Awesome-LLM-as-a-judge)
- プロジェクトページ： [https://llm-as-a-judge.github.io/](https://llm-as-a-judge.github.io/)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMを「評価者」として活用する『LLM-as-a-judge』の基本](https://ai-data-base.com/archives/79428)

[長文コンテキスト処理はRAGを進化させるのか？最新モデル20種類での実験結果](https://ai-data-base.com/archives/79561)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)