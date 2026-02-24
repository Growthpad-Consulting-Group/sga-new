export interface ContactOffice {
    country: string
    city: string
    address: string[]
    phones: { label: string; number: string; icon: string }[]
    email: string
    whatsapp: string
    flag: string
    mapUrl: string
    websiteUrl: string
}

export const contactOffices: ContactOffice[] = [
    {
        country: 'Kenya',
        city: 'Headquarters',
        address: [
            'Tulip House, Ground Floor Mombasa road',
            'P.O. Box 18670 00500 Nairobi, Kenya',
        ],
        phones: [
            { label: 'Tel', number: '+254 111 024000', icon: 'mdi:phone' },
        ],
        email: 'customerservice@ke.sgasecurity.com',
        whatsapp: '+254 111 024000',
        flag: 'emojione:flag-for-kenya',
        mapUrl: 'https://maps.google.com/?q=Tulip+House+Mombasa+Road+Nairobi+Kenya',
        websiteUrl: '/ke'
    },
    {
        country: 'Tanzania',
        city: 'Headquarters',
        address: [
            'Plot No.74, Warioba/Serengeti Street, Mikocheni',
            'Kinondoni, Dar Es Salaam, Tanzania'
        ],
        phones: [
            { label: 'Tel', number: '+255 754 303076', icon: 'mdi:phone' },
        ],
        email: 'customercare@sgasecurity.co.tz',
        whatsapp: '+255 754 303076',
        flag: 'emojione:flag-for-tanzania',
        mapUrl: 'https://maps.google.com/?q=Plot+74+Warioba+Serengeti+Street+Mikocheni+Dar+es+Salaam+Tanzania',
        websiteUrl: '/tz'
    },
    {
        country: 'Uganda',
        city: 'Headquarters',
        address: [
            'Plot 5 Mvule Close, Naguru Hill',
            'P.O. Box 20097, Kampala, Uganda'
        ],
        phones: [
            { label: 'Tel', number: '+256 772 200 048', icon: 'mdi:phone' },
        ],
        email: 'customerservice@ug.sgasecurity.com',
        whatsapp: '+256 772 200 048',
        flag: 'emojione:flag-for-uganda',
        mapUrl: 'https://maps.google.com/?q=Plot+5+Mvule+Close+Naguru+Hill+Kampala+Uganda',
        websiteUrl: '/ug'
    },
]
