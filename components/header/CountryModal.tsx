'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'

interface Country {
  code: string
  name: string
  path: string
  flag: string
}

interface CountryModalProps {
  isOpen: boolean
  onClose: () => void
  countries: Country[]
}

export default function CountryModal({ isOpen, onClose, countries }: CountryModalProps): React.JSX.Element | null {
  const router = useRouter()

  if (!isOpen) return null

  return (
    <>
      {/* Blurry Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-md z-50"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <motion.button
                onClick={() => {
                  router.push(country.path)
                  onClose()
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white border-2 sm:border-4 border-white flex flex-col items-center justify-center shadow-xl transition-all overflow-hidden"
                aria-label={`Enter ${country.name}`}
              >
                {/* Country Flag - Smaller, always visible */}
                <Icon 
                  icon={country.flag} 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10" 
                />
                
                {/* Right Arrow at bottom - visible on hover */}
                <div className="absolute bottom-2 sm:bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon 
                    icon="mdi:arrow-right" 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-orange" 
                  />
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}
