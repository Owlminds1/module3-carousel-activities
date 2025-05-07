"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

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
              <div className="grid grid-cols-12 p-3 gap-1 place-items-center  min-h-[500px] w-full  h-full">
                <div className="col-span-6 relative w-full h-[300px]  rounded-lg overflow-hidden">
                  <Image
                    src="/C24Images/gratitude_letter.png"
                   fill
                    alt="slide Image"
                  />
                </div>
                <div className="col-span-6 relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/C24Images/practising-gratitude.png"
                 fill
                    alt="slide Image"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-[300px] flex justify-start items-start p-3 gap-8 flex-col">
                <h4 className="text-xl font-bold text-center text-black ">
                  Write a gratitude letter to someone who has helped you or has
                  been specially kind to you.
                </h4>
                <div>
                  <h4 className="text-lg font-medium text-black ">
                    You could write a letter to one of the following:
                  </h4>
                  <ul className="spac-y-5 pt-3 list-disc p-5">
                    <li className="text-lg text-black">
                      Family member you are thankful to
                    </li>

                    <li className="text-lg text-black">
                      Friends you’re grateful for{" "}
                    </li>

                    <li className="text-lg text-black">
                      People in your life you feel happy about
                    </li>

                    <li className="text-lg text-black">
                      Communities that make you a kind human being
                    </li>
                    <li className="text-lg text-black">
                      Personality traits and skills that you are thankful about.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <label className="text-lg text-left px-2 " htmlFor="letter">
                    What emotions you felt while writing the gratitude letter.
                  </label>
                  <textarea
                    id="letter"
                    className="min-h-[150px] w-full border border-black rounded-lg text-black text-lg p"
                  />
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

export default SlideStart;
