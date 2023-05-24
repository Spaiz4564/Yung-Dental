import React from 'react'
import logo from '../assets/img/logo.png'
import { getSections } from '../services/app-service'
import { NavLink, Link } from 'react-router-dom'

export default function Footer() {
  const sections = getSections()
  return (
    <footer>
      <div className='footer-container'>
        <h5>EXCELLENCE IN CARE</h5>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>

        <div className='footer-nav'>
          <ul>
            {sections.map(section => (
              <NavLink key={section} to={`/${section.toLowerCase()}`}>
                <li>{section}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
