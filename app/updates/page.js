import UpdatesHero from '@/components/UpdatesHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Updates - SGA Security Group - Latest Updates',
  description: 'Stay up to date with the latest updates, announcements, and news from SGA Security Group. Get the most recent information about our services and operations.',
}

export default function UpdatesPage() {
  return (
    <>
      <UpdatesHero 
        imageUrl="/images/contact/hero.png"
      />
      <NewsReportsCards />
      <FloatingWhatsApp />
    </>
  )
}

