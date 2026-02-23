import { groq } from 'next-sanity'

// Get all news posts
export const newsPostsQuery = groq`
  *[_type == "newsPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    "category": category->title,
    country,
    mainImage,
    publishedAt,
    featured
  }
`

// Get single news post by slug
export const newsPostBySlugQuery = groq`
  *[_type == "newsPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    summary,
    "category": category->title,
    country,
    mainImage,
    body,
    publishedAt,
    featured
  }
`

// Get news posts by country
export const newsPostsByCountryQuery = groq`
  *[_type == "newsPost" && country == $country] | order(publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    "category": category->title,
    country,
    mainImage,
    publishedAt,
    featured
  }
`

// Get news posts by category
export const newsPostsByCategoryQuery = groq`
  *[_type == "newsPost" && category->title == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    "category": category->title,
    country,
    mainImage,
    publishedAt,
    featured
  }
`

// Get featured news posts
export const featuredNewsPostsQuery = groq`
  *[_type == "newsPost" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    summary,
    "category": category->title,
    country,
    mainImage,
    publishedAt,
    featured
  }
`

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`
