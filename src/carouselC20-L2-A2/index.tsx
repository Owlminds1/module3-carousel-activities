"use client"
import React, { useState } from 'react'
import Start from './start';
import MindMap from './mindMap';



const CarouseC20L2A2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
 
   return (
     <>
    
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
       {isFirstScreen == "MindMap" && <MindMap />}
 
     
      
     </>
   );
}

export default CarouseC20L2A2
