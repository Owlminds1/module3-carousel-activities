"use client"
import React, { useState } from 'react'
import Start from './start';
import UnscrambleWords from './unscrambleWords';


const CarouselC17L1A4 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")
  
    return <>
    {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "UnscrambleWords" && <UnscrambleWords />}
  
    
    
    </>;
}

export default CarouselC17L1A4
