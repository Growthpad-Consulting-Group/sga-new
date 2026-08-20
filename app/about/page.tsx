import AboutHero from './components/AboutHero'
import AboutIntro from './components/AboutIntro'
import OurFoundation from './components/OurFoundation'
import OurJourney from './components/OurJourney'
import CertificationsAndMemberships from './components/CertificationsAndMemberships'
import type { Metadata } from 'next'
import SectionSeparator from '@/components/SectionSeparator'
import { getAllCertificateDocuments } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'About SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Learn about SGA Security Group, our mission, values, and commitment to providing exceptional security services across Kenya, Uganda, and Tanzania.',
}

export default async function AboutPage(): Promise<React.JSX.Element> {
  const certificateDocuments = (await getAllCertificateDocuments()).map((doc) => ({
    title: doc.title,
    category: doc.category,
    country: doc.country,
    link: doc.fileUrl,
  }))

  return (
    <>
      <AboutHero
        imageUrl="/images/group/about/hero.png"
      />
      <div className="relative">
        <AboutIntro
          imageUrl="/images/group/about/about-2.png"
        />
        {/* <SectionSeparator /> */}
      </div>
      <div className="relative">
        <OurFoundation />
        <SectionSeparator />
      </div>
      <div className="relative">
        <OurJourney />
        <SectionSeparator />
      </div>
      <div className="relative">
        <CertificationsAndMemberships documents={certificateDocuments} />
        <SectionSeparator />
      </div>
    </>
  )
}