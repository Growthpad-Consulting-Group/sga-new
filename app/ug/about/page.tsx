import AboutHero from '../components/AboutHero'
import AboutIntro from '../components/AboutIntro'
import OurFoundation from '../components/OurFoundation'
import OurJourney from '../components/OurJourney'
import OurPeople from '../components/OurPeople'

import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'About SGA Security Uganda - Leading Security Solutions in Uganda',
  description: 'Learn about SGA Security Uganda, our mission, values, and commitment to providing exceptional security services across Uganda.',
}

export default function UgandaAboutPage() {
  return (
    <>
      <AboutHero 
        imageUrl="/images/group/about/hero.png"
      />
      <AboutIntro 
        imageUrl="/images/group/about/about-2.png"
      />
      <OurFoundation />
      <OurJourney />
      <OurPeople 
        imageUrl="/images/group/about/about-2.png"
      />
      <FloatingWhatsApp 
        singleCountry={true}
        country="Uganda"
        phone="+256772200048"
        url="https://wa.me/256772200048"
        flag="twemoji:flag-uganda"
      />
    </>
  )
}

