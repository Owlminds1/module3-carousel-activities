"use client"
import React, { useState } from 'react'
import Start from './start';
import Result from './result';
import Unscramble from './unscrableWord';


const CarouseC20L3A0
 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      
       {isFirstScreen == "Unscramble" && <Unscramble setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "Result" && <Result  />}
     
      
     </>
   );
}

export default CarouseC20L3A0

