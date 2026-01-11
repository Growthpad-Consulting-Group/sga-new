'use client'

import { createContext, useContext, useState } from 'react'
import CVModal from '@/components/CVModal'

const CVModalContext = createContext()

export function CVModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <CVModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <CVModal isOpen={isOpen} onClose={closeModal} />
    </CVModalContext.Provider>
  )
}

export function useCVModal() {
  const context = useContext(CVModalContext)
  if (!context) {
    throw new Error('useCVModal must be used within CVModalProvider')
  }
  return context
}

