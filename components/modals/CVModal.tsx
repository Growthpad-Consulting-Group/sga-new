'use client'

import { useEffect, useState } from 'react'
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

interface CVFormData {
  fullName: string
  email: string
  phone: string
  country: string
  jobTitle: string
  cvFile: File | null
  coverNote: string
  agreeToPrivacy: boolean
}

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CVModal({ isOpen, onClose }: CVModalProps): React.JSX.Element | null {
  const [formData, setFormData] = useState<CVFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    jobTitle: '',
    cvFile: null,
    coverNote: '',
    agreeToPrivacy: false,
  })

  const [fileError, setFileError] = useState<string>('')
  const [isDraggingFile, setIsDraggingFile] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const selectCVFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      setFileError('File size must be less than 10MB')
      setFormData(prev => ({ ...prev, cvFile: null }))
      return
    }

    if (file.type !== 'application/pdf') {
      setFileError('Please upload a PDF file')
      setFormData(prev => ({ ...prev, cvFile: null }))
      return
    }

    setFileError('')
    setFormData(prev => ({ ...prev, cvFile: file }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) selectCVFile(file)
  }

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDraggingFile(false)

    const file = e.dataTransfer.files?.[0]
    if (file) selectCVFile(file)
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      agreeToPrivacy: e.target.checked
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center p-0 sm:p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cv-modal-title"
              className="flex h-[100dvh] max-h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-lg md:flex-row"
            >
              <aside className="hidden w-full bg-primary-orange p-7 text-white md:flex md:w-[30%] md:flex-col md:justify-between md:p-10">
                <div>
                  <h2 id="cv-modal-title" className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Join our team
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    Build a meaningful career protecting people, businesses and communities across East Africa.
                  </p>
                </div>

                <div className="space-y-5 my-7 md:my-10">
                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:briefcase-search-outline" className="w-6 h-6 text-white shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">A role that fits</p>
                      <p className="text-white/80 text-sm">Field, technology and leadership</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:school-outline" className="w-6 h-6 text-white shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Room to grow</p>
                      <p className="text-white/80 text-sm">Training and mentorship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:shield-check-outline" className="w-6 h-6 text-white shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Secure handling</p>
                      <p className="text-white/80 text-sm">Recruitment use only</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex justify-center">
                  <Icon icon="mdi:plus-thick" className="w-20 h-20 text-white/20" />
                </div>
              </aside>

              <div className="relative h-full w-full overflow-y-auto p-4 sm:p-6 md:w-[70%] md:p-8">
                <div className="sticky -top-4 z-20 -mx-4 -mt-4 mb-5 border-b border-gray-200 bg-white px-4 pb-3 pt-4 sm:-top-6 sm:-mx-6 sm:-mt-6 sm:mb-7 sm:px-6 md:-top-8 md:-mx-8 md:-mt-8 md:px-8">
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-2 right-4 md:right-6 w-10 h-10 rounded-full flex items-center justify-center text-dark-charcoal hover:text-primary-orange hover:bg-light-grey transition-colors"
                    aria-label="Close modal"
                  >
                    <Icon icon="mdi:close" className="w-6 h-6" />
                  </button>

                  <div className="pr-12">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <p className="text-xs font-bold tracking-[0.18em] uppercase text-primary-orange">Careers at SGA</p>
                    <span className="h-4 border-l border-gray-300 self-center" aria-hidden="true" />
                    <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-dark-charcoal">Send us your CV</h3>
                  </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Form Fields Grid */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
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
                        className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
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
                        className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
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
                        className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
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
                        className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
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
                        Job title *
                      </label>
                      <select
                        id="jobTitle"
                        name="jobTitle"
                        required
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
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
                    <div
                      onDragEnter={(e) => {
                        e.preventDefault()
                        setIsDraggingFile(true)
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDragLeave={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node)) setIsDraggingFile(false)
                      }}
                      onDrop={handleFileDrop}
                      className={`relative rounded-xl border-2 border-dashed p-4 transition-colors sm:p-5 ${fileError ? 'border-red-400 bg-red-50' : formData.cvFile ? 'border-green-500 bg-green-50' : isDraggingFile ? 'border-primary-orange bg-orange-50' : 'border-gray-300 bg-light-grey/60 hover:border-primary-orange'}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                          <Icon icon={formData.cvFile ? 'mdi:file-check-outline' : 'mdi:file-upload-outline'} className={`w-6 h-6 ${formData.cvFile ? 'text-green-600' : 'text-primary-orange'}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-dark-charcoal truncate">
                            {formData.cvFile ? formData.cvFile.name : isDraggingFile ? 'Drop your CV here' : 'Choose or drop your CV'}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formData.cvFile ? `${(formData.cvFile.size / 1024 / 1024).toFixed(2)} MB · PDF` : 'PDF format · Maximum file size 10MB'}
                          </p>
                        </div>
                        <input
                          type="file"
                          id="cvFile"
                          name="cvFile"
                          accept=".pdf,application/pdf"
                          required
                          onChange={handleFileChange}
                          className="block w-full sm:w-auto text-sm text-transparent file:mr-0 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-orange file:text-white hover:file:bg-navy-blue file:cursor-pointer cursor-pointer"
                        />
                      </div>
                    </div>
                    {fileError && (
                      <p className="text-red-600 text-xs mt-2" role="alert">{fileError}</p>
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
                      rows={4}
                      value={formData.coverNote}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors resize-none"
                      placeholder="Tell us why you're interested in joining SGA..."
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3 rounded-lg bg-light-grey/70 p-4">
                    <input
                      type="checkbox"
                      id="agreeToPrivacy"
                      name="agreeToPrivacy"
                      required
                      checked={formData.agreeToPrivacy}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-5 h-5 text-navy-blue border-gray-300 rounded-sm focus:ring-navy-blue"
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
                  <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full px-6 py-3 border-2 border-gray-300 text-dark-charcoal rounded-full font-semibold text-base hover:bg-gray-100 transition-colors sm:w-auto"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.agreeToPrivacy || !formData.cvFile || !!fileError}
                      className="w-full bg-primary-orange text-white px-7 py-3 rounded-full font-semibold text-base hover:bg-navy-blue transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed sm:w-auto"
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

