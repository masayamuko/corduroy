"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const params = useParams()
  const lang = (params?.lang as string) || 'ja'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let pathname: string | null = null
  
  try {
    pathname = usePathname()
  } catch (error) {
    // Server side rendering時やエラー時は無視
    pathname = `/${lang}`
  }
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ - ミニマル */}
          <Link href={`/${lang}`} className="group flex items-center">
            <Image src="/logo_masaya.png" alt="MASAYAロゴ" width={120} height={40} priority className="w-auto h-auto mr-2" style={{ height: '40px', width: 'auto' }} />
          </Link>
          
          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href={`/${lang}`} className="nav-link">Home</Link>
            <button 
              onClick={() => {
                if (pathname === `/${lang}`) {
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
                  window.location.href = `/${lang}#masaya-characteristics`
                }
              }}
              className="nav-link"
            >
              About
            </button>
            <button 
              onClick={() => {
                if (pathname === `/${lang}`) {
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
                  window.location.href = `/${lang}#works`
                }
              }}
              className="nav-link"
            >
              Works
            </button>
            <Link href={`/${lang}/events`} className="nav-link">Events</Link>
            <Link href={`/${lang}/blog`} className="nav-link">Blog</Link>
          </div>
          
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:opacity-70 transition-opacity duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <Link 
                href={`/${lang}`} 
                className="block text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  if (pathname === `/${lang}`) {
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
                    window.location.href = `/${lang}#masaya-characteristics`
                  }
                }}
                className="block text-gray-700 hover:text-blue-600 py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  if (pathname === `/${lang}`) {
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
                    window.location.href = `/${lang}#works`
                  }
                }}
                className="block text-gray-700 hover:text-blue-600 py-2 text-left"
              >
                Works
              </button>
              <Link 
                href={`/${lang}/events`} 
                className="block text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href={`/${lang}/blog`} 
                className="block text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
