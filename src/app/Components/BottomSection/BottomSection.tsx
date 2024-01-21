import React from "react";
import bottom from "../../../../public/images/bottom.png";
import Image from "next/image";
import { Button } from "@mui/material";

export const BottomSection = () => {
  return (
    <div className="flex h-[90vh] justify-center relative">
      <div className="absolute md:top-[100px] top-[40px] lg:w-[600px] w-[100%] flex justify-center flex-col gap-[30px] place-items-center text-center">
        <p className="text-[14px] font-[700] text-swatches-200">
          Designing Better Experience
        </p>
        <h4 className="text-[40px] w-[80%] lg:w-[100%] font-[700] text-swatches-100 text-center">
          Problems trying to resolve the conflict between{" "}
        </h4>
        <p className="text-[14px] sm:p-8 text-secondary font-[400] w-[80%] lg:w-[100%]">Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
        <p className="text-primary text-[24px] font-[700]">$16.48</p>
        <Button className="text-[14px] font-[700] px-[40px] py-[15px] bg-swatches-200 text-white h-[52px]">
        ADD YOUR CALL TO ACTION
        </Button>
      </div>
      <Image
        className="w-[100%] lg:object-contain object-cover"
        src={bottom}
        alt="bottom image"
      />
    </div>
  );
};
