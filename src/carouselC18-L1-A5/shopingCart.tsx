import Image from "next/image";
import MealData from "@/carouselC18-L1-A5/mealData.json";
import React, { useState } from "react";
import { BsCartDashFill } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";
import Dailog from "@/components/dailog";


type myProps = {
  itemArray: typeof MealData;
  setItemArray: React.Dispatch<React.SetStateAction<typeof MealData>>;
  setCountCal: React.Dispatch<React.SetStateAction<number>>;
  setIsFirstScreen: (value: string) => void;
  countCal: number;
};
const ShopingCart = ({
  itemArray,
  setItemArray,
  countCal,
  setCountCal,
  setIsFirstScreen,
}: myProps) => {
  const [selectedIFruite, setSelectedFruite] = useState<number[]>([]);
  const [count, setCount] = useState(0);
  const [remainingBucks, setRemainingBucks] = useState<number>(50);
  const [open, setOpen] = useState(false);

  const handleBreckFast = (
    calories: number,
    dropVal: string,
    subName:string,
    img: string,
    name: string,
    index: number
  ) => {
    if (countCal + calories > 50) {
      setOpen(true);
      return;
    }
    if (!selectedIFruite.includes(index)) {
      setItemArray((prev) => [
        ...prev,
        {
          fruitsImg: img,
          name: name,
          subName:subName,
          value: calories,
          dropVal: dropVal,
          originalIndex: index,
        },
      ]);

      setSelectedFruite((prev) => [...prev, index]);
      setCountCal((prev) => prev + calories);
      setRemainingBucks((prev) => prev - calories);
      setCount((prev) => prev + 1);
    } else {
      setItemArray((prev) => prev.filter((item) => item.name != name));
      setCountCal((prev) => prev - calories);
      setRemainingBucks((prev) => prev + calories);
      setSelectedFruite((prev) => prev.filter((item) => item !== index));
      setCount((prev) => prev - 1);
    }
  };

  const handleRemoveFromCart = (
    name: string,
    calories: number,
    originalIndex: number
  ) => {
    setItemArray((prev) => prev.filter((item) => item.name !== name));
    setCountCal((prev) => prev - calories);
    setRemainingBucks((prev) => prev + calories);
    setSelectedFruite((prev) => prev.filter((item) => item !== originalIndex));
    setCount((prev) => prev - 1);
  };

  return (
    <div className="bg-white min-h-screen flex p-5  flex-col items-center justify-center gap-3">
      <h4 className="py-5 text-3xl text-center font-bold text-black">
        Meal plan
      </h4>
      <div className="grid grid-cols-12 w-full gap-4 ">
        <div className="col-span-6 w-full border-2 flex flex-col  p-2 items-center gap-3 rounded-lg bg-violet-100">
          {/* ====================breakfast data ===================== */}

          <div className=" grid grid-cols-12  gap-4 w-[550px]  rounded-lg  min-h-[200px]">
            {MealData.map((item, findex) => (
              <div
                className={`col-span-4 rounded-lg overflow-hidden  ${
                  selectedIFruite.includes(findex)
                    ? "border-2  border-green-800 rounded-lg"
                    : ""
                } `}
                key={findex}
              >
                <div
                  className={`group  w-full h-[120px] bg-white relative rounded-lg overflow-hidden  cursor-pointer `}
                >
                  <Image
                    src={item.fruitsImg}
                    className="object-contain"
                    fill
                    alt="fruits imgs"
                  />
                  <h6
                    onClick={() =>
                      handleBreckFast(
                        item.value,
                        item.dropVal,
                        item.subName,
                        item.fruitsImg,
                        item.name,
                        findex
                      )
                    }
                    className="group-hover:bottom-[30px] group-hover:opacity-100  absolute bottom-[-100px] opacity-0 left-[70px] trasition-all
                     duration-200 text-xl bg-violet-900 p-3 rounded-lg border border-white text-white"
                  >
                    <BsCartDashFill />
                  </h6>
                </div>
                <h2 className="text-white text-center bg-violet-800 text-lg p-1">
                  {item.subName}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-6 w-full     text-black  text-lg ">
          <div className="flex flex-col gap-5  sticky top-0  overflow-y-scroll">
            <div className="border  border-gray-400 w-full  p-5  rounded-lg">
              <div className=" flex flex-col  justify-center items-center gap-2  ">
                <h3 className="text-black text-2xl text-left w-full">
                  Total Bucks - 50
                </h3>

                <h3 className="text-black text-2xl text-left w-full">
                  {" "}
                  Total costs of items - {countCal}
                </h3>
                <h3 className="text-black text-2xl text-left  w-full">
                  Remaining Bucks - {remainingBucks}
                </h3>
              </div>
            </div>

            {countCal >= 50 ? (
             <div className="text-center w-full">
               <button
                onClick={() => setIsFirstScreen("table")}
                className={`${"bg-yellow-400 cursor-pointer"} min-w-[150px] text-xl font-medium   text-black px-5 py-2 rounded-lg`}
              >
                Buy
              </button>
             </div>
            ) : (
              ""
            )}

            <div
              className={` border relative border-gray-400 rounded-lg w-full flex flex-col gap-3 p-5 `}
            >
              <div className="w-full p-2 ">
                <div className="flex justify-end  items-center gap-5 w-full  text-black text-2xl relative  ">
                  Total Items in the cart -
                  <h3 className="relative ">
                    <BsCartDashFill className="text-violet-900 text-[28px]" />
                    <span className="absolute right-[-10px] top-[-19px] text-sm bg-black text-white px-2 py-0.5 rounded-full ">
                      {count}
                    </span>
                  </h3>
                </div>
              </div>
              <div
                className="flex flex-col-reverse gap-1 trasition-all
             duration-100"
              >
                {itemArray.map((item, index) => (
                  <div
                    key={index}
                    className="bg-violet-100 p-3 min-w-[300px] w-full rounded-lg  flex  justify-between items-center gap-10 "
                  >
                    <Image
                      src={item.fruitsImg}
                      className="rounded-lg shadow "
                      width={60}
                      height={60}
                      alt="cart img"
                    />
                    <div className="flex justify-center items-center">
                      <h2 className="text-lg font-bold ">{item.name}</h2>
                    </div>

                    <div className="flex justify-center items-center">
                      <button
                        title="Remove"
                        onClick={() =>
                          handleRemoveFromCart(
                            item.name,
                            item.value,
                            MealData.findIndex((m) => m.name === item.name)
                          )
                        }
                        className="text-2xl cursor-pointer  text-red-500 rounded-lg px-2 py-1  "
                      >
                        <MdOutlineDeleteForever />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dailog val="You have not enough bucks" setOpen={setOpen} open={open} />
    </div>
  );
};

export default ShopingCart;
