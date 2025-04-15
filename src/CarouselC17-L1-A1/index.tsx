"use client";
import { useState } from "react";
import SlideStart from "./slides";
import Strart from "./start";
import Result from "./result";

const CarouselC17L1A1 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Qustions" && <SlideStart setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Result" && <Result />}


  
  
  </>;
};

export default CarouselC17L1A1;
