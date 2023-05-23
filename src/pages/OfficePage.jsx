import React from 'react'
import Reusable2 from '../cmps/Reusable/Reusable2'
import {
  reusable2OfficeProp,
  reusable1OfficeProp,
} from '../services/app-service'
import DentalTech from '../cmps/OfficePage/DentalTech'
import Reusable1 from '../cmps/Reusable/Reusable1'
import ContactReuse from '../cmps/Reusable/ContactReuse'

const officeContact = {
  isOffice: true,
  h1: 'Get High-Quality Results Today',
}

export default function OfficePage() {
  return (
    <>
      <Reusable2 info={reusable2OfficeProp()} />
      <DentalTech />
      <Reusable1 info={reusable1OfficeProp()} />
      <ContactReuse info={officeContact} />
    </>
  )
}
