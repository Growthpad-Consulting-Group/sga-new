'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface NewsHeroProps {
  imageUrl?: string
}

export default function NewsHero({ imageUrl = '/images/contact/hero.png' }: NewsHeroProps): React.JSX.Element {
  return (
    <section id="hero" className=" bg-gray-100 text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-0">
      <div className="container-fluid mx-auto">
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
            <span className="text-primary-orange">News & Insights</span>
          </h1>
        </motion.div>
      </div>

      <div className="relative h-[400px] w-full md:h-[500px] lg:h-[600px]">
          <Image
            src={imageUrl}
            alt="SGA Security News and Insights"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </section>
  )
}

