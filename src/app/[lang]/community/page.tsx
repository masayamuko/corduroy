import Link from 'next/link'

export default async function CommunityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const content = {
    ja: {
      title: "コミュニティー",
      communities: {
        boardgame: {
          title: "ボドゲつくらNight",
          description: "毎週水曜開催。ボードゲーム制作を通じてクリエイティブな仲間が集まるコミュニティ。",
          status: "参加者募集中"
        },
        ai: {
          title: "生成AI活用シェア会",
          description: "仕事・遊び・生活での実践的なAI活用事例をシェアし合う情報交換会。",
          status: "定期開催中"
        },
        fukunuma: {
          title: "福沼会",
          description: "福岡でAI活用を学び合い、「第二の自分」を育てる仲間が集まるコミュニティ。",
          status: "次回開催準備中"
        }
      },
      philosophy: {
        title: "コミュニティへの想い",
        description: "人と人とのつながりから生まれる新しい化学反応。それぞれの個性が輝く場所を作ることが、僕の使命だと思っています。"
      },
      pastCommunities: {
        title: "過去のコミュニティ",
        subtitle: "これまでに立ち上げ・運営してきたコミュニティたち",
        picnic: {
          title: "ピクニックサークル",
          description: "大学出て１、２年間。自然の中で楽しむ仲間たちとピクニックを企画・開催していました。",
          period: "大学卒業後1-2年"
        },
        sharehouse1: {
          title: "シェアハウスのらまめ",
          description: "友人4人と共同生活。シェアハウスでの暮らしを通じて、新しい生活スタイルを体験しました。",
          period: "友人4人と共同生活"
        },
        sharehouse2: {
          title: "シェアハウス&ホームステイ",
          description: "僕ら夫婦＋友人１人＋外国人留学生。国際的な環境での共同生活を体験しました。",
          period: "夫婦＋友人＋留学生"
        },
        unipass: {
          title: "留学・国際交流サークルUniPass",
          description: "大学3年ー4年生。留学や国際交流に興味のある学生たちと活動していました。",
          period: "大学3年ー4年生"
        }
      },
      backHome: "ホームに戻る"
    },
    en: {
      title: "Communities",
      communities: {
        boardgame: {
          title: "Board Game Creation Night",
          description: "Held every Wednesday. A community where creative minds gather through board game creation.",
          status: "Recruiting Participants"
        },
        ai: {
          title: "Generative AI Share Session",
          description: "Information exchange meeting to share practical AI use cases in work, play, and daily life.",
          status: "Regular Sessions"
        },
        fukunuma: {
          title: "Fukunuma Club",
          description: "A Fukuoka community where members learn AI utilization together and develop their 'second self'.",
          status: "Next Session Preparing"
        }
      },
      philosophy: {
        title: "My Vision for Communities",
        description: "New chemistry born from human connections. I believe my mission is to create spaces where each individual's uniqueness can shine."
      },
      pastCommunities: {
        title: "Past Communities",
        subtitle: "Communities I've launched and managed over the years",
        picnic: {
          title: "Picnic Circle",
          description: "For 1-2 years after university graduation. Organized and hosted picnics with friends who enjoyed nature.",
          period: "1-2 years post-graduation"
        },
        sharehouse1: {
          title: "Sharehouse Noramame",
          description: "Shared living with 4 friends. Experienced new lifestyle through sharehouse living.",
          period: "Shared living with 4 friends"
        },
        sharehouse2: {
          title: "Sharehouse & Homestay",
          description: "My wife and I + 1 friend + international students. Experienced international communal living.",
          period: "Couple + friend + students"
        },
        unipass: {
          title: "Study Abroad & International Exchange Circle UniPass",
          description: "University 3rd-4th year. Engaged in activities with students interested in study abroad and international exchange.",
          period: "University 3rd-4th year"
        }
      },
      backHome: "Back to Home"
    }
  };

  const t = content[lang as keyof typeof content] || content.ja;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン（高さ半分） */}
      <section className="min-h-[25vh] relative bg-cover bg-center bg-no-repeat pt-24" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751450179/aibg01_lbdyxt.jpg')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-[25vh] text-center space-y-12">
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">{t.title}</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Communities Section - 統一感のあるデザイン */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="space-y-20">

            
            <div className="grid-3col gap-6">
              {/* ボドゲつくらNight */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <span className="text-2xl">🎲</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{t.communities.boardgame.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.communities.boardgame.description}</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-purple-600 transition-colors duration-300">
                      {t.communities.boardgame.status}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* 生成AI活用シェア会 */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{t.communities.ai.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.communities.ai.description}</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                      {t.communities.ai.status}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* 福沼会 */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{t.communities.fukunuma.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.communities.fukunuma.description}</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-green-600 transition-colors duration-300">
                      {t.communities.fukunuma.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Philosophy Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.philosophy.title}</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-yellow-400/40 rounded-xl flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">{lang === 'en' ? 'Nurture Organic Growth' : '自然発生を大切に'}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {lang === 'en' ? 'I focus on creating environments where people who truly love what we do naturally come together, without forcing anyone.' : '強制せず、本当に好きな人が自然と集まる環境を作ることを心がけています。'}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">{lang === 'en' ? 'Being a Connector' : 'ハブとしての役割'}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {lang === 'en' ? 'I aim to connect people and create spaces where new chemistry between individuals can flourish.' : '人と人をつなぎ、新しい化学反応が生まれる場作りを目指しています。'}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-blue-400/40 rounded-xl flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">{lang === 'en' ? 'Fun First' : '楽しさを最優先'}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {lang === 'en' ? 'Above all, I prioritize keeping things enjoyable and sustainable. We share excitement, not obligations.' : '何よりも楽しく続けられることを重視。義務感ではなく、ワクワクを共有します。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Communities Section - 統一感のあるデザイン */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">{t.pastCommunities.title}</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="grid-4col gap-6">
              {/* ピクニックサークル */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <span className="text-2xl">🧺</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{t.pastCommunities.picnic.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.pastCommunities.picnic.description}</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-orange-600 transition-colors duration-300">
                      {t.pastCommunities.picnic.period}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* シェアハウスのらまめ */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{t.pastCommunities.sharehouse1.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.pastCommunities.sharehouse1.description}</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-green-600 transition-colors duration-300">
                      {t.pastCommunities.sharehouse1.period}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* シェアハウス&ホームステイ */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{t.pastCommunities.sharehouse2.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.pastCommunities.sharehouse2.description}</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-purple-600 transition-colors duration-300">
                      {t.pastCommunities.sharehouse2.period}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* 留学・国際交流サークルUniPass */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-2xl">✈️</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{t.pastCommunities.unipass.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.pastCommunities.unipass.description}</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                      {t.pastCommunities.unipass.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block px-6 py-3 border-2 border-pink-400 rounded-full shadow-lg animate-pulse">
                <span className="mr-3">✨</span>
                {lang === 'en' ? 'This Must Be Fate!' : 'これも何かのご縁！'}
              </h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto text-white">
                {lang === 'en' ? (
                  <>
                    "We share similar interests!"<br />
                    "I'm curious about XX that Masaya knows or has experienced!"<br />
                    Feel free to DM me about anything ☺️
                  </>
                ) : (
                  <>
                    「興味・想いが似てる！」<br />「Masayaが詳しいor経験した〇〇が気になる！」<br />
                    なんでもお気軽にDMください☺️
                  </>
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://x.com/masayatoai" target="_blank" rel="noopener noreferrer" className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    {lang === 'en' ? 'DM on X' : 'XでDM'}
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
                <a href="/#works" className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">📅</span>
                    {lang === 'en' ? 'View Events' : 'イベントを見る'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 