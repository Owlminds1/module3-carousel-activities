"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [step2, setStep2] = useState(false);

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
    setStep2(false)
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-4xl py-4 text-black">
          Gratitude journal
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
            <SwiperSlide>
            <div className="h-full overflow-y-auto p-5 flex flex-col gap-3">
                <label
                    className="text-xl text-black font-medium"
                    htmlFor="step2"
                  >
                    What do you remember from the course so far?
                  </label>
                  <textarea
                    className="text-center text-lg text-black min-h-[100px] w-full rounded-lg outline-none border border-black mt-2"
                    id="step2"
                  />
                  <div className="text-center w-full flex justify-center items-center flex-col gap-8 mt-4">
                    {!step2 ? (
                      <button
                        onClick={() => setStep2(true)}
                        className="px-8 cursor-pointer py-2 bg-violet-900 rounded-lg text-white"
                      >
                        Show List
                      </button>
                    ) : (
                      <ul className="list-disc ml-6">
                        <li className="text-black text-xl text-left">
                          Be kind
                        </li>
                        <li className="text-black text-xl text-left">
                          Be clear
                        </li>
                        <li className="text-black text-xl text-left">
                          Think critically
                        </li>
                        <li className="text-black text-xl text-left">
                          Practice I statements for self motivation
                        </li>
                        <li className="text-black text-xl text-left">
                          Be part of the solution
                        </li>
                        <li className="text-black text-xl text-left">
                          Practice being assertive
                        </li>

                        <li className="text-black text-xl text-left">
                          Protect the planet
                        </li>
                        <li className="text-black text-xl text-left">
                          Define your goals competently and confidently
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" h-full overflow-y-auto p-5 flex flex-col gap-3">
                  <label
                    className="text-xl text-black font-medium"
                    htmlFor="step2"
                  >
                    Recall what you learnt about nonverbal cues of assertive
                    communication
                  </label>
                  <textarea
                    className="text-center text-lg text-black min-h-[100px] w-full rounded-lg outline-none border border-black mt-2"
                    id="step2"
                  />
                  <div className="text-center w-full flex justify-center items-center flex-col gap-8 mt-4">
                    {!step2 ? (
                      <button
                        onClick={() => setStep2(true)}
                        className="px-8 cursor-pointer py-2 bg-violet-900 rounded-lg text-white"
                      >
                        Show List
                      </button>
                    ) : (
                      <ul className="list-disc ml-6">
                        <li className="text-black text-xl text-left">
                          Eye contact
                        </li>
                        <li className="text-black text-xl text-left">
                          Relaxed posture{" "}
                        </li>
                        <li className="text-black text-xl text-left">
                          Calm and clear voice
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-[500px]  overflow-y-auto p-5 flex  justify-center items-center flex-col gap-9">

                {/* Step 2 */}
                
                  <label
                    className="text-4xl text-black font-medium"
                    htmlFor="step2"
                  >
                    Record the video{" "}
                  </label>
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
