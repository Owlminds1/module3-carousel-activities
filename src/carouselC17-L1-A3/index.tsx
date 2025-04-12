"use client"
import React, { useState } from 'react'
import Strart from './start';
import SlideStart from './slides';

const CarouselC17L1A3 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")
  
    return <>
    {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "responseImages" && <SlideStart />}
  
  
    
    
    </>;
}

export default CarouselC17L1A3
