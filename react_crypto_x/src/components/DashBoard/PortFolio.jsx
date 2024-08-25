import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiCurrencyInrBold ,PiHandDeposit ,PiHandWithdraw} from "react-icons/pi";
import { FaBtc } from "react-icons/fa";
const PortFolio = () => {
  return (
    <div className='w-[975px] h-[110px] bg-white rounded-lg shadow-gray-200 shadow-md p-[24px] '>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-3'>

        <div className='flex items-center gap-2 text-black opacity-60'>
        <span>Total Portfolio Value</span>
        <IoInformationCircleOutline />
        </div>
        <div className='flex font-bold text-2xl items-center gap-2'>

        <PiCurrencyInrBold /> <span>122,312.24</span>
        </div>
        </div>
        <div className='flex flex-col gap-3'>
         <h1 className='text-black opacity-60'>Wallet Balances</h1>
         <h1 className='flex gap-2 items-center font-bold text-2xl'>22.3940100 <FaBtc className='opacity-60'/></h1>
        </div>
        <div className='flex gap-6 font-bold h-[40px] text-white'>
           <button className='flex items-center px-4 py-2 bg-purple-700 rounded-lg gap-2'>
           <PiHandDeposit />Deposit</button>
           <button className='flex px-4 py-2 bg-purple-700 rounded-lg items-center gap-2'>
           <PiHandWithdraw />
            Withdraw
           </button>
        </div>
      </div>
    </div>
  )
}

export default PortFolio
