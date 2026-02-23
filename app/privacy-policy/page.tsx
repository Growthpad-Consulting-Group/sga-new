'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-snap relative bg-gray-100 text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-16">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left space-y-4"
          >
            <h2 className="text-sm md:text-base font-normal text-gray-700 uppercase tracking-wide">
              Legal
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-orange">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: February 23, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                SGA Security Group ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services across Kenya, Uganda, and Tanzania.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:information-outline" className="text-primary-orange" />
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request a quote or consultation</li>
                  <li>Submit an enquiry form</li>
                  <li>Apply for employment</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us via phone, email, or website</li>
                </ul>
                <p>This information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact details (email, phone number, address)</li>
                  <li>Company name and business information</li>
                  <li>Employment history and qualifications (for job applications)</li>
                  <li>Security requirements and property details</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:cog-outline" className="text-primary-orange" />
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our security services</li>
                  <li>Respond to your enquiries and service requests</li>
                  <li>Process job applications and recruitment</li>
                  <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                  <li>Conduct risk assessments and security evaluations</li>
                  <li>Maintain records for business and legal purposes</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:share-variant-outline" className="text-primary-orange" />
                3. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., IT services, payment processors)</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Affiliated Companies:</strong> Within the SGA Security Group across Kenya, Uganda, and Tanzania</li>
                </ul>
                <p className="mt-4">We do not sell your personal information to third parties.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:cookie-outline" className="text-primary-orange" />
                4. Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Deliver relevant content and advertisements</li>
                </ul>
                <p className="mt-4">You can control cookies through your browser settings. However, disabling cookies may affect website functionality.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:shield-check-outline" className="text-primary-orange" />
                5. Data Security
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="mt-4">However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:account-check-outline" className="text-primary-orange" />
                6. Your Rights
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us using the details below.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:clock-outline" className="text-primary-orange" />
                7. Data Retention
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We retain your personal information for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide our services to you</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Maintain business records</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:baby-face-outline" className="text-primary-orange" />
                8. Children's Privacy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:earth" className="text-primary-orange" />
                9. International Data Transfers
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.</p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:update" className="text-primary-orange" />
                10. Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
              </div>
            </div>

        </div>
      </section>
    </>
  )
}
