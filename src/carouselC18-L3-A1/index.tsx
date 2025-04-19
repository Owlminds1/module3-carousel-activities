"use client"
import React, { useState } from 'react'
import Start from './start';
import FirstSlide from './firstSlide';
import SecoundSlide from './secoundSlide';


const CarouselC18L3A1 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("secoundSlide");
     
       return (
         <>
           {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
           {isFirstScreen == "FirstSlide" && <FirstSlide setIsFirstScreen={setIsFirstScreen} />}
           {isFirstScreen == "secoundSlide" && <SecoundSlide  />}
         
         </>
       );
}

export default CarouselC18L3A1
