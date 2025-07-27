import { useState } from "react";
import "./App.css";

function App() {
  const [slideTrue, setSlideNotTrue] = useState(false);
  return (
    <div className=" h-screen text-white flex">
      <div
        className={` ${
          slideTrue ? "w-13" : "w-[380px]"
        } transition-all duration-700 ease-in-out  bg-[#181818]`}
      >
        <div className=" flex justify-end ">
          <button
            className=" mr-3 mt-2"
            onClick={() => {
              setSlideNotTrue(!slideTrue);
            }}
          >
            ☰
          </button>
        </div>
      </div>
      <div className={` w-full text-xl bg-[#212121]`}>
        <div className=" flex justify-between">
          <p className="text-md p-4"> ChatGPT </p>
          <div>
            <p className=" mt-1 text-neutral-400 text-[16.5px] font-bold">
              Saved memory full
            </p>
            <button className=" py-2 px-5 text-[#DCD8EC] rounded-3xl text-[18px] bg-[#373669]">
              Get Plus
            </button>
          </div>
          <div>
            <img className=" m-6" src="./messenger.png" width={20} alt="" />
          </div>
        </div>

        <div className=" mt-54 flex justify-center">
          <div className=" space-y-10">
            <p className=" text-center text-4xl">Where should we begin?</p>
            <div className=" flex justify-center">
              <input className=" py-10 px-80 bg-[#303030]" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
