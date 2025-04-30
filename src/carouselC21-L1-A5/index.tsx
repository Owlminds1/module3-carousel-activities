"use client";
import React, { useState } from "react";
import Start from "./start";
import Slide from "./slide";


const CarouselC21L1A5 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
  return (
    <>
      {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "NextSlide" && <Slide   />}
    </>
  );
};

export default CarouselC21L1A5;
