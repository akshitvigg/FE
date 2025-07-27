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
        <div> </div>
      </div>
      ;
    </div>
  );
}

export default App;
