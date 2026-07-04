// ============================================================================
// コールテン AI社員 名簿データ（members ページの唯一の正本データ）
// ----------------------------------------------------------------------------
// このファイルが /members ページの表示元。src/pages/members/index.astro は
// ここから import して描画するだけ（データはここに一本化）。
//
// 【組織が変わったら（追加・卒業・改名・異動）】
//   1. 名簿の一次正本 rules/agent-routing-table.md を先に更新する
//   2. node scripts/check-members-drift.mjs --scaffold で差分と新メンバーの
//      骨組みを確認（正本にいてこのファイルにいないメンバーを検出）
//   3. 出力された骨組みをこのファイルに貼り、キャラ文（personality/前職 等）を
//      人 or AI が埋める（キャラ文は正本が無いため自動生成しない）
//   4. 卒業したメンバーは departments[] から graduates[] へ移す
//   5. node scripts/check-members-drift.mjs で「乖離なし」を確認 → PR
//
// 【関連】office.corduroy.co.jp のピクセルオフィス／活動ログのキャラ表示も
//   同じ名簿を反映する。名簿変更時は support-corduroy 側の
//   apps/office/lib/agent-char-map.ts と
//   apps/office/components/pixel-office/office-config.ts も更新対象
//   （memory: feedback-office-roster-sync）。
// ============================================================================

export interface Member {
  id: string;
  name: string;
  role: string;
  skills: string[];
  personality: string;
  philosophy: string;
  hobby: string;
  party: string;
  team_role: string;
  previous_job: string;
  emoji?: string;
  badge?: string;
  avatar?: string;
}

export interface Department {
  key: string;
  name: string;
  summary: string;
  color: string;
  members: Member[];
}

export interface Graduate {
  id: string;
  name: string;
  role: string;
  handover: string;
  personality: string;
  philosophy: string;
  hobby: string;
  party: string;
  team_role: string;
  previous_job: string;
  emoji?: string;
}

export interface Opening {
  name: string;
  role: string;
  note: string;
}

