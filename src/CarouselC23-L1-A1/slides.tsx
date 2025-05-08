"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import masterList from "@/CarouselC23-L1-A1/dragData.json";
import SecoundScreen from "./secoundScreen";
import ThirdScreen from "./thirdScreen";
type dragType = {
  text: string;
  val: boolean;
};

export default function FirstScreen() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [filter, setFilter] = useState(masterList);
  const [dropItems, setDropItems] = useState<string[]>([]);

  const [showBtn, setShowbtn] = useState(false);


  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
    setShowbtn(true)
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    setShowbtn(swipe.activeIndex !== 0); // agar 0 nahi hai toh showBtn true
  };
  

  const handleDragStart = (e: React.DragEvent, item: dragType) => {
    e.dataTransfer.setData("drag", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("drag"));
    if (dropItem.val) {
      const updatefilter = filter.filter((item) => item.text != dropItem.text);

      setDropItems((prev) => [...prev, dropItem.text]);

      setFilter(updatefilter);

      const allTrueDrop = updatefilter.every((item) => item.val == false);
      if (allTrueDrop) {
        setTimeout(() => {
          setShowbtn(true);
        }, 300);
      }
    }
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[900px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          {lastSlide == 0
            ? "Select qualities that assertive people show."
            : lastSlide == 1
            ? "Create a word cloud"
            : ""}
        </h1>
        <Swiper
          className="border-2 p-2 bg-violet-100 rounded-lg min-h-[200px] "
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <div className="gird grid-cols-12 w-full  place-items-center p-2">
              <div className="col-span-12 w-full flex justify-center item-center gap-1 flex-wrap">
                {filter.map((item, index) => (
                  <span
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    className="text-black border-2 border-violet-900 px-8 py-2 rounded-lg text-lg hover:cursor-grab active:shadow-md active:shadow-black active:cursor-grabbing active:scale-90"
                  >
                    {item.text}
                  </span>
                ))}
              </div>
              <div
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => e.preventDefault()}
                className="col-span-12 mt-2 min-h-[200px] rounded-lg border border-black w-full flex justify-center items-center flex-wrap gap-1"
              >
                {dropItems.map((item, index) => (
                  <h4
                    className="text-xl bg-green-500 px-8 py-2 text-white rounded-lg"
                    key={index}
                  >
                    {item}
                  </h4>
                ))}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <SecoundScreen />
          </SwiperSlide>

          <SwiperSlide>
            <ThirdScreen />
          </SwiperSlide>
        </Swiper>
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
            className={` ${ lastSlide < 2 &&
              showBtn
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${lastSlide < 2 &&
                showBtn ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
