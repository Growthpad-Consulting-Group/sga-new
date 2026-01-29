'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurPeople({ imageUrl = '/images/group/about/about-2.png' }) {
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
             className="flex flex-col h-full space-y-8"
           >
            <div className="space-y-4 flex-grow">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-orange relative pb-3">
                <span>Our People</span>
                <span 
                  className="absolute bottom-0 left-0 w-full"
                  style={{
                    background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                    height: '1px'
                  }}
                ></span>
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Our strength is our people. Officers are vetted and trained in customer service, 
                incident response, and site protocols—with continuous refresher courses through regional training programs and supervision from experienced team leaders.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-orange relative pb-3">
                <span>Quality & Compliance</span>
                <span 
                  className="absolute bottom-0 left-0 w-full"
                  style={{
                    background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                    height: '1px'
                  }}
                ></span>
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
              alt="SGA Security Kenya - Kenya's Trusted Security Partner"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

