"use client"
import React, { useState } from 'react'

import Result from './result';
import Slide from './slide';

const CarouseC21L3A3 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("ThumSlide");
 
   return (
     <>
       {isFirstScreen == "ThumSlide" && <Slide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "result" && <Result  />}
     
      
     </>
   );
}

export default CarouseC21L3A3
