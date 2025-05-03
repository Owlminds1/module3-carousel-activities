import Image from "next/image";
import fruitsData from "@/carouselC17-L2-A6/fruits.json";
import veggiesData from "@/carouselC17-L2-A6/vegies.json";
import MealsData from "@/carouselC17-L2-A6/mealData.json";
import { useState } from "react";
type myProps = {
  setFruitsCal: React.Dispatch<React.SetStateAction<number>>;
  setVaggeisCal: React.Dispatch<React.SetStateAction<number>>;
  setMealCal: React.Dispatch<React.SetStateAction<number>>;
  setCountCal: React.Dispatch<React.SetStateAction<number>>;
  setIsFirstScreen: (value: string) => void;
  countCal: number;
};
const LunchBoxSlide = ({
  countCal,
  setIsFirstScreen,
  setMealCal,
  setVaggeisCal,
  setFruitsCal,
  setCountCal,
}: myProps) => {
  const [selectedIFruite, setSelectedFruite] = useState<number[]>([]);
  const [selectedVegges, setSelectedVegges] = useState<number[]>([]);
  const [selectedMeals, setMelectedMeals] = useState<number[]>([]);

  const handleFruitsCalories = (calories: number, index: number) => {
    if (isNaN(calories)) return;

    if (!selectedIFruite.includes(index)) {
      setFruitsCal((prev) => prev + calories);
      setCountCal((prev) => prev + calories);
      setSelectedFruite((prev) => [...prev, index]);
    } else {
      setFruitsCal((prev) => prev - calories);
      setCountCal((prev) => prev - calories);
      setSelectedFruite((prev) => prev.filter((item) => item !== index));
    }
  };
  const handleVaggeisCalories = (calories: number, index: number) => {
    if (isNaN(calories)) return;
    if (!selectedVegges.includes(index)) {
      setVaggeisCal((prev) => prev + calories);
      setCountCal((prev) => prev + calories);
      setSelectedVegges((prev) => [...prev, index]);
    } else {
      setVaggeisCal((prev) => prev - calories);
      setCountCal((prev) => prev - calories);
      setSelectedVegges((prev) => prev.filter((item) => item !== index));
    }
  };
  const handleMealCalories = (calories: number, index: number) => {
    if (isNaN(calories)) return;
    if (!selectedMeals.includes(index)) {
      setMealCal((prev) => prev + calories);
      setCountCal((prev) => prev + calories);
      setMelectedMeals((prev) => [...prev, index]);
    } else {
      setMealCal((prev) => prev - calories);
      setCountCal((prev) => prev - calories);
      setMelectedMeals((prev) => prev.filter((item) => item !== index));
    }
  };

  return (
    <div className="bg-white min-h-screen flex p-5  flex-col items-center justify-center gap-3">
      <h4 className="py-5 text-3xl text-center font-bold text-black">
        Lunchbox planner
      </h4>
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-6 flex flex-col gap-3">
          {/* ====================fruits data ===================== */}

          <div>
            <h4 className="text-lg text-center text-black py-2 font-bold">Fruits</h4>
            <div className="border-2 grid grid-cols-12 p-2 gap-1 bg-violet-100 rounded-lg min-h-[200px]">
              {fruitsData.map((fitem, findex) => (
                <div className={`col-span-3 ${
                  selectedIFruite.includes(findex)
                    ? "border-2  border-green-800 rounded-lg"
                    : ""
                } `} key={findex}>
                  <div
                    className={`w-[150px] h-[150px] bg-white relative rounded-lg overflow-hidden  cursor-pointer hover:border-1 hover:border-black`}
                    onClick={() => handleFruitsCalories(fitem.value, findex)}
                  >
                    <Image src={fitem.fruitsImg} fill alt="fruits imgs" />
                  </div>
                  <h2 className="text-black  text-center text-lg py-2">
                    {fitem.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* ====================veggies data ===================== */}
          <div>
            <h4 className="text-lg text-center text-black py-2 font-bold">Veggies</h4>
            <div className="border-2 grid grid-cols-12 p-2 gap-1 bg-violet-100 rounded-lg min-h-[200px]">
              {veggiesData.map((fitem, Vindex) => (
                <div  className={`col-span-3 ${
                  selectedVegges.includes(Vindex)
                    ? "border-2  border-green-800 rounded-lg"
                    : ""
                } `} key={Vindex}>
                  <div
                    className={`w-[150px] h-[150px] bg-white relative rounded-lg overflow-hidden cursor-pointer hover:border-1 hover:border-black`}
                    onClick={() => handleVaggeisCalories(fitem.value, Vindex)}
                  >
                    <Image src={fitem.fruitsImg} fill alt="fruits imgs" />
                  </div>
                  <h2 className="text-black  text-center text-lg py-2">
                    {fitem.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* ====================meals data ===================== */}
          <div>
            <h4 className="text-lg text-center text-black py-2 font-bold">Meals</h4>
            <div className="border-2 grid grid-cols-12 p-2 gap-1 bg-violet-100 rounded-lg min-h-[200px]">
              {MealsData.map((fitem, Mindex) => (
                <div
                  className={`col-span-3 ${
                    selectedMeals.includes(Mindex)
                      ? "border-2  border-green-800 rounded-lg"
                      : ""
                  } `}
                  key={Mindex}
                >
                  <div
                    className={`
                    w-[150px] h-[150px] bg-white relative rounded-lg overflow-hidden  cursor-pointer hover:border-1 hover:border-black`}
                    onClick={() => handleMealCalories(fitem.value, Mindex)}
                  >
                    <Image src={fitem.fruitsImg} fill alt="fruits imgs" />
                  </div>
                  <h2 className="text-black  text-center text-lg py-2">
                    {fitem.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-6 sticky  h-[300px] flex items-center flex-col gap-10 justify-center top-[30%]   text-black  text-lg ">
          <h5 className="text-black text-xl py-2 text-center">
          Select atleast one item from each category to create a lunchbox that does NOT exceed 700 calories.
          </h5>
          <h3 className="bg-violet-800 px-10 py-2 rounded-lg text-white text-2xl">
            Total Calories : {countCal}
          </h3>

          <button
            onClick={() => (countCal >= 700 ? setIsFirstScreen("table") : "")}
            className={`${
              countCal >= 700
                ? "bg-yellow-400 cursor-pointer"
                : "bg-yellow-200 cursor-no-drop"
            }   text-black px-5 py-2 rounded-lg`}
          >
            Check Your Calories
          </button>
        </div>
      </div>
    </div>
  );
};

export default LunchBoxSlide;
