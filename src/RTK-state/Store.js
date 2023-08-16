import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Sclice/ProductSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
