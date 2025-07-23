---
title: "複雑なプログラミングタスクに特化したベンチマーク『BigCodeBench』登場 最新モデルでも60%"
source: "https://ai-data-base.com/archives/76844"
author:
  - "[[AIDB Research]]"
published: 2024-10-10
created: 2025-06-13
description: "本記事では、LLMのプログラミング能力を評価する新しいベンチマーク「BigCodeBench」を紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMのプログラミング能力を評価する新しいベンチマーク「BigCodeBench」を紹介します。

本ベンチマークは実際の開発現場で直面する複雑な課題に焦点を当てており、従来の評価方法では測れなかったLLMの能力を測定することを目指しています。

アカデミアからはUCバークレーやMITなど、また産業界からはインテルやHugging Faceなど、多くの研究機関が本プロジェクトに参画しています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844-1024x576.jpg)

**参照論文情報**

- タイトル：BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions
- 著者：Terry Yue Zhuo, Minh Chien Vu, Jenny Chim, Han Hu, Wenhao Yu, Ratnadira Widyasari, Imam Nur Bani Yusuf, Haolan Zhan, Junda He, Indraneil Paul, Simon Brunner, Chen Gong, Thong Hoang, Armel Randy Zebaze, Xiaoheng Hong, Wen-Ding Li, Jean Kaddour, Ming Xu, Zhihan Zhang, Prateek Yadav, Naman Jain, Alex Gu, Zhoujun Cheng, Jiawei Liu, Qian Liu, Zijian Wang, David Lo, Binyuan Hui, Niklas Muennighoff, Daniel Fried, Xiaoning Du, Harm de Vries, Leandro Von Werra
- 研究機関：Monash University, CSIRO’s Data61, Singapore Management University, Detomo Inc., Queen Mary University of London, University of Notre Dame, TU Darmstadt, Independent, University of Virginia, Inria, Intel, Cornell University, University College London, UNC Chapel Hill, UC Berkeley, MIT, Shanghai Jiaotong University, UIUC, Sea AI Lab, AWS AI Labs, Contextual AI, Carnegie Mellon University, ServiceNow Research, Hugging Face

## 背景

LLMを使ったコード生成が注目を集めています。これまでの評価では、短くて独立したアルゴリズム的なタスクを解決できることが示されてきました。

しかし、実際の現場で直面する課題はもっと複雑です。例えば、下記のような能力が要求されます。

1. 複数のライブラリ関数を「ツール」として使いこなす
2. データ分析やWeb開発などの実践的な機能を実装するには、複数のツールを組み合わせる
3. 複雑な指示を正確に理解し、それに基づいて処理を行う

これらの能力を測るには、既存の評価ツールは不十分です。

そこで研究チームは、LLMがこうした実践的なタスクをどの程度解決できるのかを評価するために、BigCodeBenchという新しいベンチマークを開発しました。BigCodeBenchの特徴は以下の通りです。

- 139のライブラリから727の関数呼び出しを使用
- 7つの異なる分野にわたる1,140の細かいタスクを含む
- 各タスクには平均5.6個のテストケースがあり、99%のブランチカバレッジを持つ

また、自然言語に近い指示だけでコードを生成できるかを評価するために、BigCodeBench-Instructという派生版も作成しました。

そして実際に現行の最先端モデルが評価されました。以下で研究全体を紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_1-1024x346.png)

BigCodeBenchのタスク構造

## ベンチマーク構築

BigCodeBenchは、3つの主なステップを経て構築されました。

それぞれのステップごとに細かいプロセスを紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_2-1024x290.png)

3段階の構築プロセス

### ステップ１：データ合成

1. まず、人間が簡単なプログラミングの例を提供する
2. GPT-4を使って、より複雑なプログラミングタスクを生成する  
	（複数のライブラリの使用など実践的なシナリオを含む）
3. 生成されたタスクにバイアスがかかるのを防ぐため、関数名を匿名化し、説明文を少し変更する

### ステップ２：半自動プログラム改良とテストケース生成

1. 人間の専門家とGPT-4が協力して、生成されたプログラムを改良する
2. プログラムの説明文（docstring）を明確にし、実装を改善する
3. GPT-4を使ってユニットテストを作成し、プログラムの正確さを確認する
4. 人間の専門家が常にこのプロセスを監督し、必要に応じてGPT-4に指示を出す

### ステップ３：人間による最終確認

