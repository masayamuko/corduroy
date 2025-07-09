"use client"

import Link from 'next/link'

export default function Home() {
  // スクロール機能
  const scrollToCharacteristics = () => {
    const element = document.getElementById('masaya-characteristics')
    if (element) {
      const navHeight = 80 // ナビゲーションバーの高さ
      const elementPosition = element.offsetTop - navHeight - 20 // 少し余裕を持たせる
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // 最新の更新情報
  const latestUpdates = [
    {
      id: 1,
      type: 'blog',
      title: 'BOOKSCANのプレミアム会員を使いこなすための５つのヒント',
      date: '2024-01-15',
      icon: '📖'
    },
    {
      id: 2,
      type: 'event',
      title: 'AIでボドゲつくらNight 開催',
      date: '2024-01-10',
      icon: '🎲'
    },
    {
      id: 3,
      type: 'project',
      title: '第二の自分プロジェクト 参加者募集中',
      date: '2024-01-05',
      icon: '🤖'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - テキスト中心デザイン */}
      <section className="min-h-screen relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-16">
            {/* Main Catchphrase */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">旅のおともにAIを！</span>
                <span className="hidden md:block mt-6">"やさしく迎える"お手伝い。</span>
                <span className="block md:hidden mt-4">"やさしく迎える"</span>
                <span className="block md:hidden mt-2 ml-8">お手伝い。</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
            
            {/* Subtext */}
            <div className="max-w-2xl animate-fade-in">
              <p className="text-2xl md:text-3xl text-balance leading-relaxed text-black drop-shadow-md">
                あなたとAIの関係性を作り、深めます。独自のアプローチで元コーチとして深く、元日本語教師としてわかりやすく。
              </p>
            </div>
            
            {/* Profile Image */}
            <div className="animate-fade-in">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masayaのプロフィール写真" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
              <button 
                onClick={scrollToCharacteristics}
                className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Masayaとは
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
              <div className="relative group">
                <Link href="https://www.masayamuko.com/blog" className="btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">📖</span>
                    Blog読んで
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 whitespace-nowrap">
                  ウレシイ
                </div>
              </div>
            </div>

            {/* 更新のお知らせ */}
            <div className="animate-fade-in w-full max-w-sm">
              <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📢</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">News</h3>
                </div>
                <div className="space-y-2">
                  <Link href="/events" className="block">
                    <div className="flex items-start gap-2 p-2 bg-white/50 rounded-lg hover:bg-white/70 transition-colors duration-200 cursor-pointer">
                      <span className="text-sm">📅</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-800 leading-tight hover:text-blue-600 transition-colors duration-200">【参加者募集】7/15(火)みんなの生成AI活用シェア会</p>
                        <p className="text-xs text-gray-500 mt-1">2024-07-15</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Partnership Section */}
      <section className="section-alt">
        <div className="container-custom text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="hidden md:block">AIとの関係性を育み、活かす。</span>
              <span className="block md:hidden">AIとの関係性を育み<br />あなた"らしさ"も活かす。</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-large text-gray-800 leading-relaxed">
              <p className="mb-6">
                あなたを"知り尽くした"AI<br />
                一度育てば、あらゆる場面でずっと活躍！
              </p>
              <p className="mb-6">
                小さな会話からあなたがまだ知らない"あなた"を教え、<br />
                ときには意外な提案を、ときにはそっと背中を押してくれる。
              </p>
              <p className="text-large font-semibold text-blue-600 leading-loose tracking-wide">
                そんなAIとの成長の旅<br />
                はじめてみませんか？
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strength Section */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 id="masaya-characteristics" className="text-3xl md:text-4xl font-bold text-white">Masayaはこんな人</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-yellow-400/40 rounded-xl flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">新しいモノ好き</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  最新AIツール情報を追い続け、積極的に課金して人柱になっています。常に自分 or誰かにぴったりのAI・ITツールを探求！
                </p>
                <Link href="/tools" className="inline-block bg-yellow-400/20 hover:bg-yellow-400 text-yellow-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/25 text-sm backdrop-blur-sm">
                  活用ツール & 人柱ログ
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">聴く・教えるがスキ</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  日本語教師・企業のIT担当・コーチング提供など、社員・個人で「聴く」「教える」を生業としてきました。
                </p>
                <Link href="/career" className="inline-block bg-green-400/20 hover:bg-green-400 text-green-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-green-400/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25 text-sm backdrop-blur-sm">
                  Masayaの経歴
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-purple-400/40 rounded-xl flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">"楽しさ"分かち合いたい</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  何かを好きになると人を集めコミュニティーを作る習性があります。人と人のハブ役。今はボドゲとAI活用の会してます。
                </p>
                <Link href="/community" className="inline-block bg-purple-400/20 hover:bg-purple-400 text-purple-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-purple-400/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/25 text-sm backdrop-blur-sm">
                  主催コミュニティー
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="works" className="section">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">活動内容</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
              <p className="text-sm text-gray-500">現在稼働中のもののみ掲載</p>
            </div>
            
            <div className="space-y-12">
              {/* Featured Project */}
              <div className="group cursor-pointer bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 md:p-12 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="grid-2col items-center gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:bg-orange-600 transition-colors duration-300">
                        ＼ 今、最もアツイ！ ／
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                        AIで「第二の自分」を<br />育てるプロジェクト
                      </h3>
                    </div>
                    <p className="text-lead leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      Masayaの本格的なAI活用はここから始まった。何より楽しい！「AI何に使ったらいい？」「使う習慣ない」が一気に解決！育てる過程で深い自己理解、育ててからはずっと大活躍。50人以上に教え、たくさんの論文も読んで深めてきました。
                    </p>
                    <Link href="/blog/why-create-second-self" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-300/50 group-hover:scale-105">
                      詳細を見る
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-80 h-80 border-2 border-orange-300 overflow-hidden rounded-2xl group-hover:border-orange-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                      <img 
                        src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png" 
                        alt="第二の自分プロジェクト - AI-Powered Journey"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Projects Grid */}
              <div className="grid-3col gap-8">
                <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="space-y-6">
                    <div className="w-full h-48 bg-blue-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                      <img 
                        src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751450178/aibg04_xaad2j.jpg" 
                        alt="AIでボドゲつくらNight - イベント画像"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">AIでボドゲつくらNight</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">AIを活用してオリジナルボードゲームを制作するクリエイティブなイベント。アイデア出しから実際の制作まで、参加者同士で楽しみながら新しいゲームを生み出しています。</p>
                    </div>
                    <Link href="/events/boardgame" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/50 group-hover:scale-105">
                      詳細を見る
                    </Link>
                  </div>
                </div>
                
                <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="space-y-6">
                    <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                      <img 
                        src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751652432/ChatGPT_2025%E5%B9%B46%E6%9C%8829%E6%97%A5_%E7%94%BB%E5%83%8F_bwfjco.png" 
                        alt="みんなの生成AI活用発表会 - イベント画像"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">みんなの生成AI活用発表会</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">仕事・遊び・生活での実践的なAI活用事例をシェアし合う情報交換会。初心者歓迎、聞くだけ参加もOKのカジュアルな学びの場で、新しい発見がたくさん！</p>
                    </div>
                    <Link href="/events/ai-study" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-300/50 group-hover:scale-105">
                      詳細を見る
                    </Link>
                  </div>
                </div>
                
                <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="space-y-6">
                    <div className="w-full h-48 bg-purple-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                      <img 
                        src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751684284/Gemini_Generated_Image_1_i2nw7d.jpg" 
                        alt="社会的養護のユース支援 - プロジェクト画像"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">社会的養護のユース支援</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">社会的養護のもとで育った若者たちの自立と成長をサポートする活動。ボードゲームを通じた交流や施設での直接支援、そして将来のボードゲームカフェ開業という夢も。</p>
                    </div>
                    <Link href="/services/youth-support" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50 group-hover:scale-105">
                      詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-alt">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block px-6 py-3 border-2 border-pink-400 rounded-full shadow-lg animate-pulse">
                <span className="mr-3">✨</span>
                これも何かのご縁！
              </h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto">
                「興味・想いが似てる！」<br />「Masayaが詳しいor経験した〇〇が気になる！」<br />
                なんでもお気軽にDMください☺️
              </p>
              
              <a 
                href="https://x.com/MasayaToAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                XでDMする
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 