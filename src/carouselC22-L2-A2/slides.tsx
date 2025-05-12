"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SlideData from "@/carouselC22-L2-A2/slideData.json";
import Image from "next/image";

type MyProps = {
  setIsFirstScreen: (value: string) => void;
};

const SlideStart = ({ setIsFirstScreen }: MyProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [showImg,setShowImg] =useState(false)

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
    setShowImg(false)
  };

  const handleShow = () => {
    setShowImg(true)
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-4xl py-4 text-black">
        Get Inspired by nature
        </h1>

        <div className="mt-4 bg-violet-200  rounded-lg min-h-[100px]">
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
                {
                  !showImg  ? 
                 <div className="flex justify-center items-center gap-8 p-4 flex-col ">
                  <h4 className="text-2xl text-center text-black">{item.text}</h4>
                <button
                  onClick={handleShow}
                  className="text-white bg-violet-900 px-8 py-2 cursor-pointer hover:bg-violet-950 rounded-lg text-lg"
                >
                  Show Creature
                </button>
                 </div>
                  :
                <div className="flex justify-center p-3 items-center flex-col gap-8 w-full min-h-[400px]">
                  <h4 className="text-4xl text-black font-bold ">{item.name}</h4>
                  <Image className="rounded-lg shadow-xl shadow-black" src={item.img} width={420} height={100} alt="creatior Img"/>
                </div>
                }
              </SwiperSlide>
            ))}
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
              lastSlide < SlideData.length  && showImg 
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length  && showImg ? "block" : "hidden"
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
