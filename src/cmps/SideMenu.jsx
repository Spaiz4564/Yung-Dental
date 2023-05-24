import React from 'react'
import { getSections } from '../services/app-service'
import { NavLink } from 'react-router-dom'

export default function SideMenu({ isOpen, menuHandler }) {
  const sections = getSections()
  const visited = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <div className={`side-menu-modal ${isOpen ? 'height' : ''} `}>
      {isOpen && (
        <ul>
          {sections.map((section, i) => (
            <NavLink
              className={visited}
              key={i}
              onClick={menuHandler}
              to={`/${section.toLowerCase()}`}
            >
              <li>{section}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  )
}
