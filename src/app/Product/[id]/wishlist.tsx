import { useState } from 'react';
import { Product } from '@/app/Components/ProductsList/types';
import { AppDispatch, RootState } from '@/app/redux/store';
import Dialog from '@mui/material/Dialog/Dialog'
import DialogTitle from '@mui/material/DialogTitle/DialogTitle'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import { addToCart, addToWishList, removeFromCart, removeCartItem, removeFromWishList } from "@/app/redux/slices/dataSlices";
import { ProductCard } from '@/app/Components/ProductsList/types';
import { ProductCardItem } from '@/app/Components/ProductsList/ProductCard';
import CloseIcon from '@mui/icons-material/Close';


interface WishListProps {
    open: boolean;
    close: () => void;
}

export const WishList = ({ open, close }: WishListProps) => {
    const [numberOfItems, setNumberOfItems] = useState<number>(0)
    const { products, product, cart, wishList } = useSelector(
        (state: RootState) => state.data
    );
    const dispatch: AppDispatch = useDispatch();

    if(!product) {
        return null;
    }

    const removeItemFromWishList = (id: number) => {
        dispatch(removeFromWishList(id))
    }
    const reduceNumberOfItems = () => {
        dispatch(removeFromCart(product))
    }

  return (
    <Dialog open={open} onClose={close}>
        <DialogTitle className="flex justify-between place-items-center">
            <p className="font-[700] text-[20px] text-swatches-100">WishList</p>
            <IconButton onClick={close}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <div className="grid grid-cols-3 col-span-4 gap-4 overflow-hidden">
            {wishList.map((item: Product, index: number) => (
                <div key={index} className="flex flex-col place-items-center gap-2 text-center relative">
                        <IconButton onClick={() => removeItemFromWishList(index)} className="absolute top-1 right-1 w-[20px] h-[20px] bg-primary">
                        <CloseIcon className="w-[20px] h-[20px] text-white" />
                    </IconButton>
                    <Image src={item.thumbnail} width={70} height={70}  alt={item.title}/>
                    <p className="text-[14px] font-[700px] text-swatches-100 line-clamp-2">{item.title}</p>
                    <p className="text-[14px] font-[400px] text-secondary">{item.price}</p>
                </div>
            ))}
        </div>
    </Dialog>
  )
}
