'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BlogDetail({ blog }) {
  const pathname = usePathname()
  const isNewsRoute = pathname?.startsWith('/news-reports')
  const backPath = isNewsRoute ? '/news-reports' : '/updates'
  const backLabel = isNewsRoute ? 'Back to News & Reports' : 'Back to Updates'
  const viewAllLabel = isNewsRoute ? 'View All News' : 'View All Updates'

  if (!blog) {
    return (
      <section className="bg-light-grey py-16 sm:py-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Icon icon="mdi:file-question-outline" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-navy-blue mb-2">{isNewsRoute ? 'News Article Not Found' : 'Blog Post Not Found'}</h2>
            <p className="text-gray-600 mb-6">The {isNewsRoute ? 'news article' : 'blog post'} you're looking for doesn't exist.</p>
            <Link
              href={backPath}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-blue text-white rounded-full hover:bg-primary-orange transition-colors"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5" />
              {backLabel}
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-light-grey py-16 sm:py-20">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={backPath}
            className="inline-flex items-center gap-2 text-navy-blue hover:text-primary-orange transition-colors text-sm font-semibold"
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5" />
            {backLabel}
          </Link>
        </motion.div>

        {/* Blog Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
              <span className="px-4 py-2 bg-primary-orange text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-gray-600">
                {blog.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
              {blog.title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
              {blog.summary}
            </p>

            {/* Full Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-navy-blue mb-2">Share this post:</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Icon icon="mdi:facebook" className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blog.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Icon icon="mdi:twitter" className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Icon icon="mdi:linkedin" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <Link
                  href={backPath}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy-blue text-white rounded-full hover:bg-primary-orange transition-colors text-sm font-semibold"
                >
                  <Icon icon="mdi:arrow-left" className="w-5 h-5" />
                  {viewAllLabel}
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

