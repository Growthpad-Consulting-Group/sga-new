'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { countries } from '@/data/countries-data'

interface WhyUsHeroProps {
    countryCode: string
    imageUrl?: string
}

export default function WhyUsHero({ countryCode, imageUrl }: WhyUsHeroProps) {
    const c = countries[countryCode] || countries.ke
    const emergencyPhone = c.phone

    return (
        <section id="hero" className="bg-white text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-20 relative">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center py-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4 sm:space-y-6 flex flex-col justify-center relative"
                    >
                        <h3 className="text-sm md:text-2xl font-bold text-dark-charcoal tracking-wide">
                            Why SGA
                        </h3>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-orange">
                            Security built for real operations
                        </h2>
                        <p className="text-base md:text-2xl text-gray-700 leading-relaxed">
                            A dependable security partner for complex, high-traffic environments across the region.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-primary-orange uppercase text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-primary-orange/90 transition-colors"
                                >
                                    request a quote
                                </Link>
                            </motion.div>
                            <motion.a
                                href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-dark-charcoal uppercase text-dark-charcoal px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-dark-charcoal hover:text-white transition-colors flex items-center justify-center gap-2"
                            >
                                <Icon icon="streamline-sharp:emergency-call-remix" className="w-4 h-4 text-primary-orange" />
                                <span>Talk to an expert</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[550px]"
                    >
                        <div className="relative w-full h-full bg-light-grey rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100">
                            <Image
                                src={imageUrl || `/images/${countryCode}/about-sga.png`}
                                alt={`SGA Security ${c.name}`}
                                fill
                                className="object-cover rounded-2xl"
                                priority
                                onError={(e) => {
                                    // Fallback if country image doesn't exist
                                    (e.target as HTMLImageElement).src = '/images/group/about/hero.png'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
