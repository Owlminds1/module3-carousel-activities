"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Moments of Happiness
        </h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px]">
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
              <div className="min-h-[250px] p-5 flex justify-center items-center flex-col gap-5">
                <h4 className="text-black text-center text-3xl font-bold ">
                  Recall when you were kind to someone.
                </h4>

                <ul className="text-black list-disc p-5 space-y-4 ">
                  <li className="text-black text-2xl  ">Who were you kind to? </li>
                  <li className="text-black text-2xl  ">When were you kind?</li>
                  <li className="text-black text-2xl  "> Why were you kind?</li>
                  <li className="text-black text-2xl  "> What did you do to be kind?</li>
                  <li className="text-black text-2xl  ">Where did you practice this act of kindness?</li>
                  <li className="text-black text-2xl  ">How did your kindness make them feel? </li>
                  <li className="text-black text-2xl  ">Would you do it again? Would you change it? Why?</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[250px] p-5 flex justify-center items-center flex-col gap-5">
                <h4 className="text-black text-center text-3xl font-bold ">
                Recall when someone was kind to you.
                </h4>

                <ul className="text-black list-disc p-5 space-y-4 ">
                  <li className="text-black text-2xl  ">Who was kind to you? </li>
                  <li className="text-black text-2xl  ">When were they kind to you?</li>
                  <li className="text-black text-2xl  ">Why were they kind to you?</li>
                  <li className="text-black text-2xl  ">What did they do to be kind?</li>
                  <li className="text-black text-2xl  ">Where did they show this act of kindness?</li>
                  <li className="text-black text-2xl  ">How did their kindness make you feel?</li>
                  <li className="text-black text-2xl  ">Did you pay their kindness forward by being kind to someone else? How so?</li>
                </ul>
              </div>
            </SwiperSlide>
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
              lastSlide < 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 1 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
