"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

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
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-4xl py-4 text-black">
          Revise Decision Making Skills
        </h1>

        {/* Fixed Height Outer Wrapper */}
        <div className="w-full border-2 h-[400px] bg-violet-100 rounded-lg">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="h-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="h-full overflow-y-auto p-5 flex items-center flex-col gap-9">
                <h2 className="text-center text-2xl text-black">
                  Decide activities to do for the awareness campaign: Protecting
                  planet earth
                </h2>
                <div>
                  <span className="font-bold text-lg text-left">Think of:</span>
                  <ul className="list-disc ml-6">
                    <li className="text-black text-xl">
                      What activities can be done?
                    </li>
                    <li className="text-black text-xl">
                      Feasibility of each activity.
                    </li>
                    <li className="text-black text-xl">
                      Actionable tasks list
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="h-full overflow-y-auto p-5 flex flex-col gap-9">
                <h2 className="text-center text-2xl text-black">
                  Let’s revise the steps to make decision
                </h2>

                {/* Step 1 */}
                <div className="p-3 bg-violet-300 rounded-lg">
                  <span className="font-bold text-lg text-left">Step 1</span>
                  <div>
                    <label
                      className="text-xl text-black font-medium"
                      htmlFor="step1"
                    >
                      State the decision to evaluate What activities are
                      effective for earth awareness week?
                    </label>
                    <textarea
                      className="text-center text-lg text-black min-h-[100px] w-full rounded-lg outline-none border border-black mt-2"
                      id="step1"
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-3 bg-violet-300 rounded-lg">
                  <span className="font-bold text-lg text-left">Step 2</span>
                  <div>
                    <label
                      className="text-xl text-black font-medium"
                      htmlFor="step2"
                    >
                      List the factors that would impact the outcome of your
                      decision
                    </label>
                    <textarea
                      className="text-center text-lg text-black min-h-[100px] w-full rounded-lg outline-none border border-black mt-2"
                      id="step2"
                    />
                    <div className="text-center w-full flex justify-center items-center flex-col gap-8 mt-4">
                      {!step2 ? (
                        <button
                          onClick={() => setStep2(true)}
                          className="px-8 cursor-pointer py-2 bg-violet-900 rounded-lg text-white"
                        >
                          Show List
                        </button>
                      ) : (
                        <ul className="list-disc ml-6">
                          <li className="text-black text-xl text-left">
                            Number of participants
                          </li>
                          <li className="text-black text-xl text-left">
                            Weather
                          </li>
                          <li className="text-black text-xl text-left">
                            Budget
                          </li>
                          <li className="text-black text-xl text-left">
                            Implementation
                          </li>
                          <li className="text-black text-xl text-left">
                            Accessibility
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-3 bg-violet-300 rounded-lg">
                  <span className="font-bold text-lg text-left">Step 3</span>
                  <div>
                    <label
                      className="text-xl text-black font-medium"
                      htmlFor="step3"
                    >
                      List the tasks that can potentially be performed during
                      the awareness campaign
                    </label>
                    <textarea
                      className="text-center text-lg text-black min-h-[100px] w-full rounded-lg outline-none border border-black mt-2"
                      id="step3"
                    />
                    <div className="text-center w-full flex justify-center items-center flex-col gap-8 mt-4">
                      {!step3 ? (
                        <button
                          onClick={() => setStep3(true)}
                          className="px-8 cursor-pointer py-2 bg-violet-900 rounded-lg text-white"
                        >
                          Show List
                        </button>
                      ) : (
                        <ul className="list-disc ml-6">
                          <li className="text-black text-xl text-left">
                            3Rs (reduce, reuse, recycle)
                          </li>
                          <li className="text-black text-xl text-left">
                            Composting
                          </li>
                          <li className="text-black text-xl text-left">
                            Planting Trees
                          </li>
                          <li className="text-black text-xl text-left">
                            Purifying water areas
                          </li>
                          <li className="text-black text-xl text-left">
                            Presentation of community projects
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full overflow-y-auto p-5 flex flex-col gap-9">
                <h2 className="text-center text-2xl text-black">
                Apply a framework to take decision
                </h2>
<div className="flex justify-start items-center flex-col gap-7">
  <Image src="/C24Images/decision_making_tool.png" width={600} height={100} alt="slie image"/>

   <ul className="list-disc space-y-3 ml-6">
                          <li className="text-black text-xl text-left">
                          {`Row A describes the decision you are considering and
evaluating i.e. what activities should I choose for earth week?`}

                          </li>
                          <li className="text-black text-xl text-left">
                          {`Column B lists all the "factors important to this decision" i.e.. number of number of participants/Weather/Budget/Implementation/Accessibility `}
                          </li>
                          <li className="text-black text-xl text-left">
                         {` Column C ranks each of these factors from 0 to 3. Rank: 0 = somewhat important, 1= pretty important, 2 = very important, 3 = most important / must have`}
                          </li>
                          <li className="text-black text-xl text-left">
                         {` Row D lists the options you are considering, i.e., your choices or possible solutions. 3Rs/Composting/Planting Trees/Purifying water areas/Presentation of community projects  are the different options to choose from.`}
                          </li>
                          <li className="text-black text-xl text-left">
                          {`Column E for each activity requires you to score the factors (from 0 to 3).
score: 0 = does not meet needs, 1 = somewhat meets needs
(I can deal with it, but it's not ideal), 2 = close to ideal, 3 = ideal`}

                          </li>
                        </ul>
</div>
             
                
              </div>
            </SwiperSlide>


             {/* Slide 4 */}
             <SwiperSlide>
              <div className="h-full overflow-y-auto p-5 flex justify-center flex-col gap-9">
                <h2 className="text-center text-2xl text-black">
                Let’s use the Pugh Matrix tool                </h2>

<div className="w-full text-center">
<Link className="text-lg text-white bg-violet-900 px-8 py-2 rounded-lg" href="https://wdh7gv.csb.app/"> Pugh Matrix</Link>

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
    </div>
  );
};

export default SlideStart;
