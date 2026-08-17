import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedServices from '../components/home/FeaturedServices'
import SectionHeading from '../components/home/SectionHeading'
import WhyChoose from '../components/home/WhyChoose'
import PopularDesigns from '../components/home/PopularDesigns'

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionHeading />
      <FeaturedServices />
      <WhyChoose />
      <PopularDesigns />
    </div>
  )
}

export default Home
