"use client"
import React, { useState } from 'react'
import Start from './start';
import Result from './result';
import QustionSlide from './Qustions';
import VedioSlide from './vedioSlide';

const CarouseC20L2A1 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("VedioSlide");
 
   return (
     <>
       {isFirstScreen == "VedioSlide" && <VedioSlide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "QustionSlide" && <QustionSlide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "Result" && <Result  />}
     
      
     </>
   );
}

export default CarouseC20L2A1
