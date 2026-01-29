import AboutHero from '../components/AboutHero'
import AboutIntro from '../components/AboutIntro'
import OurFoundation from '../components/OurFoundation'
import OurJourney from '../components/OurJourney'
import OurPeople from '../components/OurPeople'
import SectionSeparator from '@/components/SectionSeparator'

import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'About SGA Security Tanzania - Leading Security Solutions in Tanzania',
  description: 'Learn about SGA Security Tanzania, our mission, values, and commitment to providing exceptional security services across Tanzania.',
}

export default function TanzaniaAboutPage() {
  return (
    <>
      <AboutHero
        imageUrl="/images/group/about/hero.png"
      />
      <div className="relative">
        <AboutIntro
          imageUrl="/images/group/about/about-2.png"
        />
        <SectionSeparator />
      </div>
      <div className="relative">
        <OurFoundation />
        <SectionSeparator />
      </div>
      <div className="relative">
        <OurJourney />
      </div>
      <div className="relative">
        <OurPeople
          imageUrl="/images/group/about/about-2.png"
        />
        <SectionSeparator />
      </div>
      <FloatingWhatsApp
        singleCountry={true}
        country="Tanzania"
        phone="+255222123456"
        url="https://wa.me/255222123456"
        flag="twemoji:flag-tanzania"
      />
    </>
  )
}

