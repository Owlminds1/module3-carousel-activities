import Image from "next/image";
import React, { useState } from "react";
import MasterListData from "@/carouselC18-L1-A1/masterList.json";
import dropData from "@/carouselC18-L1-A1/dropData.json";

type master = {
  text: string;
  value: string;
};

type myProps = {
  setIsFirstScreen:(value:string)=>void
}
const SortingPage = ({setIsFirstScreen}:myProps) => {
  const [dropArry, setDropArry] = useState<{ [key: number]: string[] }>({});
  const [filterMaster, setFilterMaster] = useState(MasterListData);
  const handleDrag = (e: React.DragEvent, dragItem: master) => {
    console.log(dragItem);
    e.dataTransfer.setData("dragItem", JSON.stringify(dragItem));
    console.log(typeof dragItem);
  };

  const handleDrop = (e: React.DragEvent, boxValue: string, index: number) => {
    const dropData = JSON.parse(e.dataTransfer.getData("dragItem"));
    // console.log( dropData.value);
    if (boxValue == dropData.value) {
      const updatefilter = filterMaster.filter(
        (task) => task.text !== dropData.text
      );
      setDropArry((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dropData.text]
          : [dropData.text],
      }));

      setFilterMaster(updatefilter);
      if(updatefilter.length == 0 ){
       setTimeout(()=>{
        setIsFirstScreen("Result")
       },300)
      }
    } else {
      //   alert("ssdfsdfs");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center items-center p-5">
      {/* ====================== master list============ */}
      <h4 className="text-black text-bold text-3xl">
        {" "}
        Order tasks based on importance
      </h4>
      <div className="relative flex justify-center items-center flex-col ">
        <Image
          src="/C18Images/tree.png"
          width={600}
          height={100}
          alt="tree image"
        />
        <div className=" w-[500px] p-3 flex justify-center items-center flex-wrap gap-2 backdrop-blur-[2px] bg-[#0000005d] rounded-lg absolute top-[50px] border border-violet-900">
          {filterMaster.map((item, index) => (
            <button
              draggable
              onDragStart={(e) => handleDrag(e, item)}
              key={index}
              className="z-30 hover:cursor-grab active:cursor-grabbing text-white rounded-lg px-2 py-1 font-bold text-md bg-violet-600  "
            >
              {item.text}
            </button>
          ))}
        </div>

        <div className=" absolute bottom-0 flex justify-between  items-center  gap-1">
          {dropData.map((dItem, dIndex) => (
            <div
              key={dIndex}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, dItem.task, dIndex)}
              className="flex justify-start flex-col items-center min-h-[200px] bg-[#8d4d1f48] rounded-lg backdrop-blur-[2px] border border-black min-w-[200px] overflow-hidden"
            >
              <h4 className="text-white w-full text-center bg-black text-lg border-b-2 border-white">
                {dItem.task}
              </h4>

              {dropArry[dIndex]?.map((i, ind) => (
                <span
                  key={ind}
                  className="text-white rounded-lg px-2 py-1 font-bold text-md bg-violet-600 my-1 "
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

export default SortingPage;
