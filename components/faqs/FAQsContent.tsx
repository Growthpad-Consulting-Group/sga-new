'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Accordion from '@/components/Accordion'
import { faqs } from '@/data/faqs-data'

interface FAQsContentProps {
    searchQuery?: string
}

const categories = [
    { id: 'ALL', label: 'All', count: faqs.length },
    { id: 'GETTING_STARTED', label: 'Getting Started', count: faqs.filter(f => f.category === 'GETTING_STARTED').length },
    { id: 'SERVICES', label: 'Services', count: faqs.filter(f => f.category === 'SERVICES').length },
    { id: 'SAFETY_RESPONSE', label: 'Safety & Response', count: faqs.filter(f => f.category === 'SAFETY_RESPONSE').length },
    { id: 'CAREERS', label: 'Careers', count: faqs.filter(f => f.category === 'CAREERS').length },
    { id: 'SUPPORT', label: 'Support', count: faqs.filter(f => f.category === 'SUPPORT').length },
]

export default function FAQsContent({ searchQuery = '' }: FAQsContentProps) {
    const [selectedCategory, setSelectedCategory] = useState('ALL')

    const filteredFAQs = (() => {
        let filtered = selectedCategory === 'ALL'
            ? faqs
            : faqs.filter(faq => faq.category === selectedCategory)

        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(faq =>
                faq.question.toLowerCase().includes(query) ||
                faq.answer.toLowerCase().includes(query)
            )
        }

        return filtered
    })()

    const faqItems = filteredFAQs.map((faq) => ({
        id: faq.id,
        title: faq.question,
        content: <p className="text-gray-700 leading-relaxed">{faq.answer}</p>,
    }))

    return (
        <section id="faqs-content" className="bg-white py-16 sm:py-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-primary-orange p-6 rounded-lg">
                            <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
                            <div className="space-y-0">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full text-left py-4 px-4 border-b border-white/20 last:border-b-0 transition-colors ${selectedCategory === category.id
                                                ? 'bg-white/20 text-white font-semibold'
                                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{category.label}</span>
                                            <span className="text-sm opacity-80">({category.count})</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <Accordion items={faqItems} variant="default" />
                        {filteredFAQs.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-600 text-lg">No FAQs found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
