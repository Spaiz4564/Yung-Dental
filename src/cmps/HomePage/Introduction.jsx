import React from 'react'
import ContactReuse from '../Reusable/ContactReuse'
import { Link } from 'react-router-dom'

const homeContact = {
  h1: 'Get High-Quality Dental Equipment Today',
}

export default function Introduction() {
  return (
    <section className='intro-section'>
      <div className='intro-container'>
        <div className='intro'>
          <img
            src='https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Homepage/homepage2.webp?updatedAt=1684407569312'
            alt=''
          />
          <div className='intro-welcome'>
            <h2>INTRODUCTION</h2>
            <h1>Welcome to Our Family, Our Lab</h1>
            <p>
              After four decades of service, we here at Young Dental Lab are
              known for our superior service and offering the highest quality
              quickly and efficiently. We know how stressful running a dental
              practice gets so we are committed to improved clinical
              experiences. Your day is stressful enough, your relationship with
              a laboratory shouldn’t be. Here, you’re like family.
            </p>
            <p>
              We are members of the NADL, ACP, ITI and the only Certified Dental
              Laboratory (CDL) in the immediate tri-state region ensuring
              quality, accountability, health and safety.
            </p>
          </div>
        </div>
        <div className='products'>
          <img
            src='https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Homepage/homepage3.webp?updatedAt=1684407569463'
            alt=''
          />
          <div className='intro-products'>
            <h2>PRODUCTS</h2>
            <h1>Only The Best</h1>
            <p>
              With any dental prosthesis, oral appliance or device, we believe
              every patient deserves to be treated using only the best materials
              fabricated on the most up-to-date equipment and technology.
              Whether hand-crafted from quality traditional materials or
              digitally design and manufactured, rest assured that all materials
              are FDA and ADA approved and/or assured.
            </p>
            <Link to='/services'>
              <button className='button'>View All</button>
            </Link>
          </div>
        </div>
      </div>
      <ContactReuse info={homeContact} />
    </section>
  )
}
