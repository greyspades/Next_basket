import { fetchData } from '@/app/redux/slices/dataSlices';
import { RootState } from '@/app/redux/store';
import React, { useEffect, Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from './types'
import { ProductCardItem } from './ProductCard';
import { Button } from '@mui/material';
import { AsyncThunkAction } from '@reduxjs/toolkit';

interface ProductListProps {
  hasPagination: boolean;
}

export const ProducstList = ({hasPagination}: ProductListProps) => {
  const { products, status, error, total } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const [take, setTake] = useState<number>(10)

  useEffect(() => {
    dispatch(fetchData(`https://dummyjson.com/products?limit=${take}&skip=10&select=title,price,thumbnail,discountPercentage,brand`) as any);
  }, [take]);

  const renderProducts = () => {
    if(products) {
      // console.log(products)
      return products?.map((product: ProductCard, index: number) =>(
          <div className='flex justify-center mt-[15px]' key={index}>
            <ProductCardItem product={product} />
          </div>
        ))
    } else {
    console.log("no dana")
    }
  }

  const nextPage = () => {
    setTake((curr) => curr+10)
  }

  return (
    <div>
        <div className='flex flex-col place-items-center h-auto'>
            <h3 className='text-[20px] text-[#737373]'>Featured Products</h3>
            <h3 className='font-[700] text-[24px] sm: text-center'>BESTSELLER PRODUCTS</h3>
            <h3 className='text-[#737373] text-center'>Problems trying to resolve the conflict between</h3>
        </div>
        <div className='grid lg:grid-cols-5 lg: mt-[40px]'>
          {renderProducts()}
        </div>
        {hasPagination && take < total! && (
              <div className="mt-[100px] flex justify-center">
                <Button onClick={nextPage} variant="outlined" className="capitalize border-solid border-1 border-swatches-200 px-[80px] py-[10px]">
            Load More
          </Button>
              </div>
        )}
    </div>
  )
}
