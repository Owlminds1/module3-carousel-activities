import StartBtn from '@/components/startBtn';
import React from 'react'
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const Strart = ({setIsFirstScreen}:myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
    <div className="min-h-[100px]  shadow-black  p-4 shadow-md rounded-lg flex text-center justify-center items-center w-[600px] flex-col">
    <h2 className="text-2xl text-black"> Create a definition for the object you see. </h2>
    <h3 className="text-center text-xl py-4 text-black" >Ask all the WH Questions! What is it? How does it look like? Where is it found? How is it used? When is it used? Why is it used? For what purpose?</h3>
    </div>
  <StartBtn value='Start' setIsFirstScreen={setIsFirstScreen} screenVal="Images" />
  </div>
  )
}

export default Strart
