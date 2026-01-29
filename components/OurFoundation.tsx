'use client'

import { motion } from 'framer-motion'
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
    imageUrl: '',
  },
  {
    title: 'Vision',
    longDescription: 'To be Africa’s trusted security solutions provider of choice, driven by quality, integrity, innovation, and strong customer relationships.',
    imageUrl: '',
  },
  {
    title: 'Values',
    longDescription: 'SGA Security fosters a culture of safety, pride, and professionalism, empowering our teams to deliver with quality, discipline, loyalty, and integrity.',
    imageUrl: '',
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
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-xl bg-primary-orange group cursor-pointer">
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {foundation.title}
                  </h3>
                  <p className="text-white text-base md:text-lg leading-relaxed max-w-xs">
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

