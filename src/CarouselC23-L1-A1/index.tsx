"use client";
import { useState } from "react";
import Start from "./start";
import FirstScreen from "./slides";

const CarouselC23L1A1 = () => {

  const [isFirstScreen,setIsFirstScreen] =useState("start")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "firstScreen" && <FirstScreen />}
 


  
  
  </>;
};

export default CarouselC23L1A1;
