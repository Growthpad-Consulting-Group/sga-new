'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

interface JobApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  job: any // Or more specific if known, but any fixes the immediate build error
}

export default function JobApplicationModal({ isOpen, onClose, job }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    cvFile: null as File | null,
    coverLetter: '',
    agreeToPrivacy: false,
  })

  const [fileError, setFileError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      agreeToPrivacy: e.target.checked
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.country || !formData.cvFile || !formData.agreeToPrivacy) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      submitData.append('fullName', formData.fullName)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('country', formData.country)
      submitData.append('coverLetter', formData.coverLetter)
      submitData.append('cvFile', formData.cvFile)
      submitData.append('jobTitle', job?.title || '')
      submitData.append('jobLocation', job?.location || '')

      // Here you would typically send the data to your API
      // await fetch('/api/job-application', { method: 'POST', body: submitData })

      console.log('Job Application submitted:', {
        ...formData,
        jobTitle: job?.title,
        jobLocation: job?.location
      })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      alert(`Thank you for applying to ${job?.title || 'this position'}! We will review your application and get back to you soon.`)

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        cvFile: null,
        coverLetter: '',
        agreeToPrivacy: false,
      })
      setFileError('')
      onClose()
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        cvFile: null,
        coverLetter: '',
        agreeToPrivacy: false,
      })
      setFileError('')
      onClose()
    }
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
            onClick={handleClose}
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
              {/* Header */}
              <div className="bg-white p-6 md:p-8 border-b-2 border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary-orange">
                      Apply for Position
                    </h2>
                    {job && (
                      <>
                        <p className="text-dark-charcoal text-lg md:text-xl font-semibold mb-2">
                          {job.title}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {job.location} • {job.jobtype}
                        </p>
                      </>
                    )}
                    <p className="text-gray-600 text-sm mt-2">
                      PDF preferred, max 10MB. We only use your information for recruitment.
                    </p>
                  </div>
                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="text-dark-charcoal hover:text-primary-orange transition-colors z-10"
                    aria-label="Close modal"
                  >
                    <Icon icon="mdi:close" className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-navy-blue mb-2">
                        Full Name <span className="text-primary-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-blue mb-2">
                        Email Address <span className="text-primary-orange">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-blue mb-2">
                        Phone Number <span className="text-primary-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-navy-blue mb-2">
                        Country <span className="text-primary-orange">*</span>
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                      >
                        <option value="">Select Country</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label htmlFor="cvFile" className="block text-sm font-semibold text-navy-blue mb-2">
                      Upload CV/Resume (PDF) <span className="text-primary-orange">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-orange transition-colors">
                      <input
                        type="file"
                        id="cvFile"
                        name="cvFile"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                      />
                      <label
                        htmlFor="cvFile"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Icon icon="mdi:file-upload" className="w-12 h-12 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {formData.cvFile ? formData.cvFile.name : 'Click to upload or drag and drop'}
                        </span>
                        <span className="text-xs text-gray-500">PDF only, max 10MB</span>
                      </label>
                    </div>
                    {fileError && (
                      <p className="text-red-500 text-sm mt-2">{fileError}</p>
                    )}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-navy-blue mb-2">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  {/* Privacy Agreement */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeToPrivacy"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleCheckboxChange}
                      required
                      className="mt-1 w-4 h-4 text-primary-orange border-gray-300 rounded focus:ring-primary-orange"
                    />
                    <label htmlFor="agreeToPrivacy" className="text-sm text-gray-700">
                      I agree to the privacy policy and consent to the processing of my personal data for recruitment purposes. <span className="text-primary-orange">*</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="py-3 px-6 uppercase bg-transparent border border-navy-blue text-navy-blue rounded-full items-center gap-2 hover:bg-navy-blue hover:text-white transition-colors text-sm font-semibold disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-6 uppercase bg-primary-orange text-white rounded-full items-center gap-2 hover:bg-opacity-90 transition-colors text-sm font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Icon icon="mdi:send" className="w-5 h-5" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

