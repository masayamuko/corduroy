import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from './components/Navigation'
import LanguageSwitcher from './components/LanguageSwitcher'
import StructuredData from './components/StructuredData'
import GoogleAnalytics from './components/GoogleAnalytics'
import AnalyticsDebug from './components/AnalyticsDebug'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

import { Metadata } from 'next'

// 翻訳データ（仮）
const translations = {
  ja: {
    title: {
      default: "masaya official site",
      template: '%s | masaya official site'
    },
    description: '福岡を拠点に活動するAI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法で、個人に最適化されたAIアシスタントの構築を支援。3Dモデリング、国際交流、ボードゲーム制作など多岐にわたるクリエイティブ活動を通じて、人々の可能性を広げ、デジタル変革を推進します。',
    keywords: ['AI活用', 'ChatGPT', '第二の自分', 'AIアシスタント', 'プロンプトエンジニアリング', 'デジタル変革', '3Dモデリング', '福岡', 'フリーランス', 'ADHD', 'ボードゲーム制作', '国際交流', 'AIコンサルティング'],
    openGraph: {
      title: "masaya official site",
      description: 'AI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法を開発。福岡でAI活用支援とクリエイティブ活動を展開。',
      locale: 'ja_JP',
    },
    twitter: {
      title: "masaya official site",
      description: 'AI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法を開発。福岡でAI活用支援とクリエイティブ活動を展開。',
    },
  },
  en: {
    title: {
      default: "Masaya Official Site",
      template: '%s | Masaya Official Site'
    },
    description: 'AI utilization supporter and creator based in Fukuoka. Developed a unique method to train ChatGPT as a "second self," supporting personalized AI assistant building. Expanding human potential through 3D modeling, international exchange, and board game creation, driving digital transformation.',
    keywords: ['AI utilization', 'ChatGPT', 'Second Self', 'AI assistant', 'Prompt Engineering', 'Digital Transformation', '3D modeling', 'Fukuoka', 'Freelance', 'ADHD', 'Board Game Creation', 'International Exchange', 'AI Consulting'],
    openGraph: {
      title: "Masaya Official Site",
      description: 'AI utilization supporter and creator. Developed a unique method to train ChatGPT as a "second self." Supporting AI utilization and creative activities in Fukuoka.',
      locale: 'en_US',
    },
    twitter: {
      title: "Masaya Official Site",
      description: 'AI utilization supporter and creator. Developed a unique method to train ChatGPT as a "second self." Supporting AI utilization and creative activities in Fukuoka.',
    },
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang as keyof typeof translations;
  const t = translations[lang] || translations.ja; // デフォルトは日本語

  return {
    title: t.title,
    manifest: '/manifest.json',
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: 'Masaya', url: 'https://masayamuko.com' }],
    creator: 'Masaya',
    publisher: 'Masaya',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://masayamuko.com'),
    alternates: {
      canonical: 'https://masayamuko.com',
    },
    openGraph: {
      title: t.openGraph.title,
      description: t.openGraph.description,
      url: 'https://masayamuko.com',
      siteName: 'Masaya',
      locale: t.openGraph.locale,
      type: 'website',
      images: [
        {
          url: 'https://masayamuko.com/og-image.png',
          width: 1200,
          height: 630,
          alt: "masaya official site - AI活用サポーター・クリエイター", // 画像のaltは言語に依存しない場合が多い
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.twitter.title,
      description: t.twitter.description,
      creator: '@MasayaToAi',
      images: ['https://masayamuko.com/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'ILlX4eEUK-2ItGJcXPKNyM8D_l4V2ZfDEQyHgcXtcWE',
    },
  };
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  return (
    <html lang={lang} className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <GoogleAnalytics />
        <AnalyticsDebug />
        <Navigation />
        <LanguageSwitcher />
        
        {/* メインコンテンツ */}
        <main className="pt-20">
          {children}
        </main>

        {/* ミニマルフッター */}
        <footer className="section bg-black text-white">
          <div className="container-wide">
            <div className="space-y-16">
              {/* メインフッターコンテンツ */}
              <div className="grid-2col">
                {/* 左: ブランドとメッセージ */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                      Let's create<br />
                      something amazing<br />
                      together.
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                      AI技術とクリエイティビティで、<br />
                      新しい可能性を探求しています。
                    </p>
                  </div>
                  
                  <a 
                    href="https://x.com/MasayaToAi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Get in Touch
                  </a>
                </div>
                
                {/* 右: ナビゲーションリンク */}
                <div className="flex justify-end">
                  <div className="space-y-6">
                    <h4 className="text-sm tracking-wider text-gray-500 uppercase">Navigation</h4>
                    <ul className="space-y-4">
                      <li><Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">Home</Link></li>
                      <li><Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-300">About</Link></li>
                      <li><Link href="/#works" className="text-white hover:text-gray-300 transition-colors duration-300">Works</Link></li>
                      <li><Link href="/events" className="text-white hover:text-gray-300 transition-colors duration-300">Events</Link></li>
                      <li><a href="https://www.masayamuko.com/blog" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">Blog</a></li>
                      <li><Link href="/faq" className="text-white hover:text-gray-300 transition-colors duration-300">よくある質問</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* ボトムライン */}
              <div className="border-t border-gray-800 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-6 text-gray-400 text-sm">
                    <span>&copy; 2024 Masaya</span>
                    <span>•</span>
                    <span>Based in Fukuoka, Japan</span>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <a 
                      href="https://x.com/MasayaToAi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  )
} 