'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero({ imageUrl = '/images/misc/blog-placeholder' }) {
  return (
    <section id="hero" className="relative bg-gray-100 pt-[129px] xl:pt-[153px] pb-0">
      {/* Large image without margin-x */}
      <div className="relative w-full h-[400px] md:h-[480px] lg:h-[540px]">
          <Image
            src={imageUrl}
            alt="SGA Security Group - Safety Tips and Security Guidance"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

        {/* Dark wash so the text stays readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 pb-12 md:pb-16">
          <div className="container-fluid mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left space-y-2 max-w-3xl"
            >
              <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-white/90">
                SGA Group Safety Tips
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
                <span className="text-primary-orange">Stay Safe, Stay Secure</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
