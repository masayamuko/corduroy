import Link from 'next/link'

export default async function AIStudyEventPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  const content = {
    ja: {
      backHome: "← ホームに戻る",
      title: "みんなの生成AI活用発表会",
      altText: "みんなの生成AI活用発表会 - イベント画像",
      date: "7/15(火) 19:00-",
      location: "福岡",
      eventOverview: "イベント概要",
      frequency: "開催頻度",
      frequencyText: "月１回実施している情報交換の会です。",
      concept: "コンセプト",
      conceptText: "仕事だけでなく、遊びや生活でもどんなふうに生成AIを役立ててるかシェアし合う会です。実際の活用事例を通じて、みんなでAIの可能性を発見していきます。",
      participationStyle: "参加スタイル",
      participationText: "カジュアルに聴くだけ参加、初心者さんWELCOME！発表したい方も、まずは聞いてみたい方も、どちらも大歓迎です。",
      presentationExamples: "発表内容例",
      examples: [
        "仕事での効率化事例",
        "趣味や創作活動での活用法",
        "日常生活での便利な使い方",
        "失敗談や試行錯誤の経験",
        "新しいツールの紹介"
      ],
      features: "この会の特徴",
      casualAtmosphere: "カジュアルな雰囲気",
      casualText: "堅苦しくない、リラックスした環境で情報交換",
      practical: "実践的な内容",
      practicalText: "理論より実際に使える活用法を重視",
      diverse: "多様な視点",
      diverseText: "様々な分野・立場からのAI活用事例",
      masayaMessage: "Masayaからのメッセージ",
      messageText1: "「みんなの生成AI活用発表会」は、AI活用の\"リアル\"を共有する場です。",
      messageText2: "教科書的な使い方ではなく、みんなが実際にどんなふうにAIを生活に取り入れているかを聞けるのが、この会の一番の魅力です。「こんな使い方があるんだ！」「これなら自分にもできそう」という発見がたくさんあります。",
      messageText3: "発表者の方も、聞き手の方も、みんなが学び合える温かい雰囲気を大切にしています。AIを使ったことがない方も、ベテランの方も、それぞれの視点で楽しめる会になっています。",
      messageText4: "「聞くだけ参加」も大歓迎！まずは気軽に参加してみてください。",
      contact: "参加・お問い合わせ",
      contactText: "イベントへの参加や詳細については、お気軽にお声がけください。",
      contactButton: "Xでお問い合わせ",
      homeButton: "ホームに戻る"
    },
    en: {
      backHome: "← Back to Home",
      title: "Generative AI Utilization Sharing Session",
      altText: "Generative AI Utilization Sharing Session - Event Image",
      date: "7/15 (Tue) 19:00-",
      location: "Fukuoka",
      eventOverview: "Event Overview",
      frequency: "Frequency",
      frequencyText: "Monthly information exchange meeting.",
      concept: "Concept",
      conceptText: "A gathering to share how generative AI is being utilized not only in work, but also in play and daily life. Through real use cases, we discover AI possibilities together.",
      participationStyle: "Participation Style",
      participationText: "Casual listening-only participation, beginners WELCOME! Whether you want to present or just listen, both are very welcome.",
      presentationExamples: "Presentation Examples",
      examples: [
        "Efficiency improvement cases at work",
        "Utilization in hobbies and creative activities",
        "Convenient uses in daily life",
        "Failure stories and trial-and-error experiences",
        "Introduction of new tools"
      ],
      features: "Features of This Event",
      casualAtmosphere: "Casual Atmosphere",
      casualText: "Information exchange in a relaxed, informal environment",
      practical: "Practical Content",
      practicalText: "Focus on practical applications rather than theory",
      diverse: "Diverse Perspectives",
      diverseText: "AI utilization cases from various fields and positions",
      masayaMessage: "Message from Masaya",
      messageText1: "The 'Generative AI Utilization Sharing Session' is a place to share the 'reality' of AI utilization.",
      messageText2: "The biggest attraction of this event is hearing how everyone actually incorporates AI into their lives, rather than textbook-style usage. There are many discoveries like 'I didn't know you could use it this way!' and 'I think I could do this too.'",
      messageText3: "We value creating a warm atmosphere where both presenters and listeners can learn from each other. Whether you've never used AI or you're a veteran, this event is enjoyable from each perspective.",
      messageText4: "'Listening-only participation' is very welcome! Please feel free to join us first.",
      contact: "Participation & Inquiries",
      contactText: "Please feel free to contact us about event participation or details.",
      contactButton: "Contact via X",
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
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1752363438/Masan_Dayo_AI_Profile_wca3om.png" 
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
              <div className="grid-2col gap-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">{t.frequency}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.frequencyText}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">{t.concept}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.conceptText}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">{t.participationStyle}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.participationText}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">{t.presentationExamples}</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-2">
                      {t.examples.map((example, index) => (
                        <li key={index}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 特徴 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">{t.features}</h2>
                </div>
                
                <div className="grid-3col gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.casualAtmosphere}</h3>
                    <p className="text-gray-600 text-sm">{t.casualText}</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.practical}</h3>
                    <p className="text-gray-600 text-sm">{t.practicalText}</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.diverse}</h3>
                    <p className="text-gray-600 text-sm">{t.diverseText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Masayaからのメッセージ */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">{t.masayaMessage}</h2>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.messageText1}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {t.messageText2}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {t.messageText3}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    {t.messageText4}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold">{t.contact}</h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {t.contactText}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://x.com/MasayaToAi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {t.contactButton}
                </a>
                <Link href={`/${lang}`} className="btn btn-secondary">
                  {t.homeButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 