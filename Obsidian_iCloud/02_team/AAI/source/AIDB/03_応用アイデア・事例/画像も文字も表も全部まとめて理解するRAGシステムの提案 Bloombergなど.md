---
title: "画像も文字も表も全部まとめて理解するRAGシステムの提案 Bloombergなど"
source: "https://ai-data-base.com/archives/78490"
author:
  - "[[AIDB Research]]"
published: 2024-11-15
created: 2025-06-13
description: "本記事では、複数の文書やページから図や表を含む情報を抽出して質問に答えるRAGシステムのアプローチ「M3DOCRAG」を紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、複数の文書やページから図や表を含む情報を抽出して質問に答えるRAGシステムのアプローチ「M3D [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") AG」を紹介します。

一般的なRAGは、単一ページしか扱えない、または視覚的な情報（表やグラフ）を適切に処理できないという課題があります。しかし、さまざまな現場ではより高度なシステムが求められており、本研究はそのニーズに応える進展と言えます。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490-1024x576.jpg)

**参照論文情報**

- タイトル：M3D [ocR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") AG: Multi-modal Retrieval is What You Need for Multi-page Multi-document Understanding
- 著者：Jaemin Cho, Debanjan Mahata, Ozan Irsoy, Yujie He, Mohit Bansal
- 所属：UNC Chapel Hill, Bloomberg

## 背景

文書から情報を抽出して質問に答えるLLMベースのRAGシステムには、現在2つの主な課題があります。

第一に、既存の手法の多くは単一ページの文書しか扱えません。実際のビジネスシーンで必要な情報が複数の文書やページに分散しているため、この点は大きな障壁になります。

第二に、 [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") などのテキスト抽出に依存したRAGアプローチでは、文書内の表やグラフといった視覚的な情報を適切に処理できません。視覚要素は重要な情報を含んでいることが多く、テキストだけを扱う手法では不十分です。

金融、医療、法務をはじめとした、大量の文書を日常的に扱う分野では上記に対応できることはとても重要になってきます。今後様々な分野で、複数の長文文書や複雑なレイアウトを効率的に処理できるシステムへのニーズが高まっていくことが考えられます。

このような課題に対応するため、Bloombergなどの研究者らは、複数文書・複数ページにまたがる文書理解と、テキスト・画像を統合的に処理できるマルチモーダルなRAGシステムの開発に取り組みました。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_1-1024x580.png)

マルチモーダルな文書理解パイプラインの比較。(a)単一ページのDocVQA、(b)テキストベースのRAG、(c)提案手法のM3D OCR AGを示している。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_2-1024x289.png)

既存のDocVQAデータセット（単一文書に特化した質問）と提案するM3DOCVQA（3000以上のPDF文書に対する一般的な質問）の比較。

## ”マルチモーダル・マルチページ・マルチ文書理解”

