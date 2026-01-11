'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Security Guarding',
    description: 'Professional on-site security personnel trained to protect your assets and ensure safety.',
    icon: '🛡️',
  },
  {
    title: 'Electronic Security',
    description: 'Advanced surveillance systems, access control, and alarm monitoring solutions.',
    icon: '📹',
  },
  {
    title: 'Risk Assessment',
    description: 'Comprehensive security audits and risk analysis to identify vulnerabilities.',
    icon: '🔍',
  },
  {
    title: 'Consulting Services',
    description: 'Expert security consulting to develop customized protection strategies.',
    icon: '💼',
  },
  {
    title: 'Event Security',
    description: 'Specialized security services for corporate events, conferences, and gatherings.',
    icon: '🎯',
  },
  {
    title: 'Emergency Response',
    description: '24/7 rapid response teams ready to handle security incidents immediately.',
    icon: '🚨',
  },
]

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-navy-blue mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-dark-charcoal max-w-2xl mx-auto"
        >
          Comprehensive security solutions tailored to your needs
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-light-grey p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-navy-blue mb-3">
              {service.title}
            </h3>
            <p className="text-dark-charcoal">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

