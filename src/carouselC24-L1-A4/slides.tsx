"use client";
import React, {  useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";




const SlideStart = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  

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
      <div className="w-[950px]">
        <h1 className="text-center text-3xl  py-4 text-black">
        Use I-statements to inspire oneself
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
            <div className="min-h-[400px] p-5 flex justify-center items-center">
<h5 className="text-[35px] text-center text-black">You’ve to prepare for a poem recitation. But you are too shy to speak in front of people. And you’re fearful of forgetting the poem. </h5>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="min-h-[300px] p-5 flex justify-center items-center flex-col gap-5">
<h5 className="text-3xl font-bold text-center text-black">How will you inspire yourself?</h5>
<h5 className="text-3xl text-center text-black">Look into the mirror and say these I-statements </h5>
<ul className="list-disc">
  <li className="text-black text-2xl ">I am brave</li>
  <li className="text-black text-2xl ">I can do it</li>
  <li className="text-black text-2xl ">I’m capable</li>
  <li className="text-black text-2xl ">I will succeed</li>
  <li className="text-black text-2xl ">I am a learner</li>
  <li className="text-black text-2xl ">I am not afraid to fail</li>
  <li className="text-black text-2xl ">I am proud of myself</li>
  <li className="text-black text-2xl ">I will be happy after the recitation</li>
  <li className="text-black text-2xl ">I will practice until I’m confident</li>
  <li className="text-black text-2xl ">I will learn from this</li>
  <li className="text-black text-2xl ">I am confident</li>
</ul>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="min-h-[300px] p-5 flex justify-center items-center flex-col gap-5">
<h5 className="text-3xl font-bold text-center text-black">What would you say to others if you fail?</h5>
<ul className="list-disc w-[500px] space-y-3">
  <li className="text-black text-2xl ">I understand that I failed, but I’d appreciate it if you can be kind.</li>
  <li className="text-black text-2xl ">I see your point of view, but I do not like how you speak to me.</li>
  <li className="text-black text-2xl ">I see, but I don’t agree that people who fail are losers</li>
  <li className="text-black text-2xl ">I feel that you’re being very mean. I would appreciate some distance.</li>
  <li className="text-black text-2xl ">If you don’t stop, I will have to tell the teacher.</li>
</ul>
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
              lastSlide <2
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide <2  ? "block" : "hidden"
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
