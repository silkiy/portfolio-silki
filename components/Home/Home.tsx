import React from 'react'
import Hero from './Hero/Hero'
import Service from './Services/Services'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Service/>
    </div>
  )
}

export default Home