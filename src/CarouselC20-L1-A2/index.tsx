"use client"
import React, { useState } from "react";
import Start from "./start";
import SchoolBeg from "./schoolBeg";


const CarouselC20L1A2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");

  return (
    <>
      {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "SchoolBeg" && <SchoolBeg  />}
     
    </>
  );
};

export default CarouselC20L1A2;
