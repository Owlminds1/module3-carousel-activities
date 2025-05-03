"use client";
import React, {  useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SLideData from "@/carouselC21-L3-A2/slideData.json";
import checkBoxData from "@/carouselC21-L3-A2/checkBoxData.json";
import { CheckboxWithText } from "@/components/checkBox";
// type myProps = {
//   setIsFirstScreen: (value: string) => void;
// };
const QustionSlide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  
const totleSlide = SLideData.length + 1
  const handleNext = () => {
    swiperRef.current?.slideNext();
    // if (lastSlide == SLideData.length - 1) {
    //   setIsFirstScreen("Result");
    // }
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
        <h4 className="text-center text-4xl font-bold py-4 text-black">
        Decode the video
        </h4>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[300px]">
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
                <div className="grid grid-cols-12 place-items-center gap-2 w-full">
            {checkBoxData.map((item, index) => (
                  <div  key={index} className="col-span-6">
                    <CheckboxWithText name={item.name} />
                  </div>
              ))}
                </div>
              </SwiperSlide>
            {SLideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 place-items-center gap-2 w-full h-full">
                  <div className="col-span-12  w-full min-h-[200px] rounded-lg  flex justify-center items-center flex-col ">
                    {
                      <h4 className="text-3xl text-center font-bold text-black">
                        {item.qustion}
                      </h4>
                    }
                  </div>
                </div>
              </SwiperSlide>
            ))}
           
          </Swiper>
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
              lastSlide < totleSlide - 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < totleSlide - 1 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QustionSlide;
