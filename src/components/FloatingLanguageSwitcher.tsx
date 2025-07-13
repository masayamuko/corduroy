"use client"

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Lang } from '@/types'

interface FloatingLanguageSwitcherProps {
  currentLang: Lang
}

export default function FloatingLanguageSwitcher({ currentLang }: FloatingLanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: Lang) => {
    // Extract current path without language prefix
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    
    // Navigate to new language version
    const newPath = `/${newLang}${currentPath}`
    router.push(newPath)
    setIsOpen(false)
  }

  const languages = [
    { code: 'ja' as Lang, label: '日本語', flag: '🇯🇵', shortLabel: 'JP' },
    { code: 'en' as Lang, label: 'English', flag: '🇺🇸', shortLabel: 'EN' }
  ]

  const currentLanguage = languages.find(lang => lang.code === currentLang)
  const otherLanguages = languages.filter(lang => lang.code !== currentLang)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Main toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center w-14 h-14 rounded-full shadow-lg
            bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
            text-white transition-all duration-300 hover:scale-110
            ${isOpen ? 'rotate-180' : ''}
          `}
          aria-label="Language switcher"
        >
          <span className="text-xl">{currentLanguage?.flag}</span>
        </button>

        {/* Language options */}
        <div className={`
          absolute bottom-16 right-0 transition-all duration-300 transform origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
        `}>
          <div className="flex flex-col space-y-2">
            {otherLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className="
                  flex items-center justify-center w-12 h-12 rounded-full shadow-md
                  bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300
                  transition-all duration-200 hover:scale-105
                "
                aria-label={`Switch to ${lang.label}`}
              >
                <span className="text-lg">{lang.flag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Backdrop to close menu */}
        {isOpen && (
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  )
}