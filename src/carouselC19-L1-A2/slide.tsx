"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carouselC19-L1-A2/slideData.json";
import ansData from "@/carouselC19-L1-A2/answerData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function Slide({ setIsFirstScreen }: SlideProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement>();
  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement>();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const [showBtn, setShowbtn] = useState(false);
  const [shuffle,setShuffle]=useState(ansData)

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

  // setCorrectAudio();
  useEffect(() => {
    setCorrectAudio(new Audio("/sound/correct.mp3"));
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
    setShuffle((prev)=>prev.sort(()=>Math.random() - 0.5))
  }, []);

  const handleChange = (swipe: SwiperClass) => {
    setShowbtn(false);
    setSelectedAnswerIndex(null);

    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };

  const handleCheck = (ans: string, index: number) => {
    setSelectedAnswerIndex(index);
    if (ans == SlideData[lastSlide].val) {
      setShowbtn(true);
      setIsAnswerCorrect(true);
      correctAudio?.play();
    } else {
      wrongAudio?.play();
      setIsAnswerCorrect(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[800px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
        Apply RULER
        </h1>
        <Swiper
          className="border-2 p-2 bg-violet-100 rounded-lg min-h-[300px] "
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
              <div className="grid grid-cols-12 place-items-center gap-2 w-full">
                <div className="col-span-6 relative w-full ">
                  <Image
                    src={item.img}
                    width={300}
                    height={100}
                    alt="slide image"
                  />
                 
                </div>

                <div className="col-span-6 relative w-full flex justify-center items-center gap-2 flex-col ">
                  {shuffle.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleCheck(item.val, index)}
                      className={`
                        ${
                          selectedAnswerIndex == index
                            ? isAnswerCorrect
                              ? "bg-green-500"
                              : "bg-red-500"
                            : "bg-violet-900"
                        }
                        cursor-pointer  px-8 py-2 min-w-[200px] rounded-lg text-white text-lg`}
                    >
                      {item.val}
                    </button>
                  ))}
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
              showBtn
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                showBtn ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
