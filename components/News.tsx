'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useCarousel, CarouselArrows } from './Carousel'

interface NewsItem {
  category: string
  title: string
  summary: string
  image: string
  country: string
  date: string
}

interface NewsProps {
  hideCountryDropdown?: boolean
  backgroundColor?: string
  country?: string
  customSubtext?: string
  initialNewsItems?: any[]
}

const newsItems: NewsItem[] = [
  // Kenya Items
  {
    category: 'Advisory Report',
    title: 'SGA Security Kenya: 2025 Security Outlook',
    summary: 'SGA Security releases its comprehensive annual report on the evolving security landscape in Kenya, highlighting key trends and safety protocols for businesses.',
    image: '/images/misc/blog-placeholder',
    country: 'Kenya',
    date: 'May 8, 2025',
  },
  {
    category: 'Blog',
    title: 'SGA Nairobi Headquarters Expansion',
    summary: 'SGA Security announces the expansion of its Nairobi headquarters to better serve our growing client base in the region.',
    image: '/images/misc/blog-placeholder',
    country: 'Kenya',
    date: 'June 12, 2025',
  },
  {
    category: 'Media',
    title: 'SGA Wins Top Security Provider Award 2025',
    summary: 'SGA Kenya has been recognized as the leading security solutions provider at the Annual Security Excellence Awards.',
    image: '/images/misc/blog-placeholder',
    country: 'Kenya',
    date: 'July 5, 2025',
  },
  {
    category: 'Advisory Report',
    title: 'SGA Cyber Protection for Kenyan Banks',
    summary: 'How SGA Security is partnering with major Kenyan banks to provide integrated physical and digital security solutions.',
    image: '/images/misc/blog-placeholder',
    country: 'Kenya',
    date: 'August 20, 2025',
  },


  // Tanzania Items
  {
    category: 'Blog',
    title: 'SGA Tanzania Launches Community Safety Initiative',
    summary: 'SGA Tanzania partners with local authorities in Arusha to launch a new community policing and safety awareness program.',
    image: '/images/misc/blog-placeholder',
    country: 'Tanzania',
    date: 'May 12, 2025',
  },
  {
    category: 'Advisory Report',
    title: 'SGA Port Security Protocols in Dar es Salaam',
    summary: 'New SGA protocols implemented for securing logistics and cargo at the Dar es Salaam port. Full advisory for logistics partners.',
    image: '/images/misc/blog-placeholder',
    country: 'Tanzania',
    date: 'June 25, 2025',
  },
  {
    category: 'Media',
    title: 'SGA Tanzania Training Academy Graduates 500 Guards',
    summary: 'Feature story on our advanced training academy in Tanzania setting new standards for professional security guards.',
    image: '/images/misc/blog-placeholder',
    country: 'Tanzania',
    date: 'July 18, 2025',
  },
  {
    category: 'Blog',
    title: 'SGA Smart Safe Technology for Retail',
    summary: 'How SGA Tanzania is revolutionizing cash-in-transit services with smart safe technology for retail businesses.',
    image: '/images/misc/blog-placeholder',
    country: 'Tanzania',
    date: 'August 10, 2025',
  },

  // Uganda Items
  {
    category: 'Media',
    title: 'SGA Uganda Annual Security Conference',
    summary: 'SGA Security hosts key stakeholders at the annual security conference in Kampala to discuss integrated security systems.',
    image: '/images/misc/blog-placeholder',
    country: 'Uganda',
    date: 'May 15, 2025',
  },
  {
    category: 'Advisory Report',
    title: 'SGA Security in Uganda\'s Oil & Gas Sector',
    summary: 'SGA releases specialized risk assessment and security strategies for the growing energy sector in Western Uganda.',
    image: '/images/misc/blog-placeholder',
    country: 'Uganda',
    date: 'June 30, 2025',
  },
  {
    category: 'Blog',
    title: 'SGA Emergency Response in Kampala',
    summary: 'Our response teams are now assisting with traffic management during peak hours to ensure rapid response times in Kampala.',
    image: '/images/misc/blog-placeholder',
    country: 'Uganda',
    date: 'July 22, 2025',
  },
  {
    category: 'Media',
    title: 'Women in Security: Leadership at SGA Uganda',
    summary: 'Celebrating the women leaders at SGA Uganda who are driving change and excellence in the security industry.',
    image: '/images/misc/blog-placeholder',
    country: 'Uganda',
    date: 'August 5, 2025',
  },
]

import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

