import React from 'react'
import { MdVerified } from 'react-icons/md'

const SuccessfulSignUp = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300 p-2">
    <div className="bg-white rounded-lg px-16 py-8 flex flex-col gap-3 max-w-md md:max-w-xl">

      <div className="flex justify-center">

      <MdVerified className="text-green-600 font-bold text-6xl place-self-center"/>
      </div>
      <h1 className="font-black text-xl text-center">Email Verification</h1>
      <h3 className="text-gray-700 text-sm ">
       Hurray! You have successfully created your account. Enter the app to explore all of it's features
      </h3>

    <div className="flex flex-col">
      <button className="px-4 py-2 font-bold bg-[#5f00d8] text-white rounded-lg">Enter the App</button>
    </div>
    </div>
  </div>
  )
}

export default SuccessfulSignUp