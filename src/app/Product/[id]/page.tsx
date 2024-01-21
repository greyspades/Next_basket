'use client'
import { useState, useEffect, Fragment } from "react";
import { MobileNavbar } from "@/app/Components/Shared/mobileNavbar";
import { DesktopNavbar } from "@/app/Components/Shared/desktopNavbar";
import { TopRow } from "@/app/Components/Shared/topRow";
import Link from "next/link";
import { ForwardIcon } from "../forwardIcon";
import { ProductHero } from "./productHero";
import { ProductDesciption } from "./productDescription";
import { ProducstList } from "@/app/Components/ProductsList/ProducstList";
import redditIcon from "../../../../public/icons/reddit.svg";
import liftIcon from "../../../../public/icons/lift.svg";
import hatIcon from "../../../../public/icons/hat.svg";
import hooliIcon from "../../../../public/icons/hooli.svg";
import stripeIcon from "../../../../public/icons/stripe.svg";
import awsIcon from "../../../../public/icons/aws.svg";
import Image, { StaticImageData } from "next/image";
import { Footer } from "@/app/Components/Footer/Footer";
import { Cart } from "./cart";


export default function ProductsPage({params}:any) {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Set the initial value
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className="bg-white h-screen text-black">
            {!isMobile && (
        <TopRow />
      )}
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <div>
      <div className="px-4 lg:px-0 bg-[#FAFAFA]">
      <ProductHero isMobile={isMobile} id={params.id}  />
      </div>
      </div>
      {!isMobile && (
        <div className="px-[192px] py-[60px] bg-white">
        <ProductDesciption />
      </div>
      )}
      <div className="bg-[#FAFAFA] lg:px-[195px] px-8 py-8 lg:py-[60px]">
          <ProducstList hasPagination={false} />
          <div className="flex flex-col lg:flex-row justify-between place-items-center mt-[100px]">
          {[hooliIcon, liftIcon, hatIcon, stripeIcon, awsIcon, redditIcon].map((icon: StaticImageData, index: number) => (
          <Fragment key={index}>
            <Image src={icon} alt="social media"/>
          </Fragment> 
        ))}
          </div>
      </div>
          <div className="bg-white">
          <Footer variant="secondary" />
          </div>
      </div>
    )
}