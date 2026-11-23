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
        { name: 'Embassy of Cuba' },
        { name: 'Embassy of Japan - Kenya' },
        { name: 'Embassy of the Kingdom of the Netherlands' },
        { name: 'Embassy of the Republic of Korea' },
        { name: 'Algerian Embassy' },
        { name: 'Italian Embassy' },
        { name: 'Barbados High Commission' },
      ],
    },
    {
      id: 'hospitals',
      title: 'Hospitals',
      descriptionFrom: 'hospitals',
      clients: [
        { name: "Gertrude's Children's Hospital" },
        { name: 'Nazareth Hospital - Riara' },
        { name: 'GoodLife Pharmacy Ltd' },
      ],
    },
    {
      id: 'schools-institutions',
      title: 'Schools & Institutions',
      descriptionFrom: 'schools-institutions',
      clients: [
        { name: 'Strathmore School' },
        { name: 'The Nairobi Japanese School' },
        { name: 'Nairobi Institute of Business Studies Ltd' },
        { name: 'Kianda School' },
        { name: 'Amref International University' },
        { name: 'Netherlands School Society' },
        { name: 'Africa Nazarene University' },
        { name: 'Brookhouse Schools' },
        { name: 'Peponi House Preparatory' },
        { name: 'The M-Pesa Foundation Academy' },
      ],
    },
    {
      id: 'financial-institutions',
      title: 'Financial Institutions',
      descriptionFrom: 'financial-institutions',
      clients: [
        { name: 'Equity Bank', logo: 'equity-bank.jpg' },
        { name: 'DTB', logo: 'dtb.jpg' },
        { name: 'Cooperative Bank' },
        { name: 'I&M Bank', logo: 'i-m-bank.jpg' },
        { name: 'Prime Bank Ltd - Meru Branch' },
        { name: 'Prime Bank Ltd - Kitale Branch' },
        { name: 'Stanbic Bank Kenya Ltd', logo: 'stanbic-bank-logo.jpg' },
        { name: 'CIC General Insurance Limited' },
        { name: 'The CIC Insurance Group PLC' },
        { name: 'Unaitas Savings and Credit Co-operative Society Ltd' },
      ],
    },
    {
      id: 'hotels',
      title: 'Hotels',
      descriptionFrom: 'hotels',
      clients: [
        { name: 'Mada Hotels' },
        { name: 'Habesha Ethiopian Restaurant' },
        { name: 'Amaica The Restaurant' },
      ],
    },
    {
      id: 'multinationals',
      title: 'Multinationals',
      descriptionFrom: 'multinationals',
      clients: [
        { name: 'Coca-Cola', logo: 'coca-cola.jpg' },
        { name: 'Vivo Energy Kenya' },
        { name: 'EABL' },
        { name: 'AGL Forwarders', logo: 'agl.jpg' },
        { name: 'TotalEnergies' },
        { name: 'Rubis Energy Kenya' },
        { name: 'East African Safari Rally' },
        { name: 'Woolworths' },
        { name: 'CFAO Mobility' },
        { name: 'C Dormans SEZ Ltd' },
        { name: 'Britam' },
        { name: 'Chloride Exide' },
        { name: 'Insurance Co of East Africa Ltd' },
        { name: 'Simbisa Brands Kenya' },
      ],
    },
    {
      id: 'telecoms',
      title: 'Telecoms',
      clients: [{ name: 'Safaricom' }],
    },
    {
      id: 'mining',
      title: 'Mining',
      clients: [
        { name: 'Bamburi Cement' },
        { name: 'Base Titanium' },
        { name: 'Awovinar Mining Company' },
      ],
    },
    {
      id: 'ngos',
      title: "NGO's",
      descriptionFrom: 'ngos',
      clients: [
        { name: 'Norwegian Refuge Council' },
        { name: 'Amref Kenya' },
        { name: 'SHOFCO' },
        { name: 'Echo Network Africa Foundation' },
        { name: 'Consolatta Missionary Sisters' },
        { name: 'Evangelizing Sisters of Mary' },
        { name: 'Medical Missionaries of Mary' },
        { name: 'Center for International Health' },
      ],
    },
    {
      id: 'other-industries',
      title: 'Other Industries',
      descriptionFrom: 'other-industries',
      clients: [
        { name: 'Unilever' },
        { name: 'Crown Paints' },
        { name: 'Mini Bakeries' },
        { name: 'Quickmatt' },
        { name: 'Hypermatt' },
        { name: 'One Acre Fund' },
        { name: 'Naivas' },
        { name: 'Expressway Moja Plaza' },
        { name: 'ACK St Stephens Jogoo Road' },
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
