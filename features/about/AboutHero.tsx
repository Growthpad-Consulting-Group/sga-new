'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AboutHeroProps {
    countryName: string
    imageUrl?: string
}

// Years of operation per country
const yearsByCountry: Record<string, number> = {
    Kenya: 55,
    Uganda: 42,
    Tanzania: 42,
}

export default function AboutHero({
    countryName,
    imageUrl = '/images/group/about/hero.png'
}: AboutHeroProps) {
    return (
        <section id="hero" className="relative bg-gray-100 pt-[129px] xl:pt-[153px] pb-0">
            <div className="relative w-full h-[400px] md:h-[480px] lg:h-[540px] overflow-hidden bg-dark-charcoal text-white">
            <Image
                src={imageUrl}
                alt={`SGA Security ${countryName} - Security Excellence Since 1969`}
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />
            {/* Dark wash so the text stays readable over the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 pb-12 md:pb-16">
                <div className="container-fluid mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left space-y-2 max-w-3xl"
                    >
                        <p className="text-sm md:text-base font-normal uppercase tracking-wide text-white/90">
                            About SGA Security {countryName}
                        </p>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            <span className="text-primary-orange">Security That Matters</span>
                        </h1>
                        <p className="text-sm md:text-base lg:text-sm xl:text-base text-white/90">
                            Over {yearsByCountry[countryName] ?? 55} years of trusted, integrated security for homes, businesses, and institutions across {countryName}.
                        </p>
                    </motion.div>
                </div>
            </div>
            </div>
        </section>
    )
}
