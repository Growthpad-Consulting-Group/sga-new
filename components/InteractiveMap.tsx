'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'

interface Location {
  name: string
  address: string
  phone: string[]
  email: string
  lat: number
  lng: number
  country: string
  isHQ: boolean
  mapsUrl: string
}

export interface InteractiveMapRef {
  selectLocationByCountry: (country: string) => void
}

const locations: Location[] = [
  // Uganda Locations
  {
    name: 'SGA Security Uganda HQ',
    address: 'Plot 05 Mvule Close, Naguru Hill, Kampala Uganda',
    phone: ['+256 417 114 400'],
    email: 'info@ug.sgasecurity.com',
    lat: 0.351011,
    lng: 32.606551,
    country: 'Uganda',
    isHQ: true,
    mapsUrl: 'https://goo.gl/maps/7WSUJbPy9d52'
  },
  {
    name: 'SGA Security Uganda Gulu Branch',
    address: 'Plot 07 Abdi jivan Road, Layibi Railway Quarters, Gulu Uganda',
    phone: ['+256 717 800 905'],
    email: 'gulu@sgasecurity.com',
    lat: 2.767973,
    lng: 32.296846,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/rvekN7o1S2A2'
  },
  {
    name: 'SGA Security Uganda Mbale Branch',
    address: 'Plot 08 Budama/Muyembe Lane, Indian Quarters Mbale Uganda',
    phone: ['+256 717 800 735'],
    email: 'mbale@sgasecurity.com',
    lat: 1.078371,
    lng: 34.170286,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/Wpp9jvwtvfM2'
  },
  {
    name: 'SGA Security Uganda Jinja Branch',
    address: 'Plot 12 Lubogo Lane, Magwa, Jinja Uganda',
    phone: ['+256 717 800 929'],
    email: 'jinja@sgasecurity.com',
    lat: 0.44054,
    lng: 33.202918,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/g8iz1aCMyAu'
  },
  {
    name: 'SGA Security Uganda Entebbe Branch',
    address: 'Plot 25 Barkeley Road, Post Office Ward, Entebbe Uganda',
    phone: ['+256 717 800 634'],
    email: 'entebbe@sgasecurity.com',
    lat: 0.063467,
    lng: 32.475145,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/UKeudT25K3L2'
  },
  {
    name: 'SGA Security Uganda Mbarara Branch',
    address: 'Strecher Road, Boma Cell, Mbarara Municipality',
    phone: ['+256 717 800 931'],
    email: 'mbarara@sgasecurity.com',
    lat: -0.609690,
    lng: 30.654294,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/zoT5UPvCkK42'
  },
  {
    name: 'SGA Security Uganda Mukono Branch',
    address: 'Plot 260, Block No: 107, Upper Nabuti, Mukono Uganda',
    phone: ['+256 717 800 346'],
    email: 'mukono@sgasecurity.com',
    lat: 0.354017,
    lng: 32.747220,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/H7Lnqg1J4ER2'
  },
  {
    name: 'SGA Security Uganda Arua Branch',
    address: 'Plot 9 Off Pakwach Road, Oleva Village, Ojivu Parish, Oluko S/C, Arua Uganda',
    phone: ['+256 717 800 808'],
    email: 'arua@sgasecurity.com',
    lat: 3.000688,
    lng: 30.914946,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/Mtk3Fuoa94y'
  },
  {
    name: 'SGA Security Uganda Hoima Branch',
    address: 'Kiryatete Industrial Area',
    phone: ['+256 717 800 928'],
    email: 'hoima@sgasecurity.com',
    lat: 1.436837,
    lng: 31.345228,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/2DVte8za79n'
  },
  {
    name: 'SGA Security Uganda Fort Portal Branch',
    address: 'Kagote D, West Division, Fortportel Municipality',
    phone: ['+256 717 800 717'],
    email: 'fortportal@sgasecurity.com',
    lat: 0.674965,
    lng: 30.265729,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/JKELLYmoQ3m'
  },
  {
    name: 'SGA Security Uganda Masaka Branch',
    address: 'Plot 45 Kampala Road, Katwe Butebo Division Masaka, Uganda',
    phone: ['+256 717 800 816'],
    email: 'masaka@sgasecurity.com',
    lat: 0.664647,
    lng: 30.275338,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/sv972PyJxE72'
  },
  {
    name: 'SGA Security Uganda Lira Branch',
    address: 'Plot 22 Kabalega Road, Lira Uganda',
    phone: ['+256 716 800 392'],
    email: 'lira@sgasecurity.com',
    lat: 2.245635,
    lng: 32.895191,
    country: 'Uganda',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/7spMfzetyZC2'
  },
  
  // Tanzania Locations
  {
    name: 'SGA Security Tanzania HQ',
    address: 'Plot 12, Mwai Kibaki Road. P.O.Box 9390, Dar Es Salaam, Tanzania',
    phone: ['+255 222 164 800', '+255 222 164 808'],
    email: 'info@tz.sgasecurity.com',
    lat: -6.710698,
    lng: 39.228303,
    country: 'Tanzania',
    isHQ: true,
    mapsUrl: 'https://goo.gl/maps/hv7jesWvq732'
  },
  {
    name: 'SGA Security CIT HQ',
    address: 'Plot 34, Galu Street Ada Estate, Dar Es Salaam, Tanzania',
    phone: ['+255 222 164 800', '+255 222 164 808'],
    email: 'info@tz.sgasecurity.com',
    lat: -6.786467,
    lng: 39.271832,
    country: 'Tanzania',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/NN2uMQnsxb22'
  },
  {
    name: 'SGA Security Tanzania Mbeya Branch',
    address: 'Plot 1498/8/MB, Kadege bus Stand, FOREST AREA. P.O.Box 1302, Mbeya, Tanzania',
    phone: ['+255 252 503 179'],
    email: 'mbeya@sgasecurity.com',
    lat: -8.910467,
    lng: 33.436796,
    country: 'Tanzania',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/zeprVzW9wBT2'
  },
  {
    name: 'SGA Security Tanzania Mwanza Branch',
    address: 'Plot 17, Balewa Rd, Isamilo Area. P.O.Box 1353, Mwanza, Tanzania',
    phone: ['+255 282 500 910', '+255 282 502 123'],
    email: 'mwanza@sgasecurity.com',
    lat: -2.506309,
    lng: 32.904077,
    country: 'Tanzania',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/cuVAPSei5ns'
  },
  {
    name: 'SGA Security Tanzania Arusha Branch',
    address: 'Plot No. 9-12, Esso Road, Unga Ltd, P.O. Box 15103, Arusha, Tanzania',
    phone: ['+255 272 547 128'],
    email: 'arusha@sgasecurity.com',
    lat: -3.377332,
    lng: 36.677774,
    country: 'Tanzania',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/Soed8Q4y1fz'
  },
  {
    name: 'SGA Security Tanzania Moshi Branch',
    address: 'Plot No. 89, NHC, Block L, Taifa Road, P.O.Box 6795, Moshi, Tanzania',
    phone: ['+255 272 750 075'],
    email: 'arusha@sgasecurity.com',
    lat: -3.346492,
    lng: 37.326947,
    country: 'Tanzania',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/qn6BCYKVpzt'
  },
  {
    name: 'SGA Security Tanzania Dodoma Branch',
    address: 'Plot 10, Block No. 42, Tofiki St, Uhindini Rd. P.O.Box 3455, Dodoma, Tanzania',
    phone: ['+255 768 781 2168'],
    email: 'dodoma@sgasecurity.com',
    lat: -6.175572,
    lng: 35.749713,
    country: 'Tanzania',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/Dfk1D1RZKHP2'
  },
  {
    name: 'SGA Security Tanzania Zanzibar Branch',
    address: 'Plot no.B1-65, Tomondo Road, Box 1314, Kwa Mchina Mwanzo, Zanzibar, Tanzania',
    phone: ['+255 768 781 2168'],
    email: 'zanzibar@sgasecurity.com',
    lat: -6.183282,
    lng: 39.222612,
    country: 'Tanzania',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/jjeJeUAjBby'
  },
  
  // Kenya Locations
  {
    name: 'SGA Security Kenya HQ',
    address: 'Tulip House, Ground Floor, Mombasa road',
    phone: ['+254 206 901 000', '+254 733 700 500'],
    email: 'info@ke.sgasecurity.com',
    lat: -1.322641,
    lng: 36.850335,
    country: 'Kenya',
    isHQ: true,
    mapsUrl: 'https://goo.gl/maps/MpdFVLLuR5pCcLdu9'
  },
  {
    name: 'SGA Security Kenya, Eldoret Branch',
    address: 'Uganda Road, Eldoret, Kenya',
    phone: ['+254 715 588 640', '+254 722 385 490'],
    email: 'eldoret@sgasecurity.com',
    lat: 0.31132,
    lng: 35.15259,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/detSnDv4hgx'
  },
  {
    name: 'SGA Security Kenya, Kisumu Branch',
    address: 'Tom Mboya road, Milimani next to oasis Doctors Plaza, Kisumu Hospital',
    phone: ['+254 728 254 851', '+254 787 679 422'],
    email: 'kisumu@sgasecurity.com',
    lat: -0.115913,
    lng: 34.755808,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/fYiesNNUpMU2'
  },
  {
    name: 'SGA Security Kenya, Meru Branch',
    address: 'Meru - Nanyuki Road, Opposite AP lines near Nakumatt Meru',
    phone: ['+254 775 389 881', '+254 713 144 323'],
    email: 'thika@sgasecurity.com',
    lat: 0.05147,
    lng: 37.64530,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/FW5i8xKpNXQ2'
  },
  {
    name: 'SGA Security Kenya, Kisii Branch',
    address: 'Hema Building, Kisii, Kenya',
    phone: ['+254 732 228 617'],
    email: 'kisii@sgasecurity.com',
    lat: -0.675048,
    lng: 34.770300,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/9deDMuhidfH2'
  },
  {
    name: 'SGA Security Kenya, Thika Branch',
    address: 'Monalisa Building, Old Kandara Road, Thika, Kenya',
    phone: ['+254 20 260 4356', '+254 722 205 496'],
    email: 'thika@sgasecurity.com',
    lat: -1.003581,
    lng: 37.075434,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/CF7B4zbceau'
  },
  {
    name: 'SGA Security Kenya, Kericho Branch',
    address: 'Brooke Hotel – Kericho – Nakuru Highway',
    phone: ['+254 731 906 073'],
    email: 'kericho@sgasecurity.com',
    lat: -0.33380,
    lng: 35.32749,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/XtxqJw3gtxq'
  },
  {
    name: 'SGA Security Kenya, Bungoma Branch',
    address: 'Along Mumias - Bungoma Road, Kanduyi',
    phone: ['+254 715 588 640', '+254 722 385 490'],
    email: 'eldoret@sgasecurity.com',
    lat: 0.589412,
    lng: 34.554471,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/j1Ntb1kdatw'
  },
  {
    name: 'SGA Security Kenya, Nyeri Branch',
    address: 'Ring Road, Near Nyeri National Polytechnic',
    phone: ['+254 731 906 075'],
    email: 'nyeri@sgasecurity.com',
    lat: -0.42523,
    lng: 36.94234,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/wNtGDMpwo5T2'
  },
  {
    name: 'SGA Security Kenya, Naivasha Branch',
    address: 'Moi Road, Mui House, Next to Lakeside Hotel',
    phone: ['+254 737 402 285'],
    email: 'naivasha@sgasecurity.com',
    lat: -0.71076,
    lng: 36.42909,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/VZsrgymEU4u'
  },
  {
    name: 'SGA Security Kenya, Nakuru Branch',
    address: 'Section 58, off Old Nairobi Highway',
    phone: ['+254 737 402 286'],
    email: 'nakuru@sgasecurity.com',
    lat: -0.28702,
    lng: 36.06185,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/vBXD23RELvs'
  },
  {
    name: 'SGA Security Kenya, Malaba Office',
    address: '1st Floor, Equity Bank Building, Eldoret – Malaba Road, Malaba',
    phone: ['+254 786 777 107'],
    email: 'eldoret@sgasecurity.com',
    lat: 0.634441,
    lng: 34.278547,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/mV41zDzsu5s'
  },
  {
    name: 'SGA Security, Mombasa Branch',
    address: 'Links Road, Nyali - Mombasa',
    phone: ['+254 414 475 480', '+254 723 244 406', '+254 733 636 383'],
    email: 'infomsa@sgasecurity.com',
    lat: -4.0445472,
    lng: 39.6978142,
    country: 'Kenya',
    isHQ: true,
    mapsUrl: 'https://goo.gl/maps/Q8nn3bz7oRk'
  },
  {
    name: 'SGA Security, Diani Branch',
    address: 'Beach Road - Diani',
    phone: ['+254 720 795 268', '+254 734 990 630'],
    email: 'diani@sgasecurity.com',
    lat: -4.2879004,
    lng: 39.5779466,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/aFi6Aewj4gD2'
  },
  {
    name: 'SGA Security, Kilifi Branch',
    address: 'Mombasa-Malindi Road, Opposite Tuskys Supermarket',
    phone: ['+254 731 022 976', '+254 780 301 116'],
    email: 'kilifi@sgasecurity.com',
    lat: -3.6328541,
    lng: 39.8459747,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/eXvDFjJ3iVt'
  },
  {
    name: 'SGA Security, Malindi Branch',
    address: 'Lamu Road, Opposite Tawfiq Hospital, Malindi',
    phone: ['+254 780 700 501', '+254 780 331 189'],
    email: 'malindi@sgasecurity.com',
    lat: -3.2221536,
    lng: 40.1108825,
    country: 'Kenya',
    isHQ: false,
    mapsUrl: 'https://goo.gl/maps/EetzdmTXsCK2'
  },
]