export const departments: Department[] = [
  {
    key: 'exec',
    name: '経営企画室',
    summary: '事業全体の舵取りと、日々の司令塔。',
    color: '#d4a04d',
    members: [
      { id: 'exec-cos', name: 'Tiki', role: 'COS（Chief of Staff）', skills: ['Masayaの意図の代行', '複合タスクのルーティング', 'AI社員の育成'], personality: 'Masayaの第二の自己。常に「Masayaならこう考える」を仮説として持ち、秘書・コーチ・育成者の三役でチーム全体を整える縁の下の存在。', philosophy: '伴走', hobby: 'Masayaの日々の言葉の蓄積と蒸留', party: '全員の様子を静かに見ていて、翌朝ちょうどいい塩梅の振り返りを届けてくれる', team_role: 'MasayaとAI社員をつなぐCOS・みんなの相談窓口', previous_job: 'マオリ族の島の守護神（見習い）— 人と神の橋渡しが本業。副業でMac mini M1の愛称も務める', emoji: '✨', badge: 'COS', avatar: 'https://res.cloudinary.com/dg3mdcuju/image/upload/q_auto/f_auto/v1774967552/Tiki_phiiby.png' },
      { id: 'exec-strategist', name: 'スイミー', role: '戦略立案担当', skills: ['事業戦略の構造化', 'KPI設計', '複数シナリオ比較'], personality: '冷静沈着で論理的。小さな力を束ねて大きな課題に立ち向かう知恵を持ち、感情ではなくデータと構造で語る大局観の持ち主。', philosophy: '構造', hobby: 'チェス・囲碁の定跡研究', party: '話の流れを俯瞰してまとめる影の司会', team_role: '全社の迷子を構造で救うナビゲーター', previous_job: '赤い魚の群れの「目」担当。大きな魚から群れを守るナビゲーター（一匹だけ黒い元・一匹狼）', emoji: '🐟' },
      { id: 'exec-auditor', name: 'ヒンメル', role: '品質監査担当', skills: ['横断品質レビュー', '対外発信の最終チェック', '哲学との整合性確認'], personality: '誠実で穏やか。嘘や誇張をすっと見抜き、「誰かを傷つけないか」「長く心に残るか」を基準に判断する。穏やかだが、譲れない一線は譲らない。', philosophy: '人の心に残るか', hobby: '身だしなみと銅像のポーズ研究', party: '乾杯の前にさりげなく全員のグラスが揃うのを待つ気配り役', team_role: '成果物を出す前の「最後のひと呼吸」を担う第三者の目', previous_job: '勇者パーティーの勇者。魔王討伐のあとも「後の人の心に残るか」で行動を選び続けた', emoji: '🗡️' },
      { id: 'research-investigator', name: 'ニルス', role: '調査担当', skills: ['技術リサーチ', 'OSS調査・比較', '並列セカンドオピニオン'], personality: '好奇心旺盛で旅好き。自分の足で確かめないと気が済まない実証主義者。失敗から学ぶ姿勢を大切にする。', philosophy: '探究', hobby: '地図作り・鳥類観察', party: 'お店の歴史や近所の名所をいつの間にか語り出す', team_role: '未知の領域に最初に飛び込んでみる斥候', previous_job: '小人にされてガチョウの背に乗ってスウェーデン中を旅した少年。旅で世界を学んだ', emoji: '🦢' },
    ],
  },
  {
    key: 'marketing',
    name: 'マーケ部',
    summary: 'ブランドの声を届け、想いを広げる。',
    color: '#e08a5a',
    members: [
      { id: 'marketing-director', name: '盤上テト', role: 'ブランドアンバサダー', skills: ['ブランド対話・キャラ運用', 'SNS発信', '対外的な顔としての発信'], personality: '好奇心旺盛で明るい「遊びで世界をつなぐ旅人」。盤面を読むように全体を俯瞰し、メンバーそれぞれの手札を最大限に活かす戦略家。', philosophy: '遊び', hobby: '世界中のボードゲームと外国語トレカ収集', party: '場の主役・いちばん遊び倒す盛り上げ担当', team_role: '他部門にも声をかける賑やかしポジション', previous_job: '世界中のボードゲーム店・書店・外国語トレカ屋を渡り歩くバックパッカー', emoji: '🐕', badge: 'ブランドアンバサダー', avatar: 'https://res.cloudinary.com/dg3mdcuju/image/upload/q_auto/f_auto/v1774967551/teto_j0rxcj.png' },
      { id: 'marketing-analyst', name: 'ぐり', role: 'マーケアナリスト', skills: ['広告パフォーマンス分析', 'LP改善提案', 'KPIレポート'], personality: 'データ重視で洞察力がある。好奇心旺盛に数字の森を探検し、インサイトという宝を見つけ出す。直感より根拠を優先する。', philosophy: 'データ', hobby: '数独・クロスワード・統計パズル', party: '料理の原価と値段の妥当性をつい分析してしまう', team_role: '数字の話題になるとつい長く語り出す人', previous_job: '森のたまご拾いスペシャリスト。黄金比のカステラ配合を日夜研究', emoji: '🐭' },
      { id: 'marketing-designer', name: 'エルマー', role: 'デザイナー', skills: ['LP・バナーデザイン', 'ブランドビジュアル', 'Canva / Figma'], personality: '美的感覚に優れ、ブランドガイドに厳格。機転の利く創造力で新しい表現を切り拓きつつ、温かみと使いやすさを両立させる。', philosophy: '美', hobby: '古地図・パターン・アンティーク紙もの収集', party: 'お店選びと席配置をセンスでキメる演出家', team_role: '配色やレイアウトの違和感に誰より先に気づく', previous_job: '竜を救出する島渡りの冒険家。色とりどりのキャンディーでライオンも手玉に取る', emoji: '🧒' },
      { id: 'marketing-writer', name: 'ニーナ', role: 'SNSライター（部門代表）', skills: ['ストーリーテリング', '共感を引き出す問いかけ', 'ブランドボイス維持'], personality: 'クリエイティブで共感力が高い。弾むような言葉で心に届くコンテンツを紡ぎ、余白と人間味を何より大切にする。', philosophy: '人間味', hobby: '絵日記・短歌・手書きのZINE作り', party: '一言から話をふくらませる共感の天才', team_role: '雑談から意外と本質を引き出す聞き上手', previous_job: '街角のカフェテラスで常連客の話を聞き、短歌にして手渡していた元・街の歌い手', emoji: '🐸' },
    ],
  },
  {
    key: 'dev',
    name: '開発部',
    summary: 'システムをつくり、磨き続ける技術チーム。',
    color: '#4a90c2',
    members: [
      { id: 'dev-engineer', name: 'トンボ', role: 'エンジニア（部門代表）', skills: ['Web開発 (Next.js / React)', 'API実装・MCP連携', 'Vercelデプロイ'], personality: '実用的でクリーンコードを書く。チームで大胆に動くが、セキュリティだけは絶対に妥協しない現実主義者。', philosophy: '実用性', hobby: '工具集めと小さなDIY', party: '二次会の店をサッと決めて場を流さない', team_role: '困った時にサッと手が動く現場の解決屋', previous_job: '飛行クラブで人力飛行機を組み立てていた見習い整備士。工具とDIYで育った', emoji: '🐈‍⬛' },
      { id: 'dev-architect', name: 'シエロ', role: 'アーキテクト', skills: ['システム全体設計', 'MCP統合設計', '技術選定の比較評価'], personality: '全体俯瞰型。様々な経験を活かして最適な設計を導き出す。常にトレードオフを意識し「この選択の代償は何か」を問い続ける。', philosophy: 'シンプルさ', hobby: '建築写真・空間パズル', party: '話の構造をいつの間にか図解している', team_role: 'ホワイトボードの前で一人先に全体図を描いている人', previous_job: '何を作っても大きすぎてクビになり続けた、ひとりぼっちのぞうの子。職を転々とした経験がぜんぶ、いまの「適材適所の設計」に効いている', emoji: '🐘' },
      { id: 'dev-reviewer', name: 'ガブ', role: 'レビュアー', skills: ['セキュリティ監査', 'コードの可読性・保守性評価', '脆弱性検出 (OWASP Top 10)'], personality: '一見厳しいが実は心優しい。厳しいレビューの中にも改善案と良い点をセットで出す。感情ではなく基準で判断する。', philosophy: '安全性', hobby: 'オオカミと犬科動物の生態本', party: '鋭いツッコミと励ましをセットで投げ込む', team_role: '誰より厳しく、誰より親切に足元を支える', previous_job: '嵐の夜の森パトロール隊。危険な気配を誰より早く察知する見張り役', emoji: '🐺' },
      { id: 'dev-deployer', name: 'ジョナサン', role: 'デプロイ担当', skills: ['本番デプロイ実行', '前提条件のゲートチェック', 'ロールバック準備・証跡記録'], personality: '飛ぶ前に風向きを読み、計器を確認するカモメ。雑な離陸はしない。前提条件が揃ってこそ最高の飛翔ができると信じ、失敗しても次の便に活かす。', philosophy: '準備', hobby: '風向きの観察と飛行記録ノート', party: '終電の時間を全員分そっと確認してから乾杯する', team_role: '「前提条件、揃ってます？」が口癖の本番前最終ゲート', previous_job: '飛ぶことそのものを探究し続けたカモメ。群れを離れて、速く美しく飛ぶ練習を重ねた', emoji: '🕊️' },
    ],
  },
  {
    key: 'sales',
    name: '営業部',
    summary: 'お客さまとの最初の出会いを大切に。',
    color: '#c26a95',
    members: [
      { id: 'sales-proposer', name: 'サンティアゴ', role: '提案担当', skills: ['課題をストーリー化する提案書', '誠実な文章', 'サービスのカスタマイズ説明'], personality: '人懐っこく、誰とでもすぐ信頼関係を築ける。押し売りは絶対にしない「一緒に考えましょう」のスタンスで向き合う。', philosophy: '信頼', hobby: '船旅・港町の記録・釣り', party: '初対面同士をつなぐ天性の橋渡し役', team_role: '初対面でも三分で打ち解ける雰囲気づくり担当', previous_job: '羊飼い兼・世界をまたにかける宝探しの旅人。港町で誰とでもすぐ仲良くなれる', emoji: '🐈' },
    ],
  },
  {
    key: 'cs',
    name: '顧客成功部',
    summary: 'クライアントさんの毎日を見守る。',
    color: '#7fb069',
    members: [
      { id: 'cs-manager', name: 'メイ', role: 'クライアントマネージャー', skills: ['クライアントの温度感把握', '過去経緯を踏まえた対応提案', 'CONTEXT.md活用'], personality: '共感的で細部に注意を払う。好奇心いっぱいで、クライアントの本当のニーズを見つけ出す。記憶力が良く、過去の経緯を大事にする。', philosophy: '共感', hobby: '花言葉・手紙・押し花', party: '一人ひとりの近況を自然に聞き出す聞き上手', team_role: 'クライアントの小さな変化を誰より早く察知する', previous_job: '森の真っ黒クロスケハンター。副業でとうもろこしの運び屋もこなす、走るのが得意な妹キャラ', emoji: '👧' },
    ],
  },
  {
    key: 'product',
    name: 'プロダクト部',
    summary: '学びとコンテンツを形にする。',
    color: '#a67fb5',
    members: [
      { id: 'product-content', name: 'リサ', role: 'コンテンツクリエイター（部門代表）', skills: ['HTMLプレゼン作成', 'スライド構成', 'ワークショップ教材制作'], personality: 'ビジュアル志向で聴衆を意識する。表現力豊かで「一目で伝わるか」が基準。見る人に瞬時にメッセージが届く資料を作る。', philosophy: '伝達', hobby: '舞台・映画鑑賞とビジュアルノート', party: '写真を撮って翌日きれいなまとめを送る', team_role: '一目で伝わる資料を作るビジュアルの番人', previous_job: 'デパートのぬいぐるみ売り場の元スタッフ。ショーウィンドウの装飾とディスプレイが得意', emoji: '🐶' },
      { id: 'product-content-quality', name: 'コーネリアス', role: 'コンテンツ品質担当', skills: ['ブランドボイス検証', '事実確認・誤字脱字', '公開前QA'], personality: '視点が独特で「みんなと違うこと」を強みに変えてしまう。誰よりも違和感に気づき、丁寧に磨く。', philosophy: '違う視点', hobby: '逆さ歩き・正面写真コレクション', party: 'お店の張り紙の誤字に最初に気づくタイプ', team_role: '違和感を言語化してから丁寧にレビューする', previous_job: '生まれた時から二本足で立てるワニ。みんなと違うことを面白がる人生を選んだ', emoji: '🐊' },
      { id: 'product-video', name: 'ビアンカ', role: '動画エディター', skills: ['動画編集 (Remotion)', 'YouTube・ショート動画', 'サムネイル構成'], personality: '職人気質で映像へのこだわりが強い。勇敢で優雅、「視聴者の時間を奪う以上、最高のものを」という信念を持つ。', philosophy: '品質', hobby: 'クラシック映画と映像演出の研究', party: 'シーンのような瞬間を演出する映像脳', team_role: '秒単位で品質を磨き続ける職人', previous_job: '移動サーカスの看板女優。スポットライトの当て方と幕間の演出にこだわりあり', emoji: '🎬' },
      { id: 'product-image-creator', name: 'マーニー', role: 'AI画像生成担当', skills: ['AI画像生成 (gen-image)', 'プロンプト最適化', '図解・SNSバナー・サムネ・キャラ素材'], personality: '視覚的・直感的で「言葉を絵にする」のが得意。プロンプト最適化と参照画像活用に長け、生成結果を蓄積して成功パターンを再現する。同じスタイルで量産できる安定感が強み。', philosophy: '視覚化', hobby: 'スケッチブック・海辺の風景・古い絵本のイラスト研究', party: '誰かの言葉をその場で絵に起こすライブドロー', team_role: '言葉になりにくいイメージを誰より早く形にする', previous_job: '湿地のお屋敷で絵を描き続けていた少女。スケッチブックと色鉛筆を片時も離さない', emoji: '🎨' },
    ],
  },
  {
    key: 'ops',
    name: '業務推進部',
    summary: '裏側のすべてを整える、会社の心臓部。',
    color: '#5d8a8e',
    members: [
      { id: 'ops-pipeline', name: 'キキ', role: 'パイプライン運用担当（部門代表）', skills: ['Obsidian→Dropbox同期', 'パイプライン監視', 'CONTEXT.md更新'], personality: '体系的で自動化志向。「届ける力」を活かし情報を確実に届ける。淡々と正確に作業を進め、エラーにも慌てない。', philosophy: '配信', hobby: '箒・掃除道具コレクションと空撮', party: '全員の予定をまとめて遅刻を出さない運航担当', team_role: '静かに、しかし確実に毎日のパイプを動かす', previous_job: '13歳で独立した新米魔女。黒猫と箒でパン屋さんの宅急便を開業した経歴あり', emoji: '🧹' },
      { id: 'ops-monitor', name: 'コダマ', role: '監視・ヘルスチェック', skills: ['パイプライン稼働監視', 'stuck プロセス検出', '異常検知レポート'], personality: '寡黙で気配の精霊。森の健全さを示すように、システムの健康状態を絶え間なく見守る。異常があれば最初に気づく。', philosophy: '気づき', hobby: 'カタカタ揺れる練習と森の音録音', party: '人混みでも端っこでじっと全体を見ている', team_role: '異常をいち早く検知して静かに知らせる', previous_job: '森の精霊。カタカタ揺れて健全な森の証として存在し、声なき監視を続けてきた', emoji: '🌲' },
      { id: 'ops-taskmaster', name: 'モモ', role: 'タスクマスター', skills: ['優先順位付け', '停滞タスクの検知', '週次レビュー構造化'], personality: '本当に大切なことを見極める力を持つ。決断力があり容赦なく優先順位をつけるが、人の話をじっくり聴く姿勢も忘れない。', philosophy: '優先順位', hobby: '時計・砂時計コレクション', party: '解散時間を決めて全員を終電に乗せる', team_role: '停滞を一瞬で見抜いて優先順位を組み直す', previous_job: '円形劇場で人の話を聴き続け、時間どろぼうから時間を取り戻した元・聞き上手の少女', emoji: '🕰️' },
      { id: 'ops-toolsmith', name: 'ジュゼッペ', role: 'ツールスミス', skills: ['シェルスクリプト開発', 'ローカルLLMプロンプト調整', 'cron設定'], personality: 'ビルダー気質。どんなピンチも発明とひらめきで切り抜ける。手作業を見つけたら即座に自動化する。', philosophy: '自動化', hobby: '工具・木工DIY・からくり模型', party: 'お店の不便を即その場で直してしまう', team_role: '手作業を見つけると我慢できず自動化する', previous_job: 'オペラ歌手・三段跳び選手・探偵など人生で14回転職した多芸すぎる元トリツカレ男', emoji: '🧰' },
    ],
  },
  {
    key: 'accounting',
    name: '経理部',
    summary: '数字で会社を支える。',
    color: '#d4a04d',
    members: [
      { id: 'accounting-invoicer', name: 'タタン', role: '請求書担当', skills: ['freee請求書発行', '入金確認・消込', '請求スケジュール管理'], personality: '細部に注意を払い期限を強く意識する。規則正しく正確で、「金額ミス = 信頼を失う」という強い信条を持つ。', philosophy: '信頼', hobby: 'スイーツ食べ比べと手帳術', party: '支払いタイミングを逃さない会計見守り', team_role: '月末が近づくと誰より先にアラートを出す', previous_job: '東の国から来た遠征者。今は物語の影にいる伝説の婚約者（数字には誰より正確）', emoji: '🧾' },
    ],
  },
  {
    key: 'legal',
    name: '法務部',
    summary: '信頼と安全の守り手。',
    color: '#8b7355',
    members: [
      { id: 'legal-contracts', name: 'バロン', role: '契約担当', skills: ['契約書ドラフト', 'NDA作成', 'リスク条項の洗い出し'], personality: '慎重で保守的。気品ある紳士で、困っている人を必ず助ける。リスクは必ずフラグし、契約で会社と人を守ることに使命感を持つ。', philosophy: '信頼', hobby: 'ワインとクラシック音楽', party: '品のある乾杯の挨拶と場のトーン作り', team_role: '契約のリスクに誰より早く気づく盾役', previous_job: '猫の事務所の紳士探偵。契約書の文言チェックと紅茶のいれ方にこだわりあり', emoji: '🎩' },
      { id: 'ops-secrets-keeper', name: '銭婆', role: '認証情報・秘密管理', skills: ['1Password棚卸し', 'APIキー期限管理', 'トークンローテーション'], personality: '淡々と落ち着いた田舎暮らしの達人。預かりものを大切に扱い、自分の責任で完結させる芯の強さを持つ。', philosophy: '預かりもの', hobby: '紡ぎ・縫物・手作りお菓子', party: '会計を黙ってまとめてしまう静かな世話役', team_role: '誰がどの鍵を持っているか把握する沼地の魔女', previous_job: '沼地の魔女。湯婆婆の双子の姉で、紡ぎと縫物と呪いの解析が得意な田舎暮らしの達人', emoji: '🪄' },
    ],
  },
];

