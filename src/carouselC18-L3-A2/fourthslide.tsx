import React, { useState } from "react";

import fourthDropData from "@/carouselC18-L3-A2/indandindepr.json";
import indandindeprData from "@/carouselC18-L3-A2/fourthDropData.json";
import Welldone from "@/components/wellDone";

type DragItem = {
  text: string;
  val: string;
};
const FourthSlide = () => {
  const [open,setOpen]=useState(false)
  const [dropItem, setDropItem] = useState<{ [key: number]: string[] }>({});
  const [filterData, setFilterData] = useState(fourthDropData);

  const handleDrag = (e: React.DragEvent, dragData: DragItem) => {
    e.dataTransfer.setData("dragItem", JSON.stringify(dragData));
  };

  const handleDrop = (e: React.DragEvent, index: number, qValue: string) => {
    const dropData = JSON.parse(e.dataTransfer.getData("dragItem"));
    const filterUpdate = filterData.filter((i) => i.text != dropData.text)

    if (dropData.val === qValue) {
      setDropItem((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dropData.text]
          : [dropData.text],
      }));
      setFilterData(filterUpdate);
      if(filterUpdate.length == 0){
        setTimeout(()=>{
setOpen(true)
        },300)
      }
    }
  };
  return (
    <div className="flex justify-start items-center gap-10 flex-col">
      <div className="flex justify-center items-center flex-col gap-3 min-h-[100px]">
        <p className="text-black text-xl text-center">
          Are these tasks independent or interdependent?
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
        <div className="col-span-8 w-full flex justify-center items-start flex-wrap gap-2">
          {indandindeprData.map((item, index) => (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index, item.qValue)}
              key={index}
              className="min-h-[200px] flex justify-start flex-col items-center w-full rounded-lg border border-black "
            >
              <span className="text-center text-lg text-black">
                {item.name}
              </span>

             <div className="flex flex-wrap justify-center gap-1 w-full">
               {dropItem[index]?.map((i, index) => (
                <span
                  className="text-sm bg-violet-900 text-white px-2 py-1 rounded mt-1 block"
                  key={index}
                >
                  {i}
                </span>
              ))}
             </div>
            </div>
          ))}
        </div>
      </div>
      <Welldone open={open} setOpen={setOpen}/>
    </div>
  );
};

export default FourthSlide;
