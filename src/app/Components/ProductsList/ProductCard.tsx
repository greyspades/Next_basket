import React from "react";
import PropTypes from "prop-types";
import { fetchData } from "@/app/redux/slices/dataSlices";
import { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "./types";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: ProductCard;
}

export const ProductCardItem = ({ product }: ProductProps) => {
  return (
    <Link href={`/Product/${product.id}`}>
      <div className="w-[183px] h-[238px] flex justify-center place-items-center align-middle">
        <Image
          src={product.thumbnail}
          objectFit="cover"
          layout="cover"
          width="183"
          height="283"
          alt="/product"
          loading="lazy"
        />
      </div>
      <p className="text-[16px] font-[700] leading-[24px] truncate w-[150px] mt-[16px] text-center">{product.title}</p>
      <p className="text-[14px] font-[700] leading-[24px] text-[#737373] my-[10px] text-center">{product.brand}</p>
      <div className="flex justify-center place-items-center gap-2"><p className="text-[#BDBDBD] text-[16px] font-[700]">${product.price}</p><p className="text-[#23856D] text-[16px] font-[700]">${product.discountPercentage}</p></div>
    </Link>
  );
};
