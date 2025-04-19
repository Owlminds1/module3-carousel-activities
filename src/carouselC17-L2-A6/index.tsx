"use client"
import React, { useState } from 'react'
import Start from './start';
import LunchBoxSlide from './lunchBoxSlide';
import Table from './table';

const CarouselC17L2A6 = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("start")
  const [fruitsCal,setFruitsCal] =useState(0);
    const [vaggeisCal,setVaggeisCal] =useState(0);
    const [mealCal,setMealCal] =useState(0);
    
  const [countCal, setCountCal] = useState(0);
 
   return <>
   {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
   {isFirstScreen == "LunchBoxSlide" && < LunchBoxSlide setFruitsCal={setFruitsCal}  setVaggeisCal={setVaggeisCal} setMealCal={setMealCal} countCal={countCal} setCountCal={setCountCal}   setIsFirstScreen={setIsFirstScreen}/>}
   {isFirstScreen == "table" && < Table fruitsCal={fruitsCal} vaggeisCal={vaggeisCal} mealCal={mealCal} countCal={countCal}/>}
 
 
   
   
   </>;
}

export default CarouselC17L2A6
