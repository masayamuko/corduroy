---
title: "Appleが開発 スマホに特化したマルチモーダルLLM『Ferret UI』"
source: "https://ai-data-base.com/archives/67840"
author:
  - "[[AIDB Research]]"
published: 2024-04-18
created: 2025-06-13
description: "「スマホ画面上のオブジェクトを理解するのに特化した、マルチモーダル大規模言語モデルのFerret-UI」に関するAppleの研究について紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

「スマホ画面上のオブジェクトを理解するのに特化した、マルチモーダル大規模言語モデルのFerret-UI」に関するAppleの研究について紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840-1024x576.jpg)

**参照論文情報**

- タイトル：Ferret-UI: Grounded Mobile UI Understanding with Multimodal LLMs
- 著者：Keen You, Haotian Zhang, Eldon Schoop, Floris Weers, Amanda Swearngin, Jeffrey Nichols, Yinfei Yang, Zhe [Gan](https://ai-data-base.com/archives/26269 "敵対的生成ネットワーク（GAN）")
- 所属：Apple

**本記事の関連研究** ：

- [Appleが開発、スマホのスクリーンを理解してユーザーと対話できる『ReALM』端末上で動く軽量モデル](https://ai-data-base.com/archives/66828)
- [Appleが、LLMのパラメータを「SSDなどの外部フラッシュメモリに保存し」PCで効率的にモデルを使用する手法を開発](https://ai-data-base.com/archives/61006)
- [マルチモーダルLLMに心の目を与える『Visualization-of-Thought』プロンプティングが空間推論タスク性能を向上させる](https://ai-data-base.com/archives/67128)
- [マルチモーダルLLMの技術や開発トレンド、26種類のモデル例を網羅的にまとめた報告](https://ai-data-base.com/archives/63257)

## UIに関するマルチモーダルの現状

iPhoneやAndroidなどのスマートフォンの普及に伴い、人間は多くの時間を、スマホのUI画面を見ることに費やしています。

それと同時に、GPT-4VやDALL-E 3などの、画像分野に特化したマルチモーダル大規模言語モデル（MLLM）の発展は、目覚ましいものがあります。現在のMLLMの性能にとっては、「写真に写っているものを、文章で答える」などのタスクは容易いです。

しかし、そうしたスマホの普及とMLLMの性能向上に反して、「スマホ画面の理解に特化したMLLM」という限定した分野の研究については、それほど行われてきていません。

また、スマホUIとマルチモーダルに関する先行研究においても、スマホ画面に特化した処理は行われておらず、複雑なタスクにおいて困難が生じます。

以下のような要因があります。

- スマホ特有の縦長画面のアスペクト比が、一般画像と異なる
- スマホ内のアイコンなどのオブジェクトが小さく、認識が難しい

しかし本研究で提案されている技術を使用すると、例えば、以下のような「ウィジェットの分類」や「アイコンの認識」、「スマホのUI画面に関するLLMとの会話」といったタスクも遂行可能です。高度なスマホ操作の補助など、様々な応用が期待できます。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_1.jpg)

## 提案手法「any resolution」

本研究では「any resolution」という技術を導入し、様々なスマホUI画面のアスペクト比に、柔軟に対応できるよう工夫されています。

スマホのUI画面を2つのサブ画像に分割し(縦長画面は横分割、横長画面は縦分割)、それぞれを別々にエンコードしてからLLMに入力します。こうすることで、UI画像の詳細情報を捉えることができ、アイコンなどの小さなオブジェクトも理解できます。

このany resolutionの全体図は、以下の通りです。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_4.png)

上図の右下の生のスマホ画面データを、Sub-image 0とSub-image 1に2分割します。それと同時に、スマホ画面データをそのまま正方形にリサイズして、UI全体を写した左下の低解像度の画像も用意。

そして、それら3つの画像に対して、同じImage Encoderでエンコードし、デコーダのみのLLMに入力します。

また、Ferret-UIの [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") 自体は、同社が開発したマルチモーダル言語モデル「Ferret」をベースにしています。Ferretは、事前学習済みのエンコーダ（CLIP-ViT-L／14など）と、デコーダのみの言語モデル（Vicunaなど）で構成されています。

ちなみに先行研究では、上図左下の低解像度の画像のみを入力していたため、重要な情報が失われていたとのことです。

## データセットの収集方法

本研究の実験では、自前で収集したAndroidとiPhoneの画像が用いられています。

Androidの画像はRICOデータセットのサブセットを使用し、iPhoneの画像はAMPデータセットからランダムに選択したものを使用しています。収集した画像の解像度別の内訳が表で示されており、Androidは2560×1440の画像が26,527枚、iPhoneは様々な解像度の画像が合計84,685枚あることが分かります。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_9.png)

次に、収集したスクリーン画像に対して、事前学習済みのピクセルベースのUI検出モデルを用いて、各UI要素(ボタン、テキスト、アイコンなど)の位置とタイプの [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") を行っています。

さらに、Screen Recognitionの手法を用いて、個々の検出結果をより大きな単位にグループ化しているとのことです。例えば、複数行のテキストを1つのグループにまとめたり、画像とそのキャプションをグループ化したりしています。

## 実験内容

実験のために、収集したUIデータと [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") を、MLLMで学習可能なタスクの形式に変換しています。

既存のSpotlightのタスク(Screen2words、 Widget Captions、 Taperception)のデータを、会話形式のQAペアにしています。

Spotlightの各タスクの詳細は、以下の通りです。

- Screen2words: スクリーンショットの内容に対する言語での説明
- Widget Captions: UI内のウィジェットに対する言語での説明
- Taperception: 「UIの各要素がタップ可能か」の予測

そのために、GPT-3.5 Turboの言い換えにより、各タスクの基本プロンプトから様々なバリエーションのプロンプトを生成しています。各トレーニングサンプルでは、対応するタスクのプロンプトをランダムに選択し、元の画像と正解のラベルとペアにしています。

次に、あらかじめ収集したUIスクリーンとUI要素のペアを用いて、新しいリファリングタスクとグラウンディングタスクのデータを生成しています。

リファリングタスクには、以下の3つのタスクがあります。

- [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）")
- アイコン認識
- ウィジェット分類

グラウンディングタスクには、以下の4つがあります。

- ウィジェットのリスト化
- テキスト検索
- アイコン検索
- ウィジェット検索

これらは、Elementary Taskとして定義され、以下の図を用いて説明されています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_8.jpg)

さらに、GPT-4を用いて、推論能力を高めるためのAdvanced Taskのデータを生成しています。具体的には、スマホのUI画面に関するQ＆Aや機能説明などの高度なタスクについて、iPhoneの画面を用いてデータを作成しています。

例えば、iPhoneのスクリーンショット画像をもとに、LLMに「○○の機能を追加するにはどうすれば良い？」のような質問をします。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_7.jpg)

最後に、iPhoneとAndroidの両方のプラットフォームについて、全てのタスクの学習・テストセットを作成しています。

各タスクにおける、学習データ数は以下の通りです。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_3.png)

そして、各タスクにおいて、Ferret-UIとFerret、GPT-4V、その他のベースラインモデルの性能を比較しています。

## 実験結果

結果の概要は、以下の通りです（Public Benchmarkは先述のSpotlightタスク）。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_5-1-1024x229.png)

Spotlightのタスク(screen2words、widget captions、taperception)について、Ferret-UIはS2WとWiCにおいて、最高性能を示しています。

次に、Elementary Tasks(リファリングとグラウンディング)については、Ferret-UIはほとんどのタスクにおいて、FerretやGPT-4Vを上回るパフォーマンスを発揮しており、特にany resolutionを加えることで、iPhoneタスクでの性能が2ポイント向上しています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_12.png)

Advanced Tasksについては、Ferret-UIがFuyuやCogAgentなどのベースモデルを上回る性能を発揮していますが、AndroidのUIの学習データがないため、any resolutionバージョンのFerret-UIでは、Androidでのタスクの性能が低下しているとのことです。

GPT-4Vについては、Advanced Tasksの多くのタスクで最高スコアを獲得していますが、これは「同モデルのGPT-4によってテストの回答を作成したため、高い点を取りやすくなった」というのが要因とされています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_6-1024x257.png)

