"use client"

import Link from 'next/link'

export default function Career() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Consistent Design (Half Height) */}
      <section className="min-h-[25vh] relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI_Journey_Through_Nature_p3qkcd.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-[25vh] text-center space-y-12">
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">Career</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline Section - Consistent Design */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="space-y-20">

            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                
                <div className="space-y-12">

                  {/* 2025 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 scale-105 -translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300 scale-110">
                      2025
                    </div>
                    <div className="flex-1 bg-white border-2 border-orange-400 rounded-2xl p-8 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-200/30 transition-all duration-500 shadow-2xl shadow-orange-200/30">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 text-orange-600">Preparing for a New Start!</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        ・Learning and practicing various generative AI tools (self-taught)<br />
                        ・Learning manufacturing, 3CAD (school)<br />
                        Experimentally supporting individuals and companies in introducing AI tools.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">AI Tool Learning</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">CAD Learning</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Introduction Support</span>
                      </div>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                      2020
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-green-400 group-hover:shadow-2xl group-hover:shadow-green-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Company Employee and Freelancer</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        ・Full-time employee at a company involved with overseas and children<br />
                        ・Continued coaching and IT consulting as a sole proprietor
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full-time Employment</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Coaching</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">IT Consultant</span>
                      </div>
                    </div>
                  </div>

                  {/* 2015 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                      2015
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-purple-400 group-hover:shadow-2xl group-hover:shadow-purple-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Full-time Freelancer</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        ・Personal blog management<br />
                        ・Advertising operation agency<br />
                        ・IT consulting<br />
                        ・Overseas personal export<br />
                        ・Coaching<br />
                        Experienced various jobs.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Blog Management</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Ad Operations</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">IT Consulting</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Overseas Export</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Coaching</span>
                      </div>
                    </div>
                  </div>

                  {/* 2013 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                      2013
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Exploring While Working Part-time</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        Experienced various jobs introduced through connections.<br />
                        Bakery, study abroad agency, web production company, trading company, homestay company, event company, guesthouse, social care facility, Japanese language school. During this time, I also attended a web design school and a Japanese language teacher training course.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Bakery</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Study Abroad Agency</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Web Production</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Trading Company</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Many Others</span>
                      </div>
                    </div>
                  </div>

                  {/* 2008 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                      2008
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-red-400 group-hover:shadow-2xl group-hover:shadow-red-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">University Student (Studied Abroad in Canada)</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        Majored in English at Kurume University. Took a year off to study abroad in Vancouver, Canada, under the Working Holiday program. After returning, I gained confidence and became active, forming and participating in an international exchange club.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Kurume University</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Study Abroad in Canada</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">International Exchange Club</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section - Consistent Design */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Cultivated Skills</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-blue-400/40 rounded-xl flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">👂</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">Listening Skills</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  The ability to listen deeply to others and draw out their thoughts and emotions. I have honed my "coaching" skills through over 3 million yen in learning expenses and over 500 hours of practice.
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">Clear Explanation Skills</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  The technique of simplifying complex things and explaining them according to the other person's level. I have cultivated this through 420 hours of Japanese language teacher training, teaching at Japanese language schools, and providing coaching and IT utilization related courses.
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-purple-400/40 rounded-xl flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">Community Building Skills</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  Creating spaces where people connect and natural interactions occur. I have experience launching many communities.
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-orange-400/40 rounded-xl flex items-center justify-center group-hover:border-orange-400 group-hover:bg-orange-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-orange-300 transition-colors duration-300">IT & Digital Utilization Skills</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  The ability to actively try new tools and apply them to improve work efficiency and solve problems. This forms the foundation of my AI utilization.
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-yellow-400/40 rounded-xl flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">Writing & Content Creation Skills</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  Authored 290 articles over 5 years of blog management. Possesses the ability to continuously disseminate readable and valuable information.
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-red-400/40 rounded-xl flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-red-300 transition-colors duration-300">Learning & Adaptability</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  Experienced various fields and industries, constantly learning new things. A mindset that enjoys change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Consistent Design */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">💡 What I Value</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="grid-2col items-center gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-blue-600 transition-colors duration-300">
                      💡 Life Philosophy
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      "Strike while the curiosity is hot!"
                    </h3>
                  </div>
                  <div className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed space-y-3">
                    <p>
                      There's no such proverb, but **that's the spirit I live by**.
                    </p>
                    <p>
                      When I get interested in something, I **immediately make a note** and decide to take the first small step that day. If possible, I take that first step at that very moment.
                    </p>
                    <p>
                      Thanks to this mindset, I've been able to immediately tackle things I'm interested in, and they've connected to make my current life **fun and stimulating**. **I will continue to cherish this.**
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="w-64 h-64 border-2 border-blue-300 overflow-hidden rounded-2xl group-hover:border-blue-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                      <span className="text-6xl">💡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid-3col gap-8">
              {/* Not good at troublesome things */}
              <div className="group cursor-pointer bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 hover:border-red-400 hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">⚡</span>
                    </div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-red-600 transition-colors duration-300">
                      Not good at troublesome things
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                    Transforming "troublesome" into "fun"
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    I'm not good at troublesome things. But I can put in as much effort as needed to make them not troublesome.
                    <br /><br />
                    Automating or streamlining tedious tasks, or turning them into fun games. Through this process, I've encountered new tools and methods.
                    By transforming "troublesome" into "fun," I want to make those around me happy.
                  </p>
                </div>
              </div>

              {/* Loves optimization */}
              <div className="group cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🎯</span>
                    </div>
                    <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-green-600 transition-colors duration-300">
                      Loves optimization
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    Pursuing optimization for society and individuals
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    I want to optimize how I contribute to society. This is not just for personal gain, but aims to optimize individuals within organizations and leverage their talents.
                    <br /><br />
                    I want to create an environment where everyone can demonstrate their strengths. To that end, I strive to identify individual characteristics, assign the right people to the right roles, and design efficient systems.
                    I believe optimization is not about "efficiency" but about "maximizing value."
                  </p>
                </div>
              </div>

              {/* Learning by teaching */}
              <div className="group cursor-pointer bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🔄</span>
                    </div>
                    <div className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-purple-600 transition-colors duration-300">
                      Learning by teaching
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    Valuing mutually growing relationships
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    When I teach someone something, I learn the most. I value mutually growing relationships, not one-sided instruction.
                    <br /><br />
                    Teaching deepens my understanding and gives me new perspectives. From others' questions and reactions, I discover things I hadn't noticed myself.
                    I believe this cyclical learning process is the most effective and enjoyable way to learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Consistent Design */}
      <section className="section-dark">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block px-6 py-3 border-2 border-pink-400 rounded-full shadow-lg animate-pulse">
                <span className="mr-3">✨</span>
                This must be fate!
              </h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto text-white">
                "Similar interests and passions!"<br />"Interested in something Masaya is knowledgeable about or experienced in!"<br />
                Please feel free to send me a DM☺️
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/" className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/tools" className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🔧</span>
                    View Tools
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/community" className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🤝</span>
                    About Community
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 