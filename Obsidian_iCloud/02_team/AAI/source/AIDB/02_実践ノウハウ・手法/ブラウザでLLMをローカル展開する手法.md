---
title: "ブラウザでLLMをローカル展開する手法"
source: "https://ai-data-base.com/archives/81302"
author:
  - "[[AIDB Research]]"
published: 2024-12-27
created: 2025-06-13
description: "本記事では、ブラウザ内での大規模言語モデル（LLM）のローカル展開を実現するフレームワークを紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、ブラウザ内での大規模言語モデル（LLM）のローカル展開を実現するフレームワークを紹介します。

近年、オープンソースコミュニティから登場した小型高性能モデルと、デバイス性能の向上により、LLMの利用可能性が大きく拡大しました。その中でもブラウザは、自然なエージェント環境を提供する理想的なプラットフォームとして注目されています。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81302-1024x576.jpg)

**発表者情報**

- 研究者：Charlie F. Ruan et al.
- 研究機関：カーネギーメロン大学、上海交通大学、NVIDIA

## 背景

これまでの常識として、高性能なLLMには高価な業務用グラフィックス処理装置（ [GPU](https://ai-data-base.com/archives/26570 "GPU") ）が必要で、クラウドのサーバーでしか動作させることができませんでした。

近年、状況は大きく変わりつつあります。性能を維持したまま小型化されたLLMが、オープンソースで公開され始めたのです。パラメータ数（モデルの複雑さを表す指標）は10億から30億程度に抑えられています。一方で、一般向けパソコンの処理能力も著しく向上しました。例えばAppleの最新プロセッサM3を搭載したノートパソコンでは、データ容量を圧縮した30億パラメータのモデルでも、1秒間に90個の単語を生成できるほどの速度を実現しています。

手元の端末でLLMを動かせるようになれば、新たな可能性が広がります。個人情報を外部に送信せずにすみ、ユーザーのプライバシーが守られます。端末内のデータを活用した個人向けのカスタマイズも可能になります。さらに、必要に応じてクラウドと手元の端末を使い分ける柔軟な運用方法も検討できます。

そんな中で注目を集めているのが、ウェブブラウザ上でのLLM実行です。ブラウザには3つの大きな利点があります。第一に、予定管理やメール作成、文書編集など、日常的なタスクを行う環境として最適です。第二に、URLを開くだけで利用でき、特別なソフトのインストールが不要です。第三に、開発者の負担が軽減されます。従来は異なる [GPU](https://ai-data-base.com/archives/26570 "GPU") メーカーごとに別々のプログラムを用意する必要がありましたが、Web [GPU](https://ai-data-base.com/archives/26570 "GPU") という新技術により、1つのプログラムで対応できるようになったのです。

こうした背景から、ブラウザ内でLLMを動作させるフレームワークの開発が進められました。誰でも利用・改良できるJavaScriptフレームワークとして公開されており、ウェブ開発者は高度な言語処理機能を簡単にウェブサイトに組み込めるようになりました。以下で詳しく紹介します。

## システムアーキテクチャと主要コンポーネント

研究者らは、ブラウザ内でLLM推論を実行するためのJavaScriptフレームワーク「WebLLM」を開発しました。クライアント側のブラウザでLLMをローカルに展開し、ウェブアプリケーションにLLMベースの機能を実装可能にするフレームワークです。

下の図に示されるように、WebLLMの [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") は3つの部分で構成されています。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81302_1-1024x418.jpg)

WebLLMの全体

ユーザー向けにはエンドポイントのように動作するServiceWorkerMLCEngineが用意され、バックグラウンド処理用にWebワーカー上でMLCEngineが稼働し、さらに事前コンパイルされた効率的なWeb [GPU](https://ai-data-base.com/archives/26570 "GPU") カーネルが組み合わされています。

実現においては、標準化されたAPIの提供、ブラウザのランタイム環境への適応、効率的な [GPU](https://ai-data-base.com/archives/26570 "GPU") アクセラレーションという3つの課題に直面しました。

### LLM推論エンジン

本システムにおいて、Web開発者たちは、フロントエンドにServiceWorkerMLCEngineをインスタンス化してエンドポイントとして利用します。そして指定したLLMが読み込まれ、OpenAIスタイルのリクエストを受け付け、ストリーミング形式でOpenAIスタイルのレスポンスが返されます。Webアプリケーション側では返されたレスポンスを用いてフロントエンドが更新されます。

研究者らはエンドポイントに似た設計を採用することで、入出力が明確に定義されたAPIを実現しました。OpenAIスタイルのAPIが広く普及していることから、既存プロジェクトへの統合も容易になっています。APIにわずかな修正を加えることで、高度な機能拡張も実現されました。拡張された機能には、JSON Schemaや文脈自由文法を用いた構造化生成、ビジョン言語モデルによる画像入力処理、検索拡張生成のための複数モデルの同時ロードなどが含まれています。

### ブラウザランタイムへの適応

WebLLMはJavaScriptで実装されましたが、従来のLLM推論エンジンはC++やPythonで動作していたため、研究者らは異なるランタイム環境での動作に直面しました。高速な処理を実現するため、ブラウザが提供する技術を最大限活用した最適化が必要とされました。

#### ①Webワーカーの活用

LLM推論では膨大な計算処理が発生するため、メインスレッドでの実行はユーザーインターフェースの停止を引き起こす可能性がありました。研究者らはJavaScriptのWebワーカー機能を採用し、処理負荷の高い計算をバックグラウンドスレッドへ分散させることで、UIのブロックを防ぐ設計を実現しました。

システム構成としては、Webアプリケーション側で軽量なServiceWorkerMLCEngineが稼働し、実際の処理はワーカースレッド上のMLCEngineが担当します。両者間でやり取りされるメッセージはOpenAIのリクエストとレスポンス形式に準拠しており、実装がシンプルに保たれています。

#### ②WebGPUの活用

LLM推論に不可欠な [GPU](https://ai-data-base.com/archives/26570 "GPU") 高速化を実現するため、Web [GPU](https://ai-data-base.com/archives/26570 "GPU") を採用しました。Web [GPU](https://ai-data-base.com/archives/26570 "GPU") はブラウザから [GPU](https://ai-data-base.com/archives/26570 "GPU") リソースにアクセスするためのJavaScript APIとして提供され、 [GPU](https://ai-data-base.com/archives/26570 "GPU") ベンダーに依存しない統一的なインターフェースを実現しています。

AppleのMチップ搭載デバイスやNVIDIA [GPU](https://ai-data-base.com/archives/26570 "GPU") 搭載デバイスなど、異なるハードウェア環境でも同一のWeb [GPU](https://ai-data-base.com/archives/26570 "GPU") カーネルが実行可能となり、LLM推論の全ワークロードで [GPU](https://ai-data-base.com/archives/26570 "GPU") アクセラレーションが活用されています。

#### ③WebAssemblyの活用

[GPU](https://ai-data-base.com/archives/26570 "GPU") で処理できない計算をCPUで効率的に実行するため、WebAssembly（WASM）を採用しました。WASMはC++コードをJavaScriptランタイム上で高速実行可能な形式に変換する技術です。

なお、全ての処理をJavaScriptで書き直すのではなく、EmscriptenツールでC++の高性能コードをWASMに変換する手法を選択しました。変換されたコードは、文法エンジン、ページ化されたKVキャッシュのシーケンス管理、カーネル起動時のテンソル操作などの処理に活用されています。既存のC++コードを再利用しながら、ブラウザ上での高速実行が実現されています。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81302_3-1024x840.jpg)

WebLLMを使用したデモンストレーション

### MLC-LLMによるWebGPUを用いたGPUアクセラレーション

LLM推論を高速化するには、グラフィックス処理装置（ [GPU](https://ai-data-base.com/archives/26570 "GPU") ）の能力を最大限に引き出すことが重要です。ブラウザ上で [GPU](https://ai-data-base.com/archives/26570 "GPU") を扱えるWeb [GPU](https://ai-data-base.com/archives/26570 "GPU") 技術が登場しましたが、現状では致命的な弱点があります。従来の [GPU](https://ai-data-base.com/archives/26570 "GPU") 制御技術であるCUDAには豊富な最適化ライブラリが用意されていましたが、Web [GPU](https://ai-data-base.com/archives/26570 "GPU") にはそれらが存在しないのです。例えば、LLM推論で重要な役割を果たすPagedAttentionやFlashAttentionと呼ばれる処理を、Web [GPU](https://ai-data-base.com/archives/26570 "GPU") 向けに一から最適化することは極めて困難な作業となります。

そこで今回注目されたのが、MLC-LLMとApache TVMというコンパイル技術です。まず、PythonでPagedAttentionなどの機能を含むLLMが作られます。MLC-LLMはそれを受け取り、Web [GPU](https://ai-data-base.com/archives/26570 "GPU") 向けの最適化されたプログラムに変換します。変換の過程では、プログラム全体の見直しや、個々の演算の効率化など、様々なレベルで最適化が行われます。たとえば行列演算のような計算を [GPU](https://ai-data-base.com/archives/26570 "GPU") の特性に合わせて分割したり、メモリアクセスを効率化したりといった工夫が自動的に施されます。

MLC-LLMによる変換作業からは2種類のファイルが生成されます。1つは学習済みの重みデータを変換したもの、もう1つはWASMライブラリです。WASMライブラリには、Web [GPU](https://ai-data-base.com/archives/26570 "GPU") 用に最適化された計算プログラム（カーネル）と、それを制御するための補助プログラムがブラウザで実行可能な形式で格納されています。

さきほどの図に示されるように、WebLLMではこれらのファイルを事前に準備してウェブサーバーに置いておきます。ユーザーがWebLLMを利用する時には、必要なファイルが自動的にダウンロードされ、ブラウザ上で高速に動作する仕組みが整えられています。

## 評価結果

ノートパソコン（Apple Macbook Pro M3 Max）を使って、WebLLMの性能評価が実施されました。

比較対象として、同じLLMを通常のアプリケーションとして動かすためのソフトウェア「MLC-LLM」が選ばれました。 [MLC-LLM](https://llm.mlc.ai/) はWebLLMの開発元が提供する標準的なLLM実行環境で、ベストな性能が発揮できるように設計されています。

ブラウザで動くWebLLMと、アプリケーションとして動くMLC-LLMの処理速度を比較することで、WebLLMが実用に耐えうるか検証されました。

### 評価方法

テスト環境として選ばれたMacbook Pro M3 Maxでは、2つの異なる設定で速度比較が行われました。ブラウザ側はChrome Canaryの最新版（133.0.6870.0）を使い、WebLLM v0.2.75を動作させました。比較対象となるMLC-LLMは特定バージョン（コミットd23d6f5）を使用しました。

LLMの処理速度は、1秒間に生成できる文章の細かい単位（トークン）の数で測定されます。WebLLMはブラウザの新技術であるWeb [GPU](https://ai-data-base.com/archives/26570 "GPU") を利用し、JavaScriptとWebAssemblyで動作します。一方、MLC-LLMはApple独自のグラフィックス技術（Metal）を使い、PythonとC++で動作します。

### 評価結果

実験では、Llama-3.1-8BとPhi-3.5-miniという2種類のLLMが使用されました。驚くべきことに、ブラウザで動くWebLLMは、通常のアプリケーションとして動くMLC-LLMの約80%もの速度を達成しました。ブラウザという制約された環境でも、十分な処理能力を発揮できることが実証されたのです。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81302_2-1024x143.png)

パフォーマンス比較

### さらなる性能向上のための可能性

WebLLMの性能は、まだ改善の余地があります。たとえばWeb [GPU](https://ai-data-base.com/archives/26570 "GPU") に最近追加された「シャッフル」という新機能を活用することで、データの並び替えがより効率的になると予想されます。また、プログラム全体の動作の見直しによっても、速度向上が見込まれます。より多くの用途に対応できるよう、継続的な改良が進められています。

## まとめ

本記事では、ブラウザ上でLLMを高速実行できるJavaScriptフレームワーク「WebLLM」の研究を紹介しました。WebLLMは、ブラウザという制約のある環境でありながら、実用的な処理速度を実現し、オープンソースのJavaScriptフレームワークとして開発者に提供されています。サーバー級の計算リソースを必要とせず、プライバシーに配慮しながらLLMを活用できる新たな選択肢として、今後の発展が期待されます。

下記のリンクから、WebLLMを実行するためのプログラムをダウンロードすることが可能です。

**参照文献情報**

- タイトル：WebLLM: A High-Performance In-Browser LLM Inference Engine
- URL： [https://arxiv.org/abs/2412.15803](https://arxiv.org/abs/2412.15803)
- コード： [https://github.com/mlc-ai/web-llm](https://github.com/mlc-ai/web-llm)
- 著者：Charlie F. Ruan, Yucheng Qin, Xun Zhou, Ruihang Lai, Hongyi Jin, Yixin Dong, Bohan Hou, Meng-Shiun Yu, Yiyan Zhai, Sudeep Agarwal, Hangrui Cao, Siyuan Feng, Tianqi Chen
- 所属：Carnegie Mellon University, Shanghai Jiao Tong University, NVIDIA

## 理解度クイズ（β版）

1\. WebLLMの主な目的は何ですか？

WebLLMはブラウザをLLM展開の理想的なプラットフォームとして活用します。特別なソフトウェアのインストールが不要で、自然なエージェント環境を提供できる点が特徴的です。

解説を見る

2\. WebLLMのシステム [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") で採用されている主要な手法は？

WebLLMはServiceWorkerMLCEngineとMLCEngineを分離し、UIのブロックを防ぎながら効率的な処理を実現します。フロントエンドとバックグラウンド処理の分離が重要な設計原則となっています。

解説を見る

3\. WebLLMで [GPU](https://ai-data-base.com/archives/26570 "GPU") アクセラレーションを実現する手法は？

WebLLMはWeb [GPU](https://ai-data-base.com/archives/26570 "GPU") とMLC-LLMを組み合わせて効率的な [GPU](https://ai-data-base.com/archives/26570 "GPU") アクセラレーションを実現します。ベンダーに依存しない統一的なインターフェースを提供することで、異なる環境でも同じカーネルを実行できます。

解説を見る

4\. WebLLMの性能評価で示された重要な成果は？

評価実験では、WebLLMがネイティブ環境のMLC-LLMと比較して最大約80%のデコード速度を達成しました。ブラウザ環境での実用的な性能を実証した重要な結果です。

解説を見る

5\. なぜブラウザがLLM展開の理想的なプラットフォームとされるのですか？

ブラウザはカレンダー管理やメール返信、文書作成など日常的なタスクで自然なエージェント環境を提供します。URLを開くだけで利用できる点も大きな利点です。

解説を見る

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMと人間の協働に必要となる「ユーザーの適切な依存」](https://ai-data-base.com/archives/81239)

[LLMにおける創造性の実現と研究アイデアの生成](https://ai-data-base.com/archives/81387)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)