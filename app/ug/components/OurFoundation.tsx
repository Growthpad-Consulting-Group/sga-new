'use client'

import SectionWrapper from '@/components/SectionWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

const foundations = [
  {
    title: 'Mission',
    longDescription: 'To provide sustainable safety and security solutions in Uganda built on exceptional people, innovative technology, and unwavering responsibility to our clients and communities.',
    imageUrl: '/images/group/about/vision.png',
  },
  {
    title: 'Vision',
    longDescription: 'To be Uganda\'s most trusted security solutions provider, recognized for excellence, innovation, and our unwavering commitment to protecting what matters most to Ugandans. We envision a future where businesses and communities across Uganda feel safe and secure, enabled by our comprehensive security services.',
    imageUrl: '/images/group/about/vision.png',
  },
  {
    title: 'Values',
    longDescription: 'Integrity, excellence, innovation, and social responsibility form the foundation of our values in Uganda. We operate with transparency and ethical standards, continuously improving our services, embracing technological advancements, and giving back to Ugandan communities. These values shape our culture and define how we interact with clients, partners, and each other.',
    imageUrl: '/images/group/about/values.png',
  },
]

export default function OurFoundation({ 
  title = "Our Foundation",
  description = "Built on the pillars that define who we are and drive our commitment to excellence in Uganda."
}) {
  const { openModal } = useEnquiryModal()
  return (
    <SectionWrapper id="our-foundation" className="bg-light-grey relative pb-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-xs font-bold text-primary-orange uppercase tracking-wider">
              our foundation
            </p>
            <h3 className="text-xl md:text-2xl font-normal text-navy-blue relative pb-3">
              <span>Guided by purpose, driven by values.</span>
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {foundations.map((foundation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl group cursor-pointer">
                {/* Background Image */}
                <Image
                  src={foundation.imageUrl}
                  alt={foundation.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-primary-orange transition-colors duration-300"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {foundation.title}
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed max-w-xs mb-3 hidden group-hover:block">
                    {foundation.longDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

