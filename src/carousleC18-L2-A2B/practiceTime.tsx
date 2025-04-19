"use client";
import React, {  useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/CarouselC18-L1-A4/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PracticeTime() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [showBtn, setShowbtn] = useState(false);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };
  const handleChange = (swipe: SwiperClass) => {
    setShowbtn(false);

    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
    setShowbtn(false);
  };

  const onSubmit = () => {
    setShowbtn(true);
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[600px]  ">
        <h1 className="text-center text-3xl font-bold py-4 text-black">
          Make time for 4 hours of practice time
        </h1>
        <Swiper
          className="border-2 p-2 bg-violet-100 rounded-lg min-h-[300px] "
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <div className="min-h-[200px] flex flex-col justify-center items-center gap-5 p-5">
              <h4 className="text-black text-xl text-center">
                What kind of challenges might Remy face in rescheduling?
              </h4>
              <textarea
                className=" rounded-lg min-h-[50px] border outline-none text-black text-center p-2 border-black min-w-[400px] placeholder:text-slate-500 "
                placeholder=" write possible challenges"
              />

              <button
                onClick={onSubmit}
                className="bg-violet-900 text-white px-5 py-2 rounded-lg cursor-pointer "
              >
                submit
              </button>

              <ul
                className={`${
                  showBtn ? "block " : "hidden"
                } text-lg space-y-2 p-8 list-disc`}
              >
                <li className="text-black text-md">
                  Remy may not want to sacrifice independent time for a more
                  rigorous activity.
                </li>
                <li className="text-black text-md">
                  Remy may get stressed about losing relaxation time and then
                  not enjoy basketball.
                </li>
                <li className="text-black text-md">
                  Remy may feel inclined to change football to basketball, but
                  his parents might insist on football as he may have a better
                  chance of getting a scholarship with that sport later.
                </li>
                <li className="text-black text-md">
                  Remy may love basketball and video games on an equal level.
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="min-h-[200px] flex flex-col justify-center items-center gap-5 p-5">
              <h4 className="text-black text-xl text-center">
                What kind of questions do we need to ask Remy to find time for
                basketball?
              </h4>
              <textarea
                className=" rounded-lg min-h-[50px] border outline-none text-black text-center p-2 border-black min-w-[400px] placeholder:text-slate-500 "
                placeholder=" write possible challenges"
              />

              <button
                onClick={onSubmit}
                className="bg-violet-900 text-white px-5 py-2 rounded-lg cursor-pointer "
              >
                submit
              </button>

              <ul
                className={`${
                  showBtn  ? "block " : "hidden"
                } text-lg space-y-2 p-8 list-disc`}
              >
                <li className="text-black text-md">
                  Are you willing to reduce your personal time and leisure time
                  to make space for basketball?
                </li>
                <li className="text-black text-md">
                  What do you like more? Football or basketball?
                </li>
                <li className="text-black text-md">
                  Would parents be okay with changing football to basketball?
                </li>
                <li className="text-black text-md">
                  Is it possible for you to complete your HW on one of the
                  weekends and use leisure time if needed?
                </li>
                <li className="text-black text-md">
                  Can you change outdoor time to basketball since technically it
                  is an outdoor sport?
                </li>
                <li className="text-black text-md">
                Can you sleep eight hours and get ready quickly on the weekends to start the day with basketball practice? You still have the next day to catch up on your sleep.
                </li>
              </ul>
            </div>
          </SwiperSlide>
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
            className={`
              ${ lastSlide < 1 ? "block":"hidden"} 
             
               "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                
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
