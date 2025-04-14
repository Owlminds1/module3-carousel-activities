"use client"
import React, { useState } from 'react'
import Strart from './start';
import FindObjectSlide from './findObjectSlide';


const CarouselC17L1A5 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")
  
    return <>
    {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "findObjectSlide" && <FindObjectSlide />}
  
    
    
    </>;
}

export default CarouselC17L1A5
