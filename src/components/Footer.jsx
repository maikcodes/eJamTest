import React from 'react'

function Footer () {
  return (
    <footer className='flex flex-col gap-y-[16px] bg-big-stone-950 p-[20px] text-[12px] lg:text-[16px] text-white lg:flex-row lg:justify-between lg:h-[88px] lg:py-[20px] lg:px-[70px]'>
      <div className='flex flex-row py-[8px] gap-x-[12px] justify-center items-center'>
        <p>Copyright (c) 2023</p>
        <div className='w-[1px] h-5 bg-iron-300' />
        <p>Clarifionsupport@clarifion.com</p>
      </div>
      <div className='flex flex-row justify-center gap-x-[16px] items-center'>
        <div className='w-[13px] h-[13px] lg:w-[16px] lg:h-[16px]'>
          <img src='/icons/lock-withe.svg' alt='lock icon' className='w-full h-auto' />
        </div>
        <p>Secure 256-bit SSL encryption.</p>
      </div>
    </footer>
  )
}

export default Footer
