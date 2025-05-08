"use client";
import { useState } from "react";
import Start from "./start";
import Slide from "./slides";

const CarouselC23L3A1 = () => {

  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Slide" && <Slide />}
 


  
  
  </>;
};

export default CarouselC23L3A1;
