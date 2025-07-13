export type Lang = 'ja' | 'en'

export interface MetaTranslation {
  title: {
    default: string
    template: string
  }
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    locale: string
  }
  twitter: {
    title: string
    description: string
  }
}

export interface CommonTranslation {
  backHome: string
  readMore: string
  viewDetails: string
  loading: string
  error: string
  fateMessage: string
  dmRequest: string
}

export interface NavigationTranslation {
  home: string
  about: string
  career: string
  works: string
  events: string
  blog: string
  community: string
  tools: string
  services: string
}

export interface Translation extends MetaTranslation {
  common: CommonTranslation
  nav: NavigationTranslation
}

export type Translations = Record<Lang, Translation>

export interface Post {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  image?: string
}

export interface PageProps {
  params: {
    lang: string
    slug?: string
  }
}

export interface BlogPageProps {
  params: {
    lang: string
  }
}

export interface BlogPostPageProps {
  params: {
    lang: string
    slug: string
  }
}