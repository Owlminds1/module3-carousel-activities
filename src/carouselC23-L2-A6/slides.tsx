"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import AssertiveTalk from "@/carouselC23-L2-A6/AssertiveTalk.json";
import CategoryMenu from "./dropDwon";
import dropMenuData from "@/carouselC23-L2-A6/dropDown.json";
import { FaCircleCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Confetti from "react-confetti";


import CorrectData from "./correctData";
import { useWindowSize } from "react-use";

const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [show, setShow] = useState(false);
  const {width,height}= useWindowSize()

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide > 0) {
      swiperRef.current?.slidePrev();
    }
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setCorrect(null);
    setShow(false);
  };

  useEffect(() => {
    setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 100);
  }, [lastSlide, show]);

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-2xl py-4 text-black">
          {lastSlide == 0
            ? " Build a conversation with A-R"
            : "Negotiate what counts as polite language, timelines of class assignments, and keeping the classroom tidy."}
        </h1>

        <div className="w-full border-2 flex min-h-[400px] justify-center items-center p-2 bg-violet-100 rounded-lg">
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className="grid grid-cols-12 p-3 gap-5   min-h-[500px] w-full  h-full">
                <div className="col-span-12 w-full flex justify-center items-center">
                  <Image
                    src="/C23Images/class-rules.png"
                    width={400}
                    height={100}
                    className="object-contain"
                    alt="slide Image"
                  />
                </div>
              </div>
            </SwiperSlide>
            {AssertiveTalk.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col gap-5  p-3 rounded-lg">
                  
                  <div className=" w-full relative ">
                    <CategoryMenu
                      dropMenuData={dropMenuData}
                      onSelect={(selected) => {
                        if (selected === item.title) {
                          setCorrect(true);
                        } else {
                          setCorrect(false);
                        }
                      }}
                    />
                 {correct === true ? (
  <FaCircleCheck className="absolute top-0 right-0 text-3xl" />
) : correct === false ? (
  <div className="absolute top-0 right-0 bg-black rounded-full w-8 h-8 p-1 flex justify-center items-center">
    <RxCross2 className="text-xl text-white font-bold" />
  </div>
) : null}


                  </div>
                  <div>
                    {item.Assertive.map((dialogue, index) => (
                      <div
                        key={index}
                        className={`grid grid-cols-12 w-full ${
                          dialogue.name === "Luna"
                            ? "place-items-start bg-gray-200"
                            : "place-items-end bg-gray-300"
                        } py-2 px-3 mb-3 rounded-md`}
                      >
                        {dialogue.name === "Luna" ? (
                          <div className="col-span-6">
                            <h4 className="font-semibold text-black">
                              {dialogue.name}:
                            </h4>
                            <p className="text-black">{dialogue.talk}</p>
                          </div>
                        ) : (
                          <div className="col-span-6 col-start-7">
                            <h4 className="font-semibold text-left text-black">
                              {dialogue.name}:
                            </h4>
                            <p className="text-black text-left">
                              {dialogue.talk}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <hr />
                  <div className="">
                    {show ? (
                      <CorrectData />
                    ) : (
                      <div className="w-full text-center">
                        <button
                          onClick={() => setShow(true)}
                          className="text-white cursor-pointer bg-violet-900 px-8 py-2 rounded-lg"
                        >
                          Check
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {correct ? <Confetti width={width} height={height}/> :"" }
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
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
              lastSlide < AssertiveTalk.length
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < AssertiveTalk.length ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideStart;
