"use client";
import React, { useState } from "react";
import Start from "./start";
import Slide from "./slide";
import Result from "./result";


const CarouselC21L2A3 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
  return (
    <>
      {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "NextSlide" && <Slide setIsFirstScreen={setIsFirstScreen}  />}
      {isFirstScreen == "result" && <Result  />}
    </>
  );
};

export default CarouselC21L2A3;
