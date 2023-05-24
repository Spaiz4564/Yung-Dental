import React, { useRef, useState, useEffect } from 'react'
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { getSections } from '../services/app-service'
import SideMenu from './SideMenu'

export default function MainNavigation() {
  const [menuIcon, setMenuIcon] = useState(false)
  const visited = ({ isActive }) => (isActive ? 'active' : undefined)
  const sections = getSections()
  const sideNavRef = useRef(null)

  const sideMenuHandler = () => {
    setMenuIcon(prevState => !prevState)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      sideMenuHandler()
    }
  }

  return (
    <>
      <section className='header-container'>
        <header ref={sideNavRef}>
          <div className='main-nav'>
            <NavLink to='/'>
              <img src={logo} alt='' />
            </NavLink>
            <div onClick={sideMenuHandler} className='menu-bar'>
              {!menuIcon && <i className='fa-solid fa-bars menu-bar'></i>}
              {menuIcon && <i className='fa-solid fa-xmark'></i>}
            </div>
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
          <SideMenu menuHandler={sideMenuHandler} isOpen={menuIcon} />
        </header>
      </section>
    </>
  )
}
