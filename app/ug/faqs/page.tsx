import FAQsPageClient from './FAQsPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs - SGA Security Uganda - Frequently Asked Questions',
  description: 'Clear answers to common questions about SGA Group, our security services, operating standards, and how we support clients across Africa.',
}

export default function UgandaFAQsPage() {
  return <FAQsPageClient />
}

