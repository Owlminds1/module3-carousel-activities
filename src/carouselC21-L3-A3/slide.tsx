"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

type myProps ={
  setIsFirstScreen:(value:string)=>void
}
const Slide = ({setIsFirstScreen}:myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [showBtn, setShowBtn] = useState(false);
  const [textareaVal, setTextareaVal] = useState({
    first: "Tom plays with Jerry all the time",
    sec: "Jerry plays with Tom all the time",
    third: "With all Tom and Jerry play the time",
    four: "All with Tom and the time plays Jerry",
    five: "Time the play with Tom, Jerry, and all",
    six: "The Play with Tom and all-time Jerry",
    seven: "Jerry and Tom play time with all",
  });

  const [answerSol,setAnswerSol]=useState(false)

  const handleNext = () => {
    swiperRef.current?.slideNext();
    if(lastSlide > 2){
  setIsFirstScreen("result")
    }
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setShowBtn(false)
  };

  const handleAdd = () => {
    setList((prev) => [...prev, inputVal]);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[900px]">
        <h4 className="text-center text-3xl font-bold py-4 text-black">
          {lastSlide === 0
            ? "Example"
            : lastSlide === 1
            ? "Make different sentences using these words"
            : lastSlide === 2
            ? "Use pause to stress on relevant parts of the sentence and see how the meaning changes."
            : lastSlide === 3 ?"Add pause by adding / at appropriate places":""}
        </h4>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[300px]">
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
              <div className="flex  items-center justify-center flex-col w-full min-h-[300px] gap-8">
                <div className="w-full">
                  <div className="grid grid-cols-12 place-items-center py-1 gap-2 w-full">
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        She
                      </h4>
                    </div>
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        play/plays
                      </h4>
                    </div>
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        smoothly{" "}
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 place-items-center py-1 gap-2 w-full">
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        with
                      </h4>
                    </div>
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        her{" "}
                      </h4>
                    </div>
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        friends{" "}
                      </h4>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-xl text-black">
                    <span className="font-bold">Sentence 1:</span> She plays
                    smoothly with her friends
                  </h5>
                  <span className="text-black text-lg text-center ">
                    This sentence answers the questions:
                  </span>
                  <ul className="list-disc pl-5  ">
                    <li className="text-black text-lg">
                      Who does she play with?
                    </li>
                    <li className="text-black text-lg">How does she play?</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl text-black">
                    <span className="font-bold">Sentence 2:</span> She and her
                    friends play smoothly.
                  </h5>
                  <span className="text-black text-lg text-center ">
                    The second sentence answers the question :
                  </span>
                  <ul className="list-disc pl-5  ">
                    <li className="text-black text-lg">
                      How does she play with her friends?
                    </li>
                    <li className="text-black text-lg">
                      She plays with her friends
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* secound slide ============== */}
            <SwiperSlide>
              <div className="flex  items-start p-2 justify-center  w-full min-h-[300px] gap-8">
                <div className="w-full">
                  <div className="grid grid-cols-12 place-items-center py-1 gap-2 w-full">
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        Tom
                      </h4>
                    </div>
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        play/plays
                      </h4>
                    </div>
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        All
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 place-items-center py-1 gap-2 w-full">
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        Jerry
                      </h4>
                    </div>
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        With/And
                      </h4>
                    </div>
                    <div className="col-span-4 w-full">
                      <h4 className="text-lg text-black border border-black text-center">
                        The time
                      </h4>
                    </div>
                  </div>
                  <div className="pt-5  flex justify-around items-center gap-10">
                    <div>
                      <input
                        type="text"
                        className="text-center text-black min-h-[100px] min-w-[300px] text-xl outline-none border-b px-1 border-black"
                        placeholder="write sentence"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                      />
                      <button
                        className="text-lg px-8 ml-2 py-1 rounded-lg bg-violet-900 text-white"
                        onClick={handleAdd}
                      >
                        add
                      </button>
                    </div>
                    <div className="bg-violet-200  rounded-lg overflow-y-scroll h-[200px] min-w-[400px]  ">
                      <ul className="p-1 space-y-1">
                        {list.map((item, index) => (
                          <li
                            className="text-center w-full border border-black text-lg rounded-lg  "
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center item-center flex-col  mt-5">
                    <div className="text-center">
                      <button
                        disabled={list.length === 0}
                        onClick={() => setShowBtn(true)}
                        className={`
                    text-2xl  px-8 py-1 rounded-lg  text-white ${
                      list.length === 0
                        ? "cursor-not-allowed bg-green-300"
                        : "cursor-pointer bg-green-500"
                    }`}
                      >
                        Solution
                      </button>
                    </div>
                    <div
                      className={`${
                        showBtn ? "block" : "hidden"
                      } flex justify-center items-center`}
                    >
                      <ul className="list-disc p-5 ">
                        <li className="text-lg text-black ">
                          Tom and Jerry play all the time
                        </li>
                        <li className="text-lg text-black ">
                          Tom plays with Jerry all the time
                        </li>
                        <li className="text-lg text-black ">
                          Jerry plays with Tom all the time
                        </li>
                        <li className="text-lg text-black ">
                          With all Tom and Jerry play the time
                        </li>
                        <li className="text-lg text-black ">
                          All with Tom and the time plays Jerry
                        </li>
                        <li className="text-lg text-black ">
                          Time the play with Tom, Jerry, and all
                        </li>
                        <li className="text-lg text-black ">
                          The Play with Tom and all-time Jerry
                        </li>
                        <li className="text-lg text-black ">
                          Jerry and Tom play time with all
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* third slide ============== */}
            <SwiperSlide>
              <div className="flex justify-center items-center min-h-[300px]  ">
                <ul className="list-disc space-y-8">
                  <li className="text-2xl text-black ">
                    Tom and Jerry/play/all the time{" "}
                  </li>
                  <li className="text-2xl text-black">
                    Tom/and/Jerry/play all the time
                  </li>
                  <li className="text-2xl text-black ">
                    Tom/and Jerry/play/all the time
                  </li>
                  <li className="text-2xl text-black ">
                    Tom and Jerry/play all the time
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* fourth slide ============== */}
            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center">
                <div className="flex justify-center flex-col gap-2 items-center min-h-[300px] col-span-6 w-full  ">
                  <textarea
                    className="text-xl px-2 outline-none border border-black rounded-lg h-[50px] min-w-[400px] text-center text-black"
                    value={textareaVal.first}
                    onChange={(e) =>
                      setTextareaVal((prev) => ({
                        ...prev,
                        first: e.target.value,
                      }))
                    }
                    placeholder="te"
                  />

                  {/* ======secounde ==== */}
                  <textarea
                    className="text-xl px-2 outline-none border border-black rounded-lg h-[50px] min-w-[400px] text-center text-black   "
                    value={textareaVal.sec}
                    onChange={(e) =>
                      setTextareaVal((prev) => ({
                        ...prev,
                        sec: e.target.value,
                      }))
                    }
                    placeholder="te"
                  />

                  {/* ======third ==== */}
                  <textarea
                    className="text-xl px-2 outline-none border border-black rounded-lg h-[50px] min-w-[400px] text-center text-black"
                    value={textareaVal.third}
                    onChange={(e) =>
                      setTextareaVal((prev) => ({
                        ...prev,
                        third: e.target.value,
                      }))
                    }
                    placeholder="te"
                  />

                  {/* ======four ==== */}
                  <textarea
                    className="text-xl px-2 outline-none border border-black rounded-lg h-[50px] min-w-[400px] text-center text-black"
                    value={textareaVal.four}
                    onChange={(e) =>
                      setTextareaVal((prev) => ({
                        ...prev,
                        four: e.target.value,
                      }))
                    }
                    placeholder="te"
                  />

                  {/* ======five ==== */}
                  <textarea
                    className="text-xl px-2 outline-none border border-black rounded-lg h-[50px] min-w-[400px] text-center text-black"
                    value={textareaVal.five}
                    onChange={(e) =>
                      setTextareaVal((prev) => ({
                        ...prev,
                        five: e.target.value,
                      }))
                    }
                    placeholder="te"
                  />

                  {/* ======six ==== */}
                  <textarea
                    className="text-xl px-2 outline-none border border-black rounded-lg h-[50px] min-w-[400px] text-center text-black"
                    value={textareaVal.six}
                    onChange={(e) =>
                      setTextareaVal((prev) => ({
                        ...prev,
                        six: e.target.value,
                      }))
                    }
                    placeholder="te"
                  />

                  {/* ======seven ==== */}
                  <textarea
                    className="text-xl px-2 outline-none border border-black rounded-lg h-[50px] min-w-[400px] text-center text-black"
                    value={textareaVal.seven}
                    onChange={(e) =>
                      setTextareaVal((prev) => ({
                        ...prev,
                        seven: e.target.value,
                      }))
                    }
                    placeholder="te"
                  />
                </div>

                <div className="col-span-6 w-full h-full p-5 flex justify-start items-center flex-col ">
                  {
                    answerSol  ?
                  (
<ul className="space-y-5 list-disc">
                    <li className="text-black text-lg ">Tom plays with /Jerry/ all the time</li>
                    <li className="text-black text-lg ">Jerry plays with Tom /all the time</li>
                    <li className="text-black text-lg ">With all Tom and Jerry play /the time</li>{" "}
                    <li className="text-black text-lg ">All with Tom and the time/ play/s Jerry</li>
                    <li className="text-black text-lg ">Time the play with /Tom, Jerry, and all</li>{" "}
                    <li className="text-black text-lg ">The / Play/ with Tom and all-time Jerry</li>
                    <li className="text-black text-lg ">Jerry and Tom play / time with all</li>
                  </ul>
                  ):(
                    <button onClick={()=>setAnswerSol(true)} className="bg-green-500  cursor-pointer  px-8 py-1 rounded-lg text-lg text-white">
                    Solution
                  </button> 
                  )
                  }
                  
                  
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
              lastSlide < 4
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 4 ? "block" : "hidden"
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
