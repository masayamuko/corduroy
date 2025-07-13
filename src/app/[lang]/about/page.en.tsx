"use client"

import Link from 'next/link'
import { use } from 'react'
import { useTranslations } from '@/hooks/useTranslations'

export default function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const t = useTranslations(lang);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section - Nature and Growth Theme */}
      <section className="min-h-[25vh] relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-[25vh] text-center space-y-12">
            {/* Profile Image with nature theme */}
            <div className="animate-fade-in">
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                  alt="Masaya's profile photo" 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto shadow-xl hover:rotate-12 hover:scale-110 transition-transform duration-500 cursor-pointer border-4 border-green-200"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🌱</span>
                </div>
              </div>
            </div>
            
            {/* Main Title */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold leading-relaxed text-balance text-green-900 drop-shadow-lg">
                <span className="block">PROFILE</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto drop-shadow-sm rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section - Expressing natural growth */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-emerald-100">
        <div className="container-custom">
          <div className="space-y-20">

            
            <div className="group cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-12 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="grid-2col items-center gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:from-green-600 group-hover:to-emerald-700 transition-all duration-300">
                      🌱 Life Philosophy
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-green-900 group-hover:text-green-700 transition-colors duration-300">
                      "Better to do a false good than no good at all."
                    </h3>
                  </div>
                  <p className="text-lead leading-relaxed text-green-800 group-hover:text-green-900 transition-colors duration-300">
                    Act first, even if not perfectly. If it might help someone, just try it.
                    Don't be afraid of failure, start with small steps. This is how I live.
                  </p>
                  <p className="text-green-700">
                    This value drives my efforts to spread AI utilization, build communities, and challenge new tools.
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="w-80 h-80 border-2 border-green-300 overflow-hidden rounded-2xl group-hover:border-green-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <span className="text-8xl">🌱</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Journey Section - Expressing the depth of the forest */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-100">Three Experiences That Shaped Me</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">✈️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-100 tracking-wide group-hover:text-green-300 transition-colors duration-300">Learned the Value of "Differences" Abroad</h3>
                </div>
                <p className="text-green-200 leading-relaxed mb-6 group-hover:text-green-100 transition-colors duration-300">
                  In my early 20s, studying abroad in the Philippines, I learned the beauty of cultural differences, value differences, and "differences" themselves.
                  Meeting people from different backgrounds, I gained new perspectives and flexibility in a world where my assumptions didn't apply.
                </p>
                <Link href={`/${lang}/career`} className="inline-block bg-green-400/20 hover:bg-green-400 text-green-300 hover:text-green-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-green-400/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25 text-sm backdrop-blur-sm">
                  Study Abroad Experience
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-emerald-400/40 rounded-xl flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">💍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-100 tracking-wide group-hover:text-emerald-300 transition-colors duration-300">Discovered the Power of "Mutual Support" Through Marriage</h3>
                </div>
                <p className="text-green-200 leading-relaxed mb-6 group-hover:text-green-100 transition-colors duration-300">
                  Through married life, I realized that what cannot be achieved alone can be overcome together.
                  Supporting each other's growth, and growing myself at the same time. This reciprocal relationship is the origin of my current community building and connecting people.
                </p>
                <Link href={`/${lang}/community`} className="inline-block bg-emerald-400/20 hover:bg-emerald-400 text-emerald-300 hover:text-emerald-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-emerald-400/30 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/25 text-sm backdrop-blur-sm">
                  About Partnership
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-teal-400/40 rounded-xl flex items-center justify-center group-hover:border-teal-400 group-hover:bg-teal-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-100 tracking-wide group-hover:text-teal-300 transition-colors duration-300">Honed My "Listening Skills" Through Coaching</h3>
                </div>
                <p className="text-green-200 leading-relaxed mb-6 group-hover:text-green-100 transition-colors duration-300">
                  Through my coaching experience, I learned the importance of deeply listening to others.
                  Instead of giving answers, drawing out the answers within them. This attitude is also utilized in AI utilization support and community management.
                </p>
                <Link href={`/${lang}/services`} className="inline-block bg-teal-400/20 hover:bg-teal-400 text-teal-300 hover:text-teal-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-teal-400/30 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/25 text-sm backdrop-blur-sm">
                  Coaching Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Insights Section - Expressing nature's bounty */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">Masaya's Personality</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid-3col gap-8">
              <div className="group cursor-pointer bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <span className="text-6xl">🔍</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-green-900 group-hover:text-green-600 transition-colors duration-300">Loves New Things</h4>
                    <p className="text-green-700 group-hover:text-green-800 transition-colors duration-300">Always checking the latest AI tools. My hobby is to invest in them and find what's truly useful! I enjoy even the failures.</p>
                  </div>
                  <Link href={`/${lang}/tools`} className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-300/50 group-hover:scale-105">
                    Tools in Use
                  </Link>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                      <span className="text-6xl">🎯</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-green-900 group-hover:text-green-600 transition-colors duration-300">Emphasizes Clarity</h4>
                    <p className="text-green-700 group-hover:text-green-800 transition-colors duration-300">From my experience as a Japanese teacher, IT manager, and coach, I always prioritize "thinking from the other person's perspective" and "communicating concisely." I avoid jargon and explain with concrete examples.</p>
                  </div>
                  <Link href={`/${lang}/career`} className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-300/50 group-hover:scale-105">
                    Career Details
                  </Link>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                      <span className="text-6xl">🤝</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-green-900 group-hover:text-green-600 transition-colors duration-300">Loves Connecting People</h4>
                    <p className="text-green-700 group-hover:text-green-800 transition-colors duration-300">I excel at creating spaces where people connect and new chemical reactions are born. I've created many encounters through community management and event planning.</p>
                  </div>
                  <Link href={`/${lang}/community`} className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-300/50 group-hover:scale-105">
                    Community Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Expressing nature's bounty */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-emerald-800 to-teal-800">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block px-6 py-3 border-2 border-pink-400 rounded-full shadow-lg animate-pulse">
                <span className="mr-3">✨</span>
                {t.common.fateMessage}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto text-green-200">
                "Similar interests and passions!"<br />"Interested in something Masaya is knowledgeable about or experienced in!"<br />
                Please feel free to send me a DM☺️
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href={`/${lang}`} className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {t.common.backHome}
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </Link>
                <Link href={`/${lang}/career`} className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:-rotate-2 bg-green-500/20 hover:bg-green-500 text-green-300 hover:text-green-900 border-green-500/30 hover:border-green-500">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🌿</span>
                    View Career
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href={`/${lang}/community`} className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-emerald-300/50 transition-all duration-300 hover:-rotate-2 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-emerald-900 border-emerald-500/30 hover:border-emerald-500">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🌳</span>
                    About Community
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 