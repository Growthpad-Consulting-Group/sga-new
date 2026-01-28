'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import CVModal from '@/components/CVModal'

/**
 * CV Modal Context Value Interface
 */
export interface CVModalContextValue {
  openModal: () => void
  closeModal: () => void
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

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const value: CVModalContextValue = {
    openModal,
    closeModal,
  }

  return (
    <CVModalContext.Provider value={value}>
      {children}
      <CVModal isOpen={isOpen} onClose={closeModal} />
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
