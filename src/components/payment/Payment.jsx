import React from 'react'

function Payment () {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center px-[16px] py-[8px] gap-y-[12px] border-[1px] border-iron-300 rounded-[4px] lg:gap-x-[16px] justify-center'>

      <div className='flex flex-row gap-x-[12px] lg:gap-x-[16px] text-abbey-700 justify-center text-[12px]'>
        <p>Free shipping</p>
        <div className='w-[1px] bg-iron-300' />
        <div className='flex flex-row gap-x-[8px]'>
          <img src='/icons/lock.svg' alt='lock icon' width='12px' height='12px' />
          <p>Secure 256-bit SSL encryption</p>
        </div>
        <div className='w-[1px] bg-iron-300 hidden lg:inline' />
      </div>
      <div className='h-[1px] bg-iron-300 lg:hidden' />
      <ul className='flex flex-row items-center justify-center'>
        <li>
          <a href='/#'>
            <span>
              <img src='/icons/pay-methods/visa.svg' alt='visa' width='24px' height='14px' />
            </span>
          </a>
        </li>
        <li>
          <a href='/#'>
            <span>
              <img src='/icons/pay-methods/shop-pay.svg' alt='shop pay' width='24px' height='14px' />
            </span>
          </a>
        </li>
        <li>
          <a href='/#'>
            <span>
              <img src='/icons/pay-methods/paypal.svg' alt='paypal' width='24px' height='14px' />
            </span>
          </a>
        </li>
        <li>
          <a href='/#'>
            <span>
              <img src='/icons/pay-methods/mastercard.svg' alt='mastercard' width='24px' height='14px' />
            </span>
          </a>
        </li>
        <li>
          <a href='/#'>
            <span>
              <img src='/icons/pay-methods/gpay.svg' alt='google pay' width='24px' height='14px' />
            </span>
          </a>
        </li>
        <li>
          <a href='/#'>
            <span>
              <img src='/icons/pay-methods/apple pay.svg' alt='apple pay' width='24px' height='14px' />
            </span>
          </a>
        </li>
        <li>
          <a href='/#'>
            <span>
              <img src='/icons/pay-methods/amex.svg' alt='amex' width='24px' height='14px' />
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Payment
