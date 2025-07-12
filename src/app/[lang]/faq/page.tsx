import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'よくある質問',
  description: 'AI活用、ChatGPT、「第二の自分」育成、3Dモデリング、ボードゲーム制作に関するよくある質問とその回答です。',
}

export default function FAQPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "「第二の自分」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "「第二の自分」とは、ChatGPTなどのAIを、あなたの思考パターンや価値観、知識を学習させた「あなた専用のAIアシスタント」として育成する独自の手法です。これにより、アイデア発想、情報整理、意思決定のサポートなど、多岐にわたる場面であなたの強力なパートナーとなります。"
        }
      },
      {
        "@type": "Question",
        "name": "AI活用サポーターとしてどのような支援を提供していますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "個人や企業向けに、ChatGPTをはじめとするAIツールの導入支援、プロンプトエンジニアリングの指導、「第二の自分」育成コンサルティング、AIを活用した業務効率化の提案など、実践的なAI活用をサポートしています。"
        }
      },
      {
        "@type": "Question",
        "name": "3Dモデリングやボードゲーム制作も行っているのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、AI活用支援と並行して、3Dモデリングやボードゲーム制作といったクリエイティブ活動も行っています。これらの活動を通じて、AIとクリエイティビティの融合による新しい可能性を探求し、実践的な知見をAI活用支援にも活かしています。"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <div className="min-h-screen bg-gray-50 py-12 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">よくある質問</h1>

          <div className="space-y-8">
            {faqData.mainEntity.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Q: {item.name}</h2>
                <p className="text-gray-700 leading-relaxed">A: {item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
