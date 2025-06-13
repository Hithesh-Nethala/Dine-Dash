import React from 'react'
import Navbar from '../Navbar'
import ItemsDisplay from '../ItemsDisplay'
import RestaurantChain from '../RestaurantChain'
import FirmCollection from '../FirmCollection'
import '../Styling/LandingPage.css'
const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='landingSection'>
          <ItemsDisplay/>
          <RestaurantChain/>
          <FirmCollection/>
        </div>
    </div>
  )
}

export default LandingPage