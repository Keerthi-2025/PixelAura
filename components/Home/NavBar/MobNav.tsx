import { Navlinks } from '@/app/constant/constant'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function MobNav() {
  return (
    <div className='text-white fixed justify-center flex flex-col h-screen transform transition-all 
    duration-1000 w-full bg-gray-600 space-y-6 z-[1050] top-0'>
   
      
      {Navlinks.map((link)=>{
        return(
          <Link className='text-white text-xl ml-12 border-b[1.5px] pb-1 border-white sm:text-lg'
          key={link.id} href={link.url}>
          <p>
            {link.label}
          </p>
          
          </Link>
        )
      })}

      <XIcon className='absolute top-5 right-5 w-6 h-6'/>
    </div>
  )
}

export default MobNav