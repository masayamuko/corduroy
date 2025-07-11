"use client"

import Link from 'next/link'

export default function AIStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-alt">
        <div className="container-narrow">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <Link href="/" className="inline-block text-gray-600 hover:text-black transition-colors duration-300">
                ← ホームに戻る
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">みんなの生成AI活用発表会</h1>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751652432/ChatGPT_2025%E5%B9%B46%E6%9C%8829%E6%97%A5_%E7%94%BB%E5%83%8F_bwfjco.png" 
                alt="みんなの生成AI活用発表会 - イベント画像"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-16">
            {/* イベント概要 */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">イベント概要</h2>
              <div className="grid-2col gap-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">開催頻度</h3>
                    <p className="text-gray-700 leading-relaxed">
                      月１回実施している情報交換の会です。
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">コンセプト</h3>
                    <p className="text-gray-700 leading-relaxed">
                      仕事だけでなく、遊びや生活でもどんなふうに生成AIを役立ててるかシェアし合う会です。実際の活用事例を通じて、みんなでAIの可能性を発見していきます。
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">参加スタイル</h3>
                    <p className="text-gray-700 leading-relaxed">
                      カジュアルに聴くだけ参加、初心者さんWELCOME！発表したい方も、まずは聞いてみたい方も、どちらも大歓迎です。
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">発表内容例</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-2">
                      <li>• 仕事での効率化事例</li>
                      <li>• 趣味や創作活動での活用法</li>
                      <li>• 日常生活での便利な使い方</li>
                      <li>• 失敗談や試行錯誤の経験</li>
                      <li>• 新しいツールの紹介</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 特徴 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">この会の特徴</h2>
                </div>
                
                <div className="grid-3col gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">カジュアルな雰囲気</h3>
                    <p className="text-gray-600 text-sm">堅苦しくない、リラックスした環境で情報交換</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">実践的な内容</h3>
                    <p className="text-gray-600 text-sm">理論より実際に使える活用法を重視</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">多様な視点</h3>
                    <p className="text-gray-600 text-sm">様々な分野・立場からのAI活用事例</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Masayaからのメッセージ */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">Masayaからのメッセージ</h2>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    「みんなの生成AI活用発表会」は、AI活用の"リアル"を共有する場です。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    教科書的な使い方ではなく、みんなが実際にどんなふうにAIを生活に取り入れているかを聞けるのが、この会の一番の魅力です。「こんな使い方があるんだ！」「これなら自分にもできそう」という発見がたくさんあります。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    発表者の方も、聞き手の方も、みんなが学び合える温かい雰囲気を大切にしています。AIを使ったことがない方も、ベテランの方も、それぞれの視点で楽しめる会になっています。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    「聞くだけ参加」も大歓迎！まずは気軽に参加してみてください。
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold">参加・お問い合わせ</h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                イベントへの参加や詳細については、お気軽にお声がけください。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://x.com/MasayaToAi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Xでお問い合わせ
                </a>
                <Link href="/" className="btn btn-secondary">
                  ホームに戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 