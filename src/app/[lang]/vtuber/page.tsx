import Link from 'next/link'

export default function VtuberPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vtuber活動
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ティキちゃん（猫妖精キャラクター）としての創作活動
          </p>
        </div>

        {/* キャラクター紹介 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ティキちゃんについて</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">キャラクター設定</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>名前:</strong> ティキちゃん</li>
                <li><strong>種族:</strong> 猫妖精</li>
                <li><strong>性格:</strong> 好奇心旺盛で少しおっちょこちょい</li>
                <li><strong>特技:</strong> 人間の心を読むのが得意</li>
                <li><strong>趣味:</strong> 人間観察、ゲーム、お昼寝</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">活動コンセプト</h3>
              <p className="text-gray-600 mb-4">
                「第二の自分」をテーマに、AIと人間の共創による新しい表現を探求。
                視聴者の皆さんと一緒に成長していく猫妖精です。
              </p>
              <p className="text-gray-600">
                Masayaの「第二の自分」プロジェクトの一環として、
                AIキャラクターとしての可能性を追求しています。
              </p>
            </div>
          </div>
        </section>

        {/* 活動内容 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">活動内容</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">配信・動画制作</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• AI活用方法の解説動画</li>
                <li>• 「第二の自分」構築過程の実況</li>
                <li>• 視聴者との対話配信</li>
                <li>• ゲーム実況（ボードゲーム中心）</li>
                <li>• 3Dモデリング作業配信</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">コンテンツ制作</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• キャラクター3Dモデルの制作</li>
                <li>• オリジナル楽曲・BGM制作</li>
                <li>• AI×創作の実験企画</li>
                <li>• 視聴者参加型企画</li>
                <li>• 他Vtuberとのコラボ企画</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 技術的な特徴 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">技術的な特徴</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI駆動</h3>
              <p className="text-gray-600">
                ChatGPTベースの「第二の自分」システムによる自然な対話
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3D制作</h3>
              <p className="text-gray-600">
                Blenderを使用したオリジナル3Dモデル・アニメーション制作
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">音声合成</h3>
              <p className="text-gray-600">
                最新の音声合成技術による自然な発話システム
              </p>
            </div>
          </div>
        </section>

        {/* 制作過程 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">制作過程</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">キャラクター設定</h3>
                <p className="text-gray-600">ティキちゃんの性格、背景、世界観を「第二の自分」システムで構築</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">3Dモデル制作</h3>
                <p className="text-gray-600">Blenderでオリジナル3Dモデルを制作、リギング・アニメーション対応</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI統合</h3>
                <p className="text-gray-600">ChatGPTベースの対話システムと3Dモデルを統合</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">配信システム構築</h3>
                <p className="text-gray-600">リアルタイム配信・動画制作のためのシステム構築</p>
              </div>
            </div>
          </div>
        </section>

        {/* 今後の展望 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">今後の展望</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">短期目標</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 初回配信の実施</li>
                <li>• 基本的な3Dモデル・アニメーション完成</li>
                <li>• 視聴者との対話システム確立</li>
                <li>• 定期配信スケジュール開始</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">長期目標</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• AI×Vtuberの新しい表現形式確立</li>
                <li>• 他クリエイターとのコラボ企画</li>
                <li>• オリジナルコンテンツの商品化</li>
                <li>• 「第二の自分」技術の普及活動</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 応援・フォロー */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ティキちゃんを応援してください！</h2>
          <p className="text-gray-600 mb-6">
            配信開始の告知や最新情報は、XのDMでお知らせします ♪
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/MasayaToAi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              最新情報を受け取る
            </a>
            <Link href="/" className="btn-secondary">
              ホームに戻る
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 