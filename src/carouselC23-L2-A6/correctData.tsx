import React from "react";

interface Dialogue {
  name: string;
  talk: string;
}

interface CorrectDataProps {
  data: {
    title: string;
    Assertive: Dialogue[];
  };
}

const CorrectData = ({ data }: CorrectDataProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full border border-black p-3 rounded-lg ">
        <h3 className="font-bold text-xl text-center">{data.title}</h3>
        {data.Assertive.map((item, index) => (
          <div key={index}>
            <h4 className="text-md">
              <span className="font-medium text-lg">{item.name} :</span>{" "}
              {item.talk}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorrectData;
