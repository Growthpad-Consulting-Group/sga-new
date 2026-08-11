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
            title: "Protect what matters most - your home and family.",
            description: "SGA Kenya protects families, homes, and businesses nationwide with reliable 24/7 security solutions.",
            imageUrl: "/images/ke/hero.png",
            buttons: [
                { label: "Explore Home Security", href: "/ke/services/individual", primary: true, separator: "Explore " },
                { label: "Explore Business Security", href: "/ke/services/corporate", primary: true, separator: "Explore " }
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
            subtext: 'Beyond homes, we provide tailored solutions for businesses, institutions, and real estate developments across Kenya.',
            items: [
                { name: "Homes", icon: "mdi:bank", image: "/images/group/industries/residentials.png" },
                { name: "Businesses", icon: "mdi:pickaxe", image: "/images/group/industries/education.png" },
                { name: "Institutions", icon: "mdi:shield-account", image: "/images/group/industries/healthcare.png" },
                { name: "Real Estate", icon: "mdi:truck", image: "/images/group/industries/hospitality.png" }
            ]
        },
        whyUs: {
            imageUrl: "/images/ke/why-choose-us.png",
            accordion: [
                { title: "Local & Regional", description: "We are a security partner with deep roots in Kenya, providing local expertise with a world-class regional network." },
                { title: "24/7 Control Room", description: "Our state-of-the-art control room operates around the clock, ensuring constant monitoring and immediate response." },
                { title: "People + Tech", description: "Our expertly trained team and cutting-edge technology work in sync to provide a superior, proactive security solution." },
                { title: "Proven Track Record", description: "With over five decades of excellence, we have built a reputation for reliability and trust across Kenya." }
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
            subtext: 'From small businesses to large institutions, SGA Uganda delivers custom security solutions to match diverse industry needs.',
            items: [
                { name: "Homes", icon: "mdi:home", image: "/images/group/industries/residentials.png" },
                { name: "Businesses", icon: "mdi:school", image: "/images/group/industries/education.png" },
                { name: "Institutions", icon: "mdi:hospital", image: "/images/group/industries/healthcare.png" },
                { name: "Real Estate", icon: "mdi:store", image: "/images/group/industries/hospitality.png" }
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
            subtext: 'SGA Tanzania provides tailored security for homes, businesses, real estate, and institutions nationwide.',
            items: [
                { name: "Homes", icon: "mdi:bank", image: "/images/group/industries/residentials.png" },
                { name: "Businesses", icon: "mdi:pickaxe", image: "/images/group/industries/education.png" },
                { name: "Institutions", icon: "mdi:shield-account", image: "/images/group/industries/healthcare.png" },
                { name: "Real Estate", icon: "mdi:truck", image: "/images/group/industries/hospitality.png" }
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
