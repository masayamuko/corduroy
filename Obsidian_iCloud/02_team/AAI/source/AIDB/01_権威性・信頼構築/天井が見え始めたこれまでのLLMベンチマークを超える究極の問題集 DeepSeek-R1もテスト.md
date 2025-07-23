---
title: "天井が見え始めたこれまでのLLMベンチマークを超える究極の問題集 DeepSeek-R1もテスト"
source: "https://ai-data-base.com/archives/84219"
author:
  - "[[AIDB Research]]"
published: 2025-02-13
created: 2025-06-13
description: "LLMの性能は日々進化を続けています。そのため、通常の評価基準では、もはやその真の実力を測ることが難しくなってきました。そのような状況を受けて、新しい評価システムが開発されました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

LLMの性能は日々進化を続けています。そのため、通常の評価基準では、もはやその真の実力を測ることが難しくなってきました。

そのような状況を受けて、新しい評価システムが開発されました。LLMの能力をより厳密に、そして多角的に検証することを目指すベンチマークです。これまでの評価では測定が困難だった「高度な推論力」と「幅広い知識」の評価に重点が置かれています。

この記事では、この取り組みについて詳しく見ていきます。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84219-1024x576.png)

**発表者情報**

- 研究者：Long Phanほか
- 研究機関：Center for AI Safety, Scale AI（貢献者は多数）

論文情報詳細は記事の下部に記載されています。

## 背景

LLMの進化は私たちの想像をはるかに超えるスピードで進んでいます。最近では、従来の評価基準では測定しきれないほどの高性能化が進んでいます。

例えば、これまでの標準的な評価ベンチマークであるMMLUなどでは、すでにほぼ完璧な精度が報告されるようになっていました。このような既存の評価方法では物足りないという課題が浮き彫りになっており、業界の中では「本当にLLMの実力を測れる新しい評価基準が必要なのではないか」という声が高まっていました。

このような状況を受けて、単なる知識の有無を問うのではなく、専門家レベルの深い理解力や推論能力まで測定できる評価方法が模索されてきました。

今回研究者たちは、さまざまな学問分野にまたがる高度な問題群の開発に着手しました。とりわけ重視されたのは、単純な情報検索では対応できない、専門家レベルの理解力や推論能力を問う問題の作成でした。

さらに、画像や音声といったマルチモーダルな要素を含む問題や、厳密な自動採点が可能な形式の実現に向けた取り組みも進められました。問題の質を担保するため、作成から多段階のレビューまでの体制も整備されました。

そうして究極の問題集が完成したとのことです。以下で詳しく紹介します。

## 「Humanity’s Last Exam（HLE）」

上記の背景を受けて開発された「Humanity’s Last Exam（HLE）」には3,000問もの問題が収録されており、数学、人文学、自然科学など、幅広い分野をカバーしています。

問題形式は大きく2種類が用意されました。

- 一つは複数選択式、
- もう一つは解答が一意に定まる記述式です。

どちらもシステムによる自動採点が可能な形式になっています。また、問題の約10%には画像が含まれており、文章と画像を組み合わせた読解力が試されます。

注目すべきは、短時間のインターネット検索では正解にたどり着けないよう工夫されている点です。なかでも、高度な数学的思考力を要する問題が重視されており、これは他分野における推論能力の評価にも役立つと考えられています。

実験の結果、従来の評価指標で高得点を記録してきたLLMであっても、HLEでは低い正答率を示しました。しかも、間違った解答を自信満々に答えてしまうケースが頻繁に確認されました。詳細は後述します。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84219_1-1024x533.png)

なお、学習データへの過剰適合を防ぐため、3,000問のうち一部は非公開とされる予定です。

### どのように問題が集められたか

HLEの問題作成には、世界中から約1,000人もの専門家が参加しました。500以上の機関から集まった研究者や大学院以上の学位保持者たちが、それぞれの専門知識を活かして問題を投稿したのです。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84219_3-1024x461.png)

問題の約80%は「厳密一致型」と呼ばれる記述式で、残りは「複数選択型」です。複数選択型の場合、通常5つ以上の選択肢が用意され、巧妙な誤答選択肢によってLLMの推論能力の限界が明らかになるよう設計されています。

すべての問題には詳細な解説が付属しています。そのため、将来的に新しいLLMが学習を行う際の貴重な教材としても活用できると期待されています。

