"use client"
import React, { useState } from 'react'
import Strart from './start';
import UnscrambleWords from './unscrambleWords';


const CarouselC17L1A4 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")
  
    return <>
    {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "UnscrambleWords" && <UnscrambleWords />}
  
    
    
    </>;
}

export default CarouselC17L1A4
