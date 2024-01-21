import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from 'next/image';
import phoneIcon from "../../../../public/icons/phone.svg"
import EmailIcon from "../../../../public/icons/email.svg"
import YoutubeIcon from "../../../../public/icons/youtube.svg"
import FacebookIcon from "../../../../public/icons/facebook.svg"
import TwitterIcon from "../../../../public/icons/twitter.svg"
import InstagramIcon from "../../../../public/icons/instagram.svg"

export const TopRow = () => {
  return (
    <div className='w-screen h-[46px] bg-primary flex flex-row px-8 text-white justify-between place-items-center text-[14px] font-[700]'>
        <div className='flex gap-8'>
        <div className='flex gap-1'>
            <Image src={phoneIcon} width={16} height={16} alt="phone" />
            <p>(225) 555-0118</p>
        </div>
        <div className='flex gap-1'>
        <Image src={EmailIcon} width={16} height={16} alt="email" />
            <p>michelle.rivera@example.com</p>
        </div>
        </div>
        <p>Follow Us and get a chance to win 80% off</p>
        <div className='flex flex-row gap-4'>
            <p>Follow Us :</p>
            <div className='flex flex-row gap-4'>
            <Image src={InstagramIcon} width={16} height={16} alt="instagram" />
            <Image src={YoutubeIcon} width={16} height={16} alt="youtube" />
            <Image src={FacebookIcon} width={16} height={16} alt="facebook" />
            <Image src={TwitterIcon} width={16} height={16} alt="twitter" />
            </div>
        </div>
    </div>
  )
}