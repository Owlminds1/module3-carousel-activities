"use client";
import React, { useState } from "react";
import Start from "./start";
import Table from "./table";
import ShopingCart from "./shopingCart";
interface myTypes {
  name: string;
}
const CarouselC18L1A5V2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");
  const [countCal, setCountCal] = useState(0);
  const [itemArray, setItemArray] = useState<myTypes[]>([]);

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
        />
      )}
      {isFirstScreen == "table" && (
        <Table
          itemArray={itemArray}

          countCal={countCal}
        />
      )}
    </>
  );
};

export default CarouselC18L1A5V2;
