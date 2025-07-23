---
title: "マルチモーダルLLMにおける欠点と原因を明らかにする調査研究の結果"
source: "https://ai-data-base.com/archives/68367"
author:
  - "[[AIDB Research]]"
published: 2024-04-30
created: 2025-06-13
description: "GPT-4VなどのマルチモーダルLLMは優れた能力を示す一方で、意外な弱点があることが明らかになってきました。時として驚くほど単純な間違いを犯すのです。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

GPT-4VなどのマルチモーダルLLMは優れた能力を示す一方で、意外な弱点があることが明らかになってきました。時として驚くほど単純な間違いを犯すのです。

その理由は、視覚的な能力の欠如によるものなのか、言語理解の問題なのか、それともその両方が絡み合っているのか？研究チームは、原因を突き止めるため、大規模な実験と分析を行いました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_-68367-1024x576.jpg)

**参照論文情報**

- タイトル：Eyes Wide Shut? Exploring the Visual Shortcomings of Multimodal LLMs
- 著者：Shen [gb](https://ai-data-base.com/archives/26343 "勾配ブースティング") ang Tong, Zhuang Liu, Yuexiang Zhai, Yi Ma, Yann LeCun, Saining Xie
- 所属：New York University, FAIR（Meta）, UC Berkeley

**本記事の関連研究** ：

- [マルチモーダルLLMに心の目を与える『Visualization-of-Thought』プロンプティングが空間推論タスク性能を向上させる](https://ai-data-base.com/archives/67128)
- [マルチモーダルLLMの技術や開発トレンド、26種類のモデル例を網羅的にまとめた報告](https://ai-data-base.com/archives/63257)
- [Appleが開発　スマホに特化したマルチモーダルLLM『Ferret UI』](https://ai-data-base.com/archives/67840)
- [Appleが開発、スマホのスクリーンを理解してユーザーと対話できる『ReALM』端末上で動く軽量モデル](https://ai-data-base.com/archives/66828)

## 背景

画像認識能力を備えたLLMがいくつか発表され、マルチモーダルLLMと呼ばれています。GPT-4Vはその代表格です。

マルチモーダルLLMの画像認識能力は優れた能力を示す一方で、基本的な点で間違いを犯すことがあることが分かってきています。

ほとんどのマルチモーダルLLMは、事前に学習された視覚モデルと言語モデルを基に作られています。研究者たちは、事前学習された視覚モデルの限界が、それを使用するマルチモーダルLLMに引き継がれる可能性があるという仮説を立てました。つまり能力上の欠点は、言語モデルではなく視覚モデルにあるのではないかということです。

オープンソースのマルチモーダルLLMは、事前学習されたCLIPというモデルを視覚エンコーダーとして採用していることが多いです。そこで研究者たちは、CLIPが苦労する例を特定することから始めました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_68367_1-1024x547.jpg)

GPT-4Vの視覚的質問応答の欠点を示す例。赤字は誤った応答、緑字は誤答に対する説明の創作を示す。

## CLIPブラインドペアの発見とベンチマーク

研究者たちは、CLIP視覚エンコーダーが処理に苦労する画像を直接見つけ出すのは難しいと考えました。そこで、視覚モデル内のブラインドペアを自動的に見つけ出すアイデアを拡張しました。ブラインドペアとは、モデルが似ているとみなしていても実際には視覚的に大きく異なる2つの画像のペアです。

ブラインドペアを探す原理はシンプルで、2つの画像に明らかな視覚的違いがあるにもかかわらずCLIP視覚エンコーダーによって同じように処理されているものを見つけます。なお、2つの画像間の視覚的な違いを測定する目的では、 [DINOv2](https://dinov2.metademolab.com/) を使用しました。 [DINOv2](https://dinov2.metademolab.com/) は自己教師あり学習によって学習されたモデルで、画像の詳細をより豊かに捉えていると考えられています。

### CLIPブラインドペアからのベンチマークの設計

研究者たちは、集めたCLIPブラインドペアを利用して、MMVP(Multimodal Visual Patterns)というベンチマークを作成しました。視覚的な質問に答えるためのベンチマークです。各CLIPブラインドペアの画像について、CLIP視覚エンコーダーが見落とした細かい部分を手作業で特定し、詳細を探る質問を作成しました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_68367_2-1024x436.jpg)

ベンチマークを作成した目的は、マルチモーダルLLMが一見基本的な質問で失敗し、重要かつ細かい点を見落とすかどうかを判断することでした。そのため、質問は意図的に単純明快で曖昧さのないものにしました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_68367_3-1024x768.jpg)

MMVPベンチマークの質問例

### ベンチマーク結果

研究者たちは、最先端のオープンソースモデルと非公開モデルに対して質問を評価しました。また、ユーザー調査を通じて人間の性能も評価しました。ユーザーには300の質問がランダムな順序で提示されました。画像のペアについては、そのペアに関連する両方の質問に正確に答えた場合にのみ、正しく答えたとみなしました。

人間の参加者は、質問の平均95.7%に正確に答えました。一方でモデルは、最先端のGPT-4VとGeminiでさえ、基本的な質問に苦戦していました。そしてGPT-4Vを除いたモデルに関しては25%（ランダムに選んだときの [正解率](https://ai-data-base.com/archives/25930 "正解率") ）を下回るスコアでした。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_68367_4-1024x734.png)

最先端のモデルと人間のベンチマーク結果

## 浮かび上がるパターン

研究者たちは、CLIP視覚エンコーダーが一貫して誤解釈する可能性のある9つのパターンをまとめました。

- Orientation and Direction（向きと方向）: 犬やアヒルの向いている方向、スクールバスの向きなど、物体の向きや移動方向に関する質問。
- Presence of Specific Features（特定の特徴の有無）: 画像内の特定の要素や特徴の存在や不在に焦点を当てた質問。
- State and Condition（状態と条件）: 旗が風になびいているかどうか、地面が濡れているかどうかなど、物体の状態や条件に関する質問。
- Quantity and Count（量と数）: 画像内に存在する物体や特徴の数に関する質問。
- Positional and Relational Context（位置と関係性）: 画像内の物体や要素の位置関係や周囲との関係性を理解する能力に関する質問。
- Color and Appearance（色と外観）: 特定の物体や要素の色に関する質問。
- Structural and Physical Characteristics（構造的・物理的特性）: 画像内の物体の物理的属性や構造的特徴を識別・分析する能力に関する質問。
- Text（テキスト）: 画像内に存在するテキストや記号に関する質問。
- Viewpoint and Perspective（視点と遠近法）: 写真が撮影された視点や角度に関する質問。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_68367_7.png)

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_68367_5-1024x358.jpg)

MMVP-VLMの9つの視覚パターンの例

次に研究者たちは、スケーリングが失敗を軽減できるかどうかを体系的に評価しました。CLIPモデルは、学習データとモデルの大きさの両面で大規模なスケールアップが行われており、その進歩は著しいものがあります。しかし調査の結果、9つの視覚パターンのうち7つは、大規模なCLIPベースのモデルでも解決できないことが示唆されました。つまり、モデルやデータの大きさを増やすだけでは失敗に対処するには不十分だということです。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_68367_8-1024x284.jpg)

### CLIPモデルの失敗とマルチモーダルLLMの失敗の関連性

そして研究者たちは、CLIPモデルが苦手とする視覚パターンとマルチモーダルLLMの性能の間に強い関連性があることを発見しました。CLIPが特定の視覚パターン(例えば「向き」)で苦戦すると、マルチモーダルLLMも苦戦します。つまり、CLIP視覚エンコーダーがマルチモーダルLLMシステムのボトルネックになる可能性があることを示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_68367_9-1024x480.png)

