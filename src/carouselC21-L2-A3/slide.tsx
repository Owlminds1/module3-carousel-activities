"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import QustionData  from "@/carouselC21-L2-A3/qustion.json"


type myProps = {
  setIsFirstScreen :(value:string)=>void
}
export default function Slide({setIsFirstScreen}:myProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    if(lastSlide > QustionData.length ){
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

  
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[980px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
        What Communication is not?
        </h1>
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
            <SwiperSlide>
            <div className="  min-h-[300px] flex justify-center items-center flex-col gap-3">
              <h3 className="text-3xl  text-black  ">Does the presenter use  all the 7Cs in the following pep talk?</h3>
            </div>
            </SwiperSlide>
           
            <SwiperSlide>
              <div className="min-h-[300px]  p-5 flex justify-center items-center ">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/l-gQLqv9f4o?si=zn2CrgamfhxTwlqh" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </SwiperSlide>
           
            {
              QustionData.map((item,index)=>(
            <SwiperSlide key={index} >
            <div className="  min-h-[300px] flex justify-center items-center flex-col gap-3">
                
                <h3 className="text-3xl  text-black  ">{item.qustion}</h3>
            </div>
            </SwiperSlide>
              ))

            }  

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
              lastSlide < QustionData.length + 2
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < QustionData.length + 2 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
