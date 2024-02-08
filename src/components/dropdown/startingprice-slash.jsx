import { useState } from "react";

import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
  });

export default function StartinPriceSlash() {
  const [openButton, setOpenButton] = useState(false);

  const handleOpenButton = () => {
    setOpenButton(!openButton);
  };

  return (
    <div className={inter.className}>
      <button
        onClick={handleOpenButton}
        type="button"
        className="w-48 flex justify-center border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
      >
        STARTING PRICE{" "}
        <img className="pl-2 pt-0.5" src="icons/linedown.svg" alt="Line Down"/>
      </button>
      {openButton ? (
        <div className="relative bg-slate-50 w-full rounded-xl bg">
          <ul className="flex flex-col justify-center gap-4 py-2 px-2">
            <li className="rounded-xl px-2 py-2 w-24 text-black hover:text-sky-600">
              <a href="#">Any price</a>
            </li>
            <li className="hover:bg-slate-200 rounded-xl w-28 px-2 py-2">
              <button>Under $100</button>
            </li>
            <li className="hover:bg-slate-200 rounded-xl w-32 px-2 py-2">
              <button>$100 - $500</button>
            </li>
            <li className="hover:bg-slate-200 rounded-xl w-20 px-2 py-2">
              <button>$500 +</button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
