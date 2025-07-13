import Link from 'next/link'

export default async function BoardgameEventPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  const content = {
    ja: {
      backHome: "← ホームに戻る",
      title: "AIでボドゲつくらNight",
      altText: "AIでボドゲつくらNight - イベント画像",
      date: "7/23(水) 19:00-",
      location: "福岡",
      eventOverview: "イベント概要",
      description: "みんなの「作りたい」をAIと一緒に形にしてゆくボドゲ作りの夜",
      details: "開催詳細",
      schedule: "日時: 隔週水曜 19:00-21:00 ※途中入退室OK!",
      venue: "場所: 福岡市内（天神駅近くの貸切会場）",
      bringItems: "持ち物: PC推奨（AIツール使用にぜひ）",
      fee: "参加費: 無料（飲食物の持ち寄り大歓迎！）",
      communityCharm: "コミュニティの魅力",
      warmAtmosphere: "暖かい雰囲気",
      warmText: "経験不問で、みんなで学び合える安心できる環境",
      ideaSharing: "アイデアの共有",
      ideaText: "作りたいゲームのアイデアをみんなでブレスト",
      aiWisdom: "AI活用の知恵",
      aiText: "主催者が持つAIツールの活用ノウハウをシェア",
      officialSite: "公式サイト",
      officialText: "詳細なイベント情報、開催スケジュール、参加方法については公式サイトをご確認ください。",
      viewSite: "公式サイトを見る",
      faq: "よくある質問",
      faq1Q: "Q. AIやボードゲームの知識は必要ですか？",
      faq1A: "A. 全く必要ありません！カジュアルにAI・ボドゲに興味があるもの同士カジュアルに集まることから始めましょう！",
      faq2Q: "Q. 一人で参加しても大丈夫ですか？",
      faq2A: "A. もちろんです！ほとんどの方がお一人での参加だと思います。新しい仲間と出会いましょう！主催者もソロ主催ですw",
      faq3Q: "Q. 参加費はいくらですか？",
      faq3A: "A. 無料です！主催者が会場を貸し切って開催します。飲食物・差し入れ等の持ち込み大歓迎です！",
      registration: "参加申し込み",
      registrationSubtitle: "🎯 参加・問い合わせ",
      contactTitle: "参加・問い合わせは主催者のXのDMにて",
      contactText: "参加をご希望の方は、主催者のXアカウントのDMでお気軽にお声がけください。開催日時や会場の詳細をお伝えします。",
      contactButton: "主催者のXアカウント",
      footerText: "🎲 AIの力を借りながら、みんなでボードゲームを作る楽しさを共有しましょう！",
      homeButton: "ホームに戻る"
    },
    en: {
      backHome: "← Back to Home",
      title: "AI Board Game Creation Night",
      altText: "AI Board Game Creation Night - Event Image",
      date: "7/23 (Wed) 19:00-",
      location: "Fukuoka",
      eventOverview: "Event Overview",
      description: "An evening of board game creation where everyone's 'want to create' takes shape with AI",
      details: "Event Details",
      schedule: "Schedule: Every other Wednesday 19:00-21:00 ※Entry/exit during event OK!",
      venue: "Venue: Fukuoka City (Private venue near Tenjin Station)",
      bringItems: "What to bring: PC recommended (for AI tool usage)",
      fee: "Fee: Free (Food and drinks welcome!)",
      communityCharm: "Community Appeal",
      warmAtmosphere: "Warm Atmosphere",
      warmText: "A safe environment where everyone can learn together regardless of experience",
      ideaSharing: "Idea Sharing",
      ideaText: "Brainstorm game ideas you want to create together",
      aiWisdom: "AI Expertise",
      aiText: "Share the organizer's AI tool utilization know-how",
      officialSite: "Official Site",
      officialText: "Please check the official site for detailed event information, schedule, and participation methods.",
      viewSite: "View Official Site",
      faq: "Frequently Asked Questions",
      faq1Q: "Q. Do I need knowledge of AI or board games?",
      faq1A: "A. Not at all! Let's start by casually gathering people who are casually interested in AI and board games!",
      faq2Q: "Q. Is it okay to participate alone?",
      faq2A: "A. Of course! Most people participate alone. Let's meet new friends! The organizer is also solo lol",
      faq3Q: "Q. How much is the participation fee?",
      faq3A: "A. It's free! The organizer rents the venue. Food, drinks, and snacks are very welcome!",
      registration: "Registration",
      registrationSubtitle: "🎯 Participation & Inquiries",
      contactTitle: "Participation & inquiries via organizer's X DM",
      contactText: "If you would like to participate, please feel free to contact the organizer's X account via DM. We will provide details about the event date, time, and venue.",
      contactButton: "Organizer's X Account",
      footerText: "🎲 Let's share the joy of creating board games together with the help of AI!",
      homeButton: "Back to Home"
    }
  };
  
  const t = content[lang as keyof typeof content] || content.ja;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-alt pt-24">
        <div className="container-narrow">
          <div className="text-center space-y-2">
            <div className="space-y-8">
              <Link href={`/${lang}`} className="inline-block text-gray-600 hover:text-black transition-colors duration-300">
                {t.backHome}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">{t.title}</h1>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751450178/aibg04_xaad2j.jpg" 
                  alt={t.altText}
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
                {/* 左上に日付タグ */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t.date}
                  </span>
                </div>
                {/* 右下に会場タグ */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="space-y-16">
            {/* イベント概要 */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">{t.eventOverview}</h2>
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t.description}
                </p>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">{t.details}</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>{t.schedule}</p>
                    <p>{t.venue}</p>
                    <p>{t.bringItems}</p>
                    <p>{t.fee}</p>
                  </div>
                </div>
              </div>
            </div>



            {/* コミュニティの魅力 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">{t.communityCharm}</h2>
                </div>
                
                <div className="grid-3col gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl">🤗</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.warmAtmosphere}</h3>
                    <p className="text-gray-600 text-sm">{t.warmText}</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl">💡</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.ideaSharing}</h3>
                    <p className="text-gray-600 text-sm">{t.ideaText}</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.aiWisdom}</h3>
                    <p className="text-gray-600 text-sm">{t.aiText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 公式サイト */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">{t.officialSite}</h2>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  {t.officialText}
                </p>
              </div>
              
              <a 
                href="https://ai-am-i-ai-community.github.io/wed_bgnight/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/50 hover:scale-105"
              >
                {t.viewSite}
              </a>
            </div>



            {/* よくある質問 */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">{t.faq}</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.faq1Q}</h3>
                  <p className="text-gray-700">{t.faq1A}</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.faq2Q}</h3>
                  <p className="text-gray-700">{t.faq2A}</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.faq3Q}</h3>
                  <p className="text-gray-700">{t.faq3A}</p>
                </div>
              </div>
            </div>

            {/* 参加申し込み */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold">{t.registration}</h2>
                  <p className="text-blue-100 mt-2">{t.registrationSubtitle}</p>
                </div>
                
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{t.contactTitle}</h3>
                    <p className="text-blue-100">
                      {t.contactText}
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
                      {t.contactButton}
                    </a>
                  </div>
                  
                  <div className="text-center text-blue-100">
                    <p className="text-sm">
                      {t.footerText}
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