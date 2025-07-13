"use client"

import { useRouter, usePathname } from 'next/navigation'
import { Lang } from '@/types'
import { useTranslations } from '@/hooks/useTranslations'

interface LanguageSwitcherProps {
  currentLang: Lang
  className?: string
}

export default function LanguageSwitcher({ currentLang, className = '' }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations(currentLang)

  const switchLanguage = (newLang: Lang) => {
    // Extract current path without language prefix
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    
    // Navigate to new language version
    const newPath = `/${newLang}${currentPath}`
    router.push(newPath)
  }

  const languages = [
    { code: 'ja' as Lang, label: '日本語', flag: '🇯🇵' },
    { code: 'en' as Lang, label: 'English', flag: '🇺🇸' }
  ]

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`
              flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${currentLang === lang.code
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }
            `}
            aria-label={`Switch to ${lang.label}`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}