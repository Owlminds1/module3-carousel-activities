"use client"
import React, { useState } from 'react'
import GameFirstSlide from './firstSlide'
import PlaySlide from './playSlide'
import LevelTwo from './LevelTwo'
import LevelThree from './levelThree'
import GameResult from './result'

const CarouselC24L2AA = () => {

    const [isFirstSlide,setIsFirstSlid]=useState("gameFirst")
  return (
    <div>
        {isFirstSlide === "gameFirst" && <GameFirstSlide setIsFirstSlid={setIsFirstSlid}/>}
        {isFirstSlide === "level_1" && <PlaySlide setIsFirstSlid={setIsFirstSlid}/>}
        {isFirstSlide === "Level_2" && <LevelTwo setIsFirstSlid={setIsFirstSlid}/>}
        {isFirstSlide === "Level_3" && <LevelThree setIsFirstSlid={setIsFirstSlid}/>}
        {isFirstSlide === "result_page" && <GameResult setIsFirstSlid={setIsFirstSlid}/>}
      
    </div>
  )
}

export default CarouselC24L2AA
