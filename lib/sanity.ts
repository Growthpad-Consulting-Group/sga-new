import { client } from '@/sanity/lib/client'
import {
  newsPostsQuery,
  newsPostBySlugQuery,
  newsPostsByCountryQuery,
  newsPostsByCategoryQuery,
  featuredNewsPostsQuery,
  categoriesQuery,
} from '@/sanity/lib/queries'

export interface NewsPost {
  _id: string
  title: string
  slug: { current: string }
  summary: string
  category: string
  country: string
  mainImage: any
  body?: any
  publishedAt: string
  featured: boolean
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
}

// Fetch all news posts
export async function getAllNewsPosts(): Promise<NewsPost[]> {
  return await client.fetch(newsPostsQuery)
}

// Fetch single news post by slug
export async function getNewsPostBySlug(slug: string): Promise<NewsPost | null> {
  return await client.fetch(newsPostBySlugQuery, { slug })
}

// Fetch news posts by country
export async function getNewsPostsByCountry(country: string): Promise<NewsPost[]> {
  return await client.fetch(newsPostsByCountryQuery, { country })
}

// Fetch news posts by category
export async function getNewsPostsByCategory(category: string): Promise<NewsPost[]> {
  return await client.fetch(newsPostsByCategoryQuery, { category })
}

// Fetch featured news posts
export async function getFeaturedNewsPosts(): Promise<NewsPost[]> {
  return await client.fetch(featuredNewsPostsQuery)
}

// Fetch all categories
export async function getAllCategories(): Promise<Category[]> {
  return await client.fetch(categoriesQuery)
}
