import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
type myProps ={
  setIsFirstScreen:(vlaue:string)=>void
}
const Vedio = ({setIsFirstScreen}:myProps) => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5 p-5 bg-[#F8FCFA]'>
              <h1 className="text-center text-4xl  text-black">Get Inspired for Excellence</h1>
               <h1 className="text-center text-3xl py-2 text-black">Watch this video as there will be questions after this.</h1>
              <iframe width="800" height="400" src="https://www.youtube.com/embed/aISXCw0Pi94?si=9xwoNlan-j1JhmBw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>       <div
                  className={`
                       "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                      
                   hover:scale-90`}
                >
                  <FaArrowRight
                    className={`
                     text-[40px] cursor-pointer text-black`}
                    onClick={()=>setIsFirstScreen("Qustions")}
                  />
                </div>
    </div>
  )
}

export default Vedio
