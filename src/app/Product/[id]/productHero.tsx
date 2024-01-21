import { current, produce } from "immer";
import React, { Fragment, useEffect, useState } from "react";
import { Product } from "../../Components/ProductsList/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { fetchSingleData } from "@/app/redux/slices/dataSlices";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
import { Cart } from "./cart";
import { WishList } from "./wishlist";
import { addToWishList } from "@/app/redux/slices/dataSlices";


interface ProductHeroProps {
  id: string;
  isMobile: boolean;
}

const leftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="45"
    viewBox="0 0 24 45"
    fill="none"
  >
    <g clip-path="url(#clip0_541_596)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.4992 44.3019C23.3409 44.4597 23.1528 44.585 22.9457 44.6704C22.7386 44.7558 22.5166 44.7998 22.2924 44.7998C22.0682 44.7998 21.8462 44.7558 21.6391 44.6704C21.432 44.5849 21.2439 44.4597 21.0856 44.3019L0.631046 23.9647C0.472307 23.8073 0.346367 23.6203 0.260435 23.4144C0.174505 23.2085 0.130272 22.9878 0.130272 22.7649C0.130272 22.5419 0.174505 22.3212 0.260435 22.1153C0.346367 21.9094 0.472307 21.7224 0.631046 21.565L21.0856 1.2278C21.4057 0.909569 21.8398 0.730789 22.2924 0.730789C22.7451 0.730789 23.1792 0.909569 23.4992 1.2278C23.8193 1.54603 23.9991 1.97765 23.9991 2.42769C23.9991 2.87774 23.8193 3.30935 23.4992 3.62759L4.24809 22.7649L23.4992 41.9021C23.658 42.0595 23.7839 42.2466 23.8698 42.4525C23.9558 42.6584 24 42.8791 24 43.102C24 43.3249 23.9558 43.5457 23.8698 43.7516C23.7839 43.9575 23.658 44.1445 23.4992 44.3019Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_541_596">
        <rect
          width="24"
          height="44.4706"
          fill="white"
          transform="translate(24 45) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
);

const rightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="45"
    viewBox="0 0 24 45"
    fill="none"
  >
    <g clip-path="url(#clip0_541_593)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.565959 0.698096C0.724296 0.540269 0.912395 0.41505 1.11948 0.329612C1.32657 0.244174 1.54857 0.200195 1.77278 0.200195C1.99698 0.200195 2.21899 0.244174 2.42607 0.329612C2.63316 0.41505 2.82126 0.540269 2.9796 0.698096L23.4341 21.0353C23.5929 21.1927 23.7188 21.3797 23.8048 21.5856C23.8907 21.7915 23.9349 22.0122 23.9349 22.2351C23.9349 22.4581 23.8907 22.6788 23.8048 22.8847C23.7188 23.0906 23.5929 23.2776 23.4341 23.435L2.9796 43.7722C2.65953 44.0904 2.22542 44.2692 1.77278 44.2692C1.32013 44.2692 0.886027 44.0904 0.565959 43.7722C0.245891 43.454 0.066078 43.0224 0.066078 42.5723C0.066078 42.1223 0.245891 41.6906 0.565959 41.3724L19.8171 22.2351L0.565959 3.09788C0.407221 2.94045 0.281279 2.75343 0.195347 2.54754C0.109416 2.34164 0.0651855 2.12091 0.0651855 1.89799C0.0651855 1.67507 0.109416 1.45434 0.195347 1.24844C0.281279 1.04254 0.407221 0.855525 0.565959 0.698096Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_541_593">
        <rect width="24" height="44.4706" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ProductHero = ({ id, isMobile }: ProductHeroProps) => {
  const { products, product } = useSelector(
    (state: RootState) => state.data
  );
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [openCart, setOpenCart] = useState<boolean>(false)
  const [openWishlist, setOpenWishList] = useState<boolean>(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleData(`https://dummyjson.com/products/${id}`) as any);
  }, []);

  const nextSlide = () => {
    if (imageIndex < product!.images.length) {
      setImageIndex((current) => ++current);
    }
  };

  const prevSlide = () => {
    if (imageIndex > 0) {
      setImageIndex((current) => --current);
    }
  };

  const toggleCart = () => {
    setOpenCart((current) => !current);
  }

  const toggleWishlist = () => {
    setOpenWishList((current) => !current);
  }

  const addProductToWishList = () => {
    dispatch(addToWishList(product))
  }

  return (
    <div className="bg-white">
              <Cart open={openCart} close={toggleCart}/>
              <WishList open={openWishlist} close={toggleWishlist}/>
          <div className="bg-[#FAFAFA] lg:px-[195px] pb-[48px]">
      <div className="flex gap-4 place-items-center py-[25px]">
        <span className="font-[700] text-[14px]">Home</span>
        <ForwardIcon />
        <span className="text-[#BDBDBD] font-[700] text-[14px]">Shop</span>
      </div>
      <div className="grid lg:grid-cols-2">
          <div>
          <div className="relative col-span-1">
          <button
            onClick={prevSlide}
            className="absolute bottom-[147px] lg:left-[43px] left-[10px]"
          >
            {leftArrow()}
          </button>
          <Image
            src={product?.images[imageIndex] as string}
            width={506}
            height={450}
            className="grid col-span-1"
            alt="product"
          />
          <Button
            onClick={nextSlide}
            className="absolute bottom-[147px] lg:left-[420px] right-[5px]"
          >
            {rightArrow()}
          </Button>
        </div>
        <div className="mt-[20px] flex gap-[20px] sm:p-4 md:p-0">
              {
                isMobile ?     product?.images.slice(0, 2).map((image: string, index: number) => (
                  <div className="relative w-[100px] h-[75px]" key={index}>
                    <Image src={image} fill className="object-cover"  alt="product image"/>
                  </div> 
                )) :     product?.images.map((image: string, index: number) => (
                  <div className="relative w-[100px] h-[75px]" key={index}>
                    <Image src={image} fill className="object-cover"  alt="product image"/>
                  </div> 
                ))
          }
          </div>
          </div>
        <div className="col-span-1">
        <div className="flex flex-col gap-[12px] mt-[40px] lg:mt-0 sm:px-8 lg:px-0">
          <p className="text-[20px] font-[400]">{product?.title}</p>
          <div className="flex place-items-center gap-2">
            <Rating value={product?.rating} />{" "}
            <p className="text-[14px] font-[700] text-secondary">
              10 Reviews
            </p>
          </div>
          <p className="text-[24px] text-swatches-100 font-[700]">
            ${product?.price}
          </p>
          <div className="flex place-items-center gap-2">
            <p className="text-[14px] font-[700] text-secondary">
              Availability :{" "}
            </p>
            <p className="text-[14px] font-[700] text-swatches-200">
              In Stock
            </p>
          </div>
        </div>
          <Divider
            variant={isMobile ? "middle" : "fullWidth"}
            className="h-[1px] bg-[#BDBDBD] mt-[120px]"
          />
          <div className="flex place-items-center gap-4 mt-[30px] sm:p-4">
            <div className="bg-[#23A6F0] w-[30px] h-[30px] rounded-full"></div>
            <div className="bg-[#2DC071] w-[30px] h-[30px] rounded-full"></div>
            <div className="bg-[#E77C40] w-[30px] h-[30px] rounded-full"></div>
            <div className="bg-[#252B42] w-[30px] h-[30px] rounded-full"></div>
          </div>
          <div className="mt-[67px] flex place-items-center gap-4">
            <Button className="bg-swatches-200 lg:px-[20px] lg:py-[10px] text-white capitalize">
              Select Options
            </Button>
            <IconButton onClick={addProductToWishList} className="border-solid border-[1px] border-[#E8E8E8] p-4 bg-white">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton onClick={toggleCart} className="border-solid border-[1px] border-[#E8E8E8] p-4 bg-white">
                <Image src={cartIcon} alt="icon" />
              </IconButton>
              <IconButton onClick={toggleWishlist} className="border-solid border-[1px] border-[#E8E8E8] p-4 bg-white">
                <Image src={eyeIcon} alt="icon" />
              </IconButton>
          </div>
        </div>
      </div>
    </div>
      {!isMobile && (
        <div className="flex justify-center place-items-center py-[28px] px-[304px] gap-[48px]">
        <p className="text-[14px] text-secondary font-[600]">Description</p>
        <p className="text-[14px] text-secondary font-[700]">Additional Information</p>
        <p className="text-[14px] text-secondary font-[700]">Reviews<span className="text-primary">(0)</span></p>
      </div>
      )}
    </div>
  );
};
