import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
type myProps ={
  setIsFirstScreen:(vlaue:string)=>void
}
const Vedio = ({setIsFirstScreen}:myProps) => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5 p-5 bg-[#F8FCFA]'>
              <h1 className="text-center text-4xl  text-black">Create a personalised video</h1>
              <h5 className="text-center text-2xl  text-black">Get inspired by this</h5>

              <iframe width="800" height="400" src="https://www.youtube.com/embed/eCi4ZtRGUVY?si=Cspv4MrYNTw6_Hhb" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>       <div
                  className={`
                       "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                      
                   hover:scale-90`}
                >
                  <FaArrowRight
                    className={`
                     text-[40px] cursor-pointer text-black`}
                    onClick={()=>setIsFirstScreen("slide")}
                  />
                </div>
    </div>
  )
}

export default Vedio
