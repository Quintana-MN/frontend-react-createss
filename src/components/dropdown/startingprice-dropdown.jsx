import { useState } from "react";

export default function PriceDropDown() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleOpen} className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100">
        STARTING PRICE ↓
      </button>
      {open ? (
        <div className="absolute  bg-white rounded-xl">
          <ul className="flex flex-col justify-center gap-4 py-2 px-2">
            <li className="hover:bg-slate-200 rounded-xl px-2 py-2">
              <button>Option 1</button>
            </li>
            <li className="hover:bg-slate-200 rounded-xl px-2 py-2">
              <button>Option 2</button>
            </li>
            <li className="hover:bg-slate-200 rounded-xl px-2 py-2">
              <button>Option 3</button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}