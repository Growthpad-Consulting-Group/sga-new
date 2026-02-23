'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

type Category = 'ALL' | 'CERTIFICATION' | 'MEMBERSHIP' | 'LICENSE'
type Country = 'All Country' | 'Kenya' | 'Tanzania' | 'Uganda'

interface DocumentItem {
    title: string
    category: Exclude<Category, 'ALL'>
    country: Exclude<Country, 'All Country'>
    link: string
}

const documents: DocumentItem[] = [
    // Kenya
    { title: 'ISO 18788', category: 'CERTIFICATION', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/7916/8188/5715/ISO_18788_2015_certificate.pdf' },
    { title: 'ISO 9001', category: 'CERTIFICATION', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/9716/8000/5535/ISO-9001.pdf' },
    { title: 'ISO 14001', category: 'CERTIFICATION', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/7716/8000/9363/ISO_14001.pdf' },
    { title: 'ISO 45001', category: 'CERTIFICATION', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/9916/8000/9364/ISO_45001.pdf' },
    { title: 'ICoCA', category: 'MEMBERSHIP', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/7717/6894/5928/ICoCA_Certified_Member_Recertificate_SGA_Certificate_1_2_1.pdf' },
    { title: 'PSRA', category: 'LICENSE', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/9816/8188/6489/SGA_K-PSRA_Registration_Certificate_2022-2027_001.pdf' },
    { title: 'KASA 2023', category: 'MEMBERSHIP', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/2916/8188/7806/KASA_certificate-2023_rotated.pdf' },
    { title: 'KSIA 2023', category: 'MEMBERSHIP', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/2116/8000/9364/KSIA_2023.pdf' },
    { title: 'CAK', category: 'LICENSE', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/6816/8190/7269/2022-CAK_LICENCE.pdf' },
    { title: 'KCAA', category: 'LICENSE', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/5916/8190/7362/KCAA_DOCS_2022-2024_.pdf' },
    { title: 'NITA', category: 'LICENSE', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/2816/8190/7440/NITA_Licence_2020-2021_001.pdf' },
    { title: 'SASA Membership', category: 'MEMBERSHIP', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/6716/8190/7516/SASA_Membership_2022_to_2023.pdf' },
    { title: 'SGA 2023', category: 'CERTIFICATION', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/2716/8190/7570/SGA_cert_2023.pdf' },
    { title: 'NEMA', category: 'LICENSE', country: 'Kenya', link: 'https://www.sgasecurity.com/application/files/7616/8190/7626/SGA_NEMA_CERTIFICATE_2021.pdf' },

    // Tanzania
    { title: 'ISO 14001 (EMS)', category: 'CERTIFICATION', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/3316/9088/5555/EMS.pdf' },
    { title: 'ISO 45001 (OHS)', category: 'CERTIFICATION', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/5016/9088/5887/OHS1.pdf' },
    { title: 'ISO 9001 (QMS)', category: 'CERTIFICATION', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/9716/9088/6037/QMS2.pdf' },
    { title: 'ISO 18788 (SOMS)', category: 'CERTIFICATION', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/9216/9088/6181/SOMS3.pdf' },
    { title: 'ICoCA', category: 'MEMBERSHIP', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/9116/8189/1776/ICoCA_Certificate_SGA_Security_rotated.pdf' },
    { title: 'LATRA', category: 'LICENSE', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/6316/8189/1969/Certificate-_LATRA_rotated.pdf' },
    { title: 'CIT Business Licence', category: 'LICENSE', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/9916/8001/1949/SGA_CIT__business_licence.pdf' },
    { title: 'CIT Courier', category: 'LICENSE', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/7416/8001/1952/SGA_CIT__Courier__2023.pdf' },
    { title: 'SASA Membership', category: 'MEMBERSHIP', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/9016/8001/1969/SASA_Membership_2022_to_2023.pdf' },
    { title: 'Business Licence', category: 'LICENSE', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/7916/8001/1971/SGA_SECURITY_-_BUSINESS_LICENSEI_SELLING__FIRE_FIGHTING_2022_-2023.pdf' },
    { title: 'TCRA', category: 'LICENSE', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/8516/8001/1973/TCRA_-_Installation_systems_licence_2021-2024.pdf' },
    { title: 'TSIA', category: 'MEMBERSHIP', country: 'Tanzania', link: 'https://www.sgasecurity.com/application/files/2416/8189/2154/TSIA_-_SGA_Security_rotated.pdf' },

    // Uganda
    { title: 'ISO 18788', category: 'CERTIFICATION', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/1916/8191/5979/ISO_18788_2015_certificate_1.pdf' },
    { title: 'ISO 9001', category: 'CERTIFICATION', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/9616/8001/0376/ISO_9001_-_SECURITY_GROUP_UGANDA.pdf' },
    { title: 'ISO 14001', category: 'CERTIFICATION', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/4116/8001/0376/ISO_14001_-SECURITY_GROUP_UGAND._.pdf' },
    { title: 'ISO 22301', category: 'CERTIFICATION', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/8916/8001/0376/ISO_22301-_SECURITY_GROUP_UGANDA_LIMITED.pdf' },
    { title: 'ISO 27001', category: 'CERTIFICATION', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/4416/8001/0376/ISO_27001_-_SECURITY_GROUP_UGANDA_LIMITED.pdf' },
    { title: 'ISO 45001', category: 'CERTIFICATION', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/6716/8001/0376/ISO_45001-SECURITY_GROUP_UGA._.pdf' },
    { title: 'ICoCA', category: 'MEMBERSHIP', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/5716/8189/2332/ICoCA_Certificate_SGA_Security_rotated_1.pdf' },
    { title: 'PPDA', category: 'LICENSE', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/5816/8001/0376/PPDA_Certificate.pdf' },
    { title: 'Workplace Registration', category: 'LICENSE', country: 'Uganda', link: 'https://www.sgasecurity.com/application/files/1216/8001/0376/Workplace_Registration_Certificate.pdf' },
]

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

export default function CertificationsAndMemberships() {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeCategory, setActiveCategory] = useState<Category>('ALL')
    const [selectedCountry, setSelectedCountry] = useState<Country>('All Country')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    // Randomize documents on mount to avoid country bias
    const [randomizedDocuments] = useState(() => shuffleArray(documents))

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
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
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
                                className="w-full pl-12 pr-4 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-none focus:border-primary-orange text-dark-charcoal placeholder:text-dark-charcoal/50"
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
                                className="appearance-none w-full px-6 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-none focus:border-primary-orange bg-white text-dark-charcoal cursor-pointer font-medium"
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
                                className="appearance-none w-full px-6 py-3 border border-dark-charcoal rounded-full text-sm focus:outline-none focus:border-primary-orange bg-white text-dark-charcoal cursor-pointer font-medium"
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
                                <motion.a
                                    layout
                                    key={`${doc.country}-${doc.title}`}
                                    href={doc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: index * 0.04 }}
                                    whileHover={{ y: -4 }}
                                    className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                                >
                                    {/* Top coloured band = primary-orange per brand */}
                                    <div className="" />

                                    <div className="flex flex-col flex-1 p-6">
                                        {/* Icon */}
                                        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-primary-orange/10 text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300">
                                            <Icon icon={getCategoryIcon(doc.category)} className="w-6 h-6" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-dark-charcoal mb-3 leading-tight">
                                            {doc.title}
                                        </h3>

                                        {/* Tags */}
                                        <div className="flex flex-wrap items-center gap-2 mt-auto">
                                            <span className="flex items-center gap-1 text-xs font-medium text-dark-charcoal/60 uppercase tracking-wide">
                                                <Icon icon="solar:map-point-broken" className="w-3.5 h-3.5" />
                                                {doc.country}
                                            </span>
                                            <span className="text-dark-charcoal/30">•</span>
                                            <span className="text-xs font-medium text-dark-charcoal/60 uppercase tracking-wide">
                                                {doc.category.charAt(0) + doc.category.slice(1).toLowerCase()}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Download footer */}
                                    <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between text-sm font-medium text-dark-charcoal group-hover:text-primary-orange transition-colors">
                                        <span>View PDF</span>
                                        <Icon icon="solar:download-minimalistic-broken" className="w-4 h-4" />
                                    </div>
                                </motion.a>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

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
