"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import fistData from "@/carouselC17-L3-A4/firstSlideData.json";
import ToolList from "@/carouselC17-L3-A4/toolList.json";
import { C17CheckBox } from "@/components/C17CheCkBox";

type myProps = {
  setIsFirstScreen: (value: string) => void;
};

const Slide = ({ setIsFirstScreen }: myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [selectIndex, setSelectIndex] = useState<number>();
  const [textVal, setTextVal] = useState<string>();
  const [inputVal, setInputVal] = useState("");
  const [selectedListItem, setSelectedListItem] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const handleNext = () => {
    if (lastSlide > 2) {
      setIsFirstScreen("result");
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
  if (lastSlide === 2 && selectedListItem.length >= 1) {
    setShow(true);
  } else if (lastSlide === 2 && selectedListItem.length === 0) {
    setShow(false);
    
  }
}, [selectedListItem, lastSlide]);

  const handleClick = (val: number) => {
    setSelectIndex(val);
    setShow(true);
  };

  const handleGetVal = (textVal: string) => {
    setTextVal(textVal);
    setShow(true);
  };

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedListItem((prev) => [...prev, value]);
    } else {
      setSelectedListItem((prev) => prev.filter((v) => v !== value));
    }
  };
  return (
    <div className="min-h-screen flex justify-start items-center bg-[#F8FCFA] flex-col p-5">
      <h1 className="text-center text-4xl font-bold py-4 text-black">
        {lastSlide == 0
          ? " Select a big problem to solve"
          : lastSlide == 1
          ? "Select a situation within that big problem."
          : lastSlide == 2
          ? "How will you solve the problem?"
          : "Describe the solution."}
      </h1>

      <div className="w-[900px]">
        <div className="border-2  bg-violet-100 rounded-lg min-h-[200px]">
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
              <div className="grid grid-cols-12 gap-2 w-full h-full place-items-center">
                {fistData.map((item, index) => (
                  <div
                    tabIndex={0}
                    onClick={() => handleClick(item.val)}
                    key={index}
                    style={{ backgroundColor: item.bg }}
                    className="col-span-6 focus:border-3 focus:border-black flex justify-center items-center w-full min-h-[200px] active:scale-95  active:shadow-md active:shadow-black rounded-lg cursor-pointer transition duration-200 "
                  >
                    <h3 className="text-xl font-bold">{item.name}</h3>
                  </div>
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-2 w-full h-full place-items-center">
                <div
                  style={{
                    backgroundColor:
                      selectIndex !== undefined
                        ? fistData[selectIndex]?.bg
                        : "",
                  }}
                  className="col-span-6  flex justify-center items-center w-full min-h-[200px] rounded-lg "
                >
                  {selectIndex !== undefined && (
                    <h3 className="text-xl font-bold">
                      {fistData[selectIndex]?.name}
                    </h3>
                  )}
                </div>
                {selectIndex !== undefined &&
                  fistData[selectIndex]?.data?.map((item, index) => (
                    <div
                      onClick={() => handleGetVal(item.text)}
                      key={index}
                      tabIndex={0}
                      className="col-span-6 px-5 focus:border-3 focus:border-black  flex justify-center items-center w-full border border-gray-400 min-h-[200px] active:scale-95  active:shadow-md active:shadow-black rounded-lg cursor-pointer transition duration-200 "
                    >
                      <p className="text-lg text-center font-bold">
                        {item.text}
                      </p>
                    </div>
                  ))}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center p-5 flex-col gap-5">
                <p
                  style={{
                    backgroundColor:
                      selectIndex !== undefined
                        ? fistData[selectIndex]?.bg
                        : "",
                  }}
                  className="text-black p-2 rounded-lg font-bold text-xl text-center "
                >
                  {textVal}
                </p>

                <h4 className="text-xl ">
                  Select the tools you will use. [more than one can be clicked]
                </h4>
                <span className="font-bold text-lg">Tools to use:</span>
                <ul className="space-y-2">
                  {ToolList.map((item, index) => (
                    <li key={index}>
                      <C17CheckBox
                        name={item}
                        checked={selectedListItem.includes(item)}
                        onChange={handleCheckboxChange}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex min-h-[300px] justify-center items-center p-5 flex-col gap-5">
              {selectIndex !== undefined && (
                    <div
                      className="p-5 rounded-lg flex justify-center items-start gap-3 flex-col "
                      style={{
                        backgroundColor: fistData[selectIndex].bg,
                      }}
                    >
                      <h3 className="text-xl ">
                        <span className="font-bold">Big Problem - </span>
                        {fistData[selectIndex]?.name}
                      </h3>
                      <p className="text-xl">
                        <span className="font-bold">Situation -</span> {textVal}
                      </p>

                <div className="w-full  px-3 ">
                            <span className="font-bold text-xl">Tools -</span>
                  <ul className="list-disc space-y-2">
                    {selectedListItem.map((list, listIndex) => (
                      <li className="text-lg " key={listIndex}>
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
                    </div>
                  )}
                <h4 className="text-2xl ">
                  Think about the short-term and long-term impact of your
                  solution.
                </h4>

                <textarea
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="min-h-[150px] rounded-lg p-3 text-center text-xl  w-full border border-gray-400 outline-black "
                  placeholder="write here..."
                />
                {inputVal.length !== 0 ? (
                  <button
                    onClick={() => setShow(true)}
                    className="text-white text-2xl bg-violet-900 px-8 py-2 rounded-lg cursor-pointer hover:bg-violet-950"
                  >
                    Done
                  </button>
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
              lastSlide < 4 && show && selectIndex !== undefined
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 4 && show && selectIndex !== undefined
                  ? "block"
                  : "hidden"
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
