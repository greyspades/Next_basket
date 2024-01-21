import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import card1 from "../../../../public/images/card1.png";
import clockIcon from "../../../../public/icons/clock.svg";
import commentIcon from "../../../../public/icons/comments.svg";
import rightArrowIcon from "../../../../public/icons/arrowright.svg";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
    image: StaticImageData;
}

export const FeatureCard = ({ image }: FeatureCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image src={image} alt="feature" />
      <CardContent className="p-[25px]">
        <div className="flex flex-row gap-4">
          <span className="text-[12px] font-[400] text-swatches-200">
            Google
          </span>
          <span className="text-[12px] font-[400] text-swatches-100">
            Trending
          </span>
          <span className="text-[12px] font-[400] text-swatches-100">New</span>
        </div>
        <div className="flex flex-col gap-[10px] mt-[10px]">
        <p className="text-swatches-100 text-[20px] font-[400]">
          Loudest à la Madison #1 (L&apos;integral)
        </p>
        <p className="text-swatches-100 text-[14px] font-[400]">
          We focus on ergonomics and meeting you where you work. It&apos;s only a
          keystroke away.
        </p>
        <div className="flex justify-between py-[15px]">
            <span className="flex gap-1">
                <Image src={clockIcon} alt="clock"/>
                <p className="text-secondary font-[400] text-[12px]">22 April 2021</p>
            </span>
            <span className="flex gap-1">
                <Image src={commentIcon} alt="clock"/>
                <p className="text-secondary font-[400] text-[12px]">10 comments</p>
            </span>
        </div>
        </div>
      </CardContent>
      <CardActions className="p-[25px]">
            <span className="flex flex-row gap-2">
                <p className="text-[14px] font-[700] text-secondary">Learn More</p>
                <Image src={rightArrowIcon} alt="right arrow"/>
            </span>
      </CardActions>
    </Card>
  );
};
