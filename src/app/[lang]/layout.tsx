import './globals.css'
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
          alt: "masaya official site - AI活用サポーター・クリエイター",
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

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
