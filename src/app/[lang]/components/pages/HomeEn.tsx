"use client"

import Link from 'next/link'

export default function Home({ lang = 'en' }: { lang?: string }) {
  // Scroll function
  const scrollToCharacteristics = () => {
    const element = document.getElementById('masaya-characteristics')
    if (element) {
      const navHeight = 80 // Navigation bar height
      const elementPosition = element.offsetTop - navHeight - 20 // Add a little buffer
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Latest updates
  const latestUpdates = [
    {
      id: 1,
      type: 'blog',
      title: '5 Tips for Mastering BOOKSCAN Premium Membership',
      date: '2024-01-15',
      icon: '📖'
    },
    {
      id: 2,
      type: 'event',
      title: 'AI Board Game Creation Night Held',
      date: '2024-01-10',
      icon: '🎲'
    },
    {
      id: 3,
      type: 'project',
      title: 'Second Self Project Participants Wanted',
      date: '2024-01-05',
      icon: '🤖'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Text-centric design */}
      <section className="min-h-screen relative bg-cover bg-center bg-no-repeat pt-24" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center space-y-16">
            {/* Main Catchphrase */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">AI for Your Journey!</span>
                <span className="hidden md:block mt-6">Helping you "gently welcome."</span>
                <span className="block md:hidden mt-4">Helping you "gently welcome"</span>
                <span className="block md:hidden mt-2 ml-8">.</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
            
            {/* Subtext */}
            <div className="max-w-2xl animate-fade-in">
              <p className="text-2xl md:text-3xl text-balance leading-relaxed text-black drop-shadow-md">
                Build and deepen your relationship with AI. With a unique approach, deeply as a former coach, and clearly as a former Japanese teacher.
              </p>
            </div>
            
            {/* Profile Image */}
            <div className="animate-fade-in">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masaya's profile photo" 
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
                  About Masaya
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
              <div className="relative group">
                <Link href={`/${lang}/blog`} className="btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">📖</span>
                    Read Blog
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 whitespace-nowrap">
                  Happy
                </div>
              </div>
            </div>

            {/* News */}
            <div className="animate-fade-in w-full max-w-lg bg-white/30 rounded-2xl p-2">
              <div className="bg-white/30 border-2 border-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📢</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">News</h3>
                </div>
                <div className="space-y-3">
                  <Link href={`/${lang}/events`} className="block">
                    <div className="flex items-start gap-3 p-3 bg-white/30 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-colors duration-200 cursor-pointer relative text-left">
                      <span className="text-lg">📅</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold text-gray-800 leading-tight hover:text-blue-600 transition-colors duration-200">7/15 (Tue) Generative AI Utilization Sharing Session @ Fukuoka</p>
                      </div>
                      <span className="absolute bottom-2 right-3 bg-orange-200 text-orange-800 text-xs font-bold px-2 py-0.5 rounded-full shadow">Recruiting</span>
                    </div>
                  </Link>
                  <Link href={`/${lang}/blog/why-create-second-self`} className="block">
                    <div className="flex items-start gap-3 p-3 bg-white/30 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors duration-200 cursor-pointer relative text-left">
                      <span className="text-lg">📖</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold text-gray-800 leading-tight hover:text-orange-600 transition-colors duration-200">The Ultimate Weapon in the AI Era!? Cultivate Your 'Second Self' with ChatGPT</p>
                      </div>
                      <span className="absolute bottom-2 right-3 bg-blue-200 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full shadow">Article</span>
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
              <span className="hidden md:block">Nurture and leverage your relationship with AI.</span>
              <span className="block md:hidden">Nurture your relationship with AI<br />and leverage your unique self.</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-large text-gray-800 leading-relaxed">
              <p className="mb-6">
                AI that knows you inside out<br />
                Once cultivated, it will be active in all situations!
              </p>
              <p className="mb-6">
                From small conversations, it teaches you about "you" that you don't yet know,<br />
                sometimes offering surprising suggestions, and sometimes gently pushing you forward.
              </p>
              <p className="text-large font-semibold text-blue-600 leading-loose tracking-wide">
                Why not start such a journey of growth with AI?
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
              <h2 id="masaya-characteristics" className="text-3xl md:text-4xl font-bold text-white">About Masaya</h2>
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
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">Loves New Things</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  I constantly follow the latest AI tool information and actively invest in them to be a pioneer. Always seeking the perfect AI/IT tools for myself or others!
                </p>
                <Link href={`/${lang}/tools`} className="inline-block bg-yellow-400/20 hover:bg-yellow-400 text-yellow-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/25 text-sm backdrop-blur-sm">
                  Tools & Pioneer Log
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">Loves Listening & Teaching</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  As a Japanese teacher, corporate IT manager, and coaching provider, I have made a living by "listening" and "teaching" for both employees and individuals.
                </p>
                <Link href={`/${lang}/career`} className="inline-block bg-green-400/20 hover:bg-green-400 text-green-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-green-400/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25 text-sm backdrop-blur-sm">
                  Masaya's Career
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-purple-400/40 rounded-xl flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">Wants to Share "Fun"</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  When I like something, I tend to gather people and form communities. I act as a hub between people. Currently, I'm running board game and AI utilization groups.
                </p>
                <Link href={`/${lang}/community`} className="inline-block bg-purple-400/20 hover:bg-purple-400 text-purple-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-purple-400/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/25 text-sm backdrop-blur-sm">
                  My Communities
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
              <h2 className="text-3xl md:text-4xl font-bold">Activities</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
              <p className="text-sm text-gray-500">Only currently active projects are listed.</p>
            </div>
            
            <div className="space-y-12">
              {/* Featured Project */}
              <div className="group cursor-pointer bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 md:p-12 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="grid-2col items-center gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:bg-orange-600 transition-colors duration-300">
                        ＼ Hottest Now! ／
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                        AI "Second Self"<br />Cultivation Project
                      </h3>
                    </div>
                    <p className="text-lead leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      Masaya's serious AI utilization started here. It's incredibly fun! "What should I use AI for?" "I don't have a habit of using it" - all solved at once! Deep self-understanding during cultivation, and great success ever since. Taught over 50 people and deepened knowledge by reading many papers.
                    </p>
                    <Link href={`/${lang}/blog/why-create-second-self`} className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-300/50 group-hover:scale-105">
                      Learn More
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-80 h-80 border-2 border-orange-300 overflow-hidden rounded-2xl group-hover:border-orange-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                      <img 
                        src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png" 
                        alt="Second Self Project - AI-Powered Journey"
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
                        alt="AI Board Game Creation Night - Event Image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">AI Board Game Creation Night</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">A creative event to produce original board games using AI. From brainstorming to actual production, participants enjoy creating new games together.</p>
                    </div>
                    <Link href={`/${lang}/events/boardgame`} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/50 group-hover:scale-105">
                      Learn More
                    </Link>
                  </div>
                </div>
                
                <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="space-y-6">
                    <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                      <img 
                        src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751652432/ChatGPT_2025%E5%B9%B46%E6%9C%8829%E6%97%A5_%E7%94%BB%E5%83%8F_bwfjco.png" 
                        alt="Generative AI Utilization Presentation - Event Image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Generative AI Utilization Presentation</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">An information exchange meeting to share practical AI utilization cases in work, play, and daily life. Beginners welcome, casual learning environment where just listening is okay, with many new discoveries!</p>
                    </div>
                    <Link href={`/${lang}/events/ai-study`} className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-300/50 group-hover:scale-105">
                      Learn More
                    </Link>
                  </div>
                </div>
                
                <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="space-y-6">
                    <div className="w-full h-48 bg-purple-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                      <img 
                        src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751684284/Gemini_Generated_Image_1_i2nw7d.jpg" 
                        alt="Youth Support in Social Care - Project Image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Youth Support in Social Care</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Activities to support the independence and growth of young people raised in social care. Interaction through board games, direct support at facilities, and a dream of opening a board game cafe in the future.</p>
                    </div>
                    <Link href={`/${lang}/services/youth-support`} className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50 group-hover:scale-105">
                      Learn More
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
                This must be fate!
              </h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto">
                "Similar interests and passions!"<br />"Interested in something Masaya is knowledgeable about or experienced in!"<br />
                Please feel free to send me a DM☺️
              </p>
              
              <a 
                href="https://x.com/MasayaToAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                DM on X
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 