'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'

interface Stat {
  number: string
  label: string
}

const topRowStats: Stat[] = [
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

const bottomRowStats: Stat[] = [
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

interface OurImpactInNumbersProps {
  showPattern?: boolean
}

export default function OurImpactInNumbers({ showPattern = true }: OurImpactInNumbersProps): React.JSX.Element {
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
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider">
              our impact in numbers
            </p>
            <div className="section-title-container">
              <h3 className="section-title text-xl md:text-5xl font-bold text-primary-orange capitalize">
                Scale you can rely on
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Top Row - 3 Circles */}
        <div className="flex justify-center items-center gap-1 md:gap-6 mb-4 md:mb-6 flex-wrap capitalize">
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
                className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border border-primary-orange bg-primary-orange flex flex-col items-center justify-center shadow-lg group relative p-2 md:p-3 cursor-pointer"
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  backgroundColor: '#d84c1e',
                  borderColor: '#d84c1e',
                  boxShadow: '0 20px 40px rgba(216, 76, 30, 0.3)',
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut'
                }}
              >
                <span className="text-lg md:text-xl lg:text-3xl font-bold text-white transition-colors mb-1">
                  {stat.number}
                </span>
                <span className="text-white text-center text-[9px] md:text-[10px] lg:text-base font-normal px-2 leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 4 Circles */}
        <div className="flex justify-center items-center gap-1 md:gap-6 flex-wrap capitalize">
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
                className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border border-primary-orange bg-primary-orange flex flex-col items-center justify-center shadow-lg group relative p-2 md:p-3 cursor-pointer"
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  backgroundColor: '#d84c1e',
                  borderColor: '#d84c1e',
                  boxShadow: '0 20px 40px rgba(216, 76, 30, 0.3)',
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut'
                }}
              >
                <span className="text-lg md:text-xl lg:text-3xl font-bold text-white transition-colors mb-1">
                  {stat.number}
                </span>
                <span className="text-white text-center text-[9px] md:text-[10px] lg:text-base font-normal px-2 leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

