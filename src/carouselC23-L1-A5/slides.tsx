"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SlideData from "@/carouselC23-L1-A5/slideData.json";
import Image from "next/image";



const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
   
      swiperRef.current?.slideNext();
   
    window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    if (lastSlide > 0) {
      swiperRef.current?.slidePrev();
    }
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[900px]">
        <h1 className="text-center text-4xl py-4 text-black">Be positive</h1>

        <div className="mt-4 bg-violet-200 p-4 rounded-lg min-h-[400px]">
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
              <div className="flex justify-center items-center flex-col  gap-4">
                <h3 className="text-3xl text-center text-black font-bold">
                  What I like about myself?
                </h3>
                <div className="grid grid-cols-12 w-full place-items-center">
                  <div className="col-span-6 w-full">
                    <Image
                      src="/C23Images/MIRROR.png"
                      className="rounded-lg"
                      width={400}
                      height={100}
                      alt="slider image"
                    />
                  </div>
                  <div className="col-span-6 w-full">
                    <p className="text-center text-2xl ">
                      <span className="font-bold">Inside the mirror</span>, draw
                      positive things about yourself. Make sure to draw as many
                      positive things as possible!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center flex-col  gap-4">
                <h3 className="text-3xl text-center text-black font-bold">
                  Here are the icons you can draw inside the mirror.
                </h3>
                <div className="grid grid-cols-12 w-full place-items-center gap-4">
                  {SlideData.map((item, index) => (
                    <div key={index} className="col-span-3 w-full ">
                      <div className="w-[150px] h-[150px] relative">
                        <Image
                          src={item.icon}
                          className="rounded-lg"
                          fill
                          alt="slider image"
                        />
                      </div>
                      <h4 className="text-2xl font-bold w-[150px] text-center  min-h-[50px]">
                        {item.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center flex-col min-h-[400px] ">
                <h3 className="text-3xl text-center text-black font-bold">
                  Complete these sentences
                </h3>
                <ul className="list-disc p-5 space-y-5 ">
                  <li className="text-3xl text-black">
                    I am happy that_________
                  </li>
                  <li className="text-3xl text-black">
                    I love that I am_________{" "}
                  </li>
                  <li className="text-3xl text-black">
                    I love myself for_________{" "}
                  </li>
                  <li className="text-3xl text-black">
                    I like that I am_________
                  </li>
                  <li className="text-3xl text-black">I love being_________</li>
                </ul>
              </div>
            </SwiperSlide>
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
              lastSlide < 2
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 2 ? "block" : "hidden"
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
