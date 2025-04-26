"use client"
import React, { useState } from "react";
import Start from "./start";
import VideoScreen from "./videoScreen";
import QustionSlide from "./qustionSlide";
import Result from "./result";

const CarouselC20L1A1 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("VideoScreen");

  return (
    <>
      {isFirstScreen == "VideoScreen" && <VideoScreen  setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "QustionSlide" && <QustionSlide setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "Result" && <Result  />}
    </>
  );
};

export default CarouselC20L1A1;
