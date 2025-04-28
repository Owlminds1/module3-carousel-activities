import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const VedioSlide = ({setIsFirstScreen}:myProps) => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5 bg-[#F8FCFA]'>
          <h5 className="text-center text-2xl font-bold py-4 text-black">
          Learn about Global Warming.
        </h5>
        <div className="flex justify-center items-center gap-8 flex-col">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6Fthw65WUpU?si=3iqVMdu_vrWXSv6y" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div
                  className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90`}
                >
                  <FaArrowRight
                    className={` text-[40px] cursor-pointer text-black`}
                    onClick={()=>setIsFirstScreen("start")}
                  />
                </div>
        </div>
      
    </div>
  )
}

export default VedioSlide
