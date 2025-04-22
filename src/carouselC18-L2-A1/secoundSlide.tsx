"use client";
import data from "@/carouselC18-L2-A1/data.json";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

type myData={
  id:string,
  Name:string
}

const SecoundSlide = () => {
  const [items, setItems] = useState(data);
  const [indexItem, setIndexItem] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [originalData, setOriginalData] = useState<string[]>([]); // ✅ FIXED

  const handleClick = (index: number) => {
    setIndexItem(index);
  };

  const moveUp = () => {
    if (indexItem === null || indexItem === 0) return;
    const newItem = [...items];
    [newItem[indexItem - 1], newItem[indexItem]] = [
      newItem[indexItem],
      newItem[indexItem - 1],
    ];
    setItems(newItem);
    setIndexItem(indexItem - 1);
  };

  const moveDown = () => {
    if (indexItem === null || indexItem === items.length - 1) return;
    const newItem = [...items];
    [newItem[indexItem + 1], newItem[indexItem]] = [
      newItem[indexItem],
      newItem[indexItem + 1],
    ];
    setItems(newItem);
    setIndexItem(indexItem + 1);
  };

  const checkResult = () => {
    const isStored = items.every((item, index) => item.id === originalData[index]);
    if (isStored) {
      setMessage("Great job! You got the right order!");
    } else {
      setMessage("Oops! The order is wrong. Try again!");
    }
    setIsCorrect(isStored);
  };

  useEffect(() => {
    function shuffleTasks(arr: myData[]) {
      return arr.sort(() => Math.random() - 0.5);
    }

    // ✅ Save correct order first
    setOriginalData(data.map((item) => item.id));

    // ✅ Then shuffle the items for user
    const shuffled = shuffleTasks([...data]);
    setItems(shuffled);
  }, []);

  return (
    <div className=" py-8 min-h-screen bg-[#F8FAFC] flex items-center justify-center gap-3 pt-5 flex-col">
      <h1 className="text-4xl text-center mb-8 text-black font-bold">
        Sequencing
      </h1>

      <div className="flex justify-center item-center flex-wrap px-8 gap-4">
        <button
          className="bg-yellow-400 text-black text-lg rounded py-2 px-8 cursor-pointer"
          onClick={moveUp}
        >
          Move up
        </button>
        <button
          onClick={moveDown}
          className="bg-yellow-400 text-black text-lg rounded py-2 px-8 cursor-pointer"
        >
          Move down
        </button>
        <button
          onClick={checkResult}
          className="bg-green-600 text-lg rounded py-2 px-5 cursor-pointer"
        >
          Check result
        </button>
      </div>

      <p className={`text-xl ${isCorrect ? "text-green-600" : "text-red-600"}`}>
        {message}
      </p>

      {items.map((item, index) => (
        <h1
          key={item.id}
          onClick={() => handleClick(index)}
          className={`${
            indexItem === index ? " border-2 border-black" : ""
          } ${
            isCorrect ? "bg-green-600" : "bg-violet-600"
          }  text-lg   cursor-pointer min-h-[50px] w-[800px] relative text-center rounded py-1 shadow-sm shadow-black`}
        >
          {item.Name}
        </h1>
      ))}
      {isCorrect && <Confetti className="w-full" />}
    </div>
  );
};

export default SecoundSlide;
