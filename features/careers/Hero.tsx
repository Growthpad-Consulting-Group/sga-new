'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero({ imageUrl = '/images/misc/blog-placeholder' }) {
  return (
    <section id="hero" className="relative bg-gray-100 text-dark-charcoal pt-40 sm:pt-40 lg:pt-40 xl:pt-48 pb-0">
      <div className="container-fluid mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left space-y-2 pb-4"
        >
          <h2 className="text-sm md:text-base font-normal text-gray-700 uppercase tracking-wide">
            SGA Group Careers
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            <span className="text-primary-orange">Build a Career That Protects What Matters</span>
          </h1>
        </motion.div>
      </div>

      {/* Large image without margin-x */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src={imageUrl}
            alt="SGA Security Group - Security That Matters Across Africa"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
      </div>
    </section>
  )
}

