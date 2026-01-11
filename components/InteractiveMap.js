'use client'

import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Create custom orange icon
const createOrangeIcon = () => {
  return L.divIcon({
    className: 'custom-orange-marker',
    html: `
      <div style="
        width: 30px;
        height: 30px;
        background-color: #F15522;
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        position: relative;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  })
}

const locations = [
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

  return (
    <MapContainer
      center={[-1.5, 35.5]} // Center point to show all three countries
      zoom={6}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
      scrollWheelZoom={true}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={createOrangeIcon()}>
          <Popup>
            <div style={{ minWidth: '200px', maxWidth: '300px', color: 'white' }}>
              <strong style={{ color: 'white', fontSize: '14px', display: 'block', marginBottom: '8px' }}>
                {location.name}
              </strong>
              {location.hasDetails ? (
                <div style={{ fontSize: '12px', textAlign: 'left', lineHeight: '1.6', color: 'white' }}>
                  <p style={{ margin: '4px 0', color: 'white' }}>
                    <strong>Address:</strong><br />
                    {location.address}
                  </p>
                  <p style={{ margin: '4px 0', color: 'white' }}>
                    <strong>Phone:</strong> <a href={`tel:${location.phone}`} style={{ color: 'white', textDecoration: 'underline' }}>{location.phone}</a>
                  </p>
                  <p style={{ margin: '4px 0', color: 'white' }}>
                    <strong>Email:</strong> <a href={`mailto:${location.email}`} style={{ color: 'white', textDecoration: 'underline' }}>{location.email}</a>
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.position[0]},${location.position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '8px',
                      padding: '6px 12px',
                      backgroundColor: 'transparent',
                      border: '2px solid white',
                      color: '#F15522',
                      textDecoration: 'none',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textAlign: 'center',
                      width: '100%'
                    }}
                  >
                    Get Directions
                  </a>
                </div>
              ) : (
                <p style={{ fontSize: '12px', color: 'white', marginTop: '4px' }}>{location.description}</p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

