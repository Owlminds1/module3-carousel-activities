import data from "@/carouselC17-L3-AA/data.json";
const Analogies = () => {
  return (
    <div className="bg-white min-h-screen flex p-5 flex-col items-center justify-center gap-3">
      <div className="">
        <h1 className="text-center text-4xl font-bold py-5 text-black">
          {/* {lastSlide < SlideData.length  ? "What if?":"Bonus Questions"}  */}
          Analogies
        </h1>
        <div className="p-5 bg-violet-100 min-w-[900px] rounded-lg min-h-[200px] flex justify-center items-center flex-col gap-8 ">
        <div className=" grid grid-cols-12 gap-4  place-items-center w-full ">
          <div className="col-span-4 w-full">
            <h4 className="text-white bg-violet-900 text-center p-1 rounded-lg ">
              Problems
            </h4>
          </div>
          <div className="col-span-8 w-full ">
          <div className="flex border border-violet-900 p-1 rounded-lg text-black gap-1 justify-center items-center">
              <span
               
                className=" text-violet-900 w-[150px] text-center"
              >Recycling </span>
              is to
              <span
               
               className=" text-violet-800 w-[150px] text-center"
             >climate change </span>
              as
              <span
               
                className=" text-red-600 w-[150px] text-center"
              >resolution  </span>
              is to
              <span
               
                className=" text-red-400 w-[150px] text-center"
              >conflict </span>
            </div>

            
          </div>
          </div>  
         {
            data.map((item,index)=>(
                <div key={index} className="grid grid-cols-12 gap-4  place-items-center w-full ">
                  <div className="col-span-4 w-full">
            <h4 className="text-white bg-violet-900 text-center p-1 rounded-lg ">
            {item.text}
            </h4>
          </div>
          <div className="col-span-8 w-full ">
          <div className="flex  text-black gap-1 justify-center items-center">
              <textarea
                placeholder="(solution-a)"
                className="w-[150px] h-[30px] outline-none  border-b text-center placeholder:text-center"
              />{" "}
              is to{" "}
              <textarea
                placeholder="(problem-a)"
                className="w-[150px] h-[30px] outline-none text-center  border-b placeholder:text-center  "
              />
              as
              <textarea
                placeholder="(solution-b"
                className="w-[150px] h-[30px] outline-none text-center  border-b placeholder:text-center  "
              />
              is to
              <textarea
                placeholder="problem-b) 
"
                className="w-[150px] h-[30px] outline-none text-center  border-b  placeholder:text-center"
              />
            </div>

            
          </div>
                </div>
            ))
         }
        </div>
    
     
        {/* <div className="w-full flex justify-between items-center mt-5">
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
                  lastSlide < SlideData.length
                    ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                    : ""
                } hover:scale-90 
                   `}
              >
                <FaArrowRight
                  className={`${
                    lastSlide < SlideData.length ? "block" : "hidden"
                  } text-[40px]  cursor-pointer text-black `}
                  onClick={handleNext}
                />
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default Analogies;
