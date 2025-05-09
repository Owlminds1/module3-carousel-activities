"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SlideData from "@/carouselC22-L3-A1/slideData.json";
import Image from "next/image";

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
        <h1 className="text-center text-4xl py-4 text-black">Be positive</h1>



        <div className="mt-4 bg-violet-200 p-4 rounded-lg min-h-[400px]">
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
                <div className="flex justify-center items-center flex-col  gap-4">
                  <h3 className="text-3xl text-center text-black font-bold">What I like about myself?</h3>
                  <Image src="/C23Images/404.jpg" width={400} height={100} alt="slider image"/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center items-center flex-col min-h-[400px] ">
                  <h3 className="text-3xl text-center text-black font-bold">Complete these sentences</h3>
<ul className="list-disc p-5 ">
  <li className="text-3xl text-black">I am happy that</li>
  <li className="text-3xl text-black">I love that I am </li>
  <li className="text-3xl text-black">I love myself for </li>
  <li className="text-3xl text-black">I like that I am</li>
  <li className="text-3xl text-black">I love being</li>
</ul>
                </div>
              </SwiperSlide>
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