## Ferret-UIのElementary Taskでの特性

Elementary Taskの中の、 [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") とウィジェット分類、テキスト検索におけるFerret-UIの特性分析が行われています。

[OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") の分析から、以下の3点が明らかになりました。

- 対象領域のテキストではなく、近くのテキストを予測してしまう場合がある
- 一般的でない単語を正確に予測できない
- 一部が切れたテキストでも正確に予測できる一方、誤った結果を出す場合がある

上記3つの傾向は、下図の左から順に表現されています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_11-1024x630.jpg)

また、ウィジェット分類の分析からは、以下の3点が分かりました。

- 大きなボタンが画像、アイコン、テキストで構成されている場合、一つのウィジェットとして認識できない
- タブの上にあるアイコンやタブは、タブの一部として予測されがち
- テキストに囲まれた小さなアイコンは、ベースモデルでは「テキスト」として予測されがち

上記3つの傾向は、下図の左から順に表現されています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_13-1024x631.jpg)

また、グラウンディングタスクにおけるテキスト検索では、対象領域の隣のテキストをハイライトしてしまう場合があるとのことです。

例えば、下図の左と右の結果では、対象テキストのすぐ隣にも、ハイライトがうつってしまっています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_2-1-1024x588.jpg)

また、真ん中の結果を見ると、同一単語が出現した場合、どちらもハイライトされています。

