'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

type ResourceDocument = {
  id: string
  title: string
  category: 'SAFETY' | 'INCIDENT' | 'ONBOARDING'
  downloadUrl: string
  fileSize?: string
}

const documents: ResourceDocument[] = [
  {
    id: '1',
    title: 'Incident & Emergency Guidance',
    category: 'INCIDENT',
    downloadUrl: '/documents/incident-emergency-guidance.pdf',
    fileSize: '2.5 MB',
  },
  {
    id: '2',
    title: 'Home & Estate Safety Guide',
    category: 'SAFETY',
    downloadUrl: '/documents/home-estate-safety-guide.pdf',
    fileSize: '3.1 MB',
  },
  {
    id: '3',
    title: 'Client Onboarding Guide',
    category: 'ONBOARDING',
    downloadUrl: '/documents/client-onboarding-guide.pdf',
    fileSize: '1.8 MB',
  },
  {
    id: '4',
    title: 'Workplace Safety Protocols',
    category: 'SAFETY',
    downloadUrl: '/documents/workplace-safety-protocols.pdf',
    fileSize: '2.2 MB',
  },
  {
    id: '5',
    title: 'Emergency Response Procedures',
    category: 'INCIDENT',
    downloadUrl: '/documents/emergency-response-procedures.pdf',
    fileSize: '2.9 MB',
  },
  {
    id: '6',
    title: 'Security Guard Training Manual',
    category: 'ONBOARDING',
    downloadUrl: '/documents/security-guard-training-manual.pdf',
    fileSize: '4.5 MB',
  },
]

const categoryFilters = ['ALL', 'SAFETY', 'INCIDENT', 'ONBOARDING']

export default function ResourcesDocuments() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDocuments = (() => {
    let filtered = documents

    // Filter by category
    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter(doc => doc.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(doc =>
        doc.title.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query)
      )
    }

    return filtered
  })()

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  const handleDownload = (url: string, title: string) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = url
    link.download = title.replace(/\s+/g, '-').toLowerCase() + '.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resources-documents" className="bg-light-grey py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Filter and Search Section */}
          <div className="mb-8">
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
                  placeholder="Search documents..."
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
              Found {filteredDocuments.length} result{filteredDocuments.length !== 1 ? 's' : ''} for "{searchQuery}"
            </div>
          )}

          {/* No Results Message */}
          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <Icon icon="mdi:file-search-outline" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-2">No documents found</p>
              <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>

        {/* Documents Section */}
        {filteredDocuments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary-orange mb-6 pb-4 relative">
              Documents
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '2px'
                }}
              ></span>
            </h2>
            <div className="space-y-4">
              {filteredDocuments.map((document, index) => (
                <motion.div
                  key={document.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy-blue mb-1">
                      {document.title}
                    </h3>
                    {document.fileSize && (
                      <p className="text-sm text-gray-500">Size: {document.fileSize}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDownload(document.downloadUrl, document.title)}
                    className="ml-4 px-6 py-2 bg-primary-orange text-white rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2 font-semibold text-sm"
                  >
                    <Icon icon="mdi:download" className="w-5 h-5" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

