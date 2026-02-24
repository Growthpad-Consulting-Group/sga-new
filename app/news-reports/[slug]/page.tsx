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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    // Try Sanity first
    const sanityPost = await getNewsPostBySlug(slug)
    if (sanityPost) {
        const seo = sanityPost.seo || {}
        const title = seo.metaTitle || `${sanityPost.title} - SGA Security Group`
        const description = seo.metaDescription || sanityPost.summary
        const keywords = (seo as any).keywords || []

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

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    // Try Sanity first
    const sanityPost = await getNewsPostBySlug(slug)

    if (sanityPost) {
        const allPosts = await getAllNewsPosts()

        // Intelligent Related Posts Scoring
        const relatedPosts = allPosts
            .filter(p => p.slug.current !== slug)
            .map(p => {
                let score = 0;
                if (p.category === sanityPost.category) score += 10;
                if (p.country === sanityPost.country) score += 5;
                return { ...p, score };
            })
            .sort((a: any, b: any) => {
                if (b.score !== a.score) return b.score - a.score;
                return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
            })
            .slice(0, 3)

        return (
            <>
                <BlogDetail blog={sanityPost} relatedPosts={relatedPosts} />
                <FloatingWhatsApp />
            </>
        )
    }

    // Fallback to local
    const blog = newsItems.find((item) => item.slug === slug) as any

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
