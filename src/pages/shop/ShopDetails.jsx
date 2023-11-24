import React from 'react'
import { IconButtonDisabled, IconButtonPrimary, IconButtonSecondary, ShopProduct } from '../../components'
import { product } from '../../data/MockProduct'

function ShopDetails () {
  return (
    <main className='lg:px-[70px]'>
      <div className='flex flex-col gap-y-[24px]'>

        <div className='text-center gap-y-[20px] lg:gap-y-[24px] px-[20px]'>
          <h2 className='text-[32px] lg:text-[48px]'>
            Wait! Your Order in Progress.
          </h2>
          <p className='text-abbey-700 text-[16px] lg:text-[24px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>

        <div className='flex text-[12px] lg:text-[20px] flex-row justify-between px-[20px] lg:px-[40px]'>

          <IconButtonPrimary
            icon={<img src='/icons/tick-circle.svg' alt='tick-circle' height='16px' width='16px' className='lg:w-[16px] lg:h-16px[]' />}
            text='Cart Review'
          />

          <IconButtonPrimary
            icon={<img src='/icons/tick-circle.svg' alt='tick-circle' height='16px' width='16px' className='lg:w-[16px] lg:h-16px[]' />}
            text='Checkout'
          />

          <IconButtonSecondary
            icon={<p className='text-white text-center font-bold'>3</p>}
            text='Special Offer'
            textBold
          />

          <IconButtonDisabled
            icon={<p className='text-azure-radiance-500 text-center font-bold'>4</p>}
            text='Confirmation'
            textBold
          />
        </div>

        <ShopProduct product={product} />
      </div>
    </main>
  )
}

export default ShopDetails
