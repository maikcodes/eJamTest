import { UseHtmlParser } from '../../hooks'
import IconButtonColor from '../buttons/IconButtonColor'
import { ProductGuaranteeCard, ProductReviewCard } from '../cards'
import { FeaturesList } from '../lists'
import { Payment } from '../payment'
import { PromoTag, StockTag } from '../tags'
import Rating from '@mui/material/Rating'
import Carousel from 'react-material-ui-carousel'

function ShopProduct ({ product }) {
  const productTitle = UseHtmlParser(product.title)

  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-[40px] lg:bg-alabaster-50 p-6 rounded-[10px]'>

      <div className='hidden lg:inline lg:w-[575px]'>
        <div className='w-auto h-auto lg:w-[575px] lg:h-[591px]'>
          <img src={product.images.full} alt={product.name} className='object-cover lg:w-[575px] lg:h-[591px] ' />
        </div>

        <div>
          <Carousel>
            {
              product.reviews.map((review, index) => <ProductReviewCard key={index} review={review} />)
            }
          </Carousel>
        </div>
      </div>

      <div className='gap-y-[24px] flex flex-col lg:gap-y-[28px]'>

        {productTitle}

        <div className='lg:hidden flex justify-center'>
          <img src={product.images.full} alt={product.name} />
        </div>

        <div className='flex flex-col gap-y-[16px] lg:gap-y-0'>
          <div className='flex flex-row gap-x-[16px] lg:gap-x-[24px]'>

            <div className='bg-azure-radiance-500 rounded-[10px] flex items-center justify-center'>
              <img src={product.images.thumbnail} alt={product.name + ' thumbnail'} className='w-[80px] h-[80px] lg:w-[134px] lg:h-[134px]' />
            </div>

            <div className='flex flex-col gap-y-[12px] lg:gap-y-[5px] w-[392px]'>

              <div className='flex flex-row justify-between items-center'>
                <p className='text-[14px] lg:text-[20px]'>{product.name}</p>
                <div className='flex flex-row gap-x-[8px] items-center'>
                  <p className='text-[10px] lg:text-[16px] text-mountain-mist-400 line-through'>{product.price.normal}</p>
                  <p className='text-[14px] lg:text-[22px] text-azure-radiance-500 font-bold'>{product.price.discount}</p>
                </div>
              </div>

              <div>
                <Rating name='read-only' value={product.rating} readOnly size='small' />
              </div>

              <StockTag stock={product.stock} />

              <div className='hidden lg:block'>
                <p className='text-start text-[16px] text-abbey-700'>
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          <div className='lg:hidden'>
            <p className='text-center text-[12px] text-abbey-700'>
              {product.description}
            </p>
          </div>
        </div>

        <FeaturesList featuresList={product.features} />
        <PromoTag text={product.promotion} />

        <div className='flex flex-col text-[12px] gap-y-[12px] lg:gap-y-[20px]'>
          <div className='flex flex-col gap-y-[12px]'>

            <IconButtonColor
              icon={<img src='/icons/right-arrow.svg' alt='right arrow' />}
              text='YES-CLAIM MY DISCOUNT'
              color='bg-apple-500'
            />
            <Payment />
          </div>
          <div className='flex justify-center'>
            <a href='/#' className='text-red-orange-500 text-[12px] font-semibold text-center underline'>NO THANKS I DON'T WANT THIS</a>
          </div>
        </div>

        <ProductGuaranteeCard
          icon={<img src={product.guarantee.image} alt='guarantee' className='h-[48px] w-[48px] lg:w-[88px] lg:h-[88px]' />}
          text={product.guarantee.text}
        />
      </div>

    </div>
  )
}

export default ShopProduct
