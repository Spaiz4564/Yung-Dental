import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactReuse({ info }) {
  const { h1, isOffice } = info
  return (
    <div
      style={{ marginBottom: isOffice ? '80px' : '' }}
      className='reuse-contact'
    >
      <h1>{h1}</h1>

      <Link to='/contact'>
        <button className='button'>Contact Us</button>
      </Link>
    </div>
  )
}
