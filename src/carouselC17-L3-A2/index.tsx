"use client";
import React, { useState } from "react";
import Start from "./start";
import SlideStart from "./slides";

const CarouselC17L3A2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");

  return (
    <>
      {isFirstScreen == "start" && (
        <Start setIsFirstScreen={setIsFirstScreen} />
      )}

      {isFirstScreen == "slide" && <SlideStart  />}
     
    </>
  );
};

export default CarouselC17L3A2;
