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

  const handleDrag = (
    e: React.DragEvent,
    dragObj: myDataType,
    fromBox?: number,
    itemIndex?: number
  ) => {
    e.dataTransfer.setData(
      "dragItem",
      JSON.stringify({ ...dragObj, fromBox, itemIndex })
    );
  };
  
  

  const handleDrop = (e: React.DragEvent, index: number) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("dragItem"));
  
    // If it came from a box, remove it from that box
    if (dropItem.fromBox !== undefined) {
      setDropItems((prev) => {
        const updated = { ...prev };
        updated[dropItem.fromBox] = [...(updated[dropItem.fromBox] || [])];
        updated[dropItem.fromBox].splice(dropItem.itemIndex, 1);
        return updated;
      });
    } else {
      // Remove from master list (filter)
      setFilter((prev) => prev.filter((item) => item.name !== dropItem.name));
    }
  
    // Add to new box
    setDropItems((prev) => ({
      ...prev,
      [index]: prev[index] ? [...prev[index], dropItem.name] : [dropItem.name],
    }));
  };
  

  const handleCheck = () => {
    const result: { [key: number]: boolean[] } = {};

    Object.keys(dropItems).forEach((key) => {
      const index = parseInt(key);
      const dropped = dropItems[index] || [];
      const correctAnswers = BoxData[index]?.ans || [];

      result[index] = dropped.map((item) =>
        correctAnswers.some(
          (ans) => ans.trim().toLowerCase() === item.trim().toLowerCase()
        )
      );
      
    });

    setCheckResult(result);
  };

  return (
    <div className="min-h-screen p-5 w-full relative  flex justify-center flex-col items-center gap-5 flex-col">
      <h4 className="text-3xl font-bold">Mind map</h4>
    <div className="grid grid-cols-12 place-items-center gap-8 w-full">
<div className="col-span-2 w-full ">
{filter.length == 0 ? (
    <button
      onClick={handleCheck}
      className="px-8 cursor-pointer py-2 rounded-lg text-xl bg-violet-900 text-white "
    >
      Check
    </button>
  ) : (
    <div className="border-1 rounded-lg w-[300px] h-[500px] overflow-y-scroll border-black grid grid-cols-12 gap-1 flex-wrap p-2">
      {filter.map((item, index) => (
        <span
          draggable
          onDragStart={(e) => handleDrag(e, item)}
          key={index}
          className="col-span-12   cursor-grab active:cursor-grabbing bg-[#0000007b] text-center  text-white px-2 py-1 rounded-lg"
        >
          {item.name}
        </span>
      ))}
    </div>
  )}
</div>
<div className="col-span-10 w-full flex justify-center items-center">
  <div className=" relative h-[300px] w-[300px]  my-[200px]">

<Image src="/C20Images/arrowImage.png" fill alt="image" />

<span className="absolute text-sm font-bold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
What will <br /> happen if?
</span>

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
        className="absolute min-w-[300px]  rounded-lg overflow-hidden border-2 border-black"
      >
        <h5
          key={index}
          className="text-center  text-white bg-violet-900 w-full p-2"
        >
          {item.title}
        </h5>
        <div className=" cursor-auto min-h-[150px] min-w-[300px] p-2 flex justify-start items-center gap-1 flex-col ">
        {dropItems[index]?.map((item, i) => {
  const isCorrect = checkResult[index]?.[i];

  return (
    <h4
      key={i}
      draggable
      onDragStart={(e) => handleDrag(e, { name: item }, index, i)}
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
    </div>
 

  
  </div>
  );
};

export default MindMap;
