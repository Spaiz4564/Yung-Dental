import React from 'react'

export default function OurGallery() {
  return (
    <section className='our-gallery-section'>
      <div className='our-gallery-container'>
        <div className='gallery-overlay'></div>
        <div className='z-index'>
          <h1>Our Gallery</h1>
          <h2>
            View products we've made in the past. <br /> Every detail is
            considered.
          </h2>
          <div className='gallery-btns flex'>
            <button className='gallery-btn button'>GALLERY</button>
            <button className='gallery-btn button'>VIDEOS</button>
          </div>
        </div>
      </div>
    </section>
  )
}
