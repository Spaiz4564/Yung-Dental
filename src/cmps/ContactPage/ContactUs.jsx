import React from 'react'
import logo from '../../assets/img/black-logo.png'
import ContactForm from './ContactForm'

export default function ContactUs() {
  return (
    <section className='contact-us-section'>
      <div className='contact-us-container'>
        <img src={logo} alt='' />
        <h4 className='yung-h2'>RX@YUNGDENTALLAB.COM</h4>
        <p className='location yung-p'>
          1234 Elm Street. <br /> Springfield, USA 12345
        </p>{' '}
        <br />
        <p className='hours yung-p'>Monday – Friday: 8am – 5pm</p>
        <ContactForm />
      </div>
    </section>
  )
}
