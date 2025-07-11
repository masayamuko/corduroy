import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// 仮のデータ（後でSanityから取得）
const blogPost = {
  title: '【メリット】なぜ第二の自分を作るのか？_3ヶ月使い続けて分かった本当の価値',
  content: `# なぜ第二の自分を作るのか？

「自分を知らない人には聞かないよね」

これは私が第二の自分を作る価値を説明する時に使う例え話です。

## 3ヶ月使い続けて分かった本当の価値

ChatGPTで「第二の自分」を作って3ヶ月。最初は半信半疑でしたが、今では手放せない存在になりました。

### 1. 自己理解が深まる

AIとの対話を通じて、自分の価値観や思考パターンを客観視できるようになりました。

### 2. 24時間の相談相手

深夜でも早朝でも、いつでも相談できる相手がいるのは心強いです。

### 3. 生産性の向上

自分の思考スタイルを理解したAIからのアドバイスは、驚くほど的確です。

## まとめ

第二の自分は単なるツールではなく、自分自身を理解し、成長するためのパートナーなのです。`,
  publishedAt: '2024-01-01',
  updatedAt: '2024-07-11',
  category: 'benefits',
  readingTime: 8,
  tags: ['AI', 'ChatGPT', '自己理解', '生産性'],
  excerpt: '「自分を知らない人には聞かないよね」という例え話から始まる、AIパートナーの真の価値について',
}

const categoryLabels = {
  'introduction': 'はじめに',
  'story': 'ストーリー',
  'benefits': 'メリット',
  'technique': 'テクニック',
  'case-study': 'ケーススタディ',
  'advanced': 'アドバンス',
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: PageProps) {
  // 仮の実装（後でSanityから取得）
  if (!blogPost) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blogPost.title,
            "image": "https://masayamuko.com/og-image.png", // 記事ごとのOGP画像があればそれを指定
            "datePublished": blogPost.publishedAt,
            "dateModified": blogPost.updatedAt, // 更新日があれば別途指定
            "author": {
              "@type": "Person",
              "name": "Masaya",
              "url": "https://masayamuko.com/about" // 著者のプロフィールページURL
            },
            "publisher": {
              "@type": "Organization",
              "name": "Masaya",
              "logo": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" // サイトのロゴURL
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://masayamuko.com/blog/${params.slug}` // 記事の正規URL
            },
            "description": blogPost.excerpt,
            "keywords": blogPost.tags.join(", "),
            "articleBody": blogPost.content,
          }),
        }}
      />
      <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <nav className="text-sm text-gray-500 mb-4">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-blue-600 hover:underline">ホーム</Link>
                <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
              </li>
              <li className="flex items-center">
                <Link href="/blog" className="text-blue-600 hover:underline">ブログ</Link>
                <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
              </li>
              <li className="flex items-center">
                <span>{blogPost.title}</span>
              </li>
            </ol>
          </nav>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
              {categoryLabels[blogPost.category as keyof typeof categoryLabels]}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <time dateTime={blogPost.publishedAt}>
              公開日: {new Date(blogPost.publishedAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {blogPost.updatedAt && blogPost.updatedAt !== blogPost.publishedAt && (
              <time dateTime={blogPost.updatedAt}>
                更新日: {new Date(blogPost.updatedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
            <span>{blogPost.readingTime}分で読める</span>
          </div>
          {/* 著者情報を日付の下に移動 */}
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo_masaya.png" alt="著者アイコン" className="w-8 h-8 rounded-full border border-orange-300" />
            <span className="text-base font-semibold text-orange-800">Masaya</span>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            {blogPost.excerpt}
          </p>
        </header>

        {/* Content */}
        <article className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose-custom">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">{children}</h2>,
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-orange-700 mb-2 mt-6 border-b-4 border-orange-400 pb-1">
                    {children}
                  </h3>
                ),
                p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 mb-4">{children}</blockquote>,
                code: ({ children }) => <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm">{children}</code>,
                pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
              }}
            >
              {blogPost.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Tags */}
        {blogPost.tags && blogPost.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">タグ</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center">
            <a 
              href="/blog" 
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              ← ブログ一覧に戻る
            </a>
            
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                シェア
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                ブックマーク
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
} 