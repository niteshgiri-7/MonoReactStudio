import React from 'react'
import { HiCurrencyDollar } from "react-icons/hi2";
import { PiCurrencyInrBold} from "react-icons/pi";
import { FaBtc } from "react-icons/fa";
const DashRecent = () => {
  return (
    <div className='w-[468px] h-[345px] bg-white shadow-gray-300 shadow-md rounded-xl px-8 py-4 flex flex-col gap-5'>
      <h1 className='text-gray-700 font-bold'>Recent Transactions</h1>
      <div className='flex items-center gap-4'>
      <HiCurrencyDollar className='font-bold text-3xl'/>
      <div className='flex flex-col gap-2 '>
        <h1>INR Deposit</h1>
        <span className='text-gray-500 text-sm font-bold'>2022-06-09 7:06 PM</span>
       
      </div>

     <div className='flex w-[45%] justify-end'>

      <div className='flex items-center font-bold'>

      <PiCurrencyInrBold/> 
      <span> 81,123.10</span>
      </div>
     </div>
      </div>
      <div className='flex items-center gap-4'>
      <FaBtc className='font-bold text-3xl'/>
      <div className='flex flex-col gap-2 '>
        <h1>BTC Sell</h1>
        <span className='text-gray-500 text-sm font-bold'>2022-05-27 12:32 PM</span>
       
      </div>

     <div className='flex w-[45%] justify-end'>
      <div className='flex items-center font-bold'>

      <HiCurrencyDollar/> 
      <span> 81,123.10</span>
      </div>
     </div>
      </div>
      <div className='flex items-center gap-4 '>
      <HiCurrencyDollar className='font-bold text-3xl'/>
      <div className='flex flex-col gap-2 '>
        <h1>INR Deposit</h1>
        <span className='text-gray-500 text-sm font-bold'>2022-06-09 7:06 PM</span>
       
      </div>

     <div className='flex w-[45%] justify-end'>

      <div className='flex items-center font-bold'>

      <PiCurrencyInrBold/> 
      <span> 81,123.10</span>
      </div>
     </div>
      </div>
      <div className='flex justify-center'>
        <button className='bg-gray-400 w-full rounded-xl p-2 text-black text-lg font-bold'>View all</button>
      </div>
    </div>
  )
}

export default DashRecent
