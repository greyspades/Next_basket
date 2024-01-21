import React from 'react'
import { FeatureCard } from './FeatureCard'
import image1 from '../../../../public/images/card1.png';
import image2 from '../../../../public/images/card2.png';
import image3 from '../../../../public/images/card3.png';
import { StaticImageData } from 'next/image';


export const FeaturedProducts = () => {
  const featuredProducts: StaticImageData[] = [image1, image2, image3]

  const displayCards = () => {
    return featuredProducts.map((image: StaticImageData, index: number) => (
        <FeatureCard image={image} key={index} />
    ))
  }
  return (
    <div>
        <div className='flex flex-col place-items-center text-center'>
            <p className='text-[14px] text-swatches-200 font-[700]'>Practice Advice</p>
            <p className='text-[40px] text-swatches-100 font-[700]'>Featured Posts</p>
        </div>
        <div className='flex lg:flex-row flex-col justify-center place-items-center gap-2 sm:gap-4 mt-[80px]'>
            {displayCards()}
        </div>
    </div>
  )
}
