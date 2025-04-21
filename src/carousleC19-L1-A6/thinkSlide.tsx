import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Data from "@/carousleC19-L1-A6/data.json";
import Data2 from "@/carousleC19-L1-A6/data2.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

const ThinkSlide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    // if (lastSlide - 1) {
    // }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    // if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    // if (lastSlide - 1) return;
    //  setIsFirstScreen("result");
  };
  return (
    <div className="min-h-screen flex justify-center items-center p-5 bg-[#F8FAFC] flex-col">
      <h4 className="text-black py-5 text-center font-bold text-2xl ">
        {lastSlide == 0
          ? "One nice thing in my life"
          : lastSlide
          ? " Complete the sentence to describe what made you feel good."
          : "Thank you note"}
      </h4>
      <div className="w-[900px] ">
        <div className="border-2  flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px] ">
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
              <div className="flex flex-col justify-center items-center gap-5">
                <p className="text-2xl py-2 text-black text-center ">
                  Think of people, objects, places, creatures that make you feel
                  nice or good.
                </p>
                <div className="grid grid-cols-12 w-full place-items-center gap-3">
                  <div className="col-span-6 w-full flex justify-center item-center flex-col gap-1">
                    <h4 className="bg-violet-900 text-white text-center  text-xl  rounded-lg p-1 w-full">
                      Place
                    </h4>
                    <div className="w-[200px]  relative h-[200px] mx-auto my-0">
                      <Image
                        src="/C19Images/places.png"
                        fill
                        alt="C19 images"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 w-full flex justify-center item-center flex-col gap-1">
                    <h4 className="bg-violet-900 text-white text-center  text-xl  rounded-lg p-1 w-full">
                    People
                    </h4>
                    <div className="w-[200px]  relative h-[200px] mx-auto my-0">
                      <Image
                        src="/C19Images/people.png"
                        fill
                        alt="C19 images"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 w-full flex justify-center item-center flex-col gap-1">
                    <h4 className="bg-violet-900 text-white text-center  text-xl  rounded-lg p-1 w-full">
                    Objects
                    </h4>
                    <div className="w-[200px]  relative h-[200px] mx-auto my-0">
                      <Image
                        src="/C19Images/objects.png"
                        fill
                        alt="C19 images"
                      />
                    </div>
                  </div> 
                  
                     <div className="col-span-6 w-full flex justify-center item-center flex-col gap-1">
                    <h4 className="bg-violet-900 text-white text-center  text-xl  rounded-lg p-1 w-full">
                    Creatures
                    </h4>
                    <div className="w-[200px]  relative h-[200px] mx-auto my-0 ">
                      <Image
                        src="/C19Images/creature.png"
                        fill
                        alt="C19 images"
                  
                      />
                    </div>
                  </div>
                
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 p-10 place-items-center gap-1 w-full ">
                <div className="col-span-6 w-full text-center text-white rounded-lg p-1 bg-violet-900">
                  Place
                </div>
                <div className="col-span-6 w-full text-center text-white rounded-lg p-1 bg-violet-900">
                  People
                </div>

                {/* ====================pepole and Place data ================ */}
                {Data.map((item, index) => (
                  <div key={index} className="col-span-6 border border-black  w-full text-center text-white rounded-lg p-1">
                    <div className="flex w-full justify-center items-center  gap-3">
                      <h5 className="text-black font-bold ">{item.text}</h5>
                      <textarea
                        className="text-black text-lg outline-none border-b border-black h-[30px] w-[100px] placeholder:text-gray-700 placeholder:text-sm"
                        placeholder="write here "
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* ====================pepole and Place data ================ */}
              <div className="grid grid-cols-12 p-10  py-2 place-items-center gap-1 w-full ">
                <div className="col-span-6 w-full text-center text-white rounded-lg p-1 bg-violet-900">
                  Objects
                </div>
                <div className="col-span-6 w-full text-center text-white rounded-lg p-1 bg-violet-900">
                  Creatures
                </div>

                {/* ====================pepole and Place data ================ */}
                {Data2.map((item, index) => (
                  <div key={index} className="col-span-6 border border-black  w-full text-center text-white rounded-lg p-1">
                    <div className="flex w-full justify-center items-center  gap-3">
                      <h5 className="text-black font-bold ">{item.text}</h5>
                      <textarea
                        className="text-black text-lg outline-none border-b border-black h-[30px] w-[100px] placeholder:text-gray-700 placeholder:text-sm"
                        placeholder="write here "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full p-10   flex justify-center items-center gap-8 flex-col">
                <p className="text-black text-2xl  text-center min-h-[50px]">
                  Fill in the blanks to complete the note.
                </p>

                {/* ====================pepole and Place data ================ */}

                <div className="flex justify-center items-center min-w-full  gap-3">
                  <h5 className="text-black text-2xl font-bold min-w-[250px] text-left">
                    Dear
                  </h5>
                  <textarea
                    className="text-black text-xl outline-none border-b text-center border-black h-[30px] w-[200px] placeholder:text-center placeholder:text-gray-700 placeholder:text-lg"
                    placeholder="write here"
                  />
                  <span className="min-w-[300px] text-lg text-black">{`(name)`}</span>
                </div>
                <div className="flex justify-center items-center  gap-3  min-w-full">
                  <h5 className="text-black text-2xl font-bold min-w-[300px] text-center ">
                    Thank you for doing{" "}
                  </h5>
                  <textarea
                    className="text-black text-xl outline-none border-b text-center border-black h-[30px] w-[200px] placeholder:text-center placeholder:text-gray-700 placeholder:text-lg"
                    placeholder="write here"
                  />
                  <span className="min-w-[300px] text-lg text-black">{`[state what - a nice thing/being so nice]. `}</span>
                </div>
                <div className="flex justify-center items-center  gap-3  min-w-full">
                  <h5 className="text-black text-2xl font-bold min-w-[250px] text-left ">
                    I really appreciate{" "}
                  </h5>
                  <textarea
                    className="text-black text-xl outline-none border-b text-center border-black h-[30px] w-[200px] placeholder:text-center placeholder:text-gray-700 placeholder:text-lg"
                    placeholder="write here"
                  />
                  <span className="min-w-[300px] text-lg text-black">{`[describe action] `}</span>
                </div>

                <div className="flex justify-center items-center  gap-3  min-w-full">
                  <h5 className="text-black text-2xl font-bold min-w-[250px] text-left ">
                    It made me
                  </h5>
                  <textarea
                    className="text-black text-xl outline-none border-b text-center border-black h-[30px] w-[200px] placeholder:text-center placeholder:text-gray-700 placeholder:text-lg"
                    placeholder="write here"
                  />
                  <span className="min-w-[300px] text-lg text-black">{`[describe how it made you feel]`}</span>
                </div>
                <div className="flex justify-center items-center  gap-3  min-w-full">
                  <h5 className="text-black text-2xl font-bold  text-center "></h5>
                  <textarea
                    className="text-black text-xl outline-none border-b text-center border-black h-[30px] w-[250px] placeholder:text-center placeholder:text-gray-700 placeholder:text-lg"
                    placeholder="write here"
                  />
                  <span className="min-w-[300px] text-lg text-black">{`[Lovingly (for close people/ sincerely (for respectful salutation]`}</span>
                </div>
                <div className="flex justify-center items-center  gap-3  min-w-full">
                  <textarea
                    className="text-black text-xl outline-none border-b text-center border-black h-[30px] w-[250px] placeholder:text-center placeholder:text-gray-700 placeholder:text-lg"
                    placeholder="write here"
                  />
                  <h5 className="text-black text-2xl font-bold min-w-[400px] text-left ">
                    your name.
                  </h5>
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
              className={` ${lastSlide > 0 ? "block" :"hidden"} text-[40px]  cursor-pointer  text-black`}
              onClick={handlePerv}
            />
          </div>

          <div
            className={` ${lastSlide < 2 ? "block" : "hidden"}
          
                 border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
               
             hover:scale-90 
                     `}
          >
            <FaArrowRight
              className={` text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkSlide;
