"use client"
import React, { useState } from 'react'
import Start from './start';
import Slide from './slide';

const CarouselC19L2A4 = () => {
     const [isFirstScreen, setIsFirstScreen] = useState("start");
          
            return (
              <>
                {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
                {isFirstScreen == "slideScreen" && <Slide />}
               
              
              
              </>
            );
}

export default CarouselC19L2A4
