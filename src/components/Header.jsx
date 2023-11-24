import React, { useState } from 'react'

function Header () {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [tags, setTags] = useState([
    {
      icon: '/icons/check.svg',
      title: '30-DAY SATISFACTION GUARANTEE'
    },
    {
      icon: 'icons/truck.svg',
      title: 'Free delivery on orders over $40.00'
    },
    {
      icon: '/icons/heart.svg',
      title: '50.000+ HAPPY CUSTOMERS'
    },
    {
      icon: '/icons/fluent-arrow.svg',
      title: '100% Money Back Guarantee'
    }
  ])

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < tags.length - 1 ? prevIndex + 1 : tags.length - 1))
  }

  return (
    <header>
      <div className='flex flex-col gap-y-[20px] h-[102px] bg-white'>

        <div className='bg-big-stone-950 text-white flex flex-row px-[20px] py-[10px] h-42 lg:px-[70px]'>
          <button className='px-3 lg:hidden'>
            <img src='/icons/previous_arrow.svg' alt='previous arrow icon' onClick={handlePrevClick} />
          </button>

          <div className='relative w-full overflow-x-hidden flex flex-row h-6 lg:static lg:justify-between'>
            {
              tags.map((tag, index) => (
                <div
                  key={index}
                  className={`absolute lg:static w-full lg:w-auto lg:visible ${currentIndex === index ? 'visible' : 'invisible'}`}
                >
                  <div className='flex flex-row w-full lg:w-auto text-[12px] gap-x-[8px] justify-center lg:justify-center items-center h-6'>
                    <img src={tag.icon} alt='guarantee icon' />
                    <p>{tag.title}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <button className='px-3 lg:hidden'>
            <img src='/icons/next_arrow.svg' alt='next arrow icon' onClick={handleNextClick} />
          </button>

        </div>

        <div className='flex flex-row justify-between px-[20px] lg:px-[70px] items-center'>
          <a href='/#'>
            <img src='/icons/clarifion_logo.svg' alt='clarifion logo' className='object-cover w-[106.67px] h-[20px] lg:w-[192px] lg:h-[36px]' />
          </a>

          <div className='flex flex-row gap-x-4 lg:gap-x-16'>
            <div>
              <a href='/#'>
                <img src='/icons/mckfee.svg' alt='mackfee' className='object-cover w-[44px] h-[16px] lg:w-[82px] lg:h-[32px]' />
              </a>
            </div>
            <div>
              <a href='/#'>
                <img src='/icons/norton.svg' alt='norton' className='object-cover w-[44px] h-[16px] lg:w-[82px] lg:h-[32px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
