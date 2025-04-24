"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import slideData from "@/carouselC19-L2-A1/slideData.json";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
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
      <div className="w-[800px]">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          {lastSlide == 0
            ? "Benefits of happiness"
            : lastSlide == 4
            ? " How does it benefit oneself and others?"
            : "   What do happy people do?"}
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
            <SwiperSlide>
              <div className="min-h-[250px] flex justify-center items-center">
                <h4 className="text-black text-center text-3xl ">
                  Acts of kindness and empathy can help us become kinder and
                  happier.{" "}
                </h4>
              </div>
            </SwiperSlide>

            {slideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 place-items-center gap-5 w-full ">
                  <div className="col-span-6 w-full">
                    <h5 className="text-black text-2xl text-center ">
                      {item.text}
                    </h5>
                  </div>
                  <div className="col-span-6 relative  w-full h-[300px] ">
                    <Image
                      src={item.image}
                      fill
                      className="object-contain"
                      alt="slider image"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="min-h-[250px] flex justify-center items-center">
                <ul className="text-black list-disc p-5 space-y-4 w-[650px] ">
                  <li className="text-black text-2xl  ">
                    Acts of kindness makes oneself feel good and reduces stress.
                  </li>
                  <li className="text-black text-2xl  ">
                    It has a ripple effect as the happiness spreads positive
                    energy around them, making others happy.
                  </li>
                  <li className="text-black text-2xl  ">
                    Being kind makes us emotionally strong and healthy.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
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
              lastSlide < 4
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 4 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
