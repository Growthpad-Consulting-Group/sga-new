'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'John Mwangi',
    role: 'CEO, TechCorp Kenya',
    content: 'SGA Security has been our trusted partner for over 5 years. Their professionalism and reliability are unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Nakato',
    role: 'Operations Manager, Retail Group',
    content: 'The security team is always alert and professional. We feel completely secure with SGA protecting our facilities.',
    rating: 5,
  },
  {
    name: 'David Kimani',
    role: 'Facility Manager, Corporate Tower',
    content: 'Outstanding service and quick response times. SGA Security understands our needs and delivers consistently.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-light-grey">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-navy-blue mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-dark-charcoal max-w-2xl mx-auto"
        >
          Trusted by leading businesses across East Africa
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-primary-orange text-xl">★</span>
              ))}
            </div>
            <p className="text-dark-charcoal mb-6 italic">
              "{testimonial.content}"
            </p>
            <div>
              <div className="font-bold text-navy-blue">{testimonial.name}</div>
              <div className="text-sm text-dark-charcoal">{testimonial.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

