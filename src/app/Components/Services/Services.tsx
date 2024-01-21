import React from 'react'
import { ServiceCard } from './ServiceCard'
import growth from '../../../../public/images/growth.svg'
import concrete from '../../../../public/images/concrete.svg'
import wins from '../../../../public/images/bookreader.svg'

interface Service {
    imageSource: string;
    title: string;
    subTitle: string;
}
export const Services = () => {

    const services: Service[] = [
        {
            title: "Easy Wins",
            subTitle: "Get your best looking smile now!",
            imageSource: wins
        },
        {
            title: "Concrete",
            subTitle: "Defalcate is most focused in helping you discover your most beautiful smile",
            imageSource: concrete
        },
        {
            title: "Hack Growth",
            subTitle: "Overcame any hurdle or any other problem.",
            imageSource: growth
        }
    ]

    const displayServices = () => {
        
        return services.map(({imageSource, subTitle, title}: Service, index: number) => (
            <div key={index} className="w-[300px] flex justify-center">
                <ServiceCard imageSource={imageSource} subTitle={subTitle} title={title}  />
            </div>
        ))
    }
  return (
    <div className=''>
        <div className='flex flex-col place-items-center gap-4'>
            <p className='text-[20px] font-[400] text-secondary'>Featured Products</p>
            <p className='text-swatches-100 leading-[32px] font-[700] text-[24px]'>THE BEST SERVICES</p>
            <p className='text-secondary text-[14px] font-[400]'>Problems trying to resolve the conflict between </p>
        </div>
        <div className='flex lg:flex-row flex-col justify-center place-items-center gap-[100px] mt-[80px]'>
            {displayServices()}
        </div>
    </div>
  )
}