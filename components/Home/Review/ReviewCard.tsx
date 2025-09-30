import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


type Props ={
    image:string;
    name:string;
    role:string;
}
function ReviewCard({image, name, role}:Props) {
  return (
    <div className=' flex items-center justify-center flex-col'>
        <QuoteIcon className='text-yellow-300'/>
        <p className='text-center text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80'>This platform made my workflow so much smoother. The interface is clean and easy to navigate.</p>

        <div className='mt-8 '>
            <h1 className='text-white font-semibold md:text-2xl text-center'>{name}</h1>
            <p className='text-sm md:text-lg font-bold text-white text-center'>{role}</p>
            <Image
            src="/r1.jpg"
            alt='imagename'
            height={80}
            width={80}
            className='mt-6 rounded-full mx-auto'/>
           
        </div>
    </div>

  )
}

export default ReviewCard