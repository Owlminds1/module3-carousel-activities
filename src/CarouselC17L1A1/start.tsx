import StartBtn from '@/components/startBtn';
import React from 'react'
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const Strart = ({setIsFirstScreen}:myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
    <div className="  shadow-black shadow-md rounded-lg p-5 text-center w-[600px]">
    <h2 className="text-2xl text-black">Let’s do an activity. From the following statements, can you tell me which ones are facts and which ones are opinions?</h2>
    </div>
  <StartBtn value='Start' setIsFirstScreen={setIsFirstScreen} screenVal="Qustions" />
  </div>
  )
}

export default Strart
