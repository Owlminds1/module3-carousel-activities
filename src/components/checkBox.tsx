"use client"

import { Checkbox } from "@/components/ui/checkbox"
type myProps ={
    name:string
}
export function CheckboxWithText({name}:myProps) {
  return (
    <div className="items-top flex space-x-5">
      <Checkbox id="terms1" className="border w-8 h-8 text-red-500 cursor-pointer  border-black" />
      <div className="grid gap-2 leading-none">
        <label
          htmlFor="terms1"
          className="min-w-[100px] text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
        {name}
        </label>
      </div>
    </div>
  )
}
