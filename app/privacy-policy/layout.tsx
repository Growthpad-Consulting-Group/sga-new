import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - SGA Security Group',
  description: 'Learn how SGA Security Group collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
