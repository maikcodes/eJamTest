import Rating from '@mui/material/Rating'

function ProductReviewCard ({ review }) {
  const renderVerifiedCustomer = (isVerified) => {
    if (!isVerified) return <></>

    return (
      <div className='flex flex-row gap-x-[10px] items-center'>
        <img src='/icons/verify.svg' alt='verified' />
        <p className='capitalize text-silver-tree-400 text-[12px]'>verified customer</p>
      </div>
    )
  }

  return (
    <div className='hidden lg:inline'>
      <div className='flex flex-col p-[24px] gap-y-[18px]'>
        <div className='flex flex-row gap-x-[13px]'>
          <img src={review.customer.profile_image} alt={review.customer.name} width='48px' height='48px' />
          <div className='flex flex-col gap-y-[7px]'>
            <Rating name='read-only' value={review.rating} readOnly size='small' />
            <div className='flex flex-row gap-x-[10px] items-center'>
              <p className='text-[14px] font-bold text-abbey-700'>{review.customer.name}</p>
              {
                renderVerifiedCustomer(review.customer.verified)
              }
            </div>
          </div>
        </div>
        <p className='text-abbey-700'>
          "{review.comment}"
        </p>
      </div>
    </div>
  )
}

export default ProductReviewCard
