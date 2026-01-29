'use client'

import { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

interface Solution {
  title: string
  icon: string
  description: string
}

interface IntegratedSolutionsProps {
  title?: string
  description?: string
  whiteBackground?: boolean
}

const solutions: Solution[] = [
  {
    title: 'Alarm & Response',
    icon: 'icon-park-solid:alarm',
    description: '24/7 monitoring with rapid deployment to your home.',
  },
  {
    title: 'Residential Guarding',
    icon: 'ic:baseline-apartment',
    description: 'Professional guards for apartments and gated communities.',
  },
  {
    title: 'Personal Panic App',
    icon: 'ic:baseline-dangerous',
    description: 'One-tap SOS linked to our control room.',
  },
  {
    title: 'CCTV & Surveillance',
    icon: 'mdi:cctv',
    description: 'Advanced monitoring systems for complete property coverage.',
  },
]

export default function IntegratedSolutions({
  title = "Tailored protection, designed for Uganda's households.",
  description = "Security solutions built to keep your family, home, and property safe every day.",
  whiteBackground = false,
}: IntegratedSolutionsProps) {
  const { openModal } = useEnquiryModal()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? solutions.length - 3 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= solutions.length - 3 ? 0 : prev + 1))
  }

  const bgClass = whiteBackground ? 'bg-white' : 'bg-light-grey'
  const cardBgClass = whiteBackground ? 'bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl' : 'bg-light-grey border border-gray-200 shadow-md hover:shadow-xl'
  return (
    <section id="integrated-solutions" className={`section-snap flex items-center justify-center ${bgClass} relative pb-0 overflow-x-hidden min-h-[100vh]`}>
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
            className="space-y-4 flex flex-col justify-center items-start text-left"
          >
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider mb-2">
              integrated solutions
            </p>
            <div className="section-title-container w-full flex items-end justify-between">
              <h3 className="section-title text-xl md:text-4xl font-bold text-primary-orange">
                {title}
              </h3>
              <div className="flex items-center gap-3 mb-1">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300"
                >
                  <Icon icon="mingcute:arrow-left-line" className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300"
                >
                  <Icon icon="mingcute:arrow-right-line" className="w-6 h-6" />
                </button>
              </div>
            </div>
            <p className="text-base font-normal md:text-2xl text-dark-charcoal max-w-4xl mt-4">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 pb-12">
            {solutions.slice(currentIndex, currentIndex + 3).map((solution, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-gray-200"
              >
                {/* Image/Icon Area */}
                <div className="relative w-full h-64 bg-gray-200">
                </div>

                {/* Orange Footer Section */}
                <div className="bg-primary-orange p-6 rounded-2xl flex flex-col flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-white text-2xl leading-relaxed mb-6 flex-1">
                    {solution.description}
                  </p>
                  <motion.button
                    onClick={openModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-orange px-6 py-3 rounded-full font-semibold text-sm uppercase hover:bg-gray-100 transition-colors w-fit"
                  >
                    Request Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

