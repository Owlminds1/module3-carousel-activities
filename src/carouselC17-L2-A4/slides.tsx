"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carouselC17-L2-A4/slideData.json";
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
  const [showSugetion, setShowSugetion] = useState(false);
  const [inputVal,setInputVal] =useState("")

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
    setInputVal("")
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
    setShowSugetion(false)
  };
  return (
    <div className="bg-white min-h-screen flex p-5 flex-col items-center justify-center gap-3">
      <div className="w-[900px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          {/* {lastSlide < SlideData.length  ? "What if?":"Bonus Questions"}  */}
          What if?
        </h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px] ">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6 relative">
              <Image
                src="/C17Images/Grand_Canyon.jpg"
                width={500}
                height={200}
                alt="slider image"
              />
              <h3
                className={`${
                  showSugetion  ? "block" : "hidden"
                } text-lg text-center p-3  bottom-0 text-white bg-[#000000a0]  min-w-[880px] rounded-lg`}
              >
                {SlideData[lastSlide].suggesion}
              </h3>
            </div>
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
                    <div className=" text-center py-5 text-black text-2xl ">
                      {item.text}
                    </div>
                    <textarea
                      className="w-full text-black text-center outline-none border border-black rounded-lg min-h-[150px] placeholder:text-slate-700 placeholder:text-center placeholder:text-2xl text-2xl"
                      placeholder="write your answer" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}
                    />
                    <div className="w-full text-center">
                      <button disabled={inputVal.length === 0  ? true :false } onClick={()=>setShowSugetion(true)} className="cursor-pointer hover:bg-violet-800 text-white bg-violet-900 px-8 py-2 rounded-lg ">
                        submit
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
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
              lastSlide < SlideData.length -1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length -1 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