問題の質を保つため、専門家による多段階のレビュー体制が敷かれました。また、質の高い問題には賞金が与えられる仕組みも導入され、多くのエキスパートが積極的に参加する結果となりました。

なお、主観的な解釈が分かれる問題や、複数の正解が存在しうる問題は意図的に除外されています。ただし、まだ公開されていない研究内容を題材とすることは許容されており、幅広い知識の評価が可能となっています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84219_4-1024x289.png)

この問題作成に関わったと公開されている研究機関は、以下の通りです（長文）。

1. Center for AI Safety
2. Scale AI
3. University of California, Berkeley
4. Massachusetts Institute of Technology
5. Stanford University
6. University of Cambridge
7. Harvard University
8. University of Oxford
9. ETH Zürich
10. École Polytechnique Fédérale de Lausanne
11. Carnegie Mellon University
12. Washington University
13. University of Chicago
14. Princeton University
15. University of Washington
16. Columbia University
17. University of Toronto
18. Vrije Universiteit Brussel
19. Georgia Institute of Technology
20. Boston University
21. University of British Columbia
22. Sapienza University of Rome
23. University of Tübingen
24. Arizona State University
25. University of Illinois Urbana-Champaign
26. McGill University
27. University of California, San Diego
28. Brown University
29. California Institute of Technology
30. Humboldt-Universität zu Berlin
31. University of Sao Paulo
32. Google DeepMind
33. University of California, Los Angeles
34. University of Wisconsin-Madison
35. New York University
36. University of Edinburgh
37. KTH Royal Institute of Technology
38. University of Amsterdam
39. University of Pennsylvania
40. University of California, Santa Barbara
41. University of Galway
42. Durham University
43. Queen Mary University of London
44. Microsoft Research
45. Inria
46. University of Southern California
47. École Normale Supérieure
48. CNRS
49. Université Paris-Saclay
50. University of North Texas
51. Leibniz University Hannover
52. University of Calgary
53. University of Michi [gan](https://ai-data-base.com/archives/26269 "敵対的生成ネットワーク（GAN）")
54. University of Maryland
55. Technische Universität Berlin
56. TU Wien
57. Yale University
58. École Normale Supérieure Paris-Saclay
59. Mohamed bin Zayed University of Artificial Intelligence
60. University of Waterloo
61. Cornell University
62. INSAIT
63. Northwestern University
64. Duke University
65. The University of Sydney
66. Indian Institute of Technology Delhi
67. The Australian National University
68. Hebrew University
69. Northeastern University
70. Anthropic
71. University of Vienna
72. North Carolina State University
73. Independent researcher
74. Johns Hopkins University
75. University of Mannheim
76. The Hospital for Sick Children
77. OpenAI
78. Heidelberg University
79. University of Oklahoma
80. Texas A&M University
81. Gift Horse Mouth Inspections
82. Queen’s University
83. RWTH Aachen University
84. Pondicherry Engineering College
85. Institute of Mathematics of NAS of Ukraine
86. Kiev School of Economics
87. ELTE
88. University of Porto
89. Kyiv Polytechnic Institute
90. Nimbus AI
91. Georgia Southern University
92. University of Minnesota Twin Cities
93. Alberta Health Services
94. University of Illinois
95. ZG Law
96. Hereford College of Arts
97. [Auc](https://ai-data-base.com/archives/26250 "AUC") kland University of Technology
98. Hemwati Nandan Bahuguna Garhwal University
99. Accenture Labs
100. Instituto Politécnico Nacional
101. Menoufia University
102. CICMA
103. University of Canterbury
104. Metropolitan State University of Denver
105. Université de Yaoundé I
106. Ecole Nationale Supérieure Polytechnique de Yaoundé
107. Tanta University
108. Tufts University
109. The Jackson Laboratory
110. Institute of Science and Technology Austria
111. RUSM
112. Charité – Universitätsmedizin
113. Happy Technologies LLC
114. Northern Illinois University
115. National University of Singapore
116. Universidade Federal de Juiz de Fora
117. Sorbonne Université
118. C. N. Yang institute for Theoretical Physics
119. University of Luxembourg
120. University of Malaya
121. Rockwell Automation
122. Contramont Research
123. Institut Polytechnique de Paris
124. TRR Designs
125. Manipal University Jaipur
126. Maastricht University
127. Martin-Luther-University Halle-Wittenberg
128. Indian Institute of Technology Bombay
129. Institute for Molecular Manufacturing
130. Bethune-Cookman University
131. St. Petersburg College
132. La Molina National Agrarian University
133. University of Bath
134. National University Philippines
135. UZ Brussel
136. PeopleTec, Inc.
137. Technion – Israel Institute of Technology
138. University of Miami
139. Royal Holloway, University of London
140. Universidad Iberoamericana
141. Swinburne University of Technology
142. National Information Processing Institute
143. University College London
144. Ecco IT
145. University of Western Australia
146. Snorkel AI
147. Indiana State University
148. Oxford University
149. Manhattan School of Music
150. Universiteit Leiden
151. Synbionix
152. University of Manchester
153. The Open University
154. Corteva Agriscience
155. Diverging Mathematics
156. Saint Mary’s University
157. Emory University
158. Sanford Burnham Preybs
159. Yonsei University
160. University of Leeds
161. Politecnico di Milano
162. KU Leuven
163. Brandenburg University of Technology
164. Ruhr University Bochum
165. University Mohammed I
166. University of Arizona
167. Universidade de Lisboa,
168. Mānuka Honey and Beekeeping Consultancy Ltd
169. Indian Institute of Technology Khara [gpu](https://ai-data-base.com/archives/26570 "GPU") r
170. Charles University
171. Mila
172. University of Copenhagen
173. University of Technology Sydney
174. Center for Scientific Research and Higher Education at Ensenada (CICESE)
175. University of Buenos Aires
176. Ben-Gurion University
177. blurrylogic
178. Donald and Barbara Zucker School of Medicine
179. Cohere
180. Ivy Natal
181. Fraunhofer IMTE
182. Siili Solutions Oyj
183. Toyota Technological Institute at Chicago
184. National Institute of Laser Enhanced Sciences
185. Drexel University
186. EHC Investments LLC
187. University of Windsor
188. St. Jude Children’s Research Hospital
189. GC
190. Rochester Institute of Technology
191. CERN
192. Warsaw University of Technology
193. EF Polymers Pvt Ltd
194. Hewlett Packard Enterprise
195. Simplr AI, Asurion
196. All India Institute of Medical Sciences
197. Tel Aviv University
198. Ruhr-Universität Bochum
199. Standard Intelligence
200. Posts and Telecommunications Institute of Technology
201. Clearhorse Ltd
202. Cranfield University
203. Image Processing Lab, Universitat de Valencia
204. Universität Zürich
205. UK AI Safety Institute
206. SDAIA
207. Children’s Hospital of Orange County
208. The Ohio State University
209. Cairo University Specialized Pediatric Hospital
210. Universidad de Valencia
211. University of Arkansas
212. Monash University
213. OncoPrecision
214. Genomia Diagnostics Research Pvt Ltd
215. IEEE Life Member
216. Larkin Community Hospital
217. The University of Texas at Dallas
218. Canadian University Dubai
219. Università di Milano-Bicocca
220. University of Massachusetts Lowell
221. Virginia Tech
222. University of Geneva
223. Rutgers University
224. MolMind
225. Google Research
226. Cal Poly San Luis Obispo
227. Alexandru Ioan Cuza University
228. Patched Codes, Inc
229. Chulalongkorn University
230. Ecole polytechnique
231. Stockholm University
232. AE Studio
233. Gaia Lab
234. Leibniz Institute for Science and Mathematics Education
235. Australian National University
236. Saarland University
237. College of Eastern Idaho
238. Intrinsic Innovation LLC
239. University of Bologna
240. HUTECH
241. INRIA
242. King Saud University
243. Universidad de Buenos Aires
244. Pennsylvania College of Technology
245. CERo Therapeutics Holdings, Inc.
246. The Univeirsty of Tennessee
247. Gray Swan AI
248. EleutherAI
249. University of Montpellier
250. HomeEquity Bank
251. Materials Platform for Data Science LLC
252. ETH Zurich
253. University of Trento
254. Fondazione Bruno Kessler
255. Cambridge University
256. University of Pisa
257. LGM
258. Georgia State University
259. Polytechnic University of the Philippines
260. University of Oregon
261. The University of Chicago
262. University of Mumbai
263. Gakushuin University
264. University of Guelph
265. Case Wester Reserve University
266. Intuit
267. CTTC / CERCA
268. National University
269. Dyno Therapeutics
270. Lewis Katz School of Medicine
271. Cisco
272. Fyaora Labs
273. Intelligent Geometries
274. Indian Institute of Technology (BHU)
275. Center for AI Safety
276. AIM Intelligence
277. Seoul National University
278. The University of Texas at Arlington
279. The Hartree Centre
280. Missouri University of Science and Technology
281. POLITEHNICA Bucharest National University of Science and Technology
282. Abacus.AI
283. German Research Center for Artificial Intelligence
284. University of Houston
285. Eastern Institute of Technology (EIT)
286. ENS Lyon
287. Czech Technical University in Prague
288. University of Hamburg
289. CISPA Helmholtz Center for Information Security
290. Universidad de Morón
291. Université Paris Cité and Sorbonne Université
292. Sheffield Hallam University
293. The New School
294. Creative Choice LLC
295. Max Planck Institute for Software Systems
296. Universidad de Granada
297. École Polytechnique
298. Modulo Research
299. La Trobe University
300. University of Yaoundé I
301. Lux Labs
302. University of Innsbruck
303. Nabu Technologies Inc
304. Chalmers University of Technology
305. Unidade Local de Saúde de Lisboa Ocidental
306. Quotient AI
307. University of California, Irvine
308. University of Padua
309. Aalto University
310. Bison Fellers LLC
311. Royal Veterinary College
312. The Future Paralegals of America
313. RMIT University
314. Universal Higher Education
315. Eastlake High School
316. CSMSS Chh. Shahu College of Engineering
317. Central Mindanao University
318. University of Montreal
319. University of Bradford
320. Beni Suef University
321. Bogazici University
322. Mansoura University
323. Univerisity of Bristol
324. Jala University
325. Florida Atlantic University
326. CONICET
327. Universidad Tecnológica Nacional
328. Bournemouth University
329. University of Warwick
330. University of Alabama Huntsville
331. Van Andel Institute
332. University of Hertfordshire
333. Central College
334. Sheffield Teaching Hospitals NHS Foundation Trust
335. Nottingham Trent University
336. Max Planck Institute for Intelligent Systems
337. Outevsky Bespoke Dance Education
338. University of Virginia
339. Dartmouth College
340. Cairo University
341. INESC Microsistemas e Nanotecnologias
342. University of Minnesota
343. Aligarh Muslim University
344. John Crane UK Ltd
345. James Madison University
346. University of the Fraser Valley
347. Alan Turing Institute
348. Rice University
349. HUN-REN
350. Forschungszentrum Jülich

### 問題の審査プロセス

投稿された問題は、まず複数の最新型LLMによる実践テストを受けます。複数選択式の問題では「ランダムな推測と同程度の正答率」、厳密一致形式の問題では「すべてのLLMが不正解」となることが求められます。

なお、問題の投稿時には解答例と詳細な解説の提出が必須とされました。

LLMのテストを通過した問題は、続いて人間による二段階の審査へと進みます。

審査を担当するのは、各分野の大学院修了者や博士号取得者です。問題文の正確さだけでなく、解説の学術的な説得力も綿密にチェックします。

数式を多用する問題や、英語以外の言語資料を必要とする問題には、複数の専門家によるダブルチェック体制が敷かれています。また、解説が不十分だったり、事実関係に矛盾が見つかった場合は、大幅な修正や却下の判断が下されます。

#### 第一段階の審査

最初の審査では、大学院レベル以上の学位や相当の研究経験を持つ専門家が、問題文の曖昧さや複数解釈の可能性を重点的にチェックします。

ただし、単にLLMが解けないというだけの問題は採用されません。たとえば、検索性を極端に下げただけの問題や、複数の正解が存在しうる問題は却下される可能性があります。

もっとも、この段階で指摘を受けた作問者は、問題文や解説を修正することができます。修正された問題は再度審査にかけられ、高い難易度と明確な正解を備えた問題だけが次の段階へと進みます。

#### 第二段階の審査

次の審査では、より高度な専門性を持つ審査員が、問題の学術的価値や評価指標としての適性を総合的に検証します。

分野ごとに重視される観点は異なります。たとえば、

- 数学系では理論的な一貫性や証明の正確性
- 人文学系では史料や文献の解釈の適切さ
- 科学技術分野では計算プロセスや数値の整合性

ただし、専門性が高すぎて検証が困難な問題や、分野間のバランスを大きく崩す特殊な問題は採用が見送られることもあります。

#### このベンチマークの意義

このような複層的な審査を経て、3,000の問題が収録されました。数学、物理、化学、言語学、歴史学などをカバーしています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84219_2-edited.png)

ここで採用された問題は、LLMの弱点を明らかにするだけでなく、人間の専門家から見ても「良問」として高く評価されています。つまり人間もLLMも両方にとって究極の問題集と言えるかもしれません。

## LLMの評価実験

現行のLLMがどの程度の能力を持つのか、その実態を明らかにするため、HLEを用いた大規模な評価実験が実施されました。最新のモデルに問題を解かせ、分野や問題の種類ごとに詳しい分析が行われたのです。

着目されたのは、LLMがどのような場面で誤りを犯すのか、またその限界がどこにあるのかという点です。そのため、正答率だけでなく、LLMが示す「自信の度合い」と「実際の正確さ」の関係性についても詳しく検証されました。

### 実験設計

実験では、最先端のLLMたちに対して統一的な指示（プロンプト）を与え、公平な条件での評価が行われました。問題形式に応じて、複数選択式か厳密一致型かを判別し、すべての回答が収集されていきます。

また、回答の正誤判定を自動化するため、GPT-4を審査員として活用する手法も導入されました。

各モデルには推論の過程を明示的に示すよう指示が出されました。最終的な回答と共に、その結論にどの程度の自信があるのかも表明させる方式が採用されたのです。

ここで興味深いのは、LLMがどれほど複雑な思考を展開しているのかを探る試みです。出力される文字数（トークン数）を分析することで、推論の量と性能との関係性が詳しく調査されました。

### 実験で使用されたプロンプト

公開されている範囲で、本実験で実際に使用されたプロンプトをテンプレート形式で紹介します。

まず、複数選択式（multiple-choice）の問題において、LLMに解答理由・最終的な選択肢・自信度を一貫した形式で出力させるために用いられたプロンプトは次の通りです。

```js
Your response should be in the following format:
Explanation: {your explanation for your answer choice}
Answer: {your chosen answer}
Confidence: {your confidence score between 0% and 100% for your answer}
```

和訳（参考）

```js
以下の形式で回答してください：
Explanation: {選んだ答えに対する説明}
Answer: {選んだ選択肢}
Confidence: {解答に対する自信度（0%から100%の値）}
```

また、厳密一致形式（exact-match）の問題において、LLMがどのような推論を行い、最終的にどの文字列を答えとして出力するかを指定するために使われたプロンプトは次の通りです。数値やテキストで答えが一意に定まるケースに対応するテンプレートです。

```js
Your response should be in the following format:
Explanation: {your explanation for your final answer}
Exact Answer: {your succinct, final answer}
Confidence: {your confidence score between 0% and 100% for your answer}
```

和訳（参考）

```js
以下の形式で回答してください：
Explanation: {最終的な答えに至る理由や説明}
Exact Answer: {簡潔な最終解答}
Confidence: {解答に対する自信度（0%から100%の値）}
```

LLMが生成した解答と正解を比較し、合致しているかどうかを自動的に判定するためにもプロンプトが設計されました。たとえばGPT-4などのモデルを「採点役」にすることで、人間が介在せずとも答案の正否を厳密にチェックできるようにしています。

```js
Judge whether the following [response] to [question] is correct or not
based on the precise and unambiguous [correct_answer] below.
[question]: {question}
[response]: {response}
Your judgement must be in the format and criteria specified below:
extracted_final_answer: The final exact answer extracted from the
[response]. Put the extracted answer as 'None' if there is no exact, final
answer to extract from the response.
[correct_answer]: {correct_answer}
reasoning: Explain why the extracted_final_answer is correct or incorrect
based on [correct_answer], focusing only on if there are meaningful
differences between [correct_answer] and the extracted_final_answer. Do
not comment on any background to the problem, do not attempt to solve
the problem, ...
correct: Answer 'yes' if extracted_final_answer matches ...
confidence: ...
```

和訳（参考）

```js
以下の[response]が[question]に対する正答かどうか、
下に示す明確で一意の[correct_answer]に基づいて判定してください。
[question]: {問題文}
[response]: {モデルの回答}
下記のフォーマットと基準に沿って判断を記述してください：
extracted_final_answer: [response]から抽出した最終解答。 
 もし抽出すべき最終解答がなければ 'None' と入力すること。
[correct_answer]: {正解}
reasoning: extracted_final_answerが[correct_answer]と合致しているか、
 あるいは何らかの相違があるかを説明する。問題の背景を解説したり、
 新たに問題を解く行為は行わず、両者の違いにのみ注目する。
correct: extracted_final_answerが[correct_answer]に相当すれば 'yes'、
 そうでなければ 'no'。
confidence: 回答本文に含まれる自信度の数値を抽出。
 もしなければ 100 とする。
```

### 実験結果

HLEが適切な評価基準として機能するかを確認するため、複数のLLMを用いた大規模な実験が行われました。

その結果としてまず注目すべきは、ほとんどのモデルがHLEで低い正答率を示したという点です。これまでの評価基準でほぼ満点を記録してきたLLMでさえ、正答率が10%未満にとどまるケースが報告されています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84219_5-1024x308.png)

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84219_6-1024x306.png)

