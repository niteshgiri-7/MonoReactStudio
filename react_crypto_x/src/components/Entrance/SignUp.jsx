import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="w-screen h-screen flex justify-center p-10 bg-gray-">
      <div className="w-full h-fit max-w-lg p-8 border border-gray-300 shadow-gray-400 shadow-md rounded-lg bg-white">
        <h1 className="font-bold text-xl sm:text-2xl text-left whitespace-nowrap">
          Welcome to React CryptoX
        </h1>

        <h3 className="text-left text-gray-700 mt-3 text-xs sm:text-sm">
          Create a free account by filling the form below
        </h3>
        <form className="flex flex-col gap-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-bold">Name</label>
              <input
                className="px-4 py-2 rounded-md w-full border border-gray-400"
                placeholder="James"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Surname</label>
              <input
                className="px-4 py-2 rounded-md w-full border border-gray-400"
                placeholder="Arthur"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex flex-col">
              <label className="font-bold">Email</label>
              <input
                className="px-4 py-2 rounded-md w-full border border-gray-400"
                placeholder="name@mail.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Password</label>
              <input
                type="password"
                className="px-4 py-2 rounded-md w-full border border-gray-400"
                placeholder="********"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Repeat Password</label>
              <input
                type="password"
                className="px-4 py-2 rounded-md w-full border border-gray-400"
                placeholder="********"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-sm">
              I agree with{" "}
              <span className="text-purple-900">Terms & Conditions</span>
            </label>
          </div>
          <div className="flex flex-col gap-3 font-bold mt-6 text-center">
            <Link to="/email-verify">
            <div className="w-full flex flex-col">

            <button className="px-4 py-2 bg-gray-400 rounded-lg text-gray-700">
              Create Account
            </button>
            </div>
            </Link>
            <h1 className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login">
              <span className="font-bold text-md cursor-pointer text-purple-600">
                Log In
              </span>
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
