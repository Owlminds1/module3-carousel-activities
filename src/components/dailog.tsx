import React from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
      } from "@/components/ui/alert-dialog"
  
type myProps ={
    val:string
    open:boolean;
    setOpen:(value:boolean)=>void
}

const Dailog = ({val,open,setOpen}:myProps) => {
  return (
    <AlertDialog  open={open} onOpenChange={setOpen} >
 
  <AlertDialogContent className='bg-black '>
    <AlertDialogHeader>
      <AlertDialogTitle></AlertDialogTitle>
      <AlertDialogDescription className='text-2xl text-center text-white' >
      {val}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <div className='text-center w-full pt-8'>
      <button onClick={()=>setOpen(false)} className='bg-white cursor-pointer text-black px-3 py-1 rounded-md text-lg font-bold  '>Cancel</button>
     </div>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default Dailog
