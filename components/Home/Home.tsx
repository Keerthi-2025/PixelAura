import React from 'react'
import Hero from './Hero/Hero'
import Recent from './Recent/Recent'
import About from './About/About'

function Home() {
  return (
    <div className='overflow-hidden h-[4000px]'>
      <Hero/>
      <Recent/>
      <About/>
      
    </div>
  )
}

export default Home