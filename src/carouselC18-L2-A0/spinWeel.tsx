"use client";
import Image from "next/image";
import spinData from "@/carouselC18-L2-A0/spinData.json";
import { BiSolidLeftArrow } from "react-icons/bi";
import { useState } from "react";

const SpinWeel = () => {
  const [rotationAngle, setRotationAngle] = useState(0); // final angle
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpeenStart = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const randomDeg = Math.floor(Math.random() * 360); // random angle (0-359)
    const fullRotations = 2 * 360; // 5 full rounds
    const newRotation = rotationAngle + fullRotations + randomDeg;


    setRotationAngle(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
    }, 5000); // same as transition time
  };

  return (
    <div className="min-h-screen p-5 bg-[#F8FAFC] overflow-hidden flex justify-center  items-center flex-col">
      <h3
        className="font-bold  text-center text-black text-4xl "
     
      >
        Spin the wheel
      </h3>
      <div className="relative">
        {/* Arrow */}
        <div className="arrow absolute top-1/2 right-[-15px] flex justify-center items-center text-violet-900 text-[35px] z-10">
        <span>  <BiSolidLeftArrow  /></span> <button className="bg-violet-900 text-white rounded-lg px-5 py-1 text-xl cursor-pointer"    onClick={handleSpeenStart}>Spin</button>
        </div>

        {/* Wheel */}
        <div
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transition: isSpinning ? "transform 5s ease-out" : "none",
          }}
          className="relative overflow-hidden min-h-[620px] min-w-[620px]  rounded-full flex justify-center items-center"
        >
          <Image src="/C18Images/spin3.png" fill alt="spin image" />
          {spinData.map((item, index) => (
            <span
              key={index}
              style={{
                position: "absolute",
                top: item.positionY,
                left: item.positionX,
                transform: `rotate(${item.rotate}deg)`,
                transformOrigin: "center",
              }}
              className="text-black text-lg font-bold  w-[180px] text-center"
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpinWeel;
