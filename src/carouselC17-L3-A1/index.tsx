"use client"
import React, { useState } from 'react'
import Start from './start'
import CategoryQuestions from './categoryQustions'
import ReviseAnswer from './reviseAnswer'

const CarouselC17L3A1 = () => {
   const [isFirstScreen,setIsFirstScreen] =useState("start");
    const [inputs, setInputs] = useState({
       first: "",
       secound: "",
       third: "",
       four: "",
       five: "",
       six: "",
     });
   return (
     <>
        {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
        {isFirstScreen == "CategoryQuestions" && <CategoryQuestions inputs={inputs} setInputs={setInputs}  setIsFirstScreen={setIsFirstScreen} />}
        {isFirstScreen == "reviseAnswer" && <ReviseAnswer inputs={inputs} />}
       
 
 
     </>
   )
}

export default CarouselC17L3A1
