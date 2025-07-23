---
title: "LLMを「評価者」として活用する『LLM-as-a-judge』の基本"
source: "https://ai-data-base.com/archives/79428"
author:
  - "[[AIDB Research]]"
published: 2024-11-28
created: 2025-06-13
description: "本記事では、新たな評価手法として注目される「LLM-as-a-judge」を紹介します。一言でいうとLLM自身を評価者として活用する分野です。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、新たな評価手法として注目される「LLM-as-a-judge」を紹介します。一言でいうとLLM自身を評価者として活用する分野です。

従来の評価指標は、自由度の高いシナリオへの対応が困難でしたが、LLMを評価者とすることでより詳細で柔軟な評価が可能となると期待されています。

本稿では、この新しいアプローチの可能性と課題について、最新の研究動向をもとに紹介していきます。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79428-1024x576.jpg)

**参照論文情報**

- タイトル：From Generation to Judgment: Opportunities and Challenges of LLM-as-a-judge
- 著者：Dawei Li, Bohan Jiang, Liangjie Huang, Alimohammad Beigi, Chengshuai Zhao, Zhen Tan, A [mri](https://ai-data-base.com/archives/26447 "磁気共鳴画像（MRI）") ta Bhattacharjee, Yuxuan Jiang, Canyu Chen, Tianhao Wu, Kai Shu, Lu Cheng, Huan Liu
- 所属：Arizona State University, University of Illinois Chicago, University of Maryland, Baltimore County, Illinois Institute of Technology, University of California, Berkeley, Emory University

## 背景

人工知能および [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") の分野では、評価・判定が常に重要な課題とされています。品質、関連性、有用性などを評価するさまざまな手法の開発がこれまでに取り組まれてきました。

既存の評価手法としては、BLEUやROUGEといった指標が広く使用されてきました。出力テキストと参照テキスト間の単語の重なりを計算することで品質を測定する手法です。計算効率は良いものの、動的で自由度の高いシナリオへの適用が困難という欠点もあります。また、参照テキストに基づく評価手法であるため、複数の正解が存在する場合への対応にも限界があります。

一方で、深層学習モデルの発展に伴い、意味の埋め込みベースの評価手法も登場してきました。こちらは単語レベルでの評価と比較するとより柔軟です。しかし、有用性や安全性といった微妙な属性の評価には依然として課題が残されています。

このような状況の中、LLMが急速な発展を遂げ、指示への従順性、クエリの理解能力、応答生成能力が大幅に向上しました。これで評価手法に新たな可能性が開かれ、LLMを活用して候補群に対するスコアリング、ランキング、選択を行う「LLM-as-a-judge」というパラダイムが訪れようとしています。従来の評価手法の限界を克服し、より詳細で粒度の細かい判定を可能にすることが期待されています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79428_1.png)

LLM-as-a-judgeにおける入力と出力のイメージ

しかし、LLM-as-a-judgeにもまだ課題があります。判定におけるバイアスや脆弱性の問題などを包括的に理解し、解決策を見出すことが必要です。そこで今回研究者らは、現在のLLM-as-a-judgeの技術を体系的にレビューし、将来の研究課題を整理することに取り組みました。

## LLM-as-a-judgeの基本概念

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79428_2-1-1024x632.jpg)

LLM-as-a-judgeは様々な入出力形式に対応することで、多様な評価タスクに柔軟に適用することが可能と考えられています。

### 入力形式

まず、判断を担うLLM（以下、Judge LLM）の評価プロセスについて説明します。Judge LLMには、1つ以上の評価対象となる候補が入力として与えられ、その結果として判断結果が出力されます。入力形式は評価対象となる候補の数によって、以下の2つに分類されます。

（１）Point-Wise評価（点単位評価）  
単一の候補のみを評価する形式です。例えば、文章の自然さや適切さを評価する場合などに使用されます。Judge LLMは与えられた1つの候補サンプルに注目して評価を行います。

（２）Pair/List-Wise評価（ペア/リスト単位評価）  
複数の候補を同時に評価する形式です。2つの候補を比較するペアワイズ評価と、3つ以上の候補を総合的に評価するリストワイズ評価があります。Judge LLMは候補間の相対的な優劣を判断します。

### 出力形式

Judge LLMによる判断結果は、以下の3つの形式のいずれかで出力されます。

1. **スコア形式  
	**各候補に対して、連続値または離散値のスコアが割り当てられます。各候補に具体的な評価点が付与されます。定量的な比較や特定の属性の検出に広く活用されています。
2. **ランキング形式  
	**複数の候補の間で順位付けが行われます。この形式は、相対的な順序を明確にする必要がある場合に有用です。
3. **選択形式  
	**提示された候補の中から、最適な候補が1つまたは複数選択されます。意思決定や内容のフィルタリングなど、具体的な選択を必要とするタスクで活用されています。

## 「LLM-as-a-judge」は何を評価できるのか

以下ではLLM-as-a-judgeについて、評価の観点から現在の研究を体系的に分類し説明します。Judge LLMは様々な側面から評価を行います。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79428_4.png)

### 有用性の評価

最新のLLMは、ユーザーの指示を理解し効果的に応答する能力を備えています。大規模な有用性データと無害性データを用いた訓練を通じて、この能力を獲得しているのです。

