import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