そのため、同じテキストが複数回出現する場合、単一のバウンディングボックスだけでなく、複数のバウンディングボックスを出力できるよう、拡張する必要があると著者らは述べています。

## Ferret-UIのAdvanced Taskでの特性

Ferret-UIとGPT-4Vで対話タスクの性能を評価したところ、Ferret-UIの精度は91.7%、GPT-4Vは93.4%でした。

結果だけ見ると、GPT-4Vの方が高い評価スコアを獲得しています。ただし、GPT-4Vが質問に関連しない余分な情報を含む回答を生成する傾向があり、そうした回答がスコアリングモデル(GPT-4)の好みに合っているためとされています。

一方、Ferret-UIの回答の方が簡潔であり、オブジェクトの位置に関しても座標で指定できており、そうした点ではFerret-UIの方が優位であると述べられています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67840_10-866x1024.jpg)

## まとめ

本記事では、UI画面の理解に特化したマルチモーダル言語モデルに関する、Appleの研究をご紹介しました。

Elementary TaskやSpotlightのタスクでは、Ferret-UIは他のモデルよりも優れた性能を発揮しており、有効性が実証されています。

なお、本研究の限界点は、「Ferret-UIが色やデザイン、使いやすさ、時計、Wi-Fi、バッテリーなどの要素については学習できない点」にあるとされています。

例えば、スマホのUIについて文章での説明を生成する際、GPT-4Vは「全体的なデザインはAppleの美的センスに従った、ミニマリスティックでクリーンな暗いテーマになっている」といったキャプションを生成できますが、Ferret-UIには不可能とのことです。

今後さらなる改良が進み、Appleの既存技術のSiriなどと統合されれば、より直感的なスマホ操作が可能になるでしょう。

URL： [https://arxiv.org/abs/2404.05719](https://arxiv.org/abs/2404.05719)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMが思考のネットワークを構築し、人間の推論プロセスを模倣する『THOUGHTSCULPT』プロンプティング](https://ai-data-base.com/archives/67755)

[プロンプトに例を多く載せるほど、どんなタスクでも性能が上がるのか？DeepMindによる『Many-shot Learning』の実験結果](https://ai-data-base.com/archives/67883)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)