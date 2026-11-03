export interface CoreService {
  title: string
  description: string
  imageUrl: string
  countryImageUrls?: Partial<Record<'ke' | 'ug' | 'tz', string>>
  href?: string
}

export const coreServices: CoreService[] = [
  {
    title: 'Home Security Solutions',
    description: 'Comprehensive security solutions for residential properties with 24/7 monitoring and rapid response.',
    imageUrl: '/images/group/guarding.png',
    href: 'https://www.sgasecurity.com/home-security-solution/',
  },
  {
    title: 'Courier Services',
    description: 'Secure courier services for sensitive documents and valuable items with tracked delivery.',
    imageUrl: '/images/group/core-services/courier.jpg',
  },
  {
    title: 'Guarding Services',
    description: 'Professional guarding for offices, malls, logistics yards and estates.',
    imageUrl: '/images/group/core-services/guarding.jpg',
  },
  {
    title: 'Alarm Response Services',
    description: 'Rapid alarm response teams ready to respond to security alerts 24/7.',
    imageUrl: '/images/group/core-services/alarm.jpg',
  },
  {
    title: 'Electronic Cargo Tracking Services',
    description: 'Advanced GPS tracking solutions for vehicles and assets with real-time monitoring.',
    imageUrl: '/images/group/core-services/tracking.jpg',
  },
  {
    title: 'CIT and Cash Management Services',
    description: 'Secure movement of valuables with armored fleet and vetted crews.',
    imageUrl: '/images/group/core-services/cit.jpg',
  },
  {
    title: 'CCTV Services',
    description: 'Installation and maintenance of security systems including CCTV, access control, and alarms.',
    imageUrl: '/images/group/core-services/cctv.jpg',
  },
  {
    title: 'K-9 Services',
    description: 'Trained K9 units for enhanced security patrols and detection services.',
    imageUrl: '/images/group/core-services/k9.jpg',
  },
  {
    title: 'Special Services',
    description: 'Customized security solutions tailored to unique client requirements and high-risk scenarios.',
    imageUrl: '/images/group/cit.png',
    countryImageUrls: {
      ke: '/images/ke/core-services/special-services-spa0908.jpg',
    },
  },
  {
    title: 'Workshop Services',
    description: 'In-house workshop for vehicle maintenance and security equipment servicing.',
    imageUrl: '/images/group/guarding.png',
  },
  {
    title: 'Control Room Services',
    description: '24/7 monitored control room coordinating rapid response across all client sites.',
    imageUrl: '/images/group/cctv.png',
  },
  {
    title: 'Reception Services',
    description: 'Professional front-of-house teams managing access and visitor experience.',
    imageUrl: '/images/group/core-services/reception.jpg',
  },
  {
    title: 'Customer Services',
    description: 'Dedicated support teams ensuring responsive, client-focused service delivery.',
    imageUrl: '/images/group/core-services/customer-service.jpg',
  },
  {
    title: 'Close Protection Services',
    description: 'Specialized close protection officers for executive and VIP security.',
    imageUrl: '/images/group/core-services/close-protection.jpg',
  },
]

export const coreServiceInterestOptions = coreServices.map((service) => service.title)