さらに興味深いのは、多くのLLMが間違った答えに対しても高い自信を示したことです。つまり、自己の能力を過大評価している可能性が示唆されたのです。

そこで研究チームは、LLMの「自信」と「実際の正確さ」のズレを数値化する指標として、「校正誤差」（calibration error）を導入しました。この値は、次のような場合に大きくなります。

- 正解できる見込みが低いのに高い自信を示した場合
- 逆に、正解できる可能性が高いのに自信を下げすぎた場合

その結果、すべてのLLMが高い校正誤差を示しました。これは、誤った解答を出しながらも自信満々に回答している実態を数値で裏付けたことになります。

また、LLMの思考プロセスを探るため、出力される文字数（トークン数）の分析も行われました。その結果、内部の推論過程まで説明させたモデルほど多くの文字を出力する傾向が見られました。ただし、文字数が増えても必ずしも正答率が劇的に向上するわけではないことも判明しています。

総じて、この実験からは重要な示唆が得られました。HLEの問題は、現在のLLMにとって非常に難しいものだったのです。これは、高度な推論や知識の活用において、LLMにはまだ大きな課題が残されていることを意味しています。

## まとめ

新しいLLM評価基準「Humanity’s Last Exam」について詳しく見てきました。

従来の評価指標では天井が見え始めていましたが、この研究では3,000問もの高度な問題を用いることで、現在のLLMが抱える課題を浮き彫りにすることに成功しています。

