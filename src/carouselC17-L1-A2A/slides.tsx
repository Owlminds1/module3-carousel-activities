"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carouselC17-L1-A2A/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function SlideStart() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };
  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[600px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          {lastSlide < SlideData.length ? "4W2H" : "Bonus Questions"}
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
            {SlideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center flex-col p-5 ">
                  <div className=" text-center min-h-[50px]">
                    <div className=" text-center  text-black text-2xl ">
                      {item.text}
                    </div>
                  </div>
                  <div className=" bg-white rounded-lg overflow-hidden relative w-full h-[300px] ">
                    <Image
                      src={item.image}
                      fill
                      className="object-contain"
                      alt="dfs"
                    />
                  </div>

                  <div className="text-center">
                    <div className="font-bold text-center py-5 text-black text-4xl ">
                      {item.text2}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide>
            <div className="flex justify-center items-center flex-col p-5 ">
                  <div className=" text-center">
                    <div className=" text-center  text-black text-2xl ">
                    WHY is for reason. We often use because for questions about
                    reasoning.                    </div>
                  </div>
                  <div className=" bg-white rounded-lg overflow-hidden relative w-full h-[300px] ">
                    <Image
                      src="/C17Images/L1-2A/wayImage.png"
                      fill
                      className="object-contain"
                      alt="dfs"
                    />
                  </div>

                  <div className="text-center">
                    <div className=" font-bold text-center py-5 text-black text-4xl ">
                    WHY
                    </div>
                  </div>
                </div>
             
            </SwiperSlide>
            
            <SwiperSlide>
            <div className="flex justify-center items-center flex-col p-5 ">
                  <div className=" text-center">
                    <div className=" text-center  text-black text-2xl ">
                    HOW is to see how someone feels, how something is done, or for
                modes of transportation                 </div>
                  </div>
                  <div className=" bg-white rounded-lg overflow-hidden relative w-full h-[300px] ">
                    <Image
                      src="/C17Images/L1-2A/howImage.png"
                      fill
                      className="object-contain"
                      alt="dfs"
                    />
                  </div>

                  <div className="text-center">
                    <div className=" font-bold text-center py-5 text-black text-4xl ">
                   HOW
                    </div>
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
              lastSlide < SlideData.length + 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length + 1 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
