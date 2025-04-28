"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SLideData from "@/carouselC20-L2-A1/slideData.json"
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const QustionSlide = ({ setIsFirstScreen }: myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [showBtn, setShowbtn] = useState(false);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement>();
  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement>();
  useEffect(() => {
    setCorrectAudio(new Audio("/sound/correct.mp3"));
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
  }, []);
  const handleNext = () => {
    swiperRef.current?.slideNext();
    if (lastSlide == SLideData.length - 1) {
      setIsFirstScreen("Result");
    }
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setSelectedAnswerIndex(null);
    setIsAnswerCorrect(true);
    setShowbtn(false);
  };

  const handleCheck = (userValue: string, index: number) => {
    setSelectedAnswerIndex(index);
    if (SLideData[lastSlide].value === userValue) {
      setShowbtn(true);
      setIsAnswerCorrect(true);
      correctAudio?.play();
    } else {
      setIsAnswerCorrect(false);
      wrongAudio?.play();
    }
  };
  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[900px]">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
        Learn about Global Warming.
        </h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[300px]">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {SLideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 place-items-center gap-10 w-full">
                  <div className="col-span-12 flex justify-center items-center flex-col ">
                    <h1 className="text-black text-center text-xl ">
                      {item.qustion}
                    </h1>
                   
                  </div>

                  <div className="col-span-12 flex justify-center gap-2 w-full items-center flex-col">
      
{item.options.map((item,index)=>(
  <span key={index} onClick={()=>handleCheck(item.correct,index)} className={`${selectedAnswerIndex  == index ? isAnswerCorrect ? "bg-green-500":"bg-red-500" :"bg-violet-900"} min-w-[850px] text-center text-white p-2 rounded-lg text-lg cursor-pointer hover:border-2 hover:border-white  `}>{item.option}</span>
))}
    
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
              lastSlide < SLideData.length && showBtn
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < SLideData.length && showBtn ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QustionSlide;
