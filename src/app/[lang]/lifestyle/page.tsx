import Link from 'next/link'

export default async function Lifestyle({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const content = {
    ja: {
      title: "ライフスタイル",
      skillsSection: "大切にしている生活の要素",
      skills: {
        balance: {
          title: "ワークライフバランス",
          description: "仕事と生活の境界を柔軟に。集中する時は全力で、休む時は完全にオフ。メリハリのある生活リズムを心がけています。"
        },
        curiosity: {
          title: "好奇心ドリブン",
          description: "興味を持ったことは即行動。新しい場所、人、体験を求めて常にアンテナを張っています。人生は実験の連続だと思っています。"
        },
        minimalism: {
          title: "シンプルライフ",
          description: "本当に必要なものだけを残し、モノに縛られない自由な生活。デジタルツールで効率化し、時間と空間に余裕を作っています。"
        },
        wellness: {
          title: "心身の健康",
          description: "散歩、瞑想、良質な睡眠を重視。ストレスを溜めず、自分の感情や体調と向き合う時間を大切にしています。"
        },
        community: {
          title: "つながりを大切に",
          description: "一人の時間も好きですが、人とのつながりから学ぶことも多い。質の良い関係性を少数でも維持していくことを大切にしています。"
        },
        adventure: {
          title: "新しい体験",
          description: "ルーティンに飽きたら即変更。新しい場所への旅行、未体験のアクティビティ、初めての料理など、日常に変化を取り入れています。"
        }
      },
      timeline: {
        2025: {
          title: "理想の生活模索中",
          description: "・朝の散歩と瞑想の習慣化<br />・週3勤務＋自由時間の確保を目指す<br />・新しい趣味や技術に触れる時間を意識的に作る<br />・人との繋がりと一人時間のバランスを取りながら、自分らしい生活リズムを見つけている最中。",
          tags: ["ウェルビーイング", "学習時間", "人とのつながり"]
        },
        2020: {
          title: "安定と自由の両立",
          description: "・初めての正社員生活で安定した基盤を確保<br />・副業としてのコーチングやIT顧問で自由度も維持<br />・都市部での生活を楽しみながらも、2024年末に次のステップへ。安定から自由へと価値観をシフト。",
          tags: ["安定期", "副業", "価値観の変化"]
        },
        2015: {
          title: "フリーランス生活を満喫",
          description: "・時間と場所の自由を最大限活用<br />・様々なプロジェクトで多様な人との出会い<br />・収入の不安定さもあったが、自分らしい働き方を追求<br />・ブログ執筆や海外輸出など、興味の赴くまま挑戦。",
          tags: ["自由度重視", "多様な経験", "挑戦"]
        },
        2013: {
          title: "探求と実験の日々",
          description: "・様々な仕事や環境を体験<br />・ゲストハウス、イベント会社、パン屋など多彩な職場<br />・人との出会いを重視し、紹介を通じて新しい世界を知る<br />・この時期の多様な経験が今の価値観の基盤を形成。",
          tags: ["多様性", "人とのつながり", "体験重視"]
        },
        2008: {
          title: "冒険心の芽生え",
          description: "・カナダでの留学生活で視野が大きく広がる<br />・異文化での生活で適応力と好奇心を育む<br />・帰国後は国際交流サークルを立ち上げ<br />・この経験が「新しいことに挑戦する」という生き方の原点に。",
          tags: ["留学体験", "視野拡大", "国際感覚"]
        }
      },
      philosophy: {
        title: "💡 ライフスタイルの軸",
        mainPhilosophy: {
          badge: "💡 生き方の指針",
          title: "「人生は実験、毎日が冒険」",
          content: [
            "人生に正解はないと思っているので、<strong>常に実験マインド</strong>で生きています。",
            "新しいことに挑戦して、うまくいかなかったら別の方法を試す。<strong>失敗も含めて全てが学び</strong>だと捉えています。",
            "この考え方のおかげで、変化を恐れず、<strong>毎日を新鮮な気持ち</strong>で過ごせています。<strong>これからも実験を続けます</strong>。"
          ]
        },
        values: {
          freedom: {
            badge: "自由を重視",
            title: "「制約より可能性を選ぶ」",
            content: "規則やルールに縛られるより、自分で選択できる環境を好みます。<br /><br />時間、場所、関わる人、取り組む内容。できるだけ自分でコントロールできる生活を目指しています。その分責任も大きいですが、自由があるからこそ創造性も発揮できると信じています。"
          },
          balance: {
            badge: "バランス感覚",
            title: "「一人時間と人との時間」",
            content: "内向的な面もあるので一人の時間は必須。でも人との交流からも多くを学びます。<br /><br />どちらも大切にしながら、そのバランスを取ることを意識しています。無理に社交的になろうとせず、自分らしいペースで人とのつながりを育んでいます。"
          },
          growth: {
            badge: "成長志向",
            title: "「昨日と違う今日を作る」",
            content: "同じ毎日の繰り返しになると息が詰まります。小さなことでも何か新しい要素を取り入れたい。<br /><br />新しい道を歩く、読んだことのないジャンルの本、初めての料理。変化を恐れず、むしろ楽しむことで、日々成長していたいと思っています。"
          }
        },
        buttons: {
          tools: "活用ツールを見る",
          community: "コミュニティについて"
        }
      },
      backHome: "ホームに戻る"
    },
    en: {
      title: "Lifestyle",
      skillsSection: "Essential Elements of My Life",
      skills: {
        balance: {
          title: "Work-Life Balance",
          description: "Flexible boundaries between work and life. Full focus when working, complete rest when relaxing. I value a balanced life rhythm with clear distinctions."
        },
        curiosity: {
          title: "Curiosity-Driven",
          description: "Immediate action when interested in something. Always seeking new places, people, and experiences. I believe life is a continuous experiment."
        },
        minimalism: {
          title: "Simple Living",
          description: "Keeping only what's truly necessary, living free from material constraints. Using digital tools for efficiency to create more time and space."
        },
        wellness: {
          title: "Mind & Body Health",
          description: "Prioritizing walks, meditation, and quality sleep. Managing stress and taking time to understand my emotions and physical condition."
        },
        community: {
          title: "Valuing Connections",
          description: "I enjoy solitude but learn much from human connections. I cherish maintaining a few high-quality relationships rather than many superficial ones."
        },
        adventure: {
          title: "New Experiences",
          description: "Change routines when bored. Travel to new places, try new activities, cook unfamiliar dishes - incorporating variety into daily life."
        }
      },
      timeline: {
        2025: {
          title: "Exploring Ideal Lifestyle",
          description: "・Establishing habits of morning walks and meditation<br />・Aiming for 3-day work week + personal time<br />・Consciously creating time for new hobbies and skills<br />・Finding my authentic life rhythm while balancing connections with others and solitude.",
          tags: ["Well-being", "Learning Time", "Human Connections"]
        },
        2020: {
          title: "Balancing Stability & Freedom",
          description: "・First full-time employment providing stable foundation<br />・Maintaining freedom through coaching and IT consulting side work<br />・Enjoyed urban life but shifted toward freedom by end of 2024. Transitioned values from stability to freedom.",
          tags: ["Stable Period", "Side Business", "Value Shift"]
        },
        2015: {
          title: "Enjoying Freelance Life",
          description: "・Maximized freedom of time and location<br />・Met diverse people through various projects<br />・Despite income instability, pursued authentic work style<br />・Challenged myself with blog writing and international export following interests.",
          tags: ["Freedom Focus", "Diverse Experiences", "Challenges"]
        },
        2013: {
          title: "Days of Exploration & Experimentation",
          description: "・Experienced various jobs and environments<br />・Worked at guesthouses, event companies, bakeries, etc.<br />・Valued human connections, discovering new worlds through referrals<br />・These diverse experiences formed the foundation of my current values.",
          tags: ["Diversity", "Human Connections", "Experience-Focused"]
        },
        2008: {
          title: "Birth of Adventurous Spirit",
          description: "・Study abroad in Canada greatly expanded my perspective<br />・Developed adaptability and curiosity through cross-cultural living<br />・Started international exchange circle after returning<br />・This experience became the origin of my 'challenge new things' lifestyle.",
          tags: ["Study Abroad", "Expanded Perspective", "International Mindset"]
        }
      },
      philosophy: {
        title: "💡 Lifestyle Foundation",
        mainPhilosophy: {
          badge: "💡 Life Principle",
          title: "\"Life is an experiment, every day is an adventure\"",
          content: [
            "Since I believe there's no single correct answer to life, I live with <strong>an experimental mindset</strong>.",
            "Try new things, and if they don't work, try different approaches. <strong>Everything, including failures, is learning</strong>.",
            "This mindset helps me embrace change without fear and <strong>approach each day with fresh enthusiasm</strong>. <strong>I'll continue experimenting</strong>."
          ]
        },
        values: {
          freedom: {
            badge: "Value Freedom",
            title: "\"Choose possibilities over constraints\"",
            content: "I prefer environments where I can make my own choices rather than being bound by rules and regulations.<br /><br />Time, location, people to work with, projects to pursue. I aim for a life where I can control as much as possible. This comes with greater responsibility, but I believe freedom enables creativity."
          },
          balance: {
            badge: "Sense of Balance",
            title: "\"Solitude and social time\"",
            content: "Being somewhat introverted, alone time is essential. But I also learn much from interactions with others.<br /><br />I consciously try to balance both, nurturing connections at my own pace without forcing myself to be overly social."
          },
          growth: {
            badge: "Growth Mindset",
            title: "\"Create a today different from yesterday\"",
            content: "Repeating the same routine makes me feel suffocated. I want to incorporate something new, even small things.<br /><br />Walking new paths, reading unfamiliar genres, cooking new dishes. Rather than fear change, I embrace it as a way to grow daily."
          }
        },
        buttons: {
          tools: "View Tools",
          community: "About Community"
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

      {/* Lifestyle Timeline Section - 統一感のあるデザイン */}
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
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">{t.skills.balance.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.balance.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">{t.skills.curiosity.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.curiosity.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-purple-400/40 rounded-xl flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">{t.skills.minimalism.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.minimalism.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-orange-400/40 rounded-xl flex items-center justify-center group-hover:border-orange-400 group-hover:bg-orange-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-orange-300 transition-colors duration-300">{t.skills.wellness.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.wellness.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-yellow-400/40 rounded-xl flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">{t.skills.community.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.community.description}
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-red-400/40 rounded-xl flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🎒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-red-300 transition-colors duration-300">{t.skills.adventure.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t.skills.adventure.description}
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
                      <span className="text-6xl">🧪</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid-3col gap-8">
              {/* 自由を重視 */}
              <div className="group cursor-pointer bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 hover:border-red-400 hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🕊️</span>
                    </div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-red-600 transition-colors duration-300">
                      {t.philosophy.values.freedom.badge}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                    {t.philosophy.values.freedom.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.philosophy.values.freedom.content }} />
                </div>
              </div>

              {/* バランス感覚 */}
              <div className="group cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">⚖️</span>
                    </div>
                    <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-green-600 transition-colors duration-300">
                      {t.philosophy.values.balance.badge}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {t.philosophy.values.balance.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.philosophy.values.balance.content }} />
                </div>
              </div>

              {/* 成長志向 */}
              <div className="group cursor-pointer bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🌱</span>
                    </div>
                    <div className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-purple-600 transition-colors duration-300">
                      {t.philosophy.values.growth.badge}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {t.philosophy.values.growth.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.philosophy.values.growth.content }} />
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