'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { useBodyScrollLock } from '@/lib/useBodyScrollLock'
import { individualServicesMenu, corporateServicesMenu } from '@/data/servicesMenu'
import CountrySearchSelect from '@/components/ui/CountrySearchSelect'
import Button from '@/components/ui/Button'
import type { OpenEnquiryOptions } from '@/contexts/EnquiryModalContext'

const COUNTRY_NAMES_BY_ROUTE: Record<string, string> = {
  ke: 'Kenya',
  ug: 'Uganda',
  tz: 'Tanzania',
}

interface FormData {
  fullName: string
  email: string
  phone: string
  country: string
  interests: string[]
  additionalDetails: string
  agreeToContact: boolean
  // Corporate fields
  companyName: string
  jobTitle: string
  companySize: string
  industry: string
}

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  /** Pre-selects a service (and its list) when the modal opens from a service */
  preset?: OpenEnquiryOptions | null
}

export default function EnquiryModal({ isOpen, onClose, preset }: EnquiryModalProps): React.JSX.Element | null {
  const pathname = usePathname()
  const countryCode = pathname.split('/').filter(Boolean)[0] || ''
  const routeCountry = COUNTRY_NAMES_BY_ROUTE[countryCode] || ''
  const [enquiryType, setEnquiryType] = useState<'Individual' | 'Corporate'>('Individual')
  // Same services as the Individual and Corporate lists in the header menu
  const interestOptions = (enquiryType === 'Individual' ? individualServicesMenu : corporateServicesMenu).map((service) => service.title)
  const [isInterestsOpen, setIsInterestsOpen] = useState(false)
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)
  const [callbackData, setCallbackData] = useState({ name: '', email: '', phone: '', country: '' })
  const [formData, setFormData] = useState<FormData>({
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

  // Opened from a service: select that service and its list
  useEffect(() => {
    if (!isOpen || !preset?.interest) return
    if (preset.enquiryType) setEnquiryType(preset.enquiryType)
    setFormData(prev => ({ ...prev, interests: [preset.interest as string] }))
  }, [isOpen, preset])

  // Drop any selected services that don't belong to the chosen Individual or Corporate list
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(interest => interestOptions.includes(interest)),
    }))
  }, [enquiryType])

  useEffect(() => {
    if (!isOpen) return

    setIsInterestsOpen(false)
    setFormData(prev => ({
      ...prev,
      country: routeCountry,
    }))
  }, [isOpen, routeCountry])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      agreeToContact: e.target.checked
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form (country is chosen in a react-select, so check it here)
    if (!formData.country || formData.interests.length === 0 || !formData.agreeToContact) {
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

  const handleCallbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!callbackData.country) return

    // Handle callback request here (same as the enquiry form, no backend yet)
    console.log('Call back requested:', callbackData)
    alert('Thank you! We will call you back shortly.')
    setCallbackData({ name: '', email: '', phone: '', country: '' })
    setIsCallbackOpen(false)
  }

  useBodyScrollLock(isOpen)

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
              className="flex h-[100dvh] max-h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl sm:h-[90vh] sm:max-h-[90vh] sm:rounded-lg md:flex-row"
            >
              {/* Left Container - 30% width, Orange background */}
              <div className="hidden w-full bg-primary-orange p-8 text-white md:flex md:w-[30%] md:flex-col md:justify-between md:p-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Enquire Now</h2>
                  <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                    Tell us what you need and we'll connect you to the right team.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:clock-fast" className="w-6 h-6 text-white shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Fast response</p>
                      <p className="text-white/80 text-sm">Within 1 business day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:shield-lock" className="w-6 h-6 text-white shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Secure handling</p>
                      <p className="text-white/80 text-sm">Privacy First</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:earth" className="w-6 h-6 text-white shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Multi-country</p>
                      <p className="text-white/80 text-sm">KE • TZ • UG</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon icon="mdi:account-group" className="w-6 h-6 text-white shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Expert support</p>
                      <p className="text-white/80 text-sm">Corporate & Individual</p>
                    </div>
                  </div>
                </div>

                {/* Request a call back */}
                <div className="mt-8">
                  <Button
                    variant="white"
                    size="compact"
                    arrow={false}
                    icon="mdi:phone-in-talk"
                    onClick={() => setIsCallbackOpen(true)}
                    className="w-full sm:w-full uppercase tracking-wide"
                  >
                    Request a call back
                  </Button>
                </div>

                {/* Plus Icon */}
                <div className="flex justify-center mt-8">
                  <Icon icon="mdi:plus-thick" className="w-16 h-16 md:w-20 md:h-20 text-white/20" style={{ strokeWidth: 3 }} />
                </div>
              </div>

              {/* Right Container - 70% width */}
              <div className="relative h-full w-full overflow-y-auto p-4 sm:p-6 md:w-[70%] md:p-8">
                {/* Sticky header with close button (same as the CV modal) */}
                <div className="sticky -top-4 z-20 -mx-4 -mt-4 mb-5 border-b border-gray-200 bg-white px-4 pb-3 pt-4 sm:-top-6 sm:-mx-6 sm:-mt-6 sm:mb-7 sm:px-6 md:-top-8 md:-mx-8 md:-mt-8 md:px-8">
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 w-10 h-10 rounded-full flex items-center justify-center text-dark-charcoal hover:text-primary-orange hover:bg-light-grey transition-colors"
                    aria-label="Close modal"
                  >
                    <Icon icon="mdi:close" className="w-6 h-6" />
                  </button>
                  <div className="pr-12 flex flex-wrap items-center md:items-baseline gap-x-3 gap-y-1">
                    <p className="hidden md:block text-xs font-bold tracking-[0.18em] uppercase text-primary-orange">SGA Security</p>
                    <span className="hidden md:block h-4 border-l border-gray-300 self-center" aria-hidden="true" />
                    <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-dark-charcoal">Enquire Now</h3>
                    {/* Phones: the sidebar with the call back button is hidden, so it sits in the heading */}
                    <button
                      type="button"
                      onClick={() => setIsCallbackOpen(true)}
                      className="md:hidden ml-auto inline-flex items-center gap-1.5 rounded-full border border-primary-orange px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-orange hover:bg-primary-orange hover:text-white transition-colors"
                    >
                      <Icon icon="mdi:phone-in-talk" className="w-4 h-4" />
                      Call back
                    </button>
                  </div>
                </div>

                {isCallbackOpen ? (
                  <form onSubmit={handleCallbackSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary-orange">Request a call back</h2>
                      <p className="text-sm text-gray-600 mt-1">Leave your details and we'll call you back.</p>
                    </div>

                    {/* Row 1: name and email */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="callback-name" className="block text-sm font-semibold text-dark-charcoal mb-2">Full Name *</label>
                        <input
                          id="callback-name"
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={callbackData.name}
                          onChange={(e) => setCallbackData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary-orange"
                        />
                      </div>
                      <div>
                        <label htmlFor="callback-email" className="block text-sm font-semibold text-dark-charcoal mb-2">Email *</label>
                        <input
                          id="callback-email"
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={callbackData.email}
                          onChange={(e) => setCallbackData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary-orange"
                        />
                      </div>
                    </div>

                    {/* Row 2: country and telephone */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="callback-country" className="block text-sm font-semibold text-dark-charcoal mb-2">Country *</label>
                        <CountrySearchSelect
                          id="callback-country"
                          value={callbackData.country}
                          onChange={(country) => setCallbackData(prev => ({ ...prev, country }))}
                        />
                      </div>
                      <div>
                        <label htmlFor="callback-phone" className="block text-sm font-semibold text-dark-charcoal mb-2">Telephone Number *</label>
                        <input
                          id="callback-phone"
                          type="tel"
                          required
                          placeholder="Enter your telephone number"
                          value={callbackData.phone}
                          onChange={(e) => setCallbackData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary-orange"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button type="submit" variant="solid" size="small" arrow={false} className="w-auto">
                        Submit
                      </Button>
                      <Button
                        variant="light"
                        size="small"
                        arrow={false}
                        className="w-auto"
                        onClick={() => setIsCallbackOpen(false)}
                      >
                        Back
                      </Button>
                    </div>
                  </form>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
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
                        className={`relative z-10 flex-1 px-3 py-3 sm:px-6 rounded-full font-semibold transition-colors ${enquiryType === 'Individual'
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
                        className={`relative z-10 flex-1 px-3 py-3 sm:px-6 rounded-full font-semibold transition-colors ${enquiryType === 'Corporate'
                            ? 'text-white'
                            : 'text-dark-charcoal'
                          }`}
                      >
                        Corporate
                      </button>
                    </div>
                  </div>

                  {/* Form Fields Grid */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-dark-charcoal mb-2">
                        Full Name *
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
                        Phone Number *
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
                      <CountrySearchSelect
                        id="country"
                        value={formData.country}
                        onChange={(country) => setFormData(prev => ({ ...prev, country }))}
                      />
                    </div>
                  </div>

                  {/* Corporate-specific fields */}
                  {enquiryType === 'Corporate' && (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                      {/* Company Name */}
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-semibold text-dark-charcoal mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
                          placeholder="Enter your company name"
                        />
                      </div>

                      {/* Job Title */}
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-semibold text-dark-charcoal mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
                          placeholder="Enter your job title"
                        />
                      </div>

                      {/* Company Size */}
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-semibold text-dark-charcoal mb-2">
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
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
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors"
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

                    <div className="md:hidden">
                      <button
                        type="button"
                        onClick={() => setIsInterestsOpen((open) => !open)}
                        aria-expanded={isInterestsOpen}
                        className="flex w-full items-center justify-between gap-3 rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-left text-sm font-semibold text-dark-charcoal"
                      >
                        <span>
                          {formData.interests.length > 0
                            ? `${formData.interests.length} service${formData.interests.length === 1 ? '' : 's'} selected`
                            : 'Select services'}
                        </span>
                        <Icon
                          icon="mdi:chevron-down"
                          className={`h-5 w-5 shrink-0 transition-transform ${isInterestsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isInterestsOpen && (
                        <div className="mt-2 max-h-64 overflow-y-auto rounded-xl border border-gray-200 bg-white p-2 shadow-inner">
                          {interestOptions.map((option) => {
                            const selected = formData.interests.includes(option)

                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleInterestToggle(option)}
                                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors ${
                                  selected
                                    ? 'bg-primary-orange text-white'
                                    : 'text-dark-charcoal hover:bg-light-grey'
                                }`}
                              >
                                <span>{option}</span>
                                <Icon
                                  icon={selected ? 'mdi:check-circle' : 'mdi:circle-outline'}
                                  className="h-5 w-5 shrink-0"
                                />
                              </button>
                            )
                          })}
                        </div>
                      )}

                      {formData.interests.length > 0 && !isInterestsOpen && (
                        <p className="mt-2 text-xs leading-relaxed text-gray-600">
                          {formData.interests.join(', ')}
                        </p>
                      )}
                    </div>

                    <div className="hidden gap-3 md:grid md:grid-cols-3">
                      {interestOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleInterestToggle(option)}
                          className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${formData.interests.includes(option)
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
                      Additional Details
                    </label>
                    <textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      rows={4}
                      value={formData.additionalDetails}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-blue focus:outline-hidden transition-colors resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="agreeToContact"
                      name="agreeToContact"
                      required
                      checked={formData.agreeToContact}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 shrink-0 text-navy-blue border-gray-300 rounded-sm focus:ring-navy-blue"
                    />
                    <label htmlFor="agreeToContact" className="text-sm text-dark-charcoal">
                      I agree to be contacted by SGA Security regarding my enquiry *
                    </label>
                  </div>

                  <div className="flex flex-col gap-3 pb-2 sm:flex-row sm:items-center sm:justify-between">
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formData.interests.length === 0 || !formData.agreeToContact}
                      className="w-full bg-primary-orange text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-navy-blue transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed sm:w-auto"
                    >
                      Submit enquiry
                    </button>

                    {/* Note */}
                    <p className="text-center text-sm text-gray-600">
                      We'll respond within one business day.
                    </p>
                  </div>
                </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

