'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SustainabilityHeroProps {
  imageUrl?: string
}

export default function SustainabilityHero({ imageUrl = '/images/sustainability/hero.png' }: SustainabilityHeroProps): React.JSX.Element {
  return (
    <section id="hero" className="section-snap bg-gray-100 text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-0">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left space-y-2 pb-4"
        >
          <h2 className="text-sm md:text-base font-normal text-gray-700 uppercase tracking-wide">
            Sustainability & ESG
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            <span className="text-primary-orange">Building a Safer, Sustainable Africa</span>
          </h1>
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
            alt="SGA Security Group - Building a Sustainable Future"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

