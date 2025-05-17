import Image from "next/image";
import React, { useState } from "react";
import dropData from "@/carouselC18-L1-A5-V2/dropData.json";

type dragDataType = {
  name: string;
  fruitsImg: string;
};
type myProps = {
  itemArray: { name: string; fruitsImg: string }[];
};
const Table = ({ itemArray }: myProps) => {
  const [dropItems, setDropItems] = useState<{ [key: number]: dragDataType[] }>(
    []
  );

  const [filter,setFilter]= useState(itemArray)

  const handleDrag = (e: React.DragEvent, item: dragDataType) => {
    e.dataTransfer.setData("drag", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("drag"));
    setDropItems((prev) => ({
      ...prev,
      [index]: prev[index] ? [...prev[index], dropItem] : [dropItem],
    }));

    setFilter((prev)=>prev.filter((item)=>item.name != dropItem.name))
  };
  console.log("you purchase", itemArray);
  return (
    <div className="bg-white min-h-screen flex p-5  flex-col items-center justify-start gap-10">
      <h4 className="text-3xl text-center font-bold text-black">Meal plan</h4>
      <div className="grid grid-cols-12 gap-2 w-full place-items-start">
        <div className="col-span-4 w-full  flex justify-center item-center gap-2 flex-wrap border border-black p-2 rounded-lg ">
          {filter.map((item, index) => (
            <div
              draggable
              onDragStart={(e) => handleDrag(e, item)}
              key={index}
              className="bg-violet-100 hover:cursor-grab  p-2 rounded-lg   flex flex-col  justify-between items-center gap-2 "
            >
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={item.fruitsImg}
                  className="rounded-lg shadow "
                  fill
                  alt="cart img"
                />
              </div>
              <div className="flex justify-center items-center">
                <h2 className="text-sm font-bold ">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-8 w-full">
          <div className="grid grid-cols-12 gap-1  place-items-center">
            {dropData.map((item, index) => (
              <div
                key={index}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={(e) => e.preventDefault()}
                className={` 
                  col-span-4
                 rounded-lg w-full min-h-[310px] border border-black`}
              >
                <h1 className="text-black text-center font-bold text-xl border-b border-black  p-1">
                  {item.val}
                </h1>
                <div className="flex justify-center item-center gap-1 flex-wrap p-1">
                  {dropItems[index]?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-violet-100   p-2 rounded-lg w-[100px] flex flex-col  justify-between items-center gap-2 "
                    >
                      <div className="w-[50px] h-[50px] relative">
                        <Image
                          src={item.fruitsImg}
                          className="rounded-lg shadow "
                          fill
                          alt="cart img"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h2 className="text-[12px] font-bold ">{item.name}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
