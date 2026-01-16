'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

interface Location {
  name: string
  position: [number, number]
  description: string
  address?: string
  phone?: string
  email?: string
  hasDetails?: boolean
}

const locations: Location[] = [
  {
    name: 'Kenya HQ',
    position: [-1.2921, 36.8219], // Nairobi
    description: 'Nairobi-based HQ serving nationwide clients.'
  },
  {
    name: 'Uganda HQ',
    position: [0.3476, 32.5825], // Kampala
    description: 'Reliable services across key urban centers.'
  },
  {
    name: 'Tanzania HQ',
    position: [-6.7924, 39.2083], // Dar es Salaam
    description: 'Coast-to-inland coverage with rapid response.'
  },
  {
    name: 'SGA Security Tanzania Zanzibar Branch',
    position: [-6.1650, 39.1997], // Zanzibar
    description: 'Zanzibar Branch',
    address: 'Plot no.B1-65, Tomondo Road, Box 1314, Kwa Mchina Mwanzo, Zanzibar, Tanzania.',
    phone: '+255 (0) 7687812168',
    email: 'zanzibar@sgasecurity.com',
    hasDetails: true
  }
]

// Dynamically import the map component with no SSR
const MapComponent = dynamic(
  () => import('./MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <div style={{ 
        height: '100%', 
        width: '100%', 
        borderRadius: '0.5rem', 
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
      }}>
        Loading map...
      </div>
    )
  }
)

export default function InteractiveMap() {
  useEffect(() => {
    // Add custom styles for orange popup
    const style = document.createElement('style')
    style.textContent = `
      .leaflet-popup-content-wrapper {
        background-color: #F15522 !important;
        color: white !important;
        border-radius: 8px !important;
      }
      .leaflet-popup-tip {
        background-color: #F15522 !important;
      }
      .leaflet-popup-content {
        margin: 12px !important;
        color: white !important;
      }
      .leaflet-popup-content a {
        color: white !important;
        text-decoration: underline !important;
      }
      .leaflet-popup-content a:hover {
        color: #ffd4c4 !important;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return <MapComponent locations={locations} />
}
