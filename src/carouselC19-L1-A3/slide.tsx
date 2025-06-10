"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import MoodMeter from "./moodMeter";
import masterList from "@/carouselC19-L1-A3/masterList.json";
import DropMenu from "@/components/dropMenu";



const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [emtyList, setEmtyList] = useState(false);
  const [filter, setFilter] = useState(masterList);
  const [dropItems, setDropItems] = useState<string[]>([]);

  const [valueList, setValueList] = useState<number[]>([]);
  const [dropdownOpenList, setDropdownOpenList] = useState<boolean[]>([]);

  const getColor = (value: number) => {

    if (value < 25) return "#f87171";
    if (value < 50) return "#00fffb";
    if (value < 75) return "#00ff00";
    return "#fde047";
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
    if (lastSlide == masterList.length - 1) {
      // setIsFirstScreen("LastSlide");
    }
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };
  const handleDrag = (e: React.DragEvent, text: string) => {
    e.dataTransfer.setData("drag", text);
  };
  const handleDrop = (e: React.DragEvent) => {
    const dropItem = e.dataTransfer.getData("drag");

    setDropItems((prev) => {
      const updated = [...prev, dropItem];
      // Timeout to wait for DOM update
      setTimeout(() => {
        swiperRef.current?.updateAutoHeight();
      }, 0);
      return updated;
    });

    const updateFilter = filter.filter((i) => i.text !== dropItem);
    setValueList((prev) => [...prev, 50]);
    setDropdownOpenList((prev) => [...prev, false]);
    setFilter(updateFilter);
    if (updateFilter.length === 0) setEmtyList(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5 h-full">
      <div className="w-[900px] h-full">
        <h1 className="text-center text-2xl font-bold py-4 text-black">
          Mood Meter
        </h1>

        <div className="border-2 h-full flex justify-center items-center p-2 bg-violet-100 rounded-lg ">
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
              <div className="w-full  flex justify-center items-center">
                <MoodMeter />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full gap-2 h-full ">
                <div className="col-span-12 w-full text-center text-xl p-3">Think about your last weekend from start to end. What are the events that happened? How did they make you feel? </div>
                <div
                  className={`${
                    emtyList ? "hidden" : "block"
                  } col-span-4 w-full min-h-[450px] max-h-[450px] h-full border border-violet-900 p-3 rounded-lg flex justify-center items-center flex-col gap-2`}
                >
                  {filter.map((item, index) => (
                    <h3
                      draggable
                      onDragStart={(e) => handleDrag(e, item.text)}
                      className="active:cursor-grabbing hover:cursor-grab text-black border shadow-lg p-1 min-w-[200px] text-center text-lg rounded-lg"
                      key={index}
                    >
                      {item.text}
                    </h3>
                  ))}
                </div>
                <div
                  className={`${
                    emtyList ? "col-span-12" : "col-span-8"
                  }  w-full h-full border border-black p-3 flex  items-center flex-col gap-5 rounded-lg `}
                  onDrop={(e) => handleDrop(e)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-12 w-full gap-1 ">
                    <div className="col-span-4 w-full text-center p-2 bg-violet-900 text-white">
                      What happened?
                    </div>
                    <div className="col-span-4 w-full text-center p-2 bg-violet-900 text-white">
                      How did you feel
                    </div>
                    <div className="col-span-4 w-full text-center p-2 bg-violet-900 text-white">
                      Mood Meter colour
                    </div>
                  </div>
                  {dropItems.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-12 w-full place-items-center gap-1  "
                    >
                      <div className="col-span-4 w-full p-1 text-center  font-medium">
                        {item}
                      </div>

                      <div className="col-span-4 w-full p-1 text-center">
                        <DropMenu
                          open={dropdownOpenList[index]}
                          setOpen={(val: boolean) => {
                            const updated = [...dropdownOpenList];
                            updated[index] = val;
                            setDropdownOpenList(updated);
                          }}
                        />
                      </div>

                      <div className="col-span-4 w-full p-1 text-center flex justify-center items-center">
                        <div className="w-full flex items-center justify-center">
                          <input
                            title="mood"
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={valueList[index]}
                            onChange={(e) => {
                              const updated = [...valueList];
                              updated[index] = Number(e.target.value);
                              setValueList(updated);
                            }}
                            className="custom-slider"
                            style={{
                              background: `linear-gradient(to right, ${getColor(
                                valueList[index]
                              )} 0%, ${getColor(valueList[index])} ${
                                valueList[index]
                              }%, #e5e7eb ${valueList[index]}%)`,
                              ["--thumb-color" as string]: getColor(
                                valueList[index]
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

export default Slide;
