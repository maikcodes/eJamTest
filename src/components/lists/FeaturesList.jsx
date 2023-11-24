import React from 'react'
import Feature from './Feature'

function FeaturesList ({ featuresList }) {
  return (
    <div className='flex flex-col gap-y-[16px]'>
      {
                featuresList.map((feature, index) => <Feature key={index} text={feature} />)
            }
    </div>
  )
}

export default FeaturesList
