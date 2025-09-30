import React from 'react'
import Hero from './Hero/Hero'
import Recent from './Recent/Recent'
import About from './About/About'
import Price from './Price/Price'
import Review from './Review/Review'

function Home() {
  return (
    <div className='overflow-hidden h-[4000px]'>
      <Hero/>
      <Recent/>
      <About/>
      <Price/>
      <Review/>
      
    </div>
  )
}

export default Home