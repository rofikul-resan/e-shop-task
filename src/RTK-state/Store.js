"use client";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Sclice/ProductSlice";
import { userReducer } from "./Sclice/userSlice";
import { cartReducer } from "./Sclice/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
