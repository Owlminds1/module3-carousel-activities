"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import responseData from "@/CarouselC23-L3-A1/secoundScreenData.json";

import FirstScreen from "./firstScreen";
import SecoundScreen from "./secoundScreen";

export default function Slide() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [show, setShow] = useState(true);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    if(swipe.activeIndex === 0){
      setShow(true)
    }else{

      setShow(false)
    }
    swipe.updateAutoHeight()
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[980px]  ">
        <h1 className="text-center text-3xl font-bold py-4 text-black">
          {lastSlide == 0
            ? "Let’s learn how we can be assertive"
            
            : "Convert the following situations into ones of the AREFIT qualities."}
        </h1>
        <Swiper
        autoHeight={true}
          className="border-2 p-2 bg-violet-100 rounded-lg min-h-[200px] "
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <FirstScreen />
          </SwiperSlide>
          {responseData.map((item, index) => (
            <SwiperSlide key={index}>
              <SecoundScreen item={item} show={show} setShow={setShow} />
            </SwiperSlide>
          ))}
        </Swiper>
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
              lastSlide <  responseData.length && show
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide <  responseData.length && show ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
