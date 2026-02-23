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
    return {
      title: `${sanityPost.title} - SGA Security Group`,
      description: sanityPost.summary,
      openGraph: {
        title: sanityPost.title,
        description: sanityPost.summary,
        images: sanityPost.mainImage ? [urlFor(sanityPost.mainImage).url()] : [],
      },
    }
  }

  // Fallback to local
  const blog = newsItems.find((item) => item.slug === slug)
  if (!blog) {
    return {
      title: 'Blog Post Not Found - SGA Security Group',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  return {
    title: `${blog.title} - SGA Security Group`,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      images: [blog.image],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  
  // Try Sanity first
  const sanityPost = await getNewsPostBySlug(slug)
  
  if (sanityPost) {
    return (
      <>
        <BlogDetail blog={sanityPost} />
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

