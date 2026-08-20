'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import GlassPanel from '@/components/GlassPanel'

interface DocumentPreviewModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    fileUrl: string
}

export default function DocumentPreviewModal({ isOpen, onClose, title, fileUrl }: DocumentPreviewModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50"
                >
                    <GlassPanel mode="dark" borderRadius={0} className="w-full h-full flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-dark-charcoal truncate">{title}</h3>
                            <div className="flex items-center gap-4 shrink-0">
                                <a
                                    href={fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-primary-orange hover:underline"
                                >
                                    <Icon icon="solar:download-minimalistic-broken" className="w-4 h-4" />
                                    Open in new tab
                                </a>
                                <button
                                    onClick={onClose}
                                    aria-label="Close preview"
                                    className="text-dark-charcoal hover:text-primary-orange transition-colors"
                                >
                                    <Icon icon="mdi:close" className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 bg-gray-100">
                            <iframe
                                src={fileUrl}
                                title={title}
                                className="w-full h-full"
                            />
                        </div>
                    </motion.div>
                    </GlassPanel>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
