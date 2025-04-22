"use client"
import React, { useState } from 'react'
import Start from './start';
import EmotionSlide from './emotionSlide';

const CarouselC19L1A4 = () => {
    const [isFirstScreen, setIsFirstScreen] = useState("start");
    return (
        <>
          {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
          {isFirstScreen == "EmotionSlide" && <EmotionSlide />}
      
        </>
      );
}

export default CarouselC19L1A4
