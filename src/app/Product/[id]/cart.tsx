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


interface CartProps {
    open: boolean;
    close: () => void;
}

export const Cart = ({ open, close }: CartProps) => {
    const [numberOfItems, setNumberOfItems] = useState<number>(0)
    const { products, product, cart,  } = useSelector(
        (state: RootState) => state.data
    );
    const dispatch: AppDispatch = useDispatch();

    if(!product) {
        return null;
    }

    const addItemToCart = () => {
        dispatch(addToCart(product))
    }

    const removeItemFromCart = (id: number) => {
        dispatch(removeCartItem(id))
    }
    const reduceNumberOfItems = () => {
        dispatch(removeFromCart(product))
    }

    const totalPrice = cart?.reduce((a, b) => a + b.price, 0);

  return (
    <Dialog open={open} onClose={close}>
        <DialogTitle className="flex justify-between place-items-center">
            {product?.title}
            <IconButton onClick={close}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <div className="grid grid-cols-6 p-8 gap-4">
        <div className="flex flex-col place-items-center col-span-2">
        <Image src={product?.thumbnail ?? ""} width={300} height={350} alt={product!.title} />
        <div className='mt-[40px] flex flex-row place-items-center gap-4'>
            <Button onClick={reduceNumberOfItems} className="capitalize bg-primary text-white">
                -
            </Button>
            <p>{cart.length}</p>
            <Button onClick={addItemToCart} className="capitalize bg-primary text-white">
                +
            </Button>
        </div>
        <div className='flex gao-2 mt-[20px]'>
        <p>Total Price:</p>
        <p className="text-primary">{totalPrice}</p>
        </div>
        </div>

        <div className="grid grid-cols-3 col-span-4 gap-4 overflow-hidden">
            {cart.map((item: Product, index: number) => (
                <div key={index} className="flex flex-col place-items-center gap-2 text-center relative">
                    <IconButton onClick={() => removeItemFromCart(index)} className="absolute top-1 right-1 w-[20px] h-[20px] bg-primary">
                        <CloseIcon className="w-[20px] h-[20px] text-white" />
                    </IconButton>
                    <Image src={item.thumbnail} width={40} height={40}  alt={item.title}/>
                    <p className="text-[14px] font-[700px] text-swatches-100 line-clamp-2">{item.title}</p>
                    <p className="text-[14px] font-[400px] text-secondary">{item.price}</p>
                </div>
            ))}
        </div>
        </div>
    </Dialog>
  )
}
