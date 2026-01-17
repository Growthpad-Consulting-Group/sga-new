'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

interface WhatsAppOption {
  country: string
  phone: string
  flag: string
  url: string
}

interface FloatingWhatsAppProps {
  singleCountry?: boolean
  country?: string | null
  phone?: string | null
  url?: string | null
  flag?: string | null
}

export default function FloatingWhatsApp({ 
  singleCountry = false,
  country = null,
  phone = null,
  url = null,
  flag = null
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappOptions: WhatsAppOption[] = [
    {
      country: 'Kenya',
      phone: '+254111024000',
      flag: 'twemoji:flag-kenya',
      url: 'https://wa.me/254111024000'
    },
    {
      country: 'Tanzania',
      phone: '+255754303076',
      flag: 'twemoji:flag-tanzania',
      url: 'https://wa.me/255754303076'
    },
    {
      country: 'Uganda',
      phone: '+256772200048',
      flag: 'twemoji:flag-uganda',
      url: 'https://wa.me/256772200048'
    }
  ]

  // If single country mode, use provided props or default to Kenya
  const singleCountryOption: WhatsAppOption | null = singleCountry ? {
    country: country || 'Kenya',
    phone: phone || '+254111024000',
    flag: flag || 'twemoji:flag-kenya',
    url: url || 'https://wa.me/254111024000'
  } : null

  // Single country mode - direct link to WhatsApp
  if (singleCountry && singleCountryOption) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href={singleCountryOption.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors flex items-center justify-center"
          aria-label={`WhatsApp Chat - ${singleCountryOption.country}`}
        >
          <Icon 
            icon="mdi:whatsapp" 
            className="w-8 h-8"
          />
        </motion.a>
      </div>
    )
  }

  // Multi-country mode - dropdown with all options
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-lg shadow-2xl p-4 min-w-[200px]"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Chat with us on WhatsApp</h3>
              {whatsappOptions.map((option, index) => (
                <motion.a
                  key={option.country}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-orange/10 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon 
                    icon={option.flag} 
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-primary-orange transition-colors">
                      {option.country}
                    </p>
                    <p className="text-xs text-gray-500">{option.phone}</p>
                  </div>
                  <Icon 
                    icon="mdi:whatsapp" 
                    className="w-5 h-5 text-green-500 flex-shrink-0"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors"
        aria-label="WhatsApp Chat"
      >
        <Icon 
          icon="mdi:whatsapp" 
          className="w-8 h-8"
        />
      </motion.button>
    </div>
  )
}

