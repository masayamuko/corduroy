"use client"

import Link from 'next/link'

export default function Career() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン（高さ半分） */}
      <section className="min-h-[25vh] relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI_Journey_Through_Nature_p3qkcd.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-[25vh] text-center space-y-12">
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">経歴</span>
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 text-orange-600">再出発の準備中！</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        ・各種生成AIツールの学習、実践（独学）<br />
                        ・ものづくり, 3CADの学習（通学）<br />
                        AIツールの導入を個人・企業さま相手に実験的にサポートしてます。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">AIツール学習</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">CAD学習</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">導入サポート</span>
                      </div>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                      2020
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-green-400 group-hover:shadow-2xl group-hover:shadow-green-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">会社員とフリーランス</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        ・海外と子どもたちに関わる企業で正社員勤務<br />
                        ・個人事業でコーチング、ITコンサルタントも継続
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">正社員勤務</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">コーチング</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">ITコンサルタント</span>
                      </div>
                    </div>
                  </div>

                  {/* 2015 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                      2015
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-purple-400 group-hover:shadow-2xl group-hover:shadow-purple-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">専業フリーランス</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        ・個人ブログ運営<br />
                        ・広告運用代行<br />
                        ・IT顧門<br />
                        ・海外個人輸出<br />
                        ・コーチング<br />
                        などいろんな仕事を経験してきました。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">ブログ運営</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">広告運用</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">IT顧門</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">海外輸出</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">コーチング</span>
                      </div>
                    </div>
                  </div>

                  {/* 2013 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                      2013
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">フリーターしながら模索</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        人との繋がりで紹介を中心に興味ある仕事を経験させてもらいました。<br />
                        パン屋、留学会社、WEB制作会社、貿易会社、ホームステイの会社、イベント会社、ゲストハウス、社会的養護施設、日本語学校。この時、WEBデザインの学校と日本語教師養成講座にも通いました。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">パン屋</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">留学会社</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">WEB制作</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">貿易会社</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">その他多数</span>
                      </div>
                    </div>
                  </div>

                  {/* 2008 */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                      2008
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-red-400 group-hover:shadow-2xl group-hover:shadow-red-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">大学生（カナダに休学留学）</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        久留米大学で英語専攻してました。１年間休学留学してカナダのバンクーバーにワーキングホリデー制度で留学しました。帰国後、自信がついて活動的になって、国際交流サークルを作って活動してました。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">久留米大学</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">カナダ留学</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">国際交流サークル</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">培ってきたスキル</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-blue-400/40 rounded-xl flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">👂</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">傾聴力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  相手の話を深く聞き、想いや感情を引き出すスキル。「コーチング」を300万円以上の学習費と500時間以上の実践で磨いてきました。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">わかりやすい説明力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  複雑なことを簡単に、相手のレベルに合わせて伝える技術。日本語教師養成講座420時間と日本語学校での授業実施、その他、コーチング・IT活用関連講座提供などで培ってきました。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-purple-400/40 rounded-xl flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">コミュニティ形成力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  人と人をつなぎ、自然な交流が生まれる場作り。多くのコミュニティ立ち上げ経験があります。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-orange-400/40 rounded-xl flex items-center justify-center group-hover:border-orange-400 group-hover:bg-orange-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-orange-300 transition-colors duration-300">IT・デジタル活用力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  新しいツールを積極的に試し、業務効率化・問題解決に活かすスキル。AI活用の基盤となっています。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-yellow-400/40 rounded-xl flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">文章・コンテンツ制作力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  5年間のブログ運営で290記事執筆。読みやすく価値ある情報を継続的に発信する力があります。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-red-400/40 rounded-xl flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-red-300 transition-colors duration-300">学習・適応力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  様々な分野・業界を経験し、常に新しいことを学び続ける姿勢。変化を楽しむマインドです。
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
              <h2 className="text-3xl md:text-4xl font-bold">💡 大事にしていること</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="grid-2col items-center gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-blue-600 transition-colors duration-300">
                      💡 人生の指針
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      「好奇心は熱いうちに打て！」
                    </h3>
                  </div>
                  <div className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed space-y-3">
                    <p>
                      そんなことわざはありませんが、<strong>そんな心意気で生きてます</strong>。
                    </p>
                    <p>
                      何かに興味をもった時、<strong>即メモをして</strong>、その日のうちに必ず最初の小さな一歩を踏み出すと決めています。可能ならその瞬間にその最初の一歩を踏み出します。
                    </p>
                    <p>
                      このマインドのおかげで、興味を持ったことに即取り組み、それらが繋がっていき今の自分の人生を<strong>楽しく刺激的なもの</strong>にしてきたと思います。<strong>これからも大事にします</strong>。
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
              {/* めんどくさいことが苦手 */}
              <div className="group cursor-pointer bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 hover:border-red-400 hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">⚡</span>
                    </div>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider group-hover:bg-red-600 transition-colors duration-300">
                      めんどくさいことが苦手
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                    「めんどくさい」は「楽しい」に変える
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    めんどくさいことは苦手です。でも、めんどくさくないことにするための工夫ならいくらでも頑張れます。
                    <br /><br />
                    面倒な作業を自動化したり、効率化したり、楽しいゲームに変えたり。その過程で新しいツールや方法と出会ってきました。
                    「めんどくさい」を「楽しい」に変えることで、周りをハッピーにしていきたいです。
                  </p>
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
                      最適化が好き
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    社会と個人の最適化を追求する
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    社会における自分の活かし方を最適化したい。それは単なる個人の利益ではなく、組織における個々の最適化と才能を活かすことを目指しています。
                    <br /><br />
                    誰もが自分の強みを発揮できる環境を作りたい。そのために、個人の特性を見極め、適材適所の配置や、効率的なシステム設計を心がけます。
                    最適化は「効率化」ではなく「価値最大化」だと思います。
                  </p>
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
                      教えることで学ぶ
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    互いに成長する関係性を大切に
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    誰かに何かを教える時、自分も最も多くを学んでます。一方的な指導ではなく、相互成長の関係性を大切にしています。
                    <br /><br />
                    教えることで自分の理解が深まり、新しい視点を得られます。相手の質問や反応から、自分では気づかなかった発見がある。
                    この循環的な学習プロセスが、最も効果的で楽しい学び方だと思っています。
                  </p>
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
                <Link href="/" className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    ホームに戻る
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/tools" className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🔧</span>
                    活用ツールを見る
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/community" className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🤝</span>
                    コミュニティについて
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