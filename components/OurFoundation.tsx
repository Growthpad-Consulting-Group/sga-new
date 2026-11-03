'use client'

import { motion } from 'framer-motion'
import Carousel from '@/components/Carousel'

interface Foundation {
  title: string
  longDescription: string
}

const foundations: Foundation[] = [
  {
    title: 'Mission',
    longDescription: 'To provide sustainable safety and security solutions built on people, innovation, and responsibility.',
  },
  {
    title: 'Vision',
    longDescription: 'To be Africa’s trusted security solutions provider of choice, driven by quality, integrity, innovation, and strong customer relationships.',
  },
  {
    title: 'Values',
    longDescription: 'SGA Security fosters a culture of safety, pride, and professionalism, empowering our teams to deliver with quality, discipline, loyalty, and integrity.',
  },
]

interface OurFoundationProps {
  title?: string
  description?: string
}

function renderCircle(foundation: Foundation) {
  return (
    <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden shadow-xl bg-primary-orange group cursor-pointer">
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center z-10">
        <h3 className="text-2xl md:text-4xl lg:text-2xl xl:text-4xl font-bold text-white mb-3">
          {foundation.title}
        </h3>
        <p className="text-white/90 text-sm md:text-lg lg:text-sm xl:text-lg leading-relaxed max-w-xs mb-3">
          {foundation.longDescription}
        </p>
      </div>
    </div>
  )
}

export default function OurFoundation({
  title = 'Our Foundation',
  description = 'Guided by purpose, driven by values.'
}: OurFoundationProps): React.JSX.Element {
  return (
    <div id="our-foundation" className="bg-white relative pt-20 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-9xl mx-auto container-fluid"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-5xl lg:text-4xl xl:text-5xl font-bold text-primary-orange capitalize">
              {title}
            </p>
            <div className="section-title-container">
              <h3 className="section-title text-sm xl:text-base font-normal text-dark-charcoal">
                {description}
              </h3>
            </div>
          </motion.div>
        </div>

        <div className="lg:hidden">
          <Carousel
            items={foundations}
            itemsPerPage={1}
            gridCols="grid-cols-1 justify-items-center"
            loop
            renderItem={(foundation: Foundation) => renderCircle(foundation)}
          />
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12 justify-items-center">
          {foundations.map((foundation, index) => (
            <motion.div
              key={foundation.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center w-full max-w-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              {renderCircle(foundation)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

