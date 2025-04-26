"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SLideData from "@/carouselC20-L1-A1/slideData.json";
type myProps ={
    setIsFirstScreen:(value:string)=>void
}
const QustionSlide = ({setIsFirstScreen}:myProps) => {
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
    if(lastSlide == SLideData.length-1){
        setIsFirstScreen("Result")
    }
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setSelectedAnswerIndex(null);
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
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Safety
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
                <div className="grid grid-cols-12 w-full place-items-center gap-8 p-5">
                  <div className="col-span-12  w-full flex justify-center items-center">
                    <h1 className="text-xl text-black text-center ">
                      {item.qustion}
                    </h1>
                  </div>
                  <div className="col-span-12 flex justify-center gap-10 items-center  w-full ">
                    {item.button.map((btn, bIndex) => (
                      <button
                        key={bIndex}
                        className={` ${
                          selectedAnswerIndex == bIndex
                            ? isAnswerCorrect
                              ? "bg-green-500"
                              : "bg-red-500"
                            : "bg-violet-900"
                        } text-2xl text-center  text-white px-8 py-2 cursor-pointer rounded-lg `}
                        onClick={() => handleCheck(btn.btnName, bIndex)}
                      >
                        {btn.btnName}
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
              lastSlide < SLideData.length  && showBtn
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < SLideData.length  && showBtn ? "block" : "hidden"
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
