"use client";
import { useState } from "react";
import Result from "./result";
import FoodSlide from "./slides";

const CarouselC18L1A4 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("FoodSlide")

  return <>
  {isFirstScreen == "FoodSlide" && <FoodSlide setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "Result" && <Result />}


  
  
  </>;
};

export default CarouselC18L1A4;
