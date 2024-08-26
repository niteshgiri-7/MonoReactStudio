import React from "react";

const ResetPw = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300">
      <div className="w-full max-w-xs md:max-w-lg xl:max-w-xl h-fit flex flex-col gap-4 bg-white rounded-lg p-8 md:p-12 lg:p-16 shadow-md">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <h3 className="text-lg text-gray-700">Enter your new password</h3>
        </div>
        <form>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>New Password</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex flex-col">
              <label>Repeat New Password</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="password"
                placeholder="********"
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPw;

