"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/CarouselC22-L1-A4/slideData.json";
import BtnData from "@/CarouselC22-L1-A4/btnData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function SlideStart({ setIsFirstScreen }: SlideProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const [showBtn, setShowbtn] = useState(false);

  const [shuffle, setSufffle] = useState<typeof BtnData>([]);
  const rightAudio = new Audio("/sound/correct.mp3");

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
      setIsFirstScreen("Result");
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    setSelectedIndex(null); // ✅ Reset selected button index
    setIsCorrect(null); // ✅ Reset color state
    setShowbtn(false); // ✅ Hide Next button
  };

  const handleCheck = (uValue: string, index: number) => {
    setSelectedIndex(index);
    const isAnsCorrect = uValue === SlideData[lastSlide].value;
    setIsCorrect(isAnsCorrect);
    if (isAnsCorrect) {
      setShowbtn(true);
      rightAudio.play();
    } else {
      setShowbtn(false);
    }
  };
  useEffect(()=>{
    const BtnShuffle = [...BtnData].sort(()=>Math.random()- 0.5)
    setSufffle(BtnShuffle)
  },[])
 

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[900px]">
        <h1 className="text-center text-3xl font-bold py-4 text-black">
          What quality of resilience is exercised in this situation?
        </h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px]">
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
                <div className="grid grid-cols-12 w-full">
                  <div className="col-span-6 w-full">
                    <Image
                      src={item.img}
                      width={400}
                      height={100}
                      alt="slide image"
                    />
                  </div>
                  <div className="col-span-6 w-full flex justify-center items-center gap-3 flex-col">
                    {shuffle.map((item, bIndex) => (
                      <div key={bIndex}>
                        <button
                          onClick={() => handleCheck(item.btn, bIndex)}
                          className={`
        min-w-[200px] p-1 rounded-lg text-white  cursor-pointer
        ${
          selectedIndex === bIndex
            ? isCorrect
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-violet-900"
        }
      `}
                        >
                          {item.btn}
                        </button>
                      </div>
                    ))}
                  </div>
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
              showBtn
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                showBtn ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
