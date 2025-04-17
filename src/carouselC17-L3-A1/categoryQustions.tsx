
type inputsType = {
  first: string;
  secound: string;
  third: string;
  four: string;
  five: string;
  six: string;
};
type myProps = {
  inputs: inputsType;
  setIsFirstScreen: (value: string) => void;
  setInputs: React.Dispatch<React.SetStateAction<inputsType>>;
};

const CategoryQuestions = ({
  setIsFirstScreen,
  inputs,
  setInputs,
}: myProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsFirstScreen("reviseAnswer");

    // console.log("Submitted Data: ", inputs);
  };
  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-5 bg-[#F8FCFA]">
        <h4 className="text-3xl text-black text-center font-bold p-5">Ask AI</h4>
      <div className=" bg-violet-100 rounded-lg flex justify-center items-center p-5">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-5 flex-col w-full"
        >
          <div className="flex items-center bg-violet-500 p-3 rounded-lg justify-between min-w-[500px]">
            <label
              htmlFor="first"
              className=" text-center text-white text-lg font-bold"
            >
              CHECK FACTS
            </label>
            <input
              type="text"
              required
              id="first"
              value={inputs.first}
              onChange={(e) => setInputs({ ...inputs, first: e.target.value })}
              className="outline-none text-white p-2 border border-white rounded-lg"
              placeholder="Enter your answer"
            />
          </div>
          <div className="flex items-center justify-between min-w-[500px] bg-violet-500 p-3 rounded-lg ">
            <label
              htmlFor="secound"
              className=" text-center text-white text-lg font-bold"
            >
              ASK AN OPINION
            </label>
            <input
              type="text"
              required
              id="secound"
              className="outline-none text-white p-2 border border-white rounded-lg"
              value={inputs.secound}
              onChange={(e) =>
                setInputs({ ...inputs, secound: e.target.value })
              }
              placeholder="Enter your answer"
            />
          </div>

          <div className="flex items-center justify-between min-w-[500px] bg-violet-500 p-3 rounded-lg ">
            <label
              htmlFor="third"
              className=" text-center text-white text-lg font-bold"
            >
              DO CALCULATIONS
            </label>
            <input
              type="text"
              required
              id="third"
              className="outline-none text-white p-2 border border-white rounded-lg "
              value={inputs.third}
              onChange={(e) => setInputs({ ...inputs, third: e.target.value })}
              placeholder="Enter your answer"
            />
          </div>

          <div className="flex items-center justify-between min-w-[500px] bg-violet-500 p-3 rounded-lg ">
            <label
              htmlFor="four"
              className=" text-center text-white text-lg font-bold"
            >
              PERFORM ACTIONS
            </label>
            <input
              type="text"
              required
              id="four"
              className="outline-none text-white p-2 border border-white rounded-lg"
              value={inputs.four}
              onChange={(e) => setInputs({ ...inputs, four: e.target.value })}
              placeholder="Enter your answer"
            />
          </div>

          <div className="flex items-center justify-between min-w-[500px] bg-violet-500 p-3 rounded-lg ">
            <label
              htmlFor="five"
              className=" text-center text-white text-lg font-bold"
            >
              MAKE RECOMMENDATIONS
            </label>
            <input
              type="text"
              required
              id="five"
              className="outline-none text-white p-2 border border-white rounded-lg"
              value={inputs.five}
              onChange={(e) => setInputs({ ...inputs, five: e.target.value })}
              placeholder="Enter your answer"
            />
          </div>

          <div className="flex items-center justify-between min-w-[500px] bg-violet-500 p-3 rounded-lg ">
            <label
              htmlFor="six"
              className=" text-center text-white text-lg font-bold"
            >
              TRANSLATE
            </label>
            <input
              type="text"
              required
              id="six"
              className="outline-none text-white p-2 border border-white rounded-lg"
              value={inputs.six}
              onChange={(e) => setInputs({ ...inputs, six: e.target.value })}
              placeholder="Enter your answer"
            />
          </div>

          <div>
            <button className="text-white bg-violet-900 px-8 py-2 rounded-lg cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryQuestions;
