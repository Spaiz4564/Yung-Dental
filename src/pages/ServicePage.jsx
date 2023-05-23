import React from 'react'
import Reusable2 from '../cmps/Reusable/Reusable2'
import {
  reusable1ServiceProp,
  reusable2ServiceProp,
} from '../services/app-service'
import Reusable1 from '../cmps/Reusable/Reusable1'
import FullService from '../cmps/ServicesPage/FullService'

export default function ServicePage() {
  return (
    <>
      <Reusable2 info={reusable2ServiceProp()} />
      <Reusable1 info={reusable1ServiceProp()} />
      <FullService />
    </>
  )
}
