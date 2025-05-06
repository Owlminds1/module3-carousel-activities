"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import QustionData from "@/carouselC21-L2-A5/qustion.json";

type myProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function Slide({ setIsFirstScreen }: myProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [inputVal, setInputVal] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  useEffect(() => {
    setInputVal(QustionData[lastSlide].qustion);
    setShowSolution(false); // Reset solution on slide change
  }, [lastSlide]);
  const handleNext = () => {
    if ( lastSlide >= QustionData.length -1 ) {
      setIsFirstScreen("result");
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    setShowSolution(false);
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[980px]  ">
        <h1 className="text-center text-4xl font-bold  text-black">
          Pause and tone
        </h1>
        <h5 className="text-xl font-medium text-center py-4 text-black">Make sure that each chunk gives out a certain aspect of the entire information – who/what/why/where/when/how. Some of these chunks can be combined if the information is related.</h5>
        
        <div className="w-full  border-2 p-2  bg-violet-100 rounded-lg min-h-[300px]">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {QustionData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="  min-h-[300px] flex justify-center items-center flex-col gap-5">
              
                  <label className="text-xl font-bold" htmlFor="input">
                    Q{index + 1}
                  </label>
                  <textarea
                    id="input"
                    className="text-xl min-w-[500px] min-h-[100px] p-2 border-b border-black  outline-none"
                    onChange={(e) => setInputVal(e.target.value)}
                    value={inputVal}
                  />
                  {showSolution ? (
                    <h4 className="text-xl w-[500px]  text-violet-900">
                      <span className="font-bold">Solution: </span>
                      {item.solution}
                    </h4>
                  ) : (
                    <button
                      onClick={() => setShowSolution(true)}
                      className="cursor-pointer bg-violet-900 text-white px-8 py-2 text-lg rounded-lg"
                    >
                      Check
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
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
              lastSlide < QustionData.length && showSolution
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < QustionData.length && showSolution
                  ? "block"
                  : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
