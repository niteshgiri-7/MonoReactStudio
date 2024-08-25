import React from 'react'

const Button = ({name,bgColor,textColor}) => {
  return (
    
      <button className='px-6 py-1 rounded-md font-bold ' style={{backgroundColor:bgColor,color:textColor}}>{name}</button>
    
  )
}

export default Button
