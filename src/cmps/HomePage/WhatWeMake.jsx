import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { whatWeMakeHandler } from '../../services/app-service'
import { Link } from 'react-router-dom'

export default function WhatWeMake() {
  const { ref: myRef1, inView: elementVisible1 } = useInView(false)
  const { ref: myRef2, inView: elementVisible2 } = useInView(false)
  const [whatwemake1, setWhatWeMake1] = useState([0, 0, 0])
  const [whatwemake2, setWhatWeMake2] = useState([0, 0, 0])

  useEffect(() => {
    if (elementVisible1) whatWeMakeHandler(setWhatWeMake1, true)
  }, [elementVisible1])
  useEffect(() => {
    if (elementVisible2) whatWeMakeHandler(setWhatWeMake2, false)
  }, [elementVisible2])

  return (
    <section className='whatwemake-section'>
      <div className='products-container'>
        <div className='whatwemake'>
          <div className='what-made-container'>
            <img
              src='https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Homepage/homepage4.webp?updatedAt=1684407567098'
              alt=''
            />
            <div ref={myRef1} className='what-made'>
              <div className='num-wrapper'>
                <div className='flex justify-center'>
                  <span>{whatwemake1[0]}</span>
                  <span>+</span>
                </div>
                <h3>Dentures Made</h3>
              </div>
              <div className='num-wrapper'>
                <span>{whatwemake1[1]}</span>
                <span>+</span>
                <h3>Veneers Made</h3>
              </div>
              <div className='num-wrapper'>
                <span>{whatwemake1[2]}</span>
                <span>+</span>
                <h3>Bridges Made</h3>
              </div>
            </div>
          </div>
          <div className='products-container'>
            <div className='products'>
              <h2>PRODUCTS</h2>
              <h1>What We Make</h1>
              <ul className='product-list'>
                <li>
                  <i className='fa-solid fa-minus'></i>
                  <span>Dentures</span>
                </li>
                <li>
                  <i className='fa-solid fa-minus'></i>
                  <span>Veneers</span>
                </li>
                <li>
                  <i className='fa-solid fa-minus'></i>
                  <span>Bridges</span>
                </li>
              </ul>

              <Link to='/services'>
                <button className='button'>View All</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='whatwemake nopadding'>
          <div className='products-container height'>
            <div className='products'>
              <h2>PRODUCTS</h2>
              <h1>What We Make</h1>
              <ul className='product-list'>
                <li>
                  <i className='fa-solid fa-minus'></i>
                  <span>Implants</span>
                </li>
                <li>
                  <i className='fa-solid fa-minus'></i>
                  <span>Crowns</span>
                </li>
                <li>
                  <i className='fa-solid fa-minus'></i>
                  <span>Tools</span>
                </li>
              </ul>
              <Link to='/services'>
                <button className='button'>View All</button>
              </Link>
            </div>
          </div>
          <div className='what-made-container'>
            <img
              src='https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Homepage/homepage5.webp?updatedAt=1684407567275'
              alt=''
            />
            <div ref={myRef2} className='what-made'>
              <div className='num-wrapper'>
                <div className='flex justify-center'>
                  <span>{whatwemake2[0]}</span>
                  <span>+</span>
                </div>
                <h3>Implants</h3>
              </div>
              <div className='num-wrapper'>
                <span>{whatwemake2[1]}</span>
                <span>+</span>
                <h3>Crowns</h3>
              </div>
              <div className='num-wrapper'>
                <span>{whatwemake2[2]}</span>
                <span>+</span>
                <h3>Tools</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
