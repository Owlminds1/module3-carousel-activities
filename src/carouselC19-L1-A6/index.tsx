"use client"
import React, { useState } from 'react'
import Start from './start';
import ThinkSlide from './thinkSlide';

const CarouselC19L1A6 = () => {
   const [isFirstScreen,setIsFirstScreen] =useState("start")
  
    return <>
    {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "thinkSlide" && <ThinkSlide />}
  
  
  
  
    
    
    </>;
}

export default CarouselC19L1A6
