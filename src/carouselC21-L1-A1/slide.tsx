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
const srollRef =useRef<HTMLDivElement | null >(null)
  const handleNext = () => {
    swiperRef.current?.slideNext();
    
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    srollRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[980px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          {lastSlide === 0
            ? "HEAR framework"
            : lastSlide == 1
            ? "Draw what you see"
            : ""}
        </h1>
        <div ref={srollRef} className="w-full   border-2 p-2 overflow-y-scroll  bg-violet-100 rounded-lg h-[400px]">
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
              <div className="grid grid-cols-12 place-items-center gap-1 w-full min-h-[300px] ">
                <div className="col-span-12 w-full border border-[#00000078] rounded-lg p-2 min-h-[200px] flex gap-5 justify-center items-center flex-col  ">
                  <h4 className="text-2xl text-black ">
                    {" "}
                    <span className="font-bold">HALT —</span> Halt whatever you
                    are doing and offer your full attention.
                  </h4>
                  <p className="font-bold text-xl text-black">
                    Avoid getting lost in your own thoughts. Instead, focus on
                    what is said.
                  </p>
                </div>
                <div className="col-span-12 w-full border  border-[#00000078] rounded-lg p-2 min-h-[200px] flex gap-5 justify-center items-center flex-col  ">
                  <h4 className="text-2xl text-black ">
                    {" "}
                    <span className="font-bold">ENJOY —</span> Enjoy receiving
                    what is said.
                  </h4>
                  <p className="font-bold text-xl text-black">
                    Do not interrupt the other person.
                  </p>
                </div>

                <div className="col-span-12 w-full border border-[#00000078] rounded-lg p-2 min-h-[200px] flex gap-5 justify-center items-center flex-col  ">
                  <h4 className="text-2xl text-center  text-black ">
                    {" "}
                    <span className="font-bold">ASK —</span> Ask yourself if you
                    really know what they mean and if you don’t, ask for
                    clarification.
                  </h4>
                </div>

                <div className="col-span-12 w-full border  border-[#00000078] rounded-lg p-2 min-h-[200px] flex gap-5 justify-center items-center flex-col ">
                  <h4 className="text-2xl text-center text-black ">
                    {" "}
                    <span className="font-bold">REFLECT —</span> Reflect back to
                    them what you heard. This tells them that you were really
                    listening.
                  </h4>
                  <div className="font-bold text-xl text-black">
                    Use key phrases that show your interest
                  <ul className="list-disc space-y-4 p-5">
                    <li className="text-xl ">Tell me more.</li>
                    <li className="text-xl ">That sounds interesting </li>
                  </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center gap-1 w-full min-h-[300px]">
                <div className="col-span-12  border border-[#00000078] rounded-lg p-2 min-h-[200px] flex gap-8 justify-start items-center flex-col ">
                  <h4 className="text-2xl text-center text-black ">
                  
                    This is when two people speak but don’t listen at all. This
                    occurs when we talk over one another!
                  </h4>
               
                <div className=" py-5 relative  pr-[300px] ">
                   
                   <span className="absolute min-h-[80px] top-0 left-0  w-[50px] border border-black rounded-b-full border-t-0 "></span>
                   <span className="absolute min-h-[80px] top-0 left-10 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                   <span className="absolute min-h-[80px] top-0 left-20 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                   <span className= "absolute min-h-[80px] top-0 left-30 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-40 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-50 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-60 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                 </div>
              
                </div>
                <div className="col-span-12 w-full border border-[#00000078] rounded-lg p-2 min-h-[200px] flex gap-8 justify-center items-center flex-col  ">
                  <h4 className="text-2xl text-black  ">
                  This is when two people speak but don’t listen very well 
                  </h4>
                  <div className=" py-5 relative  pr-[400px] ">
                   
                   <span className="absolute min-h-[80px] top-0 left-0  w-[50px] border border-black rounded-b-full border-t-0 "></span>
                   <span className="absolute min-h-[80px] top-0 left-15 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                   <span className="absolute min-h-[80px] top-0 left-30 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                   <span className= "absolute min-h-[80px] top-0 left-45 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-60 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-75 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-90 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                 </div>
                </div>

                <div className="col-span-12 w-full border border-[#00000078] rounded-lg p-2 min-h-[200px] flex gap-8 justify-center items-center flex-col  ">
                  <h4 className="text-2xl text-black  ">
                  This is when two people speak and listen but only to speak again
                  </h4>
                  <div className=" py-5 relative  pr-[500px] ">
                   
                   <span className="absolute min-h-[80px] top-0 left-0  w-[50px] border border-black rounded-b-full border-t-0 "></span>
                   <span className="absolute min-h-[80px] top-0 left-20 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                   <span className="absolute min-h-[80px] top-0 left-40 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                   <span className= "absolute min-h-[80px] top-0 left-60 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-80 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-100 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-120 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                 </div>
                </div>

                <div className="col-span-12 w-full border border-[#00000078] rounded-lg p-2 min-h-[200px] flex gap-8 justify-center items-center flex-col ">
                  <h4 className="text-2xl text-black  ">
                  This is when two people speak and listen by giving space in the conversation.
                  </h4>
                  <div className=" py-5 relative  pr-[600px] ">
                   
                   <span className="absolute min-h-[80px] top-0 left-0  w-[50px] border border-black rounded-b-full border-t-0 "></span>
                   <span className="absolute min-h-[80px] top-0 left-25 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                   <span className="absolute min-h-[80px] top-0 left-50 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                   <span className= "absolute min-h-[80px] top-0 left-75 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-100 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-125 w-[50px] border border-black rounded-t-full border-b-0 "></span>
                    <span className= "absolute min-h-[80px] top-0 left-150 w-[50px] border border-black rounded-b-full border-t-0 "></span>
                 </div>
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
              lastSlide <= 0
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide <= 0 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
