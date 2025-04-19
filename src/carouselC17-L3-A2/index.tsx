"use client"
import React, { useState } from "react";
import Start from "./start";
import UnderStandSlide from "./underStand";

const CarouselC17L3A2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");

  return (
    <>
      {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "UnderStandSlide" && <UnderStandSlide />}
    </>
  );
};

export default CarouselC17L3A2;
