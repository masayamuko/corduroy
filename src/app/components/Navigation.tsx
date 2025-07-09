"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ - ミニマル */}
          <Link href="/" className="group flex items-center">
            <Image src="/logo_masaya.png" alt="MASAYAロゴ" width={120} height={40} priority className="h-10 w-auto mr-2" />
          </Link>
          
          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="nav-link">Home</Link>
            <button 
              onClick={() => {
                if (window.location.pathname === '/') {
                  const element = document.getElementById('masaya-characteristics')
                  if (element) {
                    const navHeight = 80
                    const elementPosition = element.offsetTop - navHeight - 20
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    })
                  }
                } else {
                  window.location.href = '/#masaya-characteristics'
                }
              }}
              className="nav-link"
            >
              About
            </button>
            <button 
              onClick={() => {
                if (window.location.pathname === '/') {
                  const element = document.getElementById('works')
                  if (element) {
                    const navHeight = 80
                    const elementPosition = element.offsetTop - navHeight - 20
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    })
                  }
                } else {
                  window.location.href = '/#works'
                }
              }}
              className="nav-link"
            >
              Works
            </button>
            <Link href="/events" className="nav-link">Events</Link>
            <a 
              href="https://www.masayamuko.com/blog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              Blog
            </a>
          </div>
          
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button className="text-black hover:opacity-70 transition-opacity duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} // Updated with EVENTS link
