import { useState } from "react";
import "./App.css";

function App() {
  const [slideTrue, setSlideNotTrue] = useState(false);
  return (
    <div className=" h-screen text-white flex">
      <div
        className={` ${
          slideTrue ? "w-0" : "w-[380px]"
        } transition-all duration-700 ease-in-out  bg-[#181818]`}
      >
        <div className=" flex justify-end ">
          <button
            onClick={() => {
              setSlideNotTrue(!slideTrue);
            }}
          >
            slide
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
