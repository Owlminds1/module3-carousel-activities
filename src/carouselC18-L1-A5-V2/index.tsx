"use client";
import React, { useState } from "react";
import Start from "./start";
import Table from "./table";
import ShopingCart from "./shopingCart";
import MealData from "@/carouselC18-L1-A5-V2/mealData.json";

const CarouselC18L1A5V2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
  const [countCal, setCountCal] = useState(0);
  const [itemArray, setItemArray] = useState<typeof MealData>([]);

  return (
    <>
      {isFirstScreen == "start" && (
        <Start setIsFirstScreen={setIsFirstScreen} />
      )}
      {isFirstScreen == "CartSlide" && (
        <ShopingCart
          setItemArray={setItemArray}
          setIsFirstScreen={setIsFirstScreen}
          countCal={countCal}
          setCountCal={setCountCal}
          itemArray={itemArray}
        />
      )}
      {isFirstScreen == "table" && (
        <Table itemArray={itemArray} setIsFirstScreen={setIsFirstScreen}/>
      )}
      
    </>
  );
};

export default CarouselC18L1A5V2;
