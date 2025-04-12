"use client"
import React, { useState } from 'react'
import Strart from './start';
import SlideStart from './slides';

const CarouselC17L1A2B = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Qustions" && <SlideStart />}


  
  
  </>;
}

export default CarouselC17L1A2B
