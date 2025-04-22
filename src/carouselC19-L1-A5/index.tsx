"use client"
import React, { useState } from 'react'
import Start from './start';
import FeelingSlide from './feelingSlide';

const CarouselC19L1A5 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
      
        return (
          <>
            {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
            {isFirstScreen == "FeelingSlide" && <FeelingSlide />}
          
          
          </>
        );
}

export default CarouselC19L1A5
