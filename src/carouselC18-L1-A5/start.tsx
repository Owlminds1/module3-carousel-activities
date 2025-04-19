
import StartBtn from '@/components/startBtn';
import React from 'react'
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const Start = ({setIsFirstScreen}:myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
    <div className="min-h-[100px] p-4 text-center shadow-black shadow-md rounded-lg flex justify-center items-center w-[600px]">
    <h2 className="text-2xl text-black ">Healthy foods help us stay fit!  Unhealthy foods can be eaten sometimes but not regularly! Drag and Drop healthy items for breakfast, lunch, and dinner for a day. Your budget is 50 BUCKS!</h2>
    </div>
  <StartBtn value='Start' setIsFirstScreen={setIsFirstScreen} screenVal="CartSlide" />
  </div>
  )
}

export default Start
