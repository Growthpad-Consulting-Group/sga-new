'use client'

import { createContext, useContext, useState } from 'react'
import EnquiryModal from '@/components/EnquiryModal'

const EnquiryModalContext = createContext()

export function EnquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeModal} />
    </EnquiryModalContext.Provider>
  )
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext)
  if (!context) {
    throw new Error('useEnquiryModal must be used within EnquiryModalProvider')
  }
  return context
}

