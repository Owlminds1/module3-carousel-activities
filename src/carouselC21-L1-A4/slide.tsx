"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Slide() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);

    //  setIsFirstScreen("result");
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3 p-5">
      <div className="w-[900px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          {lastSlide == 0
            ? "Best practices of describing"
            : lastSlide == 1
            ? "Audio recording of the text"
            : "Your turn"}
        </h1>
        <div className="w-full  border-2 p-2  bg-violet-100 rounded-lg min-h-[300px]">
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
              <div className="min-h-[300px] flex justify-center items-center">
                <ul className="list-disc space-y-4 p-5 ">
                  <li className="text-black  text-2xl ">
                    Use a lot of verbs like play and adjectives like sweet.
                  </li>
                  <li className="text-black  text-2xl ">
                    Connect sentences with link words such as: but, then, also,
                    and.
                  </li>
                  <li className="text-black  text-2xl ">
                    Describe as a complete action.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[300px] flex justify-center items-center">
                <audio
                  src="/sound/C21Sound/ElevenLabs.mp3 "
                  className="invert"
                  controls
                ></audio>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 min-h-[300px] gap-10 place-items-center">
                <div className="col-span-12 p-2">
                  <span className="text-2xl bg-violet-900 text-white px-5 py-1 rounded-lg ">Tell a story about one of the two places using the word pool in five minutes!</span>
                </div>
                <div className="col-span-6 p-2 w-full h-full flex justify-start items-center flex-col">
                  <h5 className="text-3xl font-bold text-black">Describe</h5>
                  <ul className="p-2 space-x-2 list-disc">
                    <li className="text-black text-xl">Playground </li>
                    <li className="text-black text-xl">School</li>
                  </ul>
                </div>
                <div className="col-span-6">
                  <h5 className="text-3xl font-bold text-black text-center py-2">Word Pool</h5>
                  <ul className="p-2 space-x-2 list-disc">
                    <li className="text-black text-xl">
                      Action words [Verbs] - went, played, did, saw, laughed,
                      slept, shared, felt, walked, ate, watched, heard, smiled.{" "}
                    </li>
                    <li className="text-black text-xl">
                      Quality [Adjectives]: happy, tired, sleepy, brave, cool,
                      sweet, beautiful, sunny, lovely.
                    </li>
                    <li className="text-black text-xl">
                      Link words: and, but, when, so, then, finally
                    </li>
                    <li className="text-black text-xl">
                    Descriptors: 
                      <ul>
                        <li>I was so….that I…</li>
                        <li>I was very …..</li>
                        <li>I played with….</li>
                        <li>I saw….</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
              lastSlide < 2
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < 2 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
