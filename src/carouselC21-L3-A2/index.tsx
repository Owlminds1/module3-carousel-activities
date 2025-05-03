"use client"
import React, { useState } from 'react'
import Start from './start';
// import Result from './result';
import VedioSlide from './vedioSlide';
import QustionSlide from './qustionSlide';


const CarouseC21L3A2
 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      
       {isFirstScreen == "VedioSlide" && <VedioSlide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "qustionSlide" && <QustionSlide  />}
       {/* {isFirstScreen == "Result" && <Result  />} */}
     
      
     </>
   );
}

export default CarouseC21L3A2

