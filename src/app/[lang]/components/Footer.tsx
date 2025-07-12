"use client"

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Footer() {
  const params = useParams()
  const lang = (params?.lang as string) || 'ja'

  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 text-white">Masaya</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              AI活用サポーター・クリエイター<br/>
              福岡を拠点に活動しています
            </p>
          </div>
          <div>
            <h4 className="text-base mb-4 text-white">ナビゲーション</h4>
            <div className="flex flex-col gap-2">
              <Link href={`/${lang}`} className="text-gray-300 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href={`/${lang}/blog`} className="text-gray-300 hover:text-white text-sm transition-colors">
                Blog
              </Link>
              <Link href={`/${lang}/about`} className="text-gray-300 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href={`/${lang}/events`} className="text-gray-300 hover:text-white text-sm transition-colors">
                Events
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-base mb-4 text-white">SNS</h4>
            <a 
              href="https://x.com/MasayaToAi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              X (Twitter)
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-5 text-center text-gray-400 text-xs">
          <p>&copy; 2025 Masaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}