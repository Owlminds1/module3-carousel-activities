import React, { useEffect, useState } from "react";
import thirdSlideDragData from "@/carouselC18-L3-A2/trhirdSlide.json";
import QuadurantsData from "@/carouselC18-L3-A2/thirdSlidequadrants.json";
import Image from "next/image";
type SlideProps = {
  handleNext: () => void;
  setShow: (val: boolean) => void;
  show: boolean;
};
type DragItem = {
  text: string;
  val: string;
};
const ThirdSlide = ({ handleNext, setShow, show }: SlideProps) => {
  const [dropItem, setDropItem] = useState<{ [key: number]: string[] }>({});
  const [shuffle, setShuffle] = useState(thirdSlideDragData);
  const [filterData, setFilterData] = useState(shuffle);
  const [nextShow, setNextShow] = useState(false);
  useEffect(() => {
    setShuffle((item) => item.sort(() => Math.random() - 0.5));
  }, []);

  const handleNextSlide = () => {
    handleNext();
    setShow(false);
  };
  const handleDrag = (e: React.DragEvent, dragData: DragItem) => {
    e.dataTransfer.setData("dragItem", JSON.stringify(dragData));
  };

  const handleDrop = (e: React.DragEvent, index: number, qValue: string) => {
    const dropData = JSON.parse(e.dataTransfer.getData("dragItem"));
    const updateFilter = filterData.filter((i) => i.text !== dropData.text);

    if (dropData.val === qValue) {
      setDropItem((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dropData.text]
          : [dropData.text],
      }));
      setFilterData(updateFilter);
      if (updateFilter.length === 0) {
        setNextShow(true);
      }
    }
  };
  return (
    <div className="flex justify-start items-center gap-10 flex-col">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="text-black text-xl text-center">
          Become better at getting tasks done by assigning importance to tasks.
        </p>
        <ul className="list-disc p-3 w-[90%]">
          <li className="text-lg">
            <span className="font-bold">Do:</span> urgent and important tasks
            need to be done right away
          </li>
          <li className="text-lg">
            <span className="font-bold">DECIDE:</span> tasks that help achieve
            goals but don’t have a timeline must be scheduled properly.
          </li>
          <li className="text-lg">
            <span className="font-bold">DEFER:</span> tasks that are not urgent
            but important can be postponed or reserved for later time.
          </li>
          <li className="text-lg">
            <span className="font-bold">DELETE:</span>tasks that are neither
            urgent nor important can simply be deleted to make time for
            important tasks.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-12 gap-y-10  gap-5 w-full">
        <div className="col-span-4 w-full flex items-center h-full   justify-center gap-1 flex-wrap  border p-2 rounded-lg border-violet-400">
          {nextShow ? (
            <Image
              src="/Well_Done.jpg"
              width={400}
              height={100}
              alt="well done image"
            />
          ) : (
            filterData.map((item, index) => (
              <h4
                draggable
                onDragStart={(e) => handleDrag(e, item)}
                key={index}
                className=" shadow-lg  text-center border text-violet-900 px-5 py-2 rounded-lg cursor-grab active:cursor-grabbing"
              >
                {item.text}
              </h4>
            ))
          )}
        </div>
        <div className="col-span-8 w-full flex justify-center    flex-wrap gap-2">
          <div className="grid grid-cols-12 w-full gap-2">
 {QuadurantsData.map((item, index) => (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index, item.qValue)}
              key={index}
              className="p-2 col-span-6 flex justify-start flex-col items-center gap-3  w-full rounded-lg border border-black "
            >
              <span className="text-center text-lg text-black">
                {item.qValue}
              </span>

              <div className="flex gap-2 flex-wrap justify-center ">
                {dropItem[index]?.map((i, index) => (
                  <span
                    key={index}
                    className="text-sm bg-violet-900 text-white px-2 py-1 rounded mt-1 block"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
         
        </div>

        <div className="col-span-12 flex gap-4 justify-center text-center w-full ">
          <button
            onClick={() => setShow(true)}
            className="bg-violet-900 text-white px-5 py-2 rounded-lg cursor-pointer "
          >
            Check Solution
          </button>

          <button
            onClick={handleNextSlide}
            disabled={!nextShow}
            className={`${
              !nextShow
                ? "bg-violet-500 cursor-not-allowed"
                : "bg-violet-900 cursor-pointer"
            }  text-white px-5 py-2 rounded-lg  `}
          >
            Next
          </button>
        </div>
      
      </div>
        {show ? (
          <div className="grid grid-cols-12 w-full place-items-center gap-1.5 ">
            <div className="col-span-3 h-full bg-violet-200  flex justify-center items-center flex-col w-full   p-2">
              <h3 className="font-bold text-xl ">DO</h3>
              <div className="flex justify-center items-start">
                <ul className="list-disc  p-5">
                  <li className="text-md text-black">School</li>
                  <li className="text-md text-black">Commute</li>
                  <li className="text-md text-black">Getting Ready</li>
                  <li className="text-md text-black">Sleep</li>
                  <li className="text-md text-black">Meals</li>
                  <li className="text-md text-black">Tutoring</li>
                </ul>
               
              </div>
            </div>

            <div className="col-span-3 h-full bg-violet-200 flex justify-center items-center flex-col w-full   ">
              <h3 className="font-bold text-xl ">DECIDE</h3>
              <div className="flex justify-center items-start">
                <ul className="list-disc  p-5">
                  <li className="text-md text-black">HW completion</li>
                  <li className="text-md text-black">Swimming</li>
                  <li className="text-md text-black">Football Practice</li>
                </ul>
                <ul className="list-disc  p-5">
                  <li className="text-md text-black">Week Prep</li>
                  <li className="text-md text-black">Personal Time</li>
                  <li className="text-md text-black">Piano Practice</li>

                
                </ul>
              </div>
            </div>
             <div className="col-span-3 h-full bg-violet-200 flex justify-center items-center flex-col w-full   ">
              <h3 className="font-bold text-xl ">DEFER</h3>
              <div className="flex justify-center items-start">
                <ul className="list-disc  p-5">
                  <li className="text-md text-black">Social Time</li>
                  <li className="text-md text-black">Outdoors</li>
                  <li className="text-md text-black">Leisure</li>
                </ul>
              
              </div>
            </div>
            <div className="col-span-3 h-full bg-violet-200 flex justify-center items-center flex-col w-full   ">
              <h3 className="font-bold text-xl ">DELETE</h3>
              <div className="flex justify-center items-start">
                <ul className="list-disc  p-5">
                  <li className="text-md text-black">Video Games</li>
                  <li className="text-md text-black">TV</li>
                </ul>
              
              </div>
            </div>

            
          </div>
        ) : (
          ""
        )}
    </div>
  );
};

export default ThirdSlide;