CLIPとマルチモーダルLLMのパターンごとの性能

### CLIP改善に向けて

マルチモーダルLLMの欠点がCLIPモデルへの依存に起因していると判断されたため、DINOv2のような視覚中心の表現をMLLMに統合することが試されました。Mixture-of-Feature (MoF) 戦略と命名されています。

まず、CLIPとDINOv2の [特徴量](https://ai-data-base.com/archives/26406 "特徴量") を線形に混合したAdditive-Mixture-of-Featureの結果、DINOv2は理解力の向上には効果があるものの、指示に従う能力が低下するというトレードオフがあることがわかりました。

そこで、CLIPとDINOv2の両方の視覚トークンを空間的に混合するInterleaved-Mixture-of-Feature手法を試したところ、指示に従う能力を維持しつつ、視覚的な理解力を大幅に向上させることができました。マルチモーダルLLMの理解力を改善するための第一歩です。

詳しくは次のセクションで紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68367_10-1024x318.jpg)

異なるMixture-of-Feature (MoF) 戦略

## 実験

研究者たちは今回、マルチモーダルLLMにおける視覚エンコーダーを研究するための実験対象としてLLaVAを選びました。LLaVAは事前学習されたCLIPエンコーダーを使用し、視覚トークンと言語トークンを整列させるためのアダプターを学習するフレームワークです。

