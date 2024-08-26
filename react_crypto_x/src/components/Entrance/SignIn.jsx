import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="w-screen h-screen flex justify-center p-10 bg-gray-">
      <div className="w-full h-fit max-w-lg p-8 border border-gray-300 shadow-gray-400 shadow-md rounded-lg bg-white">
        <h1 className="font-bold text-xl sm:text-2xl  text-left">
          Welcome to React CryptoX
        </h1>
        <h3 className="text-left text-gray-700 mt-3 text-xs sm:text-sm">
          Enter your credentials to access the account
        </h3>
        <form className="flex flex-col gap-6 mt-6">
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
          </div>
          <div className="flex  justify-between gap-2 mt-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="Remember" className="text-sm">
                Remember Me
              </label>
            </div>

            <h1 className="font-bold text-purple-600 ">Forgot Password?</h1>
          </div>
          <div className="flex flex-col gap-3 font-bold mt-6 text-center">
            <button className="px-4 py-2 bg-gray-400 rounded-lg text-gray-700">
              Log In
            </button>
            <Link to="/signUp">
              <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-900 w-full">
                Create New Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
