"use client";
import React, { useState } from "react";
import Start from "./start";
import Table from "./table";
import ShopingCart from "./shopingCart";

const CarouselC18L1A5 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
  const [fruitsCal, setFruitsCal] = useState(0);
  const [vaggeisCal, setVaggeisCal] = useState(0);
  const [mealCal, setMealCal] = useState(0);

  const [countCal, setCountCal] = useState(0);

  return (
    <>
      {isFirstScreen == "start" && (
        <Start setIsFirstScreen={setIsFirstScreen} />
      )}
      {isFirstScreen == "CartSlide" && (
        <ShopingCart
          setFruitsCal={setFruitsCal}
          setVaggeisCal={setVaggeisCal}
          setMealCal={setMealCal}
          countCal={countCal}
          setCountCal={setCountCal}
         
        />
      )}
      {isFirstScreen == "table" && (
        <Table
          fruitsCal={fruitsCal}
          vaggeisCal={vaggeisCal}
          mealCal={mealCal}
          countCal={countCal}
        />
      )}
    </>
  );
};

export default CarouselC18L1A5;
