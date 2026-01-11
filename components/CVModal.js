'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const jobTitleOptions = [
  'Security Guard',
  'Security Supervisor',
  'Security Manager',
  'CCTV Operator',
  'Alarm Response Officer',
  'Dog Handler',
  'Cash-in-Transit Officer',
  'Event Security Officer',
  'Fire & Rescue Officer',
  'Courier Security Officer',
  'IT Security Specialist',
  'Operations Manager',
  'Administrative Assistant',
  'Other'
]

export default function CVModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    jobTitle: '',
    cvFile: null,
    coverNote: '',
    agreeToPrivacy: false,
  })

  const [fileError, setFileError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Check file size (10MB = 10 * 1024 * 1024 bytes)
      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size must be less than 10MB')
        setFormData(prev => ({ ...prev, cvFile: null }))
        return
      }
      // Check if it's a PDF
      if (file.type !== 'application/pdf') {
        setFileError('Please upload a PDF file')
        setFormData(prev => ({ ...prev, cvFile: null }))
        return
      }
      setFileError('')
      setFormData(prev => ({
        ...prev,
        cvFile: file
      }))
    }
  }

  const handleCheckboxChange = (e) => {
    setFormData(prev => ({
      ...prev,
      agreeToPrivacy: e.target.checked
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.country || !formData.jobTitle || !formData.cvFile || !formData.agreeToPrivacy) {
      alert('Please fill in all required fields')
      return
    }
    
    // Handle form submission here
    console.log('CV Form submitted:', formData)
    // You can add API call here to upload the file and submit the form
    
    // Create FormData for file upload
    const submitData = new FormData()
    submitData.append('fullName', formData.fullName)
    submitData.append('email', formData.email)
    submitData.append('phone', formData.phone)
    submitData.append('country', formData.country)
    submitData.append('jobTitle', formData.jobTitle)
    submitData.append('cvFile', formData.cvFile)
    submitData.append('coverNote', formData.coverNote)
    
    alert('Thank you for your application! We will review your CV and get back to you soon.')
    onClose()
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      jobTitle: '',
      cvFile: null,
      coverNote: '',
      agreeToPrivacy: false,
    })
    setFileError('')
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
              className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Header with Orange Title */}
              <div className="bg-white p-6 md:p-8 border-b-2 border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary-orange">
                      Send your CV
                    </h2>
                    <p className="text-dark-charcoal text-base md:text-lg mb-2">
                      It takes under a minute. PDF preferred, max 10MB.
                    </p>
                    <p className="text-gray-600 text-sm">
                      We only use your information for recruitment. Your file is encrypted in transit.
                    </p>
                  </div>
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="text-dark-charcoal hover:text-primary-orange transition-colors z-10"
                    aria-label="Close modal"
                  >
                    <Icon icon="mdi:close" className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Fields Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-dark-charcoal mb-2">
                        Full name
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
                        Email
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

                    {/* Job Title */}
                    <div className="md:col-span-2">
                      <label htmlFor="jobTitle" className="block text-sm font-semibold text-dark-charcoal mb-2">
                        Job Title
                      </label>
                      <select
                        id="jobTitle"
                        name="jobTitle"
                        required
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors"
                      >
                        <option value="">Select job title</option>
                        {jobTitleOptions.map((title) => (
                          <option key={title} value={title}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Upload CV Field */}
                  <div>
                    <label htmlFor="cvFile" className="block text-sm font-semibold text-dark-charcoal mb-2">
                      Upload CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="cvFile"
                        name="cvFile"
                        accept=".pdf,application/pdf"
                        required
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-orange file:text-white hover:file:bg-navy-blue file:cursor-pointer"
                      />
                    </div>
                    {fileError && (
                      <p className="text-red-500 text-xs mt-2">{fileError}</p>
                    )}
                    {formData.cvFile && !fileError && (
                      <p className="text-green-600 text-xs mt-2">
                        File selected: {formData.cvFile.name} ({(formData.cvFile.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    )}
                  </div>

                  {/* Cover Note */}
                  <div>
                    <label htmlFor="coverNote" className="block text-sm font-semibold text-dark-charcoal mb-2">
                      Cover note (Optional)
                    </label>
                    <textarea
                      id="coverNote"
                      name="coverNote"
                      rows="4"
                      value={formData.coverNote}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-none transition-colors resize-none"
                      placeholder="Tell us why you're interested in joining SGA..."
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeToPrivacy"
                      name="agreeToPrivacy"
                      required
                      checked={formData.agreeToPrivacy}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-5 h-5 text-navy-blue border-gray-300 rounded focus:ring-navy-blue"
                    />
                    <label htmlFor="agreeToPrivacy" className="text-sm text-dark-charcoal">
                      I agree to SGA's{' '}
                      <a href="/privacy-policy" target="_blank" className="text-primary-orange hover:underline">
                        Privacy Notice
                      </a>
                      {' '}and consent to be contacted regarding my application. *
                    </label>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-end gap-4 pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 border-2 border-gray-300 text-dark-charcoal rounded-full font-semibold text-base hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.agreeToPrivacy || !formData.cvFile || fileError}
                      className="bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-navy-blue transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      Submit application
                    </button>
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

