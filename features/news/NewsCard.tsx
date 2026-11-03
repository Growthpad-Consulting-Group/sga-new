'use client'

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
  /** When set (country pages), the card links to that country's article */
  countryCode?: string
}

export function getNewsCardKey(item: NewsCardItem, index: number) {
  const slug = typeof item.slug === 'string' ? item.slug : item.slug?.current
  return item._id || slug || `${item.title}-${index}`
}

export default function NewsCard({ item, countryCode }: NewsCardProps) {
  const slug = typeof item.slug === 'string' ? item.slug : item.slug?.current
  const href = slug
    ? countryCode ? `/${countryCode}/updates/${slug}` : `/news-reports/${slug}`
    : countryCode ? `/${countryCode}/updates` : '/news-reports'
  const imageUrl = item.image || (item.mainImage ? urlFor(item.mainImage).url() : '/images/misc/blog-placeholder')
  const date = item.date || (item.publishedAt
    ? new Date(item.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '')

  return (
    <article
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
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-orange xl:text-xs">
            {item.category || 'Blog'}
          </span>
          {date && (
            <time
              dateTime={item.publishedAt || item.date}
              className="rounded-full border border-white/60 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur-sm xl:text-xs"
            >
              {date}
            </time>
          )}
        </div>

        <Link href={href}>
          <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white transition-opacity hover:opacity-80 md:text-3xl lg:text-xl xl:text-[22px]">
            {item.title}
          </h3>
        </Link>

        <p className="line-clamp-3 text-sm leading-relaxed text-white xl:text-base">
          {item.summary}
        </p>
      </div>
    </article>
  )
}
