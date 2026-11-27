'use client'

import { useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useBodyScrollLock } from '@/lib/useBodyScrollLock'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  /** Shown in the sticky header, next to the close button */
  title?: ReactNode
  /** Extra classes for the panel, e.g. a wider max width or a two-column layout */
  panelClassName?: string
  children: ReactNode
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close modal"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-dark-charcoal shadow-md transition-all duration-200 hover:rotate-90 hover:bg-light-grey hover:text-primary-orange active:scale-90"
    >
      <Icon icon="mdi:close" className="h-6 w-6" />
    </button>
  )
}

/**
 * Shared modal: blurred backdrop, animated entrance, click outside or Escape to close,
 * body scroll lock, and a sticky header with a close button. Full screen on phones.
 */
export default function Modal({ isOpen, onClose, title, panelClassName = 'max-w-lg', children }: ModalProps) {
  useBodyScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/30 p-0 backdrop-blur-md sm:p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative flex h-[100dvh] w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-[85vh] sm:rounded-2xl ${panelClassName}`}
          >
            {title ? (
              /* Sticky header with a title: the title and close button stay visible while the content scrolls */
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-200 bg-white px-5 py-3">
                <div className="min-w-0 text-sm font-bold uppercase tracking-[0.18em] text-dark-charcoal">{title}</div>
                <CloseButton onClose={onClose} />
              </div>
            ) : (
              /* No title: the close button floats in the corner, so there is no empty bar */
              <div className="absolute right-3 top-3 z-20">
                <CloseButton onClose={onClose} />
              </div>
            )}

            <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
