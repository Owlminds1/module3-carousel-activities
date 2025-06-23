import React from "react";

const LastSlide = () => {
  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[900px]">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Mood Meter
        </h1>

        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px] ">
          <ul className="text-black list-disc p-5 space-y-4 w-[650px] ">
            <li className="text-black text-xl  ">
              Sometimes, how one person feels has nothing to do with the other
              person
            </li>
            <li className="text-black text-xl  ">
              Our own self-worth - how we feel about ourselves - makes us feel a
              certain way towards others. towards others.
            </li>
            <li className="text-black text-xl  ">
              All of us have different personalities, moods, feelings,
              histories, and contexts in private and public places, which makes
              us behave in certain ways.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LastSlide;
