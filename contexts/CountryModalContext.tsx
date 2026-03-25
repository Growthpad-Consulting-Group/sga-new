'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface CountryModalContextType {
  isOpen: boolean
  openModal: (redirectPath?: string) => void
  closeModal: () => void
  redirectPath: string | null
}

const CountryModalContext = createContext<CountryModalContextType | undefined>(undefined)

export function CountryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [redirectPath, setRedirectPath] = useState<string | null>(null)

  const openModal = (path?: string) => {
    setRedirectPath(path || null)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setRedirectPath(null)
  }

  return (
    <CountryModalContext.Provider value={{ isOpen, openModal, closeModal, redirectPath }}>
      {children}
    </CountryModalContext.Provider>
  )
}

export function useCountryModal() {
  const context = useContext(CountryModalContext)
  if (!context) {
    throw new Error('useCountryModal must be used within a CountryModalProvider')
  }
  return context
}
