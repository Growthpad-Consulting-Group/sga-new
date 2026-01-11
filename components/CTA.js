'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData])

      if (error) throw error

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-br from-navy-blue to-dark-charcoal text-white no-snap">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-light-grey">
            Ready to secure your business? Contact us today for a consultation.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-orange"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-orange"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-orange"
              placeholder="+254 700 000 000"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-orange resize-none"
              placeholder="Tell us about your security needs..."
            />
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-center"
            >
              Thank you! We'll be in touch soon.
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}

