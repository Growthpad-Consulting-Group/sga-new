'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import EnquiryModal from '@/components/EnquiryModal'

/**
 * Enquiry Modal Context Value Interface
 */
export interface EnquiryModalContextValue {
  openModal: () => void
  closeModal: () => void
}

/**
 * Enquiry Modal Provider Props Interface
 */
export interface EnquiryModalProviderProps {
  children: ReactNode
}

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null)

export function EnquiryModalProvider({ children }: EnquiryModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const value: EnquiryModalContextValue = {
    openModal,
    closeModal,
  }

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeModal} />
    </EnquiryModalContext.Provider>
  )
}

export function useEnquiryModal(): EnquiryModalContextValue {
  const context = useContext(EnquiryModalContext)
  if (!context) {
    throw new Error('useEnquiryModal must be used within EnquiryModalProvider')
  }
  return context
}
