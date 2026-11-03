import { countries } from '@/data/countries-data'
import { notFound, permanentRedirect } from 'next/navigation'

interface Props {
    params: Promise<{ country: string }>
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function WhyUsPage({ params }: Props) {
    const { country } = await params
    if (!countries[country]) notFound()

    permanentRedirect(`/${country}/about`)
}
