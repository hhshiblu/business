"use client"

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cart";
import categoryslice from "./reducer/categoryslice";
import productSlice from "./reducer/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categoryslice,
    product: productSlice,
  },
});

export default store; 
