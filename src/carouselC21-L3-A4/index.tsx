"use client"
import React, { useState } from 'react'
import Start from './start';
import ThumSlide from './thumSlide';
import Result from './result';

const CarouseC21L3A4 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "ThumSlide" && <ThumSlide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "Result" && <Result  />}
     
      
     </>
   );
}

export default CarouseC21L3A4
