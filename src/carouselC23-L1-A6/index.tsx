"use client";
import React, { useState } from "react";
import Start from "./start";
import SlideStart from "./slides";
import Resulte from "./resulte";

const CarouselC23L1A6 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");

  return (
    <>
      {isFirstScreen == "start" && (
        <Start setIsFirstScreen={setIsFirstScreen} />
      )}

      {isFirstScreen == "slide" && <SlideStart setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "resulte" && <Resulte  />}
    </>
  );
};

export default CarouselC23L1A6;
