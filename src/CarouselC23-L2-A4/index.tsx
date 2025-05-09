"use client";
import { useState } from "react";
import SlideStart from "./slides";
import Start from "./start";
import Result from "./result";

const CarouselC23L2A4 = () => {

  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Qustions" && <SlideStart setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Result" && <Result  />}


  
  
  </>;
};

export default CarouselC23L2A4;