export default function News({ hideCountryDropdown = false, backgroundColor = 'bg-white', country, customSubtext, initialNewsItems }: NewsProps) {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedCountry, setSelectedCountry] = useState(country || 'All Country')
  const [searchQuery, setSearchQuery] = useState('')

  const allNewsItems = initialNewsItems || newsItems

  const filteredItems = allNewsItems.filter(item => {
    // If a specific country prop is passed, only show news for that country
    const itemCountryMatchesProp = country ? item.country === country : true

    const category = item.category || 'Blog'
    const matchesFilter = activeFilter === 'ALL' || category.toUpperCase() === activeFilter
    const matchesCountry = selectedCountry === 'All Country' || item.country === selectedCountry
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesFilter && matchesCountry && matchesSearch && itemCountryMatchesProp
  })

  // For group homepage (no country prop), ensure we show one from each country
  let displayItems = filteredItems
  if (!country && selectedCountry === 'All Country' && activeFilter === 'ALL' && !searchQuery) {
    // Get newest article from each country
    const sorted = [...allNewsItems].sort((a, b) => new Date(b.date || b.publishedAt).getTime() - new Date(a.date || a.publishedAt).getTime())
    const kenyaArticle = sorted.find(item => item.country === 'Kenya')
    const tanzaniaArticle = sorted.find(item => item.country === 'Tanzania')
    const ugandaArticle = sorted.find(item => item.country === 'Uganda')

    displayItems = [kenyaArticle, tanzaniaArticle, ugandaArticle].filter(Boolean)
  }

  // Use carousel hook for pagination
  const carousel = useCarousel(displayItems.length, 3)

  // Reset to first page when filters change
  const handleFilterChange = (newFilter: string) => {
    setActiveFilter(newFilter)
    carousel.goToPage(1)
  }

  const handleCountryChange = (newCountry: string) => {
    setSelectedCountry(newCountry)
    carousel.goToPage(1)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    carousel.goToPage(1)
  }

  return (
    <section id="news" className={`flex items-center justify-center relative pt-14 py-4 overflow-x-hidden ${backgroundColor}`}>
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
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider">
              news & insights
            </p>
            <div className="section-title-container w-full flex items-end justify-between">
              <h3 className="section-title text-xl md:text-3xl lg:text-5xl text-primary-orange capitalize">
                Stay informed, stay secure
              </h3>
              <div className="section-title-bar"></div>
              <CarouselArrows
                onPrev={carousel.prevPage}
                onNext={carousel.nextPage}
                canGoPrev={carousel.canGoPrev}
                canGoNext={carousel.canGoNext}
                className="mb-1 relative z-20"
              />
            </div>
            <p className="text-base font-normal md:text-2xl text-dark-charcoal pb-4 mt-4">
              {customSubtext || `Get the latest news, safety tips, and updates from SGA ${country || 'Security'}.`}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 w-full">
              <div className="flex flex-wrap gap-2">
                {['ALL', 'ADVISORY REPORT', 'BLOG', 'MEDIA'].map((filter) => {
                  const count = filter === 'ALL'
                    ? (country ? allNewsItems.filter(item => item.country === country).length : allNewsItems.length)
                    : allNewsItems.filter(item => (item.category || '').toUpperCase() === filter && (country ? item.country === country : true)).length;

                  return (
                    <button
                      key={filter}
                      onClick={() => handleFilterChange(filter)}
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

              {/* Right side - Country Dropdown + Search */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 ml-auto">
                {/* Country Dropdown - Hidden on country-specific pages */}
                {!hideCountryDropdown && (
                  <div className="relative w-full sm:w-48">
                    <select
                      value={selectedCountry}
                      onChange={(e) => handleCountryChange(e.target.value)}
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
                )}

                {/* Search Input */}
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="SEARCH..."
                    className="pl-4 pr-10 py-2 border border-dark-charcoal rounded-full text-sm focus:outline-none focus:border-primary-orange w-full sm:w-64 text-dark-charcoal placeholder:text-dark-charcoal/50"
                  />
                  <Icon
                    icon="lucide:search"
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${hideCountryDropdown ? 'text-dark-charcoal' : 'text-primary-orange'}`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-12">
          {carousel.currentItems(displayItems).map((item, index) => (
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
              <Link
                href={`/news-reports/${item.slug.current || item.slug}`}
                className="relative w-full h-64 block cursor-pointer"
              >
                <Image
                  src={item.image || (item.mainImage ? urlFor(item.mainImage).url() : '/images/misc/blog-placeholder')}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Country Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1 px-5 py-2 rounded-full bg-primary-orange text-white text-sm uppercase font-normal z-10">
                  <Icon icon="mdi:map-marker" className="w-5 h-5 text-white" />
                  {item.country}
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1 bg-primary-orange text-white">
                {/* Category and Date */}
                <p className="text-lg font-normal text-white uppercase tracking-wider mb-2">
                  {item.category || 'Blog'} • {item.date || new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                {/* Title */}
                <Link href={`/news-reports/${item.slug.current || item.slug}`}>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3 line-clamp-2 hover:opacity-80 transition-opacity">
                    {item.title}
                  </h3>
                </Link>

                {/* Summary */}
                <p className="text-white text-lg leading-relaxed line-clamp-3">
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

