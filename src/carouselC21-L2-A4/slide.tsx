"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SLideData from "@/carouselC21-L2-A4/slideData.json";
import slideData2 from "@/carouselC21-L2-A4/slideData2.json"

import Image from "next/image";
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const Slide = ({ setIsFirstScreen }: myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [dataIndex,setDataIndex]=useState<number[]>([])
  

  const handleNext = () => {
    swiperRef.current?.slideNext();
    if (lastSlide == slideData2.length ) {
      setIsFirstScreen("Result");
    }
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };

  const handleClick = (index:number)=>{
setDataIndex((prev)=>[...prev,index])
  }

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <h1 className="text-center text-4xl py-4 text-black">
        Learn to describe
      </h1>
      <div className="w-[900px]">
        <div className="border-2  w-full flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[300px]">
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
              {SLideData.map((item, index) => (
                <div
                  key={index}
                  className=" w-full  flex justify-center items-center gap-5 place-items-center"
                >
                  <button
                    onClick={()=>handleClick(index)}
                    className="text-xl cursor-pointer bg-violet-900 text-white font-bold rounded-lg px-5 py-1 mt-1 min-w-[150px] "
                  >
                    {item.word}
                  </button>
                  <h4 className="text-xl  text-center w-full mt-1 border border-black px-5 py-1 rounded-lg text-black">
                    { dataIndex.includes(index) ? item.text :""}
                  </h4>
                </div>
              ))}
            </SwiperSlide>
{
slideData2.map((item,index)=>(

            <SwiperSlide key={index}>
              <div className="grid grid-cols-12 w-full place-items-center">
              <div className="col-span-6">
                  <h4 className="text-2xl text-center text-black ">{item.text}</h4>
                </div>
                <div className="col-span-6 w-full h-[300px] relative ">
                  <Image src={item.img} fill alt="slider image" className="object-contain"/>
                </div>
               
              </div>
            </SwiperSlide>
))
}
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
              lastSlide < slideData2.length+1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < slideData2.length+1 ? "block" : "hidden"
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
