// Industries and clients for each country's industries page.
// Kenya comes from the Kenya client sheet, Uganda from the Uganda client logo folders.
// Tanzania is not listed yet, so its industries page keeps the shared industry list.
// Logos live in public/images/clients. A client without a logo is shown as a name tile.

export interface IndustryClient {
  name: string
  /** File name in public/images/clients, if we have a logo */
  logo?: string
}

export interface CountryIndustry {
  id: string
  title: string
  /** Slug in industries-data.ts whose description this industry reuses */
  descriptionFrom?: string
  clients: IndustryClient[]
}

export type CountryCodeWithIndustries = 'ke' | 'ug'

export const countryIndustries: Record<CountryCodeWithIndustries, CountryIndustry[]> = {
  ke: [
    {
      id: 'diplomatic-missions',
      title: 'Diplomatic Missions',
      descriptionFrom: 'diplomatic-missions',
      clients: [
        { name: 'Embassy of Cuba', logo: 'embassy-of-cuba.png' },
        { name: 'Embassy of Japan - Kenya', logo: 'embassy-of-japan-kenya.jpeg' },
        { name: 'Embassy of the Kingdom of the Netherlands', logo: 'embassy-of-the-netherlands.png' },
        { name: 'Embassy of the Republic of Korea', logo: 'embassy-of-korea.jpg' },
        { name: 'Algerian Embassy', logo: 'algerian-embassy.jpeg' },
        { name: 'Italian Embassy', logo: 'italian-embassy.jpg' },
        { name: 'Barbados High Commission', logo: 'barbados-high-commission.jpeg' },
      ],
    },
    {
      id: 'hospitals',
      title: 'Hospitals',
      descriptionFrom: 'hospitals',
      clients: [
        { name: "Gertrude's Children's Hospital", logo: 'gertrudes-children-hospital.png' },
        { name: 'Nazareth Hospital - Riara', logo: 'nazareth-hospital.png' },
        { name: 'GoodLife Pharmacy Ltd', logo: 'goodlife-pharmacy.jpg' },
      ],
    },
    {
      id: 'schools-institutions',
      title: 'Schools & Institutions',
      descriptionFrom: 'schools-institutions',
      clients: [
        { name: 'Strathmore School', logo: 'strathmore-school.png' },
        { name: 'The Nairobi Japanese School', logo: 'nairobi-japanese-school.png' },
        { name: 'Nairobi Institute of Business Studies Ltd', logo: 'nairobi-institute-business-studies.jpeg' },
        { name: 'Kianda School', logo: 'kianda-school.jpeg' },
        { name: 'Amref International University', logo: 'amref-international-university.png' },
        { name: 'Netherlands School Society', logo: 'netherlands-school-society.jpeg' },
        { name: 'Africa Nazarene University', logo: 'africa-nazarene-university.webp' },
        { name: 'Brookhouse Schools', logo: 'brookhouse-schools.png' },
        { name: 'Peponi House Preparatory', logo: 'peponi-house.png' },
        { name: 'The M-Pesa Foundation Academy', logo: 'mpesa-foundation-academy.jpeg' },
      ],
    },
    {
      id: 'financial-institutions',
      title: 'Financial Institutions',
      descriptionFrom: 'financial-institutions',
      clients: [
        { name: 'Equity Bank', logo: 'equity-bank.jpg' },
        { name: 'DTB', logo: 'dtb.jpg' },
        { name: 'Cooperative Bank', logo: 'cooperative-bank.png' },
        { name: 'I&M Bank', logo: 'i-m-bank.jpg' },
        { name: 'Prime Bank Ltd', logo: 'prime-bank.png' },
        { name: 'Stanbic Bank Kenya Ltd', logo: 'stanbic-bank-logo.jpg' },
        { name: 'CIC General Insurance Limited', logo: 'cic-general-insurance.png' },
        { name: 'The CIC Insurance Group PLC', logo: 'cic-group.png' },
        { name: 'Unaitas Savings and Credit Co-operative Society Ltd', logo: 'unaitas.png' },
      ],
    },
    {
      id: 'hotels',
      title: 'Hotels',
      descriptionFrom: 'hotels',
      clients: [
        { name: 'Mada Hotels', logo: 'mada-hotels.png' },
        { name: 'Habesha Ethiopian Restaurant', logo: 'habesha-ethiopian-restaurant.jpeg' },
        { name: 'Amaica The Restaurant', logo: 'amaica-restaurant.png' },
      ],
    },
    {
      id: 'multinationals',
      title: 'Multinationals',
      descriptionFrom: 'multinationals',
      clients: [
        { name: 'Coca-Cola', logo: 'coca-cola.jpg' },
        { name: 'Vivo Energy Kenya', logo: 'vivo-energy.jpeg' },
        { name: 'EABL', logo: 'eabl.png' },
        { name: 'AGL Forwarders', logo: 'agl.jpg' },
        { name: 'TotalEnergies', logo: 'totalenergies.webp' },
        { name: 'Rubis Energy Kenya', logo: 'rubis-energy.png' },
        { name: 'East African Safari Rally', logo: 'east-african-safari-rally.jpeg' },
        { name: 'Woolworths', logo: 'woolworths.png' },
        { name: 'CFAO Mobility', logo: 'cfao-mobility.png' },
        { name: 'C Dormans SEZ Ltd', logo: 'c-dormans-sez.webp' },
        { name: 'Britam', logo: 'britam.png' },
        { name: 'Chloride Exide', logo: 'chloride-exide.jpeg' },
        { name: 'Insurance Co of East Africa Ltd', logo: 'insurance-co-east-africa.png' },
        { name: 'Simbisa Brands Kenya', logo: 'simbisa-brands.jpeg' },
      ],
    },
    {
      id: 'telecoms',
      title: 'Telecoms',
      clients: [{ name: 'Safaricom', logo: 'safaricom.png' }],
    },
    {
      id: 'mining',
      title: 'Mining',
      clients: [
        { name: 'Bamburi Cement', logo: 'bamburi-cement.png' },
        { name: 'Base Titanium', logo: 'base-titanium.png' },
        { name: 'Awovinar Mining Company', logo: 'awovinar-mining.png' },
      ],
    },
    {
      id: 'ngos',
      title: "NGO's",
      descriptionFrom: 'ngos',
      clients: [
        { name: 'Norwegian Refuge Council', logo: 'norwegian-refugee-council.gif' },
        { name: 'Amref Kenya', logo: 'amref-kenya.webp' },
        { name: 'SHOFCO', logo: 'shofco.webp' },
        { name: 'Echo Network Africa Foundation', logo: 'echo-network-africa.png' },
        { name: 'Consolatta Missionary Sisters', logo: 'consolata-missionary-sisters.jpeg' },
        { name: 'Evangelizing Sisters of Mary', logo: 'evangelizing-sisters-of-mary.png' },
        { name: 'Medical Missionaries of Mary', logo: 'medical-missionaries-of-mary.jpeg' },
        { name: 'Center for International Health', logo: 'center-international-health.png' },
      ],
    },
    {
      id: 'other-industries',
      title: 'Other Industries',
      descriptionFrom: 'other-industries',
      clients: [
        { name: 'Unilever', logo: 'unilever.webp' },
        { name: 'Crown Paints', logo: 'crown-paints.png' },
        { name: 'Mini Bakeries', logo: 'mini-bakeries.jpeg' },
        { name: 'Quickmatt', logo: 'quickmart.png' },
        { name: 'Hypermatt', logo: 'hypermart.png' },
        { name: 'One Acre Fund', logo: 'one-acre-fund.png' },
        { name: 'Naivas', logo: 'naivas.png' },
        { name: 'Expressway Moja Plaza', logo: 'moja-nairobi-expressway.svg' },
        { name: 'ACK St Stephens Jogoo Road', logo: 'ack-st-stephens.jpeg' },
      ],
    },
  ],
  ug: [
    {
      id: 'diplomatic-missions',
      title: 'Diplomatic Missions',
      descriptionFrom: 'diplomatic-missions',
      clients: [
        { name: 'Embassy of Iceland', logo: 'embassy-of-iceland.jpg' },
        { name: 'Embassy of Uganda', logo: 'embassy-of-uganda.png' },
        { name: 'GIZ', logo: 'giz.jpg' },
        { name: 'Kenya High Commission', logo: 'kenya-high-commission.jpg' },
        { name: 'Royal Danish Embassy', logo: 'royal-danish-embassy-logo.jpg' },
      ],
    },
    {
      id: 'financial-institutions',
      title: 'Financial Institutions',
      descriptionFrom: 'financial-institutions',
      clients: [
        { name: 'Absa Bank', logo: 'absa-bank.jpg' },
        { name: 'BRAC Uganda', logo: 'brac-uganda.jpg' },
        { name: 'Centenary Bank', logo: 'centenary-bank.jpg' },
        { name: 'DFCU Bank', logo: 'dfcu-bank.jpg' },
        { name: 'DTB', logo: 'dtb.jpg' },
        { name: 'Eco Bank', logo: 'eco-bank.jpg' },
        { name: 'Equity Bank', logo: 'equity-bank.jpg' },
        { name: 'Exim Bank', logo: 'exim-bank.jpg' },
        { name: 'Finance Trust Bank', logo: 'finance-trust-bank.jpg' },
        { name: 'Finca Bank', logo: 'finca-bank.jpg' },
        { name: 'I&M Bank', logo: 'i-m-bank.jpg' },
        { name: 'KCB Bank', logo: 'kcb-bank.jpg' },
        { name: 'Pearl Bank', logo: 'pearl-bank.jpg' },
        { name: 'Pride Bank', logo: 'pride-bank.jpg' },
        { name: 'Stanbic Bank', logo: 'stanbic-bank-logo.jpg' },
        { name: 'Watu Credit', logo: 'watu-credit.jpg' },
        { name: 'Housing Finance', logo: 'housing-finance.jpg' },
        { name: 'UGAFODE', logo: 'ugafode.jpg' },
      ],
    },
    {
      id: 'health-care',
      title: 'Health Care',
      descriptionFrom: 'hospitals',
      clients: [
        { name: 'C Care', logo: 'c-care.jpg' },
        { name: 'Phillips', logo: 'phillips.jpg' },
      ],
    },
    {
      id: 'hotels-hospitality',
      title: 'Hotels & Hospitality',
      descriptionFrom: 'hotels',
      clients: [
        { name: 'Sheraton Hotel', logo: 'sheraton-hotel.png' },
        { name: 'Java House', logo: 'java-house.jpg' },
      ],
    },
    {
      id: 'logistics',
      title: 'Logistics',
      clients: [
        { name: 'AGL', logo: 'agl.jpg' },
        { name: 'DHL', logo: 'dhl.jpg' },
      ],
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      descriptionFrom: 'multinationals',
      clients: [
        { name: 'Coca-Cola', logo: 'coca-cola.jpg' },
        { name: 'Crown Beverages', logo: 'crown-beverages.jpg' },
        { name: 'Harris International', logo: 'harris-international.jpg' },
        { name: 'Ntake Bakeries', logo: 'ntake-bakeries.jpg' },
        { name: 'Roogings', logo: 'roogings-logo.jpg' },
      ],
    },
    {
      id: 'ngos',
      title: "NGO's",
      descriptionFrom: 'ngos',
      clients: [
        { name: 'Compassion International', logo: 'compassion-international.jpg' },
        { name: 'Raising the Village', logo: 'raising-the-village.png' },
        { name: 'Watoto', logo: 'watoto.jpg' },
      ],
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas',
      clients: [
        { name: 'Nesta', logo: 'nesta.jpg' },
        { name: 'Stabex International', logo: 'stabex-int.jpg' },
      ],
    },
    {
      id: 'energy',
      title: 'Energy',
      clients: [{ name: 'Sunculture', logo: 'sunculture.jpg' }],
    },
    {
      id: 'telecommunications',
      title: 'Telecommunications',
      clients: [
        { name: 'Airtel Uganda', logo: 'airtel-uganda.jpg' },
        { name: 'MTN Uganda', logo: 'mtn-uganda.jpg' },
        { name: 'Market by MoMo', logo: 'market-by-momo.jpg' },
        { name: 'Mkopa', logo: 'mkopa.png' },
      ],
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      clients: [{ name: 'SICPA', logo: 'sicpa.png' }],
    },
    {
      id: 'automotive',
      title: 'Automotive',
      clients: [
        { name: 'Motorcare UG', logo: 'motorcare-ug.jpg' },
        { name: 'Verma Co', logo: 'verma-co.jpg' },
      ],
    },
  ],
}
