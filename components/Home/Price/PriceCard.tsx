import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React from 'react'



type Props={
    price:string;
    type:string;
    user:string;
}
function PriceCard({price, type, user}:Props) {
  return (
    <div className=' bg-black p-5 rounded-lg  text-white font-semibold text-center w-65  '>
       <p className=' text-2xl font-semibold'>{type}</p> 

        <p className='mt-5 mb-2 text-3xl'>Great for Indiviuals</p>
         <Separator className='my-8 opacity-20'/>

        <div className='text-white font-semibold text-2xl '>
            <span className='text-5xl '>${price}</span>/mo
        </div>
        
         <Separator className='my-8 opacity-20'/>
         <div className='mt-6   text-white text-opacity-50'>
            <p>{user} User</p>
            <p>Unlimited Projects</p>
            <p>Download Projects</p>
         </div>

         <div className='mt-4'>
           <Button variant={"secondary"}>Get Now</Button>
         </div>
    </div>
    
  )
}

export default PriceCard