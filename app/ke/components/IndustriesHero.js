'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const countryData = {
  ke: {
    name: 'Kenya',
    title: 'Security Solutions for Every Industry in Kenya',
    description: 'Tailored security services protecting businesses, institutions, and communities across Kenya.',
    imageUrl: '/images/ke/about-sga.png',
  },
  ug: {
    name: 'Uganda',
    title: 'Security Solutions for Every Industry in Uganda',
    description: 'Comprehensive security services designed for Uganda\'s diverse business landscape.',
    imageUrl: '/images/ug/about-sga.png',
  },
  tz: {
    name: 'Tanzania',
    title: 'Security Solutions for Every Industry in Tanzania',
    description: 'Trusted security solutions protecting Tanzania\'s growing economy and communities.',
    imageUrl: '/images/tz/about-sga.png',
  },
}

export default function IndustriesHero({ countryCode = 'ke', imageUrl }) {
  const country = countryData[countryCode] || countryData.ke
  const heroImage = imageUrl || country.imageUrl

  return (
    <section id="hero" className="bg-gray-100 text-dark-charcoal pt-16 sm:pt-20 pb-0">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left space-y-2 pb-4"
        >
          <h2 className="text-sm md:text-base font-semibold text-gray-700 uppercase tracking-wide">
            Industries We Serve - SGA Security {country.name}
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-primary-orange">{country.title}</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">{country.description}</p>
        </motion.div>
      </div>
      
      {/* Large image without margin-x */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <Image
            src={heroImage}
            alt={`SGA Security ${country.name} - ${country.title}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

