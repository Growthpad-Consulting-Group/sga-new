'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'

export interface ManagementMember {
    name: string
    title: string
    bio?: string
    imageUrl: string | null
}

interface ManagementTeamProps {
    members: ManagementMember[]
}

export default function ManagementTeam({ members }: ManagementTeamProps): React.JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const goPrev = () => setSelectedIndex((i) => (i === null ? null : (i - 1 + members.length) % members.length))
    const goNext = () => setSelectedIndex((i) => (i === null ? null : (i + 1) % members.length))
    const close = () => setSelectedIndex(null)

    // Escape closes, arrow keys move between people, and page scroll is locked while open.
    useEffect(() => {
        if (selectedIndex === null) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
            if (e.key === 'ArrowLeft') goPrev()
            if (e.key === 'ArrowRight') goNext()
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedIndex, members.length])

    const selected = selectedIndex !== null ? members[selectedIndex] : null

    if (members.length === 0) return <></>

    return (
        <section id="management" className="bg-white py-20 md:py-20 min-h-[85vh] relative">
            <div className="container-fluid mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-4">
                        Our Management Team
                    </h2>
                </motion.div>

                {/* Same grid as the certificate cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {members.map((member, index) => (
                        <div
                            key={`${member.name}-${index}`}
                            role="button"
                            tabIndex={0}
                            onClick={() => setSelectedIndex(index)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') setSelectedIndex(index)
                            }}
                            className="flex flex-col bg-white border border-gray-50 rounded-2xl overflow-hidden shadow-md shadow-gray-400/10 hover:shadow-xl hover:shadow-primary-orange/20 transition-shadow cursor-pointer"
                        >
                            <div className="relative w-full aspect-3/4 bg-gray-100">
                                {member.imageUrl && (
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                                        className="object-cover object-top"
                                    />
                                )}
                            </div>

                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="text-lg font-bold text-dark-charcoal mb-2 leading-tight">
                                    {member.name}
                                </h3>

                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    <span className="text-xs font-medium text-dark-charcoal/60 uppercase tracking-wide">
                                        {member.title}
                                    </span>
                                </div>

                                <div className="mt-auto flex items-center justify-between gap-4">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setSelectedIndex(index)
                                        }}
                                        className="flex items-center gap-2 text-primary-orange font-bold hover:gap-3 transition-all"
                                    >
                                        View bio
                                        <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && selectedIndex !== null && (
                    <motion.div
                        key="management-backdrop"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.999 }}
                        transition={{ duration: 0.22 }}
                        onClick={close}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                    >
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); goPrev() }}
                            aria-label="Previous person"
                            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                        >
                            <Icon icon="solar:arrow-left-bold" width={20} />
                        </button>

                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.95, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 16 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="management-bio-name"
                            className="relative grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-2xl sm:h-[min(80vh,640px)] sm:grid-cols-[2fr_3fr]"
                        >
                            {/* Image on the left */}
                            <div className="relative min-h-72 bg-gray-100 sm:min-h-full">
                                {selected.imageUrl && (
                                    <Image
                                        src={selected.imageUrl}
                                        alt={selected.name}
                                        fill
                                        sizes="(max-width: 639px) 100vw, 40vw"
                                        className="object-cover object-top"
                                    />
                                )}
                            </div>

                            {/* Data on the right */}
                            <div className="relative flex h-full min-h-0 flex-col">
                                <button
                                    type="button"
                                    onClick={close}
                                    aria-label="Close"
                                    className="absolute right-4 top-4 z-10 text-primary-orange transition hover:opacity-70"
                                >
                                    <Icon icon="solar:close-circle-broken" width={28} />
                                </button>

                                <div className="sticky top-0 z-0 bg-white px-7 pt-7 pb-4">
                                    <p className="mb-4 text-xs text-dark-charcoal/40">
                                        {selectedIndex + 1} / {members.length}
                                    </p>
                                    <h2 id="management-bio-name" className="pr-10 text-2xl font-bold text-dark-charcoal">
                                        {selected.name}
                                    </h2>
                                    <p className="mt-1 text-sm font-semibold text-primary-orange">{selected.title}</p>
                                    <div className="mt-4 h-px w-12 bg-primary-orange/40" />
                                </div>

                                <div className="overflow-y-auto px-7 pb-7">
                                    {selected.bio ? (
                                        <p className="whitespace-pre-line text-base leading-7 text-dark-charcoal/70">{selected.bio}</p>
                                    ) : (
                                        <p className="text-base leading-7 text-dark-charcoal/50 italic">Bio coming soon.</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); goNext() }}
                            aria-label="Next person"
                            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                        >
                            <Icon icon="solar:arrow-right-bold" width={20} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
