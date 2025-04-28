"use client";
import { useState } from "react";
import Start from "./start";
import PracticeTime from "./practiceTime";

const CarouselC18L2A2B = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("PracticeTime")

  return <>
  {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
  {isFirstScreen == "PracticeTime" && <PracticeTime />}



  
  
  </>;
};

export default CarouselC18L2A2B;
