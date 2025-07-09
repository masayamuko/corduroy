import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    title: data.title || slug,
    category: data.category || 'Blog',
    date: data.date || '',
    author: data.author || '',
    contentHtml,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.id);
  if (!post) notFound();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 border border-orange-200">
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center text-orange-700 hover:text-orange-900 mb-4">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ブログ一覧に戻る
            </Link>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block bg-orange-300 text-orange-900 text-sm font-semibold px-3 py-1 rounded">
                {post.category || 'Blog'}
              </span>
              <time className="text-sm text-orange-700">{post.date || ''}</time>
            </div>
            {/* 記事タイトル（h1）は1つだけ、中央寄せ・グラデーション背景・白文字・影・大きめ */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center py-6 px-4 mb-8 rounded-xl shadow-lg bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 drop-shadow-lg tracking-tight">
              {post.title}
            </h1>
            {post.author && (
              <div className="flex items-center gap-3 mb-4 justify-center">
                <img src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" alt="著者アイコン" className="w-10 h-10 rounded-full object-cover border border-orange-200 shadow" />
                <span className="text-black">著者: {post.author}</span>
              </div>
            )}
          </div>
          <div className="prose prose-lg max-w-none text-black
            prose-h2:bg-orange-500 prose-h2:text-white prose-h2:rounded-lg prose-h2:px-4 prose-h2:py-2 prose-h2:mb-4 prose-h2:mt-8 prose-h2:shadow-sm
            prose-h3:text-black prose-h3:border-b-4 prose-h3:border-orange-300 prose-h3:pb-1 prose-h3:mb-4 prose-h3:mt-8 prose-h3:font-bold prose-h3:text-lg
          " dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <div className="mt-8 pt-6 border-t border-orange-200">
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-orange-200 text-orange-900 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-200">
              他の記事を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 