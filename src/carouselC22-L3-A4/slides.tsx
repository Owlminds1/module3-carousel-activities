"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SlideData from "@/carouselC22-L3-A4/slideData.json";

type MyProps = {
  setIsFirstScreen: (value: string) => void;
};

const SlideStart = ({ setIsFirstScreen }: MyProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    if (lastSlide < SlideData.length - 1) {
      swiperRef.current?.slideNext();
    } else {
      setIsFirstScreen("result");
    }
  };

  const handlePrev = () => {
    if (lastSlide > 0) {
      swiperRef.current?.slidePrev();
    }
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-2xl py-4 text-black">Read each situation with an area of improvement and suggest two ways to keep it light and positive.</h1>


        <div className="mt-4 bg-violet-200 p-4 rounded-lg min-h-[100px]">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {SlideData.map((item, index) => (
              <SwiperSlide key={index}>
                <h4 className="text-2xl text-center text-black">{item.text}</h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between items-center mt-5">
          <div
            className={`${
              lastSlide > 0
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowLeft
              className={`${
                lastSlide > 0 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handlePrev}
            />
          </div>

          <div
            className={`${
              lastSlide < SlideData.length
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideStart;
