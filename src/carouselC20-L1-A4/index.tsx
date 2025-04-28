"use client"
import React, { useState } from 'react'
import Start from './start';
import ThumSlide from './thumSlide';
import Result from './result';
import VedioSlide from './vedioSlide';

const CarouseC20L1A4
 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "VedioSlide" && <VedioSlide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "ThumSlide" && <ThumSlide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "Result" && <Result  />}
     
      
     </>
   );
}

export default CarouseC20L1A4

