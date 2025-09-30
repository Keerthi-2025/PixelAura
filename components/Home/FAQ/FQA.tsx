import Image from 'next/image'
import React from 'react'
import FAQCard from './FAQCard'

function FQA() {
  return (
    <div className='pt-16 pb-16 bg-gray-950'>
        <div className='w-[80%] mx-auto mt-16 grid-cols-1 grid md:grid-cols-2 gap-10 items-center'>
            <div>
               <Image
               src="/r1.jpg"
               alt='FAQ Image'
               height={500}
               width={500}
               />

               <div>
                <FAQCard/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default FQA