1. 複数の専門家がプログラムとテストケースを詳細にチェックする
2. 不明確な点や問題がある場合は修正を加える
3. GPT-3.5-Turboを使って予備評価を行い、タスクの難易度を確認する
4. 別のグループの専門家が再度チェックを行い、一貫性と品質を確保する
5. 最後に、自動化されたテスト環境でプログラムとテストケースの動作を確認する

### 追加のステップ：自然言語指向の指示からコード生成へのベンチマーキング

BigCodeBench-Completeの詳細なdocstringから、より自然な言語指向の指示へとタスクプロンプトを変換する作業も行われました。

パラメータの詳細説明や対話的な例を省略し、タスクの本質的な要件のみを含む簡潔な指示を作成します。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_3-1024x472.png)

BigCodeBench-CompleteからBigCodeBench-Instructへのプロンプト変換プロセス

この変換作業によって、より現実的なシナリオでのLLMの性能を評価することができるようになったとのことです。ユーザーは通常、詳細な技術仕様ではなく、簡潔な自然言語での指示を提供するからです。LLMが人間の簡潔な要求をどれだけ正確に理解し、適切なコードを生成できるかを測定するのに役立ちます。

## ベンチマークの統計

次に、BigCodeBenchの特徴を定量的に示します。

### 全体的な統計

他の主要なプログラミングベンチマークと比較したときのBigCodeBenchの特徴は以下の通りです。

- テストケースが多い（平均5.6個）
- タスクの説明が長い（平均1112.5文字）
- 解答コードが長い（平均426.0文字、10.0行）
- 解答が複雑（循環的複雑度3.1）

全体的に、BigCodeBenchのタスクは複雑であることを示しています。

### ツール（ライブラリやAPI）の統計

以下のように、多様なツールを使用しています。

- 77の標準ライブラリと62の外部ライブラリ
- 合計723の関数呼び出し

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_4-1024x595.jpg)

BigCodeBenchで使用されている各ドメインのライブラリと関数呼び出しの例

また、平均して各タスクは2.8のライブラリと4.7の関数呼び出しを使用しており他のベンチマークと比べて非常に多様です。

### ドメインの多様性

BigCodeBenchは7つの主要なドメイン（計算、一般、可視化、システム、時間、ネットワーク、暗号化）をカバーしています。なお、各ドメインには複数のライブラリと関数呼び出しが含まれています。

タスクの63%が計算ドメイン、44%が一般ドメインを使用しています。

### 複雑さと多様性の比較

下の図で示されているように、BigCodeBenchが他のベンチマークと比較して、タスクの複雑さ（深さ）とツールの多様性（幅）の両方で優れています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_6.png)

様々なベンチマークの複雑さ（深さ）とツール使用の多様性（幅）を比較したグラフ

現実世界のプログラミングタスクにより近いことを示唆しています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_5-1024x466.png)

BigCodeBenchと他のベンチマークの詳細な統計比較

## LLMの評価

BigCodeBenchを使って様々なLLMの性能が評価されました。

### 評価方法

生成されたコードが正しく動作するかを測定するためにPass@K指標が使用されました。PASS@K指標とは、「K個の候補の中に正解が含まれている確率」を示します。

60種類のLLMがBigCodeBench-Completeで、35種類の指示チューニング済みLLMがBigCodeBench-Instructで評価されました。

BigCodeBench-Completeで評価されたLLMの代表例

- GPT-4
- GPT-3.5-Turbo
- Claude-3（Opus, Sonnet, Haiku）
- CodeLlama（70B, 34B, 13B, 7B）
- LLaMA 3（70B, 8B）
- Qwen2（72B, 57B-A14B, 7B）
- Mixtral-8x22B
- StarCode [r2](https://ai-data-base.com/archives/26434 "決定決定係数（R2）") （15B, 7B, 3B）

BigCodeBench-Instructで評価された指示チューニング済みLLMの代表例

- GPT-4
- GPT-3.5-Turbo
- Claude-3（Opus, Sonnet, Haiku）
- CodeLlama-Instruct（70B, 34B, 13B, 7B）
- LLaMA 3-Instruct（70B, 8B）
- Qwen2-Instruct（72B, 57B-A14B, 7B）
- Mixtral-Instruct-8x22B
- StarCode [r2](https://ai-data-base.com/archives/26434 "決定決定係数（R2）") -Instruct-15B

パラメーター非公開のモデルはそのまま使用され、オープンソースモデルは指示チューニング済み版が使用された形です。

なお、基本的にはPass@1（1回の試行で正解する確率）が報告されていますが、Pass@5も調査されています。

### 主な発見

**モデルサイズと性能**

一般的に、大きなモデルほど性能が良い傾向がありました。

ただし、例外もあります（例：Mistral-Largeは予想よりも性能が低い）。

**公開モデルと非公開モデル**

非公開モデル（OpenAI、Anthropicなど）が最も高い性能を示しました。

公開モデルの中では、Llama3-instruct-70Bが最も優れた性能を示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_7-1-1024x559.png)

**ドメイン別の性能**

最高性能のモデルでも、全てのドメインで優れているわけではありませんでした。

ネットワーク関連のタスクで苦戦する傾向があります。

一方で、計算、暗号化、一般的なドメインで高い性能を示す傾向があります。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_9.png)

