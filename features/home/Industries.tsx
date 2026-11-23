'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import CircleCarousel, { type CircleCarouselItem } from '@/components/ui/CircleCarousel'

export interface IndustryCarouselItem {
  name: string
  icon: string
  image: string
}

interface IndustriesProps {
  backgroundColor?: string
  industries: IndustryCarouselItem[]
  countryName?: string
  ctaLink?: string
  subtext?: string
}

export default function Industries({
  backgroundColor = 'bg-white',
  industries,
  countryName = 'Kenya',
  ctaLink = '#industries',
  subtext,
}: IndustriesProps) {
  const items: CircleCarouselItem[] = industries.map((industry) => ({
    key: industry.name,
    title: industry.name,
    imageUrl: industry.image,
  }))

  return (
    <section id="industries" className={`flex items-center justify-center ${backgroundColor} relative min-h-[85vh] py-12 md:py-16 overflow-x-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-fluid mx-auto"
      >
        <CircleCarousel
          title="Industries We Serve"
          description={subtext ?? `Beyond homes, we provide tailored solutions for businesses, institutions, and real estate developments across ${countryName}.`}
          items={items}
        />

        <div className="flex justify-center mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button href={ctaLink} variant="solid" size="small">
              Find Your Industry Solution
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
