import React, { useEffect, useState } from "react";
import FourthSlideData from "@/carouselC18-L3-A2/fourthSlide.json";
import QuadurantsData from "@/carouselC18-L3-A2/fourthSlidequadrants.json";
import QuadurantsData2 from "@/carouselC18-L3-A2/fourthSlidequadrants2.json";
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
const FourthSlide = ({ handleNext, setShow, show }: SlideProps) => {
   const [dropItem, setDropItem] = useState<{ [key: string]: string[] }>({});
  const [shuffle, setShuffle] = useState(FourthSlideData);
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
        setNextShow(true)
      }
    }
  };
  return (
    <div className="flex justify-start items-center gap-10 flex-col">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="text-black text-xl text-center">
          {` Sort the Pros and Cons for ‘DELETE’ tasks and ‘DEFER’ tasks`}
        </p>
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
              <h3 className="w-full text-center text-lg font-bold">Delete</h3>
              <h4 className="text-md w-full text-center  font-normal">
                (video games, TV)
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
               Defer 
              </h3>
              <h4 className="text-md w-full text-center  font-normal">
                (Social time/ leisure time/ Outdoor)
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
        {show ? (
          <>
           <div className="col-span-6 flex justify-center items-center flex-col w-full bg-violet-200  p-2">
              <h3 className="font-bold text-xl ">Delete</h3>
              <div className="flex justify-center items-start gap-10 ">
                <div className="pt-5">
                  <span className="font-medium w-full">PROS:</span>
                  <ul className="list-disc">
                    <li className="text-lg text-black">relaxation</li>
                    <li className="text-lg text-black">breather</li>
                    <li className="text-lg text-black">release</li>
                   
                  </ul>
                </div>
                <div className="pt-5">
                  <span className="font-medium w-full">CONS:</span>
                  <ul className="list-disc">
                    <li className="text-lg text-black">procrastination</li>
                    <li className="text-lg text-black">lethargy</li>
                    <li className="text-lg text-black">stress</li>
                    <li className="text-lg text-black">fatigue</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-6 flex justify-center items-center flex-col w-full bg-violet-200  p-2">
              <h3 className="font-bold text-xl ">Defer</h3>
              <div className="flex justify-center items-start gap-10 ">
                <div className="pt-5">
                  <span className="font-medium w-full">PROS:</span>
                  <ul className="list-disc">
                    <li className="text-lg text-black">freedom</li>
                    <li className="text-lg text-black">empty mind</li>
                    <li className="text-lg text-black">engaging in hobbies</li>
                    <li className="text-lg text-black">meeting people</li>
                  </ul>
                </div>
                <div className="pt-5">
                  <span className="font-medium w-full">CONS:</span>
                  <ul className="list-disc">
                    <li className="text-lg text-black">procrastination</li>
                    <li className="text-lg text-black">screen time</li>
                    <li className="text-lg text-black">not useful</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FourthSlide;
