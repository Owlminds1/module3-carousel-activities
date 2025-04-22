"use client";
import React, {  useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GameData from "@/carouselC19-L1-A4/gameData.json";
import QuadrantData from "@/carouselC19-L1-A4/quadrant.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

type DragItem = {
  text: string;
  value: string;
};

export default function EmotionSlide() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [dropItem, setDropItem] = useState<{ [key: number]: string[] }>({});
  const [filterData, setFilterData] = useState(GameData);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    //  setIsFirstScreen("result");
  };

  const handleDrag = (e: React.DragEvent, dragItemObj: DragItem) => {
    e.dataTransfer.setData("dragItemobj", JSON.stringify(dragItemObj));
  };

  const handleDrop = (e: React.DragEvent, index: number, QuadVal: string) => {
    const dropObj = JSON.parse(e.dataTransfer.getData("dragItemobj"));
    if (dropObj.value == QuadVal) {
      setDropItem((prev) => ({
        ...prev,
        [index]: prev[index] ? [...prev[index], dropObj.text] : [dropObj.text],
      }));

      setFilterData((prev) => prev.filter((text) => text.text != dropObj.text));
   
    }
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[800px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Emotion game
        </h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px] ">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className="h-full my-5">
                <Image
                  src="/C19Images/emotion_table.png"
                  width={800}
                  height={400}
                  alt="emotion Table"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center gap-5 flex-col">
                  <div  className="flex justify-center items-center gap-1 min-w-full rounded-lg p-5 flex-wrap  bg-violet-400">
                {filterData.map((item, index) => (
                    <h1 
                    key={index}
                      draggable
                      onDragStart={(e) => handleDrag(e, item)}
                      className="cursor-pointer bg-violet-900 text-white rounded-lg px-5 py-2 "
                    >
                      {item.text}
                    </h1>
                ))}
                </div>
                <div className="grid grid-cols-12 place-items-center gap-1   w-full">
                  {QuadrantData.map((item, index) => (
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleDrop(e, index, item.QuadVal)}
                      key={index}
                      className={`${item.bg} rounded-lg col-span-6 min-h-[150px] w-full flex justify-start gap-1 items-center flex-col`}
                    >
                      <h2 className="text-xl text-black font-bold">
                        {item.QuadVal}
                      </h2>
                      <div   className=" w-full  flex justify-center  gap-1 items-center flex-wrap min-w-[100px] ">
                      {dropItem[index]?.map((i, index) => (
                         <h2 key={index}
                         
                          className="cursor-pointer bg-violet-900 text-white rounded-lg px-5 py-2 "
                        >
                          {i}
                        </h2>
                      ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full flex justify-between items-center mt-5">
          <div
            className={` ${
              lastSlide > 0
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowLeft
              className={`${
                lastSlide > 0 ? "block" : "hidden"
              } text-[40px]  cursor-pointer  text-black`}
              onClick={handlePerv}
            />
          </div>

          <div
            className={` ${
              lastSlide >= 0 && lastSlide < 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide >= 0 && lastSlide < 1 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
