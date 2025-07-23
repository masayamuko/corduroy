---
title: "LLMは制御工学でどれほど能力があるか Claude 3、GPT-4、Gemini Ultraでの実験結果"
source: "https://ai-data-base.com/archives/67267"
author:
  - "[[AIDB Research]]"
published: 2024-04-09
created: 2025-06-13
description: "イリノイ大学など複数機関の研究グループが、GPT-4、Claude 3 Opus、Gemini 1.0 Ultraを制御工学の問題で評価して結果を報告しています。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

イリノイ大学など複数機関の研究グループが、GPT-4、Claude 3 Opus、Gemini 1.0 Ultraを制御工学の問題で評価して結果を報告しています。

なお研究者らは今回の実験のために、古典制御理論の基礎から応用までを網羅した問題集「ControlBench」を作成し、中身を公開しています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67267-1024x576.jpg)

**参照論文情報**

- タイトル：Capabilities of Large Language Models in Control Engineering: A Benchmark Study on GPT-4, Claude 3 Opus, and Gemini 1.0 Ultra
- 著者：Darioush Kevian, Usman Syed, Xin [gan](https://ai-data-base.com/archives/26269 "敵対的生成ネットワーク（GAN）") g Guo, Aaron Havens, Geir Dullerud, Peter Seiler, Lianhui Qin, Bin Hu
- 所属：イリノイ大学アーバナ・シャンペーン、ミシガン大学、アレン人工知能研究所、カリフォルニア大学サンディエゴ

**本記事の関連研究** ：

- [Claude 3のベンチマーク評価結果　論文（テクニカルレポート）より](https://ai-data-base.com/archives/65693)
- [AGIを見据えて専門家レベルの問題を集めたベンチマーク「MMMU」、GPT-4VやGemini Ultraでも正解率6割未満](https://ai-data-base.com/archives/61463)
- [LLMの化学的能力はどれほどか　最先端LLMと人間を比較した結果](https://ai-data-base.com/archives/66730)
- [Googleが「人間の専門家レベルを超える最初のモデル」とする『Gemini』発表、GPT-4を凌駕](https://ai-data-base.com/archives/60035)

## 背景

LLMの応用範囲は広がり続けています。コーディング、論理的思考、数学、科学、計画立案など、様々なタスクで人間に匹敵する、あるいは人間を上回る性能を示しています。

一方で、LLMの応用可能性が十分に探求されていない分野もまだ多く残されています。その一つが制御工学です。数学と工学が融合した複雑な分野であり、システムのダイナミクス、PID制御器の設計、フィードバック機構の安定性や堅牢性の解析など、様々な概念を理解する必要があります。

もし制御工学にLLMを応用できれば、制御系設計の効率化や自動化が大きく前進すると期待されます。また制御工学のような複雑な問題を解決できるのであれば、LLMが他の専門的な領域に進出できる可能性にも繋がります。

このような背景から、研究者らは、最先端のLLMであるGPT-4、Claude 3 Opus、Gemini 1.0 Ultraを使って、制御工学の問題解決能力を評価する実験を行いました。

## 制御設計の問題に挑戦

研究者らは、本格的なベンチマーク研究に入る前に、LLMの制御設計における可能性を試す簡単な例を扱いました。クルーズコントロールシステム（自動車の速度を一定に保つための制御システム）のためのPI制御器（比例と積分の2つの制御動作を組み合わせた制御器）の設計問題を取り上げています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67267_6-1024x500.png)

実際に、GPT-4、Claude 3 Opus、Gemini 1.0 Ultraの3つのLLMに問題を解かせました。興味深いことに、Claude 3 Opusは90%の自信を持って、ほぼ正解に近い解答を生成したといいます。一方、GPT-4とGemini 1.0 Ultraは、PI制御器のゲインの値を提示できませんでした。

さらに研究者らは、問題文を少し変更し、「ドライバーにとって快適なように、ステップ応答のオーバーシュートを1%未満に抑えるべし」という条件を追加しました。この条件を満たすには、閉ループ系のゼロ点（伝達関数の分子が0になる点）の影響を考慮する必要があります。

ここでもClaude 3 Opusは、「ゼロ点の影響を考えよ」というヒントを与えられると、自らゼロ点の影響を考慮に入れ、オーバーシュートを1%未満に抑えるPI制御器のゲインを正しく求めることができました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67267_7-1024x140.png)

上記の結果から、「LLMが基本的な制御設計の知識をある程度習得しており、制御工学分野での応用可能性を秘めている」ことが示唆されています。そこで研究者らはより包括的なデータセットの作成と実験に乗り出しました。

## ControlBenchデータセット

研究者らは、学部レベルの制御工学の問題を147問集めました。この問題集は「ControlBench」と名付けられました。  
なお、制御工学の教科書や、ミシガン大学とイリノイ大学アーバナ・シャンペーン校の学部の制御工学の授業から集められました。問題の分野は、制御工学を学ぶ学生が通常学ぶ広範なトピックをカバーしています。

ControlBenchの特徴の一つは、テキストだけでなく、グラフや図表などの視覚的な要素も含んでいることです。制御系設計では、システムの挙動を分析・理解するためにボード線図やナイキスト線図などの図表が重要な位置を占めるためです。

※用語の説明

- ボード線図…周波数応答の振幅と位相を表す図。制御系の安定性解析などに用いられる。
- ナイキスト線図…周波数応答を複素平面上に表す図。制御系の安定性解析などに用いられる。

各問題は、PDFファイルから集められ、LaTeX形式に手動で変換されました。また、研究者らは、各問題の詳細な解答もLaTeX形式で用意しました。

ControlBenchのトピックと問題数の内訳は以下の表にまとめられています。全147問中26問が視覚的な要素を含んでいます。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67267_1.png)

ControlBenchのLaTeXファイルやPDFファイルは、以下のウェブサイトで公開されています。

[https://agi4engineering.github.io/LLM4Control/](https://agi4engineering.github.io/LLM4Control/)

## 実験

GPT-4、Claude 3 Opus、Gemini 1.0 Ultraについて、ControlBenchでの評価結果を詳しく見ていきます。

### 解答精度

人間の専門家が解答の正誤を判定することで精度を評価しました。評価は、そのまま解答させる「ゼロショット設定」と、解答後に”もう一度よく確認しなさい”と促す「自己修正」の2通りで行われました。

その結果、Claude 3 Opusが最も高い精度を示し、GPT-4がそれに続きました。Gemini 1.0 Ultraの精度は他の2つのモデルよりも低いものでした。自己修正により、特にClaude 3 Opusの精度が大きく改善したことも分かりました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67267_2-1024x359.png)

### 失敗パターンの分析

LLMは様々な失敗パターンを示しましたが、GPT-4では推論能力の限界、Claude 3 Opusでは計算能力の限界が最大のボトルネックになっていることが分かりました。

（ただし計算の問題は外部ツールの利用などで改善できる可能性があると研究者らは考えています）

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67267_3-1024x693.png)

また、3つのLLMはすべて、ボード線図やナイキスト線図などのグラフから情報を読み取るのが苦手であることも明らかになりました。加えて、LLMは同じ問題に対しても一貫性のない解答を出力することがあり、問題文のわずかな変更で解答が大きく変わってしまうこともありました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67267_4-1024x736.png)

### 自己修正能力

研究者らは、LLMが自分の間違いを認識し修正する「自己修正能力」が興味深いと考えています。前述の通り、Claude 3 Opusは自己修正によって精度を大きく改善させました。一方で、GPT-4とGemini 1.0 Ultraの改善度は限定的でした。また、グラフを含む問題では自己修正があまり機能しないようです。

以上のように、LLMは制御工学でも大きな可能性を秘めていますが、推論能力や一貫性などの課題もまだ残されていることが示唆されています。研究者らは、こうした課題の解決に向けてさらなる研究が必要だと述べています。

## 制御工学の専門家でなくても評価できるように

研究者らは、制御工学の専門知識を持たない研究者でもLLMの評価を行えるようにしたいと考えました。そこでControlBenchの問題の一部を、選択肢式の問題に変換したデータセットControlBench-Cを作成しました。

ControlBenchから100問を選ばれており、複雑な推論や厳密な数学的証明を要する問題は、選択肢式に変換するのが難しいため除外されています。

なお、LLMが選択肢問題を解く際にはバイアスがかかる可能性があるため、LLMの真の能力が反映されない懸念もある点には注意が必要です。

研究者らは、ControlBench-CでもGPT-4、Claude 3 Opus、Gemini 1.0 Ultraの評価を行いました。その結果、選択肢のみの自動評価では、GPT-4とClaude 3 Opusのパフォーマンスは拮抗していました。GPT-4は最も高い精度を、Claude 3 Opusは自己修正後の精度で最高の結果を示しました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67267_5-1024x379.png)

研究者らは、ControlBench-Cを、ControlBenchを補完するものと位置づけています。今後の課題として、ControlBenchの自動評価手法の開発が挙げられています。

## まとめ

本記事では、最先端のLLMの制御工学分野での能力を評価した研究を紹介しました。研究者らは、学部レベルの制御工学の問題集ControlBenchを用いてLLMを多角的に分析し、LLMの可能性と課題を明らかにしました。

今後は、ControlBenchの拡張、制御工学に特化したプロンプトの開発、推論能力と計算精度の向上、評価手法の効率化などが研究の方向性として挙げられています。

なお、LLMの導入には安全性や倫理面での検討も欠かせません。教育面では、LLMを適切に活用しつつ、学生の深い学びを促す工夫が求めらると述べられています。

- URL： [https://arxiv.org/abs/2404.03647](https://arxiv.org/abs/2404.03647)
- GitHub： [https://agi4engineering.github.io/LLM4Control/](https://agi4engineering.github.io/LLM4Control/)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMに心の目を与える『Visualization-of-Thought』プロンプティング　マルチモーダルモデルに匹敵する空間推論性能を達成](https://ai-data-base.com/archives/67128)

[ChatGPTと実際に交わされた会話の世界最大規模データセット「WildChat」](https://ai-data-base.com/archives/67317)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)