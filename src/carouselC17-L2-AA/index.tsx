"use client"
import React, { useState } from 'react'
import Start from './start';
import SlideStart from './slides';

const CarouselC17L2AA = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Qustions" && <SlideStart />}


  
  
  </>;
}

export default CarouselC17L2AA
