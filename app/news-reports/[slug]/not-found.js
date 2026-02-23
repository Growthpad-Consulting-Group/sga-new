'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function NotFound() {
  return (
    <section className="bg-light-grey py-16 sm:py-20 min-h-screen flex items-center">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Icon icon="mdi:file-question-outline" className="w-24 h-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">News Article Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The news article you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          href="/news-reports"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-blue text-white rounded-full hover:bg-primary-orange transition-colors font-semibold"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          Back to News & Insights
        </Link>
      </div>
    </section>
  )
}

