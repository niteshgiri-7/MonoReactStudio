import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
const ResetDone = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300 p-2">
      <div className="bg-white rounded-lg px-16 py-8 flex flex-col gap-3 max-w-md md:max-w-xl">
        <div className="flex justify-center">
          <MdVerified className="text-green-600 font-bold text-6xl place-self-center" />
        </div>
        <h1 className="font-black text-xl text-center">SuccessFully Changed</h1>
        <h3 className="text-gray-700 text-sm ">
          Now you can access your account
        </h3>
      <Link to="/login">
      
        <div className="flex flex-col">
          <button className="px-4 py-2 font-bold bg-[#5f00d8] text-white rounded-lg">
            Enter the App
          </button>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default ResetDone;
