"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carouselC17-L2-A3/sliderData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const ImageSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [timer, setTimer] = useState(0);
  const [showSugetion, setShowSugetion] = useState(false);

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
      //   setIsFirstScreen("emotionImage");
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
    setTimer(60);
  };

  useEffect(() => {
    setTimer(60);
    const intervale = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervale);
setShowSugetion(true)
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervale); // cleanup on unmount or next run
  }, [lastSlide]);

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[800px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Define it!
        </h1>

        <Swiper
          className="border-2 p-2 bg-violet-100 rounded-lg min-h-[200px] "
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
              <div className="grid grid-cols-12 gap-4 place-items-center w-full ">
                <div className="col-span-7 w-full h-[400px] relative rounded-lg overflow-hidden ">
                  <Image src={item.image} fill alt="slide image" />
                  <h3
                    className={`${
                      showSugetion ? "block" : "hidden"
                    } text-xl text-center p-3 absolute bottom-0 text-white bg-[#000000a0] w-full`}
                  >
                    {item.definition}
                  </h3>
                </div>
                <div className="col-span-5 w-full flex justify-center items-center flex-col gap-10">
                  <h3 className="text-2xl text-center text-black">
                    {item.text}
                  </h3>

                  <h4
                    className={`
                     p-1 flex justify-center items-center text-black border-2 timer border-green-400 text-3xl w-[70px] h-[70px] rounded-full relative `}
                  >
                    <span className="text-black font-bold "> {timer}</span>
                  </h4>

                  <button
                    onClick={() => setShowSugetion(true)}
                    className=" cursor-pointer px-8  py-2 bg-violet-900 text-white rounded-lg"
                  >
                    check
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
};

export default ImageSlider;
