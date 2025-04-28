"use client"
import React, { useState } from 'react'
import Start from './start';
import ThumSlide from './thimSlide';
import Result from './result';

const CarouseC20L1A3 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "ThumSlide" && <ThumSlide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "Result" && <Result  />}
     
      
     </>
   );
}

export default CarouseC20L1A3
