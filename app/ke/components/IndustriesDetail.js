'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import DecorativePattern from '@/components/DecorativePattern'

const industries = [
  {
    id: 'residential',
    name: 'Residential Estates & Apartments',
    icon: 'mdi:home',
    image: '/images/ug/residentials.png',
    description: 'Comprehensive security solutions for gated communities, residential estates, and apartment complexes. Our services include 24/7 guarding, access control, CCTV monitoring, and rapid response.',
    features: [
      '24/7 Security Guarding',
      'Access Control Systems',
      'CCTV Surveillance',
      'Emergency Response',
      'Visitor Management',
    ],
  },
  {
    id: 'education',
    name: 'Education & Schools',
    icon: 'mdi:school',
    image: '/images/ug/education.png',
    description: 'Protecting educational institutions with specialized security services tailored for schools, colleges, and universities. Ensuring safe learning environments for students and staff.',
    features: [
      'Campus Security',
      'Student Safety Programs',
      'Access Control',
      'Event Security',
      'Emergency Protocols',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Facilities',
    icon: 'mdi:hospital',
    image: '/images/ug/healthcare.png',
    description: 'Specialized security services for hospitals, clinics, and healthcare facilities. Protecting patients, staff, and sensitive medical equipment with round-the-clock security.',
    features: [
      'Hospital Security',
      'Patient Safety',
      'Asset Protection',
      'Access Control',
      'Emergency Response',
    ],
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Holiday Homes',
    icon: 'mdi:hotel',
    image: '/images/ug/hospitality.png',
    description: 'Security solutions for hotels, resorts, and holiday properties. Ensuring guest safety and protecting hospitality assets with discreet, professional security services.',
    features: [
      'Hotel Security',
      'Guest Safety',
      'Property Protection',
      'Event Security',
      '24/7 Monitoring',
    ],
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    icon: 'mdi:bank',
    image: '/images/ug/residentials.png',
    description: 'High-security solutions for banks, financial institutions, and ATMs. Protecting financial assets, staff, and customers with advanced security systems and trained personnel.',
    features: [
      'Bank Security',
      'Cash-in-Transit',
      'ATM Security',
      'Access Control',
      'Risk Assessment',
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Commerce',
    icon: 'mdi:store',
    image: '/images/ug/education.png',
    description: 'Retail security services protecting shops, malls, and commercial establishments. Reducing theft, ensuring customer safety, and maintaining secure business operations.',
    features: [
      'Retail Security',
      'Loss Prevention',
      'Customer Safety',
      'CCTV Monitoring',
      'Incident Response',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: 'mdi:factory',
    image: '/images/ug/healthcare.png',
    description: 'Industrial security for manufacturing facilities, warehouses, and production sites. Protecting assets, inventory, and ensuring workplace safety.',
    features: [
      'Factory Security',
      'Asset Protection',
      'Access Control',
      'Fire Safety',
      '24/7 Monitoring',
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    icon: 'mdi:truck',
    image: '/images/ug/hospitality.png',
    description: 'Security services for logistics companies, warehouses, and transportation hubs. Protecting goods in transit and securing distribution centers.',
    features: [
      'Warehouse Security',
      'Cargo Protection',
      'Fleet Security',
      'Access Control',
      'Risk Management',
    ],
  },
]

export default function IndustriesDetail({ countryCode = 'ke' }) {
  const countryNames = {
    ke: 'Kenya',
    ug: 'Uganda',
    tz: 'Tanzania',
  }
  const countryName = countryNames[countryCode] || 'Kenya'

  return (
    <section id="industries-detail" className="section-snap flex items-center justify-center bg-white text-dark-charcoal py-16 sm:py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-xs font-semibold text-navy uppercase tracking-wider">
              Industries We Serve
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-primary-orange relative pb-3">
              <span>Security Solutions for Every Industry</span>
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl">
              From residential estates to financial institutions, SGA Security {countryName} provides tailored security solutions designed to meet the unique needs of each industry we serve.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 scroll-mt-20"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-primary-orange rounded-full p-3">
                    <Icon icon={industry.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {industry.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-navy-blue mb-2">Key Services:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon icon="mdi:check-circle" className="w-4 h-4 text-primary-orange flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Don't see your industry listed? We customize our security solutions to meet your specific needs.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-navy-blue text-white px-8 py-3 rounded-full font-semibold text-sm uppercase hover:bg-primary-orange transition-colors"
          >
            Contact Us for Custom Solutions
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <DecorativePattern 
          className="transition-none" 
          static={true}
          colors={['bg-red-600', 'bg-green-600', 'bg-black']}
        />
      </div>
    </section>
  )
}

