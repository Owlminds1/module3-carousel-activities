"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SLideData from "@/carouselC20-L3-A0/slideData.json";
import Image from "next/image";
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const Footprint = ({ setIsFirstScreen }: myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [showList, setShowList] = useState(false);

  const handleNext = () => {
    swiperRef.current?.slideNext();
    if (lastSlide == SLideData.length - 1) {
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

  const handleAdd = () => {
    if (inputValue != "") {
      setList((prev) => [...prev, inputValue]);
    }
    setInputValue("")
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h4 className="text-center text-4xl font-bold py-4 text-black">
          {lastSlide == 0
            ? ` Ecological footprint`
            : lastSlide == 2
            ? "Create your list"
            : ""}
        </h4>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[300px]">
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
              <div className="grid grid-cols-12 place-items-center gap-2 w-full h-full">
                <div className="col-span-12  w-full rounded-lg  flex justify-center items-center flex-col ">
                  <Image
                    src="/C20Images/Activity_2A.PNG"
                    width={500}
                    height={100}
                    alt="footprint image"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center gap-2 w-full h-full">
                <div className="col-span-12  w-full rounded-lg min-h-[300px] flex justify-center items-center flex-col ">
                  <h4 className="text-black text-center text-4xl ">
                    What will you do to reduce your ecological footprint?
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center gap-2 w-full h-full">
                <div className="col-span-6 border border-black  w-full rounded-lg min-h-[400px]  flex gap-10 justify-center items-center flex-col ">
                  <div className="flex gap-2 justify-center items-center">
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="text-black text-center text-2xl  border-b border-black w-full outline-none"
                      placeholder="add list item"
                    />
                  </div>
                  <button
                    onClick={handleAdd}
                    className="text-white cursor-pointer bg-violet-900 px-8 py-2 rounded-lg"
                  >
                    {list.length > 0 ? "add more" : "add"}
                  </button>
                </div>

                <div className="col-span-6  w-full rounded-lg  h-[300px]  overflow-y-scroll   flex gap-10 justify-center items-center flex-col ">
                  <ul className="space-y-5 list-disc p-5">
                    {list.map((item, index) => (
                      <li key={index} className="text-xl text-black">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-12 py-5">
                  <button
                    onClick={() => setShowList(true)}
                    disabled={list.length < 5}
                    className={`${
                      list.length < 5
                        ? "bg-green-900 cursor-not-allowed"
                        : "bg-green-600 cursor-pointer"
                    } text-white   px-8 py-2 rounded-lg`}
                  >
                    Check
                  </button>
                </div>
                {showList ? (
                  <div
                    className={`col-span-12 w-full flex justify-center items-center flex-col`}
                  >
                    <h4 className="text-xl font-bold text-black text-center ">
                      Here is one list for your reference
                    </h4>
                    <ul className={`  space-y-5 list-disc p-5 `}>
                      <li className="text-xl">Avoid single-use plastics</li>
                      <li className="text-xl">Carry your own shopping bag</li>
                      <li className="text-xl">Avoid buying disposable items</li>
                      <li className="text-xl">
                        Purchase energy-efficient appliances{" "}
                      </li>
                      <li className="text-xl">Recycle what you don’t reuse</li>
                      <li className="text-xl">Compost organic waste</li>
                      <li className="text-xl">Avoid food waste.</li>
                      <li className="text-xl">
                        Donate used items in good condition
                      </li>
                      <li className="text-xl">
                        Go paperless with bills, newsletters, magazines
                      </li>
                      <li className="text-xl">
                        Carry a refillable water bottle and bring your own mug
                        to coffee shops
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
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
              lastSlide < 2
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 2 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footprint;