アダプターとは、異なるモデル間の情報の流れを調整するための中間層のことです。今回の研究では、事前学習された視覚モデルと言語モデルをスムーズに接続するための役割を果たしています。

視覚エンコーダーには、CLIP-ViT-L-14とDINOV2-ViT-L-14の2つを使用しました。一貫性のある公正な比較を確保するために、LLaVAと同じ実験設定でモデルを学習およびファインチューニングしました。

### Additive-Mixture-of-Featureの実験

まず事前学習されたDINOv2エンコーダーをマルチモーダルLLMに追加し、CLIPの事前学習済みエンコーダーとそれを混合しました。係数αを使用してCLIP [特徴量](https://ai-data-base.com/archives/26406 "特徴量") の割合を制御し、1-αを使用してDINOv2 [特徴量](https://ai-data-base.com/archives/26406 "特徴量") の量を制御し、それらを線形に加算しました。

モデルの視覚的な理解力はMMVPによって評価し、指示に従う能力はLLaVAベンチマークによって評価しました。

実験の結果、以下の2つの洞察が得られました。

1. DINOv2 [特徴量](https://ai-data-base.com/archives/26406 "特徴量") の割合が増加すると、マルチモーダルLLMの指示に従う能力が低下する。
2. DINOv2 [特徴量](https://ai-data-base.com/archives/26406 "特徴量") の割合が高いほど、モデルの視覚的な理解力は向上するが、DINOv2の割合が0.75を超えると減少し、さらに指示に従う能力が著しく損なわれる。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68367_11-1024x441.png)

Additive-Mixture-of-Featureの結果

つまり、DINOv2 [特徴量](https://ai-data-base.com/archives/26406 "特徴量") を追加したりCLIPをDINOv2に完全に置き換えたりすると、視覚的な理解力と指示に従うことのトレードオフが発生します。DINOv2 [特徴量](https://ai-data-base.com/archives/26406 "特徴量") の割合が高いほど、モデルの視覚認識は向上しますが、言語的指示に従う能力は低下し、CLIP [特徴量](https://ai-data-base.com/archives/26406 "特徴量") は言語理解を高めますが、視覚的な理解力は低下します。

### Interleaved-Mixture-of-Featureの実験

研究者たちは、CLIPとDINOv2の両方の埋め込みの長所を活用して画像表現を向上させるため工夫を考えました。画像をCLIPとDINOv2のエンコーダーに同時に入力し、出てきた [特徴量](https://ai-data-base.com/archives/26406 "特徴量") をアダプターで別々に処理します。そして、CLIPとDINOv2から処理された [特徴量](https://ai-data-base.com/archives/26406 "特徴量") を、それぞれの空間的な位置関係を維持しつつ、交互に配置して混ぜ合わせます。

実験の結果、この手法は、指示に従う能力を維持しながら、視覚的な理解力を大幅に向上させることがわかりました。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_68367_12-1024x332.png)

なお実験は、画像の解像度を変えたりLLaVA-1.5の設定でも行われ、同じように性能が上がることが確認されました。また、POPEというベンチマークでも評価し、視覚的な理解におけるハルシネーション（幻覚）をテストしましたが、元のLLaVAモデルよりも常に良い結果が出ました。

単に画像の解像度を上げて情報量を増やしても、視覚的な理解力は上がりません。大事なのは、ビジョンのみの自己学習モデルとVLM(Vision-Language Model)の間でMoF(Mixture-of-Features)を交互に組み合わせることでした。

## まとめ

本記事では、マルチモーダルLLMの視覚的な欠点とその原因を探る研究を紹介しました。一連の実験によると、マルチモーダルLLMの失敗の原因は、CLIPエンコーダーの欠陥にあることが示唆されています。

なお、データとモデルのスケーリングだけでは、CLIPモデルの固有の欠陥を修正できないことも明らかになりました。

そして、慎重に設計されたMixture-of-Features(MoF)アプローチと新しい評価指標の開発により、モデルの改善が期待できると述べられています。

この研究は、マルチモーダルLLMの性能向上に向けて、言語モデルだけでなく視覚モデルの改善も重要であることを示唆しています。

- URL： [https://arxiv.org/abs/2401.06209](https://arxiv.org/abs/2401.06209)
- GitHub： [https://tsb0601.github.io/mmvp\_blog/](https://tsb0601.github.io/mmvp_blog/)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMでWikipediaのような文書を作成する方法「STORM」スタンフォード大学研究者ら開発](https://ai-data-base.com/archives/68269)

[LLMに対して、「人間には意味が分からない滅茶苦茶な文」でプロンプトを送る手法『LM Babel』](https://ai-data-base.com/archives/68433)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)