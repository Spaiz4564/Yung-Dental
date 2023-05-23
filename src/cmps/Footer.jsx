import React from 'react'
import logo from '../assets/img/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <h5>EXCELLENCE IN CARE</h5>
        <img src={logo} alt='' />
        <div className='footer-nav'>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
