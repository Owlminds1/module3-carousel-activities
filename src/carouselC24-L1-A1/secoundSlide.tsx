import React, { useState } from "react";
import dragData from "@/carouselC24-L1-A1/dragData.json";
import dropData from "@/carouselC24-L1-A1/dropData.json";
type dragDataType = {
name:string,
val:string
}

type myProps = {
    setShow:(value : boolean)=>void
}

const SecoundSlide = ({setShow}:myProps) => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>([]);
  const [filter,setFilter]=useState(dragData)

const handleDragStart = (e:React.DragEvent,item:dragDataType)=>{
 e.dataTransfer.setData("drag",JSON.stringify(item))
}
const handleDrop = (
    e: React.DragEvent,
    dropVal: string,
    index: number
  ) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("drag"));
  
    if (dropVal === dropItem.val) {
      const updatedFilter = filter.filter(
        (item) => item.name !== dropItem.name
      );
  
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dropItem.name]
          : [dropItem.name],
      }));
  
      setFilter(updatedFilter);
  
      // ✅ Correct way to check after update
      if (updatedFilter.length === 0) {
        setTimeout(() => {
          setShow(true);
        }, 100);
      }
    }
  };
  

  return (
    <div className="grid grid-cols-12 w-full place-items-center gap-2 px-5">
      <div className="col-span-4 h-[400px] overflow-y-auto border border-gray-400 rounded-lg">
        <div className="flex flex-col items-center gap-2 p-5">
          {filter.map((item, index) => (
            <span
            onDragStart={(e)=>handleDragStart(e,item)}
              key={index}
              draggable
              className="min-w-[250px] text-black text-lg border border-black p-2 rounded-lg w-full text-center"
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
      <div className="col-span-8 w-full px-5 ">
        <div className="grid grid-cols-12 gap-2 place-items-center w-full ">
          {dropData.map((item, index) => (
            <div key={index} className="col-span-6 w-full">
              <h2 className="text-lg bg-violet-900 text-white p-2 rounded-lg text-center">
                {item.name}
              </h2>
              <div 
              onDragOver={(e)=>e.preventDefault()}
              onDrop={(e)=>handleDrop(e,item.value,index)}
              className="min-h-[300px] border-t-0 rounded-lg border border-black flex justify-start p-1 gap-1 items-center flex-col">
                {dropItems[index]?.map((item, index) => (
                  <span
                    key={index}
                    className="min-w-[250px] text-black text-sm border border-black p-2 rounded-lg w-full text-center"
                  >
                    {item}
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

export default SecoundSlide;
