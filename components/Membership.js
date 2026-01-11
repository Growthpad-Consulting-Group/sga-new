'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'

const memberships = [
  {
    name: 'Member 1',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
  },
  {
    name: 'Member 2',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
  },
  {
    name: 'Member 3',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
  },
  {
    name: 'Member 4',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
  },
  {
    name: 'Member 5',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
  },
  {
    name: 'Member 6',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
  },
]

export default function Membership() {
  return (
    <SectionWrapper id="membership" className="bg-white py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-xs font-bold text-primary-orange uppercase tracking-wider">
              membership
            </p>
            <h3 className="text-xl md:text-2xl font-normal text-navy-blue relative pb-3">
              <span>Our Memberships</span>
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-8">
          {memberships.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-4 md:p-6 h-32 md:h-40 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src={member.logo}
                  alt={member.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

