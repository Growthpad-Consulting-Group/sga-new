import GroupIntegratedSolutions from '@/features/home/GroupIntegratedSolutions'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

export const metadata = {
  title: 'Products & Services - SGA Security Group',
  description: 'Explore SGA Security products and services across Kenya, Uganda and Tanzania, for individuals and corporate clients.',
}

export default function ServicesLandingPage() {
  return (
    <>
      <GroupIntegratedSolutions title="Products & Services" />
      <FloatingWhatsApp />
    </>
  )
}
