import React from 'react'

function IconButtonColor ({ icon, text, color }) {
  return (
    <button className={`h-[51px] lg:h-[59px] ${color} rounded-[50px] text-white text-[14px] lg:text-[20px] py-[16px]`}>
      <span className='flex flex-row justify-center items-center gap-x-[16px] lg:gap-x-[19.76px]'>
        <p className='font-semibold lg:font-bold'>
          {text}
        </p>
        {icon}
      </span>
    </button>
  )
}

export default IconButtonColor
