"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SlideData from "@/carouselC23-L1-A4/slideData.json";
import btn from "@/carouselC23-L1-A4/btn.json";

const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [reactionState, setReactionState] = useState<
    { btnIndex: number; isCorrect: boolean }[]
  >([]);

  const [firstSugg, setFirstSugg] = useState(false);
  const [secSugg, setSectSugg] = useState(false);
  const [thirdtSugg, setThirdSugg] = useState(false);
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

  // ✅ Safely get Reaction length
  const reactionLength =
    SlideData[swiper.activeIndex]?.Reaction?.length ?? 0;

  const resetState = Array(reactionLength).fill({
    btnIndex: -1,
    isCorrect: false,
  });

  setReactionState(resetState);
};


  const handleCheck = (
    btnValue: string,
    ans: string,
    rindex: number,
    bIndex: number
  ) => {
    const newState = [...reactionState];
    newState[rindex] = {
      btnIndex: bIndex,
      isCorrect: btnValue === ans,
    };
    setReactionState(newState);
  };

  const handleAssertive = () => {
    setFirstSugg(true);
      setThirdSugg(false)
         setSectSugg(false);
  };
  const handlePassive = () => {
    setSectSugg(true);
    setFirstSugg(false);
      setThirdSugg(false)
  };
  const handleAggressive = () => {
    setThirdSugg(true);
      setSectSugg(false);
    setFirstSugg(false);
  };
  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[980px]">
        <h1 className="text-center text-2xl py-4 text-black">
          Read the scenarios and three different reactions to it. Decide which
          reactions are assertive, aggressive, or passive
        </h1>

        <div className="w-full border-2 flex min-h-[400px] justify-center items-center p-2 bg-violet-100 rounded-lg">
          <Swiper
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
                <div className="grid grid-cols-12 ">
                  <div className="col-span-12 w-full">
                    <h3 className="text-center font-bold text-2xl ">
                      Scenario {index + 1}
                    </h3>
                    <h3 className="text-xl text-center font-medium my-5 ">
                      {item.qustion}
                    </h3>
                    <div>
                      {item.Reaction.map((rItem, rindex) => (
                        <div
                          key={rindex}
                          className="grid grid-cols-12 mt-2  min-h-[100px] w-full place-items-center  border border-black  rounded-lg p-1 "
                        >
                          <div className="col-span-8 w-full flex flex-col gap-3  ">
                            <h4 className="text-xl  min-h-[60px] ">
                              <span className="font-bold">
                                Reaction {rindex + 1} :
                              </span>
                              {rItem.text}
                            </h4>
                          </div>
                          <div className="col-span-4 w-full flex justify-center items-center gap-1 ">
                            {btn.map((btn, bIndex) => {
                              const current = reactionState[rindex];
                              const isSelected = current?.btnIndex === bIndex;
                              const isCorrect = current?.isCorrect;
                              return (
                                <button
                                  onClick={() =>
                                    handleCheck(
                                      btn.btn,
                                      item.Reaction[rindex].val,
                                      rindex,
                                      bIndex
                                    )
                                  }
                                  key={bIndex}
                                  className={`text-white px-3 py-2 rounded-lg cursor-pointer active:scale-95 active:shadow-md min-w-[100px] active:shadow-black
  ${
    isSelected ? (isCorrect ? "bg-green-400" : "bg-red-400") : "bg-violet-800"
  }`}
                                >
                                  {btn.btn}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="w-full flex justify-start items-center flex-col gap-5">
                <div>
                  <h3 className="text-center font-bold text-2xl ">
                    Scenario 3
                  </h3>
                  <h3 className="text-xl text-center font-medium my-5 ">
                    Let’s listen to this situation and put each piece of
                    dialogue in the correct place.
                  </h3>
                </div>

                <div className="w-full p-2 flex justify-center items-center flex-col  gap-2">
                  <h4 className="text-xl  min-h-[30px] ">
                    You don’t want to participate in sports.
                  </h4>

                  <textarea
                    className="min-h-[80px] w-[500px] text-center text-lg rounded-lg border border-gray-500 outline-black"
                    placeholder="write here..."
                  />
                  <div className="flex gap-5 w-full justify-center items-center ">
                    <button
                      className="focus:border focus:border-white cursor-pointer focus:scale-105 focus:shadow-md focus:shadow-black bg-violet-900 px-8 py-2 rounded-lg text-white "
                      onClick={handleAssertive}
                    >
                      Assertive
                    </button>
                    <button
                      className="focus:border focus:border-white cursor-pointer focus:scale-105 focus:shadow-md focus:shadow-black bg-violet-900 px-8 py-2 rounded-lg text-white "
                      onClick={handlePassive}
                    >
                      Passive{" "}
                    </button>
                    <button
                      className="focus:border focus:border-white cursor-pointer focus:scale-105 focus:shadow-md focus:shadow-black bg-violet-900 px-8 py-2 rounded-lg text-white "
                      onClick={handleAggressive}
                    >
                      Aggressive{" "}
                    </button>
                  </div>
                  {firstSugg ? (
                    <p className="text-xl font-bold text-violet-800 py-5 w-[600px] text-center">
                      I believe I should focus on other things at the moment.
                      Sports is not a priority for me right now.
                    </p>
                  ) : (
                    ""
                  )}

                  {secSugg ? <p className="text-xl font-bold text-violet-800 py-5 w-[600px] text-center">I guess I can play. But I’m not sure.</p> : ""}

                  {thirdtSugg ? (
                    <p className="text-xl font-bold text-violet-800 py-5 w-[600px] text-center">Leave me alone! I don’t want to play!</p>
                  ) : (
                    ""
                  )}
                </div>
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
              lastSlide < 2
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 2 ? "block" : "hidden"
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
