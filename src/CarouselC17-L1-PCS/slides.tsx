"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/CarouselC17-L1-PCS/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function SlideStart({ setIsFirstScreen }: SlideProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [showBtn, setShowbtn] = useState(false);
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | null>(null);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [checkBtn, setCheckBtn] = useState<boolean | null>(null);
 
  const [shuffel,setShuffle]=useState(SlideData)
  
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

  useEffect(() => {
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
    setCorrectAudio(new Audio("/sound/correct.mp3"));
   setShuffle((prev)=> prev.sort(()=>Math.random() - 0.5)   )
  }, []);

  const handleChange = (swipe: SwiperClass) => {
    setCheckBtn(null);
    setShowbtn(false);
    setImageIndex(null);
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };

  const handleCheckImage = (index: number, correct: string, value: string) => {
    setCheckBtn(true);
    setImageIndex(index);
    if (correct === value) {
      // alert("dsfdsfdsf");
      setShowbtn(true);
      correctAudio?.play();
    } else {
      wrongAudio?.play();
    }
  };
  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-start p-5 gap-3">
      <div className="w-[600px]  ">
        <h1 className="text-center text-2xl font-bold py-4 text-black">
       Visual Differentiation Activity
        </h1>
        <p className="text-center">{`Carefully examine the set of four objects and try to identify the one that stands out due to differences in its characteristics.Once you've found it, circle the different object.`}</p>
        <Swiper
          className="border-2 p-2 bg-violet-100 rounded-lg min-h-[200px] "
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {shuffel.map((item,index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center flex-col gap-1 p-3 ">
                <div className="flex justify-center items-center gap-3  min-h-[250px]">
                  {item.imgs.map((i, imgIndex) => (
                    <Image
                      key={imgIndex}
                      onClick={() =>
                        handleCheckImage(imgIndex, item.correct, i.img)
                      }
                      className={`
  border border-black rounded 
  hover:cursor-pointer 
  active:scale-95 active:shadow 
  transition-all duration-300
  ${
    imageIndex === imgIndex
      ? item.correct === i.img
        ? "ring-4 ring-green-500"
        : "ring-4 ring-red-500"
      : ""
  }
`}
                      src={i.img}
                      width={100}
                      height={100}
                      alt="Pcs Image"
                    />
                  ))}
                </div>
                {checkBtn === null ? (
                  ""
                ) : checkBtn ? (
                  <button
                    onClick={() => setCheckBtn(false)}
                    className="text-white bg-violet-900 px-8 py-2 rounded-lg hover:bg-violet-950 transition-all duration-300 cursor-pointer"
                  >
                    Check
                  </button>
                ) : !checkBtn ? (
                  <div className="flex justify-center items-center gap-3  p-2 ">
                    {item.imgs.map((i, imgIndex) => (
                      <Image
                        key={imgIndex}
                        className={`
  border border-black rounded 
  ${item.correct === i.img ? " ring-4 ring-green-500" : "ring-4 ring-red-500"}
 
  
`}
                        src={i.img}
                        width={80}
                        height={80}
                        alt="Pcs Image"
                      />
                    ))}
                  </div>
                ) : (
                  ""
                )}
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
