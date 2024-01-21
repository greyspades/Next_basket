import { Toolbar, IconButton } from '@mui/material'
import React from 'react'
import { NavigationLink } from '@/app/types'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Image from 'next/image';
import CartIcon from "../../../../public/icons/cart.svg"
import UserIcon from "../../../../public/icons/user.svg"
import HeartIcon from "../../../../public/icons/heart.svg"
import SearchIcon from "../../../../public/icons/search.svg"

export const DesktopNavbar = () => {

    const navigationLinks: NavigationLink[] = [
        {name: "Home", link: "/", hasMenu: false},
        {name: "Shop", link: "/", hasMenu: true},
        {name: "About", link: "/", hasMenu: false},
        {name: "Blog", link: "/", hasMenu: false},
        {name: "Contact", link: "/", hasMenu: false},
        {name: "Pages", link: "/", hasMenu: false},
    ]

    const renderNavigationLinks = () => navigationLinks.map((item: NavigationLink, index: number) => (
        <Link key={index} href={item.link} className='flex flex-row place-items-center'>
            {item.name}
            {item.hasMenu && (
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            )}
        </Link>
    ))
  return (
    <div className=''>
        <Toolbar className='flex flex-col lg:flex-row justify-between place-items-center'>
            <div className='flex flex-row gap-16'>
                <p className='text-[24px] font-[700]'>
                    Bandage
                </p>
                <div className='flex lg:flex-row flex-col gap-8'>
                    {renderNavigationLinks()}
                </div>
            </div>
            <div className='flex gap-8 place-items-center text-[#23A6F0]'>
                <div className='flex flex-row gap-2'>
                <Image src={UserIcon} width={16} height={16} alt="instagram" />
                <p>Login / Register</p>
                </div>
                <div className=''>
                <Image src={SearchIcon} width={16} height={16} alt="instagram" />
                </div>
                <div className='flex flex-row gap-2'>
                <Image src={CartIcon} width={16} height={16} alt="instagram" />
                <p>1</p>
                </div>
                <div className='flex flex-row gap-2'>
                <Image src={HeartIcon} width={16} height={16} alt="instagram" />
                <p>1</p>
                </div>
            </div>
        </Toolbar>
    </div>
  )
}