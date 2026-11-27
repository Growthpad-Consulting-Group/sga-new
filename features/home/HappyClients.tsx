'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCarousel } from '@/components/ui/Carousel'
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

  // Use carousel for pagination (show 8 clients per page - 2 rows of 4)
  const carousel = useCarousel(filteredClients.length, 12)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    carousel.goToPage(1)
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

        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 overflow-hidden border-t border-l border-dark-charcoal/10">
          {carousel.currentItems(filteredClients).map((client, index) => {
            return (
              <div
                key={index}
                className={`
                  border-r border-b border-dark-charcoal/10 aspect-[4/3] md:aspect-square p-2 sm:p-3 flex items-center justify-center
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
            );
          })}
        </div>

        {/* Page Indicator */}
        {carousel.totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: carousel.totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => carousel.goToPage(i + 1)}
                className={`rounded-full transition-all duration-300 ${carousel.currentPage === i + 1
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

