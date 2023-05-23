import React from 'react'
import { getServices } from '../../services/app-service'
import ServicePreview from './ServicePreview'

export default function FullService() {
  const services = getServices()
  return (
    <section className='full-service-section'>
      <div className='full-service-container'>
        <h1 className='yung-h1'>Full-Service Dental Lab</h1>
        <div className='services'>
          {services.map(service => (
            <ServicePreview service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
