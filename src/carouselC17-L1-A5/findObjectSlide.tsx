"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FindObjData from "@/carouselC17-L1-A5/findObjData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});



export default function FindObjectSlide() {
  const { width, height } = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");
  const [confetti, setConfetti] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [wrongAns, SetWrongAns] = useState(false);

  const bonusQuestions = [
    "What happens if we eat apples? What happens if we don’t eat apples?",
    "What happens if we don’t use a notebook in school?",
    "What happens when we protect butterflies?",
    "What happens if we water a seed?",
  ];

  const totalSlides = FindObjData.length + bonusQuestions.length;
  const isBonusSlide = lastSlide >= FindObjData.length;

  const handleNext = () => {
    swiperRef.current?.slideNext();
    // if (lastSlide === totalSlides - 1) {
    //   setIsFirstScreen("result");
    // }
  };

  const handlePerv = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    const newIndex = swipe.activeIndex;
    setLastSlide(newIndex);

    if (newIndex >= FindObjData.length) {
      setShowBtn(true); // Bonus slides: show Next
    } else {
      setConfetti(false);
      setInputText("");
      setShowBtn(false);
      SetWrongAns(false);
    }
  };

  const handleCheck = () => {
    const currentItem = FindObjData[lastSlide];
    const correctText = currentItem.arry;

    const userAnswer = inputText.trim().toLowerCase().split(/[\s,]+/);
    const correctAnswer = correctText.map((item) => item.toLowerCase());
    const sortCorrectAns = [...correctAnswer].sort();
    const sortUserAns = [...userAnswer].sort();

    const isEqual =
      sortCorrectAns.length === sortUserAns.length &&
      sortUserAns.every((item, index) => item === sortCorrectAns[index]);

    if (isEqual) {
      setConfetti(true);
      setShowBtn(true);
    } else {
      SetWrongAns(true);
      setTimeout(() => {
        SetWrongAns(false);
        setInputText("");
      }, 3000);
    }
  };

  return (
    <div className="bg-white min-h-screen flex px-5 flex-col items-center justify-center gap-3">
      <h1 className="text-center text-3xl font-bold text-black">
        Find Objects And Answer Questions
      </h1>
      <div className="w-[1000px]">
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
            {/* Normal Slides */}
            {FindObjData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 gap-4 place-items-center w-full">
                  <div className="col-span-9 w-full h-[500px] relative rounded-lg overflow-hidden">
                    <Image src={item.image} fill className="" alt="slide image" />
                  </div>
                  <div className="col-span-3 w-full flex justify-center items-center gap-10 flex-col">
                    <h4 className="text-black text-2xl text-center">{item.text}</h4>
                    <p
                      className={`${
                        wrongAns ? "block" : "hidden"
                      } text-red-500 text-3xl`}
                    >
                      Wrong Answer
                    </p>
                    <textarea
                      className={`text-black text-2xl outline-none border-1 rounded-lg text-center w-full min-h-[100px] border-black placeholder:text-lg placeholder:capitalize ${
                        wrongAns ? "placeholder:text-red-500 bg-red-400" : ""
                      }`}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="write your answer"
                    />
                    <button
                      onClick={handleCheck}
                      className="bg-violet-800 cursor-pointer text-white px-8 py-1 rounded-lg"
                    >
                      Check
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Bonus Slides */}
            {bonusQuestions.map((question, index) => (
              <SwiperSlide key={`bonus-${index}`}>
                <div className="min-h-[400px] flex justify-center items-center">
                  <h4 className="text-3xl font-semibold text-black text-center">
                    {question}
                  </h4>
                </div>
              </SwiperSlide>
            ))}

            {/* Confetti only on normal correct slides */}
            <Confetti
              width={width}
              height={height}
              className={`w-full h-full ${confetti && !isBonusSlide ? "block" : "hidden"}`}
            />
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-center gap-15 items-center mt-5">
          {/* Prev Button */}
          {lastSlide > 0 && (
            <div className="border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90">
              <FaArrowLeft
                className="text-[40px] cursor-pointer text-black"
                onClick={handlePerv}
              />
            </div>
          )}

          {/* Next Button (always shown for bonus, shown on correct for normal) */}
          {(isBonusSlide || showBtn) && lastSlide < totalSlides - 1 && (
            <div className="border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90">
              <FaArrowRight
                className="text-[40px] cursor-pointer text-black"
                onClick={handleNext}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
