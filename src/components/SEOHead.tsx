import { Metadata } from 'next'
import { Lang } from '@/types'
import { getTranslations } from '@/hooks/useTranslations'

interface SEOHeadProps {
  lang: Lang
  title?: string
  description?: string
  path?: string
  noindex?: boolean
}

/**
 * Generate comprehensive SEO metadata with multilingual support
 */
export function generateSEOMetadata({
  lang,
  title,
  description,
  path = '',
  noindex = false
}: SEOHeadProps): Metadata {
  const t = getTranslations(lang)
  
  const fullTitle = title 
    ? `${title} | ${t.title.default}`
    : t.title.default
  
  const metaDescription = description || t.description
  
  const baseUrl = 'https://masayamuko.com'
  const currentUrl = `${baseUrl}/${lang}${path}`
  
  // Generate alternate language URLs
  const alternateUrls = {
    'ja': `${baseUrl}/ja${path}`,
    'en': `${baseUrl}/en${path}`,
    'x-default': `${baseUrl}/ja${path}` // Default to Japanese
  }

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: t.keywords,
    authors: [{ name: 'Masaya', url: baseUrl }],
    creator: 'Masaya',
    publisher: 'Masaya',
    
    // Robots configuration
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical and alternate URLs
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: alternateUrls
    },
    
    // OpenGraph
    openGraph: {
      type: 'website',
      locale: t.openGraph.locale,
      url: currentUrl,
      siteName: t.title.default,
      title: fullTitle,
      description: metaDescription,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      creator: '@MasayaToAi',
      images: [`${baseUrl}/og-image.png`],
    },
    
    // Additional SEO enhancements
    verification: {
      google: 'ILlX4eEUK-2ItGJcXPKNyM8D_l4V2ZfDEQyHgcXtcWE',
    },
    
    // Format detection
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    
    // Language and region
    other: {
      'Content-Language': lang,
      'geo.region': lang === 'ja' ? 'JP-40' : 'US', // Fukuoka or US
      'geo.placename': lang === 'ja' ? 'Fukuoka' : 'United States',
    }
  }
}