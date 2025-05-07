"use client"
import React, { useState } from 'react'
import Start from './start';
import SlideStart from './slides';


const CarouselC24L3A1 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "slide" && <SlideStart  />}


  
  
  </>;
}

export default CarouselC24L3A1
