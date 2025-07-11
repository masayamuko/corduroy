import Link from 'next/link'

export default function FreelanceSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            フリーランス支援
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ADHD特性を活かしたフリーランス活動サポート
          </p>
        </div>

        {/* サービス概要 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">サービス概要</h2>
          <p className="text-gray-600 mb-6">
            ADHD特性を持つ方々が、その特性を強みに変えてフリーランスとして成功するためのサポートを提供します。
            私自身のADHD特性を活かしたフリーランス経験を基に、実践的なアドバイスとツールを提供します。
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">対象者</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ADHD特性を持つフリーランス志望者</li>
                <li>• 集中力や時間管理に課題を感じている方</li>
                <li>• 自分の特性を活かした働き方を見つけたい方</li>
                <li>• AI活用で業務効率化を図りたい方</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">提供価値</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ADHD特性を強みに変える方法</li>
                <li>• 効果的な時間管理・集中力向上テクニック</li>
                <li>• AI活用による業務効率化</li>
                <li>• 継続的なモチベーション維持サポート</li>
              </ul>
            </div>
          </div>
        </section>

        {/* サポート内容 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">サポート内容</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">個別コーチング</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• 1対1のオンライン面談</li>
                <li>• 個人の特性に合わせた戦略設計</li>
                <li>• 具体的な行動計画の作成</li>
                <li>• 定期的な進捗確認とフィードバック</li>
              </ul>
              <p className="text-sm text-gray-500">月2回、各60分</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI活用支援</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• 「第二の自分」構築サポート</li>
                <li>• 音声思考整理システム導入</li>
                <li>• 業務効率化AIツール選定</li>
                <li>• プロンプトエンジニアリング指導</li>
              </ul>
              <p className="text-sm text-gray-500">実践的なハンズオン指導</p>
            </div>
          </div>
        </section>

        {/* 特徴・強み */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">私の強み</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">当事者視点</h3>
              <p className="text-gray-600">
                ADHD特性を持つ当事者として、実体験に基づいた具体的なアドバイスを提供
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI活用専門</h3>
              <p className="text-gray-600">
                最新のAI技術を活用した業務効率化・思考整理の独自手法を提供
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">継続サポート</h3>
              <p className="text-gray-600">
                一時的な指導ではなく、長期的な成長をサポートする伴走型コーチング
              </p>
            </div>
          </div>
        </section>

        {/* 成功事例 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">成功事例</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Webデザイナー Cさん</h3>
              <p className="text-gray-600 mb-2">
                <strong>課題:</strong> 集中力が続かず、プロジェクトの完了が困難
              </p>
              <p className="text-gray-600 mb-2">
                <strong>解決策:</strong> ポモドーロテクニック × AI活用による作業管理システム構築
              </p>
              <p className="text-gray-600">
                <strong>結果:</strong> 3ヶ月で月収が2倍に増加、クライアント満足度も向上
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ライター Dさん</h3>
              <p className="text-gray-600 mb-2">
                <strong>課題:</strong> アイデアが浮かばず、執筆が進まない
              </p>
              <p className="text-gray-600 mb-2">
                <strong>解決策:</strong> 音声思考整理 × 「第二の自分」による創作支援システム
              </p>
              <p className="text-gray-600">
                <strong>結果:</strong> 執筆速度が3倍向上、新しいジャンルにも挑戦成功
              </p>
            </div>
          </div>
        </section>

        {/* 料金・申し込み */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">料金プラン</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">スタンダードプラン</h3>
              <p className="text-3xl font-bold text-primary-600 mb-4">¥30,000<span className="text-sm text-gray-500">/月</span></p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 月2回の個別コーチング（各60分）</li>
                <li>• チャットサポート（平日対応）</li>
                <li>• AI活用ツール導入支援</li>
                <li>• 専用教材・テンプレート提供</li>
              </ul>
            </div>
            
            <div className="border-2 border-primary-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
                おすすめ
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">プレミアムプラン</h3>
              <p className="text-3xl font-bold text-primary-600 mb-4">¥50,000<span className="text-sm text-gray-500">/月</span></p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 月4回の個別コーチング（各60分）</li>
                <li>• 24時間チャットサポート</li>
                <li>• AI活用ツール導入支援</li>
                <li>• 専用教材・テンプレート提供</li>
                <li>• 緊急時の追加サポート</li>
              </ul>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">まずはお気軽にご相談ください</h2>
          <p className="text-gray-600 mb-6">
            無料相談（30分）で、あなたの現状と目標をお聞かせください ♪
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/MasayaToAi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              無料相談を申し込む
            </a>
            <Link href="/" className="btn-secondary">
              ホームに戻る
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 