'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
export interface AccordionItem {
  title: string
  description: string
}

interface WhyChooseUsProps {
  countryName?: string
  backgroundColor?: string
  accordionItems?: AccordionItem[]
  image?: string
}

export default function WhyChooseUs({
  countryName = 'Kenya',
  backgroundColor = 'bg-white',
  image = '/images/ke/why-choose-us.jpg',
  accordionItems = [
    {
      title: 'Over 55 Years of Experience',
      description: 'SGA Security has been operating since 1969, making it one of the longest-serving private security companies in East Africa. Its long track record has helped build credibility with individuals, businesses, and government institutions.',
    },
    {
      title: 'Highly Trained Security Personnel',
      description: "The company has received recognition as Kenya's Most Professional and Well-Trained Security Company, highlighting its strong focus on continuous training, discipline, and professional standards for its security officers.",
    },
    {
      title: 'Comprehensive Security Solutions',
      description: 'SGA offers a wide range of services including manned guarding, alarm response, cash-in-transit, cash management, K-9 services, electronic tracking solutions, and home security services. This allows clients to obtain multiple security solutions from a single trusted provider.',
    },
    {
      title: 'International Standards and Certifications',
      description: 'The company is ISO 18788:2015 certified and is a member of the International Code of Conduct Association (ICoCA), demonstrating commitment to globally recognized security, accountability, and ethical standards.',
    },
    {
      title: 'Proven Reputation and Industry Recognition',
      description: "SGA has earned multiple awards and recognitions for professionalism, service delivery, responsible security practices, and customer satisfaction. These achievements reinforce public confidence in the company's ability to protect people and assets effectively.",
    },
  ],
}: WhyChooseUsProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="why-choose-us" className={`flex items-center justify-center ${backgroundColor} relative py-16 md:py-24 overflow-x-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-fluid mx-auto"
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
                      className={`w-10 h-10 shrink-0 ml-4 ${openIndex === index ? 'text-primary-orange' : 'text-dark-charcoal'
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
          </div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center h-full w-full"
          >
            <div className="relative w-full h-[450px] md:h-full min-h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={`Why choose SGA Security in ${countryName}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

