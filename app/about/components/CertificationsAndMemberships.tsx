'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import DocumentPreviewModal from './DocumentPreviewModal'

type Category = 'ALL' | 'CERTIFICATION' | 'MEMBERSHIP' | 'LICENSE'
type Country = 'All Country' | 'Kenya' | 'Tanzania' | 'Uganda'

interface DocumentItem {
    title: string
    category: Exclude<Category, 'ALL'>
    country: Exclude<Country, 'All Country'>
    link: string
    year?: string
    coverImageUrl?: string | null
}

interface CertificationsAndMembershipsProps {
    documents: DocumentItem[]
}

const ITEMS_PER_PAGE = 12

// Shuffle array to randomize display order
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'CERTIFICATION': return 'solar:medal-ribbon-broken'
        case 'MEMBERSHIP': return 'solar:users-group-rounded-broken'
        case 'LICENSE': return 'solar:document-text-broken'
        default: return 'solar:document-broken'
    }
}

export default function CertificationsAndMemberships({ documents }: CertificationsAndMembershipsProps) {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeCategory, setActiveCategory] = useState<Category>('ALL')
    const [selectedCountry, setSelectedCountry] = useState<Country>('All Country')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [previewDoc, setPreviewDoc] = useState<DocumentItem | null>(null)
    // Start with the server-rendered order so hydration matches, then
    // shuffle client-side only (avoids a random order on the server and a
    // different random order on the client causing a hydration mismatch).
    const [randomizedDocuments, setRandomizedDocuments] = useState(documents)
    useEffect(() => {
        setRandomizedDocuments(shuffleArray(documents))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const filteredDocuments = randomizedDocuments.filter((doc) => {
        const matchCategory = activeCategory === 'ALL' || doc.category === activeCategory
        const matchCountry = selectedCountry === 'All Country' || doc.country === selectedCountry
        const matchSearch = !searchQuery ||
            doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.category.toLowerCase().includes(searchQuery.toLowerCase())
        return matchCategory && matchCountry && matchSearch
    })

    const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    const handleFilterChange = (filter: Category) => { setActiveCategory(filter); setCurrentPage(1) }
    const handleCountryChange = (country: Country) => { setSelectedCountry(country); setCurrentPage(1) }
    const handleSearchChange = (query: string) => { setSearchQuery(query); setCurrentPage(1) }
    const goToPage = (page: number) => {
        setCurrentPage(page)
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section ref={sectionRef} id="certifications-memberships" className="bg-white py-20 md:py-20 min-h-[85vh] relative">
            <div className="container-fluid mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Header */}
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-4">
                            Certificates, Licenses, and Recognition
                        </h2>
                        {/* <p className="text-dark-charcoal/70 text-lg max-w-2xl">
                            Certificates, licences, and memberships representing the highest standards for security companies globally.
                        </p> */}
                    </div>

                    {/* Filters — matching news/reports style */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        {/* Search */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                placeholder="Search certifications..."
                                className="w-full pl-12 pr-4 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-hidden focus:border-primary-orange text-dark-charcoal placeholder:text-dark-charcoal/50"
                            />
                            <Icon
                                icon="lucide:search"
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => handleSearchChange('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-orange"
                                >
                                    <Icon icon="mdi:close" className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative w-full">
                            <select
                                value={activeCategory}
                                onChange={(e) => handleFilterChange(e.target.value as Category)}
                                className="appearance-none w-full px-6 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-hidden focus:border-primary-orange bg-white text-dark-charcoal cursor-pointer font-medium"
                            >
                                <option value="ALL">All Types</option>
                                <option value="CERTIFICATION">Certifications</option>
                                <option value="MEMBERSHIP">Memberships</option>
                                <option value="LICENSE">Licences</option>
                            </select>
                            <Icon icon="mdi:chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal pointer-events-none" />
                        </div>

                        {/* Country Dropdown */}
                        <div className="relative w-full">
                            <select
                                value={selectedCountry}
                                onChange={(e) => handleCountryChange(e.target.value as Country)}
                                className="appearance-none w-full px-6 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-hidden focus:border-primary-orange bg-white text-dark-charcoal cursor-pointer font-medium"
                            >
                                <option value="All Country">All Countries</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Uganda">Uganda</option>
                            </select>
                            <Icon icon="mdi:chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal pointer-events-none" />
                        </div>
                    </div>

                    {/* Results count */}
                    {(searchQuery || activeCategory !== 'ALL' || selectedCountry !== 'All Country') && (
                        <div className="mb-6 text-sm text-dark-charcoal/60">
                            Found {filteredDocuments.length} result{filteredDocuments.length !== 1 ? 's' : ''}
                            {totalPages > 1 && ` — Page ${currentPage} of ${totalPages}`}
                        </div>
                    )}

                    {/* No results */}
                    {filteredDocuments.length === 0 && (
                        <div className="text-center py-20">
                            <Icon icon="mdi:file-search-outline" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-dark-charcoal text-lg mb-1 font-medium">No results found</p>
                            <p className="text-dark-charcoal/50 text-sm">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </motion.div>

                {/* Cards Grid */}
                {paginatedDocuments.length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence mode="popLayout">
                            {paginatedDocuments.map((doc, index) => (
                                <motion.div
                                    layout
                                    key={`${doc.country}-${doc.title}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: index * 0.04 }}
                                    onClick={() => setPreviewDoc(doc)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') setPreviewDoc(doc)
                                    }}
                                    className="flex flex-col bg-white border border-gray-50 rounded-2xl overflow-hidden shadow-gray-400/10 shadow-xl hover:shadow-primary-orange/10 transition-shadow cursor-pointer"
                                >
                                    {/* Cover Image */}
                                    <div className="relative w-full aspect-4/3 bg-gray-100">
                                        {doc.coverImageUrl ? (
                                            <Image
                                                src={doc.coverImageUrl}
                                                alt={doc.title}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-light-grey">
                                                <Icon icon={getCategoryIcon(doc.category)} className="w-16 h-16 text-dark-charcoal/20" />
                                            </div>
                                        )}
                                        {/* PDF Badge */}
                                        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-dark-charcoal/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                            <Icon icon="mdi:file-pdf-box" className="w-3 h-3" />
                                            PDF
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-1 p-6">
                                        {doc.year && (
                                            <span className="text-sm font-bold text-primary-orange mb-2">{doc.year}</span>
                                        )}

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-dark-charcoal mb-2 leading-tight">
                                            {doc.title}
                                        </h3>

                                        {/* Tags */}
                                        <div className="flex flex-wrap items-center gap-2 mb-4">
                                            <span className="flex items-center gap-1 text-xs font-medium text-dark-charcoal/60 uppercase tracking-wide">
                                                <Icon icon="solar:map-point-broken" className="w-3.5 h-3.5" />
                                                {doc.country}
                                            </span>
                                            <span className="text-dark-charcoal/30">•</span>
                                            <span className="text-xs font-medium text-dark-charcoal/60 uppercase tracking-wide">
                                                {doc.category.charAt(0) + doc.category.slice(1).toLowerCase()}
                                            </span>
                                        </div>

                                        {/* View document / Download */}
                                        <div className="mt-auto flex items-center justify-between gap-4">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setPreviewDoc(doc)
                                                }}
                                                className="flex items-center gap-2 text-primary-orange font-bold hover:gap-3 transition-all"
                                            >
                                                View document
                                                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                                            </button>
                                            <a
                                                href={`/api/documents/download?url=${encodeURIComponent(doc.link)}&filename=${encodeURIComponent(doc.title)}.pdf`}
                                                onClick={(e) => e.stopPropagation()}
                                                aria-label={`Download ${doc.title}`}
                                                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-dark-charcoal/60 hover:text-primary-orange hover:bg-primary-orange/10 transition-colors"
                                            >
                                                <Icon icon="solar:download-minimalistic-broken" className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                <DocumentPreviewModal
                    isOpen={previewDoc !== null}
                    onClose={() => setPreviewDoc(null)}
                    title={previewDoc?.title ?? ''}
                    fileUrl={previewDoc?.link ?? ''}
                />

                {/* Pagination — matching news/reports style */}
                {filteredDocuments.length > ITEMS_PER_PAGE && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center gap-4 mt-12"
                    >
                        <div className="flex items-center gap-2">
                            {/* Previous */}
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-6 py-3 rounded-full border transition-colors flex items-center gap-2 text-md font-medium uppercase ${currentPage === 1
                                    ? 'opacity-50 cursor-not-allowed text-gray-400 border-gray-300'
                                    : 'border-dark-charcoal text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
                                    }`}
                            >
                                <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                                Previous
                            </button>

                            {/* Page numbers */}
                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                    const showPage =
                                        page === 1 ||
                                        page === totalPages ||
                                        (page >= currentPage - 1 && page <= currentPage + 1)

                                    if (!showPage) {
                                        if (page === currentPage - 2 || page === currentPage + 2) {
                                            return <span key={page} className="text-gray-400 px-2">...</span>
                                        }
                                        return null
                                    }

                                    return (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`w-12 h-12 rounded-full border text-md font-medium transition-colors ${currentPage === page
                                                ? 'bg-primary-orange text-white border-primary-orange'
                                                : 'border-dark-charcoal text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Next */}
                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-6 py-3 rounded-full border transition-colors flex items-center gap-2 text-md font-medium uppercase ${currentPage === totalPages
                                    ? 'opacity-50 cursor-not-allowed text-gray-400 border-gray-300'
                                    : 'border-dark-charcoal text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
                                    }`}
                            >
                                Next
                                <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Page info */}
                        <p className="text-sm text-gray-600">
                            Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredDocuments.length)} of {filteredDocuments.length} results
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
