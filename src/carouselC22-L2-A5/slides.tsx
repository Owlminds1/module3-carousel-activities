"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


type MyProps = {
  setIsFirstScreen: (value: string) => void;
};

const SlideStart = ({ setIsFirstScreen }: MyProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [showSol, setShowSol] = useState(false);

  const perent = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    if (lastSlide < 7 ) {
      swiperRef.current?.slideNext();
    } else {
      setIsFirstScreen("result");
    }
  };

  const handlePrev = () => {
    perent.current?.scroll(0,0)
    if (lastSlide > 0) {
      swiperRef.current?.slidePrev();

    }
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setShowSol(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[800px]">
        <h1 className="text-center text-2xl py-4 text-black">
          Fill out each situation by selecting the correct option to show one of
          the 7Cs of resilience.
        </h1>

        <div ref={perent} className={`mt-4 bg-violet-200 p-4 rounded-lg h-[400px] ${lastSlide > 6 ? "overflow-y-scroll":"overflow-hidden"}`}>
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
              <div className="flex justify-center items-center flex-col gap-5">
                <h3 className="text-black text-3xl font-bold">Confident</h3>

                <div className="text-xl text-black  text-center">
                  Raphael{" "}
                  <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />{" "}
                  <span className="font-bold">(fell/won)</span> during football.
                  When his parents suggested that he{" "}
                  <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />
                  <span className="font-bold">(rests/celebrate)</span> he did,
                  but{" "}
                  <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />
                  <span className="font-bold">(stopped/continued)</span> to play
                  football the next day.
                </div>

                {!showSol ? (
                  <div>
                    <button
                      className="text-xl text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowSol(true)}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className="text-2xl text-black  text-center bg-violet-100 p-4 rounded-lg">
                    Raphael <u>fell</u> during football. When his parents
                    suggested that he <u>rest</u> he did, but <u>continued</u>{" "}
                    to play football the next day.
                  </div>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center flex-col gap-5">
                <h3 className="text-black text-3xl font-bold">Connected</h3>

                <div className="text-xl text-black  text-center">
                  Sally went to her teachers to discuss some{" "}
                  <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />{" "}
                  <span className="font-bold">(funny/difficult)</span>{" "}
                  situations in class and came out{" "}
                  <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />{" "}
                  <span className="font-bold">(weaker/stronger)</span>.
                </div>

                {!showSol ? (
                  <div>
                    <button
                      className="text-xl text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowSol(true)}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className="text-2xl text-black  text-center bg-violet-100 p-4 rounded-lg">
                    Sally went to her teachers to discuss some <u>difficult</u>{" "}
                    situations in class and came out <u>stronger</u>.
                  </div>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center flex-col gap-5">
                <h3 className="text-black text-3xl font-bold">Coping</h3>

                <div className="text-xl text-black  text-center">
                Wally stood  <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(talking/silent)</span>when Ringo <input
                  placeholder="write here.."
                  type="text"
                  className="text-center w-[100px] outline-none border-b border-black"
                /> <span className="font-bold">(cried/shouted) </span>t him for taking his pencil without asking, and quietly <input
                placeholder="write here.."
                type="text"
                className="text-center w-[100px] outline-none border-b border-black"
              /> <span className="font-bold">(gossiped/apologized) </span> that he wouldn’t do it again.
                </div>

                {!showSol ? (
                  <div>
                    <button
                      className="text-xl text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowSol(true)}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className="text-2xl text-black  text-center bg-violet-100 p-4 rounded-lg">
                   Wally stood <u>silent</u> when Ringo <u>shouted</u> at him for taking his pencil without asking, and quietly <u>apologized</u> that he wouldn’t do it again.
                  </div>
                )}
              </div>
            </SwiperSlide>
            
            
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col gap-5">
                <h3 className="text-black text-3xl font-bold">Control</h3>

                <div className="text-xl text-black  text-center">
                Lina made a <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(plan/promise)</span> to study everyday for an exam that she had cleared with <input
                  placeholder="write here.."
                  type="text"
                  className="text-center w-[100px] outline-none border-b border-black"
                /> <span className="font-bold">(low/high)</span> marks the last time.                 </div>

                {!showSol ? (
                  <div>
                    <button
                      className="text-xl text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowSol(true)}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className="text-2xl text-black  text-center bg-violet-100 p-4 rounded-lg">
                  Lina made a <u>plan</u> to study everyday for an exam that she had cleared with <u>low</u> marks the last time.
                  </div>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center flex-col gap-5">
                <h3 className="text-black text-3xl font-bold">Contribute</h3>

                <div className="text-xl text-black  text-center">
                Yassar went to his local supermarket after a <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(fight/celebration)</span> with a friend and <input
                  placeholder="write here.."
                  type="text"
                  className="text-center w-[100px] outline-none border-b border-black"
                /> <span className="font-bold">(saw/bought)</span> a bag of chocolates for both.             </div>

                {!showSol ? (
                  <div>
                    <button
                      className="text-xl text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowSol(true)}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className="text-2xl text-black  text-center bg-violet-100 p-4 rounded-lg">
                Yassar went to his local supermarket after a <u>fight</u> with a friend and <u>bought</u> a bag of chocolates for both. 
                  </div>
                )}
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="flex justify-center items-center flex-col gap-5">
                <h3 className="text-black text-3xl font-bold">Competent</h3>

                <div className="text-xl text-black  text-center">
                Pauline practiced everyday to ace the gymnastics competition but was too <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(slow/fast)</span> in the semifinals. Later she learned to win <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(fast/slowly)</span> and <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(quickly/steadily)</span>.</div>

                {!showSol ? (
                  <div>
                    <button
                      className="text-xl text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowSol(true)}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className="text-2xl text-black  text-center bg-violet-100 p-4 rounded-lg">
               Pauline practiced everyday to ace the gymnastics competition but was too <u>fast</u> in the semifinals. Later she learned to win <u>slowly</u> and <u>steadily</u>.
                  </div>
                )}
              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className="flex justify-center items-center flex-col gap-5">
                <h3 className="text-black text-3xl font-bold">Character</h3>

                <div className="text-xl text-black  text-center">
                Theo was <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(cheered/bullied)</span> by a peer but when he came to <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(apologize/congratulate)</span>, Theo <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  /> <span className="font-bold">(welcomed/got)</span> him with open arms.   
            </div>

                {!showSol ? (
                  <div>
                    <button
                      className="text-xl text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowSol(true)}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className="text-2xl text-black  text-center bg-violet-100 p-4 rounded-lg">
             Theo was <u>bullied</u> by a peer but when he came to <u>apologize</u>, Theo <u>welcomed</u> him with open arms.
                  </div>
                )}
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="flex justify-center items-center flex-col gap-5">
                <h3 className="text-black text-3xl font-bold">Character</h3>
 
                <div className="text-xl text-black  text-left px-5">
                  <h4 className="text-red-400 text-left "> Dear me,</h4> <br />
                I am so proud of you. The other day, when you were faced with <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />, you showed competence by <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />. You not only had control through your <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />, but you also showed character by <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />. I’m glad that I’m you because your ________made me feel connected and confident. You also have such great coping skills because <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />. The way you contribute towards the community by <input
                    placeholder="write here.."
                    type="text"
                    className="text-center w-[100px] outline-none border-b border-black"
                  />_is just awesome. I’m so happy to be you. Keep up the good spirits!

<h4 className="text-black text-left py-5"> Yours sincerely</h4> 
<h4 className="text-black text-left "> Self</h4>
   
            </div>

                {!showSol ? (
                  <div>
                    <button
                      className="text-xl text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowSol(true)}
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <div className="text-2xl text-black  text-left bg-violet-100 p-4 rounded-lg">
                    <h4 className="text-black text-left py-5">Dear me,</h4> 
          I am so proud of you. The other day, when you were faced with rudeness (situation), you showed competence by <u> being polite</u>. You not only had control through your <u>positive mindset</u>, but you also showed character by <u> understanding the situation</u>.. I’m glad that I’m you because your <u> kind thoughts and words despite the harshness</u> made me feel connected and confident. You also have such great coping skills because <u>you stay vibrant and positive despite everything</u>. The way you contribute towards the community by <u>still being hopeful</u> and <u>loving in your heart</u> is just awesome. I’m so happy to be you. Keep up the good spirits!
          <h4 className="text-black text-left py-5"> Yours sincerely</h4> 
          <h4 className="text-black text-left "> Self</h4>
                  </div>
                )}
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
              lastSlide < 9 && showSol
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 9 && showSol ? "block" : "hidden"
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
