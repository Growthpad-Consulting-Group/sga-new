export type FAQCategory = 'ALL' | 'GETTING_STARTED' | 'SERVICES' | 'SAFETY_RESPONSE' | 'CAREERS' | 'SUPPORT'

export interface FAQ {
    id: string
    question: string
    answer: string
    category: FAQCategory
}

export const faqs: FAQ[] = [
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
