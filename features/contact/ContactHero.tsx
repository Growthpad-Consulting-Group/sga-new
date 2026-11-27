'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

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
    <section ref={heroRef} id="hero" className="relative bg-gray-100 pt-[129px] xl:pt-[153px] pb-0">
      {/* Large image with scroll-linked parallax effect */}
      <div className="relative w-full h-[400px] md:h-[480px] lg:h-[540px] overflow-hidden">
        <motion.div
          className="absolute inset-x-0 top-[-12%] bottom-[-12%] will-change-transform"
          style={{ y: imageY }}
        >
          <Image
            src={imageUrl}
            alt="Contact SGA Security"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
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
                We’re here to help
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-primary-orange">Get In Touch With SGA Security</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
