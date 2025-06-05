

type SlideProps = {
  setShow: (val: boolean) => void;
  show: boolean;
};

const SixthSlide = ({ setShow, show }: SlideProps) => {
  return (
    <div className="flex justify-start items-center gap-10 flex-col">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="text-black text-xl text-center">
         Make time for 4 hours of practise time
        </p>

        <div className="flex justify-center items-center  flex-col gap-4  ">
          <h5 className="text-xl font-medium">What kind of challenges might Remy face in rescheduling?</h5>
          <textarea placeholder="write hrer..." className="w-[50%] min-h-[80px] border border-black outline-none text-center  rounded-lg"/>
        {  show ? 
        <ul className="list-disc p-5  space-y-5 w-[60%] ">
          <li>Remy may get stressed about losing relaxation time given his already busy schedule and then not enjoy basketball training at all.</li>
          <li>Remy may feel inclined to change football to basketball, but his parents might insist on football as it has a better chance of getting a scholarship later.</li>
          <li>Remy may want to give homework time to basketball, but his parents may not agree with that.</li>
          <li>Remy may face challenges at training if he’s overworked or has a burnout.</li>
        </ul>
        
        :
        <button onClick={()=>setShow(true)} className="text-white cursor-pointer bg-violet-900 px-5 py-2 rounded-lg ">submit</button>}
        </div>
      </div>
    </div>
  );
};

export default SixthSlide;
