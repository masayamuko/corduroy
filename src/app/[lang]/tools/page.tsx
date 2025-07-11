"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン（高さ半分） */}
      <section className="min-h-[25vh] relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI_Journey_Begins_jsa4jf.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-[25vh] text-center space-y-12">
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">活用ツール</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Tools Section - 統一感のあるデザイン */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="space-y-20">

            
            <div className="grid-3col gap-8">
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-blue-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                    <Image 
                      src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751803594/ChatGPT_logo_aczoh6.png"
                      alt="ChatGPT Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">ChatGPT</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">「第二の自分」として育成。自分を知り尽くしたAIパートナー第一号。アイデア発想の相棒。自律稼働もするよ！</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                      メインツール
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500 flex items-center justify-center space-x-4">
                    <Image 
                      src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751803594/Cursor_logo_ibtykj.png"
                      alt="Cursor Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <span className="text-2xl font-bold text-gray-600">+</span>
                    <Image 
                      src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751803595/Obsidian_logo_rl8m9i.png"
                      alt="Obsidian Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Cursor + Obsidian</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">音声文字起こしデータやChatGPTで対話データを毎日流し込んで、整理したり深めたり。そこから直でこのサイトやブログ等を作るシステムを構築して使ってます。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-green-600 transition-colors duration-300">
                      サブメイン
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-purple-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                    <Image 
                      src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751803594/Gemini_logo_bhb1qf.png"
                      alt="Gemini Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Gemini CLI</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Cursor内で稼働させ大量のデータ処理、生成を担ってくれてます。CLIでないGemini(PRO)でも機械的な応答やDeepreserchに使ってます。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-purple-600 transition-colors duration-300">
                      情報整理
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-orange-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                    <Image 
                      src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751803596/Superwhisper_logo_qlxxw1.png"
                      alt="SuperWhisper Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">SuperWhisper</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">音声入力はもちろん、クリップボードの中をコンテキストに含められる超便利ツール。音声入力の頻度が増えて、パソコンに話しかけまくってるやばい人になれました。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-orange-600 transition-colors duration-300">
                      音声入力
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-red-400 hover:shadow-2xl hover:shadow-red-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-red-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500 flex items-center justify-center space-x-4">
                    <Image 
                      src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751803594/Claude_logo_zzbrbm.png"
                      alt="Claude Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <span className="text-2xl font-bold text-gray-600">+</span>
                    <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">3D</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Claude+Blender</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">MCPサーバーでBlender繋いで３Dモデリング→3Dプリンターで印刷。使えるもの作ろうと模索中。その他MCPでいろいろ実験してみて使えるもの探してます。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-red-600 transition-colors duration-300">
                      3Dモデリング
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-indigo-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                    <Image 
                      src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751803595/Google_AI_STUDIO_logo_zopkyy.png"
                      alt="Google AI Studio Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Google AI Studio</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">対話コンテンツを作るのに使ってます。アプリ作りや画像生成にも時々使ってます。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-indigo-600 transition-colors duration-300">
                      コンテンツ作成
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tried Tools Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                人柱レポート
                <span className="block text-lg md:text-xl font-normal text-gray-300 mt-2">（試したツール）</span>
              </h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-2col gap-8">
              <div className="group cursor-pointer bg-white/10 backdrop-blur-sm border-2 border-red-400/30 rounded-2xl p-8 hover:border-red-400 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">❌ 断念したもの</h3>
                <ul className="space-y-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  <li>• <strong>Notion:</strong> Obsidianに移行</li>
                  <li>• <strong>Gamma:</strong> 出力安定させれず結局まだCANVA</li>
                  <li>• <strong>Midjourney:</strong> 画像生成使用頻度低く一旦解約、再契約検討中</li>
                  <li>• <strong>Suno:</strong> 楽曲生成頻度低く一旦解約、再契約検討中</li>
                  <li>• <strong>ChatGPT PRO:</strong> 一旦解約してPlusで使ってます。また検討するかも。</li>
                </ul>
              </div>
              
              <div className="group cursor-pointer bg-white/10 backdrop-blur-sm border-2 border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">🔄 検討中・様子見</h3>
                <ul className="space-y-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  <li>• <strong>Dify:</strong> AIエージェント作りまくりたい</li>
                  <li>• <strong>n8n:</strong> Difyと比較検討</li>
                  <li>• <strong>Claude MAX:</strong> Claude CODEバリバリ使ってみたい</li>
                  <li>• <strong>Grok:</strong> 今のところ用途を見出せてない</li>
                  <li>• <strong>Devin:</strong> プログラマーさん用だと思って避けてきたけど気になってきた</li>
                </ul>
              </div>
            </div>
            
            <div className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="grid-2col items-center gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:bg-blue-600 transition-colors duration-300">
                      💡 大事にしていく感覚
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      「新しいツールは試さないと気が済まない」
                    </h3>
                  </div>
                  <p className="text-lead leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    少しでも気になったものは一度は課金して触ってみるようにしています。触ってみないとわからない。課金したら必死で一度は触るので資金の許す限り全力で！
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="w-80 h-80 border-2 border-blue-300 overflow-hidden rounded-2xl group-hover:border-blue-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                      <span className="text-8xl">💡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Section - 統一感のあるデザイン */}
      <section className="section">
        <div className="container-narrow text-center">
          <div className="space-y-8">
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
          </div>
        </div>
      </section>
    </div>
  )
} 