import React, { Fragment } from 'react'
import facebookIcon from "../../../../public/icons/facebook2.svg";
import twitterIcon from "../../../../public/icons/twitter2.svg";
import instagramIcon from "../../../../public/icons/instagram2.svg";
import Image, { StaticImageData } from 'next/image';
import { Button, Divider, TextField } from '@mui/material';

interface FooterProps {
    variant?: "primary" | "secondary"
}
export const Footer = ({ variant = "primary" }: FooterProps) => {
    
  return (
    <div>
        <div className={variant == "primary" ? "flex py-[40px] lg:px-[195px] px-8 flex-col lg:flex-row gap-4 justify-between bg-[#FAFAFA]" : "flex py-[40px] lg:px-[195px] px-8 flex-col lg:flex-row gap-4 justify-between bg-white"}>
            <p className="text-[24px] font-[700] text-swatches-100">Bandage</p>
            <div className="flex gap-[20px]">
                {[facebookIcon, instagramIcon, twitterIcon].map((icon: StaticImageData, index: number) => (
                    <Fragment key={index}>
                        <Image className='' src={icon} alt="social media icon"/>
                    </Fragment>
                ))}
            </div>
        </div>
        {variant == "secondary" && (
            <div className="lg:px-[195px] px-4">
              <Divider className="h-[1px] bg-[#E6E6E6]" />
            </div>
        )}
        <div className='lg:grid sm:flex sm:gap-8 lg:grid-cols-6 py-[50px] lg:px-[195px] px-8'>
            <div>
                <p className="text-[16px] text-swatches-100 font-[700]">Company Info</p>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                <p className="text-[16px] text-secondary font-[700]">About Us</p>
                <p className="text-[16px] text-secondary font-[700]">Career</p>
                <p className="text-[16px] text-secondary font-[700]">We are Hiring</p>
                <p className="text-[16px] text-secondary font-[700]">Blog</p>
                </div>
            </div>
            <div>
                <p className="text-[16px] text-swatches-100 font-[700]">Legal</p>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                <p className="text-[16px] text-secondary font-[700]">About Us</p>
                <p className="text-[16px] text-secondary font-[700]">Career</p>
                <p className="text-[16px] text-secondary font-[700]">We are Hiring</p>
                <p className="text-[16px] text-secondary font-[700]">Blog</p>
                </div>
            </div>
            <div>
                <p className="text-[16px] text-swatches-100 font-[700]">Company Info</p>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                <p className="text-[16px] text-secondary font-[700]">Business Marketing</p>
                <p className="text-[16px] text-secondary font-[700]">User Analytic</p>
                <p className="text-[16px] text-secondary font-[700]">Live Chat</p>
                <p className="text-[16px] text-secondary font-[700]">Unlimited Support</p>
                </div>
            </div>
            <div>
                <p className="text-[16px] text-swatches-100 font-[700]">Resources</p>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                <p className="text-[16px] text-secondary font-[700]">IOS & Android</p>
                <p className="text-[16px] text-secondary font-[700]">Watch a Demo</p>
                <p className="text-[16px] text-secondary font-[700]">Customers</p>
                <p className="text-[16px] text-secondary font-[700]">API</p>
                </div>
            </div>
            <div>
                <p className="text-[16px] text-swatches-100 font-[700]">Get In Touch</p>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                    <div className="w-[321px] flex place-items-center">
                    <TextField
                     sx={{
                        backgroundColor: '#F9F9F9',
                        borderBottomLeftRadius: '5px',
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: 'none',
                        borderBottomRightRadius: 'none'
                      }}
                      placeholder="Your Email"
                    // className="border-solid border-1 border-[#E6E6E6] bg-red-600 w-[321px] h-[70px]"
                     />
                    <Button className="w-[117px] h-[58px] bg-swatches-200 rounded-bl-none rounded rounded-tl-none rounded-tr-[5px] rounded-br-[5px] text-white font-[400] text-[14px]">
                      Subscribe
                    </Button>
                    </div>
                <p className="text-[12px] text-secondary font-[400]">Lore imp sum dolor Amit</p>
                </div>
            </div>
        </div>
        <div className="py-[25px] lg:px-[195px] px-8 bg-[#FAFAFA]">
            <p className="text-[14px] font-[700] text-secondary">Made With Love By Finland All Right Reserved </p>
        </div>
    </div>
  )
}
