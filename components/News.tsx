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
  country: string
  date: string
}

interface NewsProps { }

const newsItems: NewsItem[] = [
  {
    category: 'Advisory Report',
    title: 'Latest Security Updates',
    summary: 'Stay informed with the latest security news and industry updates from SGA. Learn about new security measures and best practices.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    country: 'Kenya',
    date: 'May 8, 2025',
  },
  {
    category: 'Blog',
    title: 'Company Announcements',
    summary: 'Important announcements and updates about our services and operations. Stay connected with SGA Security developments.',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d7729591?w=800&h=600&fit=crop',
    country: 'Tanzania',
    date: 'May 12, 2025',
  },
  {
    category: 'Media',
    title: 'Industry Insights',
    summary: 'Expert insights and analysis on security trends and best practices. Discover what\'s shaping the security industry.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    country: 'Uganda',
    date: 'May 15, 2025',
  },
]

export default function News({ }: NewsProps) {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedCountry, setSelectedCountry] = useState('All Country')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = newsItems.filter(item => {
    const matchesFilter = activeFilter === 'ALL' || item.category.toUpperCase() === activeFilter
    const matchesCountry = selectedCountry === 'All Country' || item.country === selectedCountry
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesCountry && matchesSearch
  })

  return (
    <section id="news" className="section-snap flex items-center justify-center relative min-h-[85vh] py-12 md:py-20 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-start text-left"
          >
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider mb-2">
              Latest
            </p>
            <div className="flex items-end justify-between section-title-container w-full !pb-4">
              <h3 className="section-title text-xl md:text-4xl font-bold text-primary-orange">
                News & Reports
              </h3>
              <div className="flex items-center gap-3 mb-1">
                <button className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300">
                  <Icon icon="mingcute:arrow-left-line" className="w-6 h-6" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300">
                  <Icon icon="mingcute:arrow-right-line" className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <div className="flex flex-wrap gap-2">
                {['ALL', 'ADVISORY REPORT', 'BLOG', 'MEDIA'].map((filter) => {
                  const count = filter === 'ALL'
                    ? newsItems.length
                    : newsItems.filter(item => item.category.toUpperCase() === filter).length;

                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-6 py-3 rounded-full border transition-colors flex items-center gap-1 text-md font-medium uppercase ${activeFilter === filter
                        ? 'bg-primary-orange text-white border-primary-orange'
                        : 'border-dark-charcoal text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
                        }`}
                    >
                      {filter}
                      <sup className="text-[10px] opacity-70">({count})</sup>
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                {/* Country Dropdown */}
                <div className="relative w-full sm:w-48">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="appearance-none w-full pl-4 pr-10 py-2 border border-dark-charcoal rounded-full text-sm focus:outline-none focus:border-primary-orange bg-white text-dark-charcoal cursor-pointer"
                  >
                    <option value="All Country">All Country</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Uganda">Uganda</option>
                  </select>
                  <Icon
                    icon="mdi:chevron-down"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-charcoal pointer-events-none"
                  />
                </div>

                {/* Search Input */}
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH..."
                    className="pl-4 pr-10 py-2 border border-dark-charcoal rounded-full text-sm focus:outline-none focus:border-primary-orange w-full sm:w-64 text-dark-charcoal placeholder:text-dark-charcoal/50"
                  />
                  <Icon
                    icon="lucide:search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-charcoal text-primary-orange"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[500px]"
            >
              {/* Featured Image - Clickable */}
              <motion.a
                href="#"
                whileHover={{ opacity: 0.9 }}
                className="relative w-full h-64 block cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Country Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1 px-5 py-2 rounded-full bg-primary-orange text-white text-sm uppercase font-normal z-10">
                  <Icon icon="mdi:map-marker" className="w-5 h-5 text-white" />
                  {item.country}
                </div>
              </motion.a>

              <div className="p-6 flex flex-col flex-1 bg-primary-orange text-white">
                {/* Category and Date */}
                <p className="text-lg font-normal text-white uppercase tracking-wider mb-2">
                  {item.category} • {item.date}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-3xl font-bold text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-white text-lg leading-relaxed">
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

