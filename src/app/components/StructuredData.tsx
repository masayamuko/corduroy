export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Masaya",
    "jobTitle": "AI活用サポーター・クリエイター",
    "description": "福岡を拠点に活動するAI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法で、個人に最適化されたAIアシスタントの構築を支援。3Dモデリング、国際交流、ボードゲーム制作など多岐にわたるクリエイティブ活動を通じて、人々の可能性を広げ、デジタル変革を推進します。",
    "url": "https://masayamuko.com",
    "image": "https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg",
    "sameAs": [
      "https://x.com/MasayaToAi"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "福岡市",
      "addressRegion": "福岡県",
      "addressCountry": "JP"
    },
    "knowsAbout": [
      "AI活用",
      "ChatGPT",
      "第二の自分",
      "AIアシスタント",
      "プロンプトエンジニアリング",
      "デジタル変革",
      "3Dモデリング",
      "ボードゲーム制作",
      "国際交流",
      "フリーランス支援",
      "AIコンサルティング"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Masaya - AI活用サポーター・クリエイター",
    "description": "福岡を拠点に活動するAI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法で、個人に最適化されたAIアシスタントの構築を支援。3Dモデリング、国際交流、ボードゲーム制作など多岐にわたるクリエイティブ活動を通じて、人々の可能性を広げ、デジタル変革を推進します。",

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Masaya",
    "url": "https://masayamuko.com",
    "logo": "https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg",
    "description": "AI活用支援とクリエイティブ活動を通じて、人々の可能性を広げ、デジタル変革を推進する活動を展開",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "福岡市",
      "addressRegion": "福岡県",
      "addressCountry": "JP"
    },
    "founder": {
      "@type": "Person",
      "name": "Masaya"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  )
} 