'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const concernCategories = [
  'Corruption',
  'Fraud',
  'Ethics Violation',
  'Retaliation',
  'Policy Breach',
  'Other',
]

export default function WhistleblowingForm(): React.JSX.Element {
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!category || !description || !consent) {
      return
    }

    // Handle form submission here
    console.log('Whistleblowing report submitted:', {
      anonymous: isAnonymous,
      category,
      description,
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center">
        <Icon icon="mdi:shield-check" className="w-16 h-16 text-primary-orange mx-auto mb-4" />
        <h3 className="text-xl md:text-2xl font-bold text-dark-charcoal mb-2">Report Submitted</h3>
        <p className="text-gray-700 max-w-xl mx-auto">
          Thank you for speaking up. Your report has been received and will be reviewed in accordance with our whistleblowing policy.
        </p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-100 border border-gray-200 rounded-2xl p-6 md:p-10"
    >
      <h3 className="text-xl md:text-2xl font-bold text-dark-charcoal mb-2 capitalize">Send your grievance</h3>
      <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
        You can reach out to us via our Toll-Free Number -{' '}
        <a href="tel:0800723910" className="text-primary-orange font-semibold hover:underline">
          0800 723910
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anonymous Toggle */}
        <div>
          <label className="block text-sm font-semibold text-dark-charcoal mb-3">
            Would you like to remain anonymous? <span className="text-primary-orange">*</span>
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsAnonymous(true)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${isAnonymous
                ? 'bg-primary-orange text-white'
                : 'bg-white text-dark-charcoal border border-gray-300 hover:border-primary-orange'
                }`}
            >
              Yes, keep me anonymous
            </button>
            <button
              type="button"
              onClick={() => setIsAnonymous(false)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${!isAnonymous
                ? 'bg-primary-orange text-white'
                : 'bg-white text-dark-charcoal border border-gray-300 hover:border-primary-orange'
                }`}
            >
              No, I'll share my details
            </button>
          </div>
        </div>

        {/* Nature of Concern */}
        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-dark-charcoal mb-2">
            Nature of Concern <span className="text-primary-orange">*</span>
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-dark-charcoal focus:outline-hidden focus:border-primary-orange"
          >
            <option value="">Select a category</option>
            {concernCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-dark-charcoal mb-2">
            Describe the concern <span className="text-primary-orange">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={6}
            placeholder="Please provide as much detail as possible, including dates, people involved, and any supporting information."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-dark-charcoal focus:outline-hidden focus:border-primary-orange resize-none"
          />
        </div>

        {/* Optional Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-dark-charcoal mb-2">
              Location / Country <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="location"
              type="text"
              placeholder="e.g. Kenya, Nairobi Branch"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-dark-charcoal focus:outline-hidden focus:border-primary-orange"
            />
          </div>
          <div>
            <label htmlFor="incident-date" className="block text-sm font-semibold text-dark-charcoal mb-2">
              Date of Incident <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="incident-date"
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-dark-charcoal focus:outline-hidden focus:border-primary-orange"
            />
          </div>
        </div>

        <div>
          <label htmlFor="evidence" className="block text-sm font-semibold text-dark-charcoal mb-2">
            Supporting Evidence <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="evidence"
            type="file"
            className="w-full text-sm text-gray-700 file:mr-4 file:py-2.5 file:px-6 file:rounded-full file:border-0 file:bg-primary-orange file:text-white file:font-semibold file:text-sm file:uppercase hover:file:bg-primary-orange/90 cursor-pointer"
          />
        </div>

        {/* Identity fields — only shown when not anonymous */}
        {!isAnonymous && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="space-y-6 overflow-hidden"
          >
            <div className="border-t border-gray-300 pt-6">
              <p className="text-sm text-gray-600 mb-4">
                Sharing your details is optional and only used if you'd like us to follow up with you directly.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-charcoal mb-2">
                    Full Name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-dark-charcoal focus:outline-hidden focus:border-primary-orange"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-charcoal mb-2">
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-dark-charcoal focus:outline-hidden focus:border-primary-orange"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-semibold text-dark-charcoal mb-2">
                  Email <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-dark-charcoal focus:outline-hidden focus:border-primary-orange"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Consent */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 w-5 h-5 accent-primary-orange shrink-0"
          />
          <span className="text-sm text-gray-700">
            I confirm that this report is made in good faith and to the best of my knowledge is accurate.
          </span>
        </label>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary-orange text-white px-10 py-4 rounded-full font-bold uppercase text-sm shadow-lg hover:shadow-xl transition-all"
        >
          Submit Report
        </motion.button>
      </form>
    </motion.div>
  )
}
