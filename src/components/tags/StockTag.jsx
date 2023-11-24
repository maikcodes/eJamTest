import React from 'react'

function StockTag ({ stock }) {
  return (
    <div className='gap-x-[16px] flex flex-row items-center'>
      <div className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]'>
        <div className='rounded-full bg-iron-300 w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] flex justify-center items-center'>
          <div className='rounded-full bg-azure-radiance-500 w-[6px] h-[6px] lg:w-[8.53px] lg:h-[8.53px]' />
        </div>
      </div>
      <p className='text-[12px] lg:text-[16px]'>{stock} left in Stock</p>
    </div>
  )
}

export default StockTag
