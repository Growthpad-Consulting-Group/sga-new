import IndustriesPageContent from './components/IndustriesPageContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Industries We Serve - SGA Security Group',
    description: 'Tailored security solutions for banking, retail, logistics, manufacturing, and more across Kenya, Uganda, and Tanzania.',
}

export default function IndustriesPage() {
    return <IndustriesPageContent />
}
