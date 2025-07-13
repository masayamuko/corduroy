import { translations } from '@/constants/translations'
import { Lang, Translation } from '@/types'

interface MissingTranslation {
  key: string
  language: Lang
  path: string[]
}

interface ValidationResult {
  isValid: boolean
  missing: MissingTranslation[]
  warnings: string[]
}

/**
 * Deep comparison of translation objects to find missing keys
 */
function findMissingKeys(
  obj1: any,
  obj2: any,
  currentPath: string[] = [],
  language: Lang
): MissingTranslation[] {
  const missing: MissingTranslation[] = []

  if (typeof obj1 === 'object' && obj1 !== null) {
    for (const key in obj1) {
      const newPath = [...currentPath, key]
      const pathString = newPath.join('.')

      if (!(key in obj2)) {
        missing.push({
          key: pathString,
          language,
          path: newPath
        })
      } else if (typeof obj1[key] === 'object' && obj1[key] !== null) {
        missing.push(...findMissingKeys(obj1[key], obj2[key], newPath, language))
      }
    }
  }

  return missing
}

/**
 * Validate that all translation keys exist in both languages
 */
export function validateTranslations(): ValidationResult {
  const warnings: string[] = []
  const allMissing: MissingTranslation[] = []

  // Check Japanese -> English completeness
  const missingInEnglish = findMissingKeys(
    translations.ja,
    translations.en,
    [],
    'en'
  )

  // Check English -> Japanese completeness
  const missingInJapanese = findMissingKeys(
    translations.en,
    translations.ja,
    [],
    'ja'
  )

  allMissing.push(...missingInEnglish, ...missingInJapanese)

  // Generate warnings
  if (missingInEnglish.length > 0) {
    warnings.push(`Missing ${missingInEnglish.length} translations in English`)
    missingInEnglish.forEach(missing => {
      warnings.push(`  ❌ EN: ${missing.key}`)
    })
  }

  if (missingInJapanese.length > 0) {
    warnings.push(`Missing ${missingInJapanese.length} translations in Japanese`)
    missingInJapanese.forEach(missing => {
      warnings.push(`  ❌ JA: ${missing.key}`)
    })
  }

  const isValid = allMissing.length === 0

  if (isValid) {
    warnings.push('✅ All translations are complete!')
  }

  return {
    isValid,
    missing: allMissing,
    warnings
  }
}

/**
 * Check if a specific translation key exists in all languages
 */
export function hasTranslationKey(key: string): { ja: boolean; en: boolean } {
  const keys = key.split('.')
  
  const checkPath = (obj: any, path: string[]): boolean => {
    let current = obj
    for (const k of path) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k]
      } else {
        return false
      }
    }
    return current !== undefined
  }

  return {
    ja: checkPath(translations.ja, keys),
    en: checkPath(translations.en, keys)
  }
}

/**
 * Development warning system - only logs in development mode
 */
export function logTranslationWarnings(): void {
  if (process.env.NODE_ENV === 'development') {
    const validation = validateTranslations()
    
    if (!validation.isValid) {
      console.group('🌐 Translation Validation Warnings')
      validation.warnings.forEach(warning => console.warn(warning))
      console.groupEnd()
    } else {
      console.log('✅ All translations validated successfully')
    }
  }
}

/**
 * Production-safe translation getter with fallback
 */
export function getSafeTranslation(
  lang: Lang,
  key: string,
  fallback?: string
): string {
  const keys = key.split('.')
  let current: any = translations[lang]
  
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k]
    } else {
      // Log missing translation in development
      if (process.env.NODE_ENV === 'development') {
        console.warn(`🌐 Missing translation: ${lang}.${key}`)
      }
      
      // Try fallback to other language
      if (lang === 'en') {
        return getSafeTranslation('ja', key, fallback) || fallback || `[${key}]`
      } else {
        return getSafeTranslation('en', key, fallback) || fallback || `[${key}]`
      }
    }
  }
  
  return typeof current === 'string' ? current : fallback || `[${key}]`
}