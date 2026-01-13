'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const newsItems = [
  {
    category: 'Advisory',
    title: 'Latest Security Updates',
    summary: 'Stay informed with the latest security news and industry updates from SGA. Learn about new security measures and best practices.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: 'March 15, 2024',
  },
  {
    category: 'Blog',
    title: 'Company Announcements',
    summary: 'Important announcements and updates about our services and operations. Stay connected with SGA Security developments.',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d7729591?w=800&h=600&fit=crop',
    date: 'March 10, 2024',
  },
  {
    category: 'Media',
    title: 'Industry Insights',
    summary: 'Expert insights and analysis on security trends and best practices. Discover what\'s shaping the security industry.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    date: 'March 5, 2024',
  },
  {
    category: 'Report',
    title: 'Annual Security Report 2023',
    summary: 'Comprehensive annual report covering our achievements, performance metrics, and future outlook for security services.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    date: 'February 28, 2024',
  },
  {
    category: 'Advisory',
    title: 'Cybersecurity Best Practices',
    summary: 'Essential cybersecurity guidelines and recommendations to protect your business from emerging digital threats.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    date: 'February 20, 2024',
  },
  {
    category: 'Blog',
    title: 'Innovation in Security Technology',
    summary: 'Exploring the latest technological innovations that are revolutionizing the security industry and enhancing protection.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    date: 'February 15, 2024',
  },
]

const ITEMS_PER_PAGE = 6

export default function NewsReportsCards() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredItems = (() => {
    let filtered = activeFilter === 'ALL' 
      ? newsItems 
      : newsItems.filter(item => item.category.toUpperCase() === activeFilter)
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      )
    }
    
    return filtered
  })()

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedItems = filteredItems.slice(startIndex, endIndex)

  // Reset to page 1 when filter or search changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const goToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="news-reports-cards" className="bg-light-grey py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="space-y-3 mb-8">
            <p className="text-xs font-semibold text-navy uppercase tracking-wider">
              Latest News
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-blue relative pb-3 flex items-center justify-between">
              <span>News & Reports</span>
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h3>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {['ALL', 'ADVISORY', 'BLOG', 'MEDIA', 'REPORT'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
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
            
            {/* Search Input */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary-orange w-full sm:w-64"
              />
              <Icon
                icon="mdi:magnify"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-orange"
                >
                  <Icon icon="mdi:close" className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Search Results Count */}
          {searchQuery && (
            <div className="mb-4 text-sm text-gray-600">
              Found {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} for "{searchQuery}"
              {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
            </div>
          )}

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Icon icon="mdi:file-search-outline" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-2">No results found</p>
              <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>

        {/* Blog Cards Grid */}
        {paginatedItems.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-primary-orange border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Featured Image */}
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
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">
                    {item.category}
                    </p>
                    <p className="text-xs text-white">
                    {item.date}
                  </p>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                {/* Summary */}
                <p className="text-white text-sm leading-relaxed mb-4 flex-1">
                  {item.summary}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="flex items-center gap-2 text-white hover:text-navy-blue transition-colors text-sm font-semibold"
                >
                  <span>Read More</span>
                  <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        )}

        {/* Pagination Controls */}
        {filteredItems.length > ITEMS_PER_PAGE && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 mt-12"
          >
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full border border-navy-blue text-sm font-semibold transition-colors flex items-center gap-2 ${
                  currentPage === 1
                    ? 'opacity-50 cursor-not-allowed text-gray-400 border-gray-300'
                    : 'text-navy-blue hover:bg-navy-blue hover:text-white'
                }`}
              >
                <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage = 
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)

                  if (!showPage) {
                    // Show ellipsis
                    if (page === currentPage - 2 || page === currentPage + 2) {
                      return (
                        <span key={page} className="text-gray-400 px-2">
                          ...
                        </span>
                      )
                    }
                    return null
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-full border text-sm font-semibold transition-colors ${
                        currentPage === page
                          ? 'bg-navy-blue text-white border-navy-blue'
                          : 'text-navy-blue border-navy-blue hover:bg-navy-blue hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  )
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full border border-navy-blue text-sm font-semibold transition-colors flex items-center gap-2 ${
                  currentPage === totalPages
                    ? 'opacity-50 cursor-not-allowed text-gray-400 border-gray-300'
                    : 'text-navy-blue hover:bg-navy-blue hover:text-white'
                }`}
              >
                Next
                <Icon icon="mdi:chevron-right" className="w-5 h-5" />
              </button>
            </div>

            {/* Page Info */}
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1} - {Math.min(endIndex, filteredItems.length)} of {filteredItems.length} results
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

