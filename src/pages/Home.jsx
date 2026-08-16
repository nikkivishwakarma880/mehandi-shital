import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedServices from '../components/home/FeaturedServices'
import SectionHeading from '../components/home/SectionHeading'

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionHeading />
      <FeaturedServices />
    </div>
  )
}

export default Home