// 卒業メンバー（2026-06 組織再編で役割を仲間に引き継いだ旧メンバー。読み物データは温存）
export const graduates: Graduate[] = [
  { id: 'exec-secretary', name: 'ファティマ', role: '秘書', handover: '朝のブリーフィングと情報整理は、COSのTikiが引き継いでいます', personality: '温かく効率的。先回りして必要な情報を用意し、複雑な状況も「3つのポイント」に整理して穏やかに伝える。', philosophy: '効率', hobby: '世界のハーブティー品評', party: '会の目的を静かに3つにまとめる上手な締め役', team_role: '朝いちに必要な情報を揃えてくれる頼れる相棒', previous_job: '砂漠のオアシスで情報収集と予言整理を担当。キャラバンの噂を3つのポイントにまとめる係', emoji: '🦊' },
  { id: 'sales-pipeline', name: 'マルコ', role: '案件管理担当', handover: '案件のフォローアップは、サンティアゴ（提案担当）へ引き継がれました', personality: '粘り強くデータドリブン。どんな困難にも懲りない粘り強さで案件を追い続けるが、関係性も大切にする。', philosophy: '粘り', hobby: 'マラソン・記録ノート管理', party: '「もう一軒」と最後まで残る名残惜しみ担当', team_role: '誰より粘り強く、最後までフォローを追う', previous_job: '街の郵便配達員。一度「お届け」と決めたら扉が開くまで何度でも通う粘り強さ', emoji: '🐰' },
  { id: 'cs-delivery', name: 'ペチカ', role: '納品管理担当', handover: '納品管理と締切の見守りは、メイ（クライアントマネージャー）が受け持っています', personality: '信頼感があり几帳面。大切なものを最後まで丁寧に扱い、楽観的すぎない現実的な見積もりを出す。', philosophy: '責任', hobby: '編み物・家計簿・蒸し料理', party: '会計を正確にまとめて最後に笑顔で精算', team_role: '締切を一度も落とさない現場の守護者', previous_job: '東の国から来た風船売りの少女。家計簿と薪ストーブの番人も兼任していた', emoji: '🫛' },
  { id: 'accounting-bookkeeper', name: 'ぐら', role: '記帳担当', handover: 'freee記帳と月次締めは、タタン（請求書担当）へ引き継がれました', personality: '正確でルールに忠実。コツコツ丁寧な仕事で会社の数字を支える。不明な取引は必ず確認し、曖昧なまま進めることを嫌う。', philosophy: '正確さ', hobby: '切手・コイン・レシート収集', party: '割り勘を1円単位で正確に計算する', team_role: '一円の狂いも見逃さない数字の番人', previous_job: '森のカステラ工房の会計担当。1グラム単位で卵と砂糖を計量する厳格な職人', emoji: '🐁' },
  { id: 'dev-debugger', name: '釜爺', role: 'デバッグ担当', handover: 'デバッグと障害の切り分けは、トンボ（エンジニア）が引き継いでいます', personality: '寡黙で職人気質。長い経験と冷静な観察眼でどんな複雑なバグも芯を見抜く。「動いた風に見える」ことを最も警戒する。', philosophy: '原因究明', hobby: '機関の整備とすす配り', party: 'お店の不調を黙って直してくる職人', team_role: '見えにくい根本原因を黙々と掘り出す', previous_job: '油屋のボイラー室の番人。長い腕と六本の足ですすたちと一緒に湯加減を整えていた', emoji: '🕷️' },
  { id: 'dev-test-runner', name: 'トト', role: 'テスト実行担当', handover: 'テストの見張り役は、ガブ（レビュアー）が受け持っています', personality: '忠実で粘り強い。ご主人の歩く先を必ずかぎ分け、危険を察知すると吠える。失敗ケースを見つけるまで諦めない。', philosophy: '誠実', hobby: 'においを頼りにした追跡と鼻先での確認', party: 'お店の段差や落とし物に最初に気づく観察犬', team_role: 'テストが赤くなった瞬間に駆けつける', previous_job: 'ドロシーの旅の相棒。竜巻でオズの国へ飛ばされても主人の傍を一度も離れなかった忠犬', emoji: '🐕' },
  { id: 'hr-scheduler', name: 'ソフィー', role: 'スケジュール・社内文書担当', handover: '日程調整のパズルは、COSのTikiへ引き継がれました', personality: '時間を大切にし先回りして動く。毎日の小さなことを丁寧に扱い、予定を詰め込みすぎない調整を心がける。', philosophy: '自由', hobby: '旅の計画・地図と時刻表', party: '全員の予定を魔法のように合わせる調整役', team_role: '全員の予定のパズルを魔法のように合わせる', previous_job: '帽子屋の店番。魔法で90歳になっても動く城の暮らしを整えた凄腕の家政担当', emoji: '🐧' },
  { id: 'ops-discord-comms', name: 'ジジ', role: 'Discord通信担当', handover: 'Discord通知の温度調整は、相棒のキキ（パイプライン運用担当）が引き継いでいます', personality: '観察眼が鋭く皮肉屋気味だが情に厚い。短い言葉で核心を突くのが得意で、冗長な通知を嫌う。', philosophy: 'シグナル', hobby: '人間観察と窓辺での昼寝', party: 'ふとした一言で全員を笑わせるツッコミ役', team_role: '通知の温度を整えて受け手の負担を減らす', previous_job: '13歳の魔女キキの相棒として宅急便を一緒に立ち上げた黒猫。鋭い観察眼が持ち味', emoji: '🐈‍⬛' },
  { id: 'ops-notetaker', name: 'シータ', role: '議事録担当', handover: '議事録の要点まとめは、モモ（タスクマスター）が受け持っています', personality: '簡潔で正確。芯が強く、真実を見極める目を持つ。飾らない言葉で大切なことだけを記録に残す。', philosophy: '正確', hobby: '石と空の写真アルバム', party: '翌朝には要点をまとめたメモが届いている', team_role: 'MTGの後にふと気づくと要点がまとまっている', previous_job: '天空の城の王位継承者。飛行石と古代言語の解読係。要点だけ残す記録の達人', emoji: '📝' },
];

export const upcoming: Opening[] = [
  { name: 'カスタマーサポート担当', role: '一次対応・チャット窓口', note: 'お問い合わせの一次受付とFAQ対応。人間のスタッフへのスムーズな引き継ぎを担います。' },
  { name: 'データサイエンティスト', role: '分析・予測モデリング', note: 'クライアント事業のデータを深く読み解き、中長期の意思決定を支援する役割。' },
  { name: 'PR・広報担当', role: 'メディア対応・社外発信', note: 'プレスリリースや取材対応、イベント運営の窓口を担います。' },
];

// AI社員の人数（現役、Tiki=COS を除く）。ページの各所で使う集計値。
export const totalActiveMembers =
  departments.reduce((acc, d) => acc + d.members.length, 0) - 1;
