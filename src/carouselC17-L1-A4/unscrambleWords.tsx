"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UnscrambleSlide from "@/carouselC17-L1-A4/unscrambleSlide.json";
import bonuseSlide from "@/carouselC17-L1-A4/bonuseSlide.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function UnscrambleWords() {
  const { width, height } = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");
  const [confetti, setConfetti] = useState(false);
  const [showBtn,setShowBtn]=useState(lastSlide === 0);
  const [hintBtn,setHintBtn]=useState(false)
  const totalSlides = 1 + UnscrambleSlide.length + bonuseSlide.length;



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
    setConfetti(false);
    setInputText("");
    setHintBtn(false)
    setShowBtn(swipe.activeIndex === 0); 
  };

  const handleCheck = (correctText: string) => {
    // console.log(correctText)
    const upperLowerText = inputText.toLowerCase();
    // console.log(upperText)
    if (correctText == upperLowerText) {
      setConfetti(true);
      setShowBtn(true)
      setTimeout(() => {
        setConfetti(false);
      }, 8000);
    }
  };

  return (
    <div className="bg-white min-h-screen flex  flex-col items-center justify-center gap-3">
      <div className="w-[850px]  ">
        <h1 className="text-center text-4xl font-bold py-4 text-black">  {lastSlide === 0
    ? "Example"
    : lastSlide > 0 && lastSlide <= UnscrambleSlide.length
    ? "Unscramble Words"
    : lastSlide <= UnscrambleSlide.length + bonuseSlide.length
    ? "Bonus Words"
    : ""}</h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px] ">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {/* =================== example slide ================= */}
            <SwiperSlide>
           
              <div className="flex flex-col w-full min-h-[400px]  justify-center items-center gap-10">
                <h3 className="text-2xl text-black">For example</h3>
                <h4 className="text-3xl text-black">LIPNEC: PENCIL</h4>
              </div>
           
            </SwiperSlide>

            {UnscrambleSlide.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 place-items-center w-full">
                  <div className="col-span-6 w-[400px] h-[400px] border border-white relative flex justify-center items-center">
                  {
                    hintBtn ? 
                      <Image
                      src={item.image}
                    fill
                      alt="slide image"
                    />:
                    <button onClick={()=>setHintBtn(true)} className="bg-violet-900 text-white px-8 py-2 rounded-lg cursor-pointer ">Hint</button>
                  }
                  </div>
                  <div className="col-span-6 w-full flex justify-center items-center  gap-10 flex-col ">
                    <div className="flex justify-center items-center gap-2">
                      <h4 className="text-black text-2xl ">
                        {item.unscrambleText} :
                      </h4>
                      <input
                        className="text-black text-2xl w-[200px]  outline-none border-b-2 text-center  border-black  placeholder:text-lg placeholder:capitalize  "
                        name="text"
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="write the correct word"
                      />
                    </div>
                    <button
                      onClick={() => handleCheck(item.text)}
                      className=" bg-violet-800 cursor-pointer text-white px-8 py-1 rounded-lg"
                    >
                      check
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* =================== bonuseSlide ================= */}
            {bonuseSlide.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 place-items-center w-full">
                <div className="col-span-6 w-[400px] h-[400px] relative">
                    <Image
                      src={item.image}
                      fill
                      alt="slide image"
                    />
                  </div>
                  <div className="col-span-6 w-full flex justify-center items-center  gap-10 flex-col ">
                    <div className="flex justify-center items-center gap-2">
                      <h4 className="text-black text-2xl ">
                        {item.unscrambleText} :
                      </h4>
                      <input
                        className="text-black text-2xl w-[200px]  outline-none border-b-2 text-center  border-black  placeholder:text-lg placeholder:capitalize  "
                        name="text"
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="write the correct word"
                      />
                    </div>
                    <button
                      onClick={() => handleCheck(item.text)}
                      className=" bg-violet-800 cursor-pointer text-white px-8 py-1 rounded-lg"
                    >
                      check
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <Confetti
              width={width}
              height={height}
              className={` w-full h-full ${confetti ? "block" : "hidden"}`}
            />
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
            className={` ${lastSlide < totalSlides - 1 && showBtn ? "block":"hidden"} 
             border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                
             hover:scale-90 
               `}
          >
            <FaArrowRight
              className={`
              
              text-[40px]  cursor-pointer text-black `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
