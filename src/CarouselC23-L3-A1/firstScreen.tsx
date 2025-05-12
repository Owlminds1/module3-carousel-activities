import React, { useState } from "react";
import Data from "@/CarouselC23-L3-A1/firstScreenData.json";

const FirstScreen = () => {
  const [activeIndex, setActiveIndex] = useState<number>();

  const handleShow = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-[450px] overflow-y-scroll flex justify-start items-center flex-col p-5 gap-5">
      <h4 className="text-3xl text-black ">
        {" "}
        How to tell others what we want respectfully?
      </h4>
      <h5 className="text-2xl text-left text-black font-bold ">
        A-R-E-F-I-T model
      </h5>
      <div className="grid grid-cols-12 w-full place-items-center gap-2">
        {Data.map((item, index) => (
          <div
            key={index}
            className="col-span-6 w-full  flex justify-center item-center flex-col "
          >
            <div
              onClick={() => handleShow(index)}
              className="bg-yellow-400 cursor-pointer border border-black flex justify-center items-center gap-1 rounded-full"
            >
                <h4 className="w-[50px] h-[50px] bg-white flex justify-center items-center text-xl border border-white rounded-full">{index+1}</h4>
              <h2 className="text-2xl text-black  rounded-lg rounded-b-none  p-4     text-center ">
              
                {item.text}
              </h2>
            </div>

            <div
              className={`${
                activeIndex == index ? "scale-100" : "scale-0 "
              }  transition-all duration-150 min-h-[100px] text-lg font-bold text-black text-center p-2   flex justify-center items-center bg-violet-300 rounded-full`}
            >
              {item.suggeg}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstScreen;