人間の選好データ（好みに関するデータ）を収集するコストが高いため、LLMを用いた有用性の評価や、有用性に基づくデータの生成・評価が注目されています。最近の研究では、LLMからのフィードバックが人間からのフィードバックと同等の質を持つことが示されています。さらに、LLMフィードバックを用いて微調整されたLLMが優れた性能を示すなど、この手法の実現可能性と有用性が実証されています。

また、汎用的な評価フレームワークを用いて、応答の有用性を評価することも重要な研究分野となっています。

参照文献

- [RLAIF: “RLAIF vs. RLHF: Scaling Reinforcement Learning from Human Feedback with AI Feedback”](https://arxiv.org/abs/2309.00267). *Harrison Lee et al.*, ICML 2024.
- MT-Bench: “Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena”. *Lianmin Zheng et al.*, NeurIPS 2023.
- Just-Eval: “The unlocking spell on base llms: Rethinking alignment via in-context learning”. *Bill Yuchen Lin et al.*, ICLR 2024.
- [Starling: “Starling-7b: Improving helpfulness and harmlessness with rlaif”](https://openreview.net/forum?id=GqDntYTTbk). *Banghua Zhu et al.*, COLM 2024.
- [AUTO-J: “Generative Judge for Evaluating Alignment”](https://arxiv.org/abs/2310.05470). *Junlong Li et al.*, Arxiv 2023.
- [OAIF: “Direct language model alignment from online AI feedback”](https://arxiv.org/abs/2402.04792). *Shangmin Guo et al.*, Arxiv 2024.
- [Constitutional AI: “Constitutional AI: Harmlessness from AI Feedback”](https://arxiv.org/abs/2212.08073). *Yuntao Bai et al.*, Arxiv 2022.

### 無害性の評価

テキストデータにおける無害性の評価は、コンテンツのモデレーション（修正）や合成データセットの作成において重要な役割を果たしています。人間によるラベル付けは時間とコストがかかるため、ここでもLLMを活用した評価手法が研究されています。

最新のLLMは、ポリシーガイドラインに基づく評価や、安全性に関するデータで微調整を行うことで、効果的なコンテンツ評価が可能となっています。なお、オープンソースモデルと比較して、商用モデルの方が細かい粒度での無害性評価に優れているという研究結果が報告されています。

また、自己評価機能を組み込むことで、LLMの安全性を向上させる研究も進められています。さらに、拒否応答の適切性評価や、安全性に関する包括的な評価フレームワークの構築など、多角的なアプローチが試みられています。

参照文献

- [LLaMA Guard: “Llama guard: LLM-based input-output safeguard for human-ai conversations”](https://arxiv.org/abs/2312.06674). *Hakan Inan et al.*, Arxiv 2023.
- [TRUSTGPT: “Enhancing chat language models by scaling high-quality instructional conversations”](https://aclanthology.org/2023.emnlp-main.183/). *Ning Ding et al.*, EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 2023.
- [Moral Choice: “SlimOrca: An Open Dataset of GPT-4 Augmented FLAN Reasoning Traces, with Verification”](https://huggingface.co/datasets/Open-Orca/SlimOrca). *Wing Lian et al.*, Huggingface 2023.
- [SORRY-Bench: “Stanford Alpaca: An Instruction-following LLaMA model”](https://github.com/tatsu-lab/stanford_alpaca). *Rohan Taori et al.*, GitHub 2023.
- [FLASK: “OpenChat: Advancing Open-source Language Models with Mixed-Quality Data”](https://openreview.net/forum?id=AOJyfhWYHf). *Guan Wang et al.*, ICLR 2024.
- [R-judge: “Training language models to follow instructions with human feedback”](https://proceedings.neurips.cc/paper_files/paper/2022/hash/b1efde53be364a73914f58805a001731-Abstract-Conference.html). *Long Ouyang et al.*, NeurIPS 2022.
- [Do-not-answer: “Do-Not-Answer: Evaluating Safeguards in LLMs”](https://aclanthology.org/2024.findings-eacl.61.pdf). *Wang Yuxia et al.*, EACL 2024.

### 信頼性の評価

信頼性とは、LLMが「事実に基づいた忠実なコンテンツを生成すること」および「特定のトピックに関する知識の不確実性を適切に表現する能力」を指します。事実性に関する研究では、関連する証拠を選択し詳細な批評を提供する手法が開発されています。

対話レベルでの信頼性評価に向けては、大規模なベンチマークデータセットの構築が進められており、特に中国語や多言語環境における評価にも焦点が当てられています。また、長文生成の評価においては、内容を原子レベルの文に分割し、Wikipediaなどの情報源と照合する手法が研究されています。

さらに、”不確実性の表現”に関して、自己一貫性のある確信度推定を行う訓練フレームワークが提案されるなど、自信の表明と根拠の提示を組み込んだ新しい手法も登場しています。加えて、視覚と言語の両方を考慮したファクトチェックが試みられています。また、モデルの事実性を向上させるための細分化された批評ベースの評価器も提案されています。

参照文献

- [RAIN: “Your Language Models Can Align Themselves without Finetuning”](https://arxiv.org/pdf/2309.07124). *Yuhui Li et al.*, ICLR 2024.
- [FActScore: “Fine-grained Atomic Evaluation of Factual Precision in Long Form Text Generation”](https://arxiv.org/pdf/2305.14251). *Sewon Min et al.*, EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 2023.
- [Halu-J: “Critique-Based Hallucination Judge”](https://arxiv.org/pdf/2407.12943). *Binjie Wang et al.*, Arxiv 2024.
- [HalluDial: “A Large-Scale Benchmark for Automatic Dialogue-Level Hallucination Evaluation”](https://arxiv.org/pdf/2406.07070). *Wen Luo et al.*, Arxiv 2024.
- [Evaluating hallucinations in Chinese large language models](https://arxiv.org/pdf/2310.03368). *Qinyuan Cheng et al.*, Arxiv 2023.
- [SaySelf: “Teaching LLMs to Express Confidence with Self-Reflective Rationales”](https://arxiv.org/pdf/2405.20974). *Tianyang Xu et al.*, Arxiv 2024.
- [Long-form factuality in large language models](https://arxiv.org/pdf/2403.18802.pdf?trk=public_post_comment-text). *Jerry Wei et al.*, Arxiv 2024.
- [Self-alignment for factuality: Mitigating hallucinations in LLMs via self-evaluation](https://arxiv.org/pdf/2402.09267). *Xiaoying Zhang et al.*, Arxiv 2024.
- [FaithScore: “Fine-grained Evaluations of Hallucinations in Large Vision-Language Models”](https://aclanthology.org/2024.findings-emnlp.290.pdf). *Liqiang Jing et al.*, EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 2024.
- [Improving Model Factuality with Fine-grained Critique-based Evaluator](https://arxiv.org/pdf/2410.18359). *Yiqing Xie et al.*, Arxiv 2024.

### 関連性の評価

関連性とは、生成されたコンテンツや検索されたコンテンツが、元のクエリにどの程度合致しているかを測る重要な指標です。従来の評価手法では、キーワードマッチングや意味的類似性に基づく評価が行われてきましたが、文脈における微妙な違いやニュアンスを捉えたいというニーズがありました。

LLM-as-a-judgeを用いた関連性評価は、より細かな粒度での効果的な評価を可能にしています。対話評価の分野では、時間とコストのかかる人手による注釈付けをLLMによる判断で代替する手法が提案されています。例えば会話の文脈と生成された応答をもとに、Judge LLMがその関連性を評価する仕組みが構築されています。

またRAGにおいては、LLMを活用してタスクに最も関連する過去のメモリを特定する手法が研究されています。また、ノイズの多い不適切な知識を、サブナレッジグラフから除外するためのLLMベースの再ランキング手法も開発されています。

さらに、マルチモーダル分野においても関連性評価の研究は進められており、例えばテキストと画像生成の関連性評価に焦点を当てた手法が提案されています。

参照文献

- [LLM-Eval: “Unified Multi-Dimensional Automatic Evaluation for Open-Domain Conversations with Large Language Models”](https://arxiv.org/pdf/2305.13711). *Yen-Ting Lin et al.*, [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 4ConvAI 2023.
- [MoT: “Memory-of-Thought Enables ChatGPT to Self-Improve”](https://arxiv.org/pdf/2305.05181). *Xiaonan Li et al.*, EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 2023.
- [Can We Use Large Language Models to Fill Relevance Judgment Holes?](https://arxiv.org/pdf/2405.05600). *Zahra Abbasiantaeb et al.*, Arxiv 2024.
- [DALK: “Dynamic Co-Augmentation of LLMs and KG to Answer Alzheimer’s Disease Questions with Scientific Literature”](https://arxiv.org/pdf/2409.13731). *Dawei Li et al.*, Arxiv 2024.
- [MJ-Bench: “Is Your Multimodal Reward Model Really a Good Judge for Text-to-Image Generation?”](https://arxiv.org/pdf/2407.04842). *Zhaorun Chen et al.*, Arxiv 2024.
- [Large language models can accurately predict searcher preferences](https://dl.acm.org/doi/pdf/10.1145/3626772.3657707). *Paul Thomas et al.*, SIGIR 2024.
- [Leveraging Large Language Models for Relevance Judgments in Legal Case Retrieval](https://arxiv.org/pdf/2403.18405). *Shengjie Ma et al.*, Arxiv 2024.
- [Large Language Models are Zero-Shot Rankers for Recommender Systems](https://arxiv.org/pdf/2305.08845). *Yupeng Hou et al.*, ECIR 2024.
- [Can Large Language Models Be an Alternative to Human Evaluations?](https://arxiv.org/pdf/2305.01937). *Cheng-Han Chiang et al.*, ACL 2023.
- [Toward Automatic Relevance Judgment Using Vision-Language Models for Image-Text Retrieval Evaluation](https://arxiv.org/pdf/2408.01363). *Jheng-Hong Yang et al.*, Arxiv 2024.
- [MLLM-as-a-Judge: Assessing Multimodal LLM-as-a-Judge with Vision-Language Benchmark](https://arxiv.org/abs/2402.04788). *Dongping Chen et al.*, Arxiv 2024.

### アクションやステップの実現可能性の評価

LLMの潜在能力は、複雑で良く設計された推論パイプラインによってさらに引き出すことが可能です。そのため、アクションやステップの実現可能性を評価することは、プランニング、推論、意思決定の成功に不可欠です。

一部の研究では、メトリクスや外部ツールを用いて実現可能性の評価を行っていますが、多くの研究ではLLM自体を活用して、最も適切で合理的なアクションを選択する手法が採用されています。例えば、モンテカルロ木探索の報酬信号として、LLMに自己評価と実現可能性の判断を生成させる手法が提案されています。さらに、ツリー構造を利用した問題解決を拡張し、より高度な意思決定を可能にするアプローチも報告されています。

また、グラフ構造を活用して思考の流れを評価する方法も開発されており、API選択やツールの使用における実現可能性を迅速かつ正確に評価するための手法も提案されています。さらにLLMのルーティング（どのLLMを使用するかを選択すること）に関しては、ユーザーの好みを考慮したアプローチが採用されています。

さらに、マルチエージェントシステムにおいて、協調型の議論や意見の分岐を促進する手法が研究されており、エージェント混合モデルによる効率的な大規模言語モデルの強化も試みられています。

参照文献

- [Reasoning with Language Model is Planning with World Model](https://arxiv.org/pdf/2305.14992). *Shibo Hao et al.*, EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 2023.
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2023/file/271db9922b8d1f4dd7aaef84ed5ac703-Paper-Conference.pdf). *Shunyu Yao et al.*, NeurIPS 2023.
- [Auto-GPT for Online Decision Making: Benchmarks and Additional Opinions](https://arxiv.org/pdf/2306.02224). *Hui Yang et al.*, Arxiv 2023.
- [Graph of Thoughts: Solving Elaborate Problems with Large Language Models](https://ojs.aaai.org/index.php/AAAI/article/view/29720/31236). *Maciej Besta et al.*, AAAI 2024.
- [DiffAgent: Fast and Accurate Text-to-Image API Selection with Large Language Model](https://openaccess.thecvf.com/content/CVPR2024/papers/Zhao_DiffAgent_Fast_and_Accurate_Text-to-Image_API_Selection_with_Large_Language_CVPR_2024_paper.pdf). *Lirui Zhao et al.*, CVPR 2024.
- [Routellm: Learning to Route LLMs with Preference Data](https://arxiv.org/abs/2406.18665v2). *Isaac Ong et al.*, Arxiv 2024.
- [Encouraging Divergent Thinking in Large Language Models Through Multi-Agent Debate](https://arxiv.org/pdf/2305.19118). *Tian Liang et al.*, Arxiv 2023.
- [SMoA: Improving Multi-agent Large Language Models with Sparse Mixture-of-Agents](https://arxiv.org/pdf/2411.03284). *Dawei Li et al.*, Arxiv 2024.

### 全体的な品質の評価

前述のように、LLM-as-a-judgeは様々な側面から細かな評価を行うことができます。しかし、比較やランキングのために、候補の総合的な品質を示す単一の評価が必要となる場合も多くあります。

この課題における一つの直接的なアプローチとして、各側面の評価スコアの平均を計算する方法があります。また、各属性の評価結果を提示し、Judge LLMに総合的な品質判断を生成させる手法も提案されています。

さらに、要約や機械翻訳などのタスクは、長文生成タスクと比較して評価の次元が少ないため、LLM-as-a-judgeは直接総合的な判断を生成するのも効果的です。

このように、タスクの性質に応じて適切な評価アプローチが選択されています。

参照文献

- [Human-like Summarization Evaluation with ChatGPT](https://arxiv.org/pdf/2304.02554). *Mingqi Gao et al.*, Arxiv 2023.
- [The Unlocking Spell on Base LLMs: Rethinking Alignment via In-Context Learning](https://openreview.net/pdf?id=wxJ0eXwwda). *Bill Yuchen Lin et al.*, ICLR 2023.
- [Multi-Dimensional Evaluation of Text Summarization with In-Context Learning](https://arxiv.org/pdf/2306.01200). *Sameer Jain et al.*, ACL 2023.
- [LLM-Eval: Unified Multi-Dimensional Automatic Evaluation for Open-Domain Conversations with Large Language Models](https://arxiv.org/pdf/2305.13711). *Yen-Ting Lin et al.*, [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 4ConvAI 2023.
- [Large Language Models Are State-of-the-Art Evaluators of Translation Quality](https://arxiv.org/pdf/2302.14520). *Tom Kocmi et al.*, EAMT 2023.
- [Kieval: A Knowledge-Grounded Interactive Evaluation Framework for Large Language Models](https://arxiv.org/pdf/2402.15043). *Zhuohao Yu et al.*, Arxiv 2024.
- [Direct Language Model Alignment from Online AI Feedback](https://arxiv.org/pdf/2402.04792.pdf?utm_source=fbia). *Guo Shangmin et al.*, Arxiv 2024.
- [A Comprehensive Analysis of the Effectiveness of Large Language Models as Automatic Dialogue Evaluators](https://ojs.aaai.org/index.php/AAAI/article/download/29923/31613). *Chen Zhang et al.*, AAAI 2024.
- [Lost in the Source Language: How Large Language Models Evaluate the Quality of Machine Translation](https://arxiv.org/pdf/2401.06568). *Xu Huang et al.*, ACL 2024.

## LLM-as-a-judgeを行う際の方法論

LLM-as-a-judgeを行う上では、データソースの選定方法と、それに基づいた学習手法が重要となります。

### データソース

高品質なデータセットが不可欠です。そのデータセットの作成方法として、手動ラベル付けによるものと、合成フィードバックを用いるものがあります。

#### （１）手動ラベル付けデータ

手動ラベル付けデータは、人間の基準に基づいて評価を付与したデータで構成されます。既存の評価基準を統合して作成されたデータセットや、新たに設計された評価タスクに基づくものがあります。対話生成や要約、質問応答など、多様な [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") タスクに対応するデータが収集されます。

例えば、ある研究では人間の評価を基に100以上の評価タスクをカバーするデータセットが構築されています。このデータセットは、LLMが多面的で詳細な評価を学習する基盤として機能します。

さらに、一部の手法ではデータ収集の際に、人間の作成したフィードバックをモデルが生成した評価と比較し、品質を向上させる取り組みが行われています。

#### （２）合成フィードバックデータ

合成フィードバックデータとは、モデル自身または他のモデルを活用して生成されるデータセットを指します。手動ラベル付けのコストを大幅に削減できる点が特徴です。

例えば、LLMが自身の出力を評価し、その評価結果を新たなフィードバックとして使用する方法があります。こうしたアプローチを行うと、モデルが自己改善型の学習を行い、評価の精度を向上させることができると考えられています。また、信頼性の高いLLMが、部分的に誤ったまたは完全に正しい証拠を生成し、それを学習データとして利用する手法も採用されています。

参照文献

- [Automatic Evaluation of Attribution by Large Language Models.](https://arxiv.org/pdf/2305.06311)*Yue et al.* Findings of the Association for Computational Linguistics: EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") 2023 (2023).
- [INSTRUCTSCORE: Towards Explainable Text Generation Evaluation with Automatic Feedback.](https://arxiv.org/pdf/2305.14282)*Xu et al.* Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (2023).
- [Aligning Large Language Models by On-Policy Self-Judgment.](https://arxiv.org/pdf/2402.11253)*Lee et al.* ArXiv preprint (2024).
- [X-Eval: Generalizable Multi-aspect Text Evaluation via Augmented Instruction Tuning with Auxiliary Evaluation Aspects.](https://arxiv.org/pdf/2311.08788)*Liu et al.* Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics (2024).
- [CritiqueLLM: Towards an Informative Critique Generation Model for Evaluation of Large Language Model Generation.](https://aclanthology.org/2024.acl-long.704.pdf)*Ke et al.* Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (2024).
- [Foundational Autoraters: Taming Large Language Models for Better Automatic Evaluation.](https://arxiv.org/pdf/2407.10817)*Vu et al.* ArXiv preprint (2024).
- [Judgelm: Fine-Tuned Large Language Models are Scalable Judges.](https://arxiv.org/pdf/2310.17631)*Zhu et al.* ArXiv preprint (2023).
- [Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge.](https://www.rivista.ai/wp-content/uploads/2024/10/2407.19594v2.pdf)*Wu et al.* ArXiv preprint (2024).
- [Self-Taught Evaluators.](https://arxiv.org/pdf/2408.02666)*Wang et al.* ArXiv preprint (2024).
- [Halu-J: Critique-Based Hallucination Judge.](https://arxiv.org/pdf/2407.12943)*Wang et al.* ArXiv preprint (2024).
- [Offsetbias: Leveraging Debiased Data for Tuning Evaluators.](https://arxiv.org/pdf/2407.06551)*Park et al.* ArXiv preprint (2024).
- [Sorry-Bench: Systematically Evaluating Large Language Model Safety Refusal Behaviors.](https://arxiv.org/pdf/2406.14598)*Xie et al.* ArXiv preprint (2024).
- [LLaVA-Critic: Learning to Evaluate Multimodal Models.](https://arxiv.org/pdf/2410.02712)*Xiong et al.* ArXiv preprint (2024).
- [Prometheus 2: An Open Source Language Model Specialized in Evaluating Other Language Models.](https://arxiv.org/pdf/2405.01535)*Kim et al.* ArXiv preprint (2024).
- [INSTRUCTSCORE: Towards Explainable Text Generation Evaluation with Automatic Feedback.](https://arxiv.org/pdf/2305.14282)*Xu et al.* Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (2023).

### 学習手法

収集されたデータを基にLLMを効果的に学習させるためには、適切な学習手法が求められます。下の表はこれまでに登場したさまざまな学習手法です。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79428_5-1-1024x650.jpg)

学習手法は主に以下の２種類に分類できます。

#### （１）教師あり微調整

ラベル付きデータを用いてモデルを学習させる最も一般的なアプローチです。ペアワイズ比較（2つの候補を比較する）やポイントワイズ評価（1つの候補にスコアを与える）を通じて、LLMが人間の基準に沿った評価を行う能力を強化します。

一部の研究では、複数のデータセットを統合し、複数のタスクに対応可能なモデルを構築する取り組みも行われています。また、ペアワイズとポイントワイズの両方に対応するために、統合的な学習手法やデータ拡張が試みられています。例えば、学習データ内の文章の順序を入れ替えたり、評価基準を再構成したりすることで、モデルの学習効率が向上するとのことです。

#### （２）選好学習

選好学習とは、モデルが特定の基準に基づいて候補を比較し、優先順位をつける能力を学習するといった手法です。ランキングや比較のようなタスクでの性能を高めるために使用されます。

例えば、特定の出力に対する「良い」または「悪い」といったラベルを用いてモデルを微調整することで、誤った判断を減少させる取り組みが行われています。また、モデルが自己評価を行い、その結果をフィードバックとしてさらに学習に組み込む方法も採用されています。

参照文献

- [Learning Personalized Story Evaluation.](https://arxiv.org/pdf/2310.03304)*Wang et al.* ArXiv preprint (2023).
- [INSTRUCTSCORE: Towards Explainable Text Generation Evaluation with Automatic Feedback.](https://arxiv.org/pdf/2305.14282)*Xu et al.* Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (2023).
- [CritiqueLLM: Towards an Informative Critique Generation Model for Evaluation of Large Language Model Generation.](https://aclanthology.org/2024.acl-long.704.pdf)*Ke et al.* Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (2024).
- [X-Eval: Generalizable Multi-aspect Text Evaluation via Augmented Instruction Tuning with Auxiliary Evaluation Aspects.](https://arxiv.org/pdf/2311.08788)*Liu et al.* Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics (2024).
- [Halu-J: Critique-Based Hallucination Judge.](https://arxiv.org/pdf/2407.12943)*Wang et al.* ArXiv preprint (2024).
- [Offsetbias: Leveraging Debiased Data for Tuning Evaluators.](https://arxiv.org/pdf/2407.06551)*Park et al.* ArXiv preprint (2024).
- [Themis: A Reference-free NLG Evaluation Language Model with Flexibility and Interpretability.](https://arxiv.org/pdf/2406.18365)*Hu et al.* ArXiv preprint (2024).
- [Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge.](https://www.rivista.ai/wp-content/uploads/2024/10/2407.19594v2.pdf)*Wu et al.* ArXiv preprint (2024).
- [Self-Taught Evaluators.](https://arxiv.org/pdf/2408.02666)*Wang et al.* ArXiv preprint (2024).
- [Split and Merge: Aligning Position Biases in LLM-based Evaluators.](https://aclanthology.org/2024.emnlp-main.621.pdf)*Li et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2024).

### プロンプト設計

LLMを評価者として運用する際、適切なプロンプト設計は評価の正確性を向上させるだけでなく、評価時のバイアスを軽減する上で重要な役割を果たします。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_79428_7-1024x471.png)

さまざまなプロンプト戦略のイメージ

#### （１）スワッピング操作

LLMは入力された候補の順序に敏感であるため、入力順に評価結果が影響される可能性があります。この問題を解決するために、スワッピング操作が導入されています。候補の順序を入れ替えて2回評価を実行し、結果を比較する手法です。入力順序によるバイアスが軽減され、公平な評価が可能となると考えられています。

例えば、特定の評価で候補の質がほぼ同等である場合、スワッピング後に結果が矛盾すれば「同点」とみなすことでモデルの限界を補完するといった仕組みも提案されています。

参照文献

- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena.](https://proceedings.neurips.cc/paper_files/paper/2023/file/91f18a1287b398d378ef22505bf41832-Paper-Datasets_and_Benchmarks.pdf)*Zheng et al.* NeurIPS (2023).
- [SALMON: Self-Alignment with Instructable Reward Models.](https://openreview.net/pdf?id=xJbsmB8UMx)*Sun et al.* ICLR (2024).
- [Aligning Large Language Models by On-Policy Self-Judgment.](https://arxiv.org/pdf/2402.11253)*Lee et al.* ArXiv preprint (2024).
- [Starling-7b: Improving Helpfulness and Harmlessness with RLAIF.](https://openreview.net/pdf?id=GqDntYTTbk)*Zhu et al.* First Conference on Language Modeling (2024).

#### （２）ルール補強

評価基準をプロンプトに明示的に組み込むことで、モデルが適切かつ一貫性のある判断を行うようにする手法もあります。具体的な指針や評価基準を提示することで、モデルが特定の側面（例：有用性、安全性、正確性など）を適切に評価できるようになります。

例えば、ルールを含めたプロンプト設計によってモデルが複数の候補を特定の原則に従って比較できるようにする検証が成功しています。さらに、モデル自身が評価基準を生成する「自己生成ルール」の導入により、評価プロセスがより柔軟で多様な状況に対応できるようになっています。

参照文献

- [Constitutional AI: Harmlessness from AI Feedback.](https://arxiv.org/pdf/2212.08073.pdf?trk=public_post_comment-text)*Bai et al.* ArXiv preprint (2022).
- [MoT: Memory-of-Thought Enables ChatGPT to Self-Improve.](https://arxiv.org/pdf/2305.05181)*Li et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2023).
- [Improving Diversity of Demographic Representation in Large Language Models via Collective-Critiques and Self-Voting.](https://arxiv.org/pdf/2310.16523)*Lahoti et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2023).
- [RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback.](https://openreview.net/pdf?id=AAxIs3D2ZZ)*Lee et al.* ArXiv preprint (2023).
- [LRQ-Fact: LLM-Generated Relevant Questions for Multimodal Fact-Checking.](https://arxiv.org/pdf/2410.04616)*Beigi et al.* ArXiv preprint (2024).
- [Benchmarking Foundation Models with Language-Model-as-an-Examiner.](https://proceedings.neurips.cc/paper_files/paper/2023/file/f64e55d03e2fe61aa4114e49cb654acb-Paper-Datasets_and_Benchmarks.pdf)*Bai et al.* NeurIPS (2023).
- [Human-like Summarization Evaluation with ChatGPT.](https://arxiv.org/pdf/2304.02554)*Gao et al.* ArXiv preprint (2023).
- [Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models.](https://openreview.net/pdf?id=8euJaTveKw)*Kim et al.* ICLR (2024).
- [Kieval: A Knowledge-Grounded Interactive Evaluation Framework for Large Language Models.](https://arxiv.org/pdf/2402.15043)*Yu et al.* ArXiv preprint (2024).
- [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models.](https://arxiv.org/pdf/2407.02408)*Wang et al.* ArXiv preprint (2024).
- [Evaluating the Evaluator: Measuring LLMs’ Adherence to Task Evaluation Instructions.](https://arxiv.org/pdf/2408.08781)*Murugadoss et al.* ArXiv preprint (2024).
- [Calibrating LLM-Based Evaluators.](https://arxiv.org/pdf/2309.13308)*Liu et al.* LREC-COLING (2024).
- [Direct Language Model Alignment from Online AI Feedback.](https://arxiv.org/pdf/2402.04792.pdf?utm_source=fbia)*Guo et al.* ArXiv preprint (2024).
- [SALMON: Self-Alignment with Instructable Reward Models.](https://openreview.net/pdf?id=xJbsmB8UMx)*Sun et al.* ICLR (2024).
- [Aligning Large Language Models by On-Policy Self-Judgment.](https://arxiv.org/pdf/2402.11253)*Lee et al.* ArXiv preprint (2024).
- [DALK: Dynamic Co-Augmentation of LLMs and KG to Answer Alzheimer’s Disease Questions with Scientific Literature.](https://arxiv.org/pdf/2409.13731)*Li et al.* ArXiv preprint (2024).
- [What do Large Language Models Need for Machine Translation Evaluation?](https://arxiv.org/pdf/2410.03278)*Qian et al.* EM [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") (2024).
- [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References.](https://arxiv.org/pdf/2410.05193)*Zhang et al.* ArXiv preprint (2024).
- [Can LLM be a Personalized Judge?](https://arxiv.org/pdf/2406.11657)*Dong et al.* ArXiv preprint (2024).

#### （３）マルチエージェント協調

単一のLLMによる評価はバイアスの影響を受ける可能性があるため、複数のモデルを連携させて協調的に評価を行う手法も検討されています。異なるモデル間での議論や意見交換を通じて評価を行うことで、より信頼性の高い結果を得られると考えられています。

例えば、弱いモデルが初期評価を行い、必要に応じてより強力なモデルが再評価を行う「階層的評価」や、複数のモデルが異なる視点から議論を交わして最終的な評価を決定するといった手法が提案されています。

参照文献

- [Prd: Peer Rank and Discussion Improve Large Language Model Based Evaluations.](https://arxiv.org/pdf/2307.02762)*Li et al.* ArXiv preprint (2023).
- [Wider and Deeper LLM Networks Are Fairer LLM Evaluators.](https://arxiv.org/pdf/2308.01862)*Zhang et al.* ArXiv preprint (2023).
- [Large Language Models Are Diverse Role-Players for Summarization Evaluation.](https://arxiv.org/pdf/2303.15078)*Wu et al.* CCF International Conference on Natural Language Processing and Chinese Computing (2023).
- [Dynamic Evaluation of Large Language Models by Meta Probing Agents.](https://openreview.net/pdf?id=DwTgy1hXXo)*Zhu et al.* ICML (2024).
- [Judgelm: Fine-Tuned Large Language Models Are Scalable Judges.](https://arxiv.org/pdf/2310.17631)*Zhu et al.* ArXiv preprint (2023).
- [ChatEval: Towards Better LLM-Based Evaluators Through Multi-Agent Debate.](https://openreview.net/pdf?id=FQepisCUWu)*Chan et al.* ICLR (2023).
- [CoEvol: Constructing Better Responses for Instruction Finetuning Through Multi-Agent Cooperation.](https://arxiv.org/pdf/2406.07054)*Li et al.* ArXiv preprint (2024).
- [LRQ-Fact: LLM-Generated Relevant Questions for Multimodal Fact-Checking.](https://arxiv.org/pdf/2410.04616)*Beigi et al.* ArXiv preprint (2024).
- [Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement.](https://arxiv.org/pdf/2407.18370)*Jung et al.* ArXiv preprint (2024).
- [The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation.](https://arxiv.org/pdf/2408.08688)*Arif et al.* ArXiv preprint (2024).

#### （４）デモンストレーション

具体例をプロンプトに組み込むことで、モデルが評価基準や手法を学びやすくする取り組みが行われています。

例えば、いくつかの具体例をプロンプトに含め、モデルがそれらの基準に基づいて候補を評価することを「インコンテキスト学習（In-context Learning）」と呼んでいます。

参照文献

- [Multi-Dimensional Evaluation of Text Summarization with In-Context Learning.](https://arxiv.org/pdf/2306.01200)*Jain et al.* ACL (2023).
- [Little Giants: Exploring the Potential of Small LLMs as Evaluation Metrics in Summarization in the Eval4NLP 2023 Shared Task.](https://arxiv.org/pdf/2311.00686)*Kotonya et al.* Proceedings of the 4th Workshop on Evaluation and Comparison of [NLP](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") Systems (2023).
- [ALLURE: Auditing and Improving LLM-Based Evaluation of Text Using Iterative In-Context Learning.](https://ui.adsabs.harvard.edu/abs/2023arXiv230913701H/abstract)*Hasanbeig et al.* ArXiv e-prints (2023).
- [Can Many-Shot In-Context Learning Help Long-Context LLM Judges? See More, Judge Better!](https://arxiv.org/pdf/2406.11629)*Song et al.* ArXiv preprint (2024).

#### （５）マルチターン対話

評価プロセスをより深めるために、複数回のやり取りを通じて候補を評価する手法が使用されています。最初の質問に対するモデルの回答を基にフォローアップの質問を行うなど、動的なやり取りを含む評価が行われます。

例えば、モデル同士が議論を交わす形式を取り入れ、対話の中で相互に意見を補強または否定することで、候補の品質を深く掘り下げる試みが行われています。

参照文献

- [Benchmarking Foundation Models with Language-Model-as-an-Examiner.](https://proceedings.neurips.cc/paper_files/paper/2023/file/f64e55d03e2fe61aa4114e49cb654acb-Paper-Datasets_and_Benchmarks.pdf)*Bai et al.* NeurIPS (2023).
- [Kieval: A Knowledge-Grounded Interactive Evaluation Framework for Large Language Models.](https://arxiv.org/pdf/2402.15043)*Yu et al.* ArXiv preprint (2024).
- [Auto Arena of LLMs: Automating LLM Evaluations with Agent Peer-Battles and Committee Discussions.](https://arxiv.org/pdf/2405.20267)*Zhao et al.* ArXiv preprint (2024).
- [Evaluating the Performance of Large Language Models via Debates.](https://arxiv.org/pdf/2406.11044)*Moniri et al.* ArXiv preprint (2024).

#### （６）比較の効率化

複数の候補を比較してランキングを作成する場合、ペアワイズ比較は非常に労力がかかるプロセスとなります。この負担を軽減するために、効率化を図る方法が導入されています。

各候補を「基準」と比較し、その結果を用いてランキングを構築する方法や、トーナメント形式を採用して効率的に候補を比較する手法が提案されています。

参照文献

- [Statistical Rejection Sampling Improves Preference Optimization.](https://arxiv.org/pdf/2305.01937)*Liu et al.* ArXiv preprint (2023).
- [Online Self-Preferring Language Models.](https://arxiv.org/pdf/2407.19594v2.pdf)*Zhai et al.* ArXiv preprint (2024).
- [Starling-7b: Improving Helpfulness and Harmlessness with RLAIF.](https://openreview.net/pdf?id=GqDntYTTbk)*Zhu et al.* First Conference on Language Modeling (2024).
- [Aligning Large Language Models by On-Policy Self-Judgment.](https://arxiv.org/pdf/2402.11253)*Lee et al.* ArXiv preprint (2024).

## まとめ

本記事では、LLM-as-a-judgeにおける最新の調査報告をもとに「LLM-as-a-judgeの基本概念」「LLM-as-a-judgeは何を評価できるのか」「LLM-as-a-judgeを行う際の方法論」についてまとめました。

LLM-as-a-judgeは、LLMを評価者として活用するアプローチで、入力形式と出力形式の組み合わせにより評価を行うのが基本となっています。主な評価対象としては、有用性、安全性、信頼性、関連性、実現可能性、総合品質の6つの属性が特定されています。

評価は主にチューニングベースとプロンプティングベースの2つの方法論によって実現されています。目的や対象に応じて、これらの手法を適切に組み合わせることで、より信頼性の高い評価システムを構築することが可能とされています。

[次回の記事](https://ai-data-base.com/archives/79535) では、「さまざまな応用」「評価用ベンチマーク」「LLM-as-a-judge分野の今後」について整理します。

- 参照論文URL： [https://arxiv.org/abs/2411.16594](https://arxiv.org/abs/2411.16594)
- GitHub： [https://github.com/llm-as-a-judge/Awesome-LLM-as-a-judge](https://github.com/llm-as-a-judge/Awesome-LLM-as-a-judge)
- プロジェクトページ： [https://llm-as-a-judge.github.io/](https://llm-as-a-judge.github.io/)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[OpenAIのo1モデルへの対抗馬　アリババが独自の推論モデル「Marco-o1」を開発　オープンソースで公開](https://ai-data-base.com/archives/79273)

[『LLM-as-a-judge』のさまざまな応用と分野の展望](https://ai-data-base.com/archives/79535)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)