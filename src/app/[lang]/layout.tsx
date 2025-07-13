import './globals.css'
import { Metadata } from 'next'
import { translations } from '@/constants/translations'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const langKey = lang as keyof typeof translations;
  const t = translations[langKey] || translations.ja; // デフォルトは日本語

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
          alt: "Masaya Official Site - AI活用サポーター・クリエイター",
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
