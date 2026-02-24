export interface IndustrySummary {
    id: string
    name: string
    icon: string
    image: string
    description: string
    features: string[]
}

export const industriesSummary: Record<string, IndustrySummary[]> = {
    ke: [
        {
            id: "banking",
            name: "Banking & Finance",
            icon: "mdi:bank",
            image: "/images/ke/industries/banking/hero.png",
            description: "High-security solutions for banks, financial institutions, and ATMs across Kenya.",
            features: ["Bank Security", "Cash-in-Transit", "ATM Security", "Access Control"]
        },
        {
            id: "logistics",
            name: "Logistics & Supply Chain",
            icon: "mdi:truck",
            image: "/images/ke/industries/logistics/hero.png",
            description: "Securing warehouses, distribution centers, and cargo in transit.",
            features: ["Warehouse Security", "Cargo Protection", "Fleet Monitoring"]
        },
        {
            id: "manufacturing",
            name: "Manufacturing",
            icon: "mdi:factory",
            image: "/images/ke/industries/manufacturing/hero.png",
            description: "Protecting industrial plants, staff, and production continuity.",
            features: ["Factory Guarding", "Asset Protection", "Fire Safety"]
        },
        {
            id: "retail",
            name: "Retail & Commerce",
            icon: "mdi:store",
            image: "/images/ke/industries/retail/hero.png",
            description: "Security services for malls, supermarkets, and luxury retail.",
            features: ["Loss Prevention", "Crowd Control", "CCTV Monitoring"]
        },
        {
            id: "residential",
            name: "Residential Estates",
            icon: "mdi:home",
            image: "/images/ke/residentials.png",
            description: "Protecting gated communities and multi-unit apartments.",
            features: ["Visitor Management", "Rapid Response", "Patrol Services"]
        },
        {
            id: "diplomatic",
            name: "Diplomatic & Government",
            icon: "mdi:shield-account",
            image: "/images/ug/education.png",
            description: "Specialized protection for missions and public facilities.",
            features: ["Vetting", "Surveillance", "Executive Protection"]
        }
    ],
    ug: [
        {
            id: "banking",
            name: "Banking & Finance",
            icon: "mdi:bank",
            image: "/images/ke/industries/banking/hero.png",
            description: "Leading security provider for financial institutions across Uganda.",
            features: ["Branch Guarding", "CIT Services", "Emergency Response"]
        },
        {
            id: "logistics",
            name: "Logistics",
            icon: "mdi:truck",
            image: "/images/ke/industries/logistics/hero.png",
            description: "Protecting essential supply chains and transport hubs.",
            features: ["Warehouse Security", "Fleet Watch", "Access Control"]
        },
        {
            id: "residential",
            name: "Residential",
            icon: "mdi:home",
            image: "/images/ug/residentials.png",
            description: "Trusted by Kampala residentials for over two decades.",
            features: ["24/7 Patrols", "Alarm Systems", "Community Policing"]
        }
    ],
    tz: [
        {
            id: "banking",
            name: "Banking & Finance",
            icon: "mdi:bank",
            image: "/images/ke/industries/banking/hero.png",
            description: "Comprehensive financial security solutions in Tanzania.",
            features: ["ATM Guarding", "Bank Security", "Risk Management"]
        },
        {
            id: "mining",
            name: "Mining & Extractives",
            icon: "mdi:pickaxe",
            image: "/images/tz/industries/mining/hero.png",
            description: "High-level protection for industrial mining operations.",
            features: ["Perimeter Security", "Access Control", "Resource Protection"]
        },
        {
            id: "logistics",
            name: "Logistics",
            icon: "mdi:truck",
            image: "/images/ke/industries/logistics/hero.png",
            description: "Securing goods and transportation across the country.",
            features: ["Warehouse Management", "Cargo Escort", "Asset Tracking"]
        }
    ]
}
