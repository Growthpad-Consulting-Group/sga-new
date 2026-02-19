'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000) // Show after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const defaultContacts = [
    {
      country: 'Kenya',
      phone: '+254 111 024000',
      url: `https://wa.me/254111024000?text=${encodeURIComponent("Hello SGA Security, I would like to make an inquiry.")}`,
      flag: 'twemoji:flag-kenya'
    },
    {
      country: 'Uganda',
      phone: '+256 772 200 048',
      url: `https://wa.me/256772200048?text=${encodeURIComponent("Hello SGA Security, I would like to make an inquiry.")}`,
      flag: 'twemoji:flag-uganda'
    },
    {
      country: 'Tanzania',
      phone: '+255 754 303076',
      url: `https://wa.me/255754303076?text=${encodeURIComponent("Hello SGA Security, I would like to make an inquiry.")}`,
      flag: 'twemoji:flag-tanzania'
    }
  ]

  const contacts = singleCountry && country && phone && url && flag
    ? [{ country, phone, url, flag }]
    : defaultContacts

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">Contact us on WhatsApp</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Icon icon="mdi:close" className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Icon icon={contact.flag} className="w-6 h-6" />
                    <div>
                      <div className="text-sm font-medium text-gray-800">{contact.country}</div>
                      <div className="text-xs text-gray-600">{contact.phone}</div>
                    </div>
                    <Icon icon="mdi:whatsapp" className="w-5 h-5 text-green-500 ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white rounded-fulltransition-colors"
        aria-label="Open WhatsApp chat"
      >
        <Icon icon="logos:whatsapp-icon" className="w-12 h-12" />
      </motion.button>
    </div>
  )
}