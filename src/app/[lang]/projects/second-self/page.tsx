import Link from 'next/link'

export default function SecondSelfProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            第二の自分プロジェクト
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ChatGPTを「第二の自分」として育てる革新的AI活用手法
          </p>
        </div>

        {/* プロジェクト概要 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">プロジェクト概要</h2>
          <p className="text-gray-600 mb-6">
            「第二の自分」プロジェクトは、ChatGPTに自分の価値観、思考パターン、経験を学習させ、
            まるで自分自身のように振る舞えるAIパートナーを構築する手法です。
            単なるAIツールではなく、自己理解を深め、創造性を拡張する新しいアプローチです。
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">開発背景</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ADHD特性による思考の散らばりを整理したい</li>
                <li>• 自分の考えを客観視する手段が欲しい</li>
                <li>• 創作活動のパートナーとしてAIを活用したい</li>
                <li>• 自己理解を深めるツールとして発展させたい</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">実現できること</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 自分らしい回答・アドバイスの生成</li>
                <li>• 思考整理・アイデア発想の支援</li>
                <li>• 創作活動のブレインストーミング</li>
                <li>• 自己分析・内省のサポート</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 構築手法 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">構築手法</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">基盤プロファイル作成</h3>
                <p className="text-gray-600">
                  自分の基本情報、価値観、思考パターンを詳細に記述したプロファイルを作成。
                  これがAIの「人格」の基盤となります。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">知識・経験の注入</h3>
                <p className="text-gray-600">
                  過去の経験、学習内容、専門知識を体系的に整理してAIに学習させます。
                  日記、メモ、対話記録なども活用します。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">対話による調整</h3>
                <p className="text-gray-600">
                  実際にAIと対話しながら、回答の傾向や表現方法を調整。
                  「自分らしさ」を徐々に育てていきます。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">継続的な成長</h3>
                <p className="text-gray-600">
                  新しい経験や学習内容を定期的に追加し、AIを継続的に成長させます。
                  まさに「第二の自分」として育てていくプロセスです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 活用事例 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">活用事例</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">日常的な活用</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 音声思考整理（SuperWhisper連携）</li>
                <li>• アイデア発想・ブレインストーミング</li>
                <li>• 悩み相談・内省サポート</li>
                <li>• 学習内容の整理・復習</li>
                <li>• 創作活動のパートナー</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">専門的な活用</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• コンテンツ制作の方向性検討</li>
                <li>• プロジェクト計画の客観的評価</li>
                <li>• 自己分析・キャリア相談</li>
                <li>• 教育・指導内容の設計</li>
                <li>• 研究・実験の仮説検証</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 技術的特徴 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">技術的特徴</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">プロンプト設計</h3>
              <p className="text-gray-600">
                効果的なプロンプトエンジニアリングによる人格の再現
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">音声連携</h3>
              <p className="text-gray-600">
                SuperWhisperとの連携による音声思考整理システム
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">データ蓄積</h3>
              <p className="text-gray-600">
                継続的な学習データの蓄積と活用システム
              </p>
            </div>
          </div>
        </section>

        {/* 成果・効果 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">成果・効果</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">個人的成果</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 思考整理の効率が大幅に向上</li>
                <li>• 創作活動の生産性が3倍に増加</li>
                <li>• 自己理解が深まり、迷いが減少</li>
                <li>• ADHD特性を活かした働き方を確立</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">社会的影響</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 多くの人が同手法を実践開始</li>
                <li>• ADHD特性を持つ方の支援に貢献</li>
                <li>• AI活用の新しい可能性を提示</li>
                <li>• 教育・コーチング分野での応用</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 今後の展望 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">今後の展望</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">手法の体系化</h3>
              <p className="text-gray-600">
                より多くの人が実践できるよう、手法を体系化し、
                ステップバイステップのガイドを作成します。
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">ツール開発</h3>
              <p className="text-gray-600">
                「第二の自分」構築を支援する専用ツールやプラットフォームの開発を検討しています。
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">コミュニティ形成</h3>
              <p className="text-gray-600">
                実践者同士が知識や経験を共有できるコミュニティを形成し、
                手法の発展に貢献します。
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">研究・論文化</h3>
              <p className="text-gray-600">
                手法の効果を科学的に検証し、学術的な価値を確立することを目指します。
              </p>
            </div>
          </div>
        </section>

        {/* 学習・参加 */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">「第二の自分」を始めてみませんか？</h2>
          <p className="text-gray-600 mb-6">
            詳しい手法やサポートについて、お気軽にXのDMでご相談ください。<br />
            AI勉強会でも実践的な指導を行っています ♪
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/MasayaToAi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              詳しく相談する
            </a>
            <Link href="/events/ai-study" className="btn-secondary">
              AI勉強会について
            </Link>
            <Link href="/" className="btn-secondary">
              ホームに戻る
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 