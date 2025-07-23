/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'res.cloudinary.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // 削除されたブログ記事のリダイレクト
      {
        source: '/blog/old-article-1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/old-article-2',
        destination: '/blog',
        permanent: true,
      },
      // 古いURLパターンのリダイレクト
      {
        source: '/posts/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/article/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      // カテゴリページのリダイレクト
      {
        source: '/category/:category',
        destination: '/blog',
        permanent: true,
      },
      // タグページのリダイレクト
      {
        source: '/tag/:tag',
        destination: '/blog',
        permanent: true,
      },
      // 日付ベースのアーカイブページ
      {
        source: '/:year/:month/:day/:slug',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/:year/:month/:slug',
        destination: '/blog',
        permanent: true,
      },
      // 古いドメインからのリダイレクト（もし存在する場合）
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'old-domain.com',
          },
        ],
        destination: 'https://masayamuko.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 