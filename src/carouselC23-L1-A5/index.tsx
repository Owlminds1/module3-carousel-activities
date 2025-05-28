"use client"
import React, { useState } from 'react'
import Start from './start';
import SlideStart from './slides';
import Vedio from './vedio';


const CarouselC23L1A5 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "vedio" && <Vedio setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Qustions" && <SlideStart  />}


  
  
  </>;
}

export default CarouselC23L1A5
