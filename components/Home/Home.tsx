import React from 'react'
import Hero from './Hero/Hero'
import Recent from './Recent/Recent'

function Home() {
  return (
    <div className='overflow-hidden h-[2000px]'>
      <Hero/>
      <Recent/>
    </div>
  )
}

export default Home