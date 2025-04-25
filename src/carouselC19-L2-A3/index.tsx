"use client"
import React, { useState } from 'react'
import Start from './start';
import Slide from './slide';
import LastSlide from './lastSlide';

const CarouselC19L2A3 = () => {
    const [isFirstScreen, setIsFirstScreen] = useState("start");
        
          return (
            <>
              {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
              {isFirstScreen == "slideScreen" && <Slide setIsFirstScreen={setIsFirstScreen} />}
              {isFirstScreen == "LastSlide" && <LastSlide  />}
            
            
            </>
          );
  }


export default CarouselC19L2A3
