'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { AccordionItem } from '@/data/why-choose-us'

interface WhyChooseUsProps {
  countryName?: string
  backgroundColor?: string
  accordionItems?: AccordionItem[]
}

export default function WhyChooseUs({
  countryName = 'Kenya',
  backgroundColor = 'bg-white',
  accordionItems = [
    {
      title: 'Local & Regional',
      description: 'We are a security partner with deep roots in Kenya, providing local expertise with a world-class regional network.',
    },
    {
      title: '24/7 Control Room',
      description: 'Our state-of-the-art control room operates around the clock, ensuring constant monitoring and immediate response.',
    },
    {
      title: 'People + Tech',
      description: 'Our expertly trained team and cutting-edge technology work in sync to provide a superior, proactive security solution.',
    },
    {
      title: 'Proven Track Record',
      description: 'For over 55 years, our consistent delivery of world-class security has earned the trust of homes and businesses across Kenya.',
    },
  ],
}: WhyChooseUsProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="why-choose-us" className={`section-snap flex items-center justify-center ${backgroundColor} relative pb-0 overflow-x-hidden min-h-[100vh]`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Content - Title + Accordion */}
          <div className="flex flex-col justify-center items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mb-8 items-start flex flex-col w-full"
            >
              <p className="text-md font-normal text-dark-charcoal uppercase tracking-wider">
                why us
              </p>
              <div className="section-title-container w-full">
                <h2 className="section-title text-xl md:text-3xl lg:text-5xl font-bold text-primary-orange">
                  Why {countryName} trusts SGA Security
                </h2>
                <div className="section-title-bar"></div>
              </div>
            </motion.div>

            {/* Accordion */}
            <div className="space-y-2 flex-1 w-full mb-8">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${openIndex === index ? 'border border-dark-charcoal' : 'hover:bg-dark-charcoal/5'
                    }`}
                  whileHover={openIndex !== index ? { scale: 1.01 } : {}}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-4 text-left transition-colors group"
                  >
                    <h3 className={`text-xl md:text-3xl font-bold capitalize transition-colors duration-300 ${openIndex === index ? 'text-primary-orange' : 'text-black group-hover:text-primary-orange'
                      }`} style={{ textTransform: 'capitalize' }}>
                      {item.title}
                    </h3>
                    <Icon
                      icon={openIndex === index ? 'mynaui:arrow-up-circle' : 'mynaui:arrow-down-circle'}
                      className={`w-10 h-10 flex-shrink-0 ml-4 ${openIndex === index ? 'text-primary-orange' : 'text-dark-charcoal'
                        }`}
                    />
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-base md:text-lg text-dark-charcoal leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-primary-orange text-white px-8 py-4 rounded-full font-semibold text-base uppercase hover:bg-primary-orange/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Talk to Our Team
              </motion.a>
            </motion.div>
          </div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center h-full w-full"
          >
            <div className="relative w-full h-[450px] md:h-full min-h-[500px] rounded-2xl bg-gray-200">
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

