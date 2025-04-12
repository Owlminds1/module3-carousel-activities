
import StartBtn from '@/components/startBtn';
import React from 'react'
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const Strart = ({setIsFirstScreen}:myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
    <div className="min-h-[100px] p-4 text-center shadow-black shadow-md rounded-lg flex justify-center items-center w-[600px]">
    <h2 className="text-2xl text-black ">Now I will show you an image. First we will pronounce each word. Then you have to look at it for 1 minute and memorise all the names with the images. Ready?</h2>
    </div>
  <StartBtn value='Start' setIsFirstScreen={setIsFirstScreen} screenVal="responseImages" />
  </div>
  )
}

export default Strart
