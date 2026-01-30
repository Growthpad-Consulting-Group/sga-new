'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'

type SafetyTip = {
  category: string
  title: string
  summary: string
  date: string
  recommendations?: string[]
}

const safetyTipsItems: SafetyTip[] = [
  {
    category: 'Home',
    title: 'Secure Your Home Entry Points',
    summary: 'Install strong locks on all doors and windows. Consider upgrading to deadbolt locks and reinforce door frames. Install security cameras or motion sensor lights at entry points.',
    date: 'March 15, 2024',
    recommendations: [
      'Install deadbolt locks on all exterior doors',
      'Reinforce door frames with longer screws',
      'Add security cameras at main entry points',
      'Install motion sensor lights around perimeter',
      'Consider a smart doorbell with video monitoring'
    ],
  },
  {
    category: 'Home',
    title: 'Lighting and Visibility',
    summary: 'Ensure adequate lighting around your property perimeter. Trim bushes and trees that could provide hiding spots. Install timers for lights when away from home.',
    date: 'March 14, 2024',
    recommendations: [
      'Install LED lights around property perimeter',
      'Trim bushes and trees near windows and doors',
      'Use timer switches for lights when away',
      'Consider motion-activated lighting',
      'Keep pathways well-lit at night'
    ],
  },
  {
    category: 'Home',
    title: 'Protect Your Digital Identity',
    summary: 'Use strong, unique passwords for all accounts. Enable two-factor authentication where possible. Be cautious of phishing emails and never share personal information online.',
    date: 'March 15, 2024',
    recommendations: [
      'Use password manager for strong unique passwords',
      'Enable two-factor authentication on all accounts',
      'Be cautious of suspicious emails and links',
      'Regularly update software and security patches',
      'Use VPN when accessing public Wi-Fi'
    ],
  },
  {
    category: 'Workplace',
    title: 'Maintain Office Security Protocols',
    summary: 'Follow your organization\'s security procedures. Never share access cards or passwords. Report suspicious activities immediately to security personnel.',
    date: 'March 15, 2024',
    recommendations: [
      'Never share access cards or passwords',
      'Report suspicious activities immediately',
      'Follow visitor sign-in procedures',
      'Keep sensitive documents locked away',
      'Attend security training sessions regularly'
    ],
  },
  {
    category: 'Workplace',
    title: 'Secure Your Workspace',
    summary: 'Lock your computer when stepping away. Keep sensitive documents secure. Be mindful of who can see your screen and never leave confidential information unattended.',
    date: 'March 14, 2024',
    recommendations: [
      'Lock computer screen when away from desk',
      'Store sensitive documents in locked drawers',
      'Be mindful of screen visibility',
      'Shred confidential documents before disposal',
      'Use privacy screens for sensitive work'
    ],
  },
  {
    category: 'Travel',
    title: 'Stay Safe While Traveling',
    summary: 'Research your destination before traveling. Keep copies of important documents separate from originals. Stay in well-reviewed accommodations and avoid displaying wealth.',
    date: 'March 15, 2024',
    recommendations: [
      'Research destination safety before traveling',
      'Keep copies of documents in separate location',
      'Stay in well-reviewed accommodations',
      'Avoid displaying expensive items or wealth',
      'Share travel itinerary with trusted contacts'
    ],
  },
  {
    category: 'Travel',
    title: 'Keep Your Vehicle Safe',
    summary: 'Always lock your vehicle and never leave valuables in plain sight. Park in well-lit areas and consider installing a car alarm or GPS tracking device.',
    date: 'March 15, 2024',
    recommendations: [
      'Always lock vehicle doors and windows',
      'Never leave valuables visible in car',
      'Park in well-lit, secure areas',
      'Consider installing car alarm system',
      'Use GPS tracking device for high-value vehicles'
    ],
  },
  {
    category: 'Emergency',
    title: 'Emergency Preparedness',
    summary: 'Keep emergency contact numbers saved in your phone. Have a family emergency plan and meeting point. Consider taking a self-defense course.',
    date: 'March 14, 2024',
    recommendations: [
      'Save emergency contacts in phone',
      'Create family emergency plan and meeting point',
      'Consider taking self-defense course',
      'Keep emergency kit with essentials',
      'Know evacuation routes from home and work'
    ],
  },
  {
    category: 'Emergency',
    title: 'Stay Alert in Public Spaces',
    summary: 'Always be aware of your surroundings. Avoid distractions like excessive phone use when walking alone. Trust your instincts and have an emergency contact readily available.',
    date: 'March 15, 2024',
    recommendations: [
      'Stay aware of surroundings at all times',
      'Avoid excessive phone use when alone',
      'Trust your instincts in uncomfortable situations',
      'Have emergency contact readily available',
      'Walk confidently and avoid isolated areas'
    ],
  },
  {
    category: 'Community',
    title: 'Neighborhood Watch Participation',
    summary: 'Join or start a neighborhood watch program. Get to know your neighbors and look out for each other. Report suspicious activities to local authorities.',
    date: 'March 15, 2024',
    recommendations: [
      'Join or start neighborhood watch program',
      'Get to know your neighbors',
      'Report suspicious activities to authorities',
      'Share safety information with community',
      'Participate in community safety meetings'
    ],
  },
  {
    category: 'Community',
    title: 'Public Safety Awareness',
    summary: 'Stay informed about local safety issues and crime trends. Participate in community safety meetings and share information with neighbors to keep everyone safe.',
    date: 'March 14, 2024',
    recommendations: [
      'Stay informed about local safety issues',
      'Participate in community safety meetings',
      'Share safety information with neighbors',
      'Report crime trends to local authorities',
      'Support community safety initiatives'
    ],
  },
]

