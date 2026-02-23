import NewsHero from '@/components/NewsHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'
import { getAllNewsPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'News & Insights - SGA Security Group - Stay Informed',
  description: 'Stay informed with the latest news, insights, and security updates from SGA Security Group. Access annual reports, security advisories, and industry insights.',
}

export default async function NewsReportsPage(): Promise<React.JSX.Element> {
  const newsPosts = await getAllNewsPosts()

  return (
    <>
      <NewsHero
        imageUrl="/images/contact/hero.png"
      />
      <NewsReportsCards initialNewsItems={newsPosts} />
      <FloatingWhatsApp />
    </>
  )
}

