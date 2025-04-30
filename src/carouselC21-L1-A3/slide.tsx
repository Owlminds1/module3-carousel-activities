"use client";
import React, {  useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carouselC21-L1-A3/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function Slide() {
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
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[900px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
        The Know, Feel, Do Framework
        </h1>
        <div className="grid grid-cols-12 w-full place-items-center border-2 p-2  bg-violet-100 rounded-lg min-h-[300px]">
          <div className="col-span-4 w-full border border-black rounded-lg px-2 ">
            <ul className="space-y-4 list-decimal p-5">
              <li className="text-black text-xl  ">First think about what you want the listener to know.</li>
              <li className="text-black text-xl  ">Then about how you want them to feel.</li>
              <li className="text-black text-xl  ">Finally at the end decide what you want the listener to do as a result.</li>
            </ul>
          </div>
          <div className="col-span-8 w-full  h-full flex items-center p-5 justify-center ">
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
          
                <div className=" flex  justify-center items-center flex-col gap-8 w-full ">
                <h4 className="text-2xl font-bold text-center">{item.Qustion}</h4>
                <h4 className="text-2xl  text-center"><span className="font-bold text-center">Action: </span>{item.Action}</h4>
                 
                </div>

             
          
            </SwiperSlide>
          ))}
        </Swiper>
          </div>
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
              lastSlide < SlideData.length - 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length - 1 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
