"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import masterList from "@/carouselC24-L1-A3/masterList.json";
import DropData from "@/carouselC24-L1-A3/dropData.json";

type dragType = {
  text: string;
  val: string;
};

type myProps = {
  setIsFirstScreen: (value: string) => void;
};

const SlideStart = ({setIsFirstScreen}:myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [shwo, setShow] = useState(false);
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>([]);
  const [filter, setFilter] = useState(masterList);

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
    setShow(false);
  };
  const handleDragStart = (e: React.DragEvent, item: dragType) => {
    e.dataTransfer.setData("drag", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent, index: number, value: string) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("drag"));
    if (value == dropItem.val) {
      const updatefilter = filter.filter((item) => item.text != dropItem.text);
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dropItem.text]
          : [dropItem.text],
      }));

      setFilter(updatefilter);
      if (updatefilter.length == 0) {
        setTimeout(() => {
         setIsFirstScreen("result")
        }, 300);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[980px]">
        <h1 className="text-center text-3xl  py-4 text-black">
          Know, Feel, Do
        </h1>

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
            <SwiperSlide>
              <div className="min-h-[500px] p-5 flex justify-center items-center flex-col gap-10">
                <h5 className="text-4xl font-bold text-center text-black">
                  What do we know about critical thinking and planning?
                </h5>
                {!shwo ? (
                  <button
                    onClick={() => setShow(true)}
                    className="px-8 py-2 bg-violet-900 rounded-lg text-white cursor-pointer text-2xl"
                  >
                    Check
                  </button>
                ) : (
                  <h5 className="text-3xl text-center text-black">
                    Critical thinking is when we apply our skills to solve
                    problems in a logical way. Planning is when we prepare ahead
                    of time to achieve our goals.
                  </h5>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[500px] overflow-y-scroll p-5 flex justify-start items-center flex-col gap-5">
                <h5 className="text-3xl font-bold text-center text-black">
                  What do we know about critical thinking and planning?
                </h5>
                <h5 className="text-2xl  text-center text-black">
                  Build a mind map to convince friends to participate in Earth
                  day.
                </h5>

                <div className="grid grid-cols-12 gap-2 w-full place-items-center">
                  <div className="col-span-4 w-full flex justify-center item-center flex-col gap-2  ">
                    <ul className="list-disc px-5 space-y-2">
                      <li className="text-black text-lg ">
                        Know: what do you want the listener to know?
                      </li>
                      <li className="text-black text-lg ">
                        Feel: how do you want the listener to feel?
                      </li>
                      <li className="text-black text-lg ">
                        Do: what action do you want the listener to take?
                      </li>
                    </ul>

                    <div className="h-[300px] overflow-y-scroll p-1 ">
                      {filter.map((item, index) => (
                        <h3
                          key={index}
                          draggable
                          onDragStart={(e) => handleDragStart(e, item)}
                          className="text-lg mt-1 border border-black px-4 py-2 rounded-lg active:cursor-grabbing hover:cursor-grab"
                        >
                          {item.text}
                        </h3>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-8 w-full ">
                    <div className="grid grid-cols-12 place-items-center gap-2  w-full">
                      {DropData.map((item, index) => (
                        <div
                          onDrop={(e) => handleDrop(e, index, item.value)}
                          onDragOver={(e) => e.preventDefault()}
                          key={index}
                          className={`${index == 2 ?"col-span-12":""} col-span-6 w-full border-t-0 min-h-[200px] rounded-lg border border-black flex justify-start items-center flex-col gap-2 p-1`}
                        >
                          <span className="text-center w-full text-white font-bold bg-violet-900 px-5 py-1 rounded-lg ">
                            {item.value}
                          </span>

                          {dropItems[index]?.map((item, index) => (
                            <span
                              className="text-center w-full text-black border border-violet-800 p-1 px-5 py-1 rounded-lg "
                              key={index}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
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
              lastSlide < 1 && shwo
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 1 && shwo ? "block" : "hidden"
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
