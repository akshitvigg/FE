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
            <div className="rounded-4xl   w-[900px] h-30  bg-[#303030] ">
              <div>
                <input
                  className=" mt-5 ml-5 placeholder-white outline-none text-white w-[800px] "
                  type="text"
                  placeholder="Ask anything"
                />
              </div>
              <div className=" flex  justify-between">
                <div className=" flex items-center mt-6 space-x-5 ml-5">
                  <div className=" hover:bg-[#464757]   py-2 px-2.5 rounded-full">
                    <img
                      className="  mb-1"
                      src="./plus.png"
                      width={18}
                      alt=""
                    />
                  </div>
                  <span className=" hover:bg-[#464757] px-3 py-2 rounded-3xl flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                      />
                    </svg>
                    <p className=" text-[17px]">Tools</p>
                  </span>
                </div>

                <div className=" flex space-x-4 items-center  mt-4 mr-4 ">
                  <span className=" hover:bg-[#464757] px-2 py-2 rounded-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                      />
                    </svg>
                  </span>

                  <img src="./up-arrow.png" width={50} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
