"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SLideData from "@/carouselC20-L1-A3/slideData.json";
import BtnData from "@/carouselC20-L1-A3/btnData.json";
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const ThumSlide = ({ setIsFirstScreen }: myProps) => {
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
      <div className="w-[800px]">
        <h1 className="text-center text-4xl py-4 text-black">
          How well do we know best practice to save our environment?
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
                  <div className="col-span-12 flex justify-center items-center flex-col gap-5 ">
                    <span className="text-black text-center text-4xl ">
                      {item.qustion}
                    </span>
                    <textarea
                      placeholder="what should be done instead to protect the environment"
                      className={`${
                        isAnswerCorrect == false ? "block" : "hidden"
                      }  min-w-[300px] p-2 outline-none border border-black rounded-lg text-center  placeholder:text-center `}
                    />
                  </div>

                  <div className="col-span-12 flex justify-center gap-25 w-full items-center">
                    {BtnData.map((bItnm, index) => (
                      <button
                        onClick={() => handleCheck(bItnm.btnValue, index)}
                        key={index}
                        className={`${
                          selectedAnswerIndex == index
                            ? isAnswerCorrect
                              ? "bg-green-500"
                              : "bg-red-500"
                            : "bg-violet-900"
                        } cursor-pointer  text-white p-5 rounded-full text-2xl`}
                      >
                        {bItnm.btnValue == "thumbs up" ? (
                          <FaThumbsUp />
                        ) : (
                          <FaThumbsDown />
                        )}
                      </button>
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

export default ThumSlide;
