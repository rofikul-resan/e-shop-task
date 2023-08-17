"use client"
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Sclice/ProductSlice";
import { userReducer } from "./Sclice/userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
  },
});

export default store;
