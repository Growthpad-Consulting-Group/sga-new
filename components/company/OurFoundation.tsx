'use client'

import { motion } from 'framer-motion'

interface OurFoundationProps {
    countryName: string
}

const foundations = [
    {
        title: 'Mission',
        description: 'To provide sustainable safety and security solutions built on people, innovation, and responsibility.'
    },
    {
        title: 'Vision',
        description: 'To be Africa’s trusted security solutions provider of choice, driven by quality, integrity, innovation, and strong customer relationships.'
    },
    {
        title: 'Values',
        description: 'SGA Security fosters a culture of safety, pride, and professionalism, empowering our teams to deliver with quality, discipline, loyalty, and integrity.'
    }
]

export default function OurFoundation({ countryName }: OurFoundationProps) {
    return (
        <section id="our-foundation" className="py-20 bg-white">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-16"
                >
                    <div className="section-title-container inline-block !mb-6">
                        <h2 className="section-title text-2xl md:text-5xl font-bold text-primary-orange">Our Foundation</h2>
                        <div className="section-title-bar left-0"></div>
                    </div>
                    <p className="text-sm md:text-xl text-gray-700 max-w-3xl">
                        Guided by purpose, driven by values.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
                    {foundations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="flex flex-col items-center w-full"
                        >
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-primary-orange flex flex-col items-center justify-center p-8 text-center transition-all duration-300">
                                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-white text-base lg:text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
