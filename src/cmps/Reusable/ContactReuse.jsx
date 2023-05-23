import React from 'react'

export default function ContactReuse({ info }) {
  const { h1, isOffice } = info
  return (
    <div
      style={{ marginBottom: isOffice ? '80px' : '' }}
      className='reuse-contact'
    >
      <h1>{h1}</h1>
      <button className='button'>Contact Us</button>
    </div>
  )
}
