'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import DecorativePattern from './DecorativePattern'

const cards = [
  {
    title: 'Branch entrances and teller halls',
    description: 'Controlled entry points to manage visitor flow and reduce unauthorized access.',
    icon: 'mdi:door-open',
  },
  {
    title: 'Disciplined personnel',
    description: 'Professional teams trained to follow procedure and remain calm under pressure.',
    icon: 'mdi:shield-account',
  },
  {
    title: 'Structured command & escalation',
    description: 'Clear supervision and escalation paths for fast, accountable response.',
    icon: 'mdi:account-network',
  },
]

export default function WhyUsCards() {
  return (
    <section className="bg-white py-8 md:py-12 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Title with border bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-blue relative pb-4">
              What sets SGA apart
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '2px'
                }}
              ></span>
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-primary-orange rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon 
                    icon={card.icon} 
                    className="w-12 h-12 md:w-14 md:h-14 text-white" 
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Decorative Pattern at Bottom - Outside animated wrapper */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-0" style={{ pointerEvents: 'none' }}>
        <DecorativePattern 
          className="transition-none" 
          circleCount={35} 
          colors={['bg-red-600', 'bg-green-600', 'bg-black']} 
          static={true} 
        />
      </div>
    </section>
  )
}

