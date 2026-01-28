'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'

interface AboutIntroProps {
  imageUrl?: string
}

export default function AboutIntro({ imageUrl = '/images/group/about/about-2.png' }: AboutIntroProps): React.JSX.Element {
  return (
    <section id="about-intro" className="section-snap flex items-center justify-center bg-gray-100 text-dark-charcoal py-16 sm:py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center space-y-5"
          >
            <div className="relative">
              <Icon
                icon="mdi:plus-thick"
                className="absolute -top-6 -left-6 md:-top-10 md:-left-8 w-12 h-12 md:w-12 md:h-12 text-primary-orange z-0"
              />
              <div className="relative z-10">
                <h2 className="text-xl md:text-6xl font-bold text-primary-orange">
                  Protecting people, businesses, and communities since 1969.
                </h2>
              </div>
            </div>
            <p className="text-sm md:text-2xl text-gray-600">
              SGA Security is the region's leading Security Solutions provider with fixed base operations in East Africa servicing security contracts throughout the continent.
              <br />
              <br />
              With over 55 years of service, SGA Security is dedicated to supporting sustainable safety and security for customers and the community by providing the best security solutions founded in our people, innovation and our commitment to social responsibility.</p>

          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full h-full min-h-[350px] lg:min-h-[450px]"
          >
            <Image
              src={imageUrl}
              alt="SGA Security - Protecting people, businesses, and communities"
              width={500}
              height={0}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

