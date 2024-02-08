import { useState } from "react";
import StartinPriceSlash from "./startingprice-slash";

export default function FilterBy() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="flex justify-between xl:hidden max-xl:py-6 max-xl:px-3 px-3 py-3">
        <h1 className="ml-3 font-semibold">Featured Sellers</h1>
        <button onClick={handleOpen} className="mr-3">
          <img className="xl:hidden" src="icons/lineas.svg" alt="Lineas Icon" />
        </button>
      </div>
      {open ? (
        <div className="xl:hidden w-full h-full fixed bg-white transition-all duration-1000 ease overflow-y-scroll">
          <div className="flex flex-col m-6">
            <div className="flex justify-between">
              <h1 className="pl-2 pb-4 font-semibold">Filter by platform</h1>
              <img onClick={handleOpen} className="mb-2" src="icons/exit.svg" alt="Exit Line" />
            </div>
            <div>
              <div className="font-bold flex">
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  ALL
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  <img
                    className="py-1"
                    src="social/only-color.svg"
                    alt="Onlyfans Icon"
                  />
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  <img src="social/ig-color.svg" alt="Instagram" />
                </button>
                <button
                  type="button"
                  className="border w-24 flex justify-center border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  MORE{" "}
                  <img
                    className="pl-2 pt-0.5"
                    src="icons/linedown.svg"
                    alt="Line Down"
                  />
                </button>
              </div>
            </div>
            <h1 className="pl-2 py-4 font-semibold">Get more specific...</h1>
            <div className="flex flex-col font-bold">
              <ul>
                <li>
                  <StartinPriceSlash/>
                </li>
                <li>
                  <button
                    type="button"
                    className="border flex justify-center w-52 border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                  >
                    FOLLOWING / OF %{" "}
                    <img
                      className="pl-2 pt-0.5"
                      src="icons/linedown.svg"
                      alt="Line Down"
                    />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="border w-44 justify-center flex border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                  >
                    PROMO TYPES{" "}
                    <img
                      className="pl-2 pt-0.5"
                      src="icons/linedown.svg"
                      alt="Line Down"
                    />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="border w-24 flex justify-center border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                  >
                    TAGS{" "}
                    <img className="pl-2" src="icons/linedown.svg" alt="Line Down" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
