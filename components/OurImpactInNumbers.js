'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import DecorativePattern from './DecorativePattern'

const topRowStats = [
  {
    number: '19,000+',
    label: 'Security Professionals',
  },
  {
    number: '500+',
    label: 'vehicles',
  },
  {
    number: '30+',
    label: 'Office Locations',
  },
]

const bottomRowStats = [
  {
    number: '$17m',
    label: 'Total Assets',
  },
  {
    number: '$70m',
    label: 'Group Revenue',
  },
  {
    number: '3',
    label: 'countries',
  },
  {
    number: '13',
    label: 'Member of Consolidated Groups',
  },
]

export default function OurImpactInNumbers({ showPattern = true }) {
  return (
    <SectionWrapper id="our-impact" className="bg-white relative overflow-hidden">
      {/* Background Image - Static, no scroll animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/group/our-impact-in-numbers.png"
          alt="Our Impact in Numbers Background"
          fill
          className="object-cover"
          priority={false}
        />
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-xs font-semibold text-navy uppercase tracking-wider">
              our impact in numbers
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-blue relative pb-3">
              Our Impact in Numbers
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

        {/* Top Row - 3 Circles */}
        <div className="flex justify-center items-center gap-1 md:gap-2 mb-6 md:mb-8 flex-wrap">
          {topRowStats.map((stat, index) => (
            <motion.div
              key={`top-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="w-36 h-36 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-full border border-primary-orange bg-primary-orange flex flex-col items-center justify-center shadow-lg group relative p-2 md:p-3 cursor-pointer"
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  backgroundColor: '#00043E',
                  borderColor: '#00043E',
                  boxShadow: '0 20px 40px rgba(0, 4, 62, 0.3)',
                }}
                transition={{ 
                  duration: 0.3,
                  ease: 'easeOut'
                }}
              >
                <span className="text-xl md:text-2xl lg:text-2xl font-bold text-white transition-colors mb-1">
                  {stat.number}
                </span>
                <span className="text-white text-center text-[9px] md:text-[10px] lg:text-xs font-semibold px-2 leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 4 Circles */}
        <div className="flex justify-center items-center gap-1 md:gap-2 flex-wrap">
          {bottomRowStats.map((stat, index) => (
            <motion.div
              key={`bottom-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="w-36 h-36 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-full border border-primary-orange bg-primary-orange flex flex-col items-center justify-center shadow-lg group relative p-2 md:p-3 cursor-pointer"
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  backgroundColor: '#00043E',
                  borderColor: '#00043E',
                  boxShadow: '0 20px 40px rgba(0, 4, 62, 0.3)',
                }}
                transition={{ 
                  duration: 0.3,
                  ease: 'easeOut'
                }}
              >
                <span className="text-xl md:text-2xl lg:text-2xl font-bold text-white transition-colors mb-1">
                  {stat.number}
                </span>
                <span className="text-white text-center text-[9px] md:text-[10px] lg:text-xs font-semibold px-2 leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Pattern at Bottom - Static, no animations */}
      {showPattern && (
        <div className="absolute bottom-0 left-0 right-0 w-full" style={{ pointerEvents: 'none' }}>
          <DecorativePattern 
            className="z-10 transition-none !transition-none"
            static={true}
          />
        </div>
      )}
    </SectionWrapper>
  )
}

