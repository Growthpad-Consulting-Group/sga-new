'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import SectionWrapper from '@/components/SectionWrapper'
import Accordion from '@/components/Accordion'
import WhistleblowingForm from '@/components/contact/WhistleblowingForm'

const whistleblowingItems = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>
          For more than half a century, SGA Security has worked to ensure that we conduct our affairs with unyielding integrity. We work to uphold the highest standards of business practices and have a zero tolerance for corruption, fraud and ethics violations.
        </p>
        <p>
          Along with our core values of leadership, passion, accountability and quality, integrity is a pillar of our overall vision. By acting with integrity, we reflect positively on the values and reputation of the Company and its brand everywhere we have a footprint.
        </p>
      </div>
    ),
  },
  {
    id: 'raise-your-voice',
    title: 'Raise Your Voice',
    content: (
      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
        At SGA Security, we encourage our clients/stakeholders to speak out on any suspected wrongdoing or concerns on our operational procedures. Raising integrity concerns protects the SGA Security community: i.e. our company, our colleagues and our stakeholders. If you have a concern about compliance with any of SGA Security policy, you have a responsibility to raise that concern. We treat all disclosures with utmost confidentiality and respect in accordance with the SGA Security values. Both your identity and the information shared will be on a "need-to-know" basis with those responsible for resolving the concern.
      </p>
    ),
  },
  {
    id: 'how-to-raise',
    title: 'How to Raise an Integrity Concern',
    content: (
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>
          SGA Security offers several official channels for our clients and stakeholders to voice concerns/issues or information on acts or conduct that breach this Code. Please use the channel that is most comfortable for you.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
            <span>A formal letter/email directly to the Country Director or the Group Chief Executive Officer.</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
            <span>
              A phone call or SMS to SGA Security Corporate Ombudsperson. Email:{' '}
              <a href="mailto:ombudsman@sgasecurity.com" className="text-primary-orange font-semibold hover:underline">
                ombudsman@sgasecurity.com
              </a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
            <span>This dedicated web form to submit the whistle-blower's concern.</span>
          </li>
        </ul>
        <p>
          Please fill in this web form to report any suspected wrongdoing to the management of SGA Security Group for review and action.
        </p>
      </div>
    ),
  },
  {
    id: 'what-happens',
    title: 'What Happens When an Integrity Concern Is Raised?',
    content: (
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>
          All concerns about compliance with SGA Security policy follow a standard process of review and investigation. The investigation process includes:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
            <span>
              <span className="font-semibold">Assigning an investigator</span> - Experts with the right knowledge and objectivity are assigned to investigate. Where appropriate, concerns relating to operational procedures are investigated by the local management team lead by the Country Director. This ensures that relevant laws and standards are being followed to access operational compliance. In case further escalation is required investigations will take place at senior management level led by the Group Chief Executive Officer and an independent Audit Team.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
            <span><span className="font-semibold">Investigation</span> - The team determines the facts through interviews and/or review of the information provided.</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
            <span><span className="font-semibold">Corrective Action</span> - If necessary, the team recommends corrective actions to the appropriate managers for implementation.</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
            <span><span className="font-semibold">Feedback</span> - The person raising the concern receives feedback on the outcome (if applicable).</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'retaliation',
    title: 'Retaliation Violates SGA Security Policy',
    content: (
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>
          SGA Security values the help of our clients and stakeholders who identify potential problems that the Company needs to address and prohibits retaliation against anyone for raising or helping to address an integrity concern.
        </p>
        <p>
          We assure our clients/stakeholders that they will be protected from reprisals or victimization for whistle blowing in good faith. If at any time the whistle-blower is dissatisfied with the response or outcome of the investigation, the whistle-blower is at liberty to report the concern to the Country Director or Group Chief Executive Officer of SGA Group.
        </p>
        <p>
          This again is without prejudice to the whistle-blower's fundamental right to report the concern to appropriate regulatory body or seek further redress in a court of law.
        </p>
      </div>
    ),
  },
]

export default function CustomerCare(): React.JSX.Element {
  return (
    <SectionWrapper id="whistleblowing" className="relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-fluid mx-auto"
      >
        {/* Title Section with Plus Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative">
            <Icon
              icon="mdi:plus-thick"
              className="absolute -top-12 -left-2 w-12 h-12 text-primary-orange font-bold"
              style={{ strokeWidth: 3 }}
            />
            <h3 className="text-xl md:text-5xl font-bold text-primary-orange relative pl-6 pb-3">
              Whistleblowing
            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 pl-6">
            SGA Security is committed to conducting our affairs with unyielding integrity. Learn how to raise a concern and what happens next.
          </p>
        </motion.div>

        <div className="pl-6 mt-8">
          <Accordion items={whistleblowingItems} variant="default" />
        </div>

        <div className="pl-6 mt-12">
          <WhistleblowingForm />
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
