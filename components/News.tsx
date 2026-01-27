'use client'

import { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'

interface NewsItem {
  category: string
  title: string
  summary: string
  image: string
}

interface NewsProps {
  decorativePatternColors?: string[] | null
  decorativePatternLineColor?: string | null
  staticPattern?: boolean
}

const newsItems: NewsItem[] = [
  {
    category: 'Advisory',
    title: 'Latest Security Updates',
    summary: 'Stay informed with the latest security news and industry updates from SGA. Learn about new security measures and best practices.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    category: 'Blog',
    title: 'Company Announcements',
    summary: 'Important announcements and updates about our services and operations. Stay connected with SGA Security developments.',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d7729591?w=800&h=600&fit=crop',
  },
  {
    category: 'Media',
    title: 'Industry Insights',
    summary: 'Expert insights and analysis on security trends and best practices. Discover what\'s shaping the security industry.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
  },
]

export default function News({ 
  decorativePatternColors = null, 
  decorativePatternLineColor = null, 
  staticPattern = false 
}: NewsProps) {
  const [activeFilter, setActiveFilter] = useState('ALL')

  return (
    <section id="news" className="section-snap flex items-center justify-center bg-light-grey relative pb-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-xs font-semibold text-navy uppercase tracking-wider">
              news
            </p>
            <div className="section-title-container">
              <h3 className="section-title text-xl md:text-2xl font-bold text-navy-blue flex items-center justify-between">
                <span>News & Reports</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border-2 border-navy-blue flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors">
                    <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                  </button>
                  <button className="w-8 h-8 rounded-full border-2 border-navy-blue flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors">
                    <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                  </button>
                </div>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <div className="flex flex-wrap gap-2">
                {['ALL', 'ADVISORY', 'BLOG', 'MEDIA'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full border border-navy-blue text-xs font-semibold uppercase transition-colors ${
                      activeFilter === filter
                        ? 'bg-navy-blue text-white'
                        : 'text-navy-blue hover:bg-navy-blue hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-navy-blue w-full sm:w-64"
                />
                <Icon
                  icon="mdi:magnify"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Featured Image - Clickable */}
              <motion.a
                href="#"
                whileHover={{ opacity: 0.9 }}
                className="relative w-full h-48 block cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.a>
              
              <div className="p-6 flex flex-col flex-1">
                {/* Category */}
                <p className="text-xs font-semibold text-primary-orange uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-navy-blue mb-3">
                  {item.title}
                </h3>
                
                {/* Summary */}
                <p className="text-dark-charcoal text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

