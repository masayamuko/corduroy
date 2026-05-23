// Site-wide constants. Single source of truth for naming/pricing/contact.
// 仮置き値は Masaya 確定次第差し替え。公開前に全項目見直し。

export const IS_PREVIEW = true;

export const SITE = {
  name: 'Corduroy外国人材サポート',
  tagline: '受け入れたあとが、見える。',
  subTagline: '福岡で、特定技能・インドネシア人材の受け入れを支える登録支援機関。',
  url: 'https://touroku-shien.example.com',
  locale: 'ja-JP',
} as const;

export const COMPANY = {
  legalName: '株式会社コールテン',
  tradeName: 'Corduroy外国人材サポート',
  registrationNumber: '登24登-XXXXXX', // 認可後に実番号差し替え
  representative: '向 雅哉',
  address: '福岡県福岡市中央区〇〇〇〇',
  phone: '092-XXX-XXXX',
  email: 'info@corduroy.co.jp',
  established: '2024年',
} as const;

export const PRICING = {
  monthly: 30000,
  initial: 50000,
  currency: 'JPY',
  unit: '/人・月',
} as const;

export const SOCIAL = {
  twitter: '',
  instagram: '',
  line: '',
} as const;

export const META_DEFAULTS = {
  ogImage: '/og-default.png',
  description: '福岡で、特定技能・インドネシア人材の受け入れを支える登録支援機関。受け入れたあとが、見える。',
} as const;
