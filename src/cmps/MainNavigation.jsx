import React from 'react'
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { getSections } from '../services/app-service'

export default function MainNavigation() {
  const visited = ({ isActive }) => (isActive ? 'active' : undefined)
  const sections = getSections()
  return (
    <>
      <section className='header-container'>
        <header>
          <div className='main-nav'>
            <NavLink to='/'>
              <img src={logo} alt='' />
            </NavLink>

            <nav>
              <ul className='nav-info'>
                <li>
                  <i className='fa-solid fa-location-dot'></i>
                  <span>1234 Elm Street. Springfield, USA 12345</span>
                </li>
                <li>
                  <i className='fa-solid fa-phone'></i>
                  <span>555-123-4567</span>
                </li>
              </ul>
              <ul className='nav-sections'>
                {sections.map(section => (
                  <NavLink
                    key={section}
                    className={visited}
                    to={`/${section.toLowerCase()}`}
                  >
                    <li>{section}</li>
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </section>
    </>
  )
}
