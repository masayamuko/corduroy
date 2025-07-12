const isDev = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
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