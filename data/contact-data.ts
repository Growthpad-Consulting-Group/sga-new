export interface ContactOffice {
    country: string
    city: string
    address: string[]
    phones: { label: string; number: string; icon: string }[]
    email: string
    whatsapp: string
    flag: string
    mapUrl: string
    mapEmbedUrl: string
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
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.766336332155!2d36.8491043!3d-1.3157967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f110787e91f1b%3A0x3f5c9a0a0a0a0a0a!2sTulip%20House!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske',
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
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.271360057032!2d39.2458313!3d-6.7627447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c490a0a0a0a01%3A0x9a0a0a0a0a0a0a0a!2sSGA%20Security%20Tanzania!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz',
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
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.0435940333!2d32.6105473!3d0.3392477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0a0a0a0a01%3A0x8a0a0a0a0a0a0a0a!2sSGA%20Security%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug',
        websiteUrl: '/ug'
    },
]
