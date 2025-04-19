import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// import SlideData from "@/carouselC17-L3-A2/slideData.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css/navigation";
import "swiper/css";
import Slide3 from "./slide3";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    // if (lastSlide - 1) {
    // }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    // if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    // if (lastSlide - 1) return;
    //  setIsFirstScreen("result");
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-5 bg-[#F8FAFC] flex-col">
      <h4 className="text-black py-5 text-center font-bold text-3xl ">
        Make time for sports practice
      </h4>
      <div className="w-[800px] ">
        <div className="border-2  flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px] ">
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
              <div className="w-full p-5 flex justify-center items-center ">
                <ul className="list-decimal text-black p-5 space-y-3">
                  <li className="text-black text-lg">
                    Group tasks that are independent or interdependent.
                  </li>{" "}
                  <li className="text-black text-lg">
                    Categorize tasks as weekly or weekend.
                  </li>
                  <li className="text-black text-lg">
                    Identify tasks that can wait and tasks that can be skipped.
                  </li>
                  <li className="text-black text-lg">
                    Establish the pros and cons of doing or not doing each task
                    that is in the category “can wait” and “can be skipped”
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Slide3 />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full flex justify-between items-center mt-5">
          <div
            className={`
          border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                hover:scale-90 
                     `}
          >
            <FaArrowLeft
              className={` text-[40px]  cursor-pointer  text-black`}
              onClick={handlePerv}
            />
          </div>

          <div
            className={` ${lastSlide ?"block":"block"}
          
                 border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
               
             hover:scale-90 
                     `}
          >
            <FaArrowRight
              className={` text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
