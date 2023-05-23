import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../cmps/MainNavigation'
import Footer from '../cmps/Footer'
import ScrollToTop from '../cmps/ScrollToTop'

export default function Root() {
  return (
    <>
      <ScrollToTop />
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
