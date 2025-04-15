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
  const totalSlides = FindObjData.length;

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    //  setIsFirstScreen("result");
    setConfetti(false);
    setInputText("");
    setShowBtn(false);
    SetWrongAns(false);
  };

  const handleCheck = () => {
    const currentItem = FindObjData[lastSlide]; // ✅ Get data of current slide
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
        setInputText(""); // ✅ Reset input
      }, 3000);
    }
  };
  

  return (
    <div className="bg-white min-h-screen flex p-3  flex-col items-center justify-center gap-3">
      <div className="w-[900px]  ">
        <h1 className="text-center text-3xl font-bold py-4 text-black">
          Find Objects And Answer Questions
        </h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px] ">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {FindObjData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center flex-col  gap-4 place-items-center w-full">
                  <div className=" w-[800px] h-[500px] relative rounded-lg overflow-hidden ">
                    <Image src={item.image} fill alt="slide image" />
                  </div>
                  <div className=" ">
                    <div className="flex justify-center items-center gap-10 flex-col">
                      <h4 className="text-black text-3xl  text-center">
                        {item.text}
                      </h4>
                      <p
                        className={`${
                          wrongAns ? "block" : "hidden"
                        } text-red-500  text-3xl `}
                      >
                        Wrong Answer{" "}
                      </p>
                      <textarea
                        className={`text-black text-2xl outline-none border-1 rounded-lg text-center w-full min-h-[100px] border-black  placeholder:text-lg placeholder:capitalize focus ${
                          wrongAns ? "placeholder:text-red-500 bg-red-400" : ""
                        }`}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="write your answer"
                      />
                      <button
  onClick={handleCheck} // ✅ no argument
  className="bg-violet-800 cursor-pointer text-white px-8 py-1 rounded-lg"
>
  check
</button>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* =================== bonuseSlide ================= */}

            <Confetti
              width={width}
              height={height}
              className={` w-full h-full ${confetti ? "block" : "hidden"}`}
            />
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
              lastSlide < totalSlides - 1 && showBtn ? "block" : "hidden"
            } 
             border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                
             hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`
              
              text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
