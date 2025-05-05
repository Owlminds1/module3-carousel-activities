import StartBtn from '@/components/startBtn';
import React from 'react'
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const Start = ({setIsFirstScreen}:myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
    <div className="min-h-[100px]  shadow-black  p-4 shadow-md rounded-lg flex text-center justify-center items-center w-[600px]">
    <h2 className="text-2xl text-black">Situations of Resilience</h2>
    </div>
  <StartBtn value='Start' setIsFirstScreen={setIsFirstScreen} screenVal="Qustions" />
  </div>
  )
}

export default Start
