import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className=' pt-16 pb-10' >
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 '> 
         <div className='order-2 xl:order-1'>
            
           <Image
           src="/about.jpg"
           alt='aboutimage'
           width={400}
           height={400}
           className='rounded-lg  w-full '
           />
        </div>

        <div className='order-2 xl:order-1'></div>
       
        </div>
    </div>
      )
}

export default About