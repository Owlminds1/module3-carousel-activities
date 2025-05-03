
import StartBtn from '@/components/startBtn';
import React from 'react'
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const Start = ({setIsFirstScreen}:myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
    <div className="min-h-[100px] p-4 text-center shadow-black shadow-md rounded-lg flex justify-center items-center w-[600px]">
    <h2 className="text-xl text-black ">Here’s a grid. Each square on the grid has an element of a sentence such as a noun or pronoun, a verb, an adjective or adverb. Make as many sentences as you can using these elements differently.</h2>
    </div>
  <StartBtn value='Start' setIsFirstScreen={setIsFirstScreen} screenVal="ThumSlide" />
  </div>
  )
}

export default Start
