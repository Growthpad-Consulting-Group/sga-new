'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

interface ServicesTypeHeroProps {
    country: string
    countryName: string
    type: string
    isIndividual: boolean
    description: string
    heroImage?: string
}

export default function ServicesTypeHero({
    country,
    countryName,
    isIndividual,
    description,
    heroImage
}: ServicesTypeHeroProps) {
    const { openModal } = useEnquiryModal()

    const emergencyPhones: Record<string, string> = {
        ke: '0733 700 500',
        ug: '0717 800 752',
        tz: '0784 700 299',
    }
    const emergencyPhone = emergencyPhones[country] || '0733 700 500'

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="bg-white text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-12 relative overflow-hidden">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center py-8">
                        {/* Left Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4 sm:space-y-6 flex flex-col justify-center relative"
                        >
                            {/* Service Type Badge */}
                            <div className="mb-2">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-orange text-white`}>
                                    For {isIndividual ? 'Individual' : 'Corporate'}
                                </span>
                            </div>

                            {/* Breadcrumbs */}
                            <nav className="flex items-center space-x-2 text-xs md:text-sm font-bold text-navy-blue tracking-wide uppercase">
                                <span>{countryName}</span>
                                <span className="text-gray-400">|</span>
                                <span>{isIndividual ? 'Individual' : 'Corporate'} Service</span>
                            </nav>

                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary-orange leading-none">
                                {isIndividual ? (
                                    <>Protecting You <br className="hidden md:block" /> & Your Family</>
                                ) : (
                                    <>Securing <br className="hidden md:block" /> Your Business</>
                                )}
                            </h2>
                            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-xl">
                                {description}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto"
                                >
                                    <button
                                        onClick={openModal}
                                        className="w-full inline-block bg-primary-orange text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-primary-orange/90 transition-colors text-center capitalize shadow-lg shadow-primary-orange/20"
                                    >
                                        Request a Quote
                                    </button>
                                </motion.div>
                                <motion.a
                                    href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-transparent border-2 border-primary-orange text-primary-orange px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-primary-orange hover:text-white transition-colors flex items-center justify-center gap-2 text-center"
                                >
                                    <Icon icon="streamline-sharp:emergency-call-remix" className="w-5 h-5" />
                                    <span>View Emergency Numbers</span>
                                </motion.a>
                            </div>

                            {/* Explore More Animated Arrow */}
                            {/* <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="pt-8"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, 8, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="flex items-center gap-3 cursor-pointer group"
                                    onClick={() => {
                                        const nextSection = document.querySelector('#services-grid') || document.querySelector('section:nth-of-type(2)')
                                        if (nextSection) {
                                            nextSection.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                >
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-navy-blue group-hover:bg-navy-blue transition-colors">
                                        <Icon
                                            icon="lucide:arrow-down"
                                            className="w-3.5 h-3.5 text-navy-blue group-hover:text-white transition-colors"
                                        />
                                    </div>
                                    <span className="text-xs text-navy-blue uppercase font-bold tracking-widest">Explore more</span>
                                </motion.div>
                            </motion.div> */}
                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative w-full aspect-[4/3] lg:aspect-square"
                        >
                            <Image
                                src={heroImage || '/images/group/guarding.png'}
                                alt={`${isIndividual ? 'Individual' : 'Corporate'} Services`}
                                fill
                                className="object-cover rounded-3xl shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Integrated Control Room Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-4 mb-8"
                    >
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-[40px] border border-gray-100 bg-white shadow-xl shadow-gray-100/50 relative z-10">
                            <div className="text-center lg:text-left flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <Icon icon="solar:phone-calling-bold-duotone" className="w-8 h-8 text-primary-orange" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Talk to us now</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-navy-blue">
                                        Talk to our {countryName} Control Room
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                                <motion.a
                                    href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-primary-orange text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary-orange/20 transition-all uppercase text-sm tracking-widest"
                                >
                                    CALL FOR FREE
                                </motion.a>
                                <motion.button
                                    onClick={openModal}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-white text-navy-blue px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg transition-all uppercase text-sm tracking-widest border-2 border-navy-blue hover:bg-navy-blue hover:text-white"
                                >
                                    BOOK SERVICE
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
