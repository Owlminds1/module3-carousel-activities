import React from "react";
type myProps = {
  inputs: {
    first: string;
    secound: string;
    third: string;
    four: string;
    five: string;
    six: string;
  };
};
const ReviseAnswer = ({ inputs }: myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-5 bg-[#F8FAFC]">
            <h4 className="text-3xl text-black text-center font-bold p-5">Revise Answer</h4>
      <div className="bg-violet-200 p-5 rounded-lg w-[600px]">
        <div className=" min-h-[50px] p-2 rounded-lg border-2 border-white bg-violet-500 flex justify-center items-start flex-col gap-3 min-w-[500px] ">
          <h2 className=" text-center text-white text-lg font-bold ">
            <span className="text-black ">Question : </span>CHECK FACTS
          </h2>

          <h2 className="   text-left text-white text-lg font-bold">
            <span className="text-black">Answer : </span>
            {inputs.first}
          </h2>
        </div>

        {/* ========================secound ====================== */}
        <div className=" min-h-[50px] p-2 rounded-lg border-2 border-white bg-violet-500 flex justify-center items-start flex-col gap-3 min-w-[500px] ">
          <h2 className=" text-center text-white text-lg font-bold ">
            <span className="text-black ">Question : </span>ASK AN OPINION
          </h2>

          <h2 className="   text-left text-white text-lg font-bold">
            <span className="text-black">Answer : </span>
            {inputs.secound}
          </h2>
        </div>

         {/* ========================third ====================== */}
         <div className=" min-h-[50px] p-2 rounded-lg border-2 border-white bg-violet-500 flex justify-center items-start flex-col gap-3 min-w-[500px] ">
          <h2 className=" text-center text-white text-lg font-bold ">
            <span className="text-black ">Question : </span>DO CALCULATIONS
          </h2>

          <h2 className="   text-left text-white text-lg font-bold">
            <span className="text-black">Answer : </span>
            {inputs.third}
          </h2>
        </div>


           {/* ========================four ====================== */}
           <div className=" min-h-[50px] p-2 rounded-lg border-2 border-white bg-violet-500 flex justify-center items-start flex-col gap-3 min-w-[500px] ">
          <h2 className=" text-center text-white text-lg font-bold ">
            <span className="text-black ">Question : </span>PERFORM ACTIONS
          </h2>

          <h2 className="   text-left text-white text-lg font-bold">
            <span className="text-black">Answer : </span>
            {inputs.four}
          </h2>
        </div>

        {/* ========================five ====================== */}
        <div className=" min-h-[50px] p-2 rounded-lg border-2 border-white bg-violet-500 flex justify-center items-start flex-col gap-3 min-w-[500px] ">
          <h2 className=" text-center text-white text-lg font-bold ">
            <span className="text-black ">Question : </span>MAKE RECOMMENDATIONS

          </h2>

          <h2 className="   text-left text-white text-lg font-bold">
            <span className="text-black">Answer : </span>
            {inputs.five}
          </h2>
        </div>

        <div className=" min-h-[50px] p-2 rounded-lg border-2 border-white bg-violet-500 flex justify-center items-start flex-col gap-3 min-w-[500px] ">
          <h2 className=" text-center text-white text-lg font-bold ">
            <span className="text-black ">Question : </span>TRANSLATE 

          </h2>

          <h2 className="   text-left text-white text-lg font-bold">
            <span className="text-black">Answer : </span>
            {inputs.six}
          </h2>
        </div>

      
      </div>
    </div>
  );
};

export default ReviseAnswer;
