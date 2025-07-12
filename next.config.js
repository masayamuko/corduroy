const isDev = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      // 旧ブログURLから新しい多言語URLへのリダイレクト
      {
        source: '/blog/:slug*',
        destination: '/ja/blog/:slug*',
        permanent: true, // 301リダイレクト (SEO重要)
      },
      // その他の旧URLパターンがあれば追加
      {
        source: '/about',
        destination: '/ja/about',
        permanent: true,
      },
      {
        source: '/events/:path*',
        destination: '/ja/events/:path*',
        permanent: true,
      },
      {
        source: '/projects/:path*',
        destination: '/ja/projects/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: *; font-src 'self'; connect-src 'self' vitals.vercel-insights.com;"
              : "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: *; font-src 'self'; connect-src 'self' vitals.vercel-insights.com;",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig