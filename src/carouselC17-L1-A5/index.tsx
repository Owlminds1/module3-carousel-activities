"use client"
import React, { useState } from 'react'
import Start from './start';
import FindObjectSlide from './findObjectSlide';



const CarouselC17L1A5 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")
  
    return <>
    {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "findObjectSlide" && <FindObjectSlide  />}
  
  
    
    
    </>;
}

export default CarouselC17L1A5
