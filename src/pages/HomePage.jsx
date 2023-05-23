import React from 'react'
import Hero from '../cmps/HomePage/Hero'
import Introduction from '../cmps/HomePage/Introduction'
import WhatWeMake from '../cmps/HomePage/WhatWeMake'
import Reusable1 from '../cmps/Reusable/Reusable1'
import OurGallery from '../cmps/HomePage/OurGallery'
import { reusable1HomeProp } from '../services/app-service'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <WhatWeMake />
      <Reusable1 info={reusable1HomeProp()} />
      <OurGallery />
    </>
  )
}
