'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="section-snap bg-gray-100 text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left space-y-4 max-w-4xl"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="text-primary-orange">Resources</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Download official SGA guidance documents (PDF) for offline use and internal sharing across all operating countries.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

