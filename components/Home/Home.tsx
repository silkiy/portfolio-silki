import React from 'react'
import Hero from './Hero/Hero'
import Resume from './Resume/Resume'
import Projects from './Projects/projects'
import Skills from './Skills/Skills'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Resume/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default Home