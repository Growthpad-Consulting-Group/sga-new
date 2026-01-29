'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import DecorativePattern from '@/components/DecorativePattern'

const countryData = {
  ke: {
    name: 'Kenya',
    title: 'Why Choose SGA Security Kenya',
    description: 'Over 55 years of trusted security excellence. Local expertise, global standards, and innovative solutions protecting Kenya\'s homes, businesses, and communities.',
    imageUrl: '/images/ke/about-sga.png',
    emergencyPhone: '0711 024 000',
  },
  ug: {
    name: 'Uganda',
    title: 'Why Choose SGA Security Uganda',
    description: 'Trusted security partner with deep local knowledge and proven expertise. Delivering comprehensive security solutions across Uganda.',
    imageUrl: '/images/ug/about-sga.png',
    emergencyPhone: '0772 200 048',
  },
  tz: {
    name: 'Tanzania',
    title: 'Why Choose SGA Security Tanzania',
    description: 'Leading security solutions provider with extensive experience protecting Tanzania\'s businesses, institutions, and communities.',
    imageUrl: '/images/tz/about-sga.png',
    emergencyPhone: '0784 700 299',
  },
}

export default function WhyUsHero({ countryCode = 'ke', imageUrl }) {
  const country = countryData[countryCode] || countryData.ke
  const heroImage = imageUrl || country.imageUrl
  const emergencyPhone = country.emergencyPhone

  return (
    <section id="hero" className="bg-white text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-20 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center py-8">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 flex flex-col justify-center relative"
          >
            <h3 className="text-sm md:text-base font-bold text-navy-blue tracking-wide">
              Why Us • {country.name}
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange">
              {country.title}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {country.description}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-primary-orange/90 transition-colors"
                >
                  Request quote
                </Link>
              </motion.div>
              <motion.a
                href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-navy-blue text-navy-blue px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-navy-blue hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Icon icon="streamline-sharp:emergency-call-remix" className="w-4 h-4" />
                <span>Emergency: {emergencyPhone}</span>
              </motion.a>
            </div>

            {/* Explore More Animated Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-4"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  const nextSection = document.querySelector('#why-choose-us') || document.querySelector('section:nth-of-type(2)')
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span className="text-sm text-gray-700 uppercase font-medium">Explore more</span>
                <Icon 
                  icon="material-symbols-light:arrow-circle-down-outline-rounded" 
                  className="w-6 h-6 text-navy-blue"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px]"
          >
            <Image
              src={heroImage}
              alt={`SGA Security ${country.name} - ${country.title}`}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
      {/* Decorative Pattern at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <DecorativePattern 
          circleCount={35} 
          colors={['bg-red-600', 'bg-green-600', 'bg-black']} 
          static={true} 
        />
      </div>
    </section>
  )
}

