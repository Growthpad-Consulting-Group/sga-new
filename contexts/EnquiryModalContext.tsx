'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import EnquiryModal from '@/components/modals/EnquiryModal'

/**
 * Enquiry Modal Context Value Interface
 */
export interface OpenEnquiryOptions {
  /** Service to pre-select, as named in data/servicesMenu.ts */
  interest?: string
  /** Which service list the interest belongs to */
  enquiryType?: 'Individual' | 'Corporate'
}

export interface EnquiryModalContextValue {
  openModal: (options?: OpenEnquiryOptions) => void
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
  const [preset, setPreset] = useState<OpenEnquiryOptions | null>(null)

  // Buttons pass the click event here, so only accept options that name a service
  const openModal = (options?: OpenEnquiryOptions) => {
    setPreset(options && typeof options.interest === 'string' ? options : null)
    setIsOpen(true)
  }
  const closeModal = () => setIsOpen(false)

  const value: EnquiryModalContextValue = {
    openModal,
    closeModal,
  }

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeModal} preset={preset} />
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
