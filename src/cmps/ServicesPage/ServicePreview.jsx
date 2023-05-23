import React from 'react'

export default function ServicePreview({ service }) {
  const { title, imgUrl } = service
  return (
    <div className='service-preview-container'>
      <img className='service-img' src={imgUrl} alt='' />
      <h4>{title}</h4>
    </div>
  )
}
