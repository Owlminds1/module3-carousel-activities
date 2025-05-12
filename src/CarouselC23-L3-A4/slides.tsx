"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/CarouselC23-L3-A4/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CheckboxWithText } from "@/components/checkBox";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function SlideStart({ setIsFirstScreen }: SlideProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [showBtn, setShowbtn] = useState<boolean>(false);
  const perent = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (perent.current) {
      perent.current.scrollTop = 0; // scroll to top on every Next
    }
    if (lastSlide == 2) {
      setIsFirstScreen("Result");
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (perent.current) {
      perent.current.scrollTop = 0; // scroll to top on every Next
    }
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };

 
  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[900px]  ">
        <h1 className="text-center text-3xl font-bold py-4 text-black">
          Practise using I-statements for an assertive response.
        </h1>

        <div
          ref={perent}
          className="border-2 p-2 bg-violet-100 rounded-lg "
        >
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
              <div className="gap-5 w-full   ">
                <div className="flex justify-center items-center min-h-[500px] gap-10 flex-col">
                  <h5 className="text-center text-2xl  ">
                    Read the following situations. Select any one to frame an
                    assertive response.
                  </h5>
                  <div className="w-[550px] flex justify-center items-center flex-col gap-8 ">
                    <CheckboxWithText name="You’re in the classroom listening to the teacher, but some students keep interrupting the class with their misbehavior." />
                    <CheckboxWithText name="You’re in the cafeteria and some students gossip about you without directly speaking to you" />{" "}
                    <CheckboxWithText name="Your parents or siblings keep interrupting your quiet time" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="gap-5 w-full   border-2 p-2 bg-violet-100 rounded-lg min-h-[200px] ">
                <div className="flex justify-center items-center gap-10 flex-col">
                  <h5 className="text-center text-2xl  ">
                    {" "}
                    Read the I-statements you can use.
                  </h5>
                  <ul className="list-disc space-y-4">
                    <li className="text-black text-xl font-medium">
                      I hope that…
                    </li>

                    <li className="text-black text-xl font-medium">
                      I understand, but…
                    </li>

                    <li className="text-black text-xl font-medium">
                      I would like to…
                    </li>

                    <li className="text-black text-xl font-medium">
                      I suggest that…
                    </li>
                    <li className="text-black text-xl font-medium">
                      I respectfully disagree…
                    </li>

                    <li className="text-black text-xl font-medium">
                      I want us to…
                    </li>

                    <li className="text-black text-xl font-medium">
                      I would really appreciate it if…
                    </li>

                    <li className="text-black text-xl font-medium">
                      I feel that…
                    </li>

                    <li className="text-black text-xl font-medium">
                      I think that…
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-x-4 place-items-center w-full gap-y-10">
                <div className="col-span-12 w-full">
                  <h5 className="text-center text-2xl  ">
                    Write your answer here
                  </h5>
                </div>

                <div className="col-span-12 w-full">
                  <div className="grid grid-cols-12 place-items-center w-full gap-2">
                    {SlideData.map((item, index) => (
                      <div
                        key={index}
                        style={{ backgroundColor: item.bg }}
                        className="col-span-6 w-full min-h-[200px] flex justify-start items-center gap-3 flex-col  p-2 rounded-lg"
                      >
                        <h3 className="text-center font-bold text-xl">
                          {item.name}
                        </h3>
                        <textarea
                          className="text-center text-lg text-black min-h-[80px] border border-gray-500 outline-black rounded-lg w-full"
                          placeholder="Write your answer here"
                        />
                      
                      <p className="text-center text-md font-medium">{item.sugge}</p>
                      </div>

                    ))}
                  </div>
                  
                </div>
                {
                  !showBtn ? 
                          <button
                            onClick={()=>setShowbtn(true)}
                            className= "col-span-12 text-white bg-violet-900 px-4 py-1 text-xl text-center cursor-pointer rounded-lg"
                          >
                            Check
                          </button>
                          :

                <div className="col-span-12 w-full p-3 flex justify-center items-center flex-col gap-5 ">
                   
                          
                  <h5 className="text-center text-4xl  ">Example</h5>
                  <div>
                    <span className="text-xl font-bold bg-[#f8ae88] p-1">
                      I feel annoyed
                    </span>
                    <span className="text-xl font-bold bg-[#ebd1dc] p-1">
                      {" "}
                      when you keep on checking if I’ve done my homework
                    </span>
                    <span className="text-xl font-bold bg-[#cfe2f3] p-1 ">
                      {" "}
                      because it tells me you do not trust me.
                    </span>
                    <span className="text-xl font-bold bg-[#b6d7a8] p-1 ">
                      {" "}
                      I need to prove that I can do it on my own.
                    </span>
                  </div>
                </div>
                }
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
              lastSlide < 3
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`${
                lastSlide < 3 ? "block" : "hidden"
              } text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
