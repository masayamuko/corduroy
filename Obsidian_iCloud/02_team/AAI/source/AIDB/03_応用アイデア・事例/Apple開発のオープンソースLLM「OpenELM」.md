---
title: "Apple開発のオープンソースLLM「OpenELM」"
source: "https://ai-data-base.com/archives/68614"
author:
  - "[[AIDB Research]]"
published: 2024-05-07
created: 2025-06-13
description: "Appleが公開した最新のオープンソース小型LLMに関する研究を紹介します。OpenELMは、layer-wise scalingと呼ばれる手法を用いることで、限られたパラメータ数でも高い性能を達成しています。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

Appleが公開した最新のオープンソース小型LLMに関する研究を紹介します。

OpenELMは、layer-wise scalingと呼ばれる手法を用いることで、限られたパラメータ数でも高い性能を達成しています。また、事前学習に使用したデータセットや学習の詳細、評価方法なども公開されており、透明性の高い研究となっています。

本記事では、OpenELMの特徴的な [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") 、事前学習の内容、評価実験の結果などを詳しく見ていきます。さらに、OpenELMをiPhoneやiPadなどのApple製品上で動作させるためのMLXライブラリへの変換手法についても触れていきます。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614-1024x576.jpg)

**参照論文情報**

- タイトル：OpenELM: An Efficient Language Model Family with Open Training and Inference Framework
- 著者：Sachin Mehta, Mohammad Hossein Sekhavat, Qingqing Cao, Maxwell Horton, Yanzi Jin, Chenfan Sun, Iman Mirzadeh, Mahyar Najibi, Dmitry Belenko, Peter Zatloukal, Mohammad Rastegari
- 所属：Apple

## 背景

これまで、AppleがAIモデルをオープンに公開することはほとんどありませんでした。しかしこの度スタンスを一気に変え、オープンソースLLMの「OpenELM」を公開しました。Appleは今回の公開の目的を「オープンな研究コミュニティを支援し、発展させること」としています。

今回のリリースでは、以下のサイズのOpenELMが公開されました。

- 270M
- 450M
- 1.1B
- 3B

モデルは非常に軽量であり、iPhoneやiPad上でも動作できるとのことです。OpenELMは軽量でありながら、同程度のサイズのオープンLLMと比較して、高性能であることが分かります。

加えて、OpenELMをiPhoneやiPadなどのApple製品のローカル上で実行させるための「MLXライブラリへの変換コード」も公開されており、これを使うことでiPhoneやMac上でOpenELMを実行できます。

さらに、透明性を維持するために、OpenELMの学習にはおよそ1.8兆トークンのオープンデータが用いられ、学習スクリプトやログ等も公開されています。

次のセクションでは、OpenELMの具体的な構造を詳しく解説します。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_12-1024x227.png)

同程度のパラメータ数の他のモデルと比較して、OpenELMが高い精度を達成していることを示す表

## OpenELMのモデル構造

