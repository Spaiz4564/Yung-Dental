import React from 'react'
import Reusable2 from '../cmps/Reusable/Reusable2'
import Reusable1 from '../cmps/Reusable/Reusable1'
import { reusable1AboutProp } from '../services/app-service'
import OurMission from '../cmps/AboutPage/OurMission'
import OurStory from '../cmps/AboutPage/OurStory'
import { reusable2AboutProp } from '../services/app-service'

export default function AboutPage() {
  return (
    <>
      <Reusable2 info={reusable2AboutProp()} />
      <Reusable1 info={reusable1AboutProp()} />
      <OurMission />
      <OurStory />
    </>
  )
}
