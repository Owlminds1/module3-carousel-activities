"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import DaitData from "@/carouselC22-L2-A3/daitData.json";
import CreativeData from "@/carouselC22-L2-A3/creativeData.json";

type MyProps = {
  setIsFirstScreen: (value: string) => void;
};

const SlideStart = ({ setIsFirstScreen }: MyProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
  const [showSol, setShowSol] = useState(false);
const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});


  const handleNext = () => {
    if (lastSlide < 4) {
      swiperRef.current?.slideNext();
    } else {
      setIsFirstScreen("result");
    }
  };

  const handlePrev = () => {
    if (lastSlide > 0) {
      swiperRef.current?.slidePrev();
    }
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setShowSol(false);
  };
 const handleCheck = (userChoice: string, correctValue: string, index: number) => {
  const correct = userChoice === correctValue;
  setAnswers((prev) => ({ ...prev, [index]: correct }));
  setSelectedOptions((prev) => ({ ...prev, [index]: userChoice }));
};


  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-start items-center flex-col gap-5">
      <div className="w-[900px]">
        <h1 className="text-center text-4xl py-4 text-black">
          What routines make us resilient?
        </h1>

        <div className="mt-4 bg-violet-200 p-4 rounded-lg min-h-[100px]">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className="flex justify-center item-center flex-col gap-3">
                <h4 className="text-black text-4xl font-bold text-center ">
                  Diet
                </h4>
                <p className="text-lg text-center text-black">
                  Eating food that is rich in protein, vitamins, and minerals to
                  maintain a healthy body.
                </p>
                <h3 className="text-black text-xl font-bold text-center">
                  Spot the healthy food options
                </h3>
                <div className="flex justify-center items-center gap-2 flex-col">
                  {DaitData.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-start px-5 gap-5 items-center"
                    >
                      <div>
                        <ul className="list-disc ">
                          <li
                            className={`${
                              showSol == true
                                ? answers[index] === true
                                  ? "text-green-600"
                                  : answers[index] === false
                                  ? "text-red-600"
                                  : ""
                                : ""
                            } text-left text-xl min-w-[300px]`}
                          >
                            {item.text}
                          </li>
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleCheck("healthy", item.value, index)
                          }
                          className={`${
                           selectedOptions[index] === "healthy" ? "border-2 border-black" : ""

                          }  text-white cursor-pointer bg-violet-700 rounded-lg px-5 py-2`}
                        >
                          Healthy
                        </button>
                        <button
                          onClick={() =>
                            handleCheck("unhealthy", item.value, index)
                          }
                          className={`${
                           selectedOptions[index] === "unhealthy" ? "border-2 border-black" : ""
                          }  text-white cursor-pointer bg-violet-700 rounded-lg px-5 py-2`}
                        >
                          Unhealthy
                        </button>
                      </div>
                    </div>
                  ))}
                  {!showSol ? (
                    <button
                      className="text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer my-5"
                      onClick={() => setShowSol(true)}
                    >
                      Solution
                    </button>
                  ) : (
                    DaitData.map((item, index) => (
                      <ul key={index} className="list-disc ">
                        <li
                          className={`${
                            item.value == "healthy"
                              ? "text-green-600"
                              : "text-red-600"
                          } text-left text-xl min-w-[300px] `}
                        >
                          {item.text}
                        </li>
                      </ul>
                    ))
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center item-center min-h-[500px] flex-col gap-3">
                <h4 className="text-black text-4xl font-bold text-center ">
                  Exercise
                </h4>
                <div className="flex justify-center item-center p-2">
                  <ul className="list-disc space-y-5 ">
                    <li className="text-2xl">Running</li>
                    <li className="text-2xl">Stretching</li>
                    <li className="text-2xl">Stretching</li>
                    <li className="text-2xl">Breathing</li>
                    <li className="text-2xl">Cycling</li>
                    <li className="text-2xl">Walking</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center min-h-[500px] item-center flex-col gap-3">
                <h4 className="text-black text-4xl font-bold text-center ">
                  Sleep
                </h4>
                <div className="flex justify-center item-center p-2">
                  <ul className="list-disc space-y-5 p-5 w-2/4 ">
                    <li className="text-2xl">  Stay away from the screen at least an hour before sleep and
                  after an hour of waking up.</li>
                    <li className="text-2xl"> Sleep on time for up to 8 hours.</li>
                   
                  </ul>
                </div>
             
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center item-center flex-col gap-3">
                <h4 className="text-black text-4xl font-bold text-center ">
                  Mindful creative Activities
                </h4>
                <p className="text-lg text-center text-black">
                  Doing mindful, creative activities that build confidence and
                  give a sense of joy. Here are a few activities that build
                  resilience
                </p>
                <h3 className="text-black text-xl font-bold text-center">
                  Spot the mindful creative activities
                </h3>
                <div className="flex justify-center items-center gap-2 flex-col">
                  {CreativeData.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-start px-5 gap-5 items-center"
                    >
                      <div>
                        <ul className="list-disc ">
                          <li
                            className={`${
                              showSol == true
                                ? answers[index] === true
                                  ? "text-green-600"
                                  : answers[index] === false
                                  ? "text-red-600"
                                  : ""
                                : ""
                            } text-left text-xl min-w-[300px]`}
                          >
                            {item.text}
                          </li>
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleCheck("creative", item.value, index)
                          }
                          className={`${
                           selectedOptions[index] === "creative" ? "border-2 border-black" : ""
                          }  text-white cursor-pointer bg-violet-700 rounded-lg px-5 py-2`}
                        >
                          Creative
                        </button>
                        <button
                          onClick={() =>
                            handleCheck("creative-Not", item.value, index)
                          }
                          className={`${
                           selectedOptions[index] === "creative-Not" ? "border-2 border-black" : ""
                          }  text-white cursor-pointer bg-violet-700 rounded-lg px-5 py-2`}
                        >
                          Not Creative
                        </button>
                      </div>
                    </div>
                  ))}
                  {!showSol ? (
                    <button
                      className="text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer my-3"
                      onClick={() => setShowSol(true)}
                    >
                      Solution
                    </button>
                  ) : (
                    CreativeData.map((item, index) => (
                      <ul key={index} className="list-disc ">
                        <li
                          className={`${
                            item.value == "creative"
                              ? "text-green-600"
                              : "text-red-600"
                          } text-left text-xl min-w-[300px] `}
                        >
                          {item.text}
                        </li>
                      </ul>
                    ))
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center min-h-[500px] item-center flex-col gap-8">
                <h4 className="text-black text-4xl font-bold text-center ">
                  Motivational <br /> entertainment & Interaction
                </h4>
                <p className="text-3xl text-center text-black">
                  Motivational books, talks, films as well as conversations with
                  friends and mentors build positive mindset
                </p>
              </div>
            </SwiperSlide>
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
              lastSlide < 5
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 5 ? "block" : "hidden"
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
