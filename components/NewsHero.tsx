'use client'

import { motion } from 'framer-motion'

interface NewsHeroProps {
  imageUrl?: string
}

export default function NewsHero({ imageUrl = '/images/contact/hero.png' }: NewsHeroProps): React.JSX.Element {
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
            Group Updates
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            <span className="text-primary-orange">News & Reports</span>
          </h1>
        </motion.div>
      </div>

      {/* Large image with parallax effect */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundAttachment: '',
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </section>
  )
}

