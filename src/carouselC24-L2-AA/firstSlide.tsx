import React from "react";

type myProps = {
  setIsFirstSlid: (value: string) => void;
};
const GameFirstSlide = ({ setIsFirstSlid }: myProps) => {
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
            How To Play{" "}
          </h3>
        </div>
        <div>
          <ul className="list-disc space-y-5 text-xl">
            <li>Synonyms words are similar in meaning to each other.</li>
            <li>Click to flip cards and match the synonyms words.</li>
            <li>If the cards do not match they will flip again.</li>
          </ul>
        </div>

        <button>
          <h3
            className="bg-[#B1F08C] cursor-pointer  text-2xl px-12 py-1 rounded-lg"
            onClick={() => setIsFirstSlid("level_1")}
            style={{ border: "6px solid chocolate" }}
          >
            ok
          </h3>
        </button>
      </div>
    </div>
  );
};

export default GameFirstSlide;
