import { current, produce } from "immer";
import React, { Fragment, useEffect, useState } from "react";
import { Product } from "../../Components/ProductsList/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { fetchSingleData } from "@/app/redux/slices/dataSlices";
import heartIcon from "../../../../public/icons/heart2.svg";
import cartIcon from "../../../../public/icons/cart2.svg";
import rightArrowIcon from "../../../../public/icons/arrowright.svg";
import eyeIcon from "../../../../public/icons/eye2.svg";
import {
  Breadcrumbs,
  Button,
  Typography,
  Rating,
  Divider,
  IconButton,
} from "@mui/material";
import { ForwardIcon } from "../forwardIcon";
import Image, { StaticImageData } from "next/image";
import description from "../../../../public/images/description.png";

export const ProductDesciption = () => {

    return (
     <div>
              <Divider className="h-[1px] bg-[#ECECEC]" />
           <div className="flex justify-between mt-[48px]">
           <div className="col-span-1 flex flex-col gap-[30px] w-[513px]">
            <p className="text-[24px] font-[700] text-swatches-100">the quick fox jumps over </p>
            <p className="text-[14px] font-[400] text-secondary">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <div className="pl-[24px] border-l-solid border-l-1 border-l-primary">
            <p className="text-[14px] font-[400] text-secondary">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            </div>
            <p className="text-[14px] font-[400] text-secondary">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>
        <div className="col-span-1">
            <Image src={description}  alt="description"/>
        </div>
           </div>
     </div>
    )
}