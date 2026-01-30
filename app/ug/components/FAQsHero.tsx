'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface FAQsHeroProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function FAQsHero({ searchQuery, setSearchQuery }: FAQsHeroProps) {
  return (
    <section id="faqs-hero" className="section-snap bg-gray-100 text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-primary-orange">Frequently Asked Questions</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Clear answers to common questions about SGA Group, our security services, operating standards, and how we support clients across Africa.
          </p>
          
          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto mt-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for questions..."
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-full text-base focus:outline-none focus:border-primary-orange"
            />
            <Icon
              icon="mdi:magnify"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-orange"
              >
                <Icon icon="mdi:close" className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

