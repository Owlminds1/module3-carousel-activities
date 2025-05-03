"use client"
import React, { useState } from 'react'
import Start from './start';
import Result from './result';
import Slide from './slide';

const CarouseC21L3A3 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "ThumSlide" && <Slide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "result" && <Result  />}
     
      
     </>
   );
}

export default CarouseC21L3A3