様々なLLMのBigCodeBench-CompleteとBigCodeBench-Instructでのパフォーマンス（Pass@1スコア）を示すグラフ

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_10.png)

BigCodeBench-Completeにおける、LLMが生成したソリューションと正解のライブラリおよび関数呼び出しの使用比較

**指示チューニングの効果**

指示チューニングを受けたモデルは、ベースモデルよりも一般的に性能が高いことが分かりました。

ただし、指示チューニング済みモデルは長い入力を扱う際に重要な情報を省略してしまう傾向も見られました。

**簡潔な指示と詳細な指示**

モデルは「BigCodeBench-Instruct」よりも、より詳細な指示を含むB「igCodeBench-Complete」で良い性能を示しました。

人間の要求が簡潔な場合、モデルはまだ十分に理解できていないことを示唆する結果です。

**ツールの使用**

モデルは正解とは異なる関数呼び出しを使用することがありますが、それでもタスクを解決できる場合がありました。

ただし、より多様な関数呼び出しを使用すると、タスクの失敗率が高くなる傾向があります。

## 他のプログラミング能力ベンチマークとの比較

BigCodeBench-CompleteとBigCodeBench-Instructの結果が、有名な既存ベンチマークであるHumanEval+とLiveCodeBenchの結果と比較されました。

なお、比較には2つの統計的手法を使用しています。

1. ピアソンの [相関係数](https://ai-data-base.com/archives/26481 "相関係数") （r）  
	2つのデータセット間の線形関係の強さを測定
2. スピアマンの順位 [相関係数](https://ai-data-base.com/archives/26481 "相関係数") （ρ）  
	2つのデータセット間の単調関係の強さを測定

比較の結果、すべての [相関係数](https://ai-data-base.com/archives/26481 "相関係数") が高い値を示しており、BigCodeBenchの結果が他のベンチマークとよく一致していることが示されました。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_76844_11-1024x203.png)

BigCodeBench-CompleteとBigCodeBench-InstructのHumanEval+およびLiveCodeBenchとの 相関係数 （ピアソンのrとスピアマンのρ）

これはつまり、BigCodeBenchが既存のベンチマークと同様の能力を測定していることを示唆しています。しかし、完全に一致しているわけではないため、BigCodeBenchが独自の側面も測定していることが分かります。

また、一部のモデルは、異なるベンチマーク間で順位が変わる可能性があります。各ベンチマークが少しずつ異なる能力を測定しているためです。

なお、GPT-4oのようなトップモデルでも、BigCodeBenchではまだ完璧な成績を出していません。人間の性能と比較してLLMはまだ改善の余地があることを示しています。

## まとめ

本記事では、BigCodeBenchという新しいプログラミング能力評価のベンチマーク研究を紹介しました。

BigCodeBenchはLLMが複数のライブラリ関数を使用し、複雑な指示に従ってPythonコードを生成する能力を評価するものです。

また実験結果として、現在の最も高性能なLLMでもBigCodeBenchの60%程度しか解決できず、人間の開発者の97%という成績と比べるとまだ改善の余地があることが明らかになりました。  
なお、LLMは計算や暗号化などの特定の分野で優れた性能を示す一方、ネットワーク関連のタスクでは苦戦する傾向が見られました。

このように難易度の高いベンチマークは現在のLLMの課題を示してくれるものであり、ユーザーや開発者がLLMを実用する際にも参考になる可能性があります。

- 参照論文URL： [https://arxiv.org/abs/2406.15877](https://arxiv.org/abs/2406.15877)
- プロジェクトページ： [https://bigcode-bench.github.io/](https://bigcode-bench.github.io/)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[高解像度な深度マップを高速生成するモデル『Depth Pro』Appleが公開](https://ai-data-base.com/archives/76790)

[「あなたは〇〇です」などのペルソナ設定を与えても、事実に基づく質問への回答精度は向上しないとの主張](https://ai-data-base.com/archives/76905)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)