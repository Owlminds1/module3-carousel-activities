"use client";
import React, { useState } from "react";
import Start from "./start";
import Slide from "./slide";
import Result from "./result";

const CarouselC19L1A2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
  return (
    <>
      {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "NextSlide" && <Slide  setIsFirstScreen={setIsFirstScreen}  />}
      {isFirstScreen == "Result" && <Result  />}
    </>
  );
};

export default CarouselC19L1A2;
