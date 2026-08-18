export interface HomeContent {
    hero: {
        title: string | React.JSX.Element
        description: string
        imageUrl: string
        buttons: { label: string; href: string; primary?: boolean; separator?: string }[]
    }
    about: {
        title: string
        largeTitle: string
        description: string
        points: string[]
        imageUrl: string
    }
    industries: {
        subtext: string
        items: { name: string; icon: string; image: string }[]
    }
    whyUs: {
        imageUrl: string
        accordion: { title: string; description: string }[]
    }
}

export const homeData: Record<string, HomeContent> = {
    ke: {
        hero: {
            title: "Protect what matters most, your home, business and community.",
            description: "",
            imageUrl: "/images/ke/hero.png",
            buttons: [
                { label: "Explore Individual", href: "/ke/services/individual", primary: true, separator: "Explore " },
                { label: "Explore Corporate", href: "/ke/services/corporate", primary: true, separator: "Explore " }
            ]
        },
        about: {
            title: "WHO WE ARE",
            largeTitle: "55+ years of trusted security in Kenya",
            description: "SGA Kenya combines experience, innovation, and a dedicated 24/7 team to deliver reliable guarding, alarms, monitoring, and integrated security solutions across the country.",
            points: [
                "Fully licensed and compliant with Kenyan regulations",
                "Extensive network across Nairobi and major regions",
                "Culturally aware and locally trained professionals",
                "Integrated security technology and monitoring"
            ],
            imageUrl: "/images/ke/about-sga.png"
        },
        industries: {
            subtext: 'From banking to logistics, manufacturing to diplomatic missions, we deliver tailored security solutions across every sector in Kenya.',
            items: [
                { name: "Banking & Finance", icon: "mdi:bank", image: "/images/ke/industries/banking/hero.png" },
                { name: "Logistics & Supply Chain", icon: "mdi:truck", image: "/images/ke/placeholder.png" },
                { name: "Manufacturing", icon: "mdi:factory", image: "/images/ke/placeholder.png" },
                { name: "Retail & Commerce", icon: "mdi:store", image: "/images/ke/placeholder.png" },
                { name: "Residential Estates", icon: "mdi:home", image: "/images/ke/residentials.png" },
                { name: "Diplomatic & Government", icon: "mdi:shield-account", image: "/images/ke/placeholder.png" }
            ]
        },
        whyUs: {
            imageUrl: "/images/ke/why-choose-us.png",
            accordion: [
                { title: "Over 55 Years of Experience", description: "SGA Security has been operating since 1969, making it one of the longest-serving private security companies in East Africa. Its long track record has helped build credibility with individuals, businesses, and government institutions." },
                { title: "Highly Trained Security Personnel", description: "The company has received recognition as Kenya's Most Professional and Well-Trained Security Company, highlighting its strong focus on continuous training, discipline, and professional standards for its security officers." },
                { title: "Comprehensive Security Solutions", description: "SGA offers a wide range of services including manned guarding, alarm response, cash-in-transit, cash management, K-9 services, electronic tracking solutions, and home security services. This allows clients to obtain multiple security solutions from a single trusted provider." },
                { title: "International Standards and Certifications", description: "The company is ISO 18788:2015 certified and is a member of the International Code of Conduct Association (ICoCA), demonstrating commitment to globally recognized security, accountability, and ethical standards." },
                { title: "Proven Reputation and Industry Recognition", description: "SGA has earned multiple awards and recognitions for professionalism, service delivery, responsible security practices, and customer satisfaction. These achievements reinforce public confidence in the company's ability to protect people and assets effectively." }
            ]
        }
    },
    ug: {
        hero: {
            title: "Protect what matters most - your home and family",
            description: "From Kampala neighborhoods to businesses across Uganda, SGA Security provides reliable, round-the-clock protection.",
            imageUrl: "/images/ug/ug-hero.png",
            buttons: [
                { label: "Explore Home Security", href: "/ug/services/individual", primary: true, separator: "Explore " },
                { label: "Explore Business Security", href: "/ug/services/corporate", primary: true, separator: "Explore " }
            ]
        },
        about: {
            title: "WHO WE ARE",
            largeTitle: "Decades of trusted security in Uganda.",
            description: "SGA Uganda delivers guarding, alarms, and 24/7 monitoring powered by a professional team dedicated to protecting homes, businesses, and communities nationwide.",
            points: [
                "Fully licensed and compliant with Ugandan regulations",
                "Extensive network across Kampala and major regions",
                "Culturally aware and locally trained professionals",
                "Integrated security technology and monitoring"
            ],
            imageUrl: "/images/ug/about.png"
        },
        industries: {
            subtext: 'From banking to logistics and residential communities, SGA Uganda delivers custom security solutions to match diverse industry needs.',
            items: [
                { name: "Banking & Finance", icon: "mdi:bank", image: "/images/ke/industries/banking/hero.png" },
                { name: "Logistics", icon: "mdi:truck", image: "/images/ke/placeholder.png" },
                { name: "Residential", icon: "mdi:home", image: "/images/ug/residentials.png" }
            ]
        },
        whyUs: {
            imageUrl: "/images/ug/why-choose-us.png",
            accordion: [
                { title: "Local & Regional", description: "We are a trusted security partner with strong roots in Uganda, backed by a regional network that extends across East Africa." },
                { title: "24/7 Control Room", description: "Our advanced control room in Kampala operates day and night to ensure constant monitoring and rapid response." },
                { title: "People + Tech", description: "Our trained Ugandan security professionals, supported by innovative technology, provide tailored and dependable protection." },
                { title: "Proven Track Record", description: "With decades of service, we've safeguarded homes, businesses, and institutions across Uganda with consistency and trust." }
            ]
        }
    },
    tz: {
        hero: {
            title: "Protect what matters most - your home and family",
            description: "From Dar es Salaam to towns across Tanzania, SGA Security keeps families and businesses safe with dependable 24/7 protection.",
            imageUrl: "/images/tz/hero.png",
            buttons: [
                { label: "Explore Home Security", href: "/tz/services/individual", primary: true, separator: "Explore " },
                { label: "Explore Business Security", href: "/tz/services/corporate", primary: true, separator: "Explore " }
            ]
        },
        about: {
            title: "WHO WE ARE",
            largeTitle: "Protecting Tanzania with trusted experience",
            description: "For more than 40 years, SGA Tanzania has provided reliable guarding, alarms, and monitoring backed by dedicated professionals and modern security technology.",
            points: [
                "Fully licensed and compliant with Tanzanian laws",
                "Wide coverage in Dar es Salaam and all major towns",
                "Professional team with extensive local knowledge",
                "State-of-the-art technological security integration"
            ],
            imageUrl: "/images/tz/about.png"
        },
        industries: {
            subtext: 'SGA Tanzania provides tailored security for banking, mining, and logistics operations nationwide.',
            items: [
                { name: "Banking & Finance", icon: "mdi:bank", image: "/images/ke/industries/banking/hero.png" },
                { name: "Mining & Extractives", icon: "mdi:pickaxe", image: "/images/ke/placeholder.png" },
                { name: "Logistics", icon: "mdi:truck", image: "/images/ke/placeholder.png" }
            ]
        },
        whyUs: {
            imageUrl: "/images/tz/why-choose-us.png",
            accordion: [
                { title: "Local & Regional", description: "With a long-standing presence in Tanzania, we combine local knowledge with a strong East African security network." },
                { title: "24/7 Control Room", description: "Our Dar es Salaam control room runs 24/7, giving clients the assurance of continuous monitoring and immediate response." },
                { title: "People + Tech", description: "A dedicated Tanzanian team, working alongside advanced security technology, ensures proactive and reliable solutions." },
                { title: "Proven Track Record", description: "For decades, we've been the trusted security choice for families and businesses across Tanzania." }
            ]
        }
    }
}
