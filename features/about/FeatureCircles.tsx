'use client'

import { motion } from 'framer-motion'

interface FeatureCircleProps {
    label: string
    delay?: number
}

const FeatureCircle = ({ label, delay = 0 }: FeatureCircleProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.05 }}
        className="aspect-square rounded-full bg-primary-orange flex items-center justify-center p-2 md:p-4 text-center shadow-lg"
    >
        <span className="text-white font-bold text-sm md:text-xl lg:text-2xl xl:text-3xl">
            {label}
        </span>
    </motion.div>
)

interface FeatureCirclesProps {
    features?: string[]
}

const defaultFeatures = [
    'Discipline',
    'Loyalty',
    'Integrity',
    'Excellence',
    'Innovation',
    'Experience',
]

export default function FeatureCircles({ features = defaultFeatures }: FeatureCirclesProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6 pt-8">
            {features.map((feature, index) => (
                <FeatureCircle key={feature} label={feature} delay={index * 0.1} />
            ))}
        </div>
    )
}
