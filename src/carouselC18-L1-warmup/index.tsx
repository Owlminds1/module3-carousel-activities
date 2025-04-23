"use client"
import React, { useState } from 'react'
import Start from './start'
import SpinWeel from './spinWeel'

const C18L1Warmup = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("start")

    return <>
    {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "SpinWeel" && <SpinWeel />}
      
    </>
  
}

export default C18L1Warmup
