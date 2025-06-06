"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});
import { useWindowSize } from "react-use";
import dropData from "@/carouselC18-L1-A5/dropData.json";
import Welldone from "@/components/wellDone";

type dragDataType = {
  name: string;
  fruitsImg: string;
  dropVal:string
};
type myProps = {
  itemArray: { name: string; fruitsImg: string ;dropVal:string}[];
  setIsFirstScreen: (value: string) => void;
};
const Table = ({ itemArray }: myProps) => {
  const { width, height } = useWindowSize();

  const [open, setOpen] = useState(false);
  const [dropItems, setDropItems] = useState<{ [key: number]: dragDataType[] }>(
    []
  );

  const [filter, setFilter] = useState(itemArray);

  const handleDrag = (e: React.DragEvent, item: dragDataType) => {
    e.dataTransfer.setData("drag", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent, value:string, index: number) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("drag"));
    
if(value === dropItem.dropVal ){
setDropItems((prev) => ({
      ...prev,
      [index]: prev[index] ? [...prev[index], dropItem] : [dropItem],
    }));
    const updateFilter = filter.filter((item) => item.name != dropItem.name);
    setFilter(updateFilter);
    if (updateFilter.length == 0) {
      setTimeout(() => {
        setOpen(true);
      }, 600);
    }
}
  };
  // console.log("you purchase", itemArray);
  return (
    <div className="bg-white min-h-screen flex p-5  flex-col items-center justify-start gap-10">
      <div>
        <h4 className="text-3xl text-center font-bold text-black">Grocery Shopping</h4>
        <h3 className="text-md text-black text-center">
          (Please separate these items into healthy and unhealthy)
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-2 w-full place-items-start">
        <div
          className={`${
            filter.length == 0 ? "hidden" : "block"
          } col-span-4 w-full min-h-[350px] flex justify-center  items-center gap-2 flex-wrap border border-violet-900 p-2 rounded-lg`}
        >
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
                  className="rounded-lg shadow  "
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

        <div
          className={`${
            filter.length == 0 ? "col-span-12" : "col-span-8"
          }  w-full`}
        >
          <div className="grid grid-cols-12 gap-1  place-items-center">
            {dropData.map((item, index) => (
              <div
                key={index}
                onDrop={(e) => handleDrop(e, item.val, index)}
                onDragOver={(e) => e.preventDefault()}
                className={` 
                  col-span-6
                 rounded-lg w-full min-h-[350px] border border-black`}
              >
                <h1 className="text-black text-center font-bold text-xl border-b border-black  p-1">
                  {item.val}
                </h1>
                <div className="flex justify-center items-center gap-1 flex-wrap p-1">
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
      {open ? (
        <>
          <Welldone setOpen={setOpen} open={open} />

          <Confetti
            width={width}
            height={height}
            className={` w-full h-full `}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;
