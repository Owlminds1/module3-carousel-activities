import React from "react";
type myProps = {
  fruitsCal: number;
  vaggeisCal: number;
  mealCal: number;
  countCal: number;

};
const Table = ({ mealCal, vaggeisCal, fruitsCal ,countCal}: myProps) => {
  return (
    <div className="bg-white min-h-screen flex p-5  flex-col items-center justify-center gap-3">
 <h4 className="text-3xl text-center font-bold text-black">Lunchbox planner</h4>
        <div className="grid grid-cols-12 w-[800px] gap-3 gap-y-4 border border-black rounded-lg p-5 bg-violet-100 place-items-center ">
            <div className="col-span-4 w-full">
                <h2 className="text-white py-2 rounded-lg bg-blue-500 text-center">ITEMS</h2>
            </div>
            <div className="col-span-8 w-full">
            <h2 className="text-white py-2 rounded-lg bg-blue-500 text-center">{`Caloris (700)`}</h2>

            </div>
            <div className="col-span-4 w-full">
                <h2 className="text-white py-2 rounded-lg bg-slate-600 text-center">Fruits</h2>
            </div>
            <div className="col-span-8 w-full">
            <h2 className="text-white py-2 rounded-lg bg-slate-600 text-center">{fruitsCal}</h2>

            </div>
            <div className="col-span-4 w-full">
                <h2 className="text-white py-2 rounded-lg bg-slate-500 text-center">Veggies</h2>
            </div>
            <div className="col-span-8 w-full">
            <h2 className="text-white py-2 rounded-lg bg-slate-500 text-center">{vaggeisCal}</h2>

            </div>
            <div className="col-span-4 w-full">
                <h2 className="text-white py-2 rounded-lg bg-slate-600 text-center">Meals</h2>
            </div>
            <div className="col-span-8 w-full">
            <h2 className="text-white py-2 rounded-lg bg-slate-600 text-center">{mealCal}</h2>

            </div>
            
            <div className="col-span-4 w-full">
                <h2 className="text-white py-2 rounded-lg bg-black text-center">Total Calories </h2>
            </div>
            <div className="col-span-8 w-full">
            <h2 className="text-white py-2 rounded-lg bg-black text-center">{countCal}</h2>

            </div>
        </div>
       
    </div>
  );
};

export default Table;