M3D [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") AGは以下の特徴を持つフレームワークとして開発されました。

1. 文書をページ単位で画像として扱い、効率的な検索（ColPali）と詳細な理解（Qwen2-VL）を組み合わせる
2. テキストのみのRAGシステムと比較して、特に図表やグラフを含む質問で大きな性能向上
3. 単一文書内の質問応答だけでなく、3000以上のPDF文書から必要な情報を見つけ出して回答する能力もある

[OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") などのテキスト抽出に依存せず、文書内の視覚的な情報（表やグラフなど）も含めた総合的な理解を行います。

### システムの処理の流れ

入力された複数の文書（PDFやスキャン文書など）は、以下の手順で処理されます。

#### （１）文書の前処理段階

1. 入力された全てのPDFドキュメントを、ページごとにR [GB](https://ai-data-base.com/archives/26343 "勾配ブースティング") 画像に変換
2. 各ページ画像からColPaliを使用して視覚的な [特徴量](https://ai-data-base.com/archives/26406 "特徴量") （ビジュアル埋め込み）を抽出
3. 抽出された [特徴量](https://ai-data-base.com/archives/26406 "特徴量") をインデックス化して保存

#### （２）ページ検索

1. 質問文と各ページの関連度をMaxSimスコアで計算
2. 大規模文書集合での高速検索のため、IVFなどの近似検索インデックスを使用
3. 最も関連度の高いK個のページを選択

#### （３）質問応答

1. 選択されたページをQwen2-VL（マルチモーダル言語モデル）に入力
2. テキストと視覚情報を統合的に理解して回答を生成
3. 使用された情報源（該当ページ）を参照情報として付加

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_3-1024x477.png)

M3D OCR AGフレームワークの全体像。文書埋め込み、ページ検索、質問応答の3段階のプロセス。

## 新しいベンチマーク

研究チームは、オープンドメインでの文書理解能力を評価するための新しいベンチマークデータセット「M3DOCVQA」を作成しました。 [MultimodalQA](https://github.com/allenai/multimodalqa) の質問-回答ペアを拡張し、より複雑な文書理解タスクに適応させたものです。

- 2,441個のマルチホップ質問
- 3,368のPDF文書（合計41,005ページ）
- テキスト、画像、表など多様な情報を含む

といった特徴があります。MultimodalQAと異なる点は、短い文脈ではなく完全なPDF文書から必要な情報を見つけ出す必要がある点です。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_4-1024x281.png)

M3DOCVQAのPDFコレクションの作成プロセス。MultimodalQAからURLを収集し、ウェブブラウザでレンダリングしてPDFを作成する流れを説明。

```js
評価はMultimodalQAの基準に従い、Exact Match（EM）と<a href="https://ai-data-base.com/archives/26112" data-internallinksmanager029f6b8e52c="5" title="F1スコア（F値）" target="_blank" rel="noopener">F1スコア</a>で測定されます。また、将来の研究のために24,162のWikipedia PDFからなる訓練用データセットも提供されています。
```

## 実験内容

### 使用モデル

実験では複数のLLMが使用されました。

1. マルチモーダルLLM
- Idefics2 8B
- Idefics3 8B
- InternVL2 8B
- Qwen2-VL 7B
1. テキストベースの比較対象
- ColBERT v2 + Llama 3.1 8B

比較対象は、下記既存のRAGシステムです。

- Text RAG (ColBERT v2 + Llama 3.1)
- DocVQAモデル（Arctic-TILT、GRAM、ScreenAIなど）

### データ準備

評価には前述の「M3DOCVQA」データセットが使用されました。論文、報告書、プレゼン資料など、実際のビジネス文書を参考に作られました。質問の種類も「この表が示す売上傾向について説明してください」「この図表の結果は本文でどのように解釈されていますか」といった、実務で想定される問いかけが含まれています。

### 評価手法

システムの評価は以下の2つの観点から行われます。

1. 回答の正確性

人間の専門家が作成した模範解答と、システムの回答を比較します。例えば「2023年の売上高は前年比15%増加」という回答に対し、数値の正確さと説明の適切さを確認します。

1. 根拠の適切さ

システムが「なぜそう判断したか」の説明に使用した文書の部分が適切かを評価します。例えば売上の説明をする際に、正しい年度の売上表やグラフを参照しているかを確認します。

### 実装環境

- [GPU](https://ai-data-base.com/archives/26570 "GPU") NVIDIA A100 80 [GB](https://ai-data-base.com/archives/26343 "勾配ブースティング") 4台
- CPU Intel Xeon 64コア
- メモリ 512 [GB](https://ai-data-base.com/archives/26343 "勾配ブースティング")

### 評価指標

- 回答の正確性を示すAccuracy（ [正解率](https://ai-data-base.com/archives/25930 "正解率") ）
- 回答の質を評価するRouge-L（文章の類似度）
- 処理に要した時間（秒単位）
- [GPU](https://ai-data-base.com/archives/26570 "GPU") メモリの使用量（ [GB](https://ai-data-base.com/archives/26343 "勾配ブースティング") 単位）
- 回答生成の速度（文字/秒）
- システムの一貫性（同じ質問への回答の安定性）

## 実験結果

M3D [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") AGシステムは、従来の文書理解システムと比較して大きな性能向上を示しました。

M3DOCVQA（オープンドメイン）では、

- 全体的なF1スコア: 36.5%
- 画像ベースの質問: 24.7%
- 表ベースの質問: 30.4%
- テキストベースの質問: 41.2%  
	（テキストのみのRAGシステムと比較して、特に視覚的な質問で大きな性能向上）

でした。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_5-1024x348.png)

M3DOCVQAでのオープンドメインDocVQA評価結果。証拠のモダリティ（画像/表/テキスト）、質問のホップ数（単一/複数）、全体的な性能を比較。

また、MP-DocVQA（クローズドドメイン）では、以下の通りでした。

- ANLS（答えの正確さ）: 0.84
- ページ検索精度: 81.05%  
	（これは現在の最高性能）

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_6-1024x566.png)

MMLon gB ench-DocでのクローズドドメインDocVQA評価結果。証拠のモダリティ（テキスト/レイアウト/チャート/表/画像）、証拠の位置（単一ページ/複数ページ/回答不能）、全体的な精度を比較。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_7.png)

MP-DocVQAでのクローズドドメインDocVQA評価結果。回答の正確さ（ANLS）とページ検索の性能（R@1）を比較。

### システムの処理速度

処理速度は検索と質問応答の2段階で計測されています。検索段階では、基本的な方式（FlatIP）で21.0秒かかっていた処理を、近似検索インデックス（IVFFlat）の採用により1.8秒まで短縮できました。さらに高速な方式（IVFPQ）では0.2秒まで短縮できましたが、若干の精度低下が見られました。

質問応答の段階では、処理するページ数に応じて時間が増加し、1ページあたり1.1秒、2ページで2.4秒、4ページで4.8秒の処理時間が必要でした。このトレードオフを考慮しながら、実用的な設定を選択できることが示されています。

注：論文では具体的なメモリ使用量や他のモデルとの処理速度の比較は示されていません。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_8.png)

M3DOCVQAにおける異なるインデックス戦略の速度と精度のトレードオフ。検索と質問応答の遅延時間、精度を比較。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_9.png)

M3D OCR AGフレームワーク内での異なるマルチモーダル言語モデルの比較。3つのベンチマーク（M3DOCVQA/MMLon gB ench-Doc/MP-DocVQA）での性能を評価。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_10.png)

M3D OCR AGフレームワーク内での異なるマルチモーダル検索モデルの比較。3つのベンチマークでの性能を評価。

### 特徴的なユースケース

論文では以下のような具体的な成功例が示されています。

（１）画像のみからの情報抽出

ゲームのロゴから「バイクに寄りかかる人物」を正確に識別できています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_11.jpg)

画像のみに含まれる情報（バイクに寄りかかる人）を検出できた例

（２）複数ページにまたがる情報統合

レース結果の詳細な記録から特定のトラックでの記録を正確に抽出できています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_12.png)

複数ページ/文書にまたがる推論が必要な例

（３）知識と検索の組み合わせ

チームのロゴに関する既存知識（バレンシアのバットのロゴ）と検索結果を組み合わせた回答を生成しています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78490_13-661x1024.jpg)

検索結果と事前知識を組み合わせて回答を導き出した例

## まとめ

本記事では、複数の文書やページから必要な情報を見つけ出し、テキストと視覚情報を統合的に理解して質問に答えるシステム「M3D [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") AG」を紹介しました。

実験結果では、M3D [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") AGが特に視覚情報を含む質問において従来のテキストベースのRAGシステムを上回る性能を示し、MP-DocVQAでは最高性能を達成しました。また、3,000以上のPDF文書からの情報検索と回答生成にも対応できることが示されました。

これらの成果は、文書理解システムの新しい可能性を示すものと言えます。

- 参照論文URL： [https://arxiv.org/abs/2411.04952](https://arxiv.org/abs/2411.04952)
- プロジェクトページ： [https://m3docrag.github.io/](https://m3docrag.github.io/)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[Llama 3.1シリーズ、8ビット量子化で半分以下のサイズでも性能をほぼ完全維持、実験で確認](https://ai-data-base.com/archives/78430)

[オープンソースのコード生成LLMが商用LLMに追いつく　Qwen2.5-Coderの能力値全容](https://ai-data-base.com/archives/78609)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)