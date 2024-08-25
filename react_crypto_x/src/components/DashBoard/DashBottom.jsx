import React from 'react'

const DashBottom = ({title,description,h1bgColor,bg ,textColor,h1Color}) => {
  return (
    <div className='w-[485px] h-[130px] py-8 px-4 rounded-2xl shadow-gray-300 shadow-md flex flex-col gap-4' style={{backgroundColor:bg,
        color:textColor
    }}>
        <h1 className="rounded-lg text-xs max-w-[15%] px-2 text-center py-1" style={{backgroundColor: h1bgColor,
            color:h1Color
        }}>{title}</h1>
        <span className='font-bold'>{description}</span>
      
    </div>
  )
}

export default DashBottom
