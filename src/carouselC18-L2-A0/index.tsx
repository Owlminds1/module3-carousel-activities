"use client"
import React, { useState } from 'react'
import Start from './start'
import SpinWeel from './spinWeel'

const CarouselC18L2A0 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("start")

    return <>
    {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "SpinWeelL2" && <SpinWeel />}
      
    </>
  
}

export default CarouselC18L2A0
