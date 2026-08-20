import fs from 'fs'
import path from 'path'
import IndustriesHero from './components/IndustriesHero'
import IndustriesAccordion from './components/IndustriesAccordion'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'
import { industriesData, resolveIndustryData } from '@/data/industries-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Industries We Serve - SGA Security Group',
    description: 'Tailored security solutions for banking, retail, logistics, manufacturing, and more across Kenya, Uganda, and Tanzania.',
}

// Some industry images referenced in the data haven't been uploaded yet —
// fall back to a solid placeholder rather than showing a broken image.
const PLACEHOLDER_IMAGE = '/images/ke/placeholder.png'
function resolveImage(imagePath: string): string {
    if (!imagePath.startsWith('/images/')) return imagePath
    const fullPath = path.join(process.cwd(), 'public', imagePath)
    return fs.existsSync(fullPath) ? imagePath : PLACEHOLDER_IMAGE
}

export default function IndustriesPage() {
    const industries = Object.entries(industriesData).map(([slug, data]) => {
        const resolved = resolveIndustryData(data, 'East Africa', '')
        return {
            slug,
            industryName: resolved.industryName,
            industryIcon: resolved.industryIcon,
            image: resolveImage(resolved.heroImage),
            description: resolved.overviewDescription,
            services: resolved.services,
        }
    })

    return (
        <>
            <IndustriesHero />
            <div className="relative">
                <IndustriesAccordion industries={industries} />
                <SectionSeparator />
            </div>
            <FloatingWhatsApp />
        </>
    )
}
