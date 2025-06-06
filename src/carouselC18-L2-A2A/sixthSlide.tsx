import React, { useState } from "react";
import SixthSlideData from "@/carouselC18-L2-A2A/sixthSlideData.json";
import QuadurantsData from "@/carouselC18-L2-A2A/sixthSlideQuadrants.json";
import QuadurantsData2 from "@/carouselC18-L2-A2A/sixthSlideQuadrants2.json";
import Welldone from "@/components/wellDone";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";
type SlideProps = {
  setShow: (val: boolean) => void;
  show: boolean;
};
type DragItem = {
  text: string;
  val: string;
};
const SixthSlide = ({ setShow, show }: SlideProps) => {
   const { width, height } = useWindowSize();
  const [dropItem, setDropItem] = useState<{ [key: string]: string[] }>({});
  const [filterData, setFilterData] = useState(SixthSlideData);
  const [resultShow, setResultShow] = useState(false);

  const handleDrag = (e: React.DragEvent, dragData: DragItem) => {
    e.dataTransfer.setData("dragItem", JSON.stringify(dragData));
  };

  const handleDrop = (e: React.DragEvent, qValue: string) => {
    const dropData = JSON.parse(e.dataTransfer.getData("dragItem"));
    const updateFilter = filterData.filter((i) => i.text !== dropData.text);
    if (dropData.val === qValue) {
      setDropItem((prev) => ({
        ...prev,
        [qValue]: prev[qValue]
          ? [...prev[qValue], dropData.text]
          : [dropData.text],
      }));

      setFilterData(updateFilter);
      if (updateFilter.length === 0) {
     
          setResultShow(true);
       
      }
    }
  };

  return (
    <div className="flex justify-start items-center gap-10 flex-col">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="text-black text-xl text-center">
          Establish the pros and cons of doing or not doing each task that is in
          the category “can wait” and “can be skipped”
        </p>
      </div>

      <div className="grid grid-cols-12 gap-y-10  gap-5 w-full">
        <div className="col-span-4 w-full flex items-center h-full   justify-center gap-1 flex-wrap  border p-2 rounded-lg border-violet-400">
          {filterData.map((item, index) => (
            <h4
              draggable
              onDragStart={(e) => handleDrag(e, item)}
              key={index}
              className=" shadow-lg  text-center border text-violet-900 px-5 py-2 rounded-lg cursor-grab active:cursor-grabbing"
            >
              {item.text}
            </h4>
          ))}
        </div>
        <div className="col-span-8 w-full ">
          <div className="grid grid-cols-12 w-full  border gap-1  border-black rounded-lg p-2">
            <div className="col-span-4 w-full"></div>
            <div className="col-span-4 w-full ">
              <h3 className="w-full border border-black text-center text-lg font-bold">
                Pros
              </h3>
            </div>
            <div className="col-span-4 w-full ">
              <h3 className="w-full border border-black text-center text-lg font-bold">
                Cons
              </h3>
            </div>

            <div className="col-span-4 w-full border border-black flex justify-center items-center flex-col gap-1">
              <h3 className="w-full text-center text-lg font-bold">Can wait</h3>
              <h4 className="text-md w-full text-center  font-normal">
                (social time/outdoor/video games)
              </h4>
            </div>
            {QuadurantsData.map((item) => (
              <div
                key={item.qValue}
                className="col-span-4 w-full h-full border min-h-[150px]   border-black flex justify-center items-center flex-col gap-1"
              >
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, item.qValue)}
                  className="p-2 w-full h-full"
                >
                  <div className="flex gap-2  h-full flex-wrap justify-center items-center ">
                    {dropItem[item.qValue]?.map((i, index) => (
                      <span
                        key={index}
                        className="text-sm bg-violet-900 text-white px-2 py-1 rounded mt-1 block"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="col-span-4 w-full border border-black flex justify-center items-center flex-col gap-1">
              <h3 className="w-full text-center text-lg font-bold">
                Can be skipped
              </h3>
              <h4 className="text-md w-full text-center  font-normal">
                (personal time/ leisure time/ TV)
              </h4>
            </div>
            {QuadurantsData2.map((item) => (
              <div
                key={item.qValue}
                className="col-span-4 w-full border min-h-[150px]   border-black flex justify-center items-center flex-col gap-1"
              >
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, item.qValue)}
                     className="p-2 w-full h-full"
                >
                  <div className="flex gap-2  w-full h-full flex-wrap justify-center items-center ">
                    {dropItem[item.qValue]?.map((i, index) => (
                      <span
                        key={index}
                        className="text-sm bg-violet-900 text-white px-2 py-1 rounded mt-1 block"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
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
        </div>
        {show ? (
          <>
            <div className="col-span-6 flex justify-center items-center flex-col w-full bg-violet-200  p-2">
              <h3 className="font-bold text-xl ">Can Wait</h3>
              <div className="flex justify-center items-start gap-10 ">
                <div className="pt-5">
                  <span className="font-medium w-full">PROS:</span>
                  <ul className="list-disc">
                    <li className="text-lg text-black">Relaxation</li>
                    <li className="text-lg text-black">Breather</li>
                    <li className="text-lg text-black">Release</li>
                    <li className="text-lg text-black">Being Active</li>
                  </ul>
                </div>
                <div className="pt-5">
                  <span className="font-medium w-full">CONS:</span>
                  <ul className="list-disc">
                    <li className="text-lg text-black">Procrastination</li>
                    <li className="text-lg text-black">Lethargy</li>
                    <li className="text-lg text-black">Stress</li>
                    <li className="text-lg text-black">Fatigue</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-6 flex justify-center items-center flex-col w-full bg-violet-200  p-2">
              <h3 className="font-bold text-xl ">Can be Skipped</h3>
              <div className="flex justify-center items-start gap-10 ">
                <div className="pt-5">
                  <span className="font-medium w-full">PROS:</span>
                  <ul className="list-disc">
                    <li className="text-lg text-black">Freedom</li>
                    <li className="text-lg text-black">Empty Mind</li>
                    <li className="text-lg text-black">Engaging in Hobbies</li>
                  </ul>
                </div>
                <div className="pt-5">
                  <span className="font-medium w-full">CONS:</span>
                  <ul className="list-disc">
                    <li className="text-lg text-black">Procrastination</li>
                    <li className="text-lg text-black">Screen Time</li>
                    <li className="text-lg text-black">Not Useful</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      {resultShow ? 
      <>
      <Confetti width={width} height={height}  />
      <Welldone open={resultShow} setOpen={setResultShow} />  
      </>
      : ""}
    </div>
  );
};

export default SixthSlide;
