import Image from "next/image";
import fruitsData from "@/carouselC18-L1-A5/breackFast.json";
import veggiesData from "@/carouselC18-L1-A5/lunchData.json";
import MealsData from "@/carouselC18-L1-A5/dinnerData.json";
import React, { useState } from "react";
import { BsCartDashFill } from "react-icons/bs";
interface myTypes {
  name: string;
}
type myProps = {
  setItemArray: React.Dispatch<React.SetStateAction<myTypes[]>>;
  setCountCal: React.Dispatch<React.SetStateAction<number>>;
  setIsFirstScreen: (value: string) => void;
  countCal: number;
};
const ShopingCart = ({
  setItemArray,
  countCal,
  setCountCal,
  setIsFirstScreen,
}: myProps) => {
  const [selectedIFruite, setSelectedFruite] = useState<number[]>([]);
  const [selectedVegges, setSelectedVegges] = useState<number[]>([]);
  const [selectedMeals, setMelectedMeals] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const handleFruitsCalories = (
    calories: number,
    dropVal: string,
    name: string,
    index: number
  ) => {
    if (countCal > 50) return;
    if (!selectedIFruite.includes(index)) {
      setItemArray((prev) => [...prev, { name: name, dropVal: dropVal }]);
      setSelectedFruite((prev) => [...prev, index]);
      setCountCal((prev) => prev + calories);
      setCount((prev) => prev + 1);
    } else {
      setItemArray((prev) => prev.filter((item) => item.name != name));
      setCountCal((prev) => prev - calories);
      setSelectedFruite((prev) => prev.filter((item) => item !== index));
      setCount((prev) => prev - 1);
    }
  };
  const handleVaggeisCalories = (
    calories: number,
    dropVal: string,
    name: string,
    index: number
  ) => {
    if (countCal > 50) return;
    if (!selectedVegges.includes(index)) {
      setItemArray((prev) => [...prev, { name: name, dropVal: dropVal }]);
      setCountCal((prev) => prev + calories);
      setSelectedVegges((prev) => [...prev, index]);
      setCount((prev) => prev + 1);
    } else {
      setItemArray((prev) => prev.filter((item) => item.name != name));
      setCountCal((prev) => prev - calories);
      setSelectedVegges((prev) => prev.filter((item) => item !== index));
      setCount((prev) => prev - 1);
    }
  };
  const handleMealCalories = (
    calories: number,
    dropVal: string,
    name: string,
    index: number
  ) => {
    if (countCal > 50) return;
    if (!selectedMeals.includes(index)) {
      setItemArray((prev) => [...prev, { name: name, dropVal: dropVal }]);
      setCountCal((prev) => prev + calories);
      setMelectedMeals((prev) => [...prev, index]);
      setCount((prev) => prev + 1);
    } else {
      setItemArray((prev) => prev.filter((item) => item.name != name));
      setCountCal((prev) => prev - calories);
      setMelectedMeals((prev) => prev.filter((item) => item !== index));
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white min-h-screen flex p-5  flex-col items-center justify-center gap-3">
      <h4 className="py-5 text-3xl text-center font-bold text-black">
        Meal plan
      </h4>
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-8 flex flex-col gap-3">
          {/* ====================breakfast data ===================== */}

          <div>
            <h4 className="text-3xl  text-center text-black py-5 font-bold">
              {" "}
              Breakfast
            </h4>
            <div className="border-2 grid grid-cols-12 p-2 gap-2 bg-violet-100 rounded-lg min-h-[200px]">
              {fruitsData.map((fitem, findex) => (
                <div
                  className={`col-span-4 rounded-lg overflow-hidden  ${
                    selectedIFruite.includes(findex)
                      ? "border-2  border-green-800 rounded-lg"
                      : ""
                  } `}
                  key={findex}
                >
                  <div
                    className={`group  w-full h-[150px] bg-white relative rounded-lg overflow-hidden  cursor-pointer `}
                  >
                    <Image
                      src={fitem.fruitsImg}
                      className="object-contain"
                      fill
                      alt="fruits imgs"
                    />
                    <h6
                      onClick={() =>
                        handleFruitsCalories(
                          fitem.value,
                          fitem.dropVal,
                          fitem.name,
                          findex
                        )
                      }
                      className="group-hover:bottom-[50px] group-hover:opacity-100  absolute bottom-[-100px] opacity-0 left-[100px] trasition-all
                     duration-200 text-3xl bg-violet-900 p-3 rounded-lg border border-white text-white"
                    >
                      <BsCartDashFill />
                    </h6>
                  </div>
                  <h2 className="text-black text-center bg-violet-400 text-lg py-2">
                    {fitem.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* ====================lunch data ===================== */}
          <div>
            <h4 className="text-3xl  text-center text-black py-5 font-bold">
              Lunch
            </h4>
            <div className=" border-2 grid grid-cols-12 p-2 gap-1 bg-violet-100 rounded-lg min-h-[200px]">
              {veggiesData.map((fitem, Vindex) => (
                <div
                  className={`col-span-4 rounded-lg overflow-hidden  ${
                    selectedVegges.includes(Vindex)
                      ? "border-2  border-green-800 rounded-lg"
                      : ""
                  } `}
                  key={Vindex}
                >
                  <div
                    className={`group  w-full h-[150px] bg-white relative rounded-lg overflow-hidden  cursor-pointer `}
                  >
                    <Image
                      src={fitem.fruitsImg}
                      className="object-contain"
                      fill
                      alt="fruits imgs"
                    />
                    <h6
                      onClick={() =>
                        handleVaggeisCalories(
                          fitem.value,
                          fitem.dropVal,
                          fitem.name,
                          Vindex
                        )
                      }
                      className="group-hover:bottom-[50px] group-hover:opacity-100  absolute bottom-[-100px] opacity-0 left-[100px] trasition-all
                     duration-200 text-3xl bg-violet-900 p-3 rounded-lg border border-white text-white"
                    >
                      <BsCartDashFill />
                    </h6>
                  </div>
                  <h2 className="text-black  bg-violet-400 text-center text-lg py-2">
                    {fitem.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* ====================dinner  data ===================== */}
          <div>
            <h4 className="text-3xl  text-center text-black py-5 font-bold">
              Dinner{" "}
            </h4>
            <div className="border-2 grid grid-cols-12 p-2 gap-1 bg-violet-100 rounded-lg min-h-[200px]">
              {MealsData.map((fitem, Mindex) => (
                <div
                  className={`col-span-4 rounded-lg overflow-hidden  ${
                    selectedMeals.includes(Mindex)
                      ? "border-2  border-green-800 rounded-lg"
                      : ""
                  } `}
                  key={Mindex}
                >
                  <div
                    className={`
                    group w-full h-[150px] bg-white relative rounded-lg overflow-hidden  cursor-pointer `}
                  >
                    <Image
                      src={fitem.fruitsImg}
                      className="object-contain"
                      fill
                      alt="fruits imgs"
                    />
                    <h6
                      onClick={() =>
                        handleMealCalories(
                          fitem.value,
                          fitem.dropVal,
                          fitem.name,
                          Mindex
                        )
                      }
                      className="group-hover:bottom-[50px] group-hover:opacity-100  absolute bottom-[-100px] opacity-0 left-[100px] trasition-all
                     duration-200 text-3xl bg-violet-900 p-3 rounded-lg border border-white text-white"
                    >
                      <BsCartDashFill />
                    </h6>
                  </div>
                  <h2 className="text-black bg-violet-400 text-center text-lg py-2">
                    {fitem.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 sticky  h-[300px] flex items-center flex-col gap-10 justify-center top-[30%]   text-black  text-lg ">
          <h5 className="text-black text-xl py-2 text-center">
            Your budget is 50 bucks
          </h5>
          <div className="bg-violet-800 px-10 py-2 flex gap-8 rounded-lg ">
            <h3 className="text-white text-2xl"> bucks count : {countCal}</h3>
            <h4 className="text-white text-2xl relative">
              <BsCartDashFill />
              <span className="absolute top-[-22px] right-[-15px] text-[15px] px-2 py-1 bg-black rounded-full">
                {count}
              </span>
            </h4>
          </div>

          {countCal > 50 ? (
            <button
              onClick={() => setIsFirstScreen("table")}
              className={`${"bg-yellow-400 cursor-pointer"}   text-black px-5 py-2 rounded-lg`}
            >
              Check
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
