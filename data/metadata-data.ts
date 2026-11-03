export interface PageMetadata {
    title: string
    description: string
}

export type PageType = 'about' | 'why-us' | 'contact' | 'faqs' | 'services' | 'industries' | 'updates'

export const globalMetadata: Record<PageType, PageMetadata> = {
    about: {
        title: 'About SGA Security {country} - Leading Security East Africa',
        description: 'Learn about SGA Security {country}, our history, values, and commitment to providing top-tier security solutions across East Africa.',
    },
    'why-us': {
        title: 'Why Us - SGA Security {country} - Why Choose Us',
        description: 'Why choose SGA Security {country}: our experience, trained personnel, and integrated security solutions.',
    },
    contact: {
        title: 'Contact Us - SGA Security {country} - Get In Touch',
        description: 'Reach out to SGA Security {country} for trusted security solutions. Our regional teams are here to serve you.',
    },
    faqs: {
        title: 'FAQs - SGA Security {country} - Frequently Asked Questions',
        description: 'Clear answers to common questions about SGA Group, our security services, operating standards, and how we support clients in {country}.',
    },
    updates: {
        title: 'News & Insights - SGA Security {country}',
        description: 'Stay up to date with the latest security news, insights, and announcements from SGA Security {country}.',
    },
    services: {
        title: 'Our Services - SGA Security {country}',
        description: 'Comprehensive security solutions in {country}, including guarding, monitoring, and emergency response.',
    },
    industries: {
        title: 'Industries We Serve - SGA Security {country}',
        description: 'Tailored security solutions for banking, retail, logistics, manufacturing, and more in {country}.',
    }
}

export function resolveMetadata(type: PageType, countryName: string): PageMetadata {
    const meta = globalMetadata[type]
    return {
        title: meta.title.replace(/\{country\}/g, countryName),
        description: meta.description.replace(/\{country\}/g, countryName),
    }
}
