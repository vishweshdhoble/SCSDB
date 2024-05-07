import React from 'react'
import notfound from "/404.gif"

const Notfound = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <img className='h-[70%] object-cover' src={notfound} alt="" />
    </div>
  )
}

export default Notfound
