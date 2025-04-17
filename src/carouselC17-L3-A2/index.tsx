"use client"
import React, { useState } from "react";
import Strart from "./start";
import UnderStandSlide from "./underStand";

const CarouselC17L3A2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");

  return (
    <>
      {isFirstScreen == "start" && <Strart setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "UnderStandSlide" && <UnderStandSlide />}
    </>
  );
};

export default CarouselC17L3A2;
