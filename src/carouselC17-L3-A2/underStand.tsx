import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import SlideData from "@/carouselC17-L3-A2/slideData.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css";

const UnderStandSlide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [showSugge, setShowSugge] = useState(false);
  const [timer, setTimer] = useState(30);

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
    setShowSugge(false);
    // setTimer(10);
  };

  useEffect(() => {
    setTimer(30);
    const intervale = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervale);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervale); // clear on unmount or slide change
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center p-5 bg-[#F8FAFC] flex-col">
      <h4 className="text-black py-5 text-center font-bold text-3xl ">
        Read with understanding
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
              <div className=" w-full  flex justify-center items-center ">
                <Image
                  src="/C17Images/Grand_Canyon.jpg"
                  width={600}
                  height={100}
                  className="rounded-lg"
                  alt="slide image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" w-full min-h-[400px] flex justify-center items-center p-5 flex-col gap-8">
                <p className="text-black text-xl text-center">
                  You go to fill up the water bottles for free. But when you get
                  to the site, you see that there are many empty plastic bottles
                  thrown all over!
                </p>
                <h2 className="text-black text-center font-bold  text-3xl">
                  What action will you take?
                </h2>

                {showSugge ? (
                  <ul className="list-decimal text-black">
                    <li className="text-xl text-black ">
                      Find a recycling bin
                    </li>
                    <li className="text-xl text-black ">
                      Inform the local rangers
                    </li>
                    <li className="text-xl text-black ">Create awareness</li>
                    <li className="text-xl text-black ">Use social media</li>
                    <li className="text-xl text-black ">
                      Inform fellow visitors
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                {timer == 0 ? (
                  <button
                    onClick={() => setShowSugge(!showSugge)}
                    className="text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                  >
                    {showSugge ? "Hide Suggestion" : "Show Suggestion"}
                  </button>
                ) : (
                  <button className="text-white bg-violet-600 cursor-no-drop px-5 py-2 rounded-lg ">
                    Suggestion will show {timer}s
                  </button>
                )}
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
              lastSlide < SlideData.length
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
                       `}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderStandSlide;
