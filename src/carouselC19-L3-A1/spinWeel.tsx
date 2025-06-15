"use client";
import Image from "next/image";
import spinData from "@/carouselC19-L3-A1/spinData.json";
import { BiSolidLeftArrow } from "react-icons/bi";
import { useState } from "react";
import Dailog from "@/components/dailog";

const SpinWeel = () => {
  const [rotationAngle, setRotationAngle] = useState(0); // final angle
  const [isSpinning, setIsSpinning] = useState(false);
  const [alrtMssg, setAlrtMssg] = useState("");
  const [open, setOpen] = useState(false);

  const handleSpeenStart = () => {
  if (isSpinning) return;
  setIsSpinning(true);

  const randomDeg = Math.floor(Math.random() * 360);
  const fullRotations = 5 * 360;
  const newRotation = rotationAngle + fullRotations + randomDeg;

  setRotationAngle(newRotation);

  setTimeout(() => {
    const segmentAngle = 360 / spinData.length;
    const finalAngle = newRotation % 360;

    // angle ka adjustment kar rahe hain
    const correctedAngle = (360 - finalAngle + segmentAngle * 1.5) % 360;

    // Ye index nikal raha hai jis side pointer gira
    const selectedIndex =
      Math.round(correctedAngle / segmentAngle) % spinData.length;

    // Ab us side ka actual text le rahe hain spinData se
    const selectedText = spinData[selectedIndex].text;

    setAlrtMssg(selectedText); // ye alert/dailog me dikhayega
    setOpen(true);
    setIsSpinning(false);
  }, 5000);
};



  return (
    <div className="min-h-screen p-5 bg-[#F8FAFC] overflow-hidden flex justify-center  items-center flex-col">
      <h3 className="font-bold  text-center text-black text-4xl ">
        Spin the wheel
      </h3>
      <p className="text-lg text-black pt-2">Rotate the wheel and speak about a situation based on the prompt you land on</p>
      <div className="relative">
        {/* Arrow */}
        <div className="arrow absolute top-1/2 right-[-15px] flex justify-center items-center text-black text-[30px] z-10">
          <span>
            {" "}
            <BiSolidLeftArrow />
          </span>{" "}
          <button
            className="bg-violet-900 text-white rounded-lg px-5 py-1 text-xl cursor-pointer"
            onClick={handleSpeenStart}
          >
            Spin
          </button>
        </div>

        {/* Wheel */}
        <div
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transition: isSpinning ? "transform 5s ease-out" : "none",
          }}
          className="relative overflow-hidden min-h-[650px]  min-w-[650px]  rounded-full flex justify-center items-center"
        >
          <Image src="/C18Images/oneHalfSpin.png" fill alt="spin image" />
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
              className="text-black text-xl font-bold  w-[200px] text-center"
            >
              {   item.text }
            </span>
          ))}
        </div>
      </div>
      <Dailog val={alrtMssg} open={open} setOpen={setOpen} />
    </div>
  );
};

export default SpinWeel;
