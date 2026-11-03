'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const MAX_PREVIEW_PAGES = 40
const pageCache = new Map<string, Promise<string[]>>()

interface DocumentPreviewModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    fileUrl: string
    rotation?: 0 | 90
    onPreviousDocument?: () => void
    onNextDocument?: () => void
    documentPosition?: number
    documentCount?: number
    category?: string
    country?: string
    year?: string
}

async function renderPdfPages(fileUrl: string, title: string, rotation: 0 | 90): Promise<string[]> {
    const cacheKey = `${fileUrl}:${rotation}`
    const cached = pageCache.get(cacheKey)
    if (cached) return cached

    const renderPromise = (async () => {
        const pdfjs = await import('pdfjs-dist')
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
            'pdfjs-dist/build/pdf.worker.min.mjs',
            import.meta.url,
        ).toString()

        const previewUrl = `/api/documents/download/${encodeURIComponent(title)}.pdf?url=${encodeURIComponent(fileUrl)}&disposition=inline`
        const response = await fetch(previewUrl)
        if (!response.ok) throw new Error(`Could not load the document (${response.status}).`)

        const pdf = await pdfjs.getDocument({ data: await response.arrayBuffer() }).promise
        const pageCount = Math.min(pdf.numPages, MAX_PREVIEW_PAGES)
        const images: string[] = []

        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
            const page = await pdf.getPage(pageNumber)
            const viewport = page.getViewport({
                scale: 1.5,
                rotation: (page.rotate + rotation) % 360,
            })
            const canvas = document.createElement('canvas')
            canvas.width = viewport.width
            canvas.height = viewport.height
            const context = canvas.getContext('2d')

            if (!context) throw new Error('Document preview is not supported in this browser.')

            await page.render({ canvas, canvasContext: context, viewport }).promise
            images.push(canvas.toDataURL('image/jpeg', 0.88))
        }

        return images
    })()

    pageCache.set(cacheKey, renderPromise)
    renderPromise.catch(() => pageCache.delete(cacheKey))
    return renderPromise
}

