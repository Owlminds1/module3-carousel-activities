"use client"
import React, { useState } from 'react'
import Start from './start';
import Slide from './slide';
import Result from './result';

const CarouseC21L2A4 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "Slide" && <Slide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "Result" && <Result  />}
     
      
     </>
   );
}

export default CarouseC21L2A4
