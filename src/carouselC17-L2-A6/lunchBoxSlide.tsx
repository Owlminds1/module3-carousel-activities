import Image from "next/image";
import fruitsData from "@/carouselC17-L2-A6/fruits.json";
import veggiesData from "@/carouselC17-L2-A6/vegies.json";
import MealsData from "@/carouselC17-L2-A6/mealData.json";
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
  const handleFruitsCalories = (calories: number) => {
    if (isNaN(calories)) return;
    setFruitsCal((prev) => prev + calories);
    setCountCal((prev) => prev + calories);
  };
  const handleVaggeisCalories = (calories: number) => {
    if (isNaN(calories)) return;
    setVaggeisCal((prev) => prev + calories);
    setCountCal((prev) => prev + calories);
  };
  const handleMealCalories = (calories: number) => {
    if (isNaN(calories)) return;
    setMealCal((prev) => prev + calories);
    setCountCal((prev) => prev + calories);
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
          <h4 className="text-lg text-center text-black py-2">Fruits</h4>
         <div className="border-2 grid grid-cols-12 p-2 gap-1 bg-violet-100 rounded-lg min-h-[200px]">
            
           
            {fruitsData.map((fitem, findex) => (
              <div className="col-span-3" key={findex}>
                <div
                  className="w-[150px] h-[150px] bg-white relative rounded-lg overflow-hidden border cursor-pointer hover:border-2 hover:border-black "
                  onClick={() => handleFruitsCalories(fitem.value)}
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
          <h4 className="text-lg text-center text-black py-2">Veggies</h4>
          <div className="border-2 grid grid-cols-12 p-2 gap-1 bg-violet-100 rounded-lg min-h-[200px]">
            {veggiesData.map((fitem, findex) => (
              <div className="col-span-3" key={findex}>
                <div
                  className="w-[150px] h-[150px] relative rounded-lg overflow-hidden border cursor-pointer hover:border-2 hover:border-black "
                  onClick={() => handleVaggeisCalories(fitem.value)}
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
          <h4 className="text-lg text-center text-black py-2">Meals</h4>
          <div className="border-2 grid grid-cols-12 p-2 gap-1 bg-violet-100 rounded-lg min-h-[200px]">
            {MealsData.map((fitem, findex) => (
              <div className="col-span-3" key={findex}>
                <div
                  className="w-[150px] h-[150px] relative rounded-lg overflow-hidden border cursor-pointer hover:border-2 hover:border-black "
                  onClick={() => handleMealCalories(fitem.value)}
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
            you’ve atleast one item from each and the total number of calories
            shouldn’t exceed 700 calories.
          </h5>
          <h3 className="bg-violet-800 px-10 py-2 rounded-lg text-white text-2xl">
            Total Calories : {countCal}
          </h3>

          <button
            onClick={() => setIsFirstScreen("table")}
            className="bg-yellow-400 cursor-pointer text-black px-5 py-2 rounded-lg"
          >
            Check Your Calories
          </button>
        </div>
      </div>
    </div>
  );
};

export default LunchBoxSlide;
