export interface CountryContact {
    name: string
    code: string
    phone: string
    whatsapp: string
    whatsappUrl: string
    flag: string
}

export const countries: Record<string, CountryContact> = {
    ke: {
        name: 'Kenya',
        code: 'ke',
        phone: '+254 111 024000',
        whatsapp: '+254 111 024000',
        whatsappUrl: 'https://wa.me/254111024000',
        flag: 'twemoji:flag-kenya',
    },
    ug: {
        name: 'Uganda',
        code: 'ug',
        phone: '+256 772 200 048',
        whatsapp: '+256 772 200 048',
        whatsappUrl: 'https://wa.me/256772200048',
        flag: 'twemoji:flag-uganda',
    },
    tz: {
        name: 'Tanzania',
        code: 'tz',
        phone: '+255 754 303076',
        whatsapp: '+255 754 303076',
        whatsappUrl: 'https://wa.me/255754303076',
        flag: 'twemoji:flag-tanzania',
    },
}
