export const product = {
  title:
    "<p className='text-center lg:text-start text-[24px] lg:text-[32px] text-bold capitalize'><span className='text-azure-radiance-500'>ONE TIME ONLY </span>special price for 6 extra clarifion for only<span className='text-azure-radiance-500'> $14 each </span>($84.00 Total!)</p>",
  name: 'Clarifion Air Ionizer',
  description:
    'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.',
  rating: 5,
  price: {
    normal: '$180',
    discount: '$84'
  },
  stock: 12,
  features: [
    "Negative Ion Technology may<span className='font-bold'> help with allergens.</span>",
    "Designed for<span className='font-bold'> air rejuvenation.</span>",
    "<span className='font-bold'> Perfect for every room </span> in all types of places."
  ],
  promotion:
    "Save<span className='text-azure-radiance-500'> 53% </span>and get<span className='text-azure-radiance-500'> 6 extra Clarifision </span>for only<span className='text-azure-radiance-500'> $14 Each</span>.",
  images: {
    full: '/product/clarifion.svg',
    thumbnail: '/product/product-preview.svg'
  },
  reviews: [
    {
      customer: {
        name: 'Ken T.',
        profile_image: '/customers/customer.svg',
        verified: true
      },
      comment:
        'As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.',
      rating: 5
    },
    {
      customer: {
        name: 'Lorem Ipsum',
        profile_image: '/customers/customer.svg',
        verified: false
      },
      comment:
        'This is a pretty nice product. Clarifions is a great alternative to purified your house and so easy to use.',
      rating: 4
    }
  ],
  guarantee: {
    text: "If you are not completely thrilled with your Clarifion - We have a<span className='font-bold'> 30 day satisfaction guarantee. </span>Please refer to our return policy at the bottom of the page for more details. Happy Shopping!",
    image: '/icons/guarantee.svg'
  }
}
