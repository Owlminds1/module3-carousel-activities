"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SLideData from "@/carouselC20-L3-A0/slideData.json";
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const Unscramble = ({ setIsFirstScreen }: myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [showBtn, setShowbtn] = useState(false);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement>();
  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement>();
  const [userVal, setUserVal] = useState("");
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
    setUserVal("");

    setShowbtn(false);
  };

  const handleCheck = (value: string) => {
   const  lowrCaseUserVal = userVal.toLowerCase()
    if (lowrCaseUserVal === value) {
      setShowbtn(true);

      correctAudio?.play();
    } else {
      wrongAudio?.play();
    }
  };
  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h4 className="text-center text-4xl font-bold py-4 text-black">
          Unscramble
        </h4>
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
                <div className="grid grid-cols-12 place-items-center gap-2 w-full h-full">
                  <div className="col-span-6 bg-violet-800 w-full min-h-[200px] rounded-lg  flex justify-center items-center flex-col ">
                    <h4 className="text-white text-center text-6xl ">
                      {item.qustion}
                    </h4>
                  </div>
                  <div className="col-span-6 flex justify-center items-center flex-col gap-5 w-full ">
                    <input
                      value={userVal}
                      onChange={(e) => setUserVal(e.target.value)}
                      type="text"
                      className="border-b text-3xl  text-center border-black outline-none "
                      placeholder="write the correct word"
                    />
                    <button
                      className="cursor-pointer  bg-violet-900 text-xl text-white px-8 py-2 rounded-lg "
                      onClick={() => handleCheck(item.value)}
                    >
                      Check
                    </button>
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

export default Unscramble;
