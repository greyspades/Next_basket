import React from 'react'
import Image from 'next/image'
import growth from '../../../../public/images/growth.svg'
import concrete from '../../../../public/images/concrete.svg'
import bookreader from '../../../../public/images/bookreader.svg'

interface ServiceCardProps {
    imageSource: string;
    title: string;
    subTitle: string;
}

export const ServiceCard = ({ imageSource, title, subTitle }: ServiceCardProps) => {
  return (
    <div className='flex flex-col justify-center place-items-center gap-[20px] w-[200px] h-[200px] text-center'>
       <Image src={imageSource} width={72} height={72} alt="book reader"  />
        <p className='text-[24px] text-swatches-100 leading-[24px] font-[700]'>{title}</p>
        <p className='text-[14px] text-secondary font-[400] leading-[20px]'>{subTitle}</p>
    </div>
  )
}
