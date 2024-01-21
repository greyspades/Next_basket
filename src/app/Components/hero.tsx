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
            <div className="flex flex-col gap-2 place-items-start text-start absolute top-6 left-6">
              <p className="text-[14px] font-[700] text-primary">5 Items</p>
              <p className="font-[700] text-swatches-100 lg:text-[40px] text-[24px]">FURNITURE</p>
              <p className="text-swatches-100 font-[700] text-[14px]">Read More</p>
            </div>
        </div>
        <div className='grid lg:col-span-3 lg:grid-rows-2 gap-4'>
            <div className='grid lg:row-span-1 relative'>
            <Image src={Grid2} alt='grid2' fill={isMobile ? false : true} className='w-[100%] h-[100%] lg:object-cover' />
            <div className="flex flex-col gap-2 place-items-start text-start absolute top-6 left-6">
              <p className="text-[14px] font-[700] text-primary">5 Items</p>
              <p className="font-[700] text-swatches-100 text-[24px]">FURNITURE</p>
              <p className="text-swatches-100 font-[700] text-[14px]">Read More</p>
            </div>
            </div>
            <div className='grid row-span-1 lg:grid-cols-2 gap-4'>
         <div className="relative">
         <Image src={Grid3} alt='grid3' className='lg:w-[100%] lg:h-[100%]' />
            <div className="flex flex-col gap-2 place-items-start text-start absolute top-6 left-6">
              <p className="text-[14px] font-[700] text-primary">5 Items</p>
              <p className="font-[700] text-swatches-100 text-[24px]">FURNITURE</p>
              <p className="text-swatches-100 font-[700] text-[14px]">Read More</p>
            </div>
         </div>
            <div className="relative">
            <Image src={Grid4} alt='grid4' className='w-[100%] h-[100%]' />
            <div className="flex flex-col gap-2 place-items-start text-start absolute top-6 left-6">
              <p className="text-[14px] font-[700] text-primary">5 Items</p>
              <p className="font-[700] text-swatches-100 text-[24px]">FURNITURE</p>
              <p className="text-swatches-100 font-[700] text-[14px]">Read More</p>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
