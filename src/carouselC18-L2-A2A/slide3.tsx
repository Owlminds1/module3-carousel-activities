import React, { useState } from "react";
import TaskData from "@/carouselC18-L2-A2A/tasks.json";
import dropTask from "@/carouselC18-L2-A2A/drop.json";
type master = {
  tasks: string;
  value: string;
};
const Slide3 = () => {
  const [dropItem, setDropItem] = useState<{ [key: number]: string[] }>({});


  const handleDrag = (e: React.DragEvent, dragItem: master) => {
    e.dataTransfer.setData("dragItem", JSON.stringify(dragItem));
  };
  
  const handleDrop = (e: React.DragEvent, Dropindex: number ,dropVal:string) => {
    
    const dropItem = JSON.parse(e.dataTransfer.getData("dragItem"));
    console.log(dropItem.tasks);
    if(dropVal == dropItem.value){

      setDropItem((prev) => ({
        ...prev,
        [Dropindex]: prev[Dropindex]
          ? [...prev[Dropindex], dropItem.tasks]
          : [dropItem.tasks],
      }));
    }
  };
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-6  overflow-scroll w-full flex flex-wrap justify-center items-center  gap-1 ">
        {TaskData.map((item, index) => (
          <h3
            draggable
            onDragStart={(e) => handleDrag(e, item)}
            className="text-black text-center text-lg  border  min-w-[150px] px-2 py-1 rounded-lg bg-yellow-400 "
            key={index}
          >
            {item.tasks}
          </h3>
        ))}
      </div>
      <div className="col-span-6">
      <div className="grid grid-cols-12 w-full place-items-center gap-1">
  {dropTask.map((dropItems, Dropindex) => (
    <div
      key={Dropindex}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, Dropindex, dropItems.dropVal)}
      className="col-span-6 border border-black w-full text-center p-1 rounded-lg bg-violet-800"
    >
      <h4 className="text-white text-2xl">{dropItems.dropVal}</h4>

      <div className="min-h-[200px] mt-2 p-2 bg-violet-500 rounded-lg flex flex-col gap-1">
        {dropItem[Dropindex]?.map((i, index) => (
          <span key={index} className="text-white text-xl">
            {i}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Slide3;
