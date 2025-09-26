"use client"

import { Navlinks } from '@/app/constant/constant'
import { MenuIcon, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



type Props = {
  openNav: () =>void;
};

function NavBar({openNav}:Props) {

  const [navBg, setnavBg] = useState(false)

     useEffect(() => {
       const handler = () =>{
        if(window.scrollY >= 90) setnavBg(true)
        if(window.scrollY < 90) setnavBg(false);  
       }

       window.addEventListener('scroll', handler);

       return () => window.removeEventListener('scroll', handler);
    
     }, [])

     const bg_style = navBg ? "bg-gray-900 shadow-md" : ""
     


  return (
    <div className={`flex ${bg_style} items-center justify-between fixed z-[100] w-full mx-auto transition-all duration-200`}>
      
      <h1 className='text-3xl text-white font-bold ml-10 md:ml-16'>
        PixelAura
      </h1>

      <div className='md:flex items-center space-x-10 hidden'>
      {Navlinks.map((link)=>{
        return(
          <Link key={link.id} href={link.url} 
            className="relative text-white text-base w-fit block 
                   after:block after:content-[''] after:absolute 
                   after:h-[3px] after:bg-yellow-400 after:w-full 
                   after:scale-x-0 hover:after:scale-x-100 
                   after:transition after:duration-300 after:origin-center"
      >
          <p>{link.label}</p>
          </Link>
        )
      })}
      </div>

      <div className='flex items-center mr-10 md:mr-16 space-x-5  text-white text-3xl '>
        <ShoppingCart className='w-6 h-6 cursor-pointer'/>
        <Search className='w-6 h-6 cursor-pointer'/>
        <MenuIcon onClick={openNav} className='w-6 h-6 cursor-pointer md:hidden'/>
      </div>
    </div>
  )
}

export default NavBar