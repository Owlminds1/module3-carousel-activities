"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const VideoScreen = ({ setIsFirstScreen }: myProps) => {
  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PBkmOhOk8nk?si=p65qdO8CZEGd7GUy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div
        className={`
                  border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90`}
      >
        <FaArrowRight
          className={` text-[40px] cursor-pointer text-black`}
          onClick={() => setIsFirstScreen("start")}
        />
      </div>
    </div>
  );
};

export default VideoScreen;
