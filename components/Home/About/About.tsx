import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className=' pt-10 pb-10' >
        <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 '> 
         <div className='order-2 xl:order-1'>

           <Image
           src="/about.jpg"
           alt='aboutimage'
           width={300}
           height={300}
           className='rounded-lg mt-4  w-full '
           />
           
        </div>

        <div className='xl:order-1'>

        <h1 className='text-white text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 '>Creative & Friendly</h1>

        <p className='text-white font-semibold text-base mb-8'>We believe imagination should have no limits. Our platform transforms simple words into stunning visuals,
           helping anyone — from artists to entrepreneurs — bring their ideas to life. With cutting-edge AI,
            we make creativity faster, easier, and more fun.</p>
       

        <Button className='bg-rose-600 w-32 h-12 uppercase size={"lg"}'>About Us</Button>
        </div>
    </div>
    </div>
      )
}

export default About;