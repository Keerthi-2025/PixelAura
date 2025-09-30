import { QuoteIcon } from 'lucide-react';
import React from 'react'


type Props ={
    image:string;
    name:string;
    role:string;
}
function ReviewCard({image, name, role}:Props) {
  return (
    <div className=' flex items-center justify-center flex-col'>
        <QuoteIcon className='text-white'/>
    </div>
  )
}

export default ReviewCard