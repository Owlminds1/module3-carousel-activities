import React from "react";
type myProps = {
  countCal: number;
  itemArray: { name: string }[];
};
const Table = ({ itemArray }: myProps) => {
  console.log("you purchase", itemArray);
  return (
    <div className="bg-white min-h-screen flex p-5  flex-col items-center justify-start gap-10">
      <h4 className="text-3xl text-center font-bold text-black">Meal Plan</h4>
   <div className="grid grid-cols-12 w-full place-items-center">
      <div className="col-span-4 w-full flex justify-center item-center gap-2 flex-wrap border border-black p-2 rounded-lg ">
        {
            itemArray.map((item,index)=>(
                <h4 className="bg-violet-800 text-white px-10 py-2 rounded-lg" key={index}>{item.name}</h4>
            ))
        }
     </div>

     <div className="col-span-8 w-full  ">
        <div className="grid grid-cols-12">
            {
                
            }
            <div className="col-span-6"></div>
        </div>
      
     </div>
   </div>
    </div>
  );
};

export default Table;
