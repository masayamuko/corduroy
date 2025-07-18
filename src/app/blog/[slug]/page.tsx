import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map(post => ({ slug: post.params.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: '記事が見つかりません',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* ヘッダー部分 */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-sm opacity-90">
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="text-sm opacity-90 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                  📖 {post.readingTime}分で読める
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center mt-8">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                    alt="Masaya Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm opacity-80">AI活用サポーター</p>
                </div>
              </div>
            </div>
          </div>

          {/* タグ */}
          {post.tags.length > 0 && (
            <div className="px-8 py-6 bg-gray-50 border-b">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 記事本文 */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12 first:mt-0 border-b-2 border-slate-300 pb-4">
                      {children}
                    </h1>
                  ),
                                      h2: ({ children }) => (
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-10 first:mt-0 bg-slate-700 px-6 py-3 rounded-lg">
                        {children}
                      </h2>
                    ),
                                                          h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 mt-8 first:mt-0 bg-slate-100 px-4 py-2 rounded-lg">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 mt-6 first:mt-0">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 text-lg">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2 text-lg">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 leading-relaxed">
                      {children}
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-gray-900 bg-yellow-100 px-2 py-1 rounded">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-800 underline decoration-slate-400 decoration-2">
                      {children}
                    </em>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-slate-400 pl-6 py-4 my-8 bg-slate-50 italic text-gray-700 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className
                    if (isInline) {
                      return (
                        <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm font-mono border border-gray-200">
                          {children}
                        </code>
                      )
                    }
                    return (
                      <code className="block bg-gray-100 text-gray-800 p-6 rounded-xl text-sm font-mono overflow-x-auto border border-gray-200">
                        {children}
                      </code>
                    )
                  },
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 p-6 rounded-xl overflow-x-auto mb-6 border border-gray-200">
                      {children}
                    </pre>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* フッター */}
          <div className="px-8 py-8 bg-gray-50 border-t">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-8">
              <div className="flex items-center space-x-6">
                <span className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                  📅 公開日: {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                </span>
                <span className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                  ⏱️ 読了時間: {post.readingTime}分
                </span>
              </div>
              <div className="flex space-x-3">
                <a 
                  href={`https://x.com/intent/tweet?text=${encodeURIComponent(`${post.title} - ${post.excerpt}`)}&url=${encodeURIComponent(`https://masayamuko.com/blog/${post.slug}`)}&via=masayatoai`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-700 transition-colors duration-300 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Xでシェア</span>
                </a>
              </div>
            </div>
            
            {/* 感謝メッセージ */}
            <div className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                  alt="Masaya Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="relative bg-slate-100 rounded-2xl p-4 shadow-sm">
                <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-slate-100"></div>
                <p className="text-gray-700 font-medium">
                  最後まで読んでくれてありがとうございます！
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
