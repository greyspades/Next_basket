import React from 'react'
import Grid1 from  "../../../public/images/image1.jpg"
import Grid2 from  "../../../public/images/image2.jpg"
import Grid3 from  "../../../public/images/image3.jpg"
import Grid4 from  "../../../public/images/image4.jpg"
import Image from 'next/image'

interface HeroProps {
  isMobile: boolean;
}

export const Hero = ({ isMobile }: HeroProps) => {
  return (
    <div className='grid lg:grid-cols-5 gap-4'>
        <div className='grid lg:col-span-2 relative'>
            <Image src={Grid1} fill={isMobile ? false : true} alt='grid1' className='w-[100%] lg:object-cover' />
        </div>
        <div className='grid lg:col-span-3 lg:grid-rows-2 gap-4'>
            <div className='grid lg:row-span-1 lg:relative'>
            <Image src={Grid2} alt='grid2' fill={isMobile ? false : true} className='w-[100%] h-[100%] lg:object-cover' />
            </div>
            <div className='grid row-span-1 lg:grid-cols-2 gap-4'>
            <Image src={Grid3} alt='grid3' className='lg:w-[100%] lg:h-[100%]' />
            <Image src={Grid4} alt='grid4' className='w-[100%] h-[100%]' />
            </div>
        </div>
    </div>
  )
}
