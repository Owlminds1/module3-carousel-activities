"use client"
import React, { useState } from 'react'
import Start from './start';
import Analogies from './analogies';

const CarouselC17L3AA = () => {
   const [isFirstScreen, setIsFirstScreen] = useState("start");
  
    return (
      <>
        {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
        {isFirstScreen == "Analogies" && <Analogies  />}
    
      </>
    );
}

export default CarouselC17L3AA
