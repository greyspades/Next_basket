import { Toolbar, IconButton, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React, { useState } from 'react'
import { NavigationLink } from '@/app/types'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Image from 'next/image';
import CartIcon from "../../../../public/icons/mobilecart.svg"
import MenuIcon from "../../../../public/icons/mobilemenu.svg"
import SearchIcon from "../../../../public/icons/mobilesearch.svg"
import { current } from '@reduxjs/toolkit';

export const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const navigationLinks: NavigationLink[] = [
        {name: "Home", link: "/", hasMenu: false},
        {name: "Product", link: "/", hasMenu: false},
        {name: "Pricing", link: "/", hasMenu: false},
        {name: "Contact", link: "/", hasMenu: false},
    ]

    const toggleMenu = () => {
        setMenuOpen((currentState) => !currentState)
    }

    const renderNavigationLinks = () => navigationLinks.map((item: NavigationLink, index: number) => (
        <Link key={index} href={item.link} className='flex flex-row place-items-center text-[30px] font-[400] text-[#737373]'>
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
        <Toolbar className='flex flex-row justify-between place-items-center'>
        <p className='text-[24px] font-[700]'>
                    Bandage
                </p>
        <div className='flex gap gap-4'>
            <button>
            <Image src={SearchIcon} width={16} height={16} alt="search" />
            </button>
            <button>
            <Image src={CartIcon} width={16} height={16} alt="cart" />
            </button>
            <button onClick={toggleMenu}>
            <Image src={MenuIcon} width={16} height={16} alt="menu" />
            </button>
        </div>
        </Toolbar>
        <Accordion
        expanded={menuOpen}
        disableGutters
        sx={{
            '&:before': {
                display: 'none',
            }
        }}
         className='shadow-none border-t-0'>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
        </AccordionSummary>
        <AccordionDetails className='flex flex-col place-items-center gap-4'>
          {renderNavigationLinks()}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}