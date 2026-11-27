'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CarouselArrows, useInfiniteCarousel } from '@/components/ui/Carousel'
import { countryIndustries } from '@/data/industry-clients'

interface Client {
  name: string
  logo?: string
  category: string
}

// Every client we serve, across all countries, grouped by industry.
// Clients appearing under several industries or countries are listed once.
const clients: Client[] = (() => {
  const seen = new Set<string>()
  const list: Client[] = []
  for (const industries of Object.values(countryIndustries)) {
    for (const industry of industries) {
      for (const client of industry.clients) {
        const key = `${client.name}|${client.logo ?? ''}`
        if (seen.has(key)) continue
        seen.add(key)
        list.push({ name: client.name, logo: client.logo, category: industry.title })
      }
    }
  }
  return list
})()

// Industry filters, in the order they first appear across the countries
const filterOptions: string[] = ['ALL', ...Array.from(new Set(clients.map((client) => client.category)))]

export default function HappyClients() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filteredClients = activeFilter === 'ALL'
    ? clients
    : clients.filter(client => client.category === activeFilter)

  // Pages of 16 so every row is full at 2, 4 and 8 columns (2 rows of 8 on large screens).
  // Each page is one slide, using the same sliding carousel as the products and industries.
  const PAGE_SIZE = 16
  const pages = Array.from(
    { length: Math.ceil(filteredClients.length / PAGE_SIZE) },
    (_, i) => filteredClients.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE),
  )
  // The first page is repeated at the end so the loop looks continuous
  const loopedPages = pages.length > 1 ? [...pages, pages[0]] : pages

  const [hovered, setHovered] = useState(false)
  const carousel = useInfiniteCarousel(pages.length, 1, hovered ? 0 : 10000)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    carousel.goTo(0)
  }
  return (
    <section id="happy-clients" className="flex items-center justify-center bg-white py-12 md:py-20 min-h-[85vh] relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-fluid mx-auto"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-sm xl:text-base font-medium text-dark-charcoal uppercase tracking-wider">
              Trusted by leading organizations
            </p>
            <div className="flex items-end justify-between section-title-container pb-1! mb-4">
              <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange">
                Happy Clients
              </h3>
              <CarouselArrows
                onPrev={carousel.previous}
                onNext={carousel.next}
                canGoPrev={carousel.canMove}
                canGoNext={carousel.canMove}
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-10">
          <div className="flex overflow-x-auto sm:flex-wrap gap-2 justify-start w-full max-w-[100vw] sm:max-w-none pb-2 sm:pb-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filterOptions.map((filter) => {
              const count = filter === 'ALL'
                ? clients.length
                : clients.filter(client => client.category === filter).length;

              return (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`shrink-0 whitespace-nowrap px-4 py-2 xl:px-4 xl:py-2 rounded-full border transition-colors flex items-center gap-1 text-xs xl:text-sm font-medium uppercase ${activeFilter === filter
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
        </div>

        <div
          className="overflow-hidden border-t border-l border-dark-charcoal/10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex" style={carousel.trackStyle} onTransitionEnd={carousel.handleTransitionEnd}>
            {loopedPages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className="grid w-full shrink-0 grid-cols-2 md:grid-cols-4 lg:grid-cols-8"
                aria-hidden={pageIndex >= pages.length || undefined}
              >
                {page.map((client) => (
                  <div
                    key={client.name + (client.logo ?? '')}
                    className={`
                      border-r border-b border-dark-charcoal/10 aspect-[4/3] md:aspect-square p-4 sm:p-6 lg:p-5 flex items-center justify-center
                      hover:z-10 hover:scale-[1.02] hover:bg-light-grey hover:shadow-xl hover:shadow-primary-orange/10 transition-all duration-300
                    `}
                  >
                    {client.logo ? (
                      <img
                        src={`/images/clients/${client.logo}`}
                        alt={client.name}
                        loading="lazy"
                        className="h-auto max-h-20 sm:max-h-32 w-full object-contain transition-all duration-300"
                      />
                    ) : (
                      <span className="text-center text-xs sm:text-sm font-semibold leading-snug text-dark-charcoal">{client.name}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Page dots */}
        {pages.length > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => carousel.goTo(i)}
                className={`rounded-full transition-all duration-300 ${carousel.currentIndex % pages.length === i
                    ? 'bg-primary-orange w-8 h-2'
                    : 'bg-dark-charcoal/30 w-2 h-2'
                  }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}

