'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurPeople({ imageUrl = '/images/ug/about.png' }) {
  return (
    <div id="our-people" className="bg-white relative pt-20 pb-24">
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
            className="flex flex-col h-full space-y-8"
          >
            <div className="space-y-4 flex-grow">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-4">
                Our People
              </h2>
              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                Our strength is our people. Officers are vetted and trained in customer service,
                incident response, and site protocols—with continuous refresher courses through regional training programs and supervision from experienced team leaders.
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-4">
                Quality & Compliance
              </h2>
              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                We align with international best practice and local regulations, emphasizing safety, confidentiality, and fair employment. Site SOPs, regular drills, and performance reviews help us maintain high standards.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full h-full min-h-[350px] lg:min-h-[450px] flex items-center"
          >
            <Image
              src={imageUrl}
              alt="SGA Security Uganda - Uganda's Trusted Security Partner"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

