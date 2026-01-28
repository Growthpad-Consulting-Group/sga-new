'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

interface Solution {
  title: string
  description: string
  imageUrl: string
}

interface GroupIntegratedSolutionsProps {
  title?: string
  description?: string
}

const defaultSolutions: Solution[] = [
  {
    title: 'Guarding',
    description: 'Professional guarding for offices, malls, logistics yards and estates.',
    imageUrl: '/images/group/guarding.png',
  },
  {
    title: 'Remote Surveillance (CCTV)',
    description: 'AI-enabled monitoring with proactive incident response.',
    imageUrl: '/images/group/CCTV.png',
  },
  {
    title: 'Cash‑in‑Transit (CIT)',
    description: 'Secure movement of valuables with armored fleet and vetted crews.',
    imageUrl: '/images/group/CIT.png',
  },
]

export default function GroupIntegratedSolutions({
  title = "What we Offer",
  description = "Security solutions built to keep your business, family, home, and property safe every day across Kenya, Uganda, and Tanzania.",
  solutions = defaultSolutions
}: GroupIntegratedSolutionsProps & { solutions?: Solution[] }) {
  const { openModal } = useEnquiryModal()
  return (
    <section id="integrated-solutions" className="section-snap flex items-center justify-center bg-light-grey relative min-h-[85vh] py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider">
              integrated solutions
            </p>
            <div className="section-title-container">
              <h3 className="section-title text-xl md:text-5xl font-bold text-primary-orange">
                {title}
              </h3>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl group cursor-pointer">
                {/* Background Image */}
                <Image
                  src={solution.imageUrl}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark-charcoal/60 group-hover:bg-primary-orange/80 transition-colors duration-300"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-xs mb-3">
                    {solution.description}
                  </p>
                  <Icon
                    icon="iconoir:arrow-right-circle"
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Request a Quote Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <motion.button
            onClick={openModal}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange text-white px-14 py-5 rounded-full font-semibold text-base uppercase hover:bg-[#d84c1e] transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Request a Quote
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

