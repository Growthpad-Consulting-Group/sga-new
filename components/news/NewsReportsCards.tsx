'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { newsItems } from '@/data/newsItems'
import NewsCard, { getNewsCardKey } from '@/components/news/NewsCard'

const ITEMS_PER_PAGE = 6

interface NewsReportsCardsProps {
  providedCountry?: string
  initialNewsItems?: any[]
}

export default function NewsReportsCards({ providedCountry, initialNewsItems }: NewsReportsCardsProps) {
  const displayItems = initialNewsItems || newsItems
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [selectedCountry, setSelectedCountry] = useState(providedCountry || 'All Country')
  const [selectedYear, setSelectedYear] = useState('All Years')

  // Extract unique years from news items
  const availableYears = Array.from(
    new Set(displayItems.map(item => new Date(item.date || item.publishedAt).getFullYear()))
  ).sort((a, b) => b - a) // Sort descending (newest first)

  const filteredItems = (() => {
    let filtered = displayItems.filter(item => {
      const category = item.category || 'Blog'
      const matchesFilter = activeFilter === 'ALL' || category.toUpperCase() === activeFilter
      const matchesCountry = selectedCountry === 'All Country' || (item as any).country === selectedCountry

      // Year filter
      const itemYear = new Date(item.date || item.publishedAt).getFullYear()
      const matchesYear = selectedYear === 'All Years' || itemYear.toString() === selectedYear

      let matchesSearch = true
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        matchesSearch = item.title.toLowerCase().includes(query) ||
          item.summary.toLowerCase().includes(query) ||
          (item.category || '').toLowerCase().includes(query)
      }

      return matchesFilter && matchesCountry && matchesYear && matchesSearch
    })

    // Sort by date (newest first)
    filtered.sort((a, b) => {
      const dateA = new Date(a.date || a.publishedAt).getTime()
      const dateB = new Date(b.date || b.publishedAt).getTime()
      return dateB - dateA
    })

    return filtered
  })()

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedItems = filteredItems.slice(startIndex, endIndex)

  // Reset to page 1 when filter or search changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country)
    setCurrentPage(1)
  }

  const handleYearChange = (year: string) => {
    setSelectedYear(year)
    setCurrentPage(1)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
    const newsSection = document.getElementById('news')
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1)
  }

  return (
    <section id="news" className="flex items-center justify-center bg-white py-20 md:py-20 min-h-[85vh] relative">
      <div className="container-fluid mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=""
        >


          {/* Search and Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* 1. Search Form */}
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search news & insights..."
                className="w-full pl-12 pr-4 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-hidden focus:border-primary-orange text-dark-charcoal placeholder:text-dark-charcoal/50"
              />
              <Icon
                icon="lucide:search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-charcoal"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-orange"
                >
                  <Icon icon="mdi:close" className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* 2. Category Dropdown */}
            <div className="relative w-full">
              <select
                value={activeFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="appearance-none w-full px-6 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-hidden focus:border-primary-orange bg-white text-dark-charcoal cursor-pointer capitalize font-medium"
              >
                {['ALL', 'ADVISORY', 'BLOG', 'MEDIA', 'REPORT'].map(filter => (
                  <option key={filter} value={filter}>
                    {filter === 'ALL' ? 'All Categories' : filter.charAt(0) + filter.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
              <Icon
                icon="mdi:chevron-down"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-charcoal pointer-events-none"
              />
            </div>

            {/* 3. Country Dropdown (hidden on country pages, which are already filtered) */}
            {!providedCountry && (
            <div className="relative w-full">
              <select
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="appearance-none w-full px-6 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-hidden focus:border-primary-orange bg-white text-dark-charcoal cursor-pointer capitalize font-medium"
              >
                <option value="All Country">All Countries</option>
                <option value="Kenya">Kenya</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option>
              </select>
              <Icon
                icon="mdi:chevron-down"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-charcoal pointer-events-none"
              />
            </div>

            )}

            {/* 4. Year Dropdown */}
            <div className="relative w-full">
              <select
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="appearance-none w-full px-6 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-hidden focus:border-primary-orange bg-white text-dark-charcoal cursor-pointer capitalize font-medium"
              >
                <option value="All Years">All Years</option>
                {availableYears.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
              <Icon
                icon="mdi:chevron-down"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-charcoal pointer-events-none"
              />
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
              <NewsCard key={getNewsCardKey(item, index)} item={item} index={index} />
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
                className={`px-3 py-1.5 xl:px-6 xl:py-3 rounded-full border transition-colors flex items-center gap-2 text-xs xl:text-base font-medium uppercase ${currentPage === 1
                  ? 'opacity-50 cursor-not-allowed text-gray-400 border-gray-300'
                  : 'border-dark-charcoal text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
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
                      className={`w-8 h-8 xl:w-12 xl:h-12 rounded-full border text-xs xl:text-base font-medium transition-colors ${currentPage === page
                        ? 'bg-primary-orange text-white border-primary-orange'
                        : 'border-dark-charcoal text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
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
                className={`px-3 py-1.5 xl:px-6 xl:py-3 rounded-full border transition-colors flex items-center gap-2 text-xs xl:text-base font-medium uppercase ${currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed text-gray-400 border-gray-300'
                  : 'border-dark-charcoal text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
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

