'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import CVModal from '@/components/modals/CVModal'

/**
 * CV Modal Context Value Interface
 */
export interface CVModalContextValue {
  openModal: () => void
  closeModal: () => void
  /** Job titles for the form. null = use the default list (outside the careers page) */
  jobTitles: string[] | null
  setJobTitles: (titles: string[] | null) => void
}

/**
 * CV Modal Provider Props Interface
 */
export interface CVModalProviderProps {
  children: ReactNode
}

const CVModalContext = createContext<CVModalContextValue | null>(null)

export function CVModalProvider({ children }: CVModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [jobTitles, setJobTitles] = useState<string[] | null>(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const value: CVModalContextValue = {
    openModal,
    closeModal,
    jobTitles,
    setJobTitles,
  }

  return (
    <CVModalContext.Provider value={value}>
      {children}
      <CVModal isOpen={isOpen} onClose={closeModal} jobTitles={jobTitles} />
    </CVModalContext.Provider>
  )
}

export function useCVModal(): CVModalContextValue {
  const context = useContext(CVModalContext)
  if (!context) {
    throw new Error('useCVModal must be used within CVModalProvider')
  }
  return context
}
