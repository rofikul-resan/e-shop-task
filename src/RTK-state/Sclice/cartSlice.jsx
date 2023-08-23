"use client";
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      Swal.fire({
        title: "Product Add To Cart",
        icon: "success",
        timer: 1500,
      });
    },
    deleteToCart: (state, action) => {
      const orderId = action.payload;
      return state.filter((item) => item.orderId !== orderId);
    },
  },
});
export const { addToCart, deleteToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
