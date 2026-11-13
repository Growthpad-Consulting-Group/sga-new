'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface NewsHeroProps {
  imageUrl?: string
}

export default function NewsHero({ imageUrl = '/images/contact/hero.png' }: NewsHeroProps): React.JSX.Element {
  const heroRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '8%'])

  return (
    <section ref={heroRef} id="hero" className="bg-gray-100 text-dark-charcoal pt-40 sm:pt-40 lg:pt-48 pb-0">
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

      <div className="relative h-[400px] w-full overflow-hidden md:h-[500px] lg:h-[600px]">
        <Image
          src={imageUrl}
          alt="SGA Security News and Insights"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />

        <motion.div
          className={prefersReducedMotion
            ? 'absolute inset-0 hidden md:block'
            : 'absolute inset-x-0 -bottom-[10%] -top-[10%] hidden will-change-transform md:block'}
          style={{ y: prefersReducedMotion ? 0 : imageY }}
        >
          <Image
            src={imageUrl}
            alt="SGA Security News and Insights"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-black/10"></div>
      </div>
    </section>
  )
}

