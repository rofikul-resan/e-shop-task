"use client";
import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    IsLogged: false,
    userInfo: {},
  },
  reducers: {
    userRegister: (state, action) => {
      state.IsLogged = true;
      state.userInfo = action.payload;
    },
  },
});

export const { userRegister } = userSlice.actions;
export const userReducer = userSlice.reducer;
