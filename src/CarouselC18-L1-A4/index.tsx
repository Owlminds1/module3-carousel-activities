"use client";
import { useState } from "react";
import Strart from "./start";
import Result from "./result";
import FoodSlide from "./slides";

const CarouselC18L1A4 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("FoodSlide")

  return <>
  {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "FoodSlide" && <FoodSlide setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Result" && <Result />}


  
  
  </>;
};

export default CarouselC18L1A4;
