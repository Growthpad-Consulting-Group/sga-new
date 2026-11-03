'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { urlFor } from '@/sanity/lib/image'

export interface NewsCardItem {
  _id?: string
  slug?: string | { current?: string }
  category?: string
  title: string
  summary: string
  image?: string
  mainImage?: unknown
  country?: string
  date?: string
  publishedAt?: string
}

interface NewsCardProps {
  item: NewsCardItem
  index?: number
}

export function getNewsCardKey(item: NewsCardItem, index: number) {
  const slug = typeof item.slug === 'string' ? item.slug : item.slug?.current
  return item._id || slug || `${item.title}-${index}`
}

export default function NewsCard({ item, index = 0 }: NewsCardProps) {
  const slug = typeof item.slug === 'string' ? item.slug : item.slug?.current
  const href = slug ? `/news-reports/${slug}` : '/news-reports'
  const imageUrl = item.image || (item.mainImage ? urlFor(item.mainImage).url() : '/images/misc/blog-placeholder')
  const date = item.date || (item.publishedAt
    ? new Date(item.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '')

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex min-h-[400px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl xl:min-h-[500px]"
    >
      <Link href={href} className="relative block h-48 w-full cursor-pointer xl:h-64">
        <Image
          src={imageUrl}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="rounded-t-lg object-cover"
        />
        {item.country && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-primary-orange px-3 py-1 text-xs font-normal uppercase text-white xl:px-5 xl:py-2 xl:text-sm">
            <Icon icon="mdi:map-marker" className="h-4 w-4 text-white xl:h-5 xl:w-5" />
            {item.country}
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col bg-primary-orange p-6 text-white">
        <p className="mb-2 text-sm font-normal uppercase tracking-wider text-white xl:text-xs">
          {item.category || 'Blog'}{date && ` • ${date}`}
        </p>

        <Link href={href}>
          <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white transition-opacity hover:opacity-80 md:text-3xl lg:text-xl xl:text-[22px]">
            {item.title}
          </h3>
        </Link>

        <p className="line-clamp-3 text-sm leading-relaxed text-white xl:text-base">
          {item.summary}
        </p>
      </div>
    </motion.article>
  )
}
