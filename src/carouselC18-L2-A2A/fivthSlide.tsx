import React, { useState } from "react";
import FivethSlideData from "@/carouselC18-L2-A2A/fivthSlide.json";
import QuadurantsData from "@/carouselC18-L2-A2A/fivthSlidequadrants.json";

type DragItem = {
  text: string;
  val: string;
};
const FivethSlide = () => {
  const [dropItem, setDropItem] = useState<{ [key: number]: string[] }>({});
  const [filterData, setFilterData] = useState(FivethSlideData);

  const handleDrag = (e: React.DragEvent, dragData: DragItem) => {
    e.dataTransfer.setData("dragItem", JSON.stringify(dragData));
  };

  const handleDrop = (e: React.DragEvent, index: number, qValue: string) => {
    const dropData = JSON.parse(e.dataTransfer.getData("dragItem"));

    if (dropData.val === qValue) {
      setDropItem((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dropData.text]
          : [dropData.text],
      }));
      setFilterData((item) => item.filter((i) => i.text != dropData.text));
    }
  };
  return (
    <div className="flex justify-start items-center gap-10 flex-col">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="text-black text-xl text-center">
        Sort tasks into ‘can wait’ and ‘can be skipped’
        </p>
      </div>

      <div className="grid grid-cols-12 place-items-center gap-1 w-full">
        <div className="col-span-4 w-full flex justify-center item-center gap-1 flex-wrap">
          {filterData.map((item, index) => (
            <button
              draggable
              onDragStart={(e) => handleDrag(e, item)}
              key={index}
              className="bg-violet-900 text-white px-5 py-2 rounded-lg cursor-grab active:cursor-grabbing"
            >
              {item.text}
            </button>
          ))}
        </div>
        <div className="col-span-8 w-full flex justify-center items-center flex-wrap gap-2">
          {QuadurantsData.map((item, index) => (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index, item.qValue)}
              key={index}
              className="p-2 min-h-[350px] flex justify-start flex-col items-center   min-w-[200px] rounded-lg border border-black "
            >
              <span className="text-center text-lg text-black">
                {item.qValue}
              </span>

              {dropItem[index]?.map((i, index) => (
                <span
                  className="text-sm bg-violet-900 text-white px-2 py-1 rounded mt-1 block"
                  key={index}
                >
                  {i}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FivethSlide;
