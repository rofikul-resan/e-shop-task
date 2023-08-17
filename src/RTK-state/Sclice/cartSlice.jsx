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
  },
});
export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
