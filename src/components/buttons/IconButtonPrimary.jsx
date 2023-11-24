import React from 'react'

function IconButtonPrimary ({ icon, text, textBold, onClick }) {
  return (
    <button onClick={onClick} className='lg:border-2 lg:border-transparent lg:px-3 lg:py-2 lg:rounded-[10px] lg:hover:border-mantis-400'>
      <span className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[20px] justify-center'>

        <div className='flex justify-center text-white'>
          <div className='rounded-full flex w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] bg-mantis-400 text-center justify-center items-center'>
            {icon}
          </div>
        </div>

        <p className={`${textBold ? 'font-bold' : 'font-normal'}`}>{text}</p>

      </span>
    </button>
  )
}

export default IconButtonPrimary
