import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* 404アイコン */}
          <div className="text-8xl font-bold text-gray-300">404</div>
          
          {/* メインメッセージ */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">
              ページが見つかりません
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              お探しのページは削除されたか、URLが変更された可能性があります。<br />
              新しいサイトでは、より良いコンテンツをお届けしています。
            </p>
          </div>
          
          {/* 推奨ページ */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              おすすめのページ
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/blog" 
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <div className="text-blue-600 font-semibold mb-2">📖 ブログ</div>
                <div className="text-sm text-gray-600">第二の自分育成ガイド</div>
              </Link>
              
              <Link 
                href="/about" 
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <div className="text-blue-600 font-semibold mb-2">👤 プロフィール</div>
                <div className="text-sm text-gray-600">Masayaについて</div>
              </Link>
              
              <Link 
                href="/events/boardgame" 
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <div className="text-blue-600 font-semibold mb-2">🎲 ボードゲーム制作会</div>
                <div className="text-sm text-gray-600">AI活用イベント</div>
              </Link>
              
              <Link 
                href="/projects/second-self" 
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <div className="text-blue-600 font-semibold mb-2">🤖 第二の自分</div>
                <div className="text-sm text-gray-600">AIパートナー育成</div>
              </Link>
            </div>
          </div>
          
          {/* アクション */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              ホームに戻る
            </Link>
            
            <div className="text-sm text-gray-500">
              お探しのコンテンツについて質問がある場合は、
              <a 
                href="https://x.com/MasayaToAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
              でお気軽にお声かけください。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 