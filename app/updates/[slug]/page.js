import { newsItems } from '@/data/newsItems'
import BlogDetail from '@/components/BlogDetail'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const blog = newsItems.find((item) => item.slug === params.slug)

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

export default function BlogPostPage({ params }) {
  const blog = newsItems.find((item) => item.slug === params.slug)

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

