import AboutHero from '../components/AboutHero'
import AboutIntro from '../components/AboutIntro'
import OurFoundation from '../components/OurFoundation'
import OurJourney from '../components/OurJourney'
import OurPeople from '../components/OurPeople'
import SectionSeparator from '@/components/SectionSeparator'

import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'About SGA Security Kenya - Leading Security Solutions in Kenya',
  description: 'Learn about SGA Security Kenya, our mission, values, and commitment to providing exceptional security services across Kenya.',
}

export default function KenyaAboutPage() {
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
        country="Kenya"
        phone="+254111024000"
        url="https://wa.me/254111024000"
        flag="twemoji:flag-kenya"
      />
    </>
  )
}

