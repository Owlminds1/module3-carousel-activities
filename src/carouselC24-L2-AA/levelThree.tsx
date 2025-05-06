"use client";
import React, { useEffect, useState } from "react";

type myProps = {
  setIsFirstSlid: (value: string) => void;
};

const cardData = [
  { id: 1, value: "a", word: "Problems", bg_color: "#003161" },
  { id: 2, value: "a", word: "challenges", bg_color: "#003161" },
  { id: 3, value: "b", word: "Solutions", bg_color: "#6A1E55" },
  { id: 4, value: "b", word: "resolve", bg_color: "#6A1E55" },
  { id: 5, value: "c", word: "Determination", bg_color: "#31511E" },
  { id: 6, value: "c", word: "courage", bg_color: "#31511E" },
];

const LevelThree = ({ setIsFirstSlid }: myProps) => {
  const FlipSound = new Audio("/sound/flip.mp3");
  const correct = new Audio("/sound/correct.mp3");
  const [shuffelData, setShuffelData] = useState(cardData);
  const [selectedCards, setSelectedCards] = useState<
    { id: number; value: string }[]
  >([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]); // Track flipped cards

  const handleCheck = (card: { id: number; value: string }) => {
    FlipSound.play();
    if (selectedCards.length === 2 || matchedCards.includes(card.id) || selectedCards.some((e)=>e.id == card.id)) return;

    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);
    setFlippedCards([...flippedCards, card.id]);

    if (newSelectedCards.length === 2) {
      if (newSelectedCards[0].value === newSelectedCards[1].value) {
        setMatchedCards((prev) => [
          ...prev,
          newSelectedCards[0].id,
          newSelectedCards[1].id,
        ]);
        FlipSound.pause();
        correct.play();
      }
      setTimeout(() => {
        setSelectedCards([]);
        setFlippedCards((prev) =>
          prev.filter((id) => matchedCards.includes(id))
        );
      }, 1000);
    }
  };

  useEffect(() => {
    if (matchedCards.length === cardData.length) {
      setTimeout(() => {
        setIsFirstSlid("result_page"); // Move to next screen
      }, 2000);
    }
  }, [matchedCards, setIsFirstSlid]);

  // card suffel logic
  const suffelArray = (array: typeof cardData) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setShuffelData(suffelArray([...cardData]));
  }, []);

  return (
    <div className="min-h-screen bg-[#DCC352] flex justify-center items-center flex-col">
      <h3 className="text-2xl font-bold mb-4 text-black ">Level 3</h3>
      <div className="min-h-[500px] w-full  grid grid-cols-12 place-items-center">
        {shuffelData.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer card col-span-4"
            onClick={() => handleCheck(item)}
          >
            <div
              className={`  card-inner transition-transform duration-500 ease-in-out ${
                flippedCards.includes(item.id) || matchedCards.includes(item.id)
                  ? "rotate-y-180"
                  : ""
              }`}
              style={{
                background: matchedCards.includes(item.id)
                  ? `${item.bg_color}`
                  : "#F08A5D",
                borderRadius: "10px",
                transform:
                  flippedCards.includes(item.id) ||
                  matchedCards.includes(item.id)
                    ? "rotateY(180deg)"
                    : "",
              }}
            >
              <div
                className="card-front shadow-md p-4 flex justify-center items-center bg-red-500"
                style={{ border: "5px solid white" }}
              >
                <p className="text-lg font-semibold"></p>
              </div>
              <div className="card-back  shadow-md p-4 flex justify-center items-center ">
                <p className="text-lg font-semibold">{item.word}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelThree;
