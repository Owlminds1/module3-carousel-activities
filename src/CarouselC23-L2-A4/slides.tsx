"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/CarouselC23-L2-A4/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function SlideStart({ setIsFirstScreen }: SlideProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>();

  const [showBtn, setShowbtn] = useState(false);
  const [suggeShow, setSuggeShow] = useState(false);

  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | null>(null);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [suffeleArry, setSuffeleArry] = useState(SlideData);

  const handleNext = () => {
    if (lastSlide == SlideData.length -1) {
      setIsFirstScreen("Result");
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  
  useEffect(() => {
    const arryShuffle = [...SlideData].sort(() => Math.random() - 0.5);
    setSuffeleArry(arryShuffle);
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
    setCorrectAudio(new Audio("/sound/correct.mp3"));
  }, []);

  const handleChange = (swipe: SwiperClass) => {
    setShowbtn(false);
    setSuggeShow(false)
    setActiveIndex(null);
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };

  const handleCheck = (value: string, index: number) => {
    setActiveIndex(index);
    if (value === suffeleArry[lastSlide].value) {
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
        <h1 className="text-center text-3xl font-bold py-4 text-black">
       identify if it is assertive, passive or aggressive or passive aggressive.
        </h1>

        <Swiper
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {suffeleArry.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-12 gap-5 w-full place-items-center  border-2 p-2 bg-violet-100 rounded-lg min-h-[400px] ">
                <div className="col-span-8 w-full ">
                  <h4 className=" text-center py-5 text-black text-2xl ">
                    {item.text}
                  </h4>

                  <textarea
                    className="text-center text-xl text-black outline-black w-full rounded-lg border border-gray-500 min-h-[80px]"
                    placeholder="write here...."
                  />
                <div className="text-center w-full">
                   {
                    !suggeShow ? <button onClick={()=>setSuggeShow(true)} className="px-10 py-2 cursor-pointer bg-violet-900 text-center text-white rounded-lg">
                      Check
                    </button>
                    :
                    <p className="text-2xl text-violet-800 ">{item.sugge}</p>
                   } 
                  </div>
                 
                </div>
                <div className="col-span-4 w-full h-full flex justify-center items-center ">
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
                            
                            px-10 py-3  min-w-[220px] rounded-lg text-white cursor-pointer active:scale-90 active:shadow-md active:shadow-black transition-all duration-200`}
                      >
                        {option.opt1}
                      </button>
                    ))}
                  </div>
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
              lastSlide < SlideData.length &&
              showBtn
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                 lastSlide < SlideData.length &&
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
