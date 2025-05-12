"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/CarouselC23-L2-A5/slideData.json";
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
  const [isCorrect, setIsCorrect] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>();

  const [showBtn, setShowbtn] = useState(false);

  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | null>(null);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(
    null
  );

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

  useEffect(() => {
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
    setCorrectAudio(new Audio("/sound/correct.mp3"));
  }, []);

  const handleChange = (swipe: SwiperClass) => {

      setShowbtn(false);

    setActiveIndex(null);
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };

  const handleCheck = (value: string, index: number) => {
    setActiveIndex(index);
    const currentIndex = swiperRef.current?.activeIndex ?? 0;
    if (value === SlideData[currentIndex].value) {
      setIsCorrect(true);
      setShowbtn(true);
      correctAudio?.play();
    } else {
      setIsCorrect(false);
      wrongAudio?.play();
    }
  };
  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[900px]  ">
        <h1 className="text-center text-2xl font-bold py-4 text-black">
          Note the non-verbal communication and state if it shows assertive
          behavior or passive or aggressive behavior.
        </h1>
        <div className=" border-2 p-2 bg-violet-100 rounded-lg min-h-[200px] ">
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
                <div className="grid grid-cols-12 w-full place-items-center gap-2">
                  <div className="col-span-6 flex justify-center items-center flex-col gap-2">
                    <div className="w-[350px] h-[350px] relative rounded-lg over">
                      <Image
                        src={item.img}
                        fill
                        alt="slide img"
                        className=" object-contain"
                      />
                    </div>
                   
                  </div>

                  <div className="col-span-6  min-h-[300px] flex justify-center items-center flex-col ">
                    <h4 className=" text-center py-5 text-black text-4xl ">
                      {item.text}
                    </h4>
                    <div className="flex justify-center items-center flex-col gap-6">
                      {item.ans.map((option, index) => (
                        <button
                          onClick={() => handleCheck(option.opt1, index)}
                          key={index}
                          className={`
                                       ${
                                         activeIndex == index
                                           ? isCorrect == true
                                             ? "bg-green-700"
                                             : "bg-red-500"
                                           : "bg-violet-900"
                                       }
                                       
                                        min-w-[180px] px-10 py-3  rounded-lg text-white cursor-pointer active:scale-90 active:shadow-md active:shadow-black transition-all duration-200`}
                        >
                          {option.opt1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className=" py-5 flex items-center justify-center gap-35  text-black"></div>
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
              lastSlide < SlideData.length && showBtn
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length && showBtn ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
