'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'


const cards = [
  {
    title: 'Branch entrances and teller halls',
    description: 'Controlled entry points to manage visitor flow and reduce unauthorized access.',
    icon: 'carbon:security',
  },
  {
    title: 'Disciplined personnel',
    description: 'Professional teams trained to follow procedure and remain calm under pressure.',
    icon: 'ph:users',
  },
  {
    title: 'Structured command & escalation',
    description: 'Clear supervision and escalation paths for fast, accountable response.',
    icon: 'material-symbols-light:dashboard-outline-rounded',
  },
]

export default function WhyUsCards() {
  return (
    <section className="bg-white py-12 md:py-24 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Section Header */}
          <div className="section-title-container mb-16 md:mb-24">
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
              What sets SGA apart
            </h2>
            <div className="section-title-bar"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-primary-orange rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl flex flex-col min-h-[400px] md:min-h-[450px]"
              >
                {/* Icon Container */}
                <div className="mb-8 md:mb-12">
                  <Icon 
                    icon={card.icon} 
                    className="w-16 h-16 md:w-20 md:h-20 text-white stroke-[0.5]" 
                    strokeWidth={0.5}
                  />
                </div>
                
                {/* Text Content */}
                <div className="mt-auto space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-white text-lg md:text-xl font-normal leading-relaxed opacity-95">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

