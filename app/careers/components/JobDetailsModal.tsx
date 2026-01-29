'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

interface JobDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  job: any
  onApply: () => void
}

export default function JobDetailsModal({ isOpen, onClose, job, onApply }: JobDetailsModalProps) {
  if (!isOpen || !job) return null

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
              {/* Header */}
              <div className="bg-white p-6 md:p-8 border-b-2 border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs uppercase bg-primary-orange text-white rounded-full px-3 py-1 flex items-center gap-1">
                        <Icon icon="mdi:map-marker" className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-navy-blue">
                      {job.title}
                    </h2>
                    <p className="text-gray-600 text-base mb-2">
                      {job.jobtype}
                    </p>
                    <p className="text-sm text-gray-500">
                      Posted: {job.date}
                    </p>
                  </div>
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="text-dark-charcoal hover:text-primary-orange transition-colors z-10 ml-4"
                    aria-label="Close modal"
                  >
                    <Icon icon="mdi:close" className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1">
                <div className="space-y-6">
                  {/* Job Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-navy-blue mb-3 flex items-center gap-2">
                      <Icon icon="mdi:file-document-outline" className="w-6 h-6 text-primary-orange" />
                      Job Summary
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {job.summary}
                    </p>
                  </div>

                  {/* Job Details */}
                  <div>
                    <h3 className="text-xl font-bold text-navy-blue mb-3 flex items-center gap-2">
                      <Icon icon="mdi:information-outline" className="w-6 h-6 text-primary-orange" />
                      Job Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon icon="mdi:map-marker" className="w-5 h-5 text-primary-orange mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800">Location</p>
                          <p className="text-gray-600">{job.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon icon="mdi:briefcase-outline" className="w-5 h-5 text-primary-orange mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800">Job Type</p>
                          <p className="text-gray-600">{job.jobtype}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon icon="mdi:calendar-outline" className="w-5 h-5 text-primary-orange mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800">Posted Date</p>
                          <p className="text-gray-600">{job.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  {job.requirements && (
                    <div>
                      <h3 className="text-xl font-bold text-navy-blue mb-3 flex items-center gap-2">
                        <Icon icon="mdi:check-circle-outline" className="w-6 h-6 text-primary-orange" />
                        Requirements
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {job.requirements.map((req: string, idx: number) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.responsibilities && (
                    <div>
                      <h3 className="text-xl font-bold text-navy-blue mb-3 flex items-center gap-2">
                        <Icon icon="mdi:clipboard-list-outline" className="w-6 h-6 text-primary-orange" />
                        Key Responsibilities
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {job.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-6 md:p-8 border-t-2 border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={onClose}
                    className="py-3 px-6 uppercase bg-transparent border border-navy-blue text-navy-blue rounded-full items-center gap-2 hover:bg-navy-blue hover:text-white transition-colors text-sm font-semibold"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      onClose()
                      // Trigger apply modal - this will be handled by parent
                      if (onApply) {
                        onApply()
                      }
                    }}
                    className="py-3 px-6 uppercase bg-primary-orange text-white rounded-full items-center gap-2 hover:bg-opacity-90 transition-colors text-sm font-semibold"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

