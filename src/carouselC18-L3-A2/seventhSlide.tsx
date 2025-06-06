

type SlideProps = {
  setShow: (val: boolean) => void;
  show: boolean;
};

const SeventhSlide = ({ setShow, show }: SlideProps) => {
  return (
    <div className="flex justify-start items-center gap-10 flex-col">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="text-black text-xl text-center">
          Make time for 4 hours of practise time
        </p>

        <div className="flex justify-center items-center flex-col gap-4 ">
          <h5 className="text-xl font-medium">
            What kind of questions do we need to ask Remy to find time for
            basketball?
          </h5>
           <textarea placeholder="write hrer..." className="w-[50%] min-h-[80px] border border-black outline-none text-center  rounded-lg"/>
          {show ? (
            <ul className="list-disc p-5 space-y-5 w-[60%] ">
              <li>
                Are you willing to reduce your personal time and leisure time to
                make space for basketball?
              </li>
              <li>
                What do you like more? Football or basketball? It’s 8hrs of your
                time every week. That’s 32 hours of your time every month.
                That’s 384 hours of your time a year. Are you sure you want to
                spend it on basketball?
              </li>
              <li>
                Would parents be okay with changing football or homework time to
                basketball?
              </li>
              <li>
                Is it possible for you to complete your HW on one of the
                weekends and use leisure time if needed?
              </li>
              <li>
                Can you change outdoor time to basketball since technically it
                is an outdoor sport?
              </li>
              <li>
                Can you sleep eight hours and get ready quickly on the weekends
                to start the day with basketball practice? You still have the
                next day to catch up on your sleep.
              </li>
            </ul>
          ) : (
            <button
              onClick={() => setShow(true)}
              className="text-white cursor-pointer bg-violet-900 px-5 py-2 rounded-lg "
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeventhSlide;
