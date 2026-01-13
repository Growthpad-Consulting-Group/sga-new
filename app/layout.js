import './globals.css'
import Header from '@/components/Header'
import ConditionalFooter from '@/components/ConditionalFooter'
import { EnquiryModalProvider } from '@/contexts/EnquiryModalContext'
import { CVModalProvider } from '@/contexts/CVModalContext'

export const metadata = {
  title: 'SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Professional security services across Kenya, Uganda, and Tanzania. Trusted protection for businesses and communities.',
  keywords: 'security services, security guards, East Africa, Kenya, Uganda, Tanzania',
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EnquiryModalProvider>
          <CVModalProvider>
            <Header />
            <main className="pt-28 sm:pt-32">
              {children}
            </main>
            <ConditionalFooter />
          </CVModalProvider>
        </EnquiryModalProvider>
      </body>
    </html>
  )
}

