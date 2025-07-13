import { translations } from '@/constants/translations'
import { Lang, Translation } from '@/types'
import { logTranslationWarnings, getSafeTranslation } from '@/utils/translationValidator'

/**
 * Get translations for a specific language with strict type checking
 * @param lang - Language code ('ja' | 'en')
 * @returns Translation object for the specified language
 */
export function getTranslations(lang: string): Translation {
  const langKey = lang as Lang
  
  // Run validation warnings in development
  if (process.env.NODE_ENV === 'development') {
    logTranslationWarnings()
  }
  
  // Validate language key
  if (!translations[langKey]) {
    console.warn(`Translation for language '${lang}' not found, falling back to Japanese`)
    return translations.ja
  }
  
  return translations[langKey]
}

/**
 * Hook for accessing translations in client components with type safety
 * @param lang - Language code ('ja' | 'en')
 * @returns Translation object for the specified language
 */
export function useTranslations(lang: string): Translation {
  return getTranslations(lang)
}

/**
 * Type-safe translation key validator
 * @param translations - Translation object
 * @param key - Translation key path (e.g., 'common.backHome')
 * @returns boolean indicating if key exists
 */
export function hasTranslationKey(translations: Translation, key: string): boolean {
  const keys = key.split('.')
  let current: any = translations
  
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k]
    } else {
      return false
    }
  }
  
  return current !== undefined
}

/**
 * Safe translation getter with automatic fallback
 * @param lang - Language code
 * @param key - Translation key path
 * @param fallback - Optional fallback text
 * @returns Translation string with fallback protection
 */
export function getTranslationSafe(
  lang: string,
  key: string,
  fallback?: string
): string {
  return getSafeTranslation(lang as Lang, key, fallback)
}