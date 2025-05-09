import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
type myProps ={
  setIsFirstScreen:(vlaue:string)=>void
}


const Vedio = ({setIsFirstScreen}:myProps) => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5 p-5 bg-[#F8FCFA]'>
              <h1 className="text-center text-4xl py-4 text-black">Be positive</h1>
              <iframe width="800" height="400" src="https://www.youtube.com/embed/D9OOXCu5XMg?si=sDFNS5VGSkV-Gnwb" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>        <div
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
