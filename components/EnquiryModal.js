'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const interestOptions = [
  'Guarding',
  'Alarm & Response',
  'Dog & handler',
  'Remote Surveillance (CCTV/Monitoring)',
  'Cash Management/CIT',
  'Courier & Logistics Security',
  'Fire & Rescue',
  'Event security'
]

export default function EnquiryModal({ isOpen, onClose }) {
  const [enquiryType, setEnquiryType] = useState('Individual')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    interests: [],
    additionalDetails: '',
    agreeToContact: false,
    // Corporate fields
    companyName: '',
    jobTitle: '',
    companySize: '',
    industry: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleCheckboxChange = (e) => {
    setFormData(prev => ({
      ...prev,
      agreeToContact: e.target.checked
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (formData.interests.length === 0 || !formData.agreeToContact) {
      return
    }
    
    // Validate corporate fields if Corporate is selected
    if (enquiryType === 'Corporate') {
      if (!formData.companyName || !formData.jobTitle || !formData.companySize || !formData.industry) {
        alert('Please fill in all corporate fields')
        return
      }
    }
    
    // Handle form submission here
    console.log('Form submitted:', { enquiryType, ...formData })
    // You can add API call here
    alert('Thank you for your enquiry! We will respond within one business day.')
    onClose()
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      interests: [],
      additionalDetails: '',
      agreeToContact: false,
      companyName: '',
      jobTitle: '',
      companySize: '',
      industry: ''
    })
    setEnquiryType('Individual')
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Container - 30% width, Orange background */}
              <div className="w-full md:w-[30%] bg-primary-orange text-white p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Enquire Now</h2>
                  <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                    Tell us what you need and we'll connect you to the right team.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:clock-fast" className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Fast response</p>
                      <p className="text-white/80 text-sm">Within 1 business day</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:shield-lock" className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Secure handling</p>
                      <p className="text-white/80 text-sm">Privacy First</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:earth" className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Multi-country</p>
                      <p className="text-white/80 text-sm">KE • TZ • UG</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:account-group" className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Expert support</p>
                      <p className="text-white/80 text-sm">Corporate & Individual</p>
                    </div>
                  </div>
                </div>
                
                {/* Plus Icon */}
                <div className="flex justify-center mt-8">
                  <Icon icon="mdi:plus-thick" className="w-16 h-16 md:w-20 md:h-20 text-white/20" style={{ strokeWidth: 3 }} />
                </div>
              </div>

              {/* Right Container - 70% width */}
              <div className="w-full md:w-[70%] p-6 md:p-8 overflow-y-auto relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-dark-charcoal hover:text-primary-orange transition-colors z-10"
                  aria-label="Close modal"
                >
                  <Icon icon="mdi:close" className="w-6 h-6" />
                </button>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Enquiry Type Toggle */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-charcoal mb-3">
                      I'm enquiring as *
                    </label>
                    <div className="relative bg-light-grey p-1 rounded-full flex">
                      {/* Sliding Background */}
                      <motion.div
                        className="absolute top-1 bottom-1 bg-primary-orange rounded-full"
                        initial={false}
                        animate={{
                          left: enquiryType === 'Individual' ? '0.25rem' : '50%',
                          width: 'calc(50% - 0.5rem)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                      {/* Individual Button */}
                      <button
                        type="button"
                        onClick={() => {
                          setEnquiryType('Individual')
                          // Clear corporate fields when switching to Individual
                          setFormData(prev => ({
                            ...prev,
                            companyName: '',
                            jobTitle: '',
                            companySize: '',
                            industry: ''
                          }))
                        }}
                        className={`relative z-10 flex-1 px-6 py-3 rounded-full font-semibold transition-colors ${
                          enquiryType === 'Individual'
                            ? 'text-white'
                            : 'text-dark-charcoal'
                        }`}
                      >
                        Individual
                      </button>
                      {/* Corporate Button */}
                      <button
                        type="button"
                        onClick={() => setEnquiryType('Corporate')}
                        className={`relative z-10 flex-1 px-6 py-3 rounded-full font-semibold transition-colors ${
                          enquiryType === 'Corporate'
                            ? 'text-white'
                            : 'text-dark-charcoal'
                        }`}
                      >
                        Corporate
                      </button>
                    </div>
                  </div>

                  {/* Form Fields Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-dark-charcoal mb-2">
                        Full name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark-charcoal mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-dark-charcoal mb-2">
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-dark-charcoal mb-2">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                      >
                        <option value="">Select your country</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Corporate-specific fields */}
                  {enquiryType === 'Corporate' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Company Name */}
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-semibold text-dark-charcoal mb-2">
                          Company name *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                          placeholder="Enter your company name"
                        />
                      </div>

                      {/* Job Title */}
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-semibold text-dark-charcoal mb-2">
                          Job title *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                          placeholder="Enter your job title"
                        />
                      </div>

                      {/* Company Size */}
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-semibold text-dark-charcoal mb-2">
                          Company size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>

                      {/* Industry */}
                      <div>
                        <label htmlFor="industry" className="block text-sm font-semibold text-dark-charcoal mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                        >
                          <option value="">Select industry</option>
                          <option value="Banking & Finance">Banking & Finance</option>
                          <option value="Retail & Commerce">Retail & Commerce</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Education">Education</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Logistics & Transportation">Logistics & Transportation</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Government">Government</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* What are you interested in? */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-charcoal mb-3">
                      What are you interested in? (choose one or more) *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interestOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleInterestToggle(option)}
                          className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                            formData.interests.includes(option)
                              ? 'bg-primary-orange text-white'
                              : 'bg-light-grey text-dark-charcoal hover:bg-gray-200 border-2 border-transparent hover:border-gray-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {formData.interests.length === 0 && (
                      <p className="text-red-500 text-xs mt-2">Please select at least one option</p>
                    )}
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label htmlFor="additionalDetails" className="block text-sm font-semibold text-dark-charcoal mb-2">
                      Additional details
                    </label>
                    <textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      rows="4"
                      value={formData.additionalDetails}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeToContact"
                      name="agreeToContact"
                      required
                      checked={formData.agreeToContact}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-5 h-5 text-navy-blue border-gray-300 rounded focus:ring-navy-blue"
                    />
                    <label htmlFor="agreeToContact" className="text-sm text-dark-charcoal">
                      I agree to be contacted by SGA Security regarding my enquiry *
                    </label>
                  </div>

                 <div className='flex items-center justify-between'>
                     {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formData.interests.length === 0 || !formData.agreeToContact}
                    className="bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-navy-blue transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Submit enquiry
                  </button>

                  {/* Note */}
                  <p className="text-center text-sm text-gray-600">
                    We'll respond within one business day.
                  </p>
                 </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

