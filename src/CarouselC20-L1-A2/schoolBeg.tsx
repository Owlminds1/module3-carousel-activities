import React, { useState } from "react";
import DragData from "@/CarouselC20-L1-A2/dragData.json";
import DropData from "@/CarouselC20-L1-A2/dropData.json";

type DragObj = {
  text: string;
  value: string;
};
const SchoolBeg = () => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});
  const [filterData,setFilterData]=useState(DragData)

  const handleDragStart = (e: React.DragEvent, dragData: DragObj) => {
    e.dataTransfer.setData("dragItem", JSON.stringify(dragData));
  };

  const handleDrop = (e:React.DragEvent,index:number,value:string) => {
const dropItem = JSON.parse( e.dataTransfer.getData("dragItem"))
if(dropItem.value === value){
  setDropItems((prev)=>({
    ...prev,
    [index]:prev[index]? [...prev[index],dropItem.text]:[dropItem.text]
  }))
  setFilterData((prev)=>prev.filter((item)=>item.text != dropItem.text))
}
  };
  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <h1 className="text-center text-4xl font-bold py-4 text-black">
        Trash free lunch
      </h1>
      <div className="grid grid-cols-12 place-items-center gap-5 p-5 rounded-lg bg-violet-100">
        <div className="col-span-4 w-full flex  justify-center items-center gap-2 flex-wrap ">
          {filterData.map((item, index) => (
            <button
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="cursor-grab active:cursor-grabbing bg-violet-900 px-8 py-2 rounded-lg text-white min-w-[100px] min-h-[50px]"
            >
              {item.text}
            </button>
          ))}
        </div>

        {DropData.map((item, index) => (
          <div
            key={index}
            onDragOver={(e)=>e.preventDefault()}
            onDrop={(e)=>handleDrop(e,index,item.value)}
            className="col-span-4 rounded-lg w-full min-w-[400px] min-h-[400px] border border-black flex justify-start items-center flex-col gap-2"
          >
            <h4 className=" w-full bg-violet-900 text-white p-1 rounded-lg text-2xl text-center">
              {item.value}
            </h4>
              {dropItems[index]?.map((item,index)=>(

            <h4  key={index} className="  bg-violet-700 text-white p-2 rounded-lg text-lg text-center">
              {item}
            </h4>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolBeg;
