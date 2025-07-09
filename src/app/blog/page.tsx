import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'src/posts');

function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      category: data.category || 'Blog',
      date: data.date || '',
      excerpt: content.substr(0, 120) + (content.length > 120 ? '...' : ''),
      image: data.image || '', // frontmatterにimageがあれば追加
    };
  });
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
        style={{
          height: "320px", // 必要に応じて調整
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1752078463/masan_dayo_AI_--ar_21_--profile_njfaa7d_--v_7_1091e879-2178-4ba6-b54e-c9254483d644_2_spq5e3.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center center",
        }}
      >
        <div className="text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
            BLOG
          </h1>
          <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border border-gray-100"
              >
                {/* サムネイル画像（frontmatterにimageがあれば） */}
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <time className="text-xs text-gray-400">{post.date}</time>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto inline-flex items-center text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    続きを読む
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 