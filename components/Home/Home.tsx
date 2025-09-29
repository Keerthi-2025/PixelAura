import React from 'react'
import Hero from './Hero/Hero'
import Recent from './Recent/Recent'
import About from './About/About'
import Price from './Price/Price'

function Home() {
  return (
    <div className='overflow-hidden h-[4000px]'>
      <Hero/>
      <Recent/>
      <About/>
      <Price/>
      
    </div>
  )
}

export default Home