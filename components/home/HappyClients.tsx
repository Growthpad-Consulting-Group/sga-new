'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useCarousel } from '@/components/Carousel'

interface Client {
  name: string
  logo: string
  category: string
}

const clients: Client[] = [
  { name: 'Client 1', logo: '/images/group/clients/1.svg', category: 'Multinationals' },
  { name: 'Client 2', logo: '/images/group/clients/2.svg', category: 'Government Institutions' },
  { name: 'Client 3', logo: '/images/group/clients/3.svg', category: 'Hospitals' },
  { name: 'Client 4', logo: '/images/group/clients/4.svg', category: 'Schools & Institutions' },
  { name: 'Client 5', logo: '/images/group/clients/5.svg', category: 'Diplomatic missions' },
  { name: 'Client 6', logo: '/images/group/clients/6.svg', category: 'Hotels' },
  { name: 'Client 7', logo: '/images/group/clients/7.svg', category: 'Financial institutions' },
  { name: 'Client 8', logo: '/images/group/clients/8.svg', category: 'NGOs' },
  { name: 'Client 9', logo: '/images/group/clients/9.svg', category: 'Other industries' },
  { name: 'Client 10', logo: '/images/group/clients/10.svg', category: 'Multinationals' },
  { name: 'Client 11', logo: '/images/group/clients/11.svg', category: 'Government Institutions' },
  { name: 'Client 12', logo: '/images/group/clients/12.svg', category: 'Hospitals' },
]

const filterOptions: string[] = [
  'ALL',
  'Multinationals',
  'Government Institutions',
  'Hospitals',
  'Schools & Institutions',
  'Diplomatic missions',
  'Hotels',
  'Financial institutions',
  'NGOs',
  'Other industries'
]

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
                  className={`shrink-0 whitespace-nowrap px-4 py-2 xl:px-6 xl:py-3 rounded-full border transition-colors flex items-center gap-1 text-xs xl:text-base font-medium uppercase ${activeFilter === filter
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

        <div className="grid grid-cols-2 md:grid-cols-6 overflow-hidden border-t border-l border-dark-charcoal/10">
          {carousel.currentItems(filteredClients).map((client, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`
                  border-r border-b border-dark-charcoal/10 aspect-square p-6 sm:p-8 flex items-center justify-center
                  hover:bg-light-grey transition-all duration-300
                `}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={160}
                  className="h-auto max-h-32 w-full object-contain transition-all duration-300"
                />
              </motion.div>
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

