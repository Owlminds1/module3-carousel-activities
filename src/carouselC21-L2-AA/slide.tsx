"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import QustionData from "@/carouselC21-L2-AA/qustion.json";

export default function Slide() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);
  const handleNext = () => {
    if (lastSlide >= QustionData.length - 1) {
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
      <div className="w-[900px]">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Decode Nonverbal communication
        </h1>
        <div className=" border-2 p-2  bg-violet-100 rounded-lg ">
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
              <div className=" w-full  min-h-[450px] flex justify-center items-center flex-col">
                <video
                  src="/C21Images/withOutSound.mp4"
                  autoPlay
                  muted
                  playsInline
                  className=" w-[700px] object-center rounded-lg shadow-lg"
                />
              </div>
            </SwiperSlide>
            {QustionData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="  min-h-[400px] p-5 flex justify-center items-center flex-col gap-5">
                  <h4 className="text-4xl text-center  text-black">
                    {item.qustion}
                  </h4>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="  min-h-[300px] p-5 flex justify-center items-center flex-col gap-5">
                <video
                  ref={videoRef}
                  src="/C21Images/ytVdo.mp4"
                  controls
                  autoPlay
                  className=" w-[700px] rounded-lg shadow-lg"
                />
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
              lastSlide < QustionData.length + 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < QustionData.length + 1 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
