import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const res = await axios("/product.json");
  return res.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => {
      const data = action.payload;
      data.forEach((product) => state.push(product));
    },
  },
});

export const productReducer = productSlice.reducer;
