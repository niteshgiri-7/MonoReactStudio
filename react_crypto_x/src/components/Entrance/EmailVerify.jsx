import React from "react";
import { MdEmail } from "react-icons/md";
const EmailVerify = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300 p-2">
      <div className="bg-white rounded-lg px-16 py-8 flex flex-col gap-3 max-w-md md:max-w-xl">

        <div className="flex justify-center">

        <MdEmail className="text-purple-600 font-bold text-6xl place-self-center"/>
        </div>
        <h1 className="font-black text-xl text-center">Email Verification</h1>
        <h3 className="text-gray-700 text-sm ">
          We have sent an email verication to <span className=" text-[16px] text-black">name@email.com</span> if you
          didn't receive it, click the button below
        </h3>
 
      <div className="flex flex-col">
        <button className="px-4 py-2 font-bold bg-gray-300 text-gray-500 rounded-lg">Re-Send Email</button>
      </div>
      </div>
    </div>
  );
};

export default EmailVerify;
