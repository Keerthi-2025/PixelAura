import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <div className='w-[95%] min-h-screen relative mx-auto mt-[20vh]'>
        
        <div className='relative z-10 text-white flex flex-col items-center justify-center'>
            <h1 className=' text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  text-center
            bg-gradient-to-r from-orange-400 to-cyan-300 bg-clip-text text-transparent'>
            Create Beautiful image <br /> AI
            </h1>
            <p className='mt-3 text-sm text-center text-gray-300 md:text-base font-semibold'> Start creating unique, high-quality images in seconds with the power of AI.</p>

            <div className='h-5 md:h-12 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]   bg-white rounded-lg mt-12 px-2md:px-6 flex items-center justify-between'>
                <input type='text' placeholder='Generate your thoughts into image' className='h-full rounded-lg  outline-none w-full 
                text-black flex-1 placeholder:text-xs sm:placeholder:text-base text-center'/>

                <Button variant="default" size={"lg"} className='mr-2'>Create</Button>
            </div>

            <div className=' flex items-center mt-3 space-x-2'>
                <p className='font-semibold'>Popular Tags :</p>
                <Button variant={"secondary"}>Creative</Button>
                <Button variant={"secondary"}>Fantasy</Button>
                <Button variant={"secondary"}>Portrait</Button>
                <Button variant={"secondary"}>Art</Button>
                <Button variant={"secondary"}>AI</Button>
            </div>

        </div>
    </div>
  )
}

export default Hero