'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import JobDetailsModal from './JobDetailsModal'
import JobApplicationModal from './JobApplicationModal'

const newsItems = [
  {
    location: 'Nairobi, Kenya',
    title: 'Security Supervisor',
    jobtype: 'Guarding Operations • Full-Time',
    summary: 'Oversee site operations, manage guard teams, and ensure service excellence at assigned client locations.',
    date: 'March 15, 2024',
  },
  {
    location: 'Dar es Salaam, Tanzania',
    title: 'CCTV / Control Room Operator',
    jobtype: 'Control Room • Shift-Based',
    summary: 'Monitor CCTV feeds, escalate incidents, and maintain accurate control-room logs to support rapid response.',
    date: 'March 15, 2024',
  },
  {
    location: 'Nairobi, Kenya',
    title: 'HR Officer',
    jobtype: 'Guarding Operations • Full-Time',
    summary: 'Support recruitment, employee relations, and HR compliance while ensuring an excellent employee experience.',
    date: 'March 15, 2024',
  },
  {
    location: 'Nairobi, Kenya',
    title: 'Security Supervisor',
    jobtype: 'Guarding Operations • Full-Time',
    summary: 'Oversee site operations, manage guard teams, and ensure service excellence at assigned client locations.',
    date: 'March 15, 2024',
  },
  {
    location: 'Nairobi, Kenya',
    title: 'Security Supervisor',
    jobtype: 'Guarding Operations • Full-Time',
    summary: 'Oversee site operations, manage guard teams, and ensure service excellence at assigned client locations.',
    date: 'March 15, 2024',
  },
  {
    location: 'Nairobi, Kenya',
    title: 'Security Supervisor',
    jobtype: 'Guarding Operations • Full-Time',
    summary: 'Oversee site operations, manage guard teams, and ensure service excellence at assigned client locations.',
    date: 'March 15, 2024',
  },
  {
    location: 'Nairobi, Kenya',
    title: 'Security Supervisor',
    jobtype: 'Guarding Operations • Full-Time',
    summary: 'Oversee site operations, manage guard teams, and ensure service excellence at assigned client locations.',
    date: 'March 15, 2024',
  },
]

const ITEMS_PER_PAGE = 6

export default function JobCards() {
  const [activeFilter, setActiveFilter] = useState('ALL COUNTRIES')
  const [selectedCity, setSelectedCity] = useState('ALL CITIES')
  const [selectedDepartment, setSelectedDepartment] = useState('ALL DEPARTMENTS')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedJob, setSelectedJob] = useState(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)

  // Extract unique cities and departments from data
  const uniqueCities = ['ALL CITIES', ...Array.from(new Set(newsItems.map(item => {
    const city = item.location.split(',').shift()?.trim()
    return city
  }))).filter(Boolean).sort()]

  const uniqueDepartments = ['ALL DEPARTMENTS', ...Array.from(new Set(newsItems.map(item => {
    const department = item.jobtype.split('•').shift()?.trim()
    return department
  }))).filter(Boolean).sort()]

  const filteredItems = (() => {
    let filtered = newsItems

    // Filter by country
    if (activeFilter !== 'ALL COUNTRIES') {
      filtered = filtered.filter(item => {
        const country = item.location.split(',').pop()?.trim().toUpperCase()
        return country === activeFilter
      })
    }

    // Filter by city/branch
    if (selectedCity !== 'ALL CITIES') {
      filtered = filtered.filter(item => {
        const city = item.location.split(',').shift()?.trim()
        return city === selectedCity
      })
    }

    // Filter by department
    if (selectedDepartment !== 'ALL DEPARTMENTS') {
      filtered = filtered.filter(item => {
        const department = item.jobtype.split('•').shift()?.trim()
        return department === selectedDepartment
      })
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.jobtype.toLowerCase().includes(query)
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
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
    setCurrentPage(1)
  }

  const handleDepartmentChange = (department: string) => {
    setSelectedDepartment(department)
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

  const handleViewDetails = (job: any) => {
    setSelectedJob(job)
    setIsDetailsModalOpen(true)
  }

  const handleApply = (job: any) => {
    setSelectedJob(job)
    setIsApplicationModalOpen(true)
  }

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false)
    setSelectedJob(null)
  }

  const handleCloseApplicationModal = () => {
    setIsApplicationModalOpen(false)
    setSelectedJob(null)
  }

  const handleApplyFromDetails = () => {
    setIsDetailsModalOpen(false)
    setIsApplicationModalOpen(true)
  }

  return (
    <section id="news-reports-cards" className="bg-light-grey py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            {/* City/Branch and Department Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* City/Branch Dropdown */}
              <div className="relative flex-1 sm:flex-initial sm:w-64">
                <label className="block text-xs font-semibold text-navy-blue mb-2 uppercase">
                  City/Branch
                </label>
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => handleCityChange(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary-orange appearance-none bg-white text-navy-blue cursor-pointer"
                  >
                    {uniqueCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <Icon
                    icon="mdi:chevron-down"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>

              {/* Department Dropdown */}
              <div className="relative flex-1 sm:flex-initial sm:w-64">
                <label className="block text-xs font-semibold text-navy-blue mb-2 uppercase">
                  Department
                </label>
                <div className="relative">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => handleDepartmentChange(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary-orange appearance-none bg-white text-navy-blue cursor-pointer"
                  >
                    {uniqueDepartments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  <Icon
                    icon="mdi:chevron-down"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Country Filter Buttons and Search */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {['ALL COUNTRIES', 'KENYA', 'TANZANIA', 'UGANDA'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`px-4 py-2 rounded-full border border-navy-blue text-xs font-semibold uppercase transition-colors ${activeFilter === filter
                      ? 'bg-primary-orange border-primary-orange text-white'
                      : 'text-navy-blue hover:bg-primary-orange hover:border-primary-orange hover:text-white'
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
                  placeholder="e.g. Security Guard, Driver, etc..."
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
                className="bg-white text-navy-blue border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >

                <div className="p-6 flex flex-col flex-1">
                  {/* Location Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs uppercase bg-primary-orange text-white rounded-full px-3 py-1 flex items-center gap-1">
                      <Icon icon="mdi:map-marker" className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm leading-relaxed mb-4 text-gray-700">
                    {item.summary}
                  </p>

                  {/* Job type */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.jobtype}
                  </p>

                  {/* Apply Link */}
                  <div className='flex justify-between gap-2 mt-auto'>
                    <button
                      onClick={() => handleViewDetails(item)}
                      className="py-2 px-3 flex uppercase bg-transparent border border-navy-blue text-navy-blue rounded-full items-center gap-2 hover:bg-navy-blue hover:text-white transition-colors text-sm font-semibold"
                    >
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => handleApply(item)}
                      className="py-2 px-3 flex uppercase bg-primary-orange text-white rounded-full items-center gap-2 hover:bg-opacity-90 transition-colors text-sm font-semibold"
                    >
                      <span>Apply</span>
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

        {/* Modals */}
        <JobDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={handleCloseDetailsModal}
          job={selectedJob}
          onApply={handleApplyFromDetails}
        />
        <JobApplicationModal
          isOpen={isApplicationModalOpen}
          onClose={handleCloseApplicationModal}
          job={selectedJob}
        />
      </div>
    </section>
  )
}

