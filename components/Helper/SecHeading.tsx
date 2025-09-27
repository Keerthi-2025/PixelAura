import React from 'react'

type Props = {
    heading: string;
}

function SecHeading({heading} : Props) {
  return (
    <div className='m-auto w-[80%]'>
        
        <h1 className='text-2xl lg:text-3xl font-bold text-white'>{heading} </h1>
            <p className='text-sm sm:text-base md:text-lg font-medium text-gray-200'>
                Type your imagination and watch it come to life in seconds.
            </p>



            <div className='w-[90%] md:w-[80%] mx-auto mt-16'></div>
       
    </div>
  )
}

export default SecHeading