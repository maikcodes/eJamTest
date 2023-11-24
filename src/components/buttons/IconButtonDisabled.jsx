import React from 'react'

function IconButtonDisabled ({ icon, text, textBold }) {
  return (
    <button className='cursor-not-allowed' disabled>
      <span className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[20px] justify-center'>
        <div className='flex justify-center text-white'>
          |<div className='rounded-full flex w-[20px] h-[20px]  lg:w-[40px] lg:h-[40px] justify-center items-center border-[1px] border-azure-radiance-500'>
            {icon}
          </div>
        </div>

        <p className={`${textBold ? 'font-bold' : 'font-normal'}`}>{text}</p>
      </span>
    </button>
  )
}

export default IconButtonDisabled
