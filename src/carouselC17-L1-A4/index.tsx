"use client"
import React, { useState } from 'react'
import Start from './start';
import UnscrambleWords from './unscrambleWords';
import Resulte from './resulte';


const CarouselC17L1A4 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")
  
    return <>
    {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "UnscrambleWords" && <UnscrambleWords setIsFirstScreen={setIsFirstScreen} />}
    {isFirstScreen == "resulte" && <Resulte />}
  
    
    
    </>;
}

export default CarouselC17L1A4
