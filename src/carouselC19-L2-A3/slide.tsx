"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import MoodMeter from "./moodMeter";
import SlideData from "@/carouselC19-L2-A3/slideData.json";
import Image from "next/image";

type myProps = {
  setIsFirstScreen: (value: string) => void;
};

const Slide = ({setIsFirstScreen}:myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
    if(lastSlide == SlideData.length-1){
      setIsFirstScreen("LastSlide")
    }
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[900px]">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Moments of Happiness
        </h1>

        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px] ">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6 ">
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
                    <div className="w-full min-h-[450px] flex justify-center items-center flex-col gap-5 ">
                      <Image
                        src={item.image}
                        width={300}
                        height={100}
                        alt="slider image"
                      />
                      <h5 className="text-2xl text-black text-center">{item.text}</h5>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-6 ">
              <MoodMeter />
            </div>
          </div>
        </div>
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
                lastSlide < SlideData.length  ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
