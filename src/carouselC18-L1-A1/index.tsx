
"use client"
import React, { useState } from 'react'
import Start from './start';
import SortingPage from './sortingPage';
import Result from './result';

const CarouselC18L1A1 = () => {
   const [isFirstScreen, setIsFirstScreen] = useState("start");
  
    return (
      <>
        {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
        {isFirstScreen == "SortingPage" && <SortingPage setIsFirstScreen={setIsFirstScreen}/>}
        {isFirstScreen == "Result" && <Result/>}
      
      </>
    );
}

export default CarouselC18L1A1
