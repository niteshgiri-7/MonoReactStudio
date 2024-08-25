import React from 'react'

const SupportCard = () => {
  return (
    <div className='flex gap-4 '>
      <div className='flex flex-col gap-3 w-[45%] px-10'>
        <div>

       <img src='/Chatbot.png' alt='botImg'></img>
       </div>
       <h1 className='text-3xl font-bold'>Live Chat</h1>
       <span className='text-gray-500 font-bold'>Don't have time to wait for the answer? Chat with us now.</span>
      </div>
      <div className='w-[50%] bg-[#5f00d8] flex flex-col p-6 rounded-lg gap-2'>
        <span className='bg-white max-w-fit px-1 rounded-lg text-[#5f00d8]'>Chatbot</span>
        <h1 className='text-white font-bold'>Chat with us now</h1>
        </div>
    </div>
  )
}

export default SupportCard
