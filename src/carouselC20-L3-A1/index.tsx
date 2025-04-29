"use client"
import React, { useState } from 'react'
import Start from './start';
import Footprint from './footprint';
import VedioSlide from './vedioSlide';



const CarouseC20L3A1
 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "VedioSlide" && <VedioSlide setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "footprint" && <Footprint setIsFirstScreen={setIsFirstScreen} />}
      
     
       
     
      
     </>
   );
}

export default CarouseC20L3A1

