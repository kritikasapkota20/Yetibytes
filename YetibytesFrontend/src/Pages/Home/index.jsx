import React from 'react'
import ExpertiseCard from '../../Components/Home/Experties'
import Workflow from '../../Components/Home/workFlow'
import Category from './category'
import Slider from '../../Components/Home/slider'
import Banner from '../../Components/Home/Banner'
import Herosection from '../../Components/Home/Herosection'

const Home = () => {
  return (
    <>
      <Herosection />
      <ExpertiseCard/>
      <Workflow/>
      <Category/>
      <Slider/>
      <Banner/>
    </>
  )
}

export default Home
