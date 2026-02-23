import { newsItems } from '@/data/newsItems'
import BlogDetail from '@/components/BlogDetail'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { notFound } from 'next/navigation'
import { getAllNewsPosts, getNewsPostBySlug } from '@/lib/sanity'
import { urlFor } from '@/sanity/lib/image'

export async function generateStaticParams() {
  const sanityPosts = await getAllNewsPosts()
  const sanitySlugs = sanityPosts.map((post) => ({
    slug: post.slug.current,
  }))
  
  const localSlugs = newsItems.map((item) => ({
    slug: item.slug,
  }))

  return [...sanitySlugs, ...localSlugs]
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  
  // Try Sanity first
  const sanityPost = await getNewsPostBySlug(slug)
  if (sanityPost) {
    const seo = sanityPost.seo || {}
    const title = seo.metaTitle || `${sanityPost.title} - SGA Security Group`
    const description = seo.metaDescription || sanityPost.summary
    const keywords = seo.keywords || []

    return {
      title,
      description,
      keywords: keywords.join(', '),
      openGraph: {
        title: title,
        description: description,
        images: sanityPost.mainImage ? [urlFor(sanityPost.mainImage).url()] : [],
      },
    }
  }

  // Fallback to local
  const blog = newsItems.find((item) => item.slug === slug)
  if (!blog) {
    return {
      title: 'News Article Not Found - SGA Security Group',
      description: 'The news article you are looking for does not exist.',
    }
  }

  return {
    title: `${blog.title} - SGA Security Group - News & Insights`,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      images: [blog.image],
    },
  }
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params
  
  // Try Sanity first
  const sanityPost = await getNewsPostBySlug(slug)
  
  if (sanityPost) {
    const allPosts = await getAllNewsPosts()
    const relatedPosts = allPosts.filter(p => p.slug.current !== slug).slice(0, 3)
    
    return (
      <>
        <BlogDetail blog={sanityPost} relatedPosts={relatedPosts} />
        <FloatingWhatsApp />
      </>
    )
  }

  // Fallback to local
  const blog = newsItems.find((item) => item.slug === slug)

  if (!blog) {
    notFound()
  }

  return (
    <>
      <BlogDetail blog={blog} />
      <FloatingWhatsApp />
    </>
  )
}

