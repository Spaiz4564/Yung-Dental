import React from 'react'

export default function Reusable1({ info }) {
  const {
    url1,
    title1,
    subTitle1,
    text1,
    url2,
    title2,
    subTitle2,
    text2,
    isAbout,
    isOffice,
    isServices,
  } = info

  const SecondContainerHandler = () => {
    if (!isOffice && !isServices) {
      return (
        <div className='on-time-container'>
          <div className='on-time second-on-time'>
            <div className='on-time-info'>
              <h2>{subTitle2}</h2>
              <h1>{title2}</h1>
              <p>{text2}</p>
            </div>
            <img src={url2} alt='' />
          </div>
          <div></div>
        </div>
      )
    }
  }

  return (
    <section className='on-time-section'>
      <div className='on-time-container'>
        <div className='on-time'>
          {!isOffice && (
            <>
              <img src={url1} alt='' />
              <div className={`on-time-info ${isAbout || isServices ? 'ontime-about' : ''}`}>
                <h2>{subTitle1}</h2>
                <h1>{title1}</h1>
                <p>{text1}</p>
              </div>
            </>
          )}
          {isOffice && (
            <>
              <div className={`on-time-info ${isAbout ? 'ontime-about' : ''}`}>
                <h2>{subTitle1}</h2>
                <h1>{title1}</h1>
                <p>{text1}</p>
              </div>
              <img src={url1} alt='' />
            </>
          )}
        </div>
        <div></div>
      </div>
      <SecondContainerHandler />
    </section>
  )
}
