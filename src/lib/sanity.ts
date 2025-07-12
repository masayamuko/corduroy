import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2023-12-01',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Blog post queries with language support
export async function getAllBlogPosts(language: string = 'ja') {
  return sanityClient.fetch(`
    *[_type == "blogPost" && language == $language] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      readingTime,
      featured,
      tags,
      language,
      mainImage
    }
  `, { language })
}

export async function getBlogPost(slug: string, language: string = 'ja') {
  return sanityClient.fetch(`
    *[_type == "blogPost" && slug.current == $slug && language == $language][0] {
      _id,
      title,
      slug,
      content,
      excerpt,
      publishedAt,
      category,
      readingTime,
      featured,
      tags,
      language,
      mainImage,
      seo
    }
  `, { slug, language })
}

export async function getFeaturedBlogPosts(language: string = 'ja') {
  return sanityClient.fetch(`
    *[_type == "blogPost" && featured == true && language == $language] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      readingTime,
      featured,
      tags,
      language,
      mainImage
    }
  `, { language })
}

export async function getBlogPostsByCategory(category: string, language: string = 'ja') {
  return sanityClient.fetch(`
    *[_type == "blogPost" && category == $category && language == $language] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      readingTime,
      featured,
      tags,
      language,
      mainImage
    }
  `, { category, language })
}

export async function getAllCategories() {
  return sanityClient.fetch(`
    *[_type == "blogPost"] {
      category
    } | order(category asc)
  `)
}

// Types
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  content?: any[] // Sanity block content
  excerpt: string
  publishedAt: string
  category: string
  readingTime: number
  featured: boolean
  tags: string[]
  language: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
} 