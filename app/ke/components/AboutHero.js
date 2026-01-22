'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero({ imageUrl = '/images/ke/about-sga.png' }) {
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
            About SGA Security Kenya
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-primary-orange">Security Excellence in Kenya Since 1969</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">Over 55 years of trusted, integrated security for homes, businesses, and institutions across Kenya.</p>
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
            src={imageUrl}
            alt="SGA Security Kenya - Security Excellence in Kenya Since 1969"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