export default function DocumentPreviewModal({
    isOpen,
    onClose,
    title,
    fileUrl,
    rotation = 0,
    onPreviousDocument,
    onNextDocument,
    documentPosition = 1,
    documentCount = 1,
    category,
    country,
    year,
}: DocumentPreviewModalProps) {
    const [pages, setPages] = useState<string[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [zoom, setZoom] = useState(1)

    useEffect(() => {
        if (!isOpen || !fileUrl) return

        let cancelled = false
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        setPages(null)
        setError(null)
        setZoom(1)

        renderPdfPages(fileUrl, title, rotation)
            .then((renderedPages) => {
                if (!cancelled) setPages(renderedPages)
            })
            .catch((renderError: unknown) => {
                if (!cancelled) {
                    setError(renderError instanceof Error ? renderError.message : 'Could not load the document.')
                }
            })

        return () => {
            cancelled = true
            document.body.style.overflow = previousOverflow
        }
    }, [isOpen, fileUrl, title, rotation])

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
            if (event.key === 'ArrowLeft') onPreviousDocument?.()
            if (event.key === 'ArrowRight') onNextDocument?.()
            if (event.key === '+' || event.key === '=') setZoom((value) => Math.min(2, value + 0.25))
            if (event.key === '-') setZoom((value) => Math.max(0.5, value - 0.25))
            if (event.key === '0') setZoom(1)
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose, onPreviousDocument, onNextDocument])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: 12 }}
                    transition={{ duration: 0.2 }}
                    onClick={(event) => event.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="document-preview-title"
                    className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-white/15 bg-primary-orange/10 shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="grid min-h-18 shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-white/10 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:px-6">
                        <div className="flex min-w-0 items-center gap-2">
                            <Icon icon="mdi:file-pdf-box" className="h-5 w-5 shrink-0 text-primary-orange" />
                            <h3 id="document-preview-title" className="truncate text-sm font-bold text-white sm:text-base">{title}</h3>
                            <div className="flex shrink-0 items-center gap-2 text-[11px] font-medium text-white/55 sm:text-xs">
                                {category && <span className="capitalize before:mr-2 before:text-white/25 before:content-['•']">{category.toLowerCase()}</span>}
                                {country && <span className="before:mr-2 before:text-white/25 before:content-['•']">{country}</span>}
                                {year && <span className="before:mr-2 before:text-white/25 before:content-['•']">{year}</span>}
                                {pages && (
                                    <span className="before:mr-2 before:text-white/25 before:content-['•']">
                                        {pages.length} {pages.length === 1 ? 'page' : 'pages'}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="hidden items-center gap-1 sm:flex">
                            <button
                                type="button"
                                onClick={() => setZoom((value) => Math.max(0.5, value - 0.25))}
                                disabled={zoom <= 0.5}
                                aria-label="Zoom out"
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30"
                            >
                                <Icon icon="solar:magnifer-zoom-out-broken" className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setZoom(1)}
                                aria-label="Reset zoom"
                                className="min-w-14 rounded-lg px-2 py-1 text-xs font-semibold text-white/60 hover:bg-white/10 hover:text-white"
                            >
                                {Math.round(zoom * 100)}%
                            </button>
                            <button
                                type="button"
                                onClick={() => setZoom((value) => Math.min(2, value + 0.25))}
                                disabled={zoom >= 2}
                                aria-label="Zoom in"
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30"
                            >
                                <Icon icon="solar:magnifer-zoom-in-broken" className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="flex shrink-0 items-center justify-self-end gap-2">
                            <a
                                href={`/api/documents/download/${encodeURIComponent(title)}.pdf?url=${encodeURIComponent(fileUrl)}`}
                                aria-label="Download PDF"
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white"
                            >
                                <Icon icon="solar:download-minimalistic-broken" className="h-5 w-5" />
                            </a>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close preview"
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white"
                            >
                                <Icon icon="mdi:close" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="relative flex flex-1 items-center justify-center overflow-auto p-4 md:p-8">
                        {!pages && !error && (
                            <div className="flex flex-col items-center justify-center gap-4 text-white/60" role="status">
                                <div className="w-10 h-10 rounded-full border-2 border-primary-orange border-t-transparent animate-spin" />
                                <p className="text-sm font-medium">Loading document…</p>
                            </div>
                        )}

                        {error && (
                            <div className="flex flex-col items-center justify-center gap-3 text-center">
                                <Icon icon="mdi:file-alert-outline" className="w-12 h-12 text-primary-orange" />
                                <p className="font-semibold text-white">Document preview unavailable</p>
                                <p className="text-sm text-white/60">{error}</p>
                            </div>
                        )}

                        {pages && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mx-auto flex w-full flex-col items-center gap-6"
                            >
                                {pages.map((page, index) => (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        key={index}
                                        src={page}
                                        alt={`${title}, page ${index + 1}`}
                                        className="h-auto max-w-none bg-white shadow-2xl transition-[width] duration-200"
                                        style={{ width: `${zoom * 100}%` }}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {documentCount > 1 && (
                        <div className="flex h-14 shrink-0 items-center justify-between border-t border-white/10 px-4 sm:px-6">
                            <button
                                type="button"
                                onClick={onPreviousDocument}
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white"
                            >
                                <Icon icon="solar:alt-arrow-left-broken" className="h-4 w-4" />
                                <span className="hidden sm:inline">Previous document</span>
                            </button>

                            <span className="text-sm text-white/50">{documentPosition} / {documentCount}</span>

                            <button
                                type="button"
                                onClick={onNextDocument}
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white"
                            >
                                <span className="hidden sm:inline">Next document</span>
                                <Icon icon="solar:alt-arrow-right-broken" className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                  </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
