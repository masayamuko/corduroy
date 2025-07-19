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
          title: "📚勉強一色",
          description: "・平日は学校・AI学習と制作、時々イベント実施。<br />・週末は、ボランティア or イベント等<br />・ADHD診断→投薬で生きやすくなる<br />スキルアップに全コミット！",
          tags: ["学習重視", "ADHD診断", "スキルアップ"]
        },
        2023: {
          title: "🏠妻の夢『ホストファミリー』に！",
          description: "・新居で妻と友人と3人暮らし＋留学生受入れ<br />・MTGとボードゲームにドハマり（ボドゲ50個超）<br />・ボードゲームカフェ作るのが目標の１つに",
          tags: ["ホストファミリー", "ボードゲーム", "新居生活"]
        },
        2020: {
          title: "🦎夫婦でコロナ禍",
          description: "・妻と1LDKの狭い自宅でコロナ禍<br />・爬虫類ペットを飼い始める<br />・コーチング学習と実践で内省深める",
          tags: ["コロナ禍", "爬虫類ペット", "コーチング"]
        },
        2019: {
          title: "✈️ノマド生活実践",
          description: "・毎月海外でワーケーション<br />・フィリピン、カンボジア、台湾、韓国、マレーシア、香港、中国<br />・ワーカホリックの血をくれた祖父と他界<br />・田舎移住失敗（3度目）",
          tags: ["ノマド", "海外ワーケーション", "田舎移住失敗"]
        },
        2018: {
          title: "🚚軽トラハウス生活→田舎移住",
          description: "・人生初クラファンで夢のマイホーム『軽トラハウス』を新築<br />・家を解約し、軽トラハウスで暮らす。<br />・田舎で地域おこし協力隊になり即退職（2度目の田舎移住失敗）",
          tags: ["軽トラハウス", "クラウドファンディング", "地域おこし協力隊"]
        },
        2017: {
          title: "💍新婚別居",
          description: "・同棲してた妻と結婚。妻は単独ワーホリへ。<br />・ブロガー招待でフィリピン留学×2<br />・四国旅、北海道滞しワーケーション<br />・妻のいるニュージーランドで年越し",
          tags: ["結婚", "別居", "ワーケーション"]
        },
        2015: {
          title: "🏠彼女と田舎移住にトライ",
          description: "・エコビレッジに憧れ訪問<br />・田舎移住チャレンジ失敗（地域の反対）<br />・妻と同居スタート",
          tags: ["エコビレッジ", "田舎移住失敗", "同居開始"]
        },
        2008: {
          title: "🧭留学で旅、シェアハウス好きに",
          description: "・カナダワーホリ、台湾自転車一周、西日本ゲストハウスめぐり、韓国の農家にファームステイ（WWOOF）、エスペラント語旅行<br />・大学卒業後は友人4人と空港近くでシェアハウス<br />・ゲストハウス開業を夢見る",
          tags: ["留学体験", "旅行好き", "シェアハウス"]
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
        },
        careerLink: "仕事の経歴はこちら"
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
          title: "📚 Study-focused Year",
          description: "・Weekdays: School, AI learning and creation, occasional event hosting<br />・Weekends: Volunteering or events<br />・ADHD diagnosis → Medication making life easier<br />Full commitment to skill development!",
          tags: ["Learning Focus", "ADHD Diagnosis", "Skill Development"]
        },
        2023: {
          title: "🏠 Wife's Dream: Host Family!",
          description: "・New home with wife, friend, and student hosting<br />・Obsessed with MTG and board games (50+ games)<br />・Goal to create a board game cafe",
          tags: ["Host Family", "Board Games", "New Home Life"]
        },
        2020: {
          title: "🦎 Couple During COVID",
          description: "・Wife and I in small 1LDK apartment during COVID<br />・Started keeping reptile pets<br />・Deepened introspection through coaching learning and practice",
          tags: ["COVID Life", "Reptile Pets", "Coaching"]
        },
        2019: {
          title: "✈️ Nomadic Lifestyle Practice",
          description: "・Monthly international workations<br />・Philippines, Cambodia, Taiwan, Korea, Malaysia, Hong Kong, China<br />・Lost workaholic grandfather<br />・Rural migration failure (3rd time)",
          tags: ["Nomad Life", "International Workation", "Rural Migration Failure"]
        },
        2018: {
          title: "🚚 Tiny House Life → Rural Migration",
          description: "・First crowdfunding for dream 'Tiny Truck House'<br />・Cancelled apartment lease, lived in tiny truck house<br />・Became regional revitalization coordinator in countryside, quit immediately (2nd rural migration failure)",
          tags: ["Tiny Truck House", "Crowdfunding", "Regional Coordinator"]
        },
        2017: {
          title: "💍 Newlywed Separation",
          description: "・Married live-in girlfriend, she went on solo working holiday<br />・Blogger invitation to Philippines study abroad x2<br />・Shikoku trip, Hokkaido workation<br />・New Year's in New Zealand with wife",
          tags: ["Marriage", "Separation", "Workation"]
        },
        2015: {
          title: "🏠 Rural Migration Trial with Girlfriend",
          description: "・Visited eco-villages with admiration<br />・Rural migration challenge failed (local opposition)<br />・Started cohabitation with wife",
          tags: ["Eco Village", "Rural Migration Failure", "Cohabitation Start"]
        },
        2008: {
          title: "🧭 Travel & Share House Lover Through Study Abroad",
          description: "・Canada working holiday, Taiwan cycling tour, western Japan guesthouse tour, farm stay in Korea (WWOOF), Esperanto language travel<br />・Post-graduation share house near airport with 4 friends<br />・Dreamed of opening a guesthouse",
          tags: ["Study Abroad Experience", "Travel Lover", "Share House"]
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
        },
        careerLink: "View Career Journey"
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

                  {/* 2023 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
                      2023
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-teal-400 group-hover:shadow-2xl group-hover:shadow-teal-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{t.timeline[2023].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2023].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2023].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">{tag}</span>
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

                  {/* 2019 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                      2019
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-blue-400 group-hover:shadow-2xl group-hover:shadow-blue-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{t.timeline[2019].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2019].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2019].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2018 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-yellow-600 group-hover:scale-110 transition-all duration-300">
                      2018
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-yellow-400 group-hover:shadow-2xl group-hover:shadow-yellow-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">{t.timeline[2018].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2018].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2018].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2017 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-pink-600 group-hover:scale-110 transition-all duration-300">
                      2017
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-pink-400 group-hover:shadow-2xl group-hover:shadow-pink-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">{t.timeline[2017].title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t.timeline[2017].description }} />
                      <div className="flex flex-wrap gap-2">
                        {t.timeline[2017].tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">{tag}</span>
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
            
            {/* キャリアへのリンクボタン */}
            <div className="mt-12 text-center">
              <Link href={`/${lang}/career`} className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="text-lg">💼</span>
                <span>{t.careerLink}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
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