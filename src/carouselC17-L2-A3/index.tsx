"use client";
import { useState } from "react";
import Strart from "./start";
import ImageSlider from "./imageSlider";


const CarouselC17L2A3 = () => {
     const [isFirstScreen,setIsFirstScreen] =useState("start")
  return (
    <>
       {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen}/>}
       {isFirstScreen == "Images" && <ImageSlider />}


    </>
  )
}

export default CarouselC17L2A3
