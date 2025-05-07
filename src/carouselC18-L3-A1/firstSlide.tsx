import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'


type myProps ={
    setIsFirstScreen:(value :string)=>void
}
const FirstSlide = ({setIsFirstScreen}:myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
    <div className="min-h-[100px] grid grid-cols-12 place-items-center shadow-black shadow-md rounded-lg w-[700px] gap-2">
      <div className="col-span-6 w-full">
        <Image src="/C18Images/REMY-BASKETBALL.png" width={300} height={100} alt='REMY-BASKETBALL'/>

      </div>
   <div className='col-span-6 flex justify-center items-center flex-col gap-3'>
   <p className="text-xl text-black text-left "> Your friend Remy has a very busy schedule, but he loves playing basketball! He really wants to make time for it, but that seems to be challenging!</p>
   <p className="text-xl text-black text-left "> Based on what you know, what would you do? How much time does he need for basketball practice? </p>
   </div>
    </div>

      <div
                className={`
              
                     border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                   
                 hover:scale-90 
                         `}
              >
                <FaArrowRight
                  className={` text-[40px]  cursor-pointer text-black `}
                  onClick={()=>setIsFirstScreen("secoundSlide")}
                />
              </div>
  </div>
  )
}

export default FirstSlide
