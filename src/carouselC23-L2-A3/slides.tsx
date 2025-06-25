"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import masterList from "@/carouselC23-L2-A3/dragData.json";
import dropData from "@/carouselC23-L2-A3/dropData.json";
import Image from "next/image";
import Link from "next/link";
import Welldone from "@/components/wellDone";

type dragType = {
  text: string;
  val: string;
};



const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>([]);
  const [shuffle, setShuffle] = useState(masterList);
  const [filter, setFilter] = useState(shuffle);
  const [open,setOpen]=useState(false)

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
     window.scrollTo(0,0)
     swiper.updateAutoHeight()
  };

  const handleDragStart = (e: React.DragEvent, item: dragType) => {
    e.dataTransfer.setData("drag", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent, val: string, index: number) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("drag"));
    if (val === dropItem.val) {
      const shuffled = [...filter].sort(() => Math.random() - 0.5);
      setShuffle(shuffled);
      const updateFilter = shuffled.filter(
        (item) => item.text != dropItem.text
      );
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dropItem.text]
          : [dropItem.text],
      }));

      setFilter(updateFilter);
      if (updateFilter.length == 0) {
        setTimeout(() => {
          setOpen(true)
        }, 300);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[950px]">
        <h1 className="text-center text-4xl py-4 text-black">
          {lastSlide == 0
            ? "Types of Behaviour"
            : lastSlide == 1
            ? "Drag each statement to the correct category."
            : ""}
        </h1>

        <div className="w-full border-2 min-h-[200px] justify-center items-center p-2 bg-violet-100 rounded-lg">
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
              <div className=" w-full flex gap-10 justify-center items-center flex-col  min-h-[400px]">
                <Image
                  src="/C23Images/5-communication.png"
                  width={900}
                  height={100}
                  alt="slider img"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" w-full flex gap-10 justify-center items-center flex-col  min-h-[400px]">
                <Image
                  src="/C23Images/passive-agressive-quadrant.png"
                  className="rounded-lg"
                  width={500}
                  height={100}
                  alt="slider img"
                />
                <Link
                  href="https://nickwignall.com/assertiveness/"
                  className="text-sm"
                >
                  https://nickwignall.com/assertiveness/
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12">
                  <h3 className="text-xl text-black text-center ">
                    Differentiate between assertive behavior and those that show
                    passive, manipulative, aggressive or passive-aggressive
                    behaviour.
                  </h3>
                </div>
                <div className="col-span-4 w-full">
                  <div className="  border border-black rounded-lg overflow-y-auto p-1">
                    {filter.map((item, index) => (
                      <h3
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                        className="text-black text-center text-md border mt-1 active:cursor-grabbing hover:cursor-grab shadow-lg  rounded-lg p-2 "
                      >
                        {item.text}
                      </h3>
                    ))}
                  </div>
                </div>
                <div className="col-span-8 w-full ">
                  <div className="grid grid-cols-12 w-full place-items-center gap-1">
                    {dropData.map((item, index) => (
                      <div
                        key={index}
                        onDrop={(e) => handleDrop(e, item.name, index)}
                        onDragOver={(e) => e.preventDefault()}
                        style={{ backgroundColor: item.bg }}
                        className="col-span-6 p-2 rounded-lg  w-full min-h-[200px] min-w-[150px] flex justify-start items-center flex-col bg-amber-300"
                      >
                        <span className="text-xl font-bold">{item.name}</span>
                        {dropItems[index]?.map((item, index) => (
                          <span
                            key={index}
                            className="text-black text-center text-lg border mt-1 border-black rounded-lg p-2 "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ))}
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
      <Welldone open={open} setOpen={setOpen}/>
    </div>
  );
};

export default SlideStart;
