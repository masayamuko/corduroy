"use client"

import Link from 'next/link'

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 'boardgame-night',
      title: 'ボドゲつくらNight',
      date: '7/9(水) 19:00-',
      description: 'みんなの「作りたい」をAIと一緒に形にしてゆくボドゲ作りの夜',
      image: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1751450178/aibg04_xaad2j.jpg',
      category: 'AI × ボードゲーム',
      location: '福岡',
      price: '無料',
      link: '/events/boardgame',
      status: 'upcoming'
    },
    {
      id: 'ai-share',
      title: '生成AI活用シェア会',
      date: '7/15(火) 19:00-',
      description: '仕事だけでなく、遊びや生活でもどんなふうに生成AIを役立ててるかシェアし合う会',
      image: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1751652432/ChatGPT_2025%E5%B9%B46%E6%9C%8829%E6%97%A5_%E7%94%BB%E5%83%8F_bwfjco.png',
      category: 'AI活用',
      location: '福岡',
      price: '無料',
      link: '/events/ai-study',
      status: 'upcoming'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751684284/Gemini_Generated_Image_1_i2nw7d.jpg" 
          alt="イベント背景" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 brightness-75" 
        />
        <div className="relative z-10 w-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">イベント開催日程</h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section py-12 md:py-20">
        <div className="container-narrow">
          <div className="grid gap-12 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Link 
                key={event.id} 
                href={event.link}
                className="block bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-[480px] md:h-[540px] group"
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      開催予定
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between p-8 md:p-10 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-blue-600 font-semibold text-2xl md:text-3xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{event.title}</h3>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 text-blue-700 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-lg">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-700 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span className="text-lg">{event.price}</span>
                    </div>
                  </div>
                  
                  <div className="inline-block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl text-center text-lg md:text-xl group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    詳細を見る
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* ホームに戻るボタン */}
          <div className="text-center mt-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームに戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 