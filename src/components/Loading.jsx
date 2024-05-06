import React from 'react'
import loader from "/loader.gif"

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <img className='h-[70%] object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading
