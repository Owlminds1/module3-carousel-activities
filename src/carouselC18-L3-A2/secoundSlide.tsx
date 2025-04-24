import React, { useState } from 'react'
import QuadrantsData from "@/carouselC18-L3-A2/quadrantsData.json";
import dragData from "@/carouselC18-L3-A2/dragData.json";

type DragItem = {
  text: string;
  val: string;
};
const SecoundSlide = () => {
    const [dropItem, setDropItem] = useState<{ [key: number]: string[] }>({});
    const [filterData,setFilterData] =useState(dragData)
  

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
          setFilterData((item)=>item.filter((i)=> i.text != dropData.text ))
        }
      };
  return (
    <div className="flex justify-start items-center gap-10 flex-col">
    <div className='flex justify-center items-center flex-col gap-3'>
      <p className="text-black text-xl text-center">
        Become better at getting tasks done by assigning importance
        to tasks.
      </p>
      <p className="text-black text-xl text-center">
        <span className="font-bold">Do:</span> urgent and important
        tasks need to be done right away
      </p>
      <p className="text-black text-xl text-center">
        <span className="font-bold">DECIDE:</span> tasks that help
        achieve goals but don’t have a timeline must be scheduled
        properly.
      </p>
      <p className="text-black text-xl text-center">
        <span className="font-bold">DEFER:</span> tasks that are not
        urgent but important can be postponed or reserved for later
        time.
      </p>
      <p className="text-black text-xl text-center">
        <span className="font-bold">DELETE:</span> tasks that are
        neither urgent nor important can simply be deleted to make
        time for important tasks.
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
        {QuadrantsData.map((item, index) => (
          <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index, item.qValue)}
            key={index}
            className="min-h-[200px] flex justify-start flex-col items-center   min-w-[200px] rounded-lg border border-black "
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
  )
}

export default SecoundSlide
