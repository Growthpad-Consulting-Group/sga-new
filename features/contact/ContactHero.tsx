'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ContactHeroProps {
  imageUrl?: string
}

export default function ContactHero({ imageUrl = '/images/contact/hero.png' }: ContactHeroProps): React.JSX.Element {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section ref={heroRef} id="hero" className="bg-gray-100 text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-0">
      <div className="container-fluid mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left space-y-2 pb-4"
        >
          <h2 className="text-sm md:text-base font-normal text-gray-700 uppercase tracking-wide">
            We’re here to help
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            <span className="text-primary-orange">Get In Touch With SGA Security</span>
          </h1>
        </motion.div>
      </div>

      {/* Large image with scroll-linked parallax effect */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute inset-x-0 top-[-12%] bottom-[-12%] will-change-transform"
          style={{
            y: imageY,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </section>
  )
}

