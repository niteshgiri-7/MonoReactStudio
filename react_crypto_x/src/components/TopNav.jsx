import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
const TopNav = ({name}) => {
  return (
    <div className='w-[calc(100vw-260px)] h-[70px] text-3xl flex justify-center py-2 bg-white'>
      <div className='w-[80%] flex justify-between font-bold '>

      <h1>{name}</h1>
      <FaRegUserCircle className='text-gray-600'/>
      </div>
      
    </div>
  )
}

export default TopNav
