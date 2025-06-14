import React from "react";
import AssertiveTalk from "@/carouselC23-L2-A6/AssertiveTalk.json";

const CorrectData = () => {
  return (
    <div className="flex flex-col gap-2">
      {AssertiveTalk.map((item,index) => (
        <div key={index} className="w-full border border-black p-3 rounded-lg ">
          <h3 className="font-bold text-xl text-center">{item.title}</h3>
          {item.Assertive.map((item,index) => (
            <div key={index}>
              <h4 className="text-md ">
                <span className="font-medium text-lg">{item.name} :</span> {item.talk}
              </h4>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CorrectData;
