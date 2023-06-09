import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-wrapper'>
        <div className='hero-contact-container'>
          <h2>WE GUIDE DENTISTS TO CLINICAL SUCCESS</h2>
          <h1>
            Consistent Quality <br /> Craftsmanship
          </h1>
          <h3>
            Each appliance is individually quality checked by our CDT to ensure
            quality standards.
          </h3>
          <Link to='/contact'>
            <button className='button'>CONTACT US</button>
          </Link>
        </div>
        <div className='background-wrapper'></div>
      </div>
    </section>
  )
}
