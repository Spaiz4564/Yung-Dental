import React from 'react'

export default function Reusable2({ info }) {
  const { h1, isAbout, isOffice, isServices, imgUrl, optionalSub } = info

  const AboutPageText = () => {
    return (
      <p className='yung-p'>
        We’re your laboratory specialists, <br /> offering solutions and
        fabricating quality dental prosthetics, <br /> appliances and devices
        since 1980. Scroll down to learn more about us.
      </p>
    )
  }

  const OfficePageText = () => {
    return (
      <p className='yung-p'>
        We are encouraged by the recent successes of our peers and indications
        from our industry forecast that forming business relationships may
        further your service/product line.
      </p>
    )
  }

  const ServicesPageText = () => {
    return (
      <p className='yung-p'>
        Our Master Dental Technologist, Certified Dental Technician and owner,
        Michael Young, enforces a strict standard of offering consistent quality
        craftsmanship and service. In addition, our marketing director ensures
        client satisfaction and prompt service.
      </p>
    )
  }

  return (
    <section className={`we-guide-section`}>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        className={`we-guide-background ${isOffice ? 'office-filter' : ''}`}
      ></div>
      <div className='we-guide-container'>
        {optionalSub && <h2 className='yung-h2'>{optionalSub}</h2>}
        <h1 className='yung-h1'>{h1}</h1>
        {isAbout && <AboutPageText />}
        {isOffice && <OfficePageText />}
        {isServices && <ServicesPageText />}
      </div>
    </section>
  )
}
