
"use client"
import React, { useState } from 'react'
import Strart from './start';
import SortingPage from './sortingPage';

const CarouselC18L1A1 = () => {
   const [isFirstScreen, setIsFirstScreen] = useState("start");
  
    return (
      <>
        {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen} />}
        {isFirstScreen == "SortingPage" && <SortingPage/>}
      
      </>
    );
}

export default CarouselC18L1A1
