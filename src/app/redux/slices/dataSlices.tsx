'use client'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, JSONResponse } from '@/app/Components/ProductsList/types';
import { Cart } from '@/app/types';

interface DataState {
  products: Product[];
  product: Product | null;
  cart: Product[];
  wishList: Product[];
  skip: number | null;
  total: number | null;
  limit: number | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  products: [],
  product: null,
  cart: [],
  wishList: [],
  skip: null,
  total: null,
  limit: null,
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async (apiUrl: string) => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const fetchSingleData = createAsyncThunk('data/fetchSingleData', async (apiUrl: string) => {
  const response = await axios.get(apiUrl);
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.slice(0, state.cart.length - 1)
    },
    removeCartItem: (state, action) => {
      state.cart = [...state.cart.slice(0, action.payload), ...state.cart.slice(action.payload + 1)]
    },
    addToWishList: (state, action) => {

      state.wishList = [...state.wishList, action.payload]
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.cart = [...state.cart.slice(0, action.payload), ...state.cart.slice(action.payload + 1)]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<JSONResponse>) => {
        state.status = 'succeeded';
        const { products, skip, limit, total } = action.payload;
        state.products = products;
        state.limit = limit;
        state.skip = skip;
        state.total = total;

      })
      .addCase(fetchData.rejected, (state, action) => {
        const { requestId } = action.meta
        state.status = 'failed';
        state.error = "An error occured";
      })
      .addCase(fetchSingleData.rejected, (state, action) => {
        const { requestId } = action.meta
        console.log('failed')
        state.status = 'failed';
        state.error = "An error occured";
      })
      .addCase(fetchSingleData.pending, (state, action) => {
        const { requestId } = action.meta
        state.status = 'failed';
        state.error = "An error occured";
        console.log('pending')
      })
      .addCase(fetchSingleData.fulfilled, (state, action: PayloadAction<Product>) => {
        state.status = 'succeeded';
        state.product = action.payload;

      })
  },
});

export const { addToCart, removeFromCart, removeCartItem, addToWishList, removeFromWishList } = dataSlice.actions;

export default dataSlice.reducer;
