"use client";
import { useState } from "react";
import Start from "./start";
import ImageSlider from "./imageSlider";


const CarouselC17L2A3 = () => {
     const [isFirstScreen,setIsFirstScreen] =useState("start")
  return (
    <>
       {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
       {isFirstScreen == "Images" && <ImageSlider />}


    </>
  )
}

export default CarouselC17L2A3
