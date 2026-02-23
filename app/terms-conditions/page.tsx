'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

export default function TermsConditionsPage() {
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
              Terms & Conditions
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
                Welcome to SGA Security Group. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. Please read them carefully.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:file-document-outline" className="text-primary-orange" />
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our services.</p>
                <p>These Terms apply to all visitors, users, and others who access or use our services across Kenya, Uganda, and Tanzania.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:shield-account-outline" className="text-primary-orange" />
                2. Services Provided
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>SGA Security Group provides comprehensive security solutions including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Security guarding and personnel services</li>
                  <li>Electronic security systems and monitoring</li>
                  <li>Risk assessment and consulting</li>
                  <li>Emergency response services</li>
                  <li>Integrated security solutions</li>
                  <li>Event security management</li>
                </ul>
                <p className="mt-4">Specific terms for each service will be outlined in individual service agreements.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:handshake-outline" className="text-primary-orange" />
                3. Service Agreements
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Contract Formation</h3>
                <p>A binding contract is formed when:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You accept our written quotation or proposal</li>
                  <li>Both parties sign a service agreement</li>
                  <li>We commence providing services with your consent</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Service Modifications</h3>
                <p>We reserve the right to modify or discontinue services with reasonable notice. Any changes to ongoing services will be communicated in writing.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:cash-multiple" className="text-primary-orange" />
                4. Pricing and Payment
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Fees</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All fees are quoted in the local currency of the country where services are provided</li>
                  <li>Prices are subject to change with 30 days written notice</li>
                  <li>Additional charges may apply for services outside the agreed scope</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due as specified in your service agreement</li>
                  <li>Late payments may incur interest charges as permitted by law</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All payments are non-refundable unless otherwise stated</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:account-alert-outline" className="text-primary-orange" />
                5. Client Responsibilities
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Grant necessary access to premises and systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain confidentiality of security procedures</li>
                  <li>Report security incidents promptly</li>
                  <li>Cooperate with our security personnel</li>
                  <li>Ensure safe working conditions for our staff</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:scale-balance" className="text-primary-orange" />
                6. Liability and Indemnification
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Limitation of Liability</h3>
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our liability is limited to the fees paid for the specific service</li>
                  <li>We are not liable for indirect, consequential, or punitive damages</li>
                  <li>We do not guarantee prevention of all security incidents</li>
                  <li>Our services are provided on an "as is" basis</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Insurance</h3>
                <p>We maintain appropriate insurance coverage as required by law. Details are available upon request.</p>

                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Indemnification</h3>
                <p>You agree to indemnify and hold SGA Security Group harmless from claims arising from your breach of these Terms or misuse of our services.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:lock-outline" className="text-primary-orange" />
                7. Confidentiality
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Both parties agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain confidentiality of sensitive information</li>
                  <li>Use confidential information only for authorized purposes</li>
                  <li>Implement appropriate security measures</li>
                  <li>Return or destroy confidential information upon request</li>
                </ul>
                <p className="mt-4">This obligation survives termination of the service agreement.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:file-cancel-outline" className="text-primary-orange" />
                8. Termination
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">By Client</h3>
                <p>You may terminate services by providing written notice as specified in your service agreement (typically 30-90 days).</p>

                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">By SGA Security</h3>
                <p>We may terminate services immediately if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You breach these Terms or your service agreement</li>
                  <li>Payment is not received within the specified period</li>
                  <li>Continuing services would violate applicable laws</li>
                  <li>Your actions endanger our personnel</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark-charcoal mt-6">Effect of Termination</h3>
                <p>Upon termination, you must pay all outstanding fees and return any equipment or materials provided by us.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:copyright" className="text-primary-orange" />
                9. Intellectual Property
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>All content on our website, including text, graphics, logos, and software, is the property of SGA Security Group and protected by copyright and trademark laws.</p>
                <p>You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reproduce, distribute, or modify our content without permission</li>
                  <li>Use our trademarks or branding without authorization</li>
                  <li>Reverse engineer or copy our security systems or processes</li>
                </ul>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:web" className="text-primary-orange" />
                10. Website Use
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>When using our website, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with website functionality or security</li>
                  <li>Transmit viruses or malicious code</li>
                  <li>Collect user information without consent</li>
                  <li>Impersonate others or provide false information</li>
                </ul>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:link-variant" className="text-primary-orange" />
                11. Third-Party Links
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these external sites. Use them at your own risk.</p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:gavel" className="text-primary-orange" />
                12. Governing Law and Disputes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>These Terms are governed by the laws of the country where services are provided:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kenya: Laws of the Republic of Kenya</li>
                  <li>Uganda: Laws of the Republic of Uganda</li>
                  <li>Tanzania: Laws of the United Republic of Tanzania</li>
                </ul>
                <p className="mt-4">Any disputes will be resolved through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Good faith negotiations</li>
                  <li>Mediation or arbitration (if agreed)</li>
                  <li>Courts of competent jurisdiction in the relevant country</li>
                </ul>
              </div>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:alert-circle-outline" className="text-primary-orange" />
                13. Force Majeure
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We are not liable for failure to perform due to circumstances beyond our reasonable control, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Natural disasters, war, or terrorism</li>
                  <li>Government actions or regulations</li>
                  <li>Labor disputes or strikes</li>
                  <li>Pandemics or public health emergencies</li>
                  <li>Utility failures or telecommunications outages</li>
                </ul>
              </div>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:file-edit-outline" className="text-primary-orange" />
                14. Amendments
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of the modified Terms.</p>
                <p>For significant changes, we will provide reasonable notice to existing clients.</p>
              </div>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:puzzle-outline" className="text-primary-orange" />
                15. Severability
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
              </div>
            </div>

            {/* Section 16 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
                <Icon icon="mdi:file-document-multiple-outline" className="text-primary-orange" />
                16. Entire Agreement
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>These Terms, together with your service agreement and our Privacy Policy, constitute the entire agreement between you and SGA Security Group regarding the use of our services.</p>
              </div>
            </div>

        </div>
      </section>
    </>
  )
}
