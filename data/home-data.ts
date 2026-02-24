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
        items: { name: string; icon: string; image: string }[]
    }
    whyUs: {
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
                { label: "Explore Home Security", href: "#individuals", primary: true, separator: "Explore " },
                { label: "Explore Business Security", href: "#corporate", primary: true, separator: "Explore " }
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
            items: [
                { name: "Homes", icon: "mdi:home", image: "/images/ke/residentials.png" },
                { name: "Businesses", icon: "mdi:school", image: "/images/ke/education.png" },
                { name: "Institutions", icon: "mdi:hospital", image: "/images/ke/healthcare.png" },
                { name: "Hospitality", icon: "mdi:hotel", image: "/images/ke/hospitality.png" }
            ]
        },
        whyUs: {
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
                { label: "Explore Home Security", href: "#individuals", primary: true, separator: "Explore " },
                { label: "Explore Business Security", href: "#corporate", primary: true, separator: "Explore " }
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
            items: [
                { name: "Residential", icon: "mdi:home", image: "/images/ug/residentials.png" },
                { name: "Education", icon: "mdi:school", image: "/images/ug/education.png" },
                { name: "Healthcare", icon: "mdi:hospital", image: "/images/ug/healthcare.png" },
                { name: "Commercial", icon: "mdi:store", image: "/images/ug/hospitality.png" }
            ]
        },
        whyUs: {
            accordion: [
                { title: "Local Presence", description: "SGA is a legacy security partner with deep roots in Uganda, providing trusted local expertise." },
                { title: "24/7 Monitoring", description: "Our 24-hour control room in Kampala ensures constant vigilance and rapid emergency response." },
                { title: "Expert Training", description: "Our personnel undergo rigorous training to ensure they provide the highest level of professional protection." },
                { title: "Integrated Solutions", description: "We combine physical guarding with advanced electronic systems for comprehensive security coverage." }
            ]
        }
    },
    tz: {
        hero: {
            title: "Your Safety, Our Commitment Across Tanzania",
            description: "Protecting Tanzanian homes and businesses with world-class security services and local expertise.",
            imageUrl: "/images/tz/tz-hero.png",
            buttons: [
                { label: "Explore Home Security", href: "#individuals", primary: true, separator: "Explore " },
                { label: "Explore Business Security", href: "#corporate", primary: true, separator: "Explore " }
            ]
        },
        about: {
            title: "WHO WE ARE",
            largeTitle: "Trusted Security Excellence in Tanzania",
            description: "SGA Tanzania provides comprehensive security solutions tailored to the unique needs of the Tanzanian market, ensuring peace of mind for our clients.",
            points: [
                "Fully licensed and compliant with Tanzanian laws",
                "Wide coverage in Dar es Salaam and all major towns",
                "Professional team with extensive local knowledge",
                "State-of-the-art technological security integration"
            ],
            imageUrl: "/images/tz/about-sga.png"
        },
        industries: {
            items: [
                { name: "Banking", icon: "mdi:bank", image: "/images/tz/industries/banking/hero.png" },
                { name: "Mining", icon: "mdi:pickaxe", image: "/images/tz/industries/mining/hero.png" },
                { name: "Diplomatic", icon: "mdi:shield-account", image: "/images/tz/education.png" },
                { name: "Logistics", icon: "mdi:truck", image: "/images/tz/industries/logistics/hero.png" }
            ]
        },
        whyUs: {
            accordion: [
                { title: "Professionalism", description: "Our Tanzanian team is recognized for their discipline, dedication, and professional excellence." },
                { title: "Rapid Response", description: "Strategically located response teams ensure minimal delay during security incidents." },
                { title: "Advanced Tech", description: "We invest in the latest security technology to keep our clients in Tanzania ahead of threats." },
                { title: "Trusted Partner", description: "Over 50 years of experience protecting what matters most across Tanzania." }
            ]
        }
    }
}
