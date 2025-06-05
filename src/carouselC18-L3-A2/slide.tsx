"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ThirdSlide from "./thirdSlide";

import FivethSlide from "./fivthSlide";
import SixthSlide from "./sixthSlide";
import Image from "next/image";
import SeventhSlide from "./seventhSlide";
import FourthSlide from "./fourthSlide";

const Slide = ({
  setIsFirstScreen,
}: {
  setIsFirstScreen: (val: string) => void;
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [show, setShow] = useState(false);

  const handleNext = () => {
    if (lastSlide >= 5) {
      setIsFirstScreen("resulte");
      return;
    }

    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        swiperRef.current?.updateAutoHeight();
      }, 100);
    }
  }, [show]);

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[950px]">
        <h1 className="text-center text-2xl font-bold py-4 text-black">
          {lastSlide > 3
            ? "Rescheduling problem"
            : "Make time for sports practice"}
        </h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px]">
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col gap-2">
                <Image
                  className="rounded-lg shadow-lg"
                  src="/C18Images/Remy_Afternoons_and_Evenings.png"
                  width={600}
                  height={100}
                  alt="Remy_Afternoons_and_Evenings"
                />
                <Image
                  className="rounded-lg shadow-lg"
                  src="/C18Images/Remy_Mornings.png"
                  width={600}
                  height={100}
                  alt="Remy_Mornings"
                />
              </div>
            </SwiperSlide>
            {/* ========================== ThirdSlide ================= */}
            <SwiperSlide>
              <ThirdSlide
                setShow={setShow}
                show={show}
                handleNext={handleNext}
              />
            </SwiperSlide>
            {/* ========================== FourthSlide ================= */}
            <SwiperSlide>
              <FourthSlide
                setShow={setShow}
                show={show}
                handleNext={handleNext}
              />
            </SwiperSlide>
            {/* ========================== FivethSlide ================= */}
            <SwiperSlide>
              <FivethSlide
                setShow={setShow}
                show={show}
                handleNext={handleNext}
              />
            </SwiperSlide>

            {/* ========================== SixthSlide ================= */}
            <SwiperSlide>
              <SixthSlide setShow={setShow} show={show} />
            </SwiperSlide>

            {/* ========================== SeventhSlide ================= */}
            <SwiperSlide>
              <SeventhSlide setShow={setShow} show={show} />
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
              lastSlide == 0 || (lastSlide > 3 && show) ? "block" : "hidden"
            }
                         
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
