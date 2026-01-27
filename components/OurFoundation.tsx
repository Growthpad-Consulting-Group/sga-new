'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

interface Foundation {
  title: string
  longDescription: string
  imageUrl: string
}

const foundations: Foundation[] = [
  {
    title: 'Mission',
    longDescription: 'To provide sustainable safety and security solutions built on people, innovation, and responsibility.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop',
  },
  {
    title: 'Vision',
    longDescription: 'To be the leading security solutions provider in Africa, recognized for excellence, innovation, and unwavering commitment to protecting what matters most. We envision a future where businesses and communities across the continent feel safe and secure, enabled by our comprehensive security services.',
    imageUrl: '/images/group/about/vision.png',
  },
  {
    title: 'Values',
    longDescription: 'Integrity, excellence, innovation, and social responsibility form the foundation of our values. We operate with transparency and ethical standards, continuously improving our services, embracing technological advancements, and giving back to the communities we serve. These values shape our culture and define how we interact with clients, partners, and each other.',
    imageUrl: '/images/group/about/values.png',
  },
]

interface OurFoundationProps {
  title?: string
  description?: string
}

export default function OurFoundation({
  title = "Our Foundation",
  description = "Built on the pillars that define who we are and drive our commitment to excellence."
}: OurFoundationProps): React.JSX.Element {
  const { openModal } = useEnquiryModal()
  return (
    <div id="our-foundation" className="bg-white relative pt-20 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-5xl font-bold text-primary-orange capitalize">
              our foundation
            </p>
            <div className="section-title-container">
              <h3 className="section-title text-xl md:text-xl font-normal text-dark-charcoal">
                Guided by purpose, driven by values.
              </h3>
            </div>
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
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-xl group cursor-pointer">
                {/* Background Image */}
                <Image
                  src={foundation.imageUrl}
                  alt={foundation.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy-blue/70 group-hover:bg-primary-orange transition-colors duration-300"></div>
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
    </div>
  )
}

