"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SlideData from "@/carouselC24-L1-A1/slideData.json";
import SecoundSlide from "./secoundSlide";

type MyProps = {
  setIsFirstScreen: (value: string) => void;
};

const SlideStart = ({ setIsFirstScreen }: MyProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [show,setShow]=useState(false)
  

  const handleNext = () => {
    if (lastSlide < SlideData.length) {
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
  setShow(false)
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[950px]">
        <h1 className="text-center text-2xl py-4 text-black">{lastSlide == 2 ? "Sort the sentences that show courage and effective communication" : lastSlide == 0 && 1 ? "You have moved to a new city, and are attending a birthday party for the first time.  How will you get comfortable and make new friends at the party? ":"" }</h1>


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
            {SlideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center min-h-[400px] flex-col gap-8"> 
                <h4 className="text-3xl text-center text-black">{item.text}</h4>
         
                {
                  !show ? 
                  <button onClick={()=>setShow(true)} className="text-white bg-violet-900 cursor-pointer   px-5 py-2 rounded-lg">Show Suggestion </button>
                  :
                <p className="text-center text-violet-950 text-2xl">{item.suggestedRes}</p>
                }
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
<SecoundSlide setShow={setShow} />
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
              lastSlide < SlideData.length +1 &&   show
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length +1 && show ? "block" : "hidden"
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
