"use client"
import React, { useState } from 'react'
import Start from './start';
import SlideStart from './slides';
import Result from './result';

const CarouselC22L3A4 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Qustions" && <SlideStart setIsFirstScreen={setIsFirstScreen} />}
  {isFirstScreen == "result" && <Result />}


  
  
  </>;
}

export default CarouselC22L3A4
