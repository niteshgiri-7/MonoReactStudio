import React from 'react'

const Button = ({name}) => {
  return (
  <button className='px-10 py-2 bg-black border-2 border-transparent text-white rounded-md font-bold hover:bg-white hover:text-black hover:border-black transition ease-in-out delay-150'>{name}</button>)
}

export default Button