const ITEMS_PER_PAGE = 6

export default function SafetyTipsCards() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTip, setSelectedTip] = useState<SafetyTip | null>(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const pathname = usePathname()

  // All countries with emergency phone numbers
  const allCountries = [
    { code: 'ke', name: 'Kenya', phone: '+254111024000' },
    { code: 'ug', name: 'Uganda', phone: '+256772200048' },
    { code: 'tz', name: 'Tanzania', phone: '+255222123456' },
  ]

  // Extract unique categories from data
  const allCategories = Array.from(new Set(safetyTipsItems.map(item => item.category))).sort()
  const categoryFilters = ['ALL', ...allCategories]

  const filteredItems = (() => {
    let filtered = safetyTipsItems

    // Filter by category
    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    // Filter by search query
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
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleViewDetails = (tip: SafetyTip) => {
    setSelectedTip(tip)
    setIsDetailsModalOpen(true)
  }

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false)
    setSelectedTip(null)
  }

  return (
    <section id="safety-tips-cards" className="bg-light-grey py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            {/* Category Filter Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full border border-navy-blue text-xs font-semibold uppercase transition-colors ${selectedCategory === category
                        ? 'bg-primary-orange border-primary-orange text-white'
                        : 'text-navy-blue hover:bg-primary-orange hover:border-primary-orange hover:text-white'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="e.g. Home Security, Personal Safety, etc..."
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

        {/* Safety Tips Cards Grid */}
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
                className="bg-white text-navy-blue border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:bg-primary-orange hover:text-white transition-shadow flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs uppercase bg-primary-orange text-white rounded-full px-3 py-1 flex items-center gap-1">
                      <Icon icon="mdi:shield-check" className="w-4 h-4" />
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* View Details Button */}
                  <div className='flex justify-start gap-2 mt-auto'>
                    <button
                      onClick={() => handleViewDetails(item)}
                      className="py-2 px-3 flex uppercase bg-white border border-navy-blue text-navy-blue rounded-full items-center gap-2 hover:bg-primary-orange hover:text-white transition-colors text-sm font-semibold"
                    >
                      <span>VIEW DETAILS</span>
                      <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                    </button>
                  </div>
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
                className={`px-4 py-2 rounded-full border border-navy-blue text-sm font-semibold transition-colors flex items-center gap-2 ${currentPage === 1
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
                      className={`w-10 h-10 rounded-full border text-sm font-semibold transition-colors ${currentPage === page
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
                className={`px-4 py-2 rounded-full border border-navy-blue text-sm font-semibold transition-colors flex items-center gap-2 ${currentPage === totalPages
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

        {/* Details Modal */}
        {isDetailsModalOpen && selectedTip ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={handleCloseDetailsModal}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              

              {/* Two Column Layout */}
              <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">
                {/* Left Column - Wider */}
                <div className="flex-1 lg:flex-[2] p-6 lg:p-8">
                  {/* Orange Title */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-orange mb-6">
                    {selectedTip.title}
                  </h2>
                  {/* Category Label with Orange Border */}
                  <div className="mb-4">
                    <span className="text-xs uppercase border-2 border-primary-orange text-primary-orange rounded-full px-4 py-2 inline-block font-semibold">
                      {selectedTip.category}
                    </span>
                  </div>                  

                  {/* Safety Tip Description */}
                  <h3 className="text-lg font-bold text-navy-blue mb-4">Safety Tip</h3>
                  <div className="text-gray-700 mb-8 leading-relaxed">
                    <p className="text-base">{selectedTip.summary}</p>
                  </div>

                  {/* Recommendation Actions List */}
                  {selectedTip.recommendations && selectedTip.recommendations.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-navy-blue mb-4">Recommended Actions</h3>
                      <ul className="space-y-3">
                        {selectedTip.recommendations.map((recommendation, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Icon icon="mdi:circle" className="w-2 h-2 text-primary-orange mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">{recommendation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* Right Column - Narrower with Orange Background */}
                <div className="lg:w-80 bg-primary-orange p-6 lg:p-8 text-white flex flex-col">
                  <h3 className="text-xl font-bold mb-4">Need immediate assistance?</h3>
                  <p className="text-sm mb-6 leading-relaxed opacity-95">
                    If this situation feels urgent or unsafe, contact emergency services or your nearest SGA support team. Use the SGA emergency lines below.
                  </p>
                  
                  <div className="mt-auto space-y-4">
                    {allCountries.map((country) => (
                      <div key={country.code}>
                        <h4 className="text-base font-semibold mb-2">SGA {country.name} Emergency Line</h4>
                        <a
                          href={`tel:${country.phone.replace(/\s/g, '')}`}
                          className="text-lg font-bold hover:opacity-80 transition-opacity flex items-center gap-2"
                        >
                          <Icon icon="mdi:phone" className="w-5 h-5" />
                          {country.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

