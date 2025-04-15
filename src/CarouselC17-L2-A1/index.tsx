"use client";
import { useState } from "react";
import SlideStart from "./slides";
import Strart from "./start";

const CarouselC17L2A1 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Qustions" && <SlideStart />}


  
  
  </>;
};

export default CarouselC17L2A1;
