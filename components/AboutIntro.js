'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import SectionWrapper from './SectionWrapper'
import DecorativePattern from './DecorativePattern'

export default function AboutIntro({ imageUrl = '/images/group/about/about-2.png' }) {
  return (
    <section id="about-intro" className="section-snap flex items-center justify-center bg-gray-100 text-dark-charcoal py-16 sm:py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
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
                className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-8 h-8 md:w-10 md:h-10 text-primary-orange" 
                style={{ strokeWidth: 3 }}
              />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-orange pl-6 md:pl-8">
                Protecting people, businesses, and communities since 1969.
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              SGA Security is the region's leading Security Solutions provider with fixed base operations in East Africa servicing security contracts throughout the continent. With over 55 years of service, SGA Security is dedicated to supporting sustainable safety and security for customers and the community by providing the best security solutions founded in our people, innovation and our commitment to social responsibility.
            </p>
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
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <DecorativePattern className="transition-none" static={true} />
      </div>
    </section>
  )
}