OpenELMのモデル構造は、GPTやPaLMなど多くの最先端LLMと同様に、 [Transformer](https://ai-data-base.com/archives/26535 "Transformer") のdecoder部分のみを使用する「Decoder-only [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") 」をベースとしています。

その他、モデルの詳細設計については、以下の通りです。

- 学習可能なバイアス・パラメータを全結合（線形）層で使用しない
- RMSNormを用いた [正規化](https://ai-data-base.com/archives/26401 "正規化") を適用
- 位置情報の符号化には回転位置埋め込み(ROPE)を使用
- Multi head attentionの代わりにグループ化クエリーアテンションを使用
- Feed Forward networkをSwiGLU FFNに置き換える
- スケーリングされたdot-product attentionの計算にflash attentionを使用
- MetaのLLamaと同じトークナイザを使用

加えて、均一にパラメータを割り当てるのではなく、Layer-wise scalingという技術によってタスクに適した割り当てを行い、パラメータ効率を高めています。

このLayer-wise scalingは、2020年に [Mehtaらが提案したDeLighTモデル](https://arxiv.org/abs/2008.00623) の考え方を応用したものと考えられます。

### Layer-wise scaling

Layer-wise scalingは、 [Transformer](https://ai-data-base.com/archives/26535 "Transformer") の各層に対して、パラメータ数を均一に割り当てるのではなく、層ごとに異なるパラメータ数を割り当てる手法です。

既存の多くのLLMにおいて、モデル内の [Transformer](https://ai-data-base.com/archives/26535 "Transformer") 層の構成はほとんど同じであり、パラメータが層全体で一様に割り当てられています。

一方で、OpenELMの [Transformer](https://ai-data-base.com/archives/26535 "Transformer") 層は、それぞれ異なる構成を持っています。

具体的には、Multi-head attention (MHA)のアテンションヘッド数と、Feed-forward network (FFN)の次元数を、各層で変化させています。

- アテンションヘッド数は、入力に近い層ほど小さく、出力に近づくにつれて大きくなるよう、層ごとに線形的にスケーリング
- FFNの次元数も同様に、入力側で小さく出力側で大きくなるよう、層ごとに線形的にスケーリング

例えば、層数Nのモデルにおいて、i番目の層のアテンションヘッド数とFFN次元数は以下のように計算されます。

![](https://lh7-us.googleusercontent.com/wVYHKcili3Ry3IeQu1d8FuxqKKJfiRxHlh0QUrYd4BZjKp8DQFo332-NBHse4Ftx7GrG-n41wjiGIa-mgAe05KrqeB5UCG33bi-tMryJ9KK03LS4auA0VR0jBJ_KD16AGjH0DlHV_YRdnCb_KaRFBTQ)

上記の数式の各記号の意味は、以下の通りです。

- nhiは、i番目の層のアテンションヘッド数
- dmodelはモデルの隠れ層の次元数
- dhは各ヘッドの次元数
- miは、i番目の層のFFNの次元数をdmodelの何倍にするかを決める乗数で、iによって層ごとに線形的にスケーリングされる
- iとiは、それぞれi番目の層でのアテンションヘッド数とFFN次元数のスケーリング率を決めるパラメータ
- Nはモデルの総層数
- iは層の番号(0からN-1まで)

これらは層の番号iに応じて、minからmax、minからmaxの間を線形に変化します。

つまり、この数式(1)は、 [Transformer](https://ai-data-base.com/archives/26535 "Transformer") の各層について、アテンションヘッド数とFFN次元数を入力側の層ほど小さく、出力側の層ほど大きくなるように、層の番号に応じて線形的にスケーリングすることを表しています。

### 学習環境

OpenELMの事前学習には、以下の公開データセットが使用されています。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_6.png)

OpenELMの事前学習に使用された公開データセットの一覧

これらのデータセットには、合計約1.8兆トークンが含まれています。

また、OpenELMの学習には、CoreNet(旧称CVNets)というフレームワークが使用されています。

そして、270M、450M、1.1B、3Bの4つのパラメータサイズのOpenELMモデルを学習し、一部のモデルではFSDP(Fully Sharded Data Parallel)とactivation checkpointingを使用しています。

モデルのハイパーパラメータに関する詳細については、以下の表の通りです。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_7.png)

## 評価方法

LLMを多数の異なる評価タスクでテストするためのフレームワークである「LM Evaluation Harness」を用いて、様々なタスクでの性能を評価しています。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_5-1024x190.png)

OpenELMの評価に使用されたタスクとメトリクスの一覧 (a) Standard zero-shot tasks (b) OpenLLM leaderboard tasks (c) LLM360 leaderboard tasks

左から「Standard zero-shot tasks (標準的なゼロショットタスク)」「OpenLLM leaderboard tasks (OpenLLMリーダーボードのタスク)」、「LLM360 leaderboard tasks (LLM360リーダーボードのタスク)」です。

具体的には、以下のようなタスクが含まれます。

Standard zero-shot tasksは常識問題の能力を問う、ARC easy、ARC challenge、BoolQ、HellaSwag、PIQA、SciQ、WinoGrandeの7つのタスクで構成されています。

OpenLLM leaderboard tasksはOpenLLMリーダーボードに含まれる、ARC challenge、HellaSwag、MMLU、TruthfulQA、WinoGrandeの5つのタスクを使用しています。

LLM360 leaderboard tasksは、LLM360リーダーボードに含まれる、ARC challenge、CrowS-Pairs(英語版)、HellaSwag、WinoGrande、MMLU、PIQA、RACEの7つのタスクを使用しています。

## 評価結果

### 事前学習の性能結果

OpenELMをzero-shotとfew-shotでテストし、PyThia、Cerebras-GPT、TinyLlama、OpenLM、MobiLlama、OLMoなどのオープンLLMと比較しています。

下図より、学習イテレーションを重ねるほど、ほとんどのタスクでOpenELMの精度が向上することが分かります。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_2-1024x334.png)

学習イテレーションを重ねるほど、ほとんどのタスクでOpenELMの精度が向上することを示すグラフ

また、様々な評価フレームワークを用いた比較結果は、以下の通りです。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_3-1024x781.jpg)

他の公開モデルとの性能比較結果 (a) Standard zero-shot tasksでの結果 (b) OpenLLM leaderboard tasksでの結果 (c) LLM360 tasksでの結果

これらの結果より、OpenELMは他の同サイズモデルよりも高い性能を達成していることが分かります。例えば、1.1BパラメータのOpenELMの場合、OLMoより1.28% (Tab. 4a)、2.36% (Tab. 4b)、1.72% (Tab. 4c)ほど高性能であることが分かります。

### Instruction tuningの結果

UltraFeedbackデータセット(60kプロンプト)を用い、Alignment Handbookライブラリによって、Instruction tuningの性能を評価しています。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_4-1024x856.png)

Instruction tuningがOpenELMの性能を向上させることを示す表

上の結果表より、Instruction tuningによって、様々な評価フレームワークにおけるOpenELMの平均精度が1〜2%向上していることが分かります。

### Parameter-efficient fine-tuning (PEFT) の結果

CommonSense推論の学習・評価設定を使用 (170kの学習サンプル)して、LoRAやDoRAなどのPEFT手法をOpenELMに適用し、3 [エポック](https://ai-data-base.com/archives/26594 "エポック") 分のファインチューニングした際の性能を評価しています。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_1-1024x279.png)

LoRAとDoRAによるファインチューニングの結果比較

LoRAとDoRAを適用した場合、与えられたCommonSense推論データセットで同等の性能を示しています。

### 推論速度に関するテスト

推論速度を検証するために、トークンスループット(秒あたりの処理トークン数)を、プロンプト処理(pre-fill)とトークン生成の2つに分けて測定し、合計スループットも測定しています。

次に、最初のモデルで1024トークンを生成させます。そして、各モデルの測定前に、フレームワークによる自動チューニングのために1回のフォワードパスを実行してウォームアップします。

最後に、すべての実験でキーバリューキャッシングを使用し、プロンプトトークンに加えて1024トークンを生成させます。

OpenELMとMobiLlama、OLMoの推論スループットを比較した結果は、以下の表の通りです。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_10.png)

推論速度のベンチマーク結果 (a) NVIDIA CUDA / Linuxでの結果 (b) Apple macOSでのMLXによる結果

同等のパラメータ数と比較して高い精度にもかかわらず、OpenELMはOLMoよりも遅いことが分かります。

また、以下の表はOpenELMの推論スループットにおけるRMSNorm実装の影響を示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68614_8-1.png)

正規化 層(LayerNormとRMSNorm)の違いによるスループットへの影響を示す表

結果より、OpenELMの処理時間の遅延の大部分は、RMSNormの実装に起因することが判明しました。というのもRMSNormでは、小さな入力を処理する多数の個別のカーネルを起動することになります。

そこで、RMSNormをApexのRMSNormに置き換えることで、OpenELMのスループットが大幅に向上します。

ただし、最適化されたLayerNormを使用したモデルと比較すると、依然としてパフォーマンスに大きな差があります。

この原因は、以下の2つとされています。

- OLMoの33のLayerNorm層に対して、OpenELMは113のRMSNorm層を持つこと
- ApexのRMSNormが小さな入力に対して最適化されていないこと

以上のように、RMSNormの実装が推論速度低下の要因となっていることが分かり、今後の最適化の方向性が示唆されています。

## まとめ

本記事では、Appleが公開したオープン小型LLMの「OpenELM」に関する研究をご紹介しました。

本研究の限界点として、有害な出力を生成する可能性が当然あります。したがって、ユーザーと開発者は、徹底的な安全性テストを実施し、特定の要件に合わせた適切なフィルタリングメカニズムを実装することが不可欠とのことです。

なお、OpenELMのモデルや学習コード、データ、MLXなどは、GitHubに公開されており、ローカル等で推論・カスタマイズできます。

- URL： [https://arxiv.org/abs/2404.14619](https://arxiv.org/abs/2404.14619)
- GitHub： [https://huggingface.co/apple/OpenELM](https://huggingface.co/apple/OpenELM)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[量子化はLLMの性能にどう影響を与えるか？モデルが持つ「自信」の観点から説明](https://ai-data-base.com/archives/68518)

[LLMのプロンプトに数百から数千の例を含める超長尺のコンテキスト内学習（In-context learning）とファインチューニングの性能比較](https://ai-data-base.com/archives/68564)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)