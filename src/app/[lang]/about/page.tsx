import Link from 'next/link'
import { getTranslations } from '@/hooks/useTranslations'
import FloatingLanguageSwitcher from '@/components/FloatingLanguageSwitcher'
import { Lang } from '@/types'

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const globalTranslations = getTranslations(lang);

  const content = {
    ja: {
      profileAlt: "Masayaのプロフィール写真",
      title: "PROFILE",
      lifeGuidance: "🌱 人生の指針",
      motto: "「やらぬ善よりやる偽善」",
      mottoDescription: "完璧でなくても、まず行動する。誰かの役に立つかもしれないなら、とりあえずやってみる。失敗を恐れず、小さな一歩から始める。そんな考え方で生きています。",
      mottoExtra: "この価値観が、AI活用の普及活動や、コミュニティ作り、新しいツールへの挑戦の原動力になっています。",
      threeExperiences: "僕を作った3つの経験",
      study: {
        title: "留学で学んだ「違い」の価値",
        description: "20代前半のフィリピン留学で、文化の違い、価値観の違い、そして「違い」そのものの美しさを学びました。異なる背景を持つ人々と出会い、自分の当たり前が通用しない世界で、新しい視点と柔軟性を身につけました。",
        link: "留学体験記"
      },
      marriage: {
        title: "結婚で知った「支え合い」の力",
        description: "結婚生活を通じて、一人ではできないことも、二人なら乗り越えられることを実感しました。相手の成長を支え、同時に自分も成長する。この相互支援の関係性が、今のコミュニティ作りや人と人をつなぐ活動の原点になっています。",
        link: "パートナーシップについて"
      },
      coaching: {
        title: "コーチングで磨いた「聴く力」",
        description: "コーチングの経験で、相手の話を深く聴くことの大切さを学びました。答えを教えるのではなく、相手の中にある答えを引き出す。この姿勢が、AI活用のサポートやコミュニティ運営でも活かされています。",
        link: "コーチングサービス"
      },
      personality: "Masayaの人となり",
      newThings: {
        title: "新しいモノ好き",
        description: "最新のAIツールは必ずチェック。人柱になって課金し、「これは使える！」を見つけるのが趣味。失敗も含めて楽しんでいます。",
        link: "活用中ツール"
      },
      clarity: {
        title: "わかりやすさ重視",
        description: "日本語教師、IT担当、コーチの経験から、「相手の立場で考える」「簡潔に伝える」を常に意識。専門用語は使わず、具体例で説明します。",
        link: "経歴詳細"
      },
      connecting: {
        title: "つなぐことが好き",
        description: "人と人をつなぎ、新しい化学反応が生まれる場作りが得意。コミュニティ運営やイベント企画で多くの出会いを生み出してきました。",
        link: "コミュニティ詳細"
      },
      fate: globalTranslations.common.fateMessage,
      contact: "「興味・想いが似てる！」\n「Masayaが詳しいor経験した〇〇が気になる！」\nなんでもお気軽にDMください☺️",
      backHome: globalTranslations.common.backHome,
      viewCareer: "経歴を見る",
      aboutCommunity: "コミュニティについて"
    },
    en: {
      profileAlt: "Masaya's profile photo",
      title: "PROFILE",
      lifeGuidance: "🌱 Life Philosophy",
      motto: "\"Action over perfection\"",
      mottoDescription: "Even if it's not perfect, take action first. If it might help someone, just try it. Don't fear failure, start with small steps. This is how I live my life.",
      mottoExtra: "This mindset drives my AI utilization activities, community building, and challenges with new tools.",
      threeExperiences: "Three Experiences That Shaped Me",
      study: {
        title: "Learning the Value of \"Differences\" Through Study Abroad",
        description: "Through my study abroad experience in the Philippines in my early twenties, I learned about cultural differences, value differences, and the beauty of 'differences' themselves. Meeting people from different backgrounds in a world where my assumptions didn't work, I gained new perspectives and flexibility.",
        link: "Study Abroad Experience"
      },
      marriage: {
        title: "The Power of \"Supporting Each Other\" Through Marriage",
        description: "Through married life, I realized that things impossible alone can be overcome together. Supporting each other's growth while growing ourselves. This mutual support relationship is the foundation of my current community building and people-connecting activities.",
        link: "About Partnership"
      },
      coaching: {
        title: "\"Listening Skills\" Refined Through Coaching",
        description: "Through coaching experience, I learned the importance of deeply listening to others. Not giving answers, but drawing out the answers within them. This approach is also utilized in AI utilization support and community management.",
        link: "Coaching Services"
      },
      personality: "About Masaya's Personality",
      newThings: {
        title: "Loves New Things",
        description: "Always check the latest AI tools. I enjoy being a pioneer, paying for subscriptions, and finding 'this is useful!' tools. I enjoy failures as part of the process.",
        link: "Tools in Use"
      },
      clarity: {
        title: "Clarity-Focused",
        description: "From my experience as a Japanese teacher, IT coordinator, and coach, I always focus on 'thinking from the other's perspective' and 'communicating concisely.' I avoid jargon and explain with concrete examples.",
        link: "Career Details"
      },
      connecting: {
        title: "Loves Connecting",
        description: "Good at creating spaces where people connect and new chemistry is born. Through community management and event planning, I've created many encounters.",
        link: "Community Details"
      },
      fate: globalTranslations.common.fateMessage,
      contact: "\"Similar interests and passions!\"\n\"Interested in something Masaya knows about or has experienced!\"\nFeel free to DM me about anything☺️",
      backHome: globalTranslations.common.backHome,
      viewCareer: "View Career",
      aboutCommunity: "About Community"
    }
  };

  const t = content[lang as keyof typeof content] || content.ja;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section - 自然と成長のテーマ */}
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
                  alt={t.profileAlt} 
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
                <span className="block">{t.title}</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto drop-shadow-sm rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section - 自然の成長を表現 */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-emerald-100">
        <div className="container-custom">
          <div className="space-y-20">

            
            <div className="group cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-12 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="grid-2col items-center gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:from-green-600 group-hover:to-emerald-700 transition-all duration-300">
                      {t.lifeGuidance}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-green-900 group-hover:text-green-700 transition-colors duration-300">
                      {t.motto}
                    </h3>
                  </div>
                  <p className="text-lead leading-relaxed text-green-800 group-hover:text-green-900 transition-colors duration-300">
                    {t.mottoDescription}
                  </p>
                  <p className="text-green-700">
                    {t.mottoExtra}
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

      {/* AI Journey Section - 森の深さを表現 */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-100">{t.threeExperiences}</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">✈️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-100 tracking-wide group-hover:text-green-300 transition-colors duration-300">{t.study.title}</h3>
                </div>
                <p className="text-green-200 leading-relaxed mb-6 group-hover:text-green-100 transition-colors duration-300">
                  {t.study.description}
                </p>
                <Link href={`/${lang}/career`} className="inline-block bg-green-400/20 hover:bg-green-400 text-green-300 hover:text-green-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-green-400/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25 text-sm backdrop-blur-sm">
                  {t.study.link}
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-emerald-400/40 rounded-xl flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">💍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-100 tracking-wide group-hover:text-emerald-300 transition-colors duration-300">結婚で知った「支え合い」の力</h3>
                </div>
                <p className="text-green-200 leading-relaxed mb-6 group-hover:text-green-100 transition-colors duration-300">
                  結婚生活を通じて、一人ではできないことも、二人なら乗り越えられることを実感しました。
                  相手の成長を支え、同時に自分も成長する。この相互支援の関係性が、今のコミュニティ作りや
                  人と人をつなぐ活動の原点になっています。
                </p>
                <Link href={`/${lang}/community`} className="inline-block bg-emerald-400/20 hover:bg-emerald-400 text-emerald-300 hover:text-emerald-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-emerald-400/30 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/25 text-sm backdrop-blur-sm">
                  パートナーシップについて
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-teal-400/40 rounded-xl flex items-center justify-center group-hover:border-teal-400 group-hover:bg-teal-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-100 tracking-wide group-hover:text-teal-300 transition-colors duration-300">コーチングで磨いた「聴く力」</h3>
                </div>
                <p className="text-green-200 leading-relaxed mb-6 group-hover:text-green-100 transition-colors duration-300">
                  コーチングの経験で、相手の話を深く聴くことの大切さを学びました。
                  答えを教えるのではなく、相手の中にある答えを引き出す。この姿勢が、
                  AI活用のサポートやコミュニティ運営でも活かされています。
                </p>
                <Link href={`/${lang}/services`} className="inline-block bg-teal-400/20 hover:bg-teal-400 text-teal-300 hover:text-teal-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-teal-400/30 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/25 text-sm backdrop-blur-sm">
                  コーチングサービス
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Insights Section - 自然の恵みを表現 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">Masayaの人となり</h2>
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
                    <h4 className="text-xl font-semibold text-green-900 group-hover:text-green-600 transition-colors duration-300">新しいモノ好き</h4>
                    <p className="text-green-700 group-hover:text-green-800 transition-colors duration-300">最新のAIツールは必ずチェック。人柱になって課金し、「これは使える！」を見つけるのが趣味。失敗も含めて楽しんでいます。</p>
                  </div>
                  <Link href={`/${lang}/tools`} className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-300/50 group-hover:scale-105">
                    活用中ツール
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
                    <h4 className="text-xl font-semibold text-green-900 group-hover:text-green-600 transition-colors duration-300">わかりやすさ重視</h4>
                    <p className="text-green-700 group-hover:text-green-800 transition-colors duration-300">日本語教師、IT担当、コーチの経験から、「相手の立場で考える」「簡潔に伝える」を常に意識。専門用語は使わず、具体例で説明します。</p>
                  </div>
                  <Link href={`/${lang}/career`} className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-300/50 group-hover:scale-105">
                    経歴詳細
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
                    <h4 className="text-xl font-semibold text-green-900 group-hover:text-green-600 transition-colors duration-300">つなぐことが好き</h4>
                    <p className="text-green-700 group-hover:text-green-800 transition-colors duration-300">人と人をつなぎ、新しい化学反応が生まれる場作りが得意。コミュニティ運営やイベント企画で多くの出会いを生み出してきました。</p>
                  </div>
                  <Link href={`/${lang}/community`} className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-300/50 group-hover:scale-105">
                    コミュニティ詳細
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - 自然の豊かさを表現 */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-emerald-800 to-teal-800">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block px-6 py-3 border-2 border-pink-400 rounded-full shadow-lg animate-pulse">
                <span className="mr-3">✨</span>
                {t.fate}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto text-green-200">
                「興味・想いが似てる！」<br />「Masayaが詳しいor経験した〇〇が気になる！」<br />
                なんでもお気軽にDMください☺️
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href={`/${lang}`} className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {t.backHome}
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </Link>
                <Link href={`/${lang}/career`} className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:-rotate-2 bg-green-500/20 hover:bg-green-500 text-green-300 hover:text-green-900 border-green-500/30 hover:border-green-500">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🌿</span>
                    経歴を見る
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href={`/${lang}/community`} className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-emerald-300/50 transition-all duration-300 hover:-rotate-2 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-emerald-900 border-emerald-500/30 hover:border-emerald-500">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🌳</span>
                    コミュニティについて
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Language Switcher */}
      <FloatingLanguageSwitcher currentLang={lang as Lang} />
    </div>
  )
} 