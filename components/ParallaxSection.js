'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import DecorativePattern from './DecorativePattern'

export default function ParallaxSection({ 
  title = "Who We Are",
  h2Title = "About SGA Group",
  description = "We are dedicated to supporting sustainable safety and security for our customers and communities — through exceptional personnel, innovative systems and uncompromising integrity."
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section 
      ref={ref}
      className="relative h-[700px] md:h-[800px] overflow-hidden flex items-center justify-start"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/group/about-sga-group.png"
          alt="About SGA Group"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Overlay for better text readability - Orange tint */}
        <div className="absolute inset-0 bg-primary-orange/75"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold text-white/90 uppercase tracking-wider">
            {title}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white relative pb-4 inline-block">
            {h2Title}
            <span 
              className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-white"
            ></span>
          </h2>
          <div className="relative max-w-5xl mx-auto pt-12 md:pt-16">
            <div className="relative">
              {/* Plus Icon - Top Left of Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-6 -left-6 md:-top-8 md:-left-8 z-20"
              >
                <Icon 
                  icon="mdi:plus-thick" 
                  className="w-8 h-8 md:w-12 md:h-12 text-white pr-2"
                  style={{ strokeWidth: 3, paddingRight: '10px' }}
                />
              </motion.div>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed text-left">
                {description}
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mt-8 md:mt-12">
              <motion.a
                href="#what-we-do"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-navy-blue text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
              >
                What we do
                <Icon 
                  icon="mdi:arrow-right" 
                  className="w-5 h-5"
                />
              </motion.a>
              <motion.a
                href="#sustainability"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Sustainability
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Pattern at Bottom */}
      <DecorativePattern 
        color="bg-white"
        className="z-10"
        static={true}
      />
    </section>
  )
}

