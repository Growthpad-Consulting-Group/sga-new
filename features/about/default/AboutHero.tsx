'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface AboutHeroProps {
  imageUrl?: string
  eyebrow?: string
  title?: string
}

export default function AboutHero({
  imageUrl = '/images/misc/blog-placeholder',
  eyebrow = 'Who We Are',
  title = 'Security That Matters Across Africa',
}: AboutHeroProps): React.JSX.Element {
  const heroRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '8%'])

  return (
    <section ref={heroRef} id="hero" className="relative bg-gray-100 pt-[129px] xl:pt-[153px] pb-0">
      {/* Large image with parallax effect */}
      <div className="relative h-[400px] w-full overflow-hidden text-white md:h-[480px] lg:h-[540px]">
        <motion.div
          className={prefersReducedMotion
            ? 'absolute inset-0'
            : 'absolute inset-x-0 -bottom-[10%] -top-[10%] will-change-transform'}
          style={{ y: prefersReducedMotion ? 0 : imageY }}
        >
          <Image
            src={imageUrl}
            alt="SGA Security Group"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

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
              <p className="text-sm md:text-base font-normal uppercase tracking-wide text-white/90">
                {eyebrow}
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-primary-orange">{title}</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
