import React from 'react'
import LandingPage from '../../Components/LandingPage'
import ExpertiseCard from './Experties'
import Workflow from './workFlow'
import Category from './category'
import Slider from './slider'
import Banner from './Banner'

const Home = () => {
  return (
    <>
      <LandingPage />
      <ExpertiseCard/>
      <Workflow/>
      <Category/>
      <Slider/>
      <Banner/>
    </>
  )
}

export default Home
