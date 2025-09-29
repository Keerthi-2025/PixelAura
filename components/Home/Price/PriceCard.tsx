import React from 'react'



type Props={
    price:string;
    type:string;
    user:string;
}
function PriceCard({price, type, user}:Props) {
  return (
    <div className=' bg-black p-5 rounded-lg text-white font-semibold text-2xl '>
        {type}
    </div>
  )
}

export default PriceCard