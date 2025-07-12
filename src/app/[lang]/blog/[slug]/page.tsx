import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getBlogPost, getAllBlogPosts, urlFor, BlogPost } from '@/lib/sanity'

// generateStaticParams: ビルド時に生成するパスを定義
export async function generateStaticParams() {
  const locales = ['ja', 'en'];
  const paths: { lang: string; slug: string }[] = [];

  for (const lang of locales) {
    const posts: BlogPost[] = await getAllBlogPosts(lang);
    for (const post of posts) {
      paths.push({ 
        lang, 
        slug: post.slug.current 
      });
    }
  }
  return paths;
}

interface PageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = params;

  const blogPost: BlogPost | null = await getBlogPost(slug, lang);

  if (!blogPost) {
    notFound();
  }

  const categoryLabels: { [key: string]: string } = {
    'introduction': 'はじめに',
    'story': 'ストーリー',
    'benefits': 'メリット',
    'technique': 'テクニック',
    'case-study': 'ケーススタディ',
    'advanced': 'アドバンス',
    'uncategorized': '未分類',
    'AI活用': 'AI活用',
    'Blog': 'ブログ',
    'Travel': '旅行',
    'Life': 'ライフ',
    'Tech': 'テック',
  };

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
            "dateModified": blogPost.updatedAt,
            "author": {
              "@type": "Person",
              "name": "Masaya",
              "url": "https://masayamuko.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Masaya",
              "logo": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://masayamuko.com/${lang}/blog/${slug}`
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
                  <Link href={`/${lang}`} className="text-blue-600 hover:underline">ホーム</Link>
                  <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                </li>
                <li className="flex items-center">
                  <Link href={`/${lang}/blog`} className="text-blue-600 hover:underline">ブログ</Link>
                  <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                </li>
                <li className="flex items-center">
                  <span>{blogPost.title}</span>
                </li>
              </ol>
            </nav>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
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
              <span>{blogPost.readingTime}分で読める</span>
            </div>
            {/* 著者情報を日付の下に移動 */}
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo_masaya.png" alt="著者アイコン" className="w-8 h-8 rounded-full border border-orange-300" />
              <span className="text-base font-semibold text-orange-800">Masaya</span>
            </div>

            {blogPost.excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed">
                {blogPost.excerpt}
              </p>
            )}
          </header>

          {/* Content */}
          <article className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:text-gray-800 prose-h2:mt-8 prose-h3:text-xl prose-h3:text-orange-700 prose-h3:border-b-4 prose-h3:border-orange-400 prose-h3:pb-1 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:italic prose-blockquote:text-gray-600 prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-100 prose-pre:rounded-lg">
              {blogPost.content && (
                <PortableText
                  value={blogPost.content}
                  components={{
                    types: {
                      image: ({ value }) => (
                        <img
                          src={urlFor(value).width(800).url()}
                          alt={value.alt || '記事の画像'}
                          className="w-full h-auto rounded-lg my-6"
                        />
                      ),
                      code: ({ value }) => (
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                          <code className={`language-${value.language || 'text'}`}>
                            {value.code}
                          </code>
                        </pre>
                      ),
                    },
                    marks: {
                      link: ({ children, value }) => (
                        <a 
                          href={value.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 underline"
                        >
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              )}
            </div>
          </article>

          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">タグ</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag: string, index: number) => (
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
                href={`/${lang}/blog`}
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                ← ブログ一覧に戻る
              </a>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
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
    </>
  );
}