とはいえ、LLMの進化は目覚ましいスピードで進んでいます。そのため、比較的近い将来には、この難しい問題群に対しても高い正答率を示すモデルが登場するかもしれません。

しかし、この研究の意義は単なる正答率の測定にとどまりません。たとえば、LLMが示す「過剰な自信」の問題など、さまざまな角度からモデルの特性を評価できる点に大きな価値があるのです。

そのため、このベンチマークは今後のLLM開発において重要な指針となる可能性があります。また、LLMと社会との関係を考える上でも、貴重な示唆を与えてくれるものになるかもしれません。

[https://lastexam.ai/](https://lastexam.ai/)

**参照文献情報**

- タイトル：Humanity’s Last Exam
- URL： [https://doi.org/10.48550/arXiv.2501.14249](https://doi.org/10.48550/arXiv.2501.14249)
- 著者：Long Phan, Alice Gatti, Ziwen Han, Nathaniel Li, Josephina Hu, Hugh Zhang, Mohamed Shaaban, John Ling, Sean Shi, Michael Choi, Anish Agrawal, Arnav Chopra, Adam Khoja, Ryan Kim, Richard Ren, Jason Hausenloy, Oliver Zhang, Mantas Mazeika, Summer Yue, Alexandr Wang, Dan Hendrycks
- 所属：Center for AI Safety, Scale AI

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[「職業別にみるLLM活用の現状と今後」Anthropicが大規模調査](https://ai-data-base.com/archives/84086)　

[「すべてのソフトウェアをエージェントとして使う」ビジョンと実践例](https://ai-data-base.com/archives/84295)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)