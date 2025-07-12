import { notFound } from 'next/navigation'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

interface PageProps {
  params: {
    lang: string;
    slug: string;
  };
}

// 動的ルートを強制的に有効化
export const dynamicParams = true;

export default function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = params;

  const filePath = path.join(process.cwd(), 'src', 'posts', lang, `${slug}.md`);

  let fileContents;
  try {
    fileContents = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    notFound();
  }

  const { data, content } = matter(fileContents);

  // タグの処理
  const tags = data.tags || ['ブログ', 'AI活用'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずナビ */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href={`/${lang}`} className="hover:text-gray-900">
              ホーム
            </Link>
            <span>/</span>
            <Link href={`/${lang}/blog`} className="hover:text-gray-900">
              ブログ
            </Link>
            <span>/</span>
            <span className="text-gray-900">{data.title || '記事'}</span>
          </nav>

          {/* ヘッダー */}
          <header className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {data.category || 'ブログ'}
              </span>
              <time className="text-gray-500">{data.date || '日付不明'}</time>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {data.title || 'タイトルなし'}
            </h1>

            {/* 著者情報 */}
            <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
              <img
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg"
                alt="Masaya"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">Masaya</p>
                <a
                  href="https://x.com/MasayaToAi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @MasayaToAi
                </a>
              </div>
            </div>

            {/* 記事の概要 */}
            {data.excerpt && (
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed">{data.excerpt}</p>
              </div>
            )}
          </header>

          {/* メインコンテンツ */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <div className="prose prose-lg prose-gray max-w-none" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif' }}>
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => null,
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold text-white bg-orange-600 px-4 py-3 mt-10 mb-6 rounded-md shadow-sm" style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-bold text-orange-700 mt-8 mb-4 pb-2 border-b-2 border-orange-300" style={{ fontSize: '1.125rem', lineHeight: '1.4' }}>
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-800 text-base leading-relaxed mb-6" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2 ml-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-800 mb-6 space-y-2 ml-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="leading-relaxed mb-1" style={{ lineHeight: '1.6' }}>{children}</li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-600 my-6 bg-gray-50 py-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
                        {children}
                      </pre>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-blue-600 hover:text-blue-800 underline"
                        target={href?.startsWith('http') ? '_blank' : undefined}
                        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {children}
                      </a>
                    ),
                    img: ({ src, alt }) => (
                      <img
                        src={src}
                        alt={alt}
                        className="w-full rounded-lg shadow-md my-6"
                      />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </article>

          {/* タグ */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 記事最後のメッセージ */}
          <div className="mt-12 mb-8">
            <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-lg border border-orange-200">
              <img
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg"
                alt="Masaya"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="relative bg-white p-4 rounded-lg shadow-sm border border-orange-300 flex-1">
                {/* 吹き出しの三角 */}
                <div className="absolute left-0 top-4 transform -translate-x-2">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-white border-b-[8px] border-b-transparent"></div>
                  <div className="absolute w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-orange-300 border-b-[8px] border-b-transparent -translate-x-[1px]"></div>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  この記事が少しでも参考になったら、ぜひXでシェアや感想の引用リツイートいただけると嬉しいです！
                </p>
                <div className="mt-3">
                  <a
                    href="https://x.com/MasayaToAi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-800 text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    @MasayaToAi
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <Link
                href={`/${lang}/blog`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                ブログ一覧に戻る
              </Link>

              <div className="flex items-center space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  シェア
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  ブックマーク
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}