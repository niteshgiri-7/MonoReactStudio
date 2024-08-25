import React from "react";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
const Graph = () => {
  return (
    <div className="w-auto h-[345px] bg-white shadow-gray-300   shadow-md rounded-xl p-8">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-black opacity-60 font-bold">Current Price</h1>
          <div className="flex gap-4 font-bold text-white">
            <button className=" px-4 py-2 rounded-lg  bg-purple-800 flex items-center gap-2">
              <FaPlusCircle />
              Buy
            </button>
            <button className="px-4 py-2  rounded-lg bg-purple-800 flex items-center gap-2">
              <FaMinusCircle />
              Sell
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center font-bold text-[24px]">
            <PiCurrencyInrBold />
            <span>26,670.25 </span>
          </div>
          <div className="flex gap-1  items-end text-green-700">
            <FaArrowTrendUp />
            <span>0.04%</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-2 text-gray-700 rounded-sm bg-gray-300 px-3">
            <span>1H</span>
            <span>1D</span>
            <span>1W</span>
            <span>1M</span>
          </div>
        </div>

        <div>
          <img src="/Graph.png" alt="graph" />
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>7:15 PM</span>
          <span>12:55 AM</span>
          <span>6:35 AM</span>
          <span>12:15 PM</span>
          <span>5:55 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Graph;
