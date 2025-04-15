"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carouselC17-L1-A3/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function SlideStart() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [recallScreen, setRecallScreen] = useState("imgSee");
  const [timer, setTimer] = useState<number>(30);

  const handleNext = () => {
    setRecallScreen("imgSee")
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

  useEffect(() => {
    setTimer(30);
    const intervale = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervale);
          setRecallScreen("teacher_And_Kid_Tolk");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervale); // clear on unmount or slide change
  }, [lastSlide]);

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[600px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
        See and Remember
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
              <SwiperSlide  key={index}>
                <div
                 
                  className="flex justify-center items-center flex-col"
                >
                  <div className=" flex justify-center items-center gap-5">
                    {recallScreen == "imgSee" &&
                      item.slide.map((i, indx) => (
                        <div
                          className="w-full flex flex-col items-center justify-center gap-5"
                          key={indx}
                        >
                          <div className="border-2 w-[100px] h-[120px] relative ">
                            <Image src={i.img} fill alt="slid image" />
                          </div>
                          <h4 className="text-sm min-h-[50px] text-black text-center">
                            {i.text}
                          </h4>
                        </div>
                      ))}

                    {recallScreen == "teacher_And_Kid_Tolk" && <div>
                      <button className="bg-violet-800 text-white px-5 py-2 rounded-lg cursor-pointer" onClick={()=>setRecallScreen("imgSee")}>Recall for Set {lastSlide +1}</button>
                      </div>}
                  </div>
                  <h4
                    className={`${
                      recallScreen == "imgSee" ? "block" : "hidden"
                    } p-1 flex justify-center items-center text-black border-2 timer border-green-400 text-3xl w-[70px] h-[70px] rounded-full relative `}
                  >
                    <span className="text-black font-bold "> {timer}</span>
                  </h4>
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
