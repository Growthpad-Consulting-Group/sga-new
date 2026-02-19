'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Accordion from '@/components/Accordion'

type FAQ = {
  id: string
  question: string
  answer: string
  category: 'ALL' | 'GETTING_STARTED' | 'SERVICES' | 'SAFETY_RESPONSE' | 'CAREERS' | 'SUPPORT'
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What security services does SGA Group offer?',
    answer: 'SGA Group provides comprehensive security solutions including manned guarding, remote CCTV monitoring, cash-in-transit services, fire & rescue, electronic security systems, and integrated technology solutions. All services are backed by our 24/7 control room operations.',
    category: 'SERVICES',
  },
  {
    id: '2',
    question: 'How do I get started with SGA security services?',
    answer: 'Getting started is easy. Contact our team through our website, call our emergency line, or visit one of our offices. We\'ll conduct a free security assessment and provide a customized solution tailored to your needs.',
    category: 'GETTING_STARTED',
  },
  {
    id: '3',
    question: 'What is your emergency response time?',
    answer: 'Our emergency response teams are available 24/7 and typically respond within minutes depending on your location. Response times vary by area, but we maintain strategically located teams to ensure rapid deployment.',
    category: 'SAFETY_RESPONSE',
  },
  {
    id: '4',
    question: 'Are your security guards trained and certified?',
    answer: 'Yes, all SGA security personnel undergo rigorous training and certification programs. Our guards are trained in security protocols, emergency response, customer service, and are regularly updated on the latest security practices.',
    category: 'SERVICES',
  },
  {
    id: '5',
    question: 'How can I apply for a career at SGA?',
    answer: 'Visit our Careers page to view open positions. You can apply online by submitting your CV through our application portal. We also accept walk-in applications at our country offices.',
    category: 'CAREERS',
  },
  {
    id: '6',
    question: 'What areas do you serve?',
    answer: 'SGA Group operates across Kenya, Uganda, and Tanzania, providing security services to businesses, residential properties, and institutions throughout East Africa.',
    category: 'GETTING_STARTED',
  },
  {
    id: '7',
    question: 'How do I report a security incident?',
    answer: 'In case of an emergency, call our 24/7 emergency line immediately. For non-emergency incidents, you can contact our control room or use our online reporting system. All incidents are logged and responded to promptly.',
    category: 'SAFETY_RESPONSE',
  },
  {
    id: '8',
    question: 'What support do you provide after service installation?',
    answer: 'We provide ongoing support including regular maintenance, system updates, staff training, and 24/7 monitoring. Our dedicated account managers ensure your security systems operate optimally at all times.',
    category: 'SUPPORT',
  },
  {
    id: '9',
    question: 'Do you offer customized security solutions?',
    answer: 'Absolutely. Every client receives a customized security assessment and solution tailored to their specific needs, risks, and budget. We work closely with clients to design the most effective security strategy.',
    category: 'SERVICES',
  },
  {
    id: '10',
    question: 'What qualifications are required for security guard positions?',
    answer: 'Requirements vary by position, but generally include: minimum education level, physical fitness, clean background check, and completion of our training program. Specific requirements are listed in each job posting.',
    category: 'CAREERS',
  },
  {
    id: '11',
    question: 'How do I contact customer support?',
    answer: 'You can reach our customer support team through phone, email, or by visiting our offices. We also offer online chat support during business hours. For emergencies, use our 24/7 emergency line.',
    category: 'SUPPORT',
  },
  {
    id: '12',
    question: 'What makes SGA different from other security companies?',
    answer: 'SGA Group combines 50+ years of experience with modern technology, vetted personnel, and standardized operations across all countries. Our integrated approach, 24/7 control room, and commitment to excellence set us apart.',
    category: 'GETTING_STARTED',
  },
]

const categories = [
  { id: 'ALL', label: 'All', count: faqs.length },
  { id: 'GETTING_STARTED', label: 'Getting Started', count: faqs.filter(f => f.category === 'GETTING_STARTED').length },
  { id: 'SERVICES', label: 'Services', count: faqs.filter(f => f.category === 'SERVICES').length },
  { id: 'SAFETY_RESPONSE', label: 'Safety & Response', count: faqs.filter(f => f.category === 'SAFETY_RESPONSE').length },
  { id: 'CAREERS', label: 'Careers', count: faqs.filter(f => f.category === 'CAREERS').length },
  { id: 'SUPPORT', label: 'Support', count: faqs.filter(f => f.category === 'SUPPORT').length },
]

interface FAQsContentProps {
  searchQuery?: string
}

export default function FAQsContent({ searchQuery = '' }: FAQsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const filteredFAQs = (() => {
    let filtered = selectedCategory === 'ALL' 
      ? faqs 
      : faqs.filter(faq => faq.category === selectedCategory)

    // Filter by search query
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
          {/* Left Column - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-primary-orange p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
              <div className="space-y-0">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left py-4 px-4 border-b border-white/20 last:border-b-0 transition-colors ${
                      selectedCategory === category.id
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

          {/* Right Column - Accordion */}
          <div className="lg:col-span-2">
            <Accordion items={faqItems} variant="default" />

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No FAQs found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

