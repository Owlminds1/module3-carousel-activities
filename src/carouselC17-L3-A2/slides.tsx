"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Welldone from "@/components/wellDone";
import Image from "next/image";
import Link from "next/link";

const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const [open, setOpen] = useState(false);

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
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[950px]">
        <h1 className="text-center text-2xl py-4 text-black">
          Pugh matrix to Decide
        </h1>

        <div className="w-full border-2 min-h-[200px] justify-center items-center p-2 bg-violet-100 rounded-lg">
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
              <div className="min-h-[500px] flex justify-center items-center gap-4 flex-col">
                <h4 className="text-black text-3xl font-medium ">Goal</h4>
                <div className="w-1/1 flex flex-col gap-5">
                  <p className="text-center text-black text-xl ">
                    You have to choose a sport to pursue.
                  </p>
                  <p className="text-center text-black text-xl ">
                    List different types of sports, the factors that are
                    important in playing each sport, and then finally score each
                    factor to make a thoughtful decision.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center gap-4 flex-col">
                <h4 className="text-black text-3xl font-bold">Example</h4>
                <h4 className="text-black text-2xl">
                  Goal: Decide ‘Where should I move to?’
                </h4>
                <Image
                  src="/C17Images/pugmetrix.jpg"
                  width={600}
                  height={100}
                  alt="pugmetrix"
                />

                <ul className="list-disc px-5 w-[700px] space-y-2">
                  <li>
                    <span className="font-bold">Row A</span> describes the
                    decision you are considering and evaluating i.e. where
                    should I move to?
                  </li>

                  <li>
                    <span className="font-bold">Column B</span>{" "}
                    {`lists all the
                    "factors important to this decision" i.e. family & friends
                    nearby/weather/cost of living/jobs/vicinity to major urban
                    amenities.`}
                  </li>

                  <li>
                    <span className="font-bold">Column C</span>
                    {`ranks each these
                    factors from 0 to 3. Rank: 0 = somewhat important, 1= pretty
                    important, 2 = very important, 3 = most important / must
                    have`}
                  </li>

                  <li>
                    <span className="font-bold">Row D</span>
                    {`lists the options
                    you are considering, i.e., your choices or possible
                    solutions. Cities such as Portland, LA, NYC, San Diego,
                    Minneapolis are the different options to choose From`}
                  </li>
                  <li>
                    <span className="font-bold">Column E</span>
                    {`for each sport
                    requires you to score the factors (from 0 to 3). score: 0 =
                    does not meet needs, 1 = somewhat meets needs (I can deal
                    with it, but it's not ideal), 2 = close to ideal, 3 = ideal`}
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center gap-4 flex-col">
                <h4 className="text-black text-2xl ">
                  Apply framework to your goal of choosing a sport.
                </h4>

                <Image
                  src="/C17Images/pugmetrix.jpg"
                  width={600}
                  height={100}
                  alt="pugmetrix"
                />

                <ul className="list-disc px-5 w-[700px] space-y-2">
                  <li>
                    <span className="font-bold">Row A</span>
                    {`describes the
                    decision you are considering and evaluating i.e. what sport
                    should I choose?`}
                  </li>

                  <li>
                    <span className="font-bold">Column B</span>
                    {`lists all the
                    "factors important to this decision" i.e. friends
                    /indoor-outdoor/location/scholarships/fitness/fun.`}
                  </li>

                  <li>
                    <span className="font-bold">Column C</span>
                    {`ranks each of
                    these factors from 0 to 3. Rank: 0 = somewhat important, 1=
                    pretty important, 2 = very important, 3 = most important /
                    must have`}
                  </li>

                  <li>
                    <span className="font-bold">Row D</span>
                    {`lists the options
                    you are considering, i.e., your choices or possible
                    solutions. Sports such as basketball/football/tennis/
                    cricket/squash/hockey/swimming are the different options to
                    choose from.`}
                  </li>
                  <li>
                    <span className="font-bold">Column E</span>{" "}
                    {`for each sport
                    requires you to score the factors (from 0 to 3). score: 0 =
                    does not meet needs, 1 = somewhat meets needs (I can deal
                    with it, but it's not ideal), 2 = close to ideal, 3 = ideal`}
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-[500px] flex justify-center items-center gap-4 flex-col">
                <h4 className="text-black text-2xl ">
                  Apply Pugh Matrix to decide what sports to pursue
                </h4>
                <div className=" flex justify-center items-center">
                  <Link
                    className="text-2xl text-blue-600"
                    href="https://wdh7gv.csb.app/"
                    target="blank"
                  >
                    https://wdh7gv.csb.app/
                  </Link>
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
              lastSlide < 3
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 3 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default SlideStart;
