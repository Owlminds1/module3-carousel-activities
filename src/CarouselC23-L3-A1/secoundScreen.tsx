import data from "@/CarouselC23-L3-A1/firstScreenData.json"


type myProps ={
  item:{text:string,titel:string,sugge:string}
  show:boolean
  setShow:(value:boolean)=>void
}
const SecoundScreen = ({item,show,setShow}:myProps) => {


  return (
    <div className='grid grid-cols-12 h-[450px] overflow-y-scroll  w-full place-items-center p-3'>
        <div className="col-span-6 w-full">
            <div className="grid grid-cols-12 gap-1 w-full place-items-center"  >
                {
                    data.map((item,index)=>(
                        <div key={index} className='col-span-6 min-h-[200px] w-full border border-black rounded-lg'>
                            <h3 className='text-lg text-black text-center  font-bold'>{item.text}</h3>
                            <p className='text-lg text-black text-center '>{item.suggeg}</p>
                        </div>  
                    ))
                }
            </div>
        </div>
        <div className="col-span-6 w-full h-full flex justify-start gap-6 flex-col p-2 items-center">
          <h4 className="text-black text-2xl font-medium text-center">{item.titel}</h4>
<label className='text-xl text-center font-bold ' htmlFor="lbl">{item.text}</label>  
<textarea  id="lbl" className='text-black outline-black border border-gray-600 text-center min-h-[80px] rounded-lg w-full'/> 
{
  !show ? 
<button onClick={()=>setShow(true)} className='text-lg bg-violet-900 px-10 py-2 rounded-lg text-white cursor-pointer'>Check</button>         
:
<p className="text-xl text-violet-800 font-bold text-center">{item.sugge}</p>
}
        </div>
      
    </div>
  )
}

export default SecoundScreen