// Convert lat/lng to pixel coordinates based on the SVG map
// SVG viewBox is 675x900, map covers roughly lat 4.5 to -12, lng 29 to 42
const latLngToPixel = (lat: number, lng: number) => {
  const svgWidth = 675
  const svgHeight = 900
  
  // Map bounds
  const minLat = -12
  const maxLat = 4.5
  const minLng = 29
  const maxLng = 42
  
  // Convert to percentage then to pixels
  const x = ((lng - minLng) / (maxLng - minLng)) * svgWidth
  const y = ((maxLat - lat) / (maxLat - minLat)) * svgHeight
  
  return { x, y }
}

const InteractiveMap = forwardRef<InteractiveMapRef>((props, ref) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null)
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleMarkerClick = (location: Location, event: React.MouseEvent<SVGCircleElement>) => {
    const svg = event.currentTarget.ownerSVGElement
    if (!svg) return

    const rect = svg.getBoundingClientRect()
    const clickX = event.clientX - rect.left
    const clickY = event.clientY - rect.top

    setSelectedLocation(location)
    setPopupPosition({ x: clickX, y: clickY })
  }

  // Expose method to parent component
  useImperativeHandle(ref, () => ({
    selectLocationByCountry: (country: string) => {
      const hqLocation = locations.find(
        loc => loc.country === country && loc.isHQ && loc.name.includes('HQ') && !loc.name.includes('CIT')
      )
      if (hqLocation) {
        const { x, y } = latLngToPixel(hqLocation.lat, hqLocation.lng)
        setSelectedLocation(hqLocation)
        // Position popup near the marker
        setPopupPosition({ x: x * (675 / 675), y: y * (550 / 900) })
      }
    }
  }))

  return (
    <div className="w-full h-[100%] rounded-lg overflow-hidden relative">
      {/* Background SVG Map */}
      <div className="absolute inset-0">
        <Image
          src="/images/group/geographic-footprint.svg"
          alt="East Africa Map"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Interactive Markers Overlay */}
      <svg
        viewBox="0 0 675 900"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {locations.map((location, index) => {
          const { x, y } = latLngToPixel(location.lat, location.lng)
          const isSelected = selectedLocation?.name === location.name
          const isHovered = hoveredLocation?.name === location.name
          
          return (
            <g key={index}>
              {/* Outer glow for HQ locations */}
              {location.isHQ && (
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected || isHovered ? 24 : 20}
                  fill="#ff5722"
                  opacity="0.2"
                  className="transition-all duration-200 pointer-events-none"
                />
              )}
              
              {/* Invisible larger hit area to prevent flickering */}
              <circle
                cx={x}
                cy={y}
                r={location.isHQ ? 16 : 14}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredLocation(location)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={(e) => handleMarkerClick(location, e)}
              />
              
              {/* Main marker */}
              <circle
                cx={x}
                cy={y}
                r={location.isHQ ? (isSelected || isHovered ? 12 : 10) : (isSelected || isHovered ? 10 : 8)}
                fill="#ff5722"
                stroke="white"
                strokeWidth="2.5"
                className="transition-all duration-200 pointer-events-none"
              />
            </g>
          )
        })}
      </svg>

      {/* Info popup */}
      {selectedLocation && (
        <div 
          className="absolute bg-primary-orange rounded-lg shadow-xl p-4 max-w-sm z-10 sticky"
          style={{
            left: `${popupPosition.x + 20}px`,
            top: `${popupPosition.y}px`,
            transform: popupPosition.x > 400 ? 'translateX(-100%) translateX(-20px)' : 'none'
          }}
        >
          <button
            onClick={() => setSelectedLocation(null)}
            className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold leading-none"
          >
            ×
          </button>
          <h3 className="text-lg font-bold text-white mb-3 pr-6">
            {selectedLocation.name}
          </h3>
          <div className="space-y-2 text-sm text-white">
            <p className="flex items-start gap-2">
              <Icon icon="mdi:home" className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{selectedLocation.address}</span>
            </p>
            {selectedLocation.phone.map((phone, idx) => (
              <p key={idx} className="flex items-center gap-2">
                <Icon icon="mdi:phone" className="w-5 h-5 flex-shrink-0" />
                <a href={`tel:${phone}`} className="hover:text-gray-200 underline">
                  {phone}
                </a>
              </p>
            ))}
            <p className="flex items-center gap-2">
              <Icon icon="mdi:email" className="w-5 h-5 flex-shrink-0" />
              <a
                href={`mailto:${selectedLocation.email}`}
                className="hover:text-gray-200 underline break-all"
              >
                {selectedLocation.email}
              </a>
            </p>
            <Link
              href={selectedLocation.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 border border-white uppercase text-xs bg-primary-orange text-white rounded-full transition-all duration-200 hover:bg-primary-orange hover:scale-105 font-semibold"            >
              Get Directions
            </Link>
          </div>
        </div>
      )}

      {/* Hover tooltip */}
      {hoveredLocation && !selectedLocation && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none z-10">
          {hoveredLocation.name}
        </div>
      )}
    </div>
  )
})

InteractiveMap.displayName = 'InteractiveMap'

export default InteractiveMap
