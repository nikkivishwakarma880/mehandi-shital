import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedServices from '../components/home/FeaturedServices'
import SectionHeading from '../components/home/SectionHeading'
import WhyChoose from '../components/home/WhyChoose'
import PopularDesigns from '../components/home/PopularDesigns'
import Gallery from '../components/home/Gallery'
import Instagram from '../components/home/Instagram'


const Home = () => {
  return (
    <div>
      <Hero />
      <SectionHeading />
      <FeaturedServices />
      <WhyChoose />
      <PopularDesigns />
      <Gallery/> 
      <Instagram />
      
    </div>
  )
}

export default Home
