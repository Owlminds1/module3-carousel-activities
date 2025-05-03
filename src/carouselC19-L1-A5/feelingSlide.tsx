"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import slideData from "@/carouselC19-L1-A5/slideData.json";
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const FeelingSlide = ({ setIsFirstScreen }: myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(
    new Array(slideData.length).fill("")
  ); // Track user answers
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean[]>(
    new Array(slideData.length).fill(false)
  ); // Track if the answer is correct for each slide

  const [shuffle,setSufffle]=useState<typeof slideData>([])
  const rightAudio = new Audio("/sound/correct.mp3");
  const handleNext = () => {
    if (isAnswerCorrect[lastSlide]) {
      swiperRef.current?.slideNext();
    }
    if (lastSlide >= slideData.length - 1) {
      setIsFirstScreen("Result");
    }
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };

  const handleCheck = (
    selectedAnswer: string,
    correctAnswer: string,
    index: number
  ) => {
    // Update the user's answer
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = selectedAnswer;
      return newAnswers;
    });

    // Check if the answer is correct and update the state accordingly
    if (selectedAnswer === correctAnswer) {
      rightAudio?.play();
      setIsAnswerCorrect((prev) => {
        const newAnswerCorrect = [...prev];
        newAnswerCorrect[index] = true; // Mark as correct
        return newAnswerCorrect;
      });
    } else {
      setIsAnswerCorrect((prev) => {
        const newAnswerCorrect = [...prev];
        newAnswerCorrect[index] = false; // Mark as incorrect
        return newAnswerCorrect;
      });
    }
  };
  useEffect(()=>{
    const arryShuffle = [...slideData].sort(()=>Math.random() - 0.5) 
  setSufffle(arryShuffle)
  },
[])

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          How do you feel
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
            {shuffle.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full">
                  <div className="col-span-6 w-full">
                    <Image
                      src={item.image}
                      width={400}
                      height={100}
                      alt="slide image"
                    />
                  </div>
                  <div className="col-span-6 w-full flex justify-center items-center gap-5 flex-col">
                    <div>
                      <h4 className="text-black text-2xl text-center min-h-[100px]">
                        {item.qustion}
                      </h4>
                      <div className="flex w-full justify-around items-center gap-2">
                        <button
                          onClick={() => handleCheck("red", item.value, index)}
                          className={`${
                            userAnswers[index] === "red"
                              ? item.value === "red"
                                ? "bg-green-500 border-2 border-black"
                                : "bg-red-500"
                              : "bg-red-400"
                          } text-white cursor-pointer px-5 py-2 rounded-lg`}
                          disabled={isAnswerCorrect[index] !== false}
                        >
                          Red
                        </button>
                        <button
                          onClick={() =>
                            handleCheck("yellow", item.value, index)
                          }
                          className={`${
                            userAnswers[index] === "yellow"
                              ? item.value === "yellow"
                                ? "bg-green-500 border-2 border-black"
                                : "bg-red-500"
                              : "bg-yellow-400"
                          } text-white cursor-pointer px-5 py-2 rounded-lg`}
                          disabled={isAnswerCorrect[index] !== false}
                        >
                          Yellow
                        </button>
                        <button
                          onClick={() => handleCheck("blue", item.value, index)}
                          className={`${
                            userAnswers[index] === "blue"
                              ? item.value === "blue"
                                ? "bg-green-500 border-2 border-black"
                                : "bg-red-500"
                              : "bg-blue-500"
                          } text-white cursor-pointer px-5 py-2 rounded-lg`}
                          disabled={isAnswerCorrect[index] !== false}
                        >
                          Blue
                        </button>
                        <button
                          onClick={() => handleCheck("dull", item.value, index)}
                          className={`${
                            userAnswers[index] === "dull"
                              ? item.value === "dull"
                                ? "bg-green-500 border-2 border-black"
                                : "bg-red-500"
                              : "bg-slate-500"
                          } text-white cursor-pointer px-5 py-2 rounded-lg`}
                          disabled={isAnswerCorrect[index] !== false}
                        >
                          Dull
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex justify-between items-center mt-5">
          <div
            className={`${
              lastSlide > 0 && isAnswerCorrect[lastSlide]
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowLeft
              className={`${
                lastSlide > 0 && isAnswerCorrect[lastSlide] ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handlePrev}
            />
          </div>

          <div
            className={`${
              lastSlide < slideData.length && isAnswerCorrect[lastSlide]
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < slideData.length && isAnswerCorrect[lastSlide]
                  ? "block"
                  : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelingSlide;
