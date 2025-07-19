import Link from 'next/link'

export default async function Career({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const content = {
    ja: {
      title: "経歴",
      skillsSection: "培ってきたスキル",
      skills: {
        listening: {
          title: "傾聴力",
          description: "相手の話を深く聞き、想いや感情を引き出すスキル。「コーチング」を300万円以上の学習費と500時間以上の実践で磨いてきました。"
        },
        teaching: {
          title: "わかりやすい説明力",
          description: "複雑なことを簡単に、相手のレベルに合わせて伝える技術。日本語教師養成講座420時間と日本語学校での授業実施、その他、コーチング・IT活用関連講座提供などで培ってきました。"
        },
        community: {
          title: "コミュニティ形成力",
          description: "人と人をつなぎ、自然な交流が生まれる場作り。多くのコミュニティ立ち上げ経験があります。0→1は得意ですが、自分の興味が次々に移るので1→100は苦手です。"
        },
        digital: {
          title: "IT・デジタル活用力",
          description: "企業内IT担当として社内DX化を推進。最新のITツールを追って片っ端から調べ試してます。今は最新AIツールの導入・活用もできるようスキルアップしています。"
        },
        writing: {
          title: "文章・コンテンツ制作力",
          description: "5年間のブログ運営で290記事執筆。読みやすく価値ある情報を継続的に発信する力があります。今はそのモチベはありません。"
        },
        learning: {
          title: "学習・適応力",
          description: "様々な分野・業界を経験し、常に新しいことを学び続ける姿勢。変化を楽しむマインドです。"
        }
      },
      timeline: {
        2025: {
          title: "再出発の準備中！",
          description: "・各種生成AIツールの学習、実践（独学）<br />・ものづくり, 3DCADの学習（通学）<br />企業研修や就労支援などでCAD(2D,3D)や生成AIの活用を教える仕事に興味があり就活してます。理想は週３勤務の社員＋フリーランス。学習とポートフォリオづくり、NPOや個人へのAI導入テストサポート中。",
          tags: ["AI活用", "3DCAD学習", "個人・NPOボランティア"]
        },
        2020: {
          title: "会社員とフリーランス",
          description: "・海外留学事業と社会的養護のユース支援してるNPOで正社員勤務（5年）<br />・個人でのコーチング、中小企業のIT顧問も継続（フリーランス合計10年）<br />2024年年末に退職&廃業して理想のライフスタイル目指して動き始めました。",
          tags: ["初の正社員", "コーチング", "IT顧問"]
        },
        2015: {
          title: "専業フリーランス(5年)",
          description: "・個人ブログ運営<br />・広告運用代行<br />・中小企業のIT顧門<br />・海外個人輸出<br />・コーチング<br />などいろんな仕事を経験してきました。",
          tags: ["ブログ運営", "広告運用", "中小企業のIT顧問", "海外輸出", "コーチング"]
        },
        2013: {
          title: "フリーターしながら模索",
          description: "人との繋がりでいろんな企業さんにご縁をいただき、興味ある仕事を片っ端から経験させてもらいました。<br />多いときは５つ掛け持ち。<br />パン屋、留学会社、WEB制作会社、貿易会社、ホームステイの会社、イベント会社、ゲストハウス、社会的養護施設、日本語学校。この時、WEBデザインの学校と日本語教師養成講座にも通いました。",
          tags: ["パン屋", "留学会社", "WEB制作", "貿易会社", "その他"]
        },
        2008: {
          title: "大学生（カナダに休学留学）",
          description: "久留米大学で英語専攻してました。１年間休学留学してカナダのバンクーバーにワーキングホリデー制度で留学しました。帰国後、自信がついて活動的になって、国際交流サークルを作って活動してました。",
          tags: ["久留米大学", "カナダ留学", "国際交流サークル"]
        }
      },
      philosophy: {
        title: "💡 大事にしていること",
        mainPhilosophy: {
          badge: "💡 人生の指針",
          title: "「好奇心は熱いうちに打て！」",
          content: [
            "そんなことわざはありませんが、<strong>そんな心意気で生きてます</strong>。",
            "何かに興味をもった時、<strong>即メモをして</strong>、その日のうちに必ず最初の小さな一歩を踏み出すと決めています。可能ならその瞬間にその最初の一歩を踏み出します。",
            "このマインドのおかげで、興味を持ったことに即取り組み、それらが繋がっていき今の自分の人生を<strong>楽しく刺激的なもの</strong>にしてきたと思います。<strong>これからも大事にします</strong>。"
          ]
        },
        values: {
          efficiency: {
            badge: "めんどくさいことが苦手",
            title: "「めんどくさい」は「楽しい」に変える",
            content: "めんどくさいことは苦手です。でも、めんどくさくないことにするための工夫ならいくらでも頑張れます。<br /><br />面倒な作業を自動化したり、効率化したり、楽しいゲームに変えたり。その過程で新しいツールや方法と出会ってきました。「めんどくさい」を「楽しい」に変えることで、周りをハッピーにしていきたいです。"
          },
          optimization: {
            badge: "最適化が好き",
            title: "社会と個人の最適化を追求する",
            content: "社会における自分の活かし方を最適化したい。それは単なる個人の利益ではなく、組織における個々の最適化と才能を活かすことを目指しています。<br /><br />誰もが自分の強みを発揮できる環境を作りたい。そのために、個人の特性を見極め、適材適所の配置や、効率的なシステム設計を心がけます。最適化は「効率化」ではなく「価値最大化」だと思います。"
          },
          learning: {
            badge: "教えることで学ぶ",
            title: "互いに成長する関係性を大切に",
            content: "誰かに何かを教える時、自分も最も多くを学んでます。一方的な指導ではなく、相互成長の関係性を大切にしています。<br /><br />教えることで自分の理解が深まり、新しい視点を得られます。相手の質問や反応から、自分では気づかなかった発見がある。この循環的な学習プロセスが、最も効果的で楽しい学び方だと思っています。"
          }
        },
        buttons: {
          tools: "活用ツールを見る",
          community: "コミュニティについて"
        },
        lifestyleLink: "生活面の歩み"
      },
      backHome: "ホームに戻る"
    },
    en: {
      title: "Career",
      skillsSection: "Skills I've Developed",
      skills: {
        listening: {
          title: "Active Listening",
          description: "Skills to deeply listen and draw out thoughts and emotions. Refined through over 3 million yen in coaching education and 500+ hours of practice."
        },
        teaching: {
          title: "Clear Communication",
          description: "Ability to explain complex concepts simply, adapting to the audience's level. Developed through 420 hours of Japanese language teacher training, teaching at Japanese language schools, and providing coaching & IT utilization seminars."
        },
        community: {
          title: "Community Building",
          description: "Creating spaces where people naturally connect and interact. Experienced in launching multiple communities."
        },
        digital: {
          title: "IT & Digital Skills",
          description: "Promoted internal DX transformation as a corporate IT coordinator. Actively implementing and utilizing the latest AI tools."
        },
        writing: {
          title: "Writing & Content Creation",
          description: "Wrote 290 articles over 5 years of blog management. Ability to continuously create readable and valuable content."
        },
        learning: {
          title: "Learning & Adaptability",
          description: "Experienced various fields and industries, always learning new things. Mindset that enjoys change."
        }
      },
      timeline: {
        2025: {
          title: "Preparing for a Fresh Start!",
          description: "・Learning and practicing various generative AI tools (self-study)<br />・Learning manufacturing & 3D CAD (in-person courses)<br />Job hunting for positions teaching CAD (2D, 3D) and generative AI utilization in corporate training and employment support. Ideal: 3-day employee + freelance work. Focusing on learning and portfolio building, providing AI implementation test support for NPOs and individuals.",
          tags: ["AI Learning", "3D CAD", "Individual & NPO Volunteer"]
        },
        2020: {
          title: "Employee & Freelancer",
          description: "・Full-time employee at NPO supporting overseas study programs and youth in social care (5 years)<br />・Continued personal coaching and IT consulting for small businesses (Total 10 years as freelancer)<br />Resigned & closed business at end of 2024 to pursue ideal lifestyle.",
          tags: ["First Full-time Job", "Coaching", "IT Consulting"]
        },
        2015: {
          title: "Full-time Freelancer (5 years)",
          description: "・Personal blog management<br />・Advertising operations<br />・IT consulting for small businesses<br />・International personal export<br />・Coaching<br />Experienced various types of work.",
          tags: ["Blog Management", "Advertising", "Small Business IT Consulting", "International Export", "Coaching"]
        },
        2013: {
          title: "Exploring While Freelancing",
          description: "Experienced various jobs through personal connections, sometimes juggling up to 5 positions simultaneously.<br />Bakery, study abroad agency, web development company, trading company, homestay company, event company, guesthouse, social welfare facility, Japanese language school. Also attended web design school and Japanese language teacher training during this period.",
          tags: ["Bakery", "Study Abroad Agency", "Web Development", "Trading Company", "Others"]
        },
        2008: {
          title: "University Student (Study Abroad in Canada)",
          description: "Majored in English at Kurume University. Took a gap year to study abroad in Vancouver, Canada through the Working Holiday program. After returning, gained confidence and became more active, creating and managing an international exchange circle.",
          tags: ["Kurume University", "Canada Study Abroad", "International Exchange Circle"]
        }
      },
      philosophy: {
        title: "💡 What I Value",
        mainPhilosophy: {
          badge: "💡 Life Principle",
          title: "\"Strike while curiosity is hot!\"",
          content: [
            "That's not actually a proverb, but <strong>that's the spirit I live by</strong>.",
            "When I become interested in something, I <strong>immediately take notes</strong> and make sure to take the first small step that very day. If possible, I take that first step in that moment.",
            "Thanks to this mindset, I immediately engage with things that interest me, and they connect to make my life <strong>enjoyable and stimulating</strong>. <strong>I will continue to cherish this</strong>."
          ]
        },
        values: {
          efficiency: {
            badge: "Dislike tedious work",
            title: "Turn \"tedious\" into \"fun\"",
            content: "I'm not good with tedious work. But I can work hard on finding ways to make things less tedious.<br /><br />Automating tedious tasks, making them more efficient, or turning them into fun games. Through this process, I've encountered new tools and methods. I want to make everyone happy by turning \"tedious\" into \"fun\"."
          },
          optimization: {
            badge: "Love optimization",
            title: "Pursuing optimization of society and individuals",
            content: "I want to optimize how I can contribute to society. This isn't just for personal benefit, but aims to optimize individuals within organizations and leverage their talents.<br /><br />I want to create environments where everyone can demonstrate their strengths. For this, I focus on identifying individual characteristics, appropriate placement, and efficient system design. I believe optimization is about \"value maximization,\" not just \"efficiency\"."
          },
          learning: {
            badge: "Learn by teaching",
            title: "Valuing mutually growing relationships",
            content: "When I teach someone something, I learn the most myself. I value relationships of mutual growth rather than one-way instruction.<br /><br />Teaching deepens my own understanding and gives me new perspectives. There are discoveries I wouldn't have made on my own through the questions and reactions of others. I think this cyclical learning process is the most effective and enjoyable way to learn."
          }
        },
        buttons: {
          tools: "View Tools",
          community: "About Community"
        },
        lifestyleLink: "Lifestyle Journey"
      },
      backHome: "Back to Home"
    }
  };

  const t = content[lang as keyof typeof content] || content.ja;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン（高さ半分） */}
      <section className="min-h-[25vh] relative bg-cover bg-center bg-no-repeat pt-24" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI_Journey_Through_Nature_p3qkcd.png')"
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

      {/* Career Timeline Section - 統一感のあるデザイン */}
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 text-orange-600">{t.timeline[2025].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2025].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2025].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                      2020
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-green-400 group-hover:shadow-2xl group-hover:shadow-green-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{t.timeline[2020].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2020].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2020].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2015 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                      2015
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-purple-400 group-hover:shadow-2xl group-hover:shadow-purple-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{t.timeline[2015].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2015].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2015].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>



                  {/* 2013 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                      2013
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{t.timeline[2013].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2013].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2013].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2008 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                      2008
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-red-400 group-hover:shadow-2xl group-hover:shadow-red-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{t.timeline[2008].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2008].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2008].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
                  {/* ライフスタイルへのリンク - タイムラインスタイル */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <Link href={`/${lang}/lifestyle`} className="flex items-start space-x-8 w-full">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold group-hover:from-purple-600 group-hover:to-pink-600 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-purple-700 rounded-2xl p-8 group-hover:border-purple-800 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300">{t.philosophy.lifestyleLink}</h3>
                        <p className="text-purple-100 mb-3 group-hover:text-white transition-colors duration-300">
                          旅、シェアハウス、田舎移住、結婚、ノマド生活...<br />
                          仕事以外の人生の軌跡はこちらから
                        </p>
                        <div className="flex items-center gap-2 text-white group-hover:text-purple-100 transition-colors duration-300">
                          <span className="text-sm font-medium">ライフスタイルページへ</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.skillsSection}</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-blue-400/40 rounded-xl flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">👂</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">{t.skills.listening.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.listening.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">{t.skills.teaching.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.teaching.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-purple-400/40 rounded-xl flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">{t.skills.community.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.community.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-orange-400/40 rounded-xl flex items-center justify-center group-hover:border-orange-400 group-hover:bg-orange-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-orange-300 transition-colors duration-300">{t.skills.digital.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.digital.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-yellow-400/40 rounded-xl flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">{t.skills.writing.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.writing.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-red-400/40 rounded-xl flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-red-300 transition-colors duration-300">{t.skills.learning.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.learning.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - 統一感のあるデザイン */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">{t.philosophy.title}</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="grid-2col items-center gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-blue-600 transition-colors duration-300">
                      {t.philosophy.mainPhilosophy.badge}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {t.philosophy.mainPhilosophy.title}
                    </h3>
                  </div>
                  <div className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed space-y-3">
                    {t.philosophy.mainPhilosophy.content.map((paragraph: string, index: number) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
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
              {/* めんどくさいことが苦手 */}
              <div className="group cursor-pointer bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 hover:border-red-400 hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">⚡</span>
                    </div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-red-600 transition-colors duration-300">
                      {t.philosophy.values.efficiency.badge}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                    {t.philosophy.values.efficiency.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.philosophy.values.efficiency.content }} />
                </div>
              </div>

              {/* 最適化が好き */}
              <div className="group cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🎯</span>
                    </div>
                    <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-green-600 transition-colors duration-300">
                      {t.philosophy.values.optimization.badge}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {t.philosophy.values.optimization.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.philosophy.values.optimization.content }} />
                </div>
              </div>

              {/* 教えることで学ぶ */}
              <div className="group cursor-pointer bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🔄</span>
                    </div>
                    <div className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-purple-600 transition-colors duration-300">
                      {t.philosophy.values.learning.badge}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {t.philosophy.values.learning.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.philosophy.values.learning.content }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block px-6 py-3 border-2 border-pink-400 rounded-full shadow-lg animate-pulse">
                <span className="mr-3">✨</span>
                これも何かのご縁！
              </h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto text-white">
                「興味・想いが似てる！」<br />「Masayaが詳しいor経験した〇〇が気になる！」<br />
                なんでもお気軽にDMください☺️
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href={`/${lang}/`} className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden">
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
                <Link href={`/${lang}/tools`} className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🔧</span>
                    {t.philosophy.buttons.tools}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href={`/${lang}/community`} className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🤝</span>
                    {t.philosophy.buttons.community}
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