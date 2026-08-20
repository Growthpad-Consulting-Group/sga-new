import fs from 'fs'
import path from 'path'
import IndustriesHero from './IndustriesHero'
import IndustriesAccordion from './IndustriesAccordion'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'
import { industriesData, resolveIndustryData } from '@/data/industries-data'
import type { CountryContact } from '@/data/countries-data'

// Some industry images referenced in the data haven't been uploaded yet —
// fall back to a solid placeholder rather than showing a broken image.
const PLACEHOLDER_IMAGE = '/images/ke/placeholder.png'
function resolveImage(imagePath: string): string {
    if (!imagePath.startsWith('/images/')) return imagePath
    const fullPath = path.join(process.cwd(), 'public', imagePath)
    return fs.existsSync(fullPath) ? imagePath : PLACEHOLDER_IMAGE
}

interface IndustriesPageContentProps {
    /** Present when rendered under /[country]/industries, so the WhatsApp
     * button and header stay scoped to that country instead of the group. */
    country?: CountryContact
}

export default function IndustriesPageContent({ country }: IndustriesPageContentProps) {
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
            {country ? (
                <FloatingWhatsApp
                    singleCountry={true}
                    country={country.name}
                    phone={country.whatsapp}
                    url={country.whatsappUrl}
                    flag={country.flag}
                />
            ) : (
                <FloatingWhatsApp />
            )}
        </>
    )
}
