import React from 'react'
import { UseHtmlParser } from '../../hooks'

function PromoTag ({ text }) {
  const parsedText = UseHtmlParser(text)

  return (
    <div className='flex flex-row items-center h-[64px] gap-x-[16px] px-[16px] py-[12px] gap-y-[10px]'>
      <div className='flex justify-center text-white'>
        <div className='rounded-full flex w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] bg-azure-radiance-500 justify-center items-center'>
          <p className='text-white text-center font-semibold text-[12px] lg:text-[16px]'>%</p>
        </div>
      </div>
      <div>
        <p className='text-[14px] lg:text-[16px] text-bold'>
          {parsedText}
        </p>
      </div>
    </div>
  )
}

export default PromoTag
