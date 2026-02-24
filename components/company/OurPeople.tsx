'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface OurPeopleProps {
    countryName: string
    imageUrl?: string
}

export default function OurPeople({
    countryName,
    imageUrl = '/images/group/about/about-2.png'
}: OurPeopleProps) {
    return (
        <section id="our-people" className="py-16 sm:py-20 bg-white">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="section-title-container">
                                <h2 className="section-title text-2xl md:text-4xl font-bold">
                                    Our People
                                </h2>
                                <div className="section-title-bar"></div>
                            </div>
                            <p className="text-sm md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                                Our strength is our people. Officers are vetted and trained in customer service, incident response, and site protocols—with continuous refresher courses through regional training programs and supervision from experienced team leaders.
                            </p>
                        </div>

                        <div className="space-y-6 pt-8">
                            <div className="section-title-container">
                                <h2 className="section-title text-2xl md:text-4xl font-bold">
                                    Quality & Compliance
                                </h2>
                                <div className="section-title-bar"></div>
                            </div>
                            <p className="text-sm md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                                We align with international best practice and local regulations, emphasizing safety, confidentiality, and fair employment. Site SOPs, regular drills, and performance reviews help us maintain high standards.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={imageUrl}
                            alt={`SGA Security ${countryName} Professionals`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
