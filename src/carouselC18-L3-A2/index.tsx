"use client"
import React, { useState } from 'react'
import Start from './start';
import Slide from './slide';

const CarouselC18L3A2 = () => {
   const [isFirstScreen, setIsFirstScreen] = useState("start");
       
         return (
           <>
             {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
             {isFirstScreen == "FirstSlide" && <Slide  />}
          
           </>
         );
}

export default CarouselC18L3A2
