"use client"

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function Footer() {
  const params = useParams()
  const lang = (params?.lang as string) || 'ja'
  const pathname = usePathname()

  const handleScrollToSection = (sectionId: string) => {
    if (pathname === `/${lang}`) {
      const element = document.getElementById(sectionId)
      if (element) {
        const navHeight = 80 // ナビゲーションバーの高さ
        const elementPosition = element.offsetTop - navHeight - 20 // 少し余裕を持たせる
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    } else {
      window.location.href = `/${lang}#${sectionId}`
    }
  }

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
            <h4 className="text-base mb-4 text-white">MENU</h4>
            <div className="flex flex-col gap-2">
              <Link href={`/${lang}`} className="text-gray-300 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <button 
                onClick={() => handleScrollToSection('masaya-characteristics')}
                className="text-gray-300 hover:text-white text-sm transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleScrollToSection('works')}
                className="text-gray-300 hover:text-white text-sm transition-colors text-left"
              >
                Works
              </button>
              <Link href={`/${lang}/events`} className="text-gray-300 hover:text-white text-sm transition-colors">
                Events
              </Link>
              <Link href={`/${lang}/blog`} className="text-gray-300 hover:text-white text-sm transition-colors">
                Blog
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