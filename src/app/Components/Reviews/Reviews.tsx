import React from "react";
import { Avatar, Rating } from "@mui/material";
import userAvatar from "../../../../public/images/useravatar.png";
import grid1 from "../../../../public/images/grid1.png";
import grid2 from "../../../../public/images/grid2.png";
import grid3 from "../../../../public/images/grid3.png";
import grid4 from "../../../../public/images/grid4.png";
import grid5 from "../../../../public/images/grid5.png";
import grid6 from "../../../../public/images/grid6.png";
import grid7 from "../../../../public/images/grid7.png";
import grid8 from "../../../../public/images/grid8.png";
import grid9 from "../../../../public/images/grid9.png";
import Image, { StaticImageData } from "next/image";


export const Reviews = () => {

    const images: StaticImageData[] = [
        grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8,grid9
    ]

    const displayImages = () => {

        return images.map((image: StaticImageData, index: number) => (
            <div key={index}>
                <Image src={image} alt='grid image'/>
            </div>
        ))
    }
  return (
    <div className="flex lg:flex-row flex-col place-items-center justify-between lg:mt-[-80px]">
      <div className="flex flex-col gap-[20px] place-items-center lg:w-[442px] text-center">
        <p className="text-[24px] text-swatches-100 font-[700]">
          What they say about us
        </p>
        <Avatar src={userAvatar.src} sx={{ width: 90, height: 90 }} />
        <Rating name="simple-controlled" value={4} />
        <p className="text-secondary text-[14px] font-[700]">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
        <div>
          <p className="text-swatches-200 text-[14px] font-[700]">
            Regina Miles
          </p>
          <p className="text-swatches-100 text-[14px] font-[700]">Designer</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:w-[442px]">
        {displayImages()}
      </div>
    </div>
  );
};
