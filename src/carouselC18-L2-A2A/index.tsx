"use client"
import React, { useState } from 'react'
import Start from './start';
import Slide from './slide';

const CarouselC18L2A2A = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
    
      return (
        <>
          {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
          {isFirstScreen == "Slide" && <Slide  />}
        
        </>
      );
}

export default CarouselC18L2A2A
