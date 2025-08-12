import React from 'react'
import Hero from './Hero/Hero'
import Resume from './Resume/Resume'
import Projects from './Projects/projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Resume/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home