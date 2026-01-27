'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'

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
  return (
    <section id="happy-clients" className="section-snap flex items-center justify-center bg-white py-12 md:py-20 min-h-[85vh] relative">
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
            className="space-y-3"
          >
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider">
              Trusted by leading organizations
            </p>
            <div className="flex items-end justify-between section-title-container !pb-4 mb-4">
              <h3 className="section-title text-xl md:text-5xl font-bold text-primary-orange">
                Happy Clients
              </h3>
              <div className="flex items-center gap-3 mb-1">
                <button className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300">
                  <Icon icon="mingcute:arrow-left-line" className="w-6 h-6" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300">
                  <Icon icon="mingcute:arrow-right-line" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 justify-start">
            {filterOptions.map((filter) => {
              const count = filter === 'ALL'
                ? clients.length
                : clients.filter(client => client.category === filter).length;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
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
        </div>

        <div className="border-2 border-dark-charcoal/30 rounded-xl grid grid-cols-2 md:grid-cols-4 overflow-hidden">
          {filteredClients.map((client, index) => {
            // Calculate row and column for desktop (4 cols) and mobile (2 cols)
            const rowDesktop = Math.floor(index / 4);
            const colDesktop = index % 4;
            const rowMobile = Math.floor(index / 2);
            const colMobile = index % 2;
            const totalRowsDesktop = Math.ceil(filteredClients.length / 4);
            const totalRowsMobile = Math.ceil(filteredClients.length / 2);
            const isLastRowDesktop = rowDesktop === totalRowsDesktop - 1;
            const isLastRowMobile = rowMobile === totalRowsMobile - 1;
            const isLastColDesktop = colDesktop === 3;
            const isLastColMobile = colMobile === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`
                  border-r-2 border-b-2 border-dark-charcoal/30
                  ${isLastColDesktop ? 'md:border-r-0' : ''}
                  ${isLastColMobile ? 'border-r-0 md:border-r' : ''}
                  ${isLastRowMobile ? 'border-b-0 md:border-b' : ''}
                  ${isLastRowDesktop ? 'md:border-b-0' : ''}
                  p-2 md:p-4 flex items-center justify-center h-32 md:h-52 
                  hover:bg-light-grey transition-all duration-300
                `}
              >
                <div className="relative w-full h-24 md:h-40">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  )
}

