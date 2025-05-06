"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SlideData from "@/carouselC24-L1-A2/slideData.json";

type MyProps = {
  setIsFirstScreen: (value: string) => void;
};

const SlideStart = ({ setIsFirstScreen }: MyProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [show, setShow] = useState(false);
    const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(
      null
    );

     useEffect(() => {
      
        setCorrectAudio(new Audio("/sound/correct.mp3"));
      }, []);

  const handleNext = () => {
    if (lastSlide < SlideData.length) {
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
    setShow(false);
  };

  const handleCheck = (val: string, index: number) => {
    if (val === SlideData[index].val) {
      setShow(true);
      correctAudio?.play()
    }
  };
  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[950px]">
        <h1 className="text-center text-2xl py-4 text-black">
          {lastSlide == 0
            ? "Assertive and Resilience"
            : "Read the sentences and identify if it represents assertiveness or resilience"}
        </h1>

        <div className="mt-4 bg-violet-200 p-4 rounded-lg min-h-[100px]">
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
              <div className="flex justify-center items-center min-h-[400px] flex-col gap-8">
                <h4 className="text-3xl text-center text-black">
                  Recall what we learned about being assertive and resilient
                </h4>

                {!show ? (
                  <button
                    onClick={() => setShow(true)}
                    className="text-white bg-violet-900 cursor-pointer   px-5 py-2 rounded-lg"
                  >
                    Click me{" "}
                  </button>
                ) : (
                  <p className="text-center font-bold text-black text-2xl">
                    Assertive is when we tell others what we want in a confident
                    and polite way. We are resilient when we stay positive
                    before and after facing challenges to come out stronger.
                  </p>
                )}
              </div>
            </SwiperSlide>

            {SlideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center min-h-[400px] flex-col gap-8">
                  <h4 className="text-3xl text-center text-black">
                    {item.text}
                  </h4>
                  <div className="flex justify-center items-center gap-8">
                    <button
                      onClick={() => handleCheck("R", index)}
                      style={{
                        color: item.btnBgFirst,
                        border: `2px solid ${item.btnBgFirst}`,
                      }}
                      className=" cursor-pointer  px-5 py-2 rounded-lg text-lg   focus:scale-110 focus:shadow-md focus:shadow-black"
                    >
                      Resilience
                    </button>

                    <button
                      onClick={() => handleCheck("A", index)}
                      style={{
                        color: item.btnBgSec,
                        border: `2px solid ${item.btnBgSec}`,
                      }}
                      className="border cursor-pointer  px-5 py-2 rounded-lg text-lg  focus:scale-110 focus:shadow-md focus:shadow-black "
                    >
                      Assertive
                    </button>
                  </div>
                </div>
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
              lastSlide < SlideData.length + 1 && show
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length + 1 && show ? "block" : "hidden"
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
