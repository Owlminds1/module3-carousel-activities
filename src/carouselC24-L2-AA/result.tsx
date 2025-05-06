import Image from "next/image";
import React from "react";

type myProps = {
  setIsFirstSlid: (value: string) => void;
};
const GameResult = ({ setIsFirstSlid }: myProps) => {
  return (
    <div
      style={{ border: "8px solid chocolate" }}
      className="min-h-screen bg-[#DCC352] flex justify-center items-center"
    >
      <div className="bg-[#EED19B] text-black min-w-[600px] min-h-[400px] flex justify-between flex-col items-center  p-5 rounded-lg shadow-md shadow-[#0000006e]">
        <div>
          <h3
            className="bg-transparent text-3xl px-10 py-2 rounded-lg"
            style={{
              boxShadow: "2px 2px 1px #0000007c , inset 2px 2px 5px white ",
            }}
          >
           WELL DONE
          </h3>
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <h2 className="text-3xl ">You have completed this game</h2>
          <Image
            src="/Well_Done.jpg"
            width={150}
            height={100}
            className="rounded-full"
            alt="nice try"
          />
        </div>

        <div className="w-full flex justify-around">
          <button>
            <h3
              className="bg-red-300 border border-white text-xl px-12 py-2 rounded-lg hover:bg-red-400"
              onClick={() => setIsFirstSlid("level_1")}
            >
              REPLAY
            </h3>
          </button>
          <button>
            <h3
              className="bg-red-300  text-xl px-12 py-2 border border-white rounded-lg hover:bg-red-400"
              onClick={() => setIsFirstSlid("gameFirst")}
            >
              EXIT
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
