"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/CarouselC18-L1-A4/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function FoodSlide({ setIsFirstScreen }: SlideProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [thumbsDownChek, setThumbsDownChek] = useState(false);
  const [thumbsDownWrong, setThumbsDownWrong] = useState(false);
  const [showBtn, setShowbtn] = useState(false);
  const [thumbsupChek, setThumbsupChek] = useState(false);
  const [thumbsupWrong, setThumbsupWrong] = useState(false);

  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | null>(null);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [suffle, setSuffle] = useState(SlideData);
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
  const suffleData = () => {
    const copyData = [...SlideData].sort(() => Math.random() - 0.5);
    setSuffle(copyData);
  };

  useEffect(() => {
    suffleData();
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
    setCorrectAudio(new Audio("/sound/correct.mp3"));
  }, []);

  const HandleYes = (val: string) => {
    if (suffle[lastSlide]?.value === val) {
      setThumbsupChek(true);
      setShowbtn(true);
      correctAudio?.play();
    } else {
      setThumbsupWrong(true);
      setTimeout(() => {
        setThumbsupWrong(false);
      }, 800);
      wrongAudio?.play();
      //   setThumbsupWrong(false);
    }
  };

  const handleNo = (val: string) => {
    if (suffle[lastSlide]?.value === val) {
      setThumbsDownChek(true);
      setShowbtn(true);

      correctAudio?.play();
    } else {
      setThumbsDownWrong(true);
      setTimeout(() => {
        setThumbsDownWrong(false);
      }, 800);
      wrongAudio?.play();
    }
  };

  const handleChange = (swipe: SwiperClass) => {
    setShowbtn(false);
    setThumbsupChek(false); // Reset color after slide change
    setThumbsDownChek(false);

    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[600px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Green light, Red light{" "}
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
          {suffle.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="min-h-[200px] flex justify-center items-center flex-col">
                <h1 className=" text-center py-5 text-black text-3xl   ">
                  {item.text}
                </h1>
                <Image
                  src={item.imgs}
                  width={300}
                  height={100}
                  alt="VOCABULARY images"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-5 flex items-center justify-center gap-35  text-black">
            <div
              onClick={() => handleNo("Healthy")}
              className={`border cursor-pointer text-white border-black rounded-lg p-3 min-w-[150px] h-[60px] flex items-center justify-center shadow shadow-[#000000b9] hover:scale-90
                ${thumbsDownChek ? "bg-green-600" : ""}
                ${thumbsDownWrong ? "bg-red-600" : ""}
                ${!thumbsDownChek && !thumbsDownWrong ? "bg-violet-800" : ""}`}
            >
              <h3 className="text-md font-bold  cursor-pointer ">Healthy</h3>
            </div>
            <div
              onClick={() => HandleYes("Unhealthy")}
              className={` cursor-pointer border text-white border-black rounded-lg p-3 min-w-[150px] h-[60px] flex items-center justify-center shadow shadow-[#000000b9] hover:scale-90 ${
                thumbsupChek ? "bg-green-800 " : ""
              } ${thumbsupWrong ? "bg-red-800" : ""}
              ${!thumbsupChek && !thumbsupWrong ? "bg-violet-800" : ""}
              `}
            >
              <h3 className="text-md font-bold cursor-pointer  ">Unhealthy</h3>
            </div>
          </div>
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
