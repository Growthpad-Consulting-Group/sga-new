import Hero from './components/Hero'
import ResourcesDocuments from './components/ResourcesDocuments'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Resources - SGA Security Group - Official Guidance Documents',
  description: 'Download official SGA guidance documents (PDF) for offline use and internal sharing across all operating countries.',
}

export default function ResourcesPage() {
  return (
    <>
      <Hero />
      <ResourcesDocuments />
      <FloatingWhatsApp />
    </>
  )
}

