"use client"
import React, { useState } from 'react'
import Start from './start';
import SlideStart from './slides';
import Vedio from './vedio';


const CarouselC24L2A2 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "vedio" && <Vedio setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "slide" && <SlideStart  />}


  
  
  </>;
}

export default CarouselC24L2A2
