"use client";
import React, { useState } from 'react'
import NavBar from './NavBar'
import MobNav from './MobNav'

function Responsive() {

  const[shownav, SetShownav] = useState(false);
  const openNavHandler = () => SetShownav(true);
  const closeNavHandler = () => SetShownav(false);



  return (
    <div>
        
        <NavBar openNav = {openNavHandler}/>
        <MobNav showNav ={shownav} closeNav ={closeNavHandler}/>
    </div>
  )
}

export default Responsive