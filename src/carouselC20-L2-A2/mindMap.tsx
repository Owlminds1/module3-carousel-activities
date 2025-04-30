import Image from "next/image";
import React, { useState } from "react";
import BoxData from "@/carouselC20-L2-A2/box.json";
import MasterLiat from "@/carouselC20-L2-A2/masterList.json";

type myDataType = {
  name: string;
};
const MindMap = () => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});
  const [filter, setFilter] = useState(MasterLiat);
  const [checkResult, setCheckResult] = useState<{ [key: number]: boolean[] }>(
    {}
  );

  const handleDrag = (e: React.DragEvent, dragObj: myDataType) => {
    e.dataTransfer.setData("dragItem", JSON.stringify(dragObj));
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("dragItem"));

    setDropItems((prev) => ({
      ...prev,
      [index]: prev[index] ? [...prev[index], dropItem.name] : [dropItem.name],
    }));
    setFilter((prev) => prev.filter((item) => item.name != dropItem.name));
  };

  const handleCheck = () => {
    const result: { [key: number]: boolean[] } = {};

    Object.keys(dropItems).forEach((key) => {
      const index = parseInt(key);
      const dropped = dropItems[index] || [];
      const correctAnswers = BoxData[index]?.ans || [];

      result[index] = dropped.map((item) => correctAnswers.includes(item));
    });

    setCheckResult(result);
  };

  return (
    <div className="min-h-screen  w-full flex justify-center items-center gap-5 flex-col bg-[#F8FAFC] p-5 ">
      {filter.length == 0 ? (
        <button
          onClick={handleCheck}
          className="px-8 cursor-pointer py-2 rounded-lg text-xl bg-violet-900 text-white "
        >
          Check
        </button>
      ) : (
        <div className="border-2 rounded-lg border-black grid grid-cols-12 gap-1 flex-wrap p-2">
          {filter.map((item, index) => (
            <span
              draggable
              onDragStart={(e) => handleDrag(e, item)}
              key={index}
              className="col-span-4 cursor-grab active:cursor-grabbing bg-violet-900 text-center min-h-[40px]  text-white px-2 py-1 rounded-lg"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}

      <div className="min-h-screen w-full relative  flex justify-center items-center gap-5 flex-col">
        <div className=" relative h-[450px] w-[450px]  my-[200px]">
          <Image src="/C20Images/cerculImg.jpg" fill alt="image" />

          <span className="absolute font-bold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            What will happen if?
          </span>
        </div>

        {BoxData.map((item, index) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              top: `${item.top}px`,
              left: `${item.left}px`,
              bottom: `${item.bottom}px`,
              right: `${item.right}px`,
            }}
            key={index}
            className="absolute  rounded-lg overflow-hidden border-2 border-black"
          >
            <h5
              key={index}
              className="text-center  text-white bg-violet-900 w-full p-2"
            >
              {item.title}
            </h5>
            <div className=" cursor-auto min-h-[200px] min-w-[300px] p-2 flex justify-start items-center gap-1 flex-col ">
              {dropItems[index]?.map((item, i) => {
                const isCorrect = checkResult[index]?.[i];

                return (
                  <h4
                    key={i}
                    className={`p-1 rounded-lg whitespace-nowrap w-[400px] overflow-hidden text-ellipsis
        ${isCorrect === true ? "bg-green-500 text-white" : ""}
        ${isCorrect === false ? "bg-red-500 text-white" : ""}
        ${isCorrect === undefined ? "bg-yellow-400 text-black" : ""}
      `}
                  >
                    {item}
                  </h4>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindMap;
