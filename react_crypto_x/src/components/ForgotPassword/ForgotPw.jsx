import React from "react";
import { FaArrowLeft } from "react-icons/fa";
const ForgotPw = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gray-300 p-2">
        <div className="bg-white rounded-lg p-10 max-w-sm md:max-w-xl">

      <div className="flex flex-col gap-2  font-bold text-3xl ">
        <FaArrowLeft className="cursor-pointer"/>
        <h1 className="mt-2">Forgot Password</h1>
        <span className="text-xs md:text-lg">
          Enter your email address for which you want to reset the password
        </span>
      </div>
      <div>
        <form>
            <div className="flex flex-col gap-6 mt-3">
          <div className="flex flex-col gap-1 font-bold">

            <label>
                Email
            </label>
            <input className="px-4 py-2 rounded-lg" type="email" placeholder="name@email.com"></input>
          </div>
           <div className="flex flex-col">
        
                <button className="bg-gray-500 text-gray-200 px-4 py-2 rounded-lg">Reset Password</button>
                </div>
                </div>
        </form>
      </div>
        </div>
    </div>
  );
};

export default ForgotPw;
