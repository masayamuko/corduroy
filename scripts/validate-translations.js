#!/usr/bin/env node

const { validateTranslations } = require('../src/utils/translationValidator.ts')

console.log('🌐 Running Translation Validation...\n')

try {
  const result = validateTranslations()
  
  if (result.isValid) {
    console.log('✅ All translations are complete!')
    process.exit(0)
  } else {
    console.log('❌ Translation validation failed!\n')
    result.warnings.forEach(warning => console.log(warning))
    console.log(`\n📊 Summary: ${result.missing.length} missing translations found`)
    process.exit(1)
  }
} catch (error) {
  console.error('❌ Error running translation validation:', error)
  process.exit(1)
}