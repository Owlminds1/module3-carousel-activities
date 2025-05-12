"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/CarouselC23-L2-A2/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function SlideStart({ setIsFirstScreen }: SlideProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const [showBtn, setShowbtn] = useState(true);

  const handleNext = () => {
    if (lastSlide == SlideData.length) {
      setIsFirstScreen("Result");
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    if (swipe.activeIndex === 0) {
      setShowbtn(true); // index 0 pe true rakhna hai
    } else {
      setShowbtn(false);
    }
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[900px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          How to say no
        </h1>

        <div className="grid grid-cols-12 gap-5 w-full   border-2 p-2 bg-violet-100 rounded-lg min-h-[200px] ">
          <div className="col-span-6 w-full  ">
            <div className="bg-violet-200 px-4 rounded-lg ">
              <ul className="list-decimal p-5">
                <li className="text-xl text-black">
                  Acknowledge the person’s request by repeating what they said.
                </li>
                <li className="text-xl text-black">
                  Share your reasons for declining their request.
                </li>
                <li className="text-xl text-black">Say no</li>
                <li className="text-xl text-black">
                  Compromise and come to a proposition where both your needs may
                  be met.
                </li>
              </ul>
              <span className="text-lg font-bold">Phrases to use</span>
              <ul className="list-disc p-8">
                <li className="text-xl text-black">No thank you.</li>
                <li className="text-xl text-black">
                  Thank you for asking, but no.
                </li>
                <li className="text-xl text-black">
                  Thank you for thinking of me.
                </li>
                <li className="text-xl text-black">I’d love to but ….</li>
                <li className="text-xl text-black">Thank you, but not now.</li>
              </ul>
            </div>
          </div>
          <div className="col-span-6 w-full  flex justify-center items-center ">
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
                <Image
                  src="/C23Images/say-no.png"
                  width={460}
                  height={100}
                  alt="image Slider"
                  className="rounded-lg"
                />
              </SwiperSlide>
              {SlideData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center  flex-col gap-2">
                   <div className="h-[250px] w-[400px] relative">
                     <Image src={item.img} fill alt="slide img" className="object-contain"/>
                   </div>
                    <h4 className=" text-center py-5  text-black text-3xl ">
                      {item.text}
                    </h4>

                    <textarea
                      placeholder="write here...."
                      className="text-lg rounded-lg text-black text-center border border-gray-400 outline-black min-h-[80px] w-full"
                    />

                    {!showBtn ? (
                      <button
                        onClick={() => setShowbtn(true)}
                        className="text-white cursor-pointer bg-violet-900 px-8 py-2 rounded-lg"
                      >
                        Check
                      </button>
                    ) : (
                      <p className=" text-center  text-violet-800  text-2xl ">
                        {item.sugges}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
              lastSlide < SlideData.length + 1 && showBtn
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length + 1 && showBtn ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
