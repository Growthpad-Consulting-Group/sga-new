export interface PageMetadata {
    title: string
    description: string
}

export type PageType = 'about' | 'contact' | 'faqs' | 'services' | 'industries' | 'why-us' | 'updates'

export const globalMetadata: Record<PageType, PageMetadata> = {
    about: {
        title: 'About SGA Security {country} - Leading Security East Africa',
        description: 'Learn about SGA Security {country}, our history, values, and commitment to providing top-tier security solutions across East Africa.',
    },
    contact: {
        title: 'Contact Us - SGA Security {country} - Get In Touch',
        description: 'Reach out to SGA Security {country} for trusted security solutions. Our regional teams are here to serve you.',
    },
    faqs: {
        title: 'FAQs - SGA Security {country} - Frequently Asked Questions',
        description: 'Clear answers to common questions about SGA Group, our security services, operating standards, and how we support clients in {country}.',
    },
    'why-us': {
        title: 'Why Choose SGA Security {country} - Trusted Security Solutions',
        description: 'Discover why SGA Security {country} is the leading choice for security solutions. Over 55 years of excellence and local expertise.',
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
