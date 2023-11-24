import React from 'react'
import { UseHtmlParser } from '../../hooks'

function Feature ({ text }) {
  const parsedText = UseHtmlParser(text)

  return (
    <div className='flex flex-row gap-x-[12px] items-center'>
      <div className='w-[16px] h-[16px] lg:w-[22px] lg:h-[22px] flex items-center'>
        <img src='/icons/tick-blue.svg' alt='tick-circle' />
      </div>
      <p className='text-[12px] lg:text-[16px] text-abbey-700'>
        {parsedText}
      </p>
    </div>
  )
}

export default Feature
