'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import DecorativePattern from '@/components/DecorativePattern'

export default function AboutIntro({ imageUrl = '/images/ug/about.png' }) {
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
            <h2 className="text-xl md:text-3xl font-bold text-primary-orange relative pb-3">
              <span>Who we are</span>
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              SGA Uganda delivers integrated security solutions for individuals, businesses, and institutions. We combine trained personnel, proven processes, and modern technology to keep people and assets safe—24/7.
            </p>
            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-primary-orange rounded-full aspect-square p-4 flex items-center justify-center'>
                <h3 className='text-lg font-bold text-white text-center'>Discipline</h3>
              </div>
              <div className='bg-primary-orange rounded-full aspect-square p-4 flex items-center justify-center'>
                <h3 className='text-lg font-bold text-white text-center'>Loyalty</h3>
              </div>
              <div className='bg-primary-orange rounded-full aspect-square p-4 flex items-center justify-center'>
                <h3 className='text-lg font-bold text-white text-center'>Integrity</h3>
              </div>
              <div className='bg-primary-orange rounded-full aspect-square p-4 flex items-center justify-center'>
                <h3 className='text-lg font-bold text-white text-center'>Innovation</h3>
              </div>
              <div className='bg-primary-orange rounded-full aspect-square p-4 flex items-center justify-center'>
                <h3 className='text-lg font-bold text-white text-center'>Excellence</h3>
              </div>
              <div className='bg-primary-orange rounded-full aspect-square p-4 flex items-center justify-center'>
                <h3 className='text-lg font-bold text-white text-center'>Experience</h3>
              </div>
            </div>
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
              alt="SGA Security Uganda - Uganda's Trusted Security Partner"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <DecorativePattern 
          className="transition-none" 
          static={true}
          colors={['bg-red-600', 'bg-black', 'bg-yellow-500']}
        />
      </div>
    </section>
  )
}

