"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Slide() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

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
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[980px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
         {lastSlide == 1 ? " Let’s practice!":" Casual Conversations" }
        </h1>
        <div className="w-full  border-2 p-2  bg-violet-100 rounded-lg min-h-[300px]">
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
              <div className="min-h-[300px]  p-5 flex justify-center items-center flex-col">
                <h4 className="text-black text-3xl text-center">
                
                  Good practices of casual conversation
                </h4>
                <ul className="list-disc space-y-4 p-5 w-[600px] ">
                  <li className="text-black  text-xl ">
                    keep asking follow-up questions. It helps to make the
                    conversation interesting and engaging. It also allows the
                    listener to feel heard.
                  </li>
                  <li className="text-black  text-xl ">
                    pause before speaking!
                  </li>
                  <li className="text-black  text-xl ">
                    add polite responses like oh great! Lovely! Wonderful!
                  </li>{" "}
                  <li className="text-black  text-xl ">
                    Smile and be attentive!
                  </li>
                </ul>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="min-h-[300px] grid grid-cols-12  p-5 place-items-center">
               <div className="col-span-6 flex  flex-col gap-3 p-3 ">
               <h4 className="w-full text-center font-bold text-2xl">Teacher</h4>
            <ul className="list-disc space-y-3">
            <li className="text-xl min-w-[400px] ">What’s your favorite _____?</li>
            <li className="text-xl min-w-[400px] ">Awesome. What do you like about it?</li>
            <li className="text-xl min-w-[400px] ">Yeah, same. Or Actually I like _______ because _____.</li>
            <li className="text-xl min-w-[400px] ">Haha. My favorite is _________.</li>
            <li className="text-xl min-w-[400px] ">I prefer _______because______. How about you?</li>
            <li className="text-xl min-w-[400px] ">{`Wow, that's so cool. Let’s`} _________(play/read/watch) it together sometime!!</li>
            </ul>
               </div>
               <div className="col-span-6 flex  flex-col gap-3 p-5 min-h-[350px]">
                <h4 className="w-full text-center font-bold text-2xl text-violet-950">Students </h4>
                <ul className="list-disc space-y-3 pl-10 ">

                  
            <li className="text-xl text-violet-950  ">My favorite is _____. What about you?</li>
            <li className="text-xl text-violet-950   "> I like __________. And you?</li>
            <li className="text-xl text-violet-950 ">How lovely. Who’s your favorite character? </li>
            <li className="text-xl text-violet-950   ">I like ____________.  Why do you prefer this one?</li>
            <li className="text-xl text-violet-950   ">I like _______because________.</li>
            <li className="text-xl text-violet-950  ">Sure!</li>
                </ul>
               </div>
                
              </div>
            </SwiperSlide>
           
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
              lastSlide < 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < 1 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
