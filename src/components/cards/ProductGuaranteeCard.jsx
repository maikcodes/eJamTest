import React from 'react'
import { UseHtmlParser } from '../../hooks'

function ProductGuaranteeCard ({ icon, text }) {
  const parsedText = UseHtmlParser(text)

  return (
    <div className='flex flex-row gap-x-[16px] items-center'>
      <div className=''>
        {icon}
      </div>
      <p className='text-[12px] lg:text-[16px] text-abbey-700 w-[256px] lg:w-[446px]'>
        {parsedText}
      </p>
    </div>
  )
}

export default ProductGuaranteeCard
