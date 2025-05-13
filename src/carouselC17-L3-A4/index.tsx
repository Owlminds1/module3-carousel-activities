"use client"
import React, { useState } from 'react'
import Slide from './slide';
import Start from './start';
import Result from './result';

const CarouselC17L3A4 = () => {
      const [isFirstScreen, setIsFirstScreen] = useState("start");
  return (
    <div>
      {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "slide" && <Slide setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "result" && <Result/>}
    </div>
  )
}

export default CarouselC17L3A4
