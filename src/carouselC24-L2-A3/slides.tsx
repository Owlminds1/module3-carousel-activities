"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import VideoRecorder from "./recourdVedio";



const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [show, setShow] = useState(false);

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
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-4xl py-4 text-black">
          Story of Resilience
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
              <div className="flex flex-col min-h-[400px] justify-center items-center gap-5 w-full">
                <h3 className="font-bold text-3xl text-black text-center">
                  How did she engage the audience?
                </h3>

                {!show ? (
                  <button
                    onClick={() => setShow(true)}
                    className="bg-violet-900 px-10 py-2 rounded-lg text-white cursor-pointer "
                  >
                    Check
                  </button>
                ) : (
                  <div className="w-full flex justify-center items-center px-5">
                    <ul className="list-disc space-y-2 w-[600px] p-3">
                      <li className="text-black text-lg ">
                        Bringing a baby with his dad.
                      </li>
                      <li className="text-black text-lg ">
                        Sharing anecdotes about the upbringing.
                      </li>
                      <li className="text-black text-lg ">
                        Sharing what kids like.
                      </li>
                      <li className="text-black text-lg ">
                        Sharing what kids don’t like.
                      </li>
                      <li className="text-black text-lg ">
                        Sharing the importance of actions such as connecting,
                        talking, and playing.
                      </li>
                      <li className="text-black text-lg ">
                        Impact of those actions.
                      </li>
                      <li className="text-black text-lg ">
                        Concluding with a summary.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-5 w-full">
                <h3 className="text-xl font-bold text-center text-black">
                  Create a 3- mins speech to inspire Others
                </h3>
                <h4 className="text-xl text-black text-center">
                  <span className="font-bold">Topic:</span> Strive for
                  excellence: Aim to give their best to a particular task
                </h4>{" "}
                <h4 className="text-xl text-black text-center">
                  Points to remember as you prepare your speech.
                </h4>
                <div className="w-full flex justify-center items-center px-5">
                  <ul className="list-disc space-y-2 w-[600px] p-3">
                    <li className="text-black text-lg ">
                      Be clear, concise, complete and courteous.
                    </li>
                    <li className="text-black text-lg ">
                      Introduce yourself with a quote or anecdote about what
                      excellence means to you{" "}
                    </li>
                    <li className="text-black text-lg ">
                      Define characteristics that are important in achieving
                      excellence{" "}
                    </li>
                    <li className="text-black text-lg ">
                      List challenges to achieving excellence with personal
                      examples
                    </li>
                    <li className="text-black text-lg ">
                      Present solutions with personal examples
                    </li>
                    <li className="text-black text-lg ">
                      Share an example of someone inspiring{" "}
                    </li>
                    <li className="text-black text-lg ">
                      Conclude by showing what excellence looks like
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <VideoRecorder/>
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
              lastSlide < 2 && show
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 2 && show ? "block" : "hidden"
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
