"use client"

import Link from 'next/link'

export default function BoardgamePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold">AIでボドゲつくらNight</h1>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751450178/aibg04_xaad2j.jpg" 
                alt="AIでボドゲつくらNight - イベント画像"
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
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  みんなの「作りたい」をAIと一緒に形にしてゆくボドゲ作りの夜
                </p>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">開催詳細</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>日時:</strong> 隔週水曜 19:00-21:00 ※途中入退室OK!</p>
                    <p><strong>場所:</strong> 福岡市内（天神駅近くの貸切会場）</p>
                    <p><strong>持ち物:</strong> PC推奨（AIツール使用にぜひ）</p>
                    <p><strong>参加費:</strong> 無料（飲食物の持ち寄り大歓迎！）</p>
                  </div>
                </div>
              </div>
            </div>



            {/* コミュニティの魅力 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">コミュニティの魅力</h2>
                </div>
                
                <div className="grid-3col gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl">🤗</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">暖かい雰囲気</h3>
                    <p className="text-gray-600 text-sm">経験不問で、みんなで学び合える安心できる環境</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl">💡</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">アイデアの共有</h3>
                    <p className="text-gray-600 text-sm">作りたいゲームのアイデアをみんなでブレスト</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">AI活用の知恵</h3>
                    <p className="text-gray-600 text-sm">主催者が持つAIツールの活用ノウハウをシェア</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 公式サイト */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">公式サイト</h2>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  詳細なイベント情報、開催スケジュール、参加方法については公式サイトをご確認ください。
                </p>
              </div>
              
              <a 
                href="https://ai-am-i-ai-community.github.io/wed_bgnight/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/50 hover:scale-105"
              >
                公式サイトを見る
              </a>
            </div>



            {/* よくある質問 */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">よくある質問</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. AIやボードゲームの知識は必要ですか？</h3>
                  <p className="text-gray-700">A. 全く必要ありません！カジュアルにAI・ボドゲに興味があるもの同士カジュアルに集まることから始めましょう！</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 一人で参加しても大丈夫ですか？</h3>
                  <p className="text-gray-700">A. もちろんです！ほとんどの方がお一人での参加だと思います。新しい仲間と出会いましょう！主催者もソロ主催ですw</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 参加費はいくらですか？</h3>
                  <p className="text-gray-700">A. 無料です！主催者が会場を貸し切って開催します。飲食物・差し入れ等の持ち込み大歓迎です！</p>
                </div>
              </div>
            </div>

            {/* 参加申し込み */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold">参加申し込み</h2>
                  <p className="text-blue-100 mt-2">🎯 参加・問い合わせ</p>
                </div>
                
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                    <h3 className="text-xl font-semibold">参加・問い合わせは主催者のXのDMにて</h3>
                    <p className="text-blue-100">
                      参加をご希望の方は、主催者のXアカウントのDMでお気軽にお声がけください。
                      開催日時や会場の詳細をお伝えします。
                    </p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <a 
                      href="https://twitter.com/MasayaToAI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      主催者のXアカウント
                    </a>
                  </div>
                  
                  <div className="text-center text-blue-100">
                    <p className="text-sm">
                      🎲 AIの力を借りながら、みんなでボードゲームを作る楽しさを共有しましょう！